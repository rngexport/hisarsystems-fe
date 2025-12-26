import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Cpu, Database, Cloud, Lock, BarChart, Server, Activity, ShieldCheck, Zap, Code, Terminal, Network } from 'lucide-react';
import SEO from '../../../components/SEO';
import { useLanguage } from '../../../context/LanguageContext';

import plcImg from '../../../images/35617950-control-panel-equipment-on-water-conditioning-or-distillation-room-on-pharmaceutical-industry-or.jpg';
import scadaImg from '../../../images/master-control-room-thinking-space-systems-view-2.jpg';
import iotImg from '../../../images/IoT-IIoT-Industrial-Internet-Connectivity-Automation-Robotics-Digital-Technologies-Stock-Image.jpg';
import cyberImg from '../../../images/shutterstock_1194326800-2-1.jpg';
import dataImg from '../../../images/high-tech-command-center-visualizing-global-data-streams-photo.jpg';

type TechKey = 'plc' | 'scada' | 'iot' | 'cyber' | 'data';

const techImages: Record<TechKey, string> = {
  plc: plcImg,
  scada: scadaImg,
  iot: iotImg,
  cyber: cyberImg,
  data: dataImg,
};

const techIcons: Record<TechKey, any> = {
  plc: Cpu,
  scada: BarChart,
  iot: Cloud,
  cyber: Lock,
  data: Database,
};

export default function TechnologyDetail() {
  const { slug } = useParams<{ slug: TechKey }>();
  const { t } = useLanguage();

  if (!slug || !techImages[slug]) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-2xl">{t('technologies_page.not_found')}</p>
          <Link to="/technologies" className="text-brand underline">
            {t('technologies_page.back')}
          </Link>
        </div>
      </div>
    );
  }

  const detail = {
    title: t(`technologies_list.${slug}.title`),
    subtitle: t(`technologies_list.${slug}.subtitle`),
    description: t(`technologies_list.${slug}.description`),
    image: techImages[slug],
    features: t(`technologies_list.${slug}.features`) as string[],
    capabilities: t(`technologies_list.${slug}.capabilities`) as string[],
    specs: t(`technologies_list.${slug}.specs`) as string[],
    tags: t(`technologies_list.${slug}.tags`) as string[],
    icon: techIcons[slug],
  };

  const Icon = detail.icon;

  return (
    <div className="bg-black min-h-screen pt-20">
      <SEO 
        title={detail.title}
        description={detail.description}
        keywords={`${detail.title}, ${detail.tags.join(', ')}, ${t('seo.technologies.keywords')}`}
      />
      {/* Hero */}
      <div className="relative h-[50vh] overflow-hidden">
        <img src={detail.image} className="w-full h-full object-cover" alt={detail.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <Link to="/technologies" className="inline-flex items-center text-brand mb-6 hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" /> {t('technologies_page.back')}
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-brand/10 border border-brand/20 rounded-full backdrop-blur-sm">
                <Icon className="w-8 h-8 text-brand" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{detail.title}</h1>
            </div>
            <p className="text-xl text-slate-300 max-w-3xl border-l-4 border-brand pl-4">{detail.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="md:col-span-2 space-y-12">
            
            {/* Description */}
            <div className="bg-dark-900/50 border border-white/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                 <Terminal className="text-brand" /> {t('technologies_page.vision')}
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg text-justify">{detail.description}</p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                 <Code className="text-brand" /> {t('technologies_page.competencies')}
              </h3>
              <div className="grid sm:grid-cols-1 gap-4">
                {detail.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-dark-800 border border-white/5 rounded hover:border-brand/30 transition-colors group">
                    <div className="mt-1.5 w-2 h-2 bg-brand rounded-full shrink-0 shadow-[0_0_8px_#00f6d8] group-hover:scale-150 transition-transform"></div>
                    <span className="text-slate-300 text-base font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities & Specs Grid */}
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-dark-800/50 border border-white/5 p-6 rounded-lg">
                   <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                       <Activity className="text-brand w-4 h-4" /> {t('technologies_page.capabilities')}
                   </h4>
                   <ul className="space-y-3">
                       {detail.capabilities.map((c, i) => (
                           <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                               <span className="mt-1.5 w-1 h-1 bg-brand rounded-full shrink-0"></span> {c}
                           </li>
                       ))}
                   </ul>
               </div>

               <div className="bg-dark-800/50 border border-white/5 p-6 rounded-lg">
                   <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                       <Network className="text-brand w-4 h-4" /> {t('technologies_page.protocols')}
                   </h4>
                   <div className="flex flex-wrap gap-2">
                       {detail.specs.map((s, i) => (
                           <span key={i} className="text-xs font-mono bg-white/5 text-slate-300 px-2 py-1 rounded border border-white/10">
                               {s}
                           </span>
                       ))}
                   </div>
               </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-dark-800 border border-white/10 p-6 rounded-lg sticky top-24">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                 <Zap className="text-brand w-4 h-4" /> {t('technologies_page.stack')}
              </h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {detail.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-brand/10 text-brand px-2 py-1 rounded border border-brand/20 font-bold tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="border-t border-white/10 pt-6">
                  <h5 className="text-white font-bold mb-4 text-sm">{t('technologies_page.other')}</h5>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link to="/technologies/plc" className="text-slate-400 hover:text-brand flex items-center gap-2 transition-colors">
                        <ArrowLeft className="w-3 h-3 rotate-180" /> PLC & Safety
                      </Link>
                    </li>
                    <li>
                      <Link to="/technologies/scada" className="text-slate-400 hover:text-brand flex items-center gap-2 transition-colors">
                        <ArrowLeft className="w-3 h-3 rotate-180" /> SCADA & HMI
                      </Link>
                    </li>
                    <li>
                      <Link to="/technologies/iot" className="text-slate-400 hover:text-brand flex items-center gap-2 transition-colors">
                        <ArrowLeft className="w-3 h-3 rotate-180" /> IoT & Edge
                      </Link>
                    </li>
                    <li>
                      <Link to="/technologies/cyber" className="text-slate-400 hover:text-brand flex items-center gap-2 transition-colors">
                        <ArrowLeft className="w-3 h-3 rotate-180" /> Cyber Security
                      </Link>
                    </li>
                     <li>
                      <Link to="/technologies/data" className="text-slate-400 hover:text-brand flex items-center gap-2 transition-colors">
                        <ArrowLeft className="w-3 h-3 rotate-180" /> Data & Analytics
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
