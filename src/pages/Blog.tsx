import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

import safetyImg from '../images/istockphoto-466485780-612x612.jpg';
import twinImg from '../images/Digital_twin_in_manufacturing.png';
import alarmImg from '../images/AlarmTracker by Eldor_themepage.jpg';
import networkImg from '../images/shutterstock_1194326800-2-1.jpg';
import mesImg from '../images/Onsite-Process-Control-Domain-Support-Thumbnail-Landing-Page-16.APR_.20-1.jpg.webp';
import pidImg from '../images/35617950-control-panel-equipment-on-water-conditioning-or-distillation-room-on-pharmaceutical-industry-or.jpg';

const imageMap: Record<string, string> = {
  'sil3-safety-plc': safetyImg,
  'digital-twin-reactor': twinImg,
  'alarm-event-trend': alarmImg,
  'ot-network-security': networkImg,
  'mes-systems': mesImg,
  'pid-vs-fuzzy': pidImg,
};

const blogKeys = [
  'sil3-safety-plc',
  'digital-twin-reactor',
  'alarm-event-trend',
  'ot-network-security',
  'mes-systems',
  'pid-vs-fuzzy'
];

const Blog = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-black min-h-screen py-24">
      <SEO 
        title={t('seo.blog.title')}
        description={t('seo.blog.description')}
        keywords={t('seo.blog.keywords')}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">{t('blog_page.title')}</h1>
          <p className="text-slate-400">{t('blog_page.subtitle')}</p>
        </div>

        <div className="grid gap-8">
          {blogKeys.map((key) => {
            const post = t(`blog_list.${key}`);
            const image = imageMap[key];
            
            return (
              <Link to={`/blog/${key}`} key={key} className="group bg-dark-900 border border-white/5 p-0 hover:border-brand/30 transition-all cursor-pointer overflow-hidden flex flex-col md:flex-row">
                {/* Image Thumbnail */}
                <div className="md:w-64 relative overflow-hidden shrink-0">
                  <img 
                    src={image} 
                    alt={post.title} 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-dark-900 md:to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-dark-900/10"></div>
                </div>

                <div className="p-8 flex items-center justify-between flex-1">
                  <div>
                     <span className="text-xs text-brand font-mono mb-2 block">{post.date}</span>
                     <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand transition-colors">{post.title}</h3>
                     <p className="text-slate-400 max-w-3xl">{post.desc}</p>
                  </div>
                  <div className="hidden md:block pl-6">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-brand group-hover:bg-brand group-hover:text-black transition-all">
                      <ChevronRight className="w-5 h-5" />
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

export default Blog;
