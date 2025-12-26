import React from 'react';
import { Radar, PenTool, Activity } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

import digitalTwinImg from '../images/digital_twin_m1016-01.jpg';

const RnD = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-black min-h-screen py-24 overflow-hidden relative">
      <SEO 
        title={t('seo.rnd.title')}
        description={t('seo.rnd.description')}
        keywords={t('seo.rnd.keywords')}
      />
      {/* HUD Overlay Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-10 w-64 h-64 border border-brand/20 rounded-full opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-brand/10 rounded-full border-dashed animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vh] h-[80vh] border border-white/5 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-brand/30 rounded bg-brand/5">
             <Activity className="w-4 h-4 text-brand animate-pulse" />
             <span className="text-brand text-xs font-mono">LIVE SIMULATION</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">{t('rnd_page.title')}</h1>
          <p className="text-slate-400 max-w-2xl">
            {t('rnd_page.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Simulation Visual */}
          <div className="relative aspect-square bg-dark-900 border border-brand/20 rounded-lg overflow-hidden flex items-center justify-center group">
             {/* Background Image */}
             <div className="absolute inset-0">
               <img 
                 src={digitalTwinImg} 
                 alt="Digital Twin Simulation" 
                 className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700"
               />
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
             
             {/* Abstract Reactor Wireframe */}
             <div className="w-64 h-64 border border-brand shadow-[0_0_15px_#00f6d8] animate-[spin_10s_linear_infinite] opacity-50 relative z-10">
               <div className="absolute inset-0 border border-brand/50 rotate-45"></div>
               <div className="absolute inset-0 border border-brand/30 -rotate-45"></div>
             </div>
             
             {/* HUD Metrics */}
             <div className="absolute top-4 left-4 font-mono text-xs text-brand">
               <div>{t('rnd_page.hud_temp')}: 145.2 °C</div>
               <div>{t('rnd_page.hud_press')}: 4.2 BAR</div>
             </div>
             <div className="absolute bottom-4 right-4 font-mono text-xs text-brand text-right">
                <div>{t('rnd_page.hud_batch_id')}: #X92-004</div>
                <div>{t('rnd_page.hud_status')}: {t('rnd_page.hud_optimal')}</div>
             </div>
          </div>

          <div className="space-y-8">
            <div className="p-6 border border-white/10 bg-black/50 hover:border-brand/50 transition-colors">
              <Radar className="w-8 h-8 text-brand mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{t('rnd_page.twin_model_title')}</h3>
              <p className="text-slate-400 text-sm">{t('rnd_page.twin_model_desc')}</p>
            </div>
            
            <div className="p-6 border border-white/10 bg-black/50 hover:border-brand/50 transition-colors">
              <PenTool className="w-8 h-8 text-brand mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{t('rnd_page.ai_control_title')}</h3>
              <p className="text-slate-400 text-sm">{t('rnd_page.ai_control_desc')}</p>
            </div>

            <div className="p-6 border border-white/10 bg-black/50 hover:border-brand/50 transition-colors">
               <Activity className="w-8 h-8 text-brand mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{t('rnd_page.alarm_engine_title')}</h3>
              <p className="text-slate-400 text-sm">{t('rnd_page.alarm_engine_desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RnD;
