import { useState } from 'react';
import '../App.css';

function TeklifAl() {
    const [formData, setFormData] = useState({
        binaAdi: '',
        adres: '',
        bagimsizBolum: '',
        isimSoyisim: '',
        telefon: ''
    });
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form gönderiliyor...");
        setLoading(true);
        setStatus({ type: null, message: '' });

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';
            const response = await fetch(`${apiUrl}/api/send-quote`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setStatus({ type: 'success', message: 'Talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.' });
                setFormData({
                    binaAdi: '',
                    adres: '',
                    bagimsizBolum: '',
                    isimSoyisim: '',
                    telefon: ''
                });
            } else {
                setStatus({ type: 'error', message: result.message || 'Bir hata oluştu. Lütfen tekrar deneyin.' });
            }
        } catch (error) {
            console.error('Fetch hatası:', error);
            setStatus({ type: 'error', message: 'Sunucuya erişilemedi. Lütfen internet bağlantınızı kontrol edin.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="quote-section" id="teklif-al">
            <div className="quote-container">
                <h2 className="quote-title">Yönetim Teklifi Talep Edin</h2>
                <p className="quote-description">
                    Apartman ve site yönetimi ihtiyaçlarınız için aşağıdaki formu doldurun.
                    Uzman ekibimiz yapınıza özel bir yönetim planı ve bütçe çalışması hazırlayarak size dönüş yapacaktır.
                </p>

                <form className="quote-form" onSubmit={handleSubmit}>
                    <div className="form-row two-col">
                        <div className="form-group">
                            <label htmlFor="isimSoyisim">Adınız Soyadınız</label>
                            <input
                                type="text"
                                id="isimSoyisim"
                                name="isimSoyisim"
                                placeholder="Ad Soyad"
                                required
                                value={formData.isimSoyisim}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="telefon">Telefon Numarası</label>
                            <input
                                type="tel"
                                id="telefon"
                                name="telefon"
                                placeholder="05XX XXX XX XX"
                                required
                                value={formData.telefon}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="binaAdi">Site / Apartman Adı</label>
                        <input
                            type="text"
                            id="binaAdi"
                            name="binaAdi"
                            placeholder="Örn: Mavişehir Konutları"
                            required
                            value={formData.binaAdi}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-row two-col">
                        <div className="form-group">
                            <label htmlFor="adres">Adres / Konum</label>
                            <input
                                type="text"
                                id="adres"
                                name="adres"
                                placeholder="İlçe / Şehir"
                                required
                                value={formData.adres}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="bagimsizBolum">Bağımsız Bölüm Sayısı</label>
                            <input
                                type="text"
                                id="bagimsizBolum"
                                name="bagimsizBolum"
                                placeholder="Daire Sayısı"
                                required
                                value={formData.bagimsizBolum}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {status.message && (
                        <div style={{
                            padding: '15px',
                            marginTop: '20px',
                            borderRadius: '4px',
                            fontSize: '0.9rem',
                            backgroundColor: status.type === 'success' ? 'rgba(212, 237, 218, 0.9)' : 'rgba(248, 215, 218, 0.9)',
                            color: status.type === 'success' ? '#155724' : '#721c24'
                        }}>
                            {status.message}
                        </div>
                    )}

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'GÖNDERİLİYOR...' : 'TEKLİFİ GÖNDER'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default TeklifAl;
