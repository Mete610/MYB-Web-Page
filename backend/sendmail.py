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

CORS(app, resources={r"/api/*": {"origins": allowed_origins}})

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
        server = smtplib.SMTP(SMTP_SERVER, SMTP_PORT, local_hostname='localhost')
        
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
            "message": "İşlem sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
            "error_code": current_step 
        }), 500

if __name__ == '__main__':
    # Disable debug mode for safety if running directly, or use env var
    debug_mode = os.getenv("FLASK_DEBUG", "False").lower() == "true"
    app.run(host='0.0.0.0', debug=debug_mode, port=5000)
