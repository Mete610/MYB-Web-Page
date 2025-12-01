import '../App.css';

function Iletisim() {
    return (
        <div className="contact-section" id="iletisim">
            <div className="contact-container">
                <div className="contact-info">
                    <h3 className="contact-title">İletişim</h3>
                    <p><strong>Adres:</strong> Örnek Mahallesi, Örnek Caddesi No:123, İstanbul</p>
                    <p><strong>Telefon:</strong> +90 212 123 45 67</p>
                    <p><strong>E-posta:</strong> info@mybyonetim.com</p>
                </div>
                {/* Placeholder for Map or other content */}
                <div className="contact-map">
                    <div className="map-placeholder">Harita Alanı</div>
                </div>
            </div>
        </div>
    );
}

export default Iletisim;
