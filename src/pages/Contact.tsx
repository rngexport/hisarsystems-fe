import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

import contactBg from '../images/world-map.png';
import formBg from '../images/high-tech-control-room-with-large-screens-displaying-world-map-busy-monitors-and-futuristic-design-photo.jpg';
import infoSideBg from '../images/master-control-room-thinking-space-systems-view-2.jpg';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-black min-h-screen py-24">
      <SEO 
        title={t('seo.contact.title')}
        description={t('seo.contact.description')}
        keywords={t('seo.contact.keywords')}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info Side */}
          <div className="relative">
            {/* New Background for Info Side */}
             <div className="absolute inset-0 -z-10 rounded-lg overflow-hidden">
                <img src={infoSideBg} className="w-full h-full object-cover opacity-10 blur-sm" alt="Office" />
             </div>

            <div className="mb-12">
              <span className="text-brand font-mono text-sm tracking-widest uppercase">Operation Line</span>
              <h1 className="text-4xl font-bold text-white mt-2 mb-6">{t('contact.title')}</h1>
              <p className="text-slate-400">
                {t('contact.desc')}
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-dark-900/80 backdrop-blur border border-white/5 hover:border-brand/30 transition-colors group">
                <div className="bg-black/50 p-3 rounded-full group-hover:bg-brand/20 transition-colors">
                    <MapPin className="w-6 h-6 text-brand shrink-0" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">{t('contact.location_title')}</h3>
                  <p className="text-slate-400 text-sm">
                    {t('contact.address').map((line: string, i: number) => (
                      <React.Fragment key={i}>
                        {line}<br />
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-dark-900/80 backdrop-blur border border-white/5 hover:border-brand/30 transition-colors group">
                <div className="bg-black/50 p-3 rounded-full group-hover:bg-brand/20 transition-colors">
                    <Mail className="w-6 h-6 text-brand shrink-0" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-2">{t('contact.email_title')}</h3>
                  <p className="text-slate-400 text-sm">info@rngexport.com</p>
                  <p className="text-xs text-slate-500 mt-1">{t('contact.support_text')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-dark-900/80 backdrop-blur border border-white/5 hover:border-brand/30 transition-colors group">
                 <div className="bg-black/50 p-3 rounded-full group-hover:bg-brand/20 transition-colors">
                    <Phone className="w-6 h-6 text-brand shrink-0" />
                 </div>
                <div>
                  <h3 className="text-white font-bold mb-2">{t('contact.phone_title')}</h3>
                  <p className="text-slate-400 text-sm">+90 242 502 17 72</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-dark-900 p-8 border border-white/10 relative overflow-hidden group">
            {/* Background Image */}
            <div className="absolute inset-0">
               <img 
                 src={formBg} 
                 alt="Contact Background" 
                 className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 grayscale"
               />
               <div className="absolute inset-0 bg-gradient-to-b from-dark-900/90 via-dark-900/80 to-dark-900/90"></div>
            </div>
            
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

            <h2 className="text-2xl font-bold text-white mb-8 relative z-10">{t('contact.form.title')}</h2>
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs text-brand font-mono uppercase">{t('contact.form.name')}</label>
                  <input 
                    type="text" 
                    className="w-full bg-black border-b border-white/20 focus:border-brand text-white py-2 px-3 outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs text-brand font-mono uppercase">{t('contact.form.company')}</label>
                  <input 
                    type="text" 
                    className="w-full bg-black border-b border-white/20 focus:border-brand text-white py-2 px-3 outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-brand font-mono uppercase">{t('contact.form.email')}</label>
                <input 
                  type="email" 
                  className="w-full bg-black border-b border-white/20 focus:border-brand text-white py-2 px-3 outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs text-brand font-mono uppercase">{t('contact.form.type')}</label>
                <select className="w-full bg-black border-b border-white/20 focus:border-brand text-white py-2 px-3 outline-none transition-colors appearance-none">
                  {t('contact.form.types').map((type: string, i: number) => (
                    <option key={i}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs text-brand font-mono uppercase">{t('contact.form.details')}</label>
                <textarea 
                  rows={4}
                  className="w-full bg-black border-b border-white/20 focus:border-brand text-white py-2 px-3 outline-none transition-colors resize-none"
                  placeholder={t('contact.form.details_ph')}
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-brand/10 border border-brand text-brand font-bold py-4 hover:bg-brand hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group">
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                {t('contact.form.submit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

