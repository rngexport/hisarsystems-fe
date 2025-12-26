import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BarChart2, CheckCircle, FileText, Lock, Settings, Users, Zap, Calendar, MapPin, Database } from 'lucide-react';
import SEO from '../../../components/SEO';
import { useLanguage } from '../../../context/LanguageContext';

import defenceImg from '../../../images/sci-fi-military-command-center-d-background-room-advanced-holographic-war-table-massive-led-tactical-maps-high-tech-368968016.webp';
import plasticImg from '../../../images/factory-1769429_1280.jpg';
import textileImg from '../../../images/advanced-robotics-automated-assembly-line-high-tech-manufacturing-plant-cutting-edge-technology-action-futuristic-316902059.webp';
import energyImg from '../../../images/night-view-glowing-oil-refinery-industrial-pipes-lights-perfect-as-futuristic-night-view-glowing-oil-refinery-394442220.webp';
import chemicalImg from '../../../images/a-modern-chemical-plant-control-room-featuring-anti-static-flooring.webp';
import foodImg from '../../../images/Stainless-Steel-Pump-Package-e1740670365157.jpg';

type ProjectKey = 'defence' | 'plastic' | 'textile' | 'energy' | 'chemical' | 'food';

const projectImages: Record<ProjectKey, string> = {
  defence: defenceImg,
  plastic: plasticImg,
  textile: textileImg,
  energy: energyImg,
  chemical: chemicalImg,
  food: foodImg,
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: ProjectKey }>();
  const { t } = useLanguage();
  
  const isValidSlug = slug && Object.keys(projectImages).includes(slug);
  const detail = isValidSlug ? t(`projects_detail.${slug}`) : undefined;
  const image = isValidSlug ? projectImages[slug as ProjectKey] : undefined;

  if (!isValidSlug || !detail || typeof detail === 'string') {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-2xl">{t('project_detail_labels.not_found')}</p>
          <Link to="/projects" className="text-brand underline">
            {t('project_detail_labels.back')}
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
        keywords={`${detail.title}, ${detail.sector}, ${detail.tech}, ${t('seo.home.keywords')}`}
      />
      {/* Hero */}
      <div className="relative h-[65vh] overflow-hidden">
        <img src={image} className="w-full h-full object-cover" alt={detail.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-military/20 mix-blend-multiply"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <Link to="/projects" className="inline-flex items-center text-brand mb-6 hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" /> {t('project_detail_labels.back')}
            </Link>
            
            <div className="flex items-center gap-2 text-brand mb-4 bg-brand/10 inline-block px-3 py-1 rounded border border-brand/20 backdrop-blur-md">
               <Lock className="w-4 h-4" />
               <span className="text-xs font-mono uppercase tracking-widest font-bold">Confidential Project</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">{detail.title}</h1>
            <p className="text-xl text-slate-300 max-w-2xl border-l-4 border-brand pl-4 font-light">{detail.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <div className="bg-dark-900/50 border border-white/10 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FileText className="text-brand" /> {t('project_detail_labels.about')}
              </h2>
              <p className="text-slate-300 leading-relaxed text-lg text-justify">{detail.description}</p>
              
              <div className="mt-8 pt-6 border-t border-white/5">
                 <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">{t('project_detail_labels.scope')}</h4>
                 <div className="grid sm:grid-cols-2 gap-3">
                    {detail.scope.map((item: string, i: number) => (
                        <div key={i} className="flex items-start gap-2 text-slate-400 text-sm">
                            <span className="text-brand mt-1">›</span> {item}
                        </div>
                    ))}
                 </div>
              </div>
            </div>

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-8">
               <div className="bg-dark-800 border border-white/5 p-6 rounded-lg">
                 <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                   <Settings className="text-red-400 w-5 h-5" /> {t('project_detail_labels.challenges')}
                 </h3>
                 <ul className="space-y-4">
                   {detail.challenges.map((item: string, idx: number) => (
                     <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                       <span className="mt-1.5 w-1.5 h-1.5 bg-red-400 rounded-full shrink-0"></span>
                       <span className="leading-relaxed">{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>

               <div className="bg-dark-800 border border-white/5 p-6 rounded-lg">
                 <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                   <Zap className="text-brand w-5 h-5" /> {t('project_detail_labels.solutions')}
                 </h3>
                 <ul className="space-y-4">
                   {detail.solutions.map((item: string, idx: number) => (
                     <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm">
                       <span className="mt-1.5 w-1.5 h-1.5 bg-brand rounded-full shrink-0 shadow-[0_0_5px_#00f6d8]"></span>
                       <span className="leading-relaxed">{item}</span>
                     </li>
                   ))}
                 </ul>
               </div>
            </div>

             {/* Results */}
            <div className="bg-gradient-to-r from-dark-800 to-dark-900 border border-white/10 p-8 rounded-lg relative overflow-hidden group">
               <div className="absolute -right-10 -top-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <BarChart2 className="w-64 h-64 text-white" />
               </div>
               <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-2 relative z-10">
                 <Users className="text-green-400 w-5 h-5" /> {t('project_detail_labels.results')}
               </h3>
               <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                  {detail.results.map((item: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-4">
                       <CheckCircle className="text-green-400 w-5 h-5 mt-0.5 shrink-0" />
                       <p className="text-slate-200 font-medium text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
               </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-dark-800 border border-white/10 p-6 rounded-lg sticky top-24 shadow-2xl shadow-black/50">
              <h4 className="text-white font-bold mb-6 text-lg border-b border-white/10 pb-4">{t('project_detail_labels.identity')}</h4>
              
              <div className="space-y-6">
                <div>
                  <span className="flex items-center gap-2 text-xs text-slate-500 uppercase tracking-wider mb-1">
                      <Database className="w-3 h-3" /> {t('project_detail_labels.sector')}
                  </span>
                  <div className="text-white font-medium flex items-center gap-2">
                     <span className="w-2 h-2 bg-brand rounded-full"></span> {detail.sector}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <span className="flex items-center gap-2 text-xs text-slate-500 uppercase tracking-wider mb-1">
                            <MapPin className="w-3 h-3" /> {t('project_detail_labels.location')}
                        </span>
                        <div className="text-white font-medium text-sm">{detail.location}</div>
                    </div>
                    <div>
                        <span className="flex items-center gap-2 text-xs text-slate-500 uppercase tracking-wider mb-1">
                            <Calendar className="w-3 h-3" /> {t('project_detail_labels.duration')}
                        </span>
                        <div className="text-white font-medium text-sm">{detail.duration}</div>
                    </div>
                </div>

                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">{t('project_detail_labels.capacity')}</span>
                  <div className="text-white font-medium text-sm">{detail.capacity}</div>
                </div>

                <div>
                  <span className="block text-xs text-slate-500 uppercase tracking-wider mb-1">{t('project_detail_labels.tech_stack')}</span>
                  <div className="text-white font-medium text-sm text-brand">{detail.tech}</div>
                </div>
                
                {/* Mini Stats */}
                <div className="grid grid-cols-3 gap-2 py-4 border-t border-b border-white/5">
                    {detail.stats.map((stat: { label: string; value: string }, i: number) => (
                        <div key={i} className="text-center">
                            <div className="text-white font-bold text-sm">{stat.value}</div>
                            <div className="text-[10px] text-slate-500">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="pt-2">
                  <button className="w-full bg-white text-black hover:bg-brand font-bold py-3 px-4 rounded transition-all flex items-center justify-center gap-2 group shadow-lg">
                    <FileText className="w-4 h-4" />
                    <span>{t('project_detail_labels.request_report')}</span>
                  </button>
                  <p className="text-[10px] text-slate-500 text-center mt-3 leading-tight">
                    {t('project_detail_labels.nda_warning')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
