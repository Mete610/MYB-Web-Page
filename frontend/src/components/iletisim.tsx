import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../App.css';

// Placeholder images - Kullanıcı buraya kendi resimlerini import edip ekleyecek
// import project1 from '../assets/project1.jpg';
const sliderImages = [
    { id: 1, color: '#e9ecef', text: 'Proje 1 Görseli Gelecek' },
    { id: 2, color: '#dee2e6', text: 'Proje 2 Görseli Gelecek' },
    { id: 3, color: '#ced4da', text: 'Proje 3 Görseli Gelecek' }
];

function Iletisim() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-slide logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
        }, 3000); // 3 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="contact-section" id="iletisim">
            <div className="contact-container">
                <div className="contact-info">
                    <h3 className="contact-title">İletişim</h3>
                    <div className="info-item">
                        <span className="info-icon">📍</span>
                        <p><strong>Adres:</strong> Örnek Mahallesi, Örnek Caddesi No:123, İstanbul</p>
                    </div>
                    <div className="info-item">
                        <span className="info-icon">📞</span>
                        <p><strong>Telefon:</strong> +90 212 123 45 67</p>
                    </div>
                    <div className="info-item">
                        <span className="info-icon">✉️</span>
                        <p><strong>E-posta:</strong> info@mybyonetim.com</p>
                    </div>
                </div>

                {/* Dynamic Content Slider (Referanslar/Projeler) */}
                <div className="contact-slider-wrapper">
                    <h4 className="slider-title">Çalıştığımız Yerler</h4>
                    <div className="slider-container">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                className="slider-card"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                style={{ backgroundColor: sliderImages[currentIndex].color }}
                            >
                                {/* Resim eklendiğinde burası <img src={...} /> olacak */}
                                <div className="placeholder-content">
                                    {sliderImages[currentIndex].text}
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <div className="slider-dots">
                            {sliderImages.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`dot ${idx === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(idx)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Iletisim;
