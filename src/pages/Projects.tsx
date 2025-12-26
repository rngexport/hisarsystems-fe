import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, FileText, ChevronRight, BarChart2 } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

import defenceImg from '../images/sci-fi-military-command-center-d-background-room-advanced-holographic-war-table-massive-led-tactical-maps-high-tech-368968016.webp';
import plasticImg from '../images/factory-1769429_1280.jpg';
import textileImg from '../images/advanced-robotics-automated-assembly-line-high-tech-manufacturing-plant-cutting-edge-technology-action-futuristic-316902059.webp';
import energyImg from '../images/night-view-glowing-oil-refinery-industrial-pipes-lights-perfect-as-futuristic-night-view-glowing-oil-refinery-394442220.webp';
import chemicalImg from '../images/a-modern-chemical-plant-control-room-featuring-anti-static-flooring.webp';
import foodImg from '../images/Stainless-Steel-Pump-Package-e1740670365157.jpg';

const projectKeys = [
  'defence',
  'plastic',
  'textile',
  'energy',
  'chemical',
  'food'
];

const projectImages: Record<string, string> = {
  defence: defenceImg,
  plastic: plasticImg,
  textile: textileImg,
  energy: energyImg,
  chemical: chemicalImg,
  food: foodImg,
};

const Projects = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-black min-h-screen py-24">
      <SEO 
        title={t('seo.projects.title')}
        description={t('seo.projects.description')}
        keywords={t('seo.projects.keywords')}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-brand mb-2">
              <Lock className="w-4 h-4" />
              <span className="text-xs font-mono uppercase tracking-widest">Confidential Projects</span>
            </div>
            <h1 className="text-4xl font-bold text-white">{t('projects_page.title')}</h1>
          </div>
          <div className="text-right hidden md:block">
            <p className="text-slate-500 text-sm">{t('projects_page.confidential_desc')}</p>
            <p className="text-slate-500 text-sm">{t('projects_page.company_privacy')}</p>
          </div>
        </div>

        <div className="grid gap-6">
          {projectKeys.map((key) => {
            const project = t(`projects_list.${key}`);
            const image = projectImages[key];
            
            return (
              <Link to={`/projects/${key}`} key={key} className="group relative bg-dark-900 border border-white/5 p-0 hover:border-brand/50 transition-all duration-500 overflow-hidden h-[450px] md:h-[300px] flex flex-col md:flex-row">
                {/* Background for Mobile */}
                <div className="absolute inset-0 md:hidden z-0">
                    <img src={image} className="w-full h-full object-cover opacity-20" alt={project.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/90 to-transparent"></div>
                </div>

                <div className="absolute top-0 right-0 p-4 opacity-50 z-20">
                   <div className="border-2 border-military text-military font-bold text-xs px-2 py-1 rotate-12 uppercase opacity-50 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur">
                     {t('projects_page.restricted')}
                   </div>
                </div>

                {/* Desktop Image Section (Left Side now) */}
                <div className="hidden md:block w-1/3 relative overflow-hidden h-full">
                     <img 
                       src={image} 
                       alt={project.title} 
                       className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                     />
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-900/80"></div>
                     <div className="absolute inset-0 bg-military/10 group-hover:bg-transparent transition-colors"></div>
                     
                     {/* Overlay Stats */}
                     <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                        <div className="flex items-center gap-2 text-xs font-mono text-white bg-black/60 px-2 py-1 rounded border border-white/10 backdrop-blur">
                          <BarChart2 className="w-3 h-3 text-brand" />
                          <span>{t('projects_page.live_metrics')}</span>
                        </div>
                     </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 flex flex-col relative z-10">
                    {/* File Tab Look */}
                    <div className="h-1 w-full bg-military group-hover:bg-brand transition-colors"></div>
                    
                    <div className="p-8 flex flex-col justify-between h-full">
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                        <div>
                          <div className="text-xs text-brand font-mono mb-2 inline-block px-2 py-0.5 border border-brand/30 rounded bg-brand/5">{project.sector}</div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-slate-400 font-mono text-sm border-l-2 border-white/10 pl-3">{project.subtitle}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm text-slate-400">
                          <div>
                            <span className="block text-[10px] text-slate-600 uppercase tracking-wider mb-1">{t('projects_page.capacity')}</span>
                            <span className="text-white font-medium">{project.capacity}</span>
                          </div>
                          <div>
                            <span className="block text-[10px] text-slate-600 uppercase tracking-wider mb-1">{t('projects_page.tech')}</span>
                            <span className="text-white font-medium">{project.tech}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex justify-end">
                          <button className="bg-transparent border border-white/20 text-white px-6 py-3 hover:bg-brand hover:text-black hover:border-brand transition-all flex items-center gap-2 text-sm group/btn font-semibold uppercase tracking-wider">
                          <FileText className="w-4 h-4" />
                          <span>{t('projects_page.project_file')}</span>
                          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                      </div>
                    </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;

