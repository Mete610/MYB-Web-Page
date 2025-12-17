import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../App.css';

import web1 from '../assets/web1.JPG';
import web2 from '../assets/web2.jpeg';
import web3 from '../assets/web3.jpeg';
import web4 from '../assets/web4.JPG';
const sliderImages = [
    { id: 1, color: '#e9ecef', URL: web1 },
    { id: 2, color: '#dee2e6', URL: web2 },
    { id: 3, color: '#ced4da', URL: web3 },
    { id: 4, color: '#ced4da', URL: web4 },
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
                        <span className="info-icon">📞</span>
                        <p><strong>Telefon:</strong> +90 533 714 40 46</p>

                    </div>
                    <div className="info-item">
                        <span className="info-icon">✉️</span>
                        <p><strong>E-posta:</strong> mete.yazici.myb@gmail.com</p>
                    </div>
                </div>

                {/* Dynamic Content Slider (Referanslar/Projeler) */}
                <div className="contact-slider-wrapper">
                    <h4 className="slider-title">Emlak Konut Yarışmamız ve TakeOff Start-up Sunumumuz</h4>
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
                                    <img src={sliderImages[currentIndex].URL} alt="" />
                                </div>
                            </motion.div>
                        </AnimatePresence>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default Iletisim;
