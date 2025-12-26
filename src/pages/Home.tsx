import React from 'react';
import { Shield, Factory, Zap, Cpu, Activity, Server, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

// Import images
import heroBg from '../images/high-tech-command-center-visualizing-global-data-streams-photo.jpg';
import showcaseBg from '../images/fce9c24e-307b-424a-8e62-ec071b936905_Virtual-Twin-1200_extra_large.jpeg';
import robotArmImg from '../images/ABB-IRB-6700-spot-welding-car-parts_v2.jpg';
import factoryLineImg from '../images/Accenture-Automobile-Plant-3840x2160_rad-3x2.webp';
import controlRoomImg from '../images/a-modern-chemical-plant-control-room-featuring-anti-static-flooring.webp';

import defenceSectorImg from '../images/Rheinmetall-1-copy.jpg';
import chemicalSectorImg from '../images/oil-gas-refinery-plant-storage-tank-form-industry-zone-night-sky-star-aerial-view-industrial-petrochemical-fuel-power-177888096.webp';
import plasticSectorImg from '../images/Accenture-Automobile-Plant-3840x2160_rad-3x2.webp';
import textileSectorImg from '../images/advanced-robotics-automated-assembly-line-high-tech-manufacturing-plant-cutting-edge-technology-action-futuristic-316902059.webp';
import foodSectorImg from '../images/Stainless-Steel-Pump-Package-e1740670365157.jpg';
import energySectorImg from '../images/fawley-power-station.jpg';

const Home = () => {
  const { t } = useLanguage();

  const sectors = [
    {
      icon: Shield,
      title: t('sectors.items.defence.title'),
      desc: t('sectors.items.defence.desc'),
      color: 'text-red-500',
      bgImage: defenceSectorImg,
      to: '/sectors/defence'
    },
    {
      icon: Activity,
      title: t('sectors.items.chemical.title'),
      desc: t('sectors.items.chemical.desc'),
      color: 'text-brand',
      bgImage: chemicalSectorImg,
      to: '/sectors/chemical'
    },
    {
      icon: Factory,
      title: t('sectors.items.plastic.title'),
      desc: t('sectors.items.plastic.desc'),
      color: 'text-orange-500',
      bgImage: plasticSectorImg,
      to: '/sectors/plastic'
    },
    {
      icon: Cpu,
      title: t('sectors.items.textile.title'),
      desc: t('sectors.items.textile.desc'),
      color: 'text-blue-500',
      bgImage: textileSectorImg,
      to: '/sectors/textile'
    },
    {
      icon: Server,
      title: t('sectors.items.food.title'),
      desc: t('sectors.items.food.desc'),
      color: 'text-green-500',
      bgImage: foodSectorImg,
      to: '/sectors/food'
    },
    {
      icon: Zap,
      title: t('sectors.items.energy.title'),
      desc: t('sectors.items.energy.desc'),
      color: 'text-yellow-500',
      bgImage: energySectorImg,
      to: '/sectors/energy'
    }
  ];

  return (
    <div className="bg-black">
      <SEO 
        title="Home"
        description={t('seo.home.description')}
        keywords={t('seo.home.keywords')}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <img 
            src={heroBg} 
            alt="Industrial Intelligence Command Center" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-hex-pattern opacity-30 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black"></div>
        
        {/* Radar/Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-brand/30 rounded-full opacity-50"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1 mb-6 border border-brand/30 rounded-full bg-brand/5 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-brand animate-pulse"></div>
            <span className="text-brand text-xs font-mono tracking-widest uppercase">System Operational</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            {t('hero.title')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
              {t('hero.subtitle')}
            </span>
          </h1>
          
          <div className="w-32 h-1 bg-brand mx-auto mb-8 shadow-[0_0_15px_#00f6d8]"></div>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            {t('hero.desc')}
            <br />
            <span className="text-white font-medium">{t('hero.slogan')}</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/services" className="btn-primary group w-full sm:w-auto">
              {t('hero.explore')}
              <ChevronRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="btn-secondary group w-full sm:w-auto">
              {t('hero.proposal')}
            </Link>
          </div>
        </div>
      </section>

      {/* NEW: Visual Feature Grid (clickable, turquoise hover) */}
      <section className="py-0 bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-auto md:h-[600px]">
          {[
            {
              label: t('features.robotic.label'),
              title: t('features.robotic.title'),
              image: robotArmImg,
              to: '/details/robotic',
            },
            {
              label: t('features.factory.label'),
              title: t('features.factory.title'),
              image: factoryLineImg,
              to: '/details/factory',
            },
            {
              label: t('features.scada.label'),
              title: t('features.scada.title'),
              image: controlRoomImg,
              to: '/details/scada',
            },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="relative group overflow-hidden border-r border-b border-white/10 focus:outline-none focus:ring-2 focus:ring-brand/60"
            >
              <img
                src={item.image}
                className="w-full h-full object-cover opacity-100 transition-all duration-700 group-hover:scale-110 group-hover:brightness-[0.55] group-hover:contrast-[1.35] group-hover:saturate-[1.4]"
                alt={item.title}
              />
              {/* Photographic effect: neon skeleton style (no grayscale) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/10 to-transparent"></div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity duration-600 mix-blend-screen">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(0,246,216,0.45),transparent_45%)]" />
                <div className="absolute inset-0 bg-[conic-gradient(from_90deg,rgba(0,246,216,0.25),transparent_40%,rgba(0,246,216,0.15),transparent_70%)] mix-blend-screen" />
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-70 transition-opacity duration-700 mix-blend-difference">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,246,216,0.35),transparent_30%,rgba(0,246,216,0.25),transparent_70%)]" />
              </div>

              <div className="absolute bottom-10 left-10 z-10">
                <div className="text-brand font-mono text-xs mb-2 tracking-[0.2em]">
                  {item.label}
                </div>
                <h3 className="text-3xl font-bold text-white drop-shadow-[0_0_10px_rgba(0,246,216,0.4)]">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 relative bg-dark-900">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('sectors.title')}</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              {t('sectors.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <Link 
                to={sector.to}
                key={index} 
                className="group relative bg-dark-800 border border-white/5 p-8 hover:border-brand/50 transition-all duration-300 overflow-hidden h-[300px] flex flex-col justify-end focus:outline-none focus:ring-2 focus:ring-brand/60"
              >
                {/* Bg Image */}
                <div className="absolute inset-0 z-0">
                  <img src={sector.bgImage} className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-500 grayscale group-hover:grayscale-0" alt={sector.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/80 to-transparent"></div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                <div className="absolute -right-12 -top-12 w-24 h-24 bg-brand/20 blur-3xl group-hover:bg-brand/30 transition-all duration-500 z-10 pointer-events-none"></div>

                {/* Scan Line Animation on Hover */}
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 pointer-events-none z-10">
                   <div className="w-1 h-full bg-brand/30 absolute top-0 left-0 animate-[scan-right_1s_ease-in-out_infinite]"></div>
                </div>

                <div className="relative z-20">
                  <sector.icon className={`w-10 h-10 ${sector.color} mb-4 transform group-hover:scale-110 transition-transform`} />
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand transition-colors">{sector.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2 group-hover:line-clamp-none transition-all">
                    {sector.desc}
                  </p>
                  
                  <div className="flex items-center text-xs text-brand font-mono uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                    {t('sectors.detail_link')} <ArrowRight className="ml-2 w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Showcase Section */}
      <section className="relative py-32 overflow-hidden">
         <div className="absolute inset-0">
            <img src={showcaseBg} className="w-full h-full object-cover opacity-50" alt="Showcase" />
            <div className="absolute inset-0 bg-black/70"></div>
         </div>
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <div className="space-y-8">
                  <div className="inline-flex items-center gap-2 px-4 py-1 border border-brand/50 rounded-full bg-brand/10 backdrop-blur">
                     <span className="w-2 h-2 rounded-full bg-brand animate-pulse"></span>
                     <span className="text-brand text-xs font-mono tracking-widest uppercase font-bold">{t('showcase.label')}</span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                     {t('showcase.title_start')} <br /> {t('showcase.title_mid')} <br />
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-white">{t('showcase.title_end')}</span>
                  </h2>
                  <p className="text-slate-300 text-xl leading-relaxed">
                     {t('showcase.desc')}
                  </p>
                  <div className="flex gap-4">
                     <Link to="/rnd" className="btn-primary">
                        {t('showcase.btn_rnd')}
                     </Link>
                     <Link to="/technologies" className="btn-secondary">
                        {t('showcase.btn_tech')}
                     </Link>
                  </div>
               </div>
               <div className="relative rounded-2xl overflow-hidden border border-white/20 group shadow-2xl shadow-brand/20">
                  <img src={showcaseBg} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" alt="Simulation" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent mix-blend-overlay"></div>
                  
                  {/* Floating UI Element */}
                  <div className="absolute bottom-8 right-8 bg-black/80 backdrop-blur border border-white/10 p-6 rounded-lg max-w-xs">
                     <div className="flex items-center justify-between mb-2">
                        <span className="text-brand font-mono text-xs">{t('showcase.status')}</span>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                     </div>
                     <div className="text-white font-bold text-lg mb-1">98.4% Accuracy</div>
                     <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-brand w-[98.4%]"></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* Reference Roadmap Teaser */}
      <section className="py-20 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white mb-8">{t('reference.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                {t('reference.items').map((item: string, i: number) => (
                    <Link to="/projects" key={i} className="group flex items-center gap-3 p-4 border border-white/5 bg-dark-800 rounded hover:border-brand/30 transition-colors cursor-pointer">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full group-hover:shadow-[0_0_8px_#00f6d8] transition-shadow"></div>
                        <span className="text-slate-300 text-sm group-hover:text-white transition-colors">{item}</span>
                    </Link>
                ))}
            </div>
            <div className="mt-12">
                <Link to="/projects" className="text-brand hover:text-white transition-colors underline decoration-brand/30 underline-offset-8">
                    {t('reference.link')}
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

