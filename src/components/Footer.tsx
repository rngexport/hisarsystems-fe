import React from 'react';
import { Shield, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark-900 border-t border-military-light pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-brand" />
              <div className="flex flex-col">
                <span className="text-white font-display font-bold text-xl tracking-wider">
                  TRAKYA DESIGN
                </span>
                <span className="text-[10px] text-brand tracking-[0.2em] uppercase">
                  Engineering
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t('footer.desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6 tracking-wide">{t('footer.quick_links')}</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-slate-400 hover:text-brand transition-colors text-sm">{t('nav.about')}</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand transition-colors text-sm">{t('nav.services')}</Link></li>
              <li><Link to="/projects" className="text-slate-400 hover:text-brand transition-colors text-sm">{t('nav.projects')}</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-brand transition-colors text-sm">{t('nav.blog')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6 tracking-wide">{t('footer.solutions')}</h3>
            <ul className="space-y-3">
              {t('footer.solutions_list').map((item: string, i: number) => (
                <li key={i} className="text-slate-400 text-sm">{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-display font-bold text-lg mb-6 tracking-wide">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">
                  Yakuplu Mah. Hürriyet Bulv.<br />
                  Skyport Residence No:1<br />
                  Beylikdüzü / İSTANBUL
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand shrink-0" />
                <span className="text-slate-400 text-sm">info@rngexport.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand shrink-0" />
                <span className="text-slate-400 text-sm">+90 242 502 17 72</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-military-light pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} Trakya Design Proje Ltd. Şti. {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <span className="text-slate-500 text-xs hover:text-brand cursor-pointer">{t('footer.privacy')}</span>
            <span className="text-slate-500 text-xs hover:text-brand cursor-pointer">{t('footer.kvkk')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


