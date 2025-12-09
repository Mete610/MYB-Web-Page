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

            <div className="services-grid">
                {services.map((service) => (
                    <Link to={`/hizmet/${service.id}`} key={service.id} className="service-card-link">
                        <motion.div
                            className="service-card"
                            layoutId={`service-${service.id}`}
                            whileHover={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="service-card-icon-wrapper">
                                <motion.span className="service-card-icon" layoutId={`icon-${service.id}`}>{service.icon}</motion.span>
                            </div>
                            <div className="service-card-content">
                                <motion.h4 className="service-card-title" layoutId={`title-${service.id}`}>{service.title}</motion.h4>
                                <p className="service-card-desc">{service.shortDescription}</p>
                                <span className="service-card-arrow">Detaylar &rarr;</span>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Hizmetlerimiz;
