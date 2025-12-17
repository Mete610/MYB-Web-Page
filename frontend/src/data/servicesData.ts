export interface Service {
    id: string;
    title: string;
    icon: string;
    shortDescription: string;
    fullDescription: string;
}

export const services: Service[] = [
    {
        id: "aidat-takip",
        title: "AİDAT TAKİP SİSTEMİ",
        icon: "📊",
        shortDescription: "Düzenli Tahsilat, Kesintisiz Hizmet",
        fullDescription: "Aidat takibi, bir binanın finansal sağlığının temel taşıdır. Gelişmiş yazılım altyapımızla, aidatların zamanında ödenmesini sağlıyor, gecikmeleri anlık olarak takip ediyoruz. Ödeme hatırlatmaları, online ödeme kolaylıkları ve borçlandırma süreçlerini sistemli bir hale getirerek, yönetimin komşularla karşı karşıya gelmesini engelliyor, tahsilat oranlarını en üst seviyeye çıkarıyoruz."
    },
    {
        id: "gelir-gider",
        title: "GELİR-GİDER YÖNETİMİ",
        icon: "💰",
        shortDescription: "Şeffaf Hesap, Gerçek Tasarruf",
        fullDescription: "Binanızın bütçesini kendi bütçemiz gibi koruyoruz. Tüm gelir ve giderleri, tek bir kuruşun dahi hesabını verebilecek şekilde muhasebeleştiriyoruz. Tedarikçi ödemelerinden fatura takibine kadar her işlemi kayıt altına alıyor, gereksiz harcamaların önüne geçerek binanız için tasarruf alanları yaratıyoruz. Şeffaflık ilkemiz gereği, tüm mali kayıtlar her an denetime hazırdır."
    },
    {
        id: "temizlik-guvenlik",
        title: "TEMİZLİK PLANLAMA | GÜVENLİK HİZMETİ",
        icon: "🧹",
        shortDescription: "Hijyenik Yaşam, Huzurlu Yuva",
        fullDescription: "Yaşam alanlarınızın standartlarını yükseltmek için profesyonel bir operasyon planı oluşturuyoruz. Temizlik hizmetlerini sadece yüzeysel bir işlem olarak değil, belirli periyotlarla uygulanan detaylı bir hijyen planı olarak yürütüyoruz. Güvenlik tarafında ise risk analizleri yaparak, giriş-çıkış kontrollerinden kamera sistemlerine kadar her noktada huzurunuzu tesis edecek önlemleri planlıyor ve denetliyoruz."
    },
    {
        id: "bakim-onarim",
        title: "BAKIM-ONARIM HİZMETİ",
        icon: "🔧",
        shortDescription: "Sorunsuz Teknik, Uzun Ömürlü Yapılar",
        fullDescription: "Binalar da tıpkı canlılar gibi düzenli bakıma ihtiyaç duyar. Asansörler, ortak alan aydınlatmaları, hidroforlar ve çatı sistemleri gibi teknik unsurların periyodik bakımlarını uzman ekiplerimizle takip ediyoruz. Beklenmedik arızalara 7/24 hızlı müdahale imkanı sunarken, önleyici bakımlar sayesinde binanızın demirbaş ömrünü uzatıyor ve büyük maliyetli arızaların önüne geçiyoruz."
    },
    {
        id: "hukuk-danismanligi",
        title: "HUKUK DANIŞMANLIĞI",
        icon: "⚖️",
        shortDescription: "Yasal Mevzuatlara Tam Uyum, Maksimum Güvence",
        fullDescription: "Bina yönetimi, Kat Mülkiyeti Kanunu başta olmak üzere ciddi bir hukuki sorumluluk gerektirir. Anlaşmazlıkların çözümünden icra takiplerine, sözleşme yönetiminden resmi tebligatlara kadar tüm süreçlerde uzman hukuk kadromuzla yanınızdayız. Yönetim kararlarının yasalara uygun alınmasını sağlayarak hem kat maliklerini hem de bina yönetimini koruma altına alıyoruz."
    },
    {
        id: "raporlama",
        title: "RAPORLAMA HİZMETLERİ",
        icon: "📈",
        shortDescription: "Bilgi Güçtür, Şeffaflık Güvendir",
        fullDescription: "Neye, ne kadar harcandığını bilmek her kat malikinin hakkıdır. Aylık ve yıllık periyotlarla hazırladığımız detaylı finansal ve operasyonel raporlarla binanızın röntgenini çekiyoruz. Yapılan işleri, bekleyen projeleri ve bütçe durumunu grafiklerle desteklenmiş anlaşılır raporlar halinde sunarak, yönetimin hesap verebilirliğini en üst düzeye taşıyoruz."
    },
    {
        id: "personel-yonetimi",
        title: "PERSONEL YÖNETİMİ",
        icon: "👥",
        shortDescription: "Doğru Yönetilen Personel, Kaliteli Hizmet",
        fullDescription: "Binalarda görev yapan personelin sevk ve idaresi en hassas konulardan biridir. Görev tanımlarının yapılması, çalışma çizelgelerinin hazırlanması, SGK süreçlerinin takibi ve özlük haklarının yönetimi gibi karmaşık işlemleri biz üstleniyoruz. Personelin performansını düzenli olarak denetleyerek, binanıza en verimli hizmeti sunmalarını sağlıyoruz."
    },
    {
        id: "genel-kurul",
        title: "GENEL KURUL YÖNETİMİ",
        icon: "📋",
        shortDescription: "Usulüne Uygun Toplantılar, Sağlıklı Kararlar",
        fullDescription: "Genel kurullar, apartman ve sitelerin karar merkezidir. Davetiyelerin hazırlanması, hazirun listelerinin oluşturulması, yasal sürelerin takibi ve toplantı yönetimi süreçlerini profesyonelce yürütüyoruz. Alınan kararların karar defterine doğru işlenmesi ve yasal geçerlilik kazanması için gerekli tüm bürokratik adımları hatasız bir şekilde tamamlıyoruz."
    },
];
