import '../App.css';
import hakkimizdaResim from '../assets/hakkimizdaresim.png';

function Hakkimizda() {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img src={hakkimizdaResim} alt="Hakkımızda" className="about-image" />
        </div>
        <div className="about-content">
          <h4 className="about-subtitle">Hakkımızda</h4>
          <h2 className="about-title">
            Evinizin İhtiyaçları için Çoklu Hizmet Sağlayan Profesyonel Yönetim Ekibi
          </h2>
          <p className="about-text">
            20 yılı aşkın süredir profesyonel yönetim ekibimiz, 1000'i aşkın
            konutta site sakinlerine ve kat maliklerine yardımcı olarak
            hizmet vermekte. Çok problemli veya çözülemez bile denilen birçok
            sorunu çözüme kavuşturuyoruz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hakkimizda;