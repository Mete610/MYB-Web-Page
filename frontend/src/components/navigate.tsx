import '../App.css';

function Navigate() {
  return (
    <div className="hero-header-wrapper">
      <nav className="navbar">
        <div className="nav-links">
          <a href="#anasayfa" className="nav-btn">Ana Sayfa</a>
          <a href="#hakkimizda" className="nav-btn">Hakkımızda</a>
          <a href="#hizmetlerimiz" className="nav-btn">Hizmetler</a>
          <a href="#iletisim" className="nav-btn">İletişim</a>
        </div>
        <a href="#teklif-al" className="quote-btn">TEKLİF AL</a>
      </nav>

      <div className="hero-content">
        <h1 className="hero-title">
          Yaşam Alanlarınız İçin<br />
          Profesyonel Yönetim
        </h1>
        <p className="hero-subtitle">Professional Management for your living areas</p>
      </div>
    </div>
  );
}

export default Navigate;