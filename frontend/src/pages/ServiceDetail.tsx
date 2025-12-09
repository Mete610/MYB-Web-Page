import { useParams, Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { services } from '../data/servicesData';
import '../App.css';

function ServiceDetail() {
    const { id } = useParams<{ id: string }>();
    const service = services.find(s => s.id === id);
    const { pathname } = useLocation();

    // Scroll to top on route change
    if (typeof window !== 'undefined') {
        window.scrollTo(0, 0);
    }

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
        <div className="service-detail-page professional-layout">

            {/* Breadcrumb Header */}
            <div className="pro-header">
                <div className="pro-container">
                    <Link to="/" className="pro-back-link">
                        <span className="back-arrow-small">←</span> Ana Sayfaya Dön
                    </Link>
                    <h1 className="pro-page-title">{service.title}</h1>
                    <div className="pro-breadcrumbs">
                        <Link to="/">Ana Sayfa</Link>
                        <span className="separator">/</span>
                        <span className="current">Hizmetlerimiz</span>
                        <span className="separator">/</span>
                        <span className="current">{service.title}</span>
                    </div>
                </div>
            </div>

            <div className="pro-container main-content-grid">

                {/* Sidebar Navigation */}
                <aside className="pro-sidebar">
                    <div className="sidebar-widget">
                        <h3>Hizmetlerimiz</h3>
                        <ul className="service-nav-list">
                            {services.map((s) => (
                                <li key={s.id} className={s.id === id ? 'active' : ''}>
                                    <Link to={`/hizmet/${s.id}`}>
                                        <span className="nav-arrow">›</span> {s.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>


                </aside>

                {/* Main Content Area */}
                <motion.div
                    className="pro-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    key={pathname} // Re-animate on route change
                >
                    <div className="content-hero-icon">
                        {service.icon}
                    </div>

                    <h2 className="content-title">{service.title}</h2>
                    <div className="content-divider"></div>

                    <div className="content-text-body">
                        {service.fullDescription}
                    </div>


                </motion.div>

            </div>
        </div>
    );
}

export default ServiceDetail;
