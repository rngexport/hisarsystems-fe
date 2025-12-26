import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Shield, Cpu, Activity, Lock, MonitorSmartphone, CheckCircle, Settings, Layers } from 'lucide-react';
import SEO from '../../../components/SEO';
import { useLanguage } from '../../../context/LanguageContext';

import automationImg from '../../../images/advanced-robotics-automated-assembly-line-high-tech-manufacturing-plant-cutting-edge-technology-action-futuristic-316902059.webp';
import scadaImg from '../../../images/dcs_control_room_1800x600.jpg';
import panelImg from '../../../images/35617950-control-panel-equipment-on-water-conditioning-or-distillation-room-on-pharmaceutical-industry-or.jpg';
import plcImg from '../../../images/braumat.jpg';
import bigDataImg from '../../../images/high-tech-command-center-visualizing-global-data-streams-photo.jpg';
import cyberImg from '../../../images/shutterstock_1194326800-2-1.jpg';
import digitalTwinImg from '../../../images/fce9c24e-307b-424a-8e62-ec071b936905_Virtual-Twin-1200_extra_large.jpeg';

type DetailKey =
  | 'automation'
  | 'scada'
  | 'panels'
  | 'plc'
  | 'data'
  | 'cyber'
  | 'digital-twin';

const serviceDetails: Record<
  DetailKey,
  {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    bullets: string[];
    highlights: string[];
    process: string[];
  }
> = {
  automation: {
    title: 'Endüstriyel Otomasyon',
    subtitle: 'Savunma sınıfı prosesler için tam ölçekli, yedekli ve güvenli kontrol mimarisi.',
    description:
      'Endüstriyel otomasyon, sadece makinaları hareket ettirmek değil, üretim süreçlerini akıllı, izlenebilir ve hatasız hale getirmektir. Hisar Systems olarak, PLC, HMI, Servo ve Robotik sistemlerin tam entegrasyonunu sağlayarak, tesisinizin verimliliğini maksimize ediyoruz. Özellikle duruş tahammülü olmayan (mission-critical) proseslerde, yedekli (redundant) CPU ve Network altyapıları ile %99.99 süreklilik garantisi sunuyoruz.',
    image: automationImg,
    bullets: [
      'HAZARD rated hatlar, failover senaryoları ve batch logic geliştirme',
      'Robotik (6 Eksen) ve kartezyen sistemlerin proses hatlarına entegrasyonu',
      'Hot-swap IO modülleri ile çalışma anında bakım ve modifikasyon imkanı',
      'IEC 61131-3 standardında yapılandırılmış, modüler ve sürdürülebilir kod mimarisi',
      'Hareket kontrol (Motion Control) ve CNC senkronizasyon uygulamaları'
    ],
    highlights: ['MRP/Profinet Ring', 'Failover CPU', 'HAZOP Ready', 'Motion Sync'],
    process: [
      'Saha Keşfi ve P&ID Analizi',
      'Fonksiyonel Tasarım Spesifikasyonu (FDS) Hazırlama',
      'Elektrik Projesi ve Pano İmalatı',
      'PLC/HMI Yazılım Geliştirme ve Simülasyon',
      'Saha Kurulumu, I/O Testleri ve Soğuk/Sıcak Devreye Alma'
    ]
  },
  scada: {
    title: 'SCADA Yazılım Geliştirme',
    subtitle: 'WinCC, Ignition ve Wonderware tabanlı, operatör dostu ve yüksek performanslı izleme sistemleri.',
    description:
      'Veriyi sadece görmek yetmez, onu anlamlandırmak ve yönetmek gerekir. Geliştirdiğimiz SCADA sistemleri, ISA-101 "High Performance HMI" standartlarına uygun olarak tasarlanır. Bu sayede operatörlerin durumsal farkındalığı artırılır, alarm yorgunluğu önlenir ve arıza müdahale süreleri kısalır. Server-Client mimarisi, Web tabanlı erişim ve mobil izleme seçenekleri ile tesisiniz her an parmaklarınızın ucunda.',
    image: scadaImg,
    bullets: [
      'Redundant Server Mimarisi: 0 saniye kesinti ile hot-standby geçiş',
      'ISA-18.2 Alarm Yönetim Standardına uygun önceliklendirilmiş alarm matrisi',
      'Historian veri tabanı ile 1ms çözünürlükte geriye dönük proses kaydı',
      'SQL, Oracle ve ERP sistemleri (SAP, vb.) ile çift yönlü veri entegrasyonu',
      'WebUX ve HTML5 tabanlı arayüzler ile platform bağımsız erişim'
    ],
    highlights: ['Redundant Server', 'Alarm Matrix', 'Historian 1ms', 'ERP Integration'],
    process: [
      'SCADA Topolojisinin Belirlenmesi',
      'Tag Listesi ve Veri Tabanı Yapılandırması',
      'HMI Ekran Tasarımı ve UX Optimizasyonu',
      'Scripting ve Reçete Yönetimi Kodlaması',
      'FAT (Fabrika Kabul Testleri) ve SAT (Saha Kabul Testleri)'
    ]
  },
  panels: {
    title: 'Kontrol & Güç Panoları',
    subtitle: 'IEC 61439 ve UL standartlarına uygun, Ex-proof ve endüstriyel pano tasarımı ve imalatı.',
    description:
      'Otomasyon sisteminin kalbi olan panolarımız, en zorlu endüstriyel koşullara dayanacak şekilde tasarlanır. EPLAN Electric P8 ile projelendirilen panolarımız, EMC (Elektromanyetik Uyumluluk) kurallarına sıkı sıkıya bağlı kalınarak üretilir. Patlayıcı ortamlar (ATEX) için Ex-d, Ex-e ve Ex-p koruma sınıflarında sertifikalı çözümler sunuyoruz.',
    image: panelImg,
    bullets: [
      'Ex-proof Zone 1 ve Zone 2 sahalar için sertifikalı pano çözümleri',
      'Rittal termal analiz yazılımları ile pano içi iklimlendirme hesabı',
      'Korozyona dayanıklı (SS304/SS316) paslanmaz çelik kabin seçenekleri',
      'Redundant Güç Kaynağı (PSU) ve UPS entegrasyonu ile enerji sürekliliği',
      'Fiber optik backbone ve yapısal kablolama ile yüksek hızlı veri iletimi'
    ],
    highlights: ['Ex-proof ATEX', 'EMC Compliant', 'Redundant Power', 'EPLAN P8'],
    process: [
      'Yük Hesabı ve Malzeme Seçimi',
      'EPLAN ile Elektrik Projesi Çizimi',
      '3D Pano Yerleşimi ve Termal Analiz',
      'Montaj, Etiketleme ve Kablolama',
      'İzolasyon ve Fonksiyon Testleri (IEC Standartları)'
    ]
  },
  plc: {
    title: 'PLC & Safety PLC',
    subtitle: 'Siemens, Allen-Bradley ve Schneider platformlarında SIL3 seviyesinde güvenli kod mimarisi.',
    description:
      'PLC programlama, bizim için sadece "Ladder" yazmak değil, bir mühendislik disiplinidir. "Safety First" prensibiyle, TÜV sertifikalı Safety PLC\'ler kullanarak insan ve makine güvenliğini en üst düzeye çıkarıyoruz. Karmaşık PID döngüleri, hareket kontrol blokları ve özel haberleşme protokolleri konusunda derinlemesine uzmanlığa sahibiz.',
    image: plcImg,
    bullets: [
      'SIL2 ve SIL3 seviyesinde Safety PLC programlama ve validasyon',
      'Profisafe, CIP Safety ve FSoE protokolleri ile güvenli haberleşme',
      'Fuzzy Logic ve Adaptif PID algoritmaları ile hassas proses kontrolü',
      'S88 Batch Control standardına uygun, modüler ve esnek programlama',
      'OPC UA ve MQTT protokolleri ile IT/OT entegrasyonu'
    ],
    highlights: ['SIL3 Safety', 'Profisafe', 'Fuzzy PID', 'S88 Batch', 'Cyber-Secure Code'],
    process: [
      'Güvenlik Risk Analizi (Risk Assessment)',
      'Safety Matrisinin Oluşturulması',
      'Standart ve Safety Kod Yazılımı',
      'Offline Simülasyon (PLCSIM Advanced)',
      'Online Yükleme ve Validasyon Testleri'
    ]
  },
  data: {
    title: 'Big Data & Analytics',
    subtitle: 'Endüstriyel veriyi bilgiye dönüştüren yapay zeka ve analitik çözümleri.',
    description:
      'Tesisiniz her saniye binlerce veri üretiyor. Biz bu veriyi topluyor, işliyor ve karar destek mekanizmalarına dönüştürüyoruz. Time-series veritabanları üzerinde çalışan makine öğrenmesi (ML) algoritmalarımız, kestirimci bakım (predictive maintenance) yaparak arızaları oluşmadan önce haber verir. Enerji tüketim modelleri ile maliyetlerinizi düşürür.',
    image: bigDataImg,
    bullets: [
      '50.000+ Tag kapasiteli telemetri ve veri toplama altyapısı',
      'Timeseries DB (InfluxDB, TimescaleDB) ve NoSQL çözümleri',
      'Anomaly Detection algoritmaları ile kestirimci bakım',
      'Batch bazlı kalite tahmini (Quality Prediction) ve kök neden analizi',
      'OEE (Overall Equipment Effectiveness) analizi ve raporlama'
    ],
    highlights: ['Predictive Maint.', 'Anomaly Detection', 'OEE Analytics', 'Big Data'],
    process: [
      'Veri Kaynaklarının Belirlenmesi ve Bağlantı',
      'Veri Temizleme ve Normalizasyon (ETL)',
      'Makine Öğrenmesi Modellerinin Eğitilmesi',
      'Dashboard ve Raporlama Ekranlarının Tasarımı',
      'Sürekli Model İyileştirme ve İzleme'
    ]
  },
  cyber: {
    title: 'Siber Güvenlik & OT',
    subtitle: 'Endüstriyel kontrol sistemleri için Zero-Trust tabanlı siber savunma hattı.',
    description:
      'IT güvenliği ile OT (Operasyonel Teknoloji) güvenliği birbirinden çok farklıdır. Üretim sürekliliğini riske atmadan, PLC ve SCADA ağlarınızı siber tehditlere karşı koruyoruz. IEC 62443 standardını referans alarak, endüstriyel firewall, derin paket inceleme (DPI) ve ağ segmentasyonu çözümleri sunuyoruz. "İçerisi de dışarısı kadar tehlikelidir" ilkesiyle hareket ediyoruz.',
    image: cyberImg,
    bullets: [
      'Endüstriyel Firewall ve IPS/IDS Konfigürasyonu',
      'Deep Packet Inspection (DPI) ile endüstriyel protokol analizi (S7comm, Modbus TCP)',
      'VLAN Segmentasyonu ve DMZ (Demilitarized Zone) mimarisi',
      'Role-Based Access Control (RBAC) ve güvenli uzaktan erişim (VPN)',
      'Asset Inventory ve zafiyet taraması yönetimi'
    ],
    highlights: ['Zero-Trust', 'IEC 62443', 'Deep Packet Insp.', 'Secure VPN'],
    process: [
      'Varlık Envanteri ve Ağ Topolojisi Çıkarılması',
      'Risk ve Zafiyet Analizi',
      'Güvenlik Politikalarının Belirlenmesi',
      'Donanım ve Yazılım Kurulumu (Firewall, SIEM)',
      'Penetrasyon Testleri ve Güvenlik Sıkılaştırma'
    ]
  },
  'digital-twin': {
    title: 'Digital Twin & Simülasyon',
    subtitle: 'Gerçek dünyanın sanal ikizi ile risksiz devreye alma ve proses optimizasyonu.',
    description:
      'Tesisinizi inşa etmeden önce sanal ortamda çalıştırıyoruz. Digital Twin teknolojisi ile, mekanik, elektrik ve otomasyon tasarımlarını tek bir platformda birleştirerek, hataları tasarım aşamasında tespit ediyoruz. PLC kodlarınızı sanal makine üzerinde test ederek (Virtual Commissioning), saha devreye alma sürelerini %50\'ye varan oranda kısaltıyoruz.',
    image: digitalTwinImg,
    bullets: [
      'Fizik tabanlı 3D simülasyon (Kinematik ve Dinamik analiz)',
      'Sanal PLC (Software-in-the-Loop) ve Donanım (Hardware-in-the-Loop) testleri',
      'Isı, basınç ve akışkanlar dinamiği simülasyonu',
      'Operatör eğitimleri için VR/AR tabanlı senaryolar',
      'Sanal ortamda darboğaz (bottleneck) analizi ve hat dengeleme'
    ],
    highlights: ['Virtual Commissioning', 'Physics Sim', 'Process Opt.', 'Risk Reduction'],
    process: [
      'CAD Modellerinin ve Kinematik Verilerin Alınması',
      'Simülasyon Modelinin Oluşturulması',
      'PLC/HMI Sinyal Bağlantılarının Yapılması',
      'Senaryo Testleri ve Hata Ayıklama',
      'Sanal Devreye Alma ve Operatör Eğitimi'
    ]
  },
};

const highlightIcons = [Shield, Cpu, Activity, Lock, MonitorSmartphone];

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: DetailKey }>();
  const { t } = useLanguage();
  const detail = slug ? serviceDetails[slug] : undefined;

  if (!detail) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-2xl">Hizmet bulunamadı.</p>
          <Link to="/services" className="text-brand underline">
            Geri Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-20">
      <SEO 
        title={detail.title}
        description={detail.description}
        keywords={`${detail.title}, ${detail.highlights.join(', ')}, ${t('seo.home.keywords')}`}
      />
      <div className="relative h-[60vh] overflow-hidden">
        <img src={detail.image} className="w-full h-full object-cover" alt={detail.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <Link to="/services" className="inline-flex items-center text-brand mb-6 hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" /> Geri Dön
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{detail.title}</h1>
            <p className="text-xl text-slate-300 max-w-3xl border-l-4 border-brand pl-4">{detail.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-12">
            
            {/* Description Section */}
            <div className="bg-dark-900/50 border border-white/10 p-8 rounded-lg">
               <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Activity className="text-brand" /> Hizmet Detayı
               </h2>
               <p className="text-slate-300 leading-relaxed text-lg text-justify">{detail.description}</p>
            </div>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {detail.highlights.map((h, idx) => {
                const Icon = highlightIcons[idx % highlightIcons.length];
                return (
                  <div
                    key={h}
                    className="bg-dark-800 border border-white/5 p-4 rounded hover:border-brand/50 transition-colors flex items-center gap-3 group"
                  >
                    <div className="p-2 bg-brand/10 rounded group-hover:bg-brand/20 transition-colors">
                        <Icon className="w-5 h-5 text-brand" />
                    </div>
                    <span className="text-white font-semibold text-sm">{h}</span>
                  </div>
                );
              })}
            </div>

            {/* Detailed Bullets */}
            <div className="bg-dark-900/80 border border-white/10 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                 <Layers className="text-brand" /> Teknik Kabiliyetler
              </h3>
              <div className="space-y-4">
                {detail.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-4 p-3 hover:bg-white/5 rounded transition-colors">
                    <div className="w-2 h-2 mt-2 bg-brand rounded-full shadow-[0_0_8px_#00f6d8] shrink-0"></div>
                    <p className="text-slate-300 leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Steps */}
            <div className="bg-dark-900/50 border border-white/10 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <Settings className="text-brand" /> Uygulama Süreci
                </h3>
                <div className="relative">
                    <div className="absolute left-[15px] top-0 bottom-0 w-0.5 bg-white/10"></div>
                    <div className="space-y-8">
                        {detail.process.map((step, idx) => (
                            <div key={idx} className="relative flex items-center gap-6">
                                <div className="w-8 h-8 rounded-full bg-dark-800 border border-brand/50 flex items-center justify-center z-10 text-brand font-bold text-sm shadow-[0_0_10px_rgba(0,246,216,0.2)]">
                                    {idx + 1}
                                </div>
                                <div className="flex-1 bg-dark-800 p-4 rounded border border-white/5">
                                    <p className="text-slate-200 font-medium">{step}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

          </div>

          <div className="space-y-8">
            <div className="bg-dark-800 border-l-4 border-brand p-8 rounded sticky top-24">
              <h4 className="text-white font-bold mb-4 text-lg">Özet & Değer Önerisi</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {detail.subtitle}
              </p>
              <div className="flex flex-col gap-3">
                 <div className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle className="w-4 h-4" /> <span>%100 Müşteri Memnuniyeti</span>
                 </div>
                 <div className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle className="w-4 h-4" /> <span>7/24 Teknik Destek</span>
                 </div>
                 <div className="flex items-center gap-2 text-green-400 text-sm">
                    <CheckCircle className="w-4 h-4" /> <span>Garantili Çözüm</span>
                 </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                 <h5 className="text-white font-bold mb-4">Hızlı Erişim</h5>
                 <ul className="text-sm text-slate-400 space-y-3">
                    <li>
                    <Link className="hover:text-brand flex items-center gap-2 transition-colors" to="/projects">
                        <ArrowLeft className="w-3 h-3 rotate-180" /> İlgili Projeler
                    </Link>
                    </li>
                    <li>
                    <Link className="hover:text-brand flex items-center gap-2 transition-colors" to="/technologies">
                        <ArrowLeft className="w-3 h-3 rotate-180" /> Kullanılan Teknolojiler
                    </Link>
                    </li>
                    <li>
                    <Link className="block text-center mt-4 bg-brand text-black font-bold py-3 px-4 rounded hover:bg-white transition-colors" to="/contact">
                        HEMEN TEKLİF ALIN
                    </Link>
                    </li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
