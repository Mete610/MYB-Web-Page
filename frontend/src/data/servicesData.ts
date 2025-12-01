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
        shortDescription: "Aidat ödemelerinin düzenli takibi ve raporlanması.",
        fullDescription: "Site ve apartman yönetiminde en önemli konulardan biri olan aidat takibini profesyonel yazılımlarımızla gerçekleştiriyoruz. Daire sakinlerinin borç/alacak durumlarını anlık olarak izliyor, gecikmeleri raporluyor ve şeffaf bir yönetim anlayışı sunuyoruz. Online ödeme seçenekleri ile sakinlere kolaylık sağlıyoruz."
    },
    {
        id: "gelir-gider",
        title: "GELİR-GİDER YÖNETİMİ",
        icon: "💰",
        shortDescription: "Şeffaf bütçe yönetimi ve finansal raporlama.",
        fullDescription: "Apartman veya sitenizin tüm gelir ve gider kalemlerini kayıt altına alıyoruz. Faturalar, bakım masrafları, personel ödemeleri gibi tüm harcamaları şeffaf bir şekilde yönetiyor ve düzenli olarak denetim kuruluna ve kat maliklerine raporluyoruz."
    },
    {
        id: "temizlik-guvenlik",
        title: "TEMİZLİK PLANLAMA | GÜVENLİK HİZMETİ",
        icon: "🧹",
        shortDescription: "Hijyenik ve güvenli yaşam alanları.",
        fullDescription: "Yaşam alanlarınızın temizliği için periyodik planlar oluşturuyor, ortak alanların hijyenini sağlıyoruz. Ayrıca, 7/24 güvenlik hizmetleri, kamera sistemleri takibi ve giriş-çıkış kontrolleri ile huzurlu bir ortam sunuyoruz."
    },
    {
        id: "bakim-onarim",
        title: "BAKIM-ONARIM HİZMETİ",
        icon: "🔧",
        shortDescription: "Teknik sorunlara hızlı ve etkili çözümler.",
        fullDescription: "Asansör, elektrik, sıhhi tesisat, ısıtma sistemleri gibi teknik donanımların periyodik bakımlarını takip ediyoruz. Arıza durumlarında anlaşmalı uzman ekiplerimizle en hızlı şekilde müdahale ederek sorunu çözüyoruz."
    },
    {
        id: "hukuk-danismanligi",
        title: "HUKUK DANIŞMANLIĞI",
        icon: "⚖️",
        shortDescription: "Yönetim süreçlerinde hukuki destek.",
        fullDescription: "Kat Mülkiyeti Kanunu ve ilgili mevzuatlar çerçevesinde yönetim süreçlerini yürütüyoruz. İcra takibi, sözleşme hazırlığı ve hukuki ihtilafların çözümü konularında profesyonel hukuk danışmanlarımızla destek veriyoruz."
    },
    {
        id: "raporlama",
        title: "RAPORLAMA HİZMETLERİ",
        icon: "📈",
        shortDescription: "Detaylı ve anlaşılır yönetim raporları.",
        fullDescription: "Yönetim faaliyetlerini, mali tabloları ve yapılan işleri düzenli aralıklarla raporluyoruz. Şeffaflık ilkesi gereği tüm kat maliklerinin bilgiye erişimini kolaylaştırıyoruz."
    },
    {
        id: "personel-yonetimi",
        title: "PERSONEL YÖNETİMİ",
        icon: "👥",
        shortDescription: "Kapıcı ve güvenlik personeli yönetimi.",
        fullDescription: "Apartman görevlisi, güvenlik personeli ve temizlik elemanlarının işe alımı, SGK işlemleri, maaş ödemeleri ve performans takiplerini yasal mevzuata uygun olarak yürütüyoruz."
    },
    {
        id: "genel-kurul",
        title: "GENEL KURUL YÖNETİMİ",
        icon: "📋",
        shortDescription: "Toplantı organizasyonu ve karar takibi.",
        fullDescription: "Olağan ve olağanüstü genel kurul toplantılarının usulüne uygun olarak organize edilmesini sağlıyoruz. Hazirun cetveli, toplantı tutanakları ve alınan kararların tebliği süreçlerini profesyonelce yönetiyoruz."
    },
];
