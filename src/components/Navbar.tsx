import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Shield, Globe } from 'lucide-react';
import clsx from 'clsx';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.sectors'), path: '/sectors' },
    { name: t('nav.technology'), path: '/technologies' },
    { name: t('nav.projects'), path: '/projects' },
    { name: t('nav.rnd'), path: '/rnd' },
    { name: t('nav.blog'), path: '/blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/95 border-b border-brand/20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <Shield className="h-8 w-8 text-brand animate-pulse" />
            <div className="flex flex-col">
              <span className="text-white font-display font-bold text-xl tracking-wider">
                HISAR SYSTEMS
              </span>
              <span className="text-[10px] text-brand tracking-[0.2em]">
                ENGINEERING
              </span>
            </div>
          </Link>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={clsx(
                    "text-sm font-semibold transition-all duration-300 hover:text-brand hover:drop-shadow-[0_0_5px_rgba(0,246,216,0.8)]",
                    location.pathname === link.path ? "text-brand" : "text-slate-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-sm font-bold text-slate-300 hover:text-brand transition-colors border border-white/10 px-2 py-1 rounded"
              >
                <Globe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
              </button>
            </div>
          </div>

          <div className="hidden lg:block ml-6">
            <Link
              to="/contact"
              className="relative group px-5 py-2 overflow-hidden border border-military text-white font-semibold text-sm uppercase tracking-wider hover:border-brand transition-colors duration-300"
            >
              <span className="absolute inset-0 w-0 bg-military transition-all duration-[250ms] ease-out group-hover:w-full opacity-50"></span>
              <span className="relative group-hover:text-brand">{t('nav.contact')}</span>
            </Link>
          </div>

          <div className="-mr-2 flex lg:hidden items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-bold text-slate-300 hover:text-brand transition-colors border border-white/10 px-2 py-1 rounded"
            >
              <Globe className="w-4 h-4" />
              <span>{language.toUpperCase()}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 border-b border-brand/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  location.pathname === link.path ? "text-brand bg-slate-900" : "text-slate-300 hover:text-white hover:bg-slate-800"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 px-5 py-3 border border-brand text-brand font-bold uppercase tracking-widest hover:bg-brand hover:text-black transition-colors"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
