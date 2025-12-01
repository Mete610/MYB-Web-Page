import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/servicesData';
import '../App.css';

function Hizmetlerimiz() {
    return (
        <div className="services-container">
            <div className="services-header">
                <h3 className="services-subtitle">Hizmetlerimiz</h3>
                <h2 className="services-title">Size Nasıl Yardımcı Olabiliriz?</h2>
                <p className="services-description">Profesyonel yönetim çözümlerimizle yanınızdayız.</p>
            </div>

            <div className="hex-grid">
                {services.map((service) => (
                    <div key={service.id} className="hex-wrapper">
                        <Link to={`/hizmet/${service.id}`} className="hex-link">
                            <motion.div
                                className="hex"
                                layoutId={`service-${service.id}`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="hex-content">
                                    <motion.span className="hex-icon" layoutId={`icon-${service.id}`}>{service.icon}</motion.span>
                                    <motion.span className="hex-title" layoutId={`title-${service.id}`}>{service.title}</motion.span>
                                </div>
                            </motion.div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hizmetlerimiz;
