import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/servicesData';
import '../App.css';

function ServiceDetail() {
    const { id } = useParams<{ id: string }>();
    const service = services.find(s => s.id === id);

    if (!service) {
        return (
            <div className="service-detail-page">
                <div className="service-not-found">
                    <h2>Hizmet Bulunamadı</h2>
                    <Link to="/" className="back-btn">Ana Sayfaya Dön</Link>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            className="service-detail-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="service-detail-header"
                layoutId={`service-${service.id}`}
            >
                <div className="service-detail-container">
                    <Link to="/" className="back-link">← Ana Sayfa</Link>
                    <motion.div className="service-icon-large" layoutId={`icon-${service.id}`}>{service.icon}</motion.div>
                    <motion.h1 className="service-title-large" layoutId={`title-${service.id}`}>{service.title}</motion.h1>
                </div>
            </motion.div>

            <motion.div
                className="service-content-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <div className="service-description-card">
                    <h2>Hizmet Detayları</h2>
                    <p>{service.fullDescription}</p>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default ServiceDetail;
