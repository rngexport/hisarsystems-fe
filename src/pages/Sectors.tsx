import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

import defenceImg from '../images/Rheinmetall-1-copy.jpg';
import chemicalImg from '../images/a-modern-chemical-plant-control-room-featuring-anti-static-flooring.webp';
import plasticImg from '../images/snekovani_stv.jpg';
import textileImg from '../images/DSC01694.jpg';
import foodImg from '../images/Stainless-Steel-Pump-Package-e1740670365157.jpg';
import energyImg from '../images/fawley-power-station.jpg';

const sectors = [
  {
    title: 'Savunma Sanayi',
    desc: 'Nitro-selüloz, TNT, RDX ve enerjetik prosesler için SIL güvenlikli SCADA–PLC mimarileri',
    image: defenceImg,
    to: '/sectors/defence'
  },
  {
    title: 'Kimya & Proses',
    desc: 'Reaktör, kolonu, asit–alkol geri kazanım ve batch proses kontrol yazılımları',
    image: chemicalImg,
    to: '/sectors/chemical'
  },
  {
    title: 'Plastik & Polimer',
    desc: 'Ekstrüzyon, twin-roll ve granülizasyon hatları için tork–sıcaklık–hız senkronizasyonu',
    image: plasticImg,
    to: '/sectors/plastic'
  },
  {
    title: 'Tekstil Otomasyon',
    desc: 'Kotonizasyon, aspirasyon, kurutma ve hız kontrollü elyaf işleme otomasyonu',
    image: textileImg,
    to: '/sectors/textile'
  },
  {
    title: 'Gıda & Paketleme',
    desc: 'CIP/SIP sterilizasyon, dolum hattı kontrolü, üretim izlenebilirlik yazılımları',
    image: foodImg,
    to: '/sectors/food'
  },
  {
    title: 'Enerji & Yardımcılar',
    desc: 'Buhar, basınç, su & chiller yönetimi için SCADA tabanlı izleme ve raporlama',
    image: energyImg,
    to: '/sectors/energy'
  }
];

const Sectors = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-black min-h-screen py-24">
      <SEO 
        title={t('seo.sectors.title')}
        description={t('seo.sectors.description')}
        keywords={t('seo.sectors.keywords')}
      />
       <div className="max-w-7xl mx-auto px-4">
         <div className="text-center mb-16">
           <h1 className="text-4xl font-bold text-white mb-4">Sektörel Çözümler</h1>
           <p className="text-slate-400 max-w-2xl mx-auto">
             Kritik proseslerde güvenlik, süreklilik ve tam kontrol sağlayan endüstriyel otomasyon çözümleri.
           </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {sectors.map((sector, index) => (
             <Link to={sector.to} key={index} className="group relative h-80 bg-dark-900 border border-white/5 overflow-hidden rounded-sm hover:border-brand/50 transition-all block">
               {/* Background Image */}
               <div className="absolute inset-0">
                 <img 
                   src={sector.image} 
                   alt={sector.title} 
                   className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
               </div>

               <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                 <div className="h-1 w-12 bg-brand mb-4 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"></div>
                 <h3 className="text-2xl font-bold text-white mb-2">{sector.title}</h3>
                 <p className="text-slate-300 text-sm max-w-md transform translate-y-4 opacity-80 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                   {sector.desc}
                 </p>
               </div>
             </Link>
           ))}
         </div>
       </div>
    </div>
  );
};

export default Sectors;
