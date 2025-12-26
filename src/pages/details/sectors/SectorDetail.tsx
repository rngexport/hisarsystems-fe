import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Shield, Activity, Factory, Cpu, Server, Zap, CheckCircle, BarChart2, Layers, PenTool } from 'lucide-react';
import SEO from '../../../components/SEO';
import { useLanguage } from '../../../context/LanguageContext';

import defenceSectorImg from '../../../images/Rheinmetall-1-copy.jpg';
import chemicalSectorImg from '../../../images/oil-gas-refinery-plant-storage-tank-form-industry-zone-night-sky-star-aerial-view-industrial-petrochemical-fuel-power-177888096.webp';
import plasticSectorImg from '../../../images/Accenture-Automobile-Plant-3840x2160_rad-3x2.webp';
import textileSectorImg from '../../../images/advanced-robotics-automated-assembly-line-high-tech-manufacturing-plant-cutting-edge-technology-action-futuristic-316902059.webp';
import foodSectorImg from '../../../images/Stainless-Steel-Pump-Package-e1740670365157.jpg';
import energySectorImg from '../../../images/fawley-power-station.jpg';

type SectorKey = 'defence' | 'chemical' | 'plastic' | 'textile' | 'food' | 'energy';

const sectorDetails: Record<
  SectorKey,
  {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    features: string[];
    challenges: string[];
    solutions: string[];
    standards: string[];
    icon: any;
  }
> = {
  defence: {
    title: 'Savunma Sanayi',
    subtitle: 'Nitro-selüloz, TNT, RDX ve enerjetik prosesler için SIL güvenlikli SCADA–PLC mimarileri.',
    description:
      'Savunma sanayinde hata toleransı sıfırdır. Hisar Systems, patlayıcı ve tehlikeli kimyasalların üretim hatlarında SIL3 (Safety Integrity Level) standartlarında otomasyon çözümleri sunar. MKEK ve SSB projelerindeki tecrübemizle, kritik tesislerin güvenliğini ve sürekliliğini sağlıyoruz. Yedekli (redundant) kontrol mimarileri, fiber optik ring ağlar ve özel ESD (Emergency Shutdown) matrisleri ile kesintisiz ve güvenli üretim garantisi veriyoruz.',
    image: defenceSectorImg,
    features: [
      'SIL3 Safety PLC ve ESD (Emergency Shutdown) Sistemleri',
      'Patlayıcı ortam (Ex-Proof Zone 1/2) standartlarına uygun panolama',
      'Yedekli (Redundant) SCADA ve veri toplama altyapısı',
      'Kritik reaksiyon kontrolü ve hassas batch yönetimi',
      'NATO ve askeri standartlara (MIL-STD) uyumluluk'
    ],
    challenges: [
      'Patlama ve yangın riskinin çok yüksek olması',
      'Mikrosaniye seviyesinde tepki gerektiren acil durumlar',
      'Siber saldırılara karşı maksimum koruma ihtiyacı'
    ],
    solutions: [
      'Siemens S7-1500F Fail-Safe CPU Mimarisi',
      'WinCC OA ile N+1 Yedekli SCADA Sunucuları',
      'Fiziksel ve yazılımsal diyot (Data Diode) kullanımı'
    ],
    standards: ['IEC 61508 (SIL)', 'ATEX Directives', 'MIL-STD-810G'],
    icon: Shield,
  },
  chemical: {
    title: 'Kimya & Proses',
    subtitle: 'Reaktör, kolonu, asit–alkol geri kazanım ve batch proses kontrol yazılımları.',
    description:
      'Kimyasal proseslerin kararlılığı, doğru reçete yönetimi ve hassas dozajlama ile mümkündür. Egzotermik reaksiyonların kontrolü, distilasyon kolonlarının stabilizasyonu ve tehlikeli madde transfer hatlarında tam otomatik, ISA-88 standardına uygun batch kontrol sistemleri kuruyoruz. Model Predictive Control (MPC) ve Fuzzy Logic algoritmaları ile ürün kalitesindeki sapmaları minimize ediyoruz.',
    image: chemicalSectorImg,
    features: [
      'ISA-88 Batch Kontrol Standardı ve Reçete Yönetimi',
      'PID ve Fuzzy Logic ile Hassas Sıcaklık/Basınç Kontrolü',
      'Tehlikeli Madde Transfer Otomasyonu ve Tank Çiftliği',
      'Entegre Kütle Akış (Coriolis) ve Dozajlama Kontrolü',
      'Patlama önleyici (Ex-Proof) enstrümantasyon yönetimi'
    ],
    challenges: [
      'Doğrusal olmayan (Non-linear) kimyasal reaksiyonlar',
      'Korozif ortam ve zorlu saha koşulları',
      'Ürün izlenebilirliği ve kalite varyasyonları'
    ],
    solutions: [
      'Adaptif PID ve Kaskad Kontrol Döngüleri',
      'Reçete bazlı otomatik parametre yükleme',
      'Elektronik Batch Raporlama (EBR)'
    ],
    standards: ['ISA-88 (S88)', 'ISO 9001', 'SEVESO III'],
    icon: Activity,
  },
  plastic: {
    title: 'Plastik & Polimer',
    subtitle: 'Ekstrüzyon, twin-roll ve granülizasyon hatları için tork–sıcaklık–hız senkronizasyonu.',
    description:
      'Plastik endüstrisinde hammadde kalitesi kadar makine parametrelerinin (sıcaklık, basınç, vida hızı) kararlılığı da önemlidir. Ekstrüder ve enjeksiyon hatlarında çok bölgeli hassas sıcaklık kontrolü (Multi-Zone PID) ve sürücü senkronizasyonu ile ürün kalitesini standartlaştırıyoruz. Gravimetrik dozajlama üniteleri ile hammadde sarfiyatını optimize ediyor, OEE takibi ile makine verimliliğini artırıyoruz.',
    image: plasticSectorImg,
    features: [
      'Çok Bölgeli (Multi-Zone) Hassas PID Sıcaklık Kontrolü',
      'Ekstrüder Vida Tork ve Hız Senkronizasyonu (DC Bus)',
      'Gravimetrik ve Volumetrik Dozajlama Entegrasyonu',
      'Üretim Verimliliği (OEE) ve Enerji İzleme',
      'Kalender ve Sarıcı (Winder) Tansiyon Kontrolü'
    ],
    challenges: [
      'Yüksek hızda senkronizasyon kaybı ve kopmalar',
      'Hammadde yoğunluk değişimlerinin kaliteye etkisi',
      'Enerji maliyetlerinin yüksekliği'
    ],
    solutions: [
      'Sinamics S120 sürücü ailesi ile ortak DC bara',
      'Loadcell geri beslemeli kapalı çevrim kontrol',
      'Isıtma/Soğutma döngülerinde enerji optimizasyonu'
    ],
    standards: ['Euromap 77', 'OPC UA', 'CE Machine Safety'],
    icon: Factory,
  },
  textile: {
    title: 'Tekstil Otomasyon',
    subtitle: 'Kotonizasyon, aspirasyon, kurutma ve hız kontrollü elyaf işleme otomasyonu.',
    description:
      'Tekstil hatlarında elyaf akışının sürekliliği ve makine hızlarının uyumu kritiktir. Harman hallaçtan tarak ve cer makinelerine kadar tüm iplik hazırlık ve terbiye süreçlerinde, enerji verimliliği odaklı otomasyon çözümleri sunuyoruz. Klima santralleri ve aspirasyon sistemlerinin otomasyonu ile ortam koşullarını (nem, sıcaklık) elyaf kalitesi için en uygun seviyede tutuyoruz.',
    image: textileSectorImg,
    features: [
      'Hat Boyu Hız Senkronizasyonu ve Dansörlü Gergi Kontrolü',
      'Aspirasyon, Filtre ve Toz Toplama Otomasyonu',
      'Kurutma Fırınları Nem ve Sıcaklık Kontrolü',
      'Reçete Bazlı Boya ve Terbiye Otomasyonu',
      'Kumaş Hatalarını Algılayan Görüntü İşleme Sistemleri'
    ],
    challenges: [
      'Statik elektrik ve tozlanma problemleri',
      'Hassas elyaflarda kopma ve düzgünsüzlük',
      'Yüksek enerji ve buhar tüketimi'
    ],
    solutions: [
      'Frekans konvertörlü fan ve pompa kontrolü',
      'Oransal valflerle hassas nemlendirme',
      'Otomatik bobin değiştirme ve ekleme senaryoları'
    ],
    standards: ['ISO 50001', 'Textile 4.0'],
    icon: Cpu,
  },
  food: {
    title: 'Gıda & Paketleme',
    subtitle: 'CIP/SIP sterilizasyon, dolum hattı kontrolü, üretim izlenebilirlik yazılımları.',
    description:
      'Gıda güvenliği ve hijyen standartları (HACCP, FDA) otomasyonun temelini oluşturur. CIP (Yerinde Temizlik) ve SIP (Yerinde Sterilizasyon) süreçlerinin tam otomatik ve raporlanabilir şekilde yürütülmesini sağlıyoruz. Dolum, etiketleme ve paketleme hatlarında yüksek hızlı senkronizasyon ve görüntü işleme ile kalite kontrol yaparak, hatasız üretim ve geriye dönük tam izlenebilirlik (Traceability) sunuyoruz.',
    image: foodSectorImg,
    features: [
      'Otomatik CIP/SIP Temizlik Senaryoları ve Raporlama',
      'Hassas Dolum, Kapatma ve Paketleme Senkronizasyonu',
      'Geriye Dönük Ürün İzlenebilirliği (Traceability & Serialization)',
      'Hygienic Design Pano ve Saha Ekipmanları (IP69K)',
      'FDA 21 CFR Part 11 Uyumlu Kayıt Sistemi'
    ],
    challenges: [
      'Mikrobiyolojik riskler ve çapraz kontaminasyon',
      'Sık ürün değişimi ve setup süreleri',
      'Katı yasal regülasyonlar ve denetimler'
    ],
    solutions: [
      'İletkenlik ve türbidite sensörlü CIP optimizasyonu',
      'Servo motorlu dolum nozulları',
      'Audit Trail özellikli SCADA yazılımları'
    ],
    standards: ['HACCP', 'FDA 21 CFR Part 11', 'EHEDG'],
    icon: Server,
  },
  energy: {
    title: 'Enerji & Yardımcılar',
    subtitle: 'Buhar, basınç, su & chiller yönetimi için SCADA tabanlı izleme ve raporlama.',
    description:
      'Endüstriyel tesislerin kalbi olan yardımcı işletmelerin (Kazan dairesi, Chiller, Kompresör, Arıtma) verimli çalışması, ana üretimi doğrudan etkiler. Enerji İzleme Sistemleri (EMS) ve yardımcı tesis otomasyonu ile kayıpları tespit ediyor, pompa ve fan istasyonlarında eş-yaşlandırma yaparak ekipman ömrünü uzatıyoruz. ISO 50001 uyumlu raporlama ile karbon ayak izinizi düşürmenize yardımcı oluyoruz.',
    image: energySectorImg,
    features: [
      'Kazan ve Buhar Üretim Otomasyonu (Besi suyu, blöf, yanma kontrolü)',
      'Chiller, Kule ve Soğutma Suyu Optimizasyonu',
      'ISO 50001 Enerji İzleme ve Karbon Raporlama',
      'Pompa ve Fan İstasyonları Eş-Yaşlandırma Kontrolü',
      'Basınçlı Hava Sistemi Yönetimi ve Kaçak Analizi'
    ],
    challenges: [
      'Gereksiz enerji sarfiyatı ve yüksek faturalar',
      'Yardımcı tesis arızalarının üretimi durdurması',
      'Manuel okumaların hatalı ve yetersiz olması'
    ],
    solutions: [
      'Talep tahmini yapan akıllı kontrol algoritmaları',
      'IoT tabanlı anlık sayaç okuma',
      'Verimlilik (COP) hesabı ve performans izleme'
    ],
    standards: ['ISO 50001', 'LEED', 'Green Factory'],
    icon: Zap,
  },
};

export default function SectorDetail() {
  const { slug } = useParams<{ slug: SectorKey }>();
  const { t } = useLanguage();
  const detail = slug ? sectorDetails[slug] : undefined;

  if (!detail) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-2xl">Sektör bulunamadı.</p>
          <Link to="/" className="text-brand underline">
            Geri Dön
          </Link>
        </div>
      </div>
    );
  }

  const Icon = detail.icon;

  return (
    <div className="bg-black min-h-screen pt-20">
      <SEO 
        title={detail.title}
        description={detail.description}
        keywords={`${detail.title}, ${t('seo.home.keywords')}, ${detail.features.join(', ')}`}
      />
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={detail.image} className="w-full h-full object-cover" alt={detail.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <Link to="/" className="inline-flex items-center text-brand mb-6 hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" /> Geri Dön
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-brand/10 border border-brand/20 rounded-full backdrop-blur-sm">
                <Icon className="w-10 h-10 text-brand" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">{detail.title}</h1>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl border-l-4 border-brand pl-4">{detail.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Main Info */}
          <div className="md:col-span-2 space-y-12">
            
            {/* Description */}
            <div className="bg-dark-900/50 border border-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Activity className="text-brand" /> Sektörel Yaklaşım
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg text-justify">{detail.description}</p>
            </div>

            {/* Features List */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                 <CheckCircle className="text-brand" /> Temel Yetkinlikler
              </h3>
              <div className="grid sm:grid-cols-1 gap-4">
                {detail.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 bg-dark-800 border border-white/5 rounded hover:border-brand/30 transition-colors group">
                    <div className="mt-1.5 w-2 h-2 bg-brand rounded-full shrink-0 shadow-[0_0_8px_#00f6d8] group-hover:scale-125 transition-transform"></div>
                    <span className="text-slate-200 text-base font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges & Solutions Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-dark-800/50 border border-white/5 p-6 rounded-lg">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        <span className="text-red-400">●</span> Sektörel Zorluklar
                    </h4>
                    <ul className="space-y-3">
                        {detail.challenges.map((c, i) => (
                            <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                                <span className="mt-1 w-1 h-1 bg-red-400 rounded-full shrink-0"></span> {c}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-dark-800/50 border border-white/5 p-6 rounded-lg">
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                        <span className="text-brand">●</span> Mühendislik Çözümlerimiz
                    </h4>
                    <ul className="space-y-3">
                        {detail.solutions.map((s, i) => (
                            <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                                <span className="mt-1 w-1 h-1 bg-brand rounded-full shrink-0"></span> {s}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-dark-800 p-8 border-l-4 border-brand rounded-r-lg sticky top-24">
              <h4 className="text-white font-bold mb-4 text-lg">Çözüm Ortağınız</h4>
              <p className="text-slate-400 text-sm mb-6">
                Projenize özel mühendislik çözümleri, keşif ve fizibilite çalışmaları için uzman ekibimizle iletişime geçin.
              </p>
              
              <div className="mb-6">
                 <h5 className="text-white font-semibold mb-2 text-xs uppercase tracking-wider">Uygulanan Standartlar</h5>
                 <div className="flex flex-wrap gap-2">
                    {detail.standards.map((std, i) => (
                        <span key={i} className="text-xs bg-white/5 text-slate-300 px-2 py-1 rounded border border-white/10">
                            {std}
                        </span>
                    ))}
                 </div>
              </div>

              <Link
                to="/contact"
                className="block w-full text-center bg-brand text-black font-bold py-3 px-4 rounded hover:bg-white transition-all shadow-[0_0_15px_rgba(0,246,216,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              >
                HEMEN TEKLİF ALIN
              </Link>
            </div>

            <div className="bg-dark-900 border border-white/10 p-6 rounded-lg">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <Layers className="text-brand w-4 h-4" /> İlgili Teknolojiler
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/technologies/plc" className="text-slate-400 hover:text-brand flex items-center gap-2 transition-colors">
                    <ArrowLeft className="w-3 h-3 rotate-180" /> PLC & Safety PLC
                  </Link>
                </li>
                <li>
                  <Link to="/technologies/scada" className="text-slate-400 hover:text-brand flex items-center gap-2 transition-colors">
                    <ArrowLeft className="w-3 h-3 rotate-180" /> SCADA & HMI
                  </Link>
                </li>
                <li>
                  <Link to="/technologies/iot" className="text-slate-400 hover:text-brand flex items-center gap-2 transition-colors">
                    <ArrowLeft className="w-3 h-3 rotate-180" /> Endüstriyel IoT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
