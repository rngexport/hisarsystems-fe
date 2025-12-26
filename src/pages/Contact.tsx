import React from 'react';
import { Mail, MapPin, Phone, Activity, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

import contactBg from '../images/high-tech-control-room-with-large-screens-displaying-world-map-busy-monitors-and-futuristic-design-photo.jpg';

const Contact = () => {
  const { t } = useLanguage();

  const systemLogs = [
    "UPLINK_STABLE",
    "ENCRYPT_AES_256",
    "NODE_ACTIVE",
    "HISAR_V3_READY",
    "SIGNAL_STRONG",
    "DATA_SYNC_OK",
    "AUTH_SUCCESS",
    "SYS_STABLE_99.9"
  ];

  return (
    <div className="bg-black min-h-screen py-24 relative overflow-hidden">
      <SEO 
        title={t('seo.contact.title')}
        description={t('seo.contact.description')}
        keywords={t('seo.contact.keywords')}
      />

      {/* Arka Plan Dekoratif Elementler */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          
          {/* SOL TARAF: Hareketli Mühendislik Terminali */}
          <div className="relative min-h-[500px] lg:h-full w-full group">
            {/* Dış Çerçeve Efektleri */}
            <div className="absolute -inset-4 border border-brand/10 rounded-3xl animate-pulse"></div>
            <div className="absolute -inset-1 border border-brand/20 rounded-2xl"></div>
            
            <div className="relative h-full w-full bg-dark-900/50 border border-brand/30 rounded-xl overflow-hidden backdrop-blur-xl shadow-2xl shadow-brand/20">
              {/* Arka Plan Görseli */}
              <div className="absolute inset-0">
                <img 
                  src={contactBg} 
                  alt="Engineering Terminal" 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity duration-1000 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              </div>

              {/* Dinamik Katmanlar */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Dönen Geometrik Yapı */}
                <div className="relative w-64 h-64 flex items-center justify-center">
                  <div className="absolute inset-0 border-2 border-brand/40 rotate-[30deg] animate-[spin_15s_linear_infinite] rounded-[20%]"></div>
                  <div className="absolute inset-4 border border-brand/30 -rotate-[15deg] animate-[spin_10s_linear_infinite_reverse] rounded-[15%]"></div>
                  <div className="absolute inset-8 border-2 border-brand shadow-[0_0_30px_rgba(0,246,216,0.4)] animate-[pulse_4s_ease-in-out_infinite] rounded-full flex items-center justify-center">
                    <ShieldCheck className="w-12 h-12 text-brand drop-shadow-[0_0_10px_#00f6d8]" />
                  </div>
                </div>
              </div>

              {/* Sol Taraf: Kayar Kod Akışı */}
              <div className="absolute left-4 top-10 bottom-10 w-24 overflow-hidden pointer-events-none">
                <div className="flex flex-col gap-3 animate-[scrollLogs_20s_linear_infinite]">
                  {[...systemLogs, ...systemLogs, ...systemLogs, ...systemLogs].map((log, i) => (
                    <div key={i} className="font-mono text-[7px] text-brand/50 tracking-widest whitespace-nowrap">
                      {`> ${log}`}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sağ Taraf: Sistem Metrikleri */}
              <div className="absolute right-6 top-10 space-y-6 text-right font-mono pointer-events-none">
                <div className="space-y-1">
                  <div className="text-[10px] text-brand/40 uppercase">Latency</div>
                  <div className="text-sm text-brand font-bold">0.002ms</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] text-brand/40 uppercase">Bandwidth</div>
                  <div className="text-sm text-white">1.2 TB/s</div>
                </div>
                <div className="pt-4">
                  <div className="w-12 h-1 bg-brand/20 ml-auto rounded-full overflow-hidden">
                    <div className="h-full bg-brand w-full animate-[loading_2s_ease-in-out_infinite]"></div>
                  </div>
                </div>
              </div>

              {/* Alt Bar: Durum Göstergesi */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-brand/10 border-t border-brand/20 backdrop-blur-md flex justify-between items-center px-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand rounded-full animate-pulse"></div>
                  <span className="text-[10px] text-brand font-bold tracking-[0.2em]">HISAR_SYSTEMS_LINK_ACTIVE</span>
                </div>
                <Terminal className="w-4 h-4 text-brand/60" />
              </div>

              {/* Lazer Tarama Çizgisi */}
              <div className="absolute left-0 w-full h-[1px] bg-brand/50 shadow-[0_0_15px_#00f6d8] z-20 animate-[scanVertical_5s_ease-in-out_infinite] pointer-events-none"></div>
            </div>
          </div>

          {/* SAĞ TARAF: İletişim Bilgileri */}
          <div className="lg:pl-10">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-brand/30 rounded bg-brand/5 backdrop-blur-sm">
                <Cpu className="w-4 h-4 text-brand animate-spin-slow" />
                <span className="text-brand text-xs font-mono tracking-widest uppercase" lang="en">OPERATION LINE</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                {t('contact.page_title_line1')} <br />
                <span className="text-brand italic">{t('contact.page_title_line2')}</span>
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-4">
                {t('contact.desc')}
              </p>
            </div>

            <div className="grid gap-6">
              <div className="group p-8 bg-dark-900/40 border border-white/5 hover:border-brand/40 transition-all duration-500 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-brand/10 rounded-lg group-hover:bg-brand transition-colors duration-500">
                    <MapPin className="w-6 h-6 text-brand group-hover:text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{t('contact.location_title')}</h3>
                </div>
                <div className="text-slate-400 text-sm leading-relaxed pl-14">
                  {t('contact.address').map((line: string, i: number) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </div>
              </div>

              <div className="group p-8 bg-dark-900/40 border border-white/5 hover:border-brand/40 transition-all duration-500 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-brand/10 rounded-lg group-hover:bg-brand transition-colors duration-500">
                    <Mail className="w-6 h-6 text-brand group-hover:text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{t('contact.email_title')}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed pl-14 font-mono">
                  info@hisarsystems.com
                </p>
              </div>

              <div className="group p-8 bg-dark-900/40 border border-white/5 hover:border-brand/40 transition-all duration-500 rounded-lg backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-brand/10 rounded-lg group-hover:bg-brand transition-colors duration-500">
                    <Phone className="w-6 h-6 text-brand group-hover:text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{t('contact.phone_title')}</h3>
                </div>
                <div className="space-y-2 pl-14 font-mono text-sm">
                  <div className="text-slate-400">+90 212 858 19 23</div>
                  <div className="text-slate-400">+90 212 858 19 24</div>
                  <div className="text-brand font-bold">+90 532 334 53 74</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollLogs {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes scanVertical {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact;
