import sys
import smtplib
import traceback
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.header import Header
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

# SECURITY: Secret key for session management (if used) and other security features
app.secret_key = os.getenv("SECRET_KEY", "default-dev-key")

# SECURITY: CORS restriction
# SECURITY: CORS restriction
# Allow specific origins for production and development
allowed_origins = [
    "https://www.myb.com.tr",
    "https://myb.com.tr",
    "https://myb-web-page.vercel.app"
]

# Include FRONTEND_URL from env if set
env_frontend = os.getenv("FRONTEND_URL")
if env_frontend:
    allowed_origins.append(env_frontend)

CORS(app, resources={r"/api/*": {
    "origins": allowed_origins,
    "methods": ["GET", "POST", "OPTIONS"],
    "allow_headers": ["Content-Type", "Authorization"],
    "supports_credentials": True
}})

# SECURITY: Rate Limiting
# Limits requests to 5 per minute per IP address to prevent spam.
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["200 per day", "50 per hour"],
    storage_uri="memory://"
)

# Configuration from Environment Variables
SMTP_SERVER = os.getenv("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.getenv("SMTP_PORT", 587))
SENDER_EMAIL = os.getenv("SENDER_EMAIL")
SENDER_PASSWORD = os.getenv("SENDER_PASSWORD")
RECIPIENT_EMAIL = os.getenv("RECIPIENT_EMAIL")

@app.route('/api/send-quote', methods=['POST'])
@limiter.limit("5 per minute")  # Strict limit for email sending endpoint
def send_quote():
    current_step = "initializing"
    try:
        # Security Check: Ensure environment variables are loaded
        if not SENDER_EMAIL or not SENDER_PASSWORD:
            raise ValueError("Server misconfiguration: Email credentials missing.")

        data = request.json or {}
        
        # Data extraction
        bina_adi = str(data.get('binaAdi', '') or '')
        isim_soyisim = str(data.get('isimSoyisim', '') or '')
        adres = str(data.get('adres', '') or '')
        bagimsiz_bolum = str(data.get('bagimsizBolum', '') or '')
        telefon = str(data.get('telefon', '') or '')
        
        # Prepare Email
        subject = f"Yeni Teklif: {bina_adi}"
        body = f"""
        Bilgiler:
        Isim: {isim_soyisim}
        Bina: {bina_adi}
        Adres: {adres}
        Bolum: {bagimsiz_bolum}
        Tel: {telefon}
        """

        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = RECIPIENT_EMAIL
        
        # Explicit Header Encoding
        msg['Subject'] = Header(subject, 'utf-8')
        msg.attach(MIMEText(body, 'plain', 'utf-8'))
        
        raw_bytes = msg.as_bytes()
        
        current_step = "smtp_connect"
        timeout_val = 30 # Connection timeout in seconds
        
        if SMTP_PORT == 465:
            server = smtplib.SMTP_SSL(SMTP_SERVER, SMTP_PORT, timeout=timeout_val)
        else:
            server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT, timeout=timeout_val)
            current_step = "smtp_starttls"
            server.starttls()
        
        current_step = "smtp_login"
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        
        current_step = "smtp_send"
        server.sendmail(SENDER_EMAIL, RECIPIENT_EMAIL, raw_bytes)
        server.quit()
        
        return jsonify({"success": True, "message": "Talebiniz başarıyla alındı!"}), 200

    except Exception as e:
        # In production, you might want to log this to a file instead of printing
        print(f"Error in step {current_step}: {e}")
        traceback.print_exc()
        
        # Security: Do not expose raw traceback to user in production
        # But for now, we return a simple error message
        return jsonify({
            "success": False, 
            "message": f"Hata oluştu ({current_step}): {str(e)}", # Temporary detailed error for debugging
            "error_code": current_step 
        }), 500

@app.route('/', methods=['GET'])
def index():
    return "Backend is running correctly.", 200

@app.route('/api/test-connection', methods=['GET'])
def test_connection():
    import socket
    results = {}
    
    # 1. DNS Resolution Test
    try:
        results["dns_resolution"] = {}
        addr_info = socket.getaddrinfo("smtp.gmail.com", 587)
        for family, type, proto, canonname, sockaddr in addr_info:
            fam_str = "IPv6" if family == socket.AF_INET6 else "IPv4"
            results["dns_resolution"][fam_str] = sockaddr[0]
    except Exception as e:
        results["dns_resolution"]["error"] = str(e)

    # 2. Socket Connect Test (Low level)
    try:
        target_ip = results.get("dns_resolution", {}).get("IPv4")
        if target_ip:
            s = socket.create_connection((target_ip, 587), timeout=5)
            results["socket_ipv4_587"] = "SUCCESS"
            s.close()
        else:
            results["socket_ipv4_587"] = "SKIPPED (No IPv4)"
    except Exception as e:
        results["socket_ipv4_587"] = f"FAILED: {str(e)}"

    # 3. SMTP Test with forced IPv4 if available
    try:
        # Use the IP directly if we found one, otherwise hostname
        host_to_use = results.get("dns_resolution", {}).get("IPv4") or SMTP_SERVER
        results["smtp_ipv4_forced_587"] = f"attempting on {host_to_use}..."
        
        server = smtplib.SMTP(host_to_use, 587, timeout=10)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.quit()
        results["smtp_ipv4_forced_587"] = "SUCCESS"
    except Exception as e:
        results["smtp_ipv4_forced_587"] = f"FAILED: {str(e)}"

    results["original_error"] = "[Errno 101] Network is unreachable"
    
    return jsonify(results), 200

if __name__ == '__main__':
    # Disable debug mode for safety if running directly, or use env var
    debug_mode = os.getenv("FLASK_DEBUG", "False").lower() == "true"
    app.run(host='0.0.0.0', debug=debug_mode, port=5000)
