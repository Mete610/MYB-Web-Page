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
            MYB olarak, şeffaf ve profesyonel yönetim anlayışıyla 3 yıl önce çıktığımız yolda, bugün 500’e yakın daireye kesintisiz hizmet vermenin gururunu yaşıyoruz.

            Amacımız sadece binaları yönetmek değil, yaşam kalitesini artırmaktır. Hukuki, mali ve teknik tüm süreçleri uzman kadromuzla üstleniyor; mülkünüze değer katarken operasyonel yükü omuzlarınızdan alıyoruz.

            Tecrübemiz ve çözüm odaklı yaklaşımımızla, siz evinizin keyfini sürerken biz tüm detayları yönetiyoruz.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hakkimizda;