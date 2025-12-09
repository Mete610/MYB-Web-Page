# -*- coding: utf-8 -*-
import sys
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.header import Header

# Force stdout to utf-8 to see print output correctly
if hasattr(sys.stdout, 'reconfigure'):
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except:
        pass

print("--- DEBUG START ---")

try:
    # Simulate data with Turkish characters
    bina_adi = "Mete'nin Binası" # Has 'ı'
    isim_soyisim = "Mete Yazıcı"   # Has 'ı'
    
    print(f"Simulated Data: {bina_adi}, {isim_soyisim}")
    
    subject_text = f"Yeni Teklif Istegi: {bina_adi}"
    print(f"Subject Text: {subject_text}")

    body_text = f"""
    Yeni bir teklif istegi alindi:
    Bina Adi: {bina_adi}
    """
    
    print("Creating Message Object...")
    msg = MIMEMultipart()
    msg['From'] = "sender@example.com"
    msg['To'] = "recipient@example.com"
    
    print("Creating Header...")
    # This is often where encoding fails if not handled
    h = Header(subject_text, 'utf-8')
    msg['Subject'] = h
    print(f"Header Encoded: {h.encode()}")
    
    print("Creating MIMEText...")
    # This handles body encoding
    mt = MIMEText(body_text, 'plain', 'utf-8')
    msg.attach(mt)
    print("MIMEText Attached")

    print("Converting to Bytes...")
    # This is what we send to server
    msg_bytes = msg.as_bytes()
    print("Bytes conversion successful.")
    
    # Printing a safe repr of bytes to ensure it contains what we expect
    print(f"Bytes len: {len(msg_bytes)}")
    
    print("--- DEBUG SUCCESS ---")
    print("Email object created and encoded successfully. The error is likely in the actual Sending or Logging in the main app.")

except Exception as e:
    print("\n!!! DEBUG FAILED !!!")
    print(f"Error Type: {type(e)}")
    print(f"Error Message: {e}")
    import traceback
    traceback.print_exc()
