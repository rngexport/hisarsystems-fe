import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Database, Cloud, Lock, BarChart } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

import plcImg from '../images/35617950-control-panel-equipment-on-water-conditioning-or-distillation-room-on-pharmaceutical-industry-or.jpg';
import scadaImg from '../images/master-control-room-thinking-space-systems-view-2.jpg';
import iotImg from '../images/IoT-IIoT-Industrial-Internet-Connectivity-Automation-Robotics-Digital-Technologies-Stock-Image.jpg';
import cyberImg from '../images/shutterstock_1194326800-2-1.jpg';
import dataImg from '../images/high-tech-command-center-visualizing-global-data-streams-photo.jpg';

const Technologies = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-black min-h-screen py-24">
      <SEO 
        title={t('seo.technologies.title')}
        description={t('seo.technologies.description')}
        keywords={t('seo.technologies.keywords')}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{t('technologies_page.title')}</h1>
          <p className="text-slate-400">{t('technologies_page.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tech Card */}
          <Link to="/technologies/plc" className="bg-dark-800 border border-white/10 p-1 rounded-sm relative group overflow-hidden h-[400px]">
             {/* Background Image */}
             <div className="absolute inset-0 z-0">
               <img src={plcImg} className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-700 grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110" alt="PLC" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
             </div>
             
            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
              <Cpu className="w-12 h-12 text-brand mb-4 bg-black/50 p-2 rounded border border-brand/20 backdrop-blur" />
              <h3 className="text-2xl font-bold text-white mb-2">{t('technologies_list.plc.title')}</h3>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                  {t('technologies_list.plc.summary')}
              </p>
              <div className="flex gap-2 text-xs font-mono text-brand bg-brand/10 inline-block px-2 py-1 rounded border border-brand/20">
                <span>SIL3</span>
                <span>•</span>
                <span>SAFETY</span>
              </div>
            </div>
            {/* PCB Trace Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20 group-hover:opacity-40 transition-opacity">
               <div className="absolute top-4 right-4 w-2 h-2 bg-brand rounded-full animate-pulse"></div>
               <div className="absolute top-4 right-8 w-full h-px bg-brand"></div>
            </div>
          </Link>

          <Link to="/technologies/scada" className="bg-dark-800 border border-white/10 p-1 rounded-sm relative group overflow-hidden h-[400px]">
             <div className="absolute inset-0 z-0">
               <img src={scadaImg} className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-700 grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110" alt="SCADA" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
             </div>
            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
              <BarChart className="w-12 h-12 text-brand mb-4 bg-black/50 p-2 rounded border border-brand/20 backdrop-blur" />
              <h3 className="text-2xl font-bold text-white mb-2">{t('technologies_list.scada.title')}</h3>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">{t('technologies_list.scada.summary')}</p>
              <div className="flex gap-2 text-xs font-mono text-brand bg-brand/10 inline-block px-2 py-1 rounded border border-brand/20">
                <span>REDUNDANT</span>
                <span>•</span>
                <span>HIGH-AVAILABILITY</span>
              </div>
            </div>
          </Link>

          <Link to="/technologies/iot" className="bg-dark-800 border border-white/10 p-1 rounded-sm relative group overflow-hidden h-[400px]">
             <div className="absolute inset-0 z-0">
               <img src={iotImg} className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-700 grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110" alt="IoT" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
             </div>
            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
              <Cloud className="w-12 h-12 text-brand mb-4 bg-black/50 p-2 rounded border border-brand/20 backdrop-blur" />
              <h3 className="text-2xl font-bold text-white mb-2">{t('technologies_list.iot.title')}</h3>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">{t('technologies_list.iot.summary')}</p>
              <div className="flex gap-2 text-xs font-mono text-brand bg-brand/10 inline-block px-2 py-1 rounded border border-brand/20">
                <span>EDGE</span>
                <span>•</span>
                <span>ANALYTICS</span>
              </div>
            </div>
          </Link>

           <Link to="/technologies/cyber" className="bg-dark-800 border border-white/10 p-1 rounded-sm relative group overflow-hidden h-[400px]">
             <div className="absolute inset-0 z-0">
               <img src={cyberImg} className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-700 grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110" alt="Cyber" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
             </div>
            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
              <Lock className="w-12 h-12 text-brand mb-4 bg-black/50 p-2 rounded border border-brand/20 backdrop-blur" />
              <h3 className="text-2xl font-bold text-white mb-2">{t('technologies_list.cyber.title')}</h3>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">{t('technologies_list.cyber.summary')}</p>
              <div className="flex gap-2 text-xs font-mono text-brand bg-brand/10 inline-block px-2 py-1 rounded border border-brand/20">
                <span>SECURE</span>
                <span>•</span>
                <span>OT-DEFENSE</span>
              </div>
            </div>
          </Link>

           <Link to="/technologies/data" className="bg-dark-800 border border-white/10 p-1 rounded-sm relative group overflow-hidden h-[400px]">
             <div className="absolute inset-0 z-0">
               <img src={dataImg} className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-all duration-700 grayscale group-hover:grayscale-0 scale-105 group-hover:scale-110" alt="Data" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
             </div>
            <div className="absolute bottom-0 left-0 p-8 w-full z-10">
              <Database className="w-12 h-12 text-brand mb-4 bg-black/50 p-2 rounded border border-brand/20 backdrop-blur" />
              <h3 className="text-2xl font-bold text-white mb-2">{t('technologies_list.data.title')}</h3>
              <p className="text-slate-300 text-sm mb-4 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">{t('technologies_list.data.summary')}</p>
              <div className="flex gap-2 text-xs font-mono text-brand bg-brand/10 inline-block px-2 py-1 rounded border border-brand/20">
                <span>AI</span>
                <span>•</span>
                <span>PREDICTIVE</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
