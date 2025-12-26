import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Tag, BookOpen } from 'lucide-react';
import SEO from '../../../components/SEO';
import { useLanguage } from '../../../context/LanguageContext';

import safetyImg from '../../../images/istockphoto-466485780-612x612.jpg';
import twinImg from '../../../images/Digital_twin_in_manufacturing.png';
import alarmImg from '../../../images/AlarmTracker by Eldor_themepage.jpg';
import networkImg from '../../../images/shutterstock_1194326800-2-1.jpg';
import mesImg from '../../../images/Onsite-Process-Control-Domain-Support-Thumbnail-Landing-Page-16.APR_.20-1.jpg.webp';
import pidImg from '../../../images/35617950-control-panel-equipment-on-water-conditioning-or-distillation-room-on-pharmaceutical-industry-or.jpg';

type BlogKey = 
  | 'sil3-safety-plc'
  | 'digital-twin-reactor'
  | 'alarm-event-trend'
  | 'ot-network-security'
  | 'mes-systems'
  | 'pid-vs-fuzzy';

interface BlogPost {
  title: string;
  date: string;
  readTime: string;
  author: string;
  category: string;
  image: string;
  content: React.ReactNode;
  tags: string[];
}

const blogPostsTr: Record<BlogKey, BlogPost> = {
  'sil3-safety-plc': {
    title: "SIL3 Safety PLC Nedir?",
    date: "09 Ara 2025",
    readTime: "8 dk",
    author: "Senior Automation Architect",
    category: "Safety Systems",
    image: safetyImg,
    tags: ["SIL3", "IEC 61508", "Safety PLC", "ESD"],
    content: (
      <>
        <p className="lead text-xl text-slate-300 mb-6">
          Endüstriyel kazaların maliyeti sadece finansal değildir; insan hayatı ve çevresel felaketler, risk analizinin temelini oluşturur. SIL (Safety Integrity Level), bu riskleri ölçülebilir bir standarda oturtan uluslararası bir dildir.
        </p>
        
        <h3 className="text-2xl font-bold text-white mt-8 mb-4">IEC 61508 ve Güvenlik Döngüsü</h3>
        <p className="text-slate-400 mb-4">
          Bir otomasyon sisteminin "güvenli" sayılabilmesi için, hata yapma olasılığının (PFD - Probability of Failure on Demand) belirli sınırların altında olması gerekir. SIL3 seviyesi, 10^-3 ile 10^-4 arasında bir hata olasılığını temsil eder. Bu, sistemin sürekli çalışması durumunda bin yılda bir kez tehlikeli hata yapabileceği anlamına gelir.
        </p>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">Neden Standart PLC Yetmez?</h3>
        <p className="text-slate-400 mb-4">
          Standart PLC'ler, prosesi yürütmek için tasarlanmıştır; durdurmak için değil. Safety PLC'ler ise "Fail-Safe" mimariye sahiptir. Yani, CPU arızalansa, kablo kopsa veya sensör bozulsa bile sistem kendini güvenli duruş (Safe State) moduna alır.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-400 mb-6">
          <li><strong>Diagnostik Kapsama (DC):</strong> Safety PLC, her döngüde kendi iç devrelerini test eder.</li>
          <li><strong>Yedeklilik (Redundancy):</strong> 1oo2 (One out of Two) mimarisi ile çift işlemci aynı anda karar verir.</li>
          <li><strong>Sertifikasyon:</strong> TÜV gibi bağımsız kuruluşlar tarafından donanım ve yazılım seviyesinde onaylanmıştır.</li>
        </ul>

        <div className="bg-dark-800 border-l-4 border-brand p-6 my-8">
          <h4 className="text-white font-bold mb-2">Hisar Systems Yaklaşımı</h4>
          <p className="text-slate-300">
            Savunma ve kimya projelerimizde, sadece donanım değil, yazılım mimarisi de SIL3 standartlarına uygun geliştirilir. "Cause & Effect" matrisleri, Safety Function Block'lar ile kodlanır ve simülasyon ortamında fault-injection testlerine tabi tutulur.
          </p>
        </div>
      </>
    )
  },
  'digital-twin-reactor': {
    title: "Digital Twin ile Reaktör Simülasyonu",
    date: "05 Ara 2025",
    readTime: "6 dk",
    author: "R&D Lead",
    category: "Simulation",
    image: twinImg,
    tags: ["Digital Twin", "Simulation", "AI", "Process Control"],
    content: (
      <>
        <p className="lead text-xl text-slate-300 mb-6">
          Deneme-yanılma yöntemi, modern endüstride artık kabul edilemez bir lükstür. Digital Twin, fiziksel bir varlığın sanal kopyasıdır ve geleceği bugünden görmemizi sağlar.
        </p>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">Sanal Devreye Alma (Virtual Commissioning)</h3>
        <p className="text-slate-400 mb-4">
          Bir reaktörün sıcaklık kontrol algoritmasını (PID) sahada, tonlarca kimyasalın içinde test etmek büyük risktir. Digital Twin teknolojisi ile, reaktörün termodinamik modelini çıkarıyor ve PLC kodumuzu bu sanal reaktör üzerinde çalıştırıyoruz.
        </p>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">AI Destekli Senaryo Analizi</h3>
        <p className="text-slate-400 mb-4">
          Sadece nominal çalışma koşullarını değil, arıza durumlarını da simüle ediyoruz:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-400 mb-6">
          <li>Soğutma suyu kesilirse reaktör sıcaklığı ne hızla yükselir?</li>
          <li>Karıştırıcı motoru arızalanırsa ürün viskozitesi nasıl etkilenir?</li>
          <li>Emniyet valfi açılmazsa basınç hangi noktada kritik seviyeye ulaşır?</li>
        </ul>

        <p className="text-slate-400 mb-4">
          Bu senaryolar, yapay zeka algoritmaları ile binlerce kez koşturulur ve en uygun kontrol parametreleri (PID Tuning) otomatik olarak belirlenir. Sonuç: Sahada sıfır sürpriz, %100 güvenli devreye alma.
        </p>
      </>
    )
  },
  'alarm-event-trend': {
    title: "Alarm-Event-Trend Motoru Tasarımı",
    date: "28 Kas 2025",
    readTime: "5 dk",
    author: "SCADA Specialist",
    category: "HMI/SCADA",
    image: alarmImg,
    tags: ["ISA-18.2", "Alarm Management", "SCADA", "UX"],
    content: (
      <>
        <p className="lead text-xl text-slate-300 mb-6">
          Bir operatörün önüne günde 1000 alarm düşüyorsa, aslında hiç alarm düşmüyor demektir. Alarm yorgunluğu (Alarm Fatigue), endüstriyel kazaların en büyük gizli nedenidir.
        </p>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">ISA-18.2 Standardı</h3>
        <p className="text-slate-400 mb-4">
          Uluslararası standartlar, alarmların önceliklendirilmesini ve rasyonalize edilmesini şart koşar. Bizim tasarım felsefemiz şudur: "Eğer operatörün yapabileceği bir aksiyon yoksa, o bir alarm değil, olaydır (Event)."
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="bg-dark-800 p-4 border border-white/5 rounded">
                <h4 className="text-red-400 font-bold mb-2">Kötü Tasarım</h4>
                <p className="text-slate-500 text-sm">Sürekli çalan sirenler, yanıp sönen yüzlerce kırmızı ışık, anlamsız hata kodları.</p>
            </div>
            <div className="bg-dark-800 p-4 border border-brand/20 rounded">
                <h4 className="text-brand font-bold mb-2">İyi Tasarım</h4>
                <p className="text-slate-300 text-sm">Sadece kritik durumlarda uyarı, sorunun kök nedenine yönlendirme, entegre trend analizi.</p>
            </div>
        </div>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">Akıllı Alarm Motoru</h3>
        <p className="text-slate-400 mb-4">
          Geliştirdiğimiz SCADA modülleri, bir alarm oluştuğunda otomatik olarak o anın trend verilerini (sıcaklık, basınç, vb.) ve ilişkili olayları (Event Log) birleştirerek operatöre sunar. Böylece operatör sadece "Ne oldu?" sorusuna değil, "Neden oldu?" sorusuna da anında cevap bulur.
        </p>
      </>
    )
  },
  'ot-network-security': {
    title: "OT-Network Security in Ammo Facilities",
    date: "15 Kas 2025",
    readTime: "10 dk",
    author: "Cyber Security Engineer",
    category: "Cyber Security",
    image: networkImg,
    tags: ["OT Security", "IEC 62443", "Firewall", "Defense"],
    content: (
      <>
        <p className="lead text-xl text-slate-300 mb-6">
          Mühimmat üretim tesisleri, stratejik hedeflerdir. Bu tesislerin otomasyon ağlarına (OT) yapılacak bir siber saldırı, veri hırsızlığından öte, fiziksel sabotaja dönüşebilir.
        </p>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">Air-Gap Efsanesi ve Gerçekler</h3>
        <p className="text-slate-400 mb-4">
          "İnternete bağlı değiliz, güvendeyiz" düşüncesi (Air-Gap), Stuxnet saldırısı ile tarihe karıştı. USB bellekler, bakım bilgisayarları ve tedarikçi erişimleri, izole ağlar için bile tehdit oluşturur.
        </p>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">Derinlemesine Savunma (Defense in Depth)</h3>
        <p className="text-slate-400 mb-4">
          IEC 62443 standardına uygun olarak katmanlı bir güvenlik mimarisi uyguluyoruz:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-400 mb-6">
          <li><strong>Bölge ve İletim Yolları (Zones & Conduits):</strong> Ağ, fiziksel ve mantıksal bölümlere ayrılır. Bir bölge enfekte olsa bile diğerlerine sıçraması engellenir.</li>
          <li><strong>Endüstriyel Firewall:</strong> PLC protokollerini (Profinet, Modbus) tanıyan ve anormal paketleri (DPI) engelleyen özel güvenlik duvarları.</li>
          <li><strong>Sıkılaştırma (Hardening):</strong> Gereksiz portların kapatılması, varsayılan şifrelerin değiştirilmesi ve firmware güncellemeleri.</li>
        </ul>
      </>
    )
  },
  'mes-systems': {
    title: "MES: Üretim Yürütme Sistemleri",
    date: "30 Eki 2025",
    readTime: "7 dk",
    author: "Software Architect",
    category: "Digitalization",
    image: mesImg,
    tags: ["MES", "OEE", "ERP", "Traceability"],
    content: (
      <>
        <p className="lead text-xl text-slate-300 mb-6">
          ERP ofiste ne olduğunu, SCADA sahada ne olduğunu bilir. MES (Manufacturing Execution System) ise bu iki dünya arasındaki köprüdür; "Nasıl üretildi?" sorusunun cevabıdır.
        </p>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">Kağıtsız Üretim (Paperless Manufacturing)</h3>
        <p className="text-slate-400 mb-4">
          İş emirlerinin dijital olarak operatör ekranlarına düşmesi, reçetelerin otomatik yüklenmesi ve üretim sonu raporlarının anlık oluşması... MES, manuel veri girişini ve buna bağlı hataları ortadan kaldırır.
        </p>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">İzlenebilirlik (Traceability)</h3>
        <p className="text-slate-400 mb-4">
          Özellikle otomotiv ve havacılık sektörlerinde, her bir parçanın hangi operatör tarafından, hangi makinede, hangi parametrelerle (tork, sıcaklık, vb.) üretildiği kayıt altına alınmalıdır. Geliştirdiğimiz MES çözümleri, hammadde girişinden sevkiyata kadar uçtan uca izlenebilirlik sunar.
        </p>
      </>
    )
  },
  'pid-vs-fuzzy': {
    title: "PID vs Fuzzy Logic Control",
    date: "12 Eki 2025",
    readTime: "9 dk",
    author: "Control Engineer",
    category: "Control Theory",
    image: pidImg,
    tags: ["PID", "Fuzzy Logic", "Control", "Algorithms"],
    content: (
      <>
        <p className="lead text-xl text-slate-300 mb-6">
          PID (Oransal-İntegral-Türevsel) kontrol, endüstrinin ekmek teknesidir. Ancak doğrusal olmayan (non-linear), çok değişkenli ve ölü zamanlı (dead-time) proseslerde PID yetersiz kalabilir. İşte burada Bulanık Mantık (Fuzzy Logic) devreye girer.
        </p>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">İnsan Gibi Düşünen Kontrolcü</h3>
        <p className="text-slate-400 mb-4">
          PID, matematiksel formüllere dayanır ve kesin değerlerle çalışır. Fuzzy Logic ise tecrübeli bir operatörün mantığını taklit eder: "Sıcaklık çok yüksekse, vanayı biraz kıs."
        </p>

        <div className="bg-dark-800 p-6 rounded border border-white/5 my-6">
            <h4 className="text-white font-bold mb-4">Karşılaştırma</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                    <h5 className="text-brand font-bold mb-2">PID Kontrol</h5>
                    <ul className="list-disc pl-4 text-slate-400 space-y-1">
                        <li>Doğrusal sistemlerde mükemmel</li>
                        <li>Matematiksel model gerektirir</li>
                        <li>Parametre değişirse ayar bozulabilir</li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-brand font-bold mb-2">Fuzzy Logic</h5>
                    <ul className="list-disc pl-4 text-slate-400 space-y-1">
                        <li>Karmaşık sistemlerde esnek</li>
                        <li>Uzman bilgisi ile kural tabanlı</li>
                        <li>Gürültüye ve değişimlere dayanıklı</li>
                    </ul>
                </div>
            </div>
        </div>

        <p className="text-slate-400 mb-4">
          Hisar Systems olarak, hibrit kontrol mimarilerini tercih ediyoruz. Sistemin kararlı olduğu bölgelerde PID'nin hassasiyetini, geçiş süreçlerinde ve anormalliklerde ise Fuzzy Logic'in esnekliğini kullanarak optimum kontrol sağlıyoruz.
        </p>
      </>
    )
  }
};

const blogPostsEn: Record<BlogKey, BlogPost> = {
  'sil3-safety-plc': {
    title: "What is SIL3 Safety PLC?",
    date: "Dec 09, 2025",
    readTime: "8 min",
    author: "Senior Automation Architect",
    category: "Safety Systems",
    image: safetyImg,
    tags: ["SIL3", "IEC 61508", "Safety PLC", "ESD"],
    content: (
      <>
        <p className="lead text-xl text-slate-300 mb-6">
          The cost of industrial accidents is not just financial; human life and environmental disasters form the basis of risk analysis. SIL (Safety Integrity Level) is an international language that sets these risks on a measurable standard.
        </p>
        
        <h3 className="text-2xl font-bold text-white mt-8 mb-4">IEC 61508 and Safety Life Cycle</h3>
        <p className="text-slate-400 mb-4">
          For an automation system to be considered "safe", the Probability of Failure on Demand (PFD) must be below certain limits. SIL3 level represents a failure probability between 10^-3 and 10^-4. This means that if the system runs continuously, it might fail dangerously once in a thousand years.
        </p>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">Why is Standard PLC Not Enough?</h3>
        <p className="text-slate-400 mb-4">
          Standard PLCs are designed to run the process, not to stop it. Safety PLCs have a "Fail-Safe" architecture. That is, even if the CPU fails, a cable breaks, or a sensor malfunctions, the system puts itself into a Safe State.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-400 mb-6">
          <li><strong>Diagnostic Coverage (DC):</strong> Safety PLC tests its own internal circuits in every cycle.</li>
          <li><strong>Redundancy:</strong> With 1oo2 (One out of Two) architecture, dual processors decide simultaneously.</li>
          <li><strong>Certification:</strong> Approved at hardware and software levels by independent organizations like TUV.</li>
        </ul>

        <div className="bg-dark-800 border-l-4 border-brand p-6 my-8">
          <h4 className="text-white font-bold mb-2">Hisar Systems Approach</h4>
          <p className="text-slate-300">
            In our defense and chemical projects, not only the hardware but also the software architecture is developed in accordance with SIL3 standards. "Cause & Effect" matrices are coded with Safety Function Blocks and subjected to fault-injection tests in a simulation environment.
          </p>
        </div>
      </>
    )
  },
  'digital-twin-reactor': {
    title: "Reactor Simulation with Digital Twin",
    date: "Dec 05, 2025",
    readTime: "6 min",
    author: "R&D Lead",
    category: "Simulation",
    image: twinImg,
    tags: ["Digital Twin", "Simulation", "AI", "Process Control"],
    content: (
      <>
        <p className="lead text-xl text-slate-300 mb-6">
          Trial-and-error method is no longer an acceptable luxury in modern industry. Digital Twin is a virtual copy of a physical asset and allows us to see the future today.
        </p>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">Virtual Commissioning</h3>
        <p className="text-slate-400 mb-4">
          Testing a reactor's temperature control algorithm (PID) in the field, inside tons of chemicals, is a huge risk. With Digital Twin technology, we extract the thermodynamic model of the reactor and run our PLC code on this virtual reactor.
        </p>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">AI-Supported Scenario Analysis</h3>
        <p className="text-slate-400 mb-4">
          We simulate not only nominal operating conditions but also fault situations:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-400 mb-6">
          <li>If the cooling water is cut off, how fast does the reactor temperature rise?</li>
          <li>If the mixer motor fails, how is product viscosity affected?</li>
          <li>If the safety valve does not open, at what point does the pressure reach a critical level?</li>
        </ul>

        <p className="text-slate-400 mb-4">
          These scenarios are run thousands of times with artificial intelligence algorithms, and the most appropriate control parameters (PID Tuning) are automatically determined. Result: Zero surprises in the field, 100% safe commissioning.
        </p>
      </>
    )
  },
  'alarm-event-trend': {
    title: "Alarm-Event-Trend Engine Design",
    date: "Nov 28, 2025",
    readTime: "5 min",
    author: "SCADA Specialist",
    category: "HMI/SCADA",
    image: alarmImg,
    tags: ["ISA-18.2", "Alarm Management", "SCADA", "UX"],
    content: (
      <>
        <p className="lead text-xl text-slate-300 mb-6">
          If 1000 alarms fall in front of an operator a day, actually no alarm is falling. Alarm Fatigue is the biggest hidden cause of industrial accidents.
        </p>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">ISA-18.2 Standard</h3>
        <p className="text-slate-400 mb-4">
          International standards require alarms to be prioritized and rationalized. Our design philosophy is: "If there is no action the operator can take, it is not an alarm, it is an Event."
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="bg-dark-800 p-4 border border-white/5 rounded">
                <h4 className="text-red-400 font-bold mb-2">Bad Design</h4>
                <p className="text-slate-500 text-sm">Constantly ringing sirens, hundreds of flashing red lights, meaningless error codes.</p>
            </div>
            <div className="bg-dark-800 p-4 border border-brand/20 rounded">
                <h4 className="text-brand font-bold mb-2">Good Design</h4>
                <p className="text-slate-300 text-sm">Warning only in critical situations, directing to the root cause of the problem, integrated trend analysis.</p>
            </div>
        </div>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">Smart Alarm Engine</h3>
        <p className="text-slate-400 mb-4">
          The SCADA modules we developed automatically combine the trend data of that moment (temperature, pressure, etc.) and related events (Event Log) when an alarm occurs and present them to the operator. Thus, the operator finds an instant answer not only to the question "What happened?" but also to "Why did it happen?".
        </p>
      </>
    )
  },
  'ot-network-security': {
    title: "OT-Network Security in Ammo Facilities",
    date: "Nov 15, 2025",
    readTime: "10 min",
    author: "Cyber Security Engineer",
    category: "Cyber Security",
    image: networkImg,
    tags: ["OT Security", "IEC 62443", "Firewall", "Defense"],
    content: (
      <>
        <p className="lead text-xl text-slate-300 mb-6">
          Ammunition production facilities are strategic targets. A cyber attack on the automation networks (OT) of these facilities can turn into physical sabotage beyond data theft.
        </p>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">Air-Gap Myth and Facts</h3>
        <p className="text-slate-400 mb-4">
          The idea "We are not connected to the internet, we are safe" (Air-Gap) became history with the Stuxnet attack. USB sticks, maintenance computers, and supplier access pose a threat even for isolated networks.
        </p>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">Defense in Depth</h3>
        <p className="text-slate-400 mb-4">
          We implement a layered security architecture in accordance with the IEC 62443 standard:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-400 mb-6">
          <li><strong>Zones & Conduits:</strong> The network is divided into physical and logical sections. Even if one zone is infected, it is prevented from spreading to others.</li>
          <li><strong>Industrial Firewall:</strong> Special firewalls that recognize PLC protocols (Profinet, Modbus) and block abnormal packets (DPI).</li>
          <li><strong>Hardening:</strong> Closing unnecessary ports, changing default passwords, and firmware updates.</li>
        </ul>
      </>
    )
  },
  'mes-systems': {
    title: "MES: Manufacturing Execution Systems",
    date: "Oct 30, 2025",
    readTime: "7 min",
    author: "Software Architect",
    category: "Digitalization",
    image: mesImg,
    tags: ["MES", "OEE", "ERP", "Traceability"],
    content: (
      <>
        <p className="lead text-xl text-slate-300 mb-6">
          ERP knows what happens in the office, SCADA knows what happens in the field. MES (Manufacturing Execution System) is the bridge between these two worlds; it is the answer to the question "How was it produced?".
        </p>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">Paperless Manufacturing</h3>
        <p className="text-slate-400 mb-4">
          Work orders falling digitally onto operator screens, automatic loading of recipes, and instant generation of end-of-production reports... MES eliminates manual data entry and associated errors.
        </p>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">Traceability</h3>
        <p className="text-slate-400 mb-4">
          Especially in automotive and aviation sectors, it must be recorded by which operator, on which machine, with which parameters (torque, temperature, etc.) each part was produced. Our MES solutions offer end-to-end traceability from raw material entry to shipment.
        </p>
      </>
    )
  },
  'pid-vs-fuzzy': {
    title: "PID vs Fuzzy Logic Control",
    date: "Oct 12, 2025",
    readTime: "9 min",
    author: "Control Engineer",
    category: "Control Theory",
    image: pidImg,
    tags: ["PID", "Fuzzy Logic", "Control", "Algorithms"],
    content: (
      <>
        <p className="lead text-xl text-slate-300 mb-6">
          PID (Proportional-Integral-Derivative) control is the bread and butter of the industry. However, in non-linear, multi-variable, and dead-time processes, PID may fall short. This is where Fuzzy Logic comes into play.
        </p>

        <h3 className="text-2xl font-bold text-white mt-8 mb-4">The Controller That Thinks Like a Human</h3>
        <p className="text-slate-400 mb-4">
          PID relies on mathematical formulas and works with precise values. Fuzzy Logic mimics the logic of an experienced operator: "If the temperature is too high, close the valve a little."
        </p>

        <div className="bg-dark-800 p-6 rounded border border-white/5 my-6">
            <h4 className="text-white font-bold mb-4">Comparison</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                    <h5 className="text-brand font-bold mb-2">PID Control</h5>
                    <ul className="list-disc pl-4 text-slate-400 space-y-1">
                        <li>Excellent in linear systems</li>
                        <li>Requires mathematical model</li>
                        <li>Setting may deteriorate if parameter changes</li>
                    </ul>
                </div>
                <div>
                    <h5 className="text-brand font-bold mb-2">Fuzzy Logic</h5>
                    <ul className="list-disc pl-4 text-slate-400 space-y-1">
                        <li>Flexible in complex systems</li>
                        <li>Rule-based with expert knowledge</li>
                        <li>Resistant to noise and changes</li>
                    </ul>
                </div>
            </div>
        </div>

        <p className="text-slate-400 mb-4">
          As Hisar Systems, we prefer hybrid control architectures. We ensure optimum control by using the precision of PID in regions where the system is stable, and the flexibility of Fuzzy Logic in transition processes and abnormalities.
        </p>
      </>
    )
  }
};

export default function BlogDetail() {
  const { slug } = useParams<{ slug: BlogKey }>();
  const { language, t } = useLanguage();
  
  const blogPosts = language === 'tr' ? blogPostsTr : blogPostsEn;
  const post = slug ? blogPosts[slug] : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-2xl">{t('project_detail_labels.not_found') || 'Yazı bulunamadı.'}</p>
          <Link to="/blog" className="text-brand underline">
            {t('blog_page.back')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen pt-20">
      <SEO 
        title={post.title}
        description={`${post.title} - ${t('blog_page.title')}`}
        keywords={`${post.tags.join(', ')}, ${t('blog_page.title')}, Hisar Systems`}
      />
      {/* Hero Image */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
            <div className="max-w-4xl mx-auto">
                <Link to="/blog" className="inline-flex items-center text-brand mb-6 hover:underline bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm border border-brand/20">
                    <ArrowLeft className="w-4 h-4 mr-2" /> {t('blog_page.back')}
                </Link>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300 mb-4">
                    <span className="bg-brand/20 text-brand px-2 py-0.5 rounded border border-brand/20">{post.category}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {post.readTime} {t('blog_page.read_time')}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">{post.title}</h1>
            </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
         <div className="flex flex-col md:flex-row gap-12">
             
             {/* Main Content */}
             <div className="flex-1">
                 <div className="prose prose-invert prose-lg max-w-none">
                     {post.content}
                 </div>

                 {/* Tags */}
                 <div className="mt-12 pt-8 border-t border-white/10">
                     <div className="flex flex-wrap gap-2">
                         {post.tags.map((tag, i) => (
                             <span key={i} className="flex items-center gap-1 text-sm bg-dark-800 text-slate-300 px-3 py-1 rounded-full border border-white/5 hover:border-brand/30 transition-colors">
                                 <Tag className="w-3 h-3" /> {tag}
                             </span>
                         ))}
                     </div>
                 </div>
             </div>

             {/* Sidebar */}
             <div className="md:w-64 space-y-8">
                 <div className="bg-dark-900 border border-white/10 p-6 rounded-lg sticky top-24">
                     <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                         <User className="w-4 h-4 text-brand" /> {t('blog_page.author')}
                     </h4>
                     <p className="text-slate-300 font-medium">{post.author}</p>
                     <p className="text-slate-500 text-sm mt-1">{t('blog_page.team')}</p>
                     
                     <div className="mt-6 pt-6 border-t border-white/10">
                         <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                             <Share2 className="w-4 h-4 text-brand" /> {t('blog_page.share')}
                         </h4>
                         <div className="flex gap-2">
                             {['LinkedIn', 'Twitter', 'Email'].map((platform) => (
                                 <button key={platform} className="text-xs bg-white/5 hover:bg-white/10 text-slate-300 px-2 py-1 rounded border border-white/10 transition-colors">
                                     {platform}
                                 </button>
                             ))}
                         </div>
                     </div>

                     <div className="mt-8 pt-6 border-t border-white/10">
                         <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                             <BookOpen className="w-4 h-4 text-brand" /> {t('blog_page.related')}
                         </h4>
                         <ul className="space-y-3 text-sm">
                             <li>
                                 <Link to="/blog/digital-twin-reactor" className="text-slate-400 hover:text-brand transition-colors line-clamp-2">
                                     {t('blog_list.digital-twin-reactor.title')}
                                 </Link>
                             </li>
                             <li>
                                 <Link to="/blog/sil3-safety-plc" className="text-slate-400 hover:text-brand transition-colors line-clamp-2">
                                     {t('blog_list.sil3-safety-plc.title')}
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
