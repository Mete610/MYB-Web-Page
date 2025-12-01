import '../App.css';

function TeklifAl() {
    return (
        <div className="quote-section" id="teklif-al">
            <div className="quote-container">
                <h2 className="quote-title">Teklif Al</h2>
                <p className="quote-description">
                    Profesyonel yönetim hizmetlerimiz için hemen teklif alın.
                </p>

                <form className="quote-form">
                    <div className="form-group">
                        <label htmlFor="binaAdi">Bina Adı</label>
                        <input type="text" id="binaAdi" name="binaAdi" placeholder="Bina Adı" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="adres">Adres</label>
                        <input type="text" id="adres" name="adres" placeholder="Adres" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="bagimsizBolum">Bağımsız Daire Bölümü</label>
                        <input type="text" id="bagimsizBolum" name="bagimsizBolum" placeholder="Daire Sayısı / Bölüm" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="isimSoyisim">İsim Soyisim</label>
                        <input type="text" id="isimSoyisim" name="isimSoyisim" placeholder="Adınız Soyadınız" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="telefon">Telefon No</label>
                        <input type="tel" id="telefon" name="telefon" placeholder="05XX XXX XX XX" required />
                    </div>

                    <button type="submit" className="submit-btn">Teklif İste</button>
                </form>
            </div>
        </div>
    );
}

export default TeklifAl;
