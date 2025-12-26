import React from 'react';
import { Target, Users, History, Award, BookOpen, Cpu } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

import aboutBg from '../images/manufacturing-plant-control-room-example-1-e1466440622830.jpg';
import missionImg from '../images/braumat.jpg';
import visionImg from '../images/futuristic-command-center-multiple-screens-displaying-high-tech-data-global-information-futuristic-command-center-305293722.webp';
import historyImg from '../images/DSC01713.jpg';
import managementImg from '../images/master-control-room-thinking-space-systems-view-2.jpg';
import labImg from '../images/digital_twin_m1016-01.jpg';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-black min-h-screen">
      <SEO 
        title={t('seo.about.title')}
        description={t('seo.about.description')}
        keywords={t('seo.about.keywords')}
      />
      {/* Header */}
      <div className="relative py-24 bg-dark-900 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={aboutBg} 
            alt="Control Room" 
            className="w-full h-full object-cover opacity-10 blur-sm"
          />
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 mb-4 border-l-2 border-brand bg-brand/10 text-brand text-xs font-mono uppercase">
                {t('about_page.corporate')}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t('about_page.hero_title')}
              </h1>
              <div className="h-1 w-full bg-dark-700 rounded-full overflow-hidden">
                <div className="h-full bg-brand w-2/3 animate-[loading_2s_ease-in-out_infinite]"></div>
              </div>
            </div>
            <div className="md:w-1/2 text-slate-400 text-lg leading-relaxed">
              <p>
                {t('about_page.hero_desc')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History Timeline */}
      <section className="py-20 border-b border-white/5 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block">
           <img src={historyImg} className="w-full h-full object-cover opacity-20 mask-image-linear-gradient" alt="History" />
           <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <div className="md:w-1/3 border-l-4 border-military pl-6">
              <h2 className="text-2xl font-bold text-white mb-2">{t('about_page.history_title')}</h2>
              <p className="text-slate-400 text-sm">{t('about_page.history_subtitle')}</p>
            </div>
            <div className="md:w-2/3 space-y-8">
              <div className="relative pl-8 border-l border-brand/20">
                <div className="absolute -left-1.5 top-2 w-3 h-3 bg-brand rounded-full shadow-[0_0_10px_#00f6d8]"></div>
                <h3 className="text-xl font-bold text-white mb-2">{t('about_page.history_2012_title')}</h3>
                <p className="text-slate-400">
                  {t('about_page.history_2012_desc')}
                </p>
              </div>
              <div className="relative pl-8 border-l border-brand/20">
                <div className="absolute -left-1.5 top-2 w-3 h-3 bg-military rounded-full border border-brand"></div>
                <h3 className="text-xl font-bold text-white mb-2">{t('about_page.history_2019_title')}</h3>
                <p className="text-slate-400">
                  {t('about_page.history_2019_desc')}
                </p>
              </div>
              <div className="relative pl-8 border-l border-brand/20">
                <div className="absolute -left-1.5 top-2 w-3 h-3 bg-white rounded-full"></div>
                <h3 className="text-xl font-bold text-white mb-2">{t('about_page.history_today_title')}</h3>
                <p className="text-slate-400">
                  {t('about_page.history_today_desc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          <div className="p-8 border border-white/5 bg-black hover:border-brand/30 transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 z-0">
               <img src={missionImg} className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity grayscale" alt="Mission" />
               <div className="absolute inset-0 bg-black/80"></div>
            </div>
            <div className="relative z-10">
                <Target className="w-12 h-12 text-brand mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-4">{t('about_page.mission')}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {t('about_page.mission_desc')}
                </p>
            </div>
          </div>
          <div className="p-8 border border-white/5 bg-black hover:border-brand/30 transition-colors group relative overflow-hidden">
            <div className="absolute inset-0 z-0">
               <img src={visionImg} className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity grayscale" alt="Vision" />
               <div className="absolute inset-0 bg-black/80"></div>
            </div>
            <div className="relative z-10">
                <History className="w-12 h-12 text-brand mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-4">{t('about_page.vision')}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {t('about_page.vision_desc')}
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
           <img src={managementImg} className="w-full h-full object-cover opacity-10 blur-sm" alt="Management" />
           <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">{t('about_page.management_title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: t('about_page.management_council'), desc: t('about_page.management_council_desc'), icon: Award },
              { title: t('about_page.management_scada'), desc: t('about_page.management_scada_desc'), icon: Cpu },
              { title: t('about_page.management_plc'), desc: t('about_page.management_plc_desc'), icon: Users },
              { title: t('about_page.management_rnd'), desc: t('about_page.management_rnd_desc'), icon: BookOpen }
            ].map((item, i) => (
              <div key={i} className="bg-dark-900/80 backdrop-blur p-6 border-t-2 border-military hover:border-brand transition-colors group">
                <item.icon className="w-8 h-8 text-slate-500 mb-4 group-hover:text-brand transition-colors" />
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab & Infrastructure */}
      <section className="py-20 bg-dark-900 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
               <div className="lg:w-1/2 relative rounded-lg overflow-hidden border border-white/10 group h-[400px]">
                  <img src={labImg} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt="Lab" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                     <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 border border-brand/30 rounded bg-brand/5">
                        <Cpu className="w-4 h-4 text-brand" />
                        <span className="text-brand text-xs font-mono">{t('about_page.lab_label')}</span>
                     </div>
                     <h3 className="text-2xl font-bold text-white">{t('about_page.lab_title')}</h3>
                  </div>
               </div>
               <div className="lg:w-1/2 space-y-6">
                  <h2 className="text-3xl font-bold text-white">{t('about_page.lab_heading')}</h2>
                  <p className="text-slate-400 leading-relaxed">
                     {t('about_page.lab_desc')}
                  </p>
                  <ul className="space-y-4">
                     {t('about_page.lab_items').map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3">
                           <div className="w-1.5 h-1.5 mt-2 bg-brand rounded-full"></div>
                           <span className="text-slate-300">{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;
