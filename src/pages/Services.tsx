import React from 'react';
import { Link } from 'react-router-dom';
import { Settings, Monitor, Box, Cpu, Database, Shield, Activity } from 'lucide-react';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

import automationImg from '../images/advanced-robotics-automated-assembly-line-high-tech-manufacturing-plant-cutting-edge-technology-action-futuristic-316902059.webp';
import scadaImg from '../images/dcs_control_room_1800x600.jpg';
import panelImg from '../images/35617950-control-panel-equipment-on-water-conditioning-or-distillation-room-on-pharmaceutical-industry-or.jpg';
import plcImg from '../images/braumat.jpg';
import bigDataImg from '../images/high-tech-command-center-visualizing-global-data-streams-photo.jpg';
import cyberImg from '../images/shutterstock_1194326800-2-1.jpg';
import digitalTwinImg from '../images/fce9c24e-307b-424a-8e62-ec071b936905_Virtual-Twin-1200_extra_large.jpeg';

const services = [
  {
    id: '01',
    icon: Settings,
    title: 'Endüstriyel Otomasyon',
    desc: 'Savunma sınıfı prosesler için tam ölçekli kontrol mimarisi. Patlayıcı ve reaktif kimya hatları için optimize edilmiş karar algoritmaları.',
    tags: ['HAZARD RATED', 'FAILOVER', 'BATCH LOGIC'],
    image: automationImg,
    to: '/services/automation',
  },
  {
    id: '02',
    icon: Monitor,
    title: 'SCADA Yazılım Geliştirme',
    desc: 'Siemens WinCC & Ignition tabanlı ağır proses SCADA mimarileri. NATO seviyesinde sinir sistemi tasarımı.',
    tags: ['WINCC', 'IGNITION', 'REDUNDANT'],
    image: scadaImg,
    to: '/services/scada',
  },
  {
    id: '03',
    icon: Box,
    title: 'Kontrol & Güç Panoları',
    desc: 'IEC 61439 ve UL uyumlu Ex-proof pano üretimi. Operasyon zekâsının fiziksel bedeni.',
    tags: ['IEC 61439', 'EX-PROOF', 'EMC'],
    image: panelImg,
    to: '/services/panels',
  },
  {
    id: '04',
    icon: Cpu,
    title: 'PLC & Safety PLC',
    desc: 'Siemens S7-1500F full safety expertise. Tesisin reflekslerini oluşturan güvenli kodlama.',
    tags: ['SIL3', 'PROFIO', 'FUZZY LOGIC'],
    image: plcImg,
    to: '/services/plc',
  },
  {
    id: '05',
    icon: Database,
    title: 'Big Data & Analytics',
    desc: 'Anomaly detection ve predictive maintenance algoritmaları. 50.000+ tag yoğunluklu veri işleme.',
    tags: ['INFLUX', 'PREDICTIVE', 'AI'],
    image: bigDataImg,
    to: '/services/data',
  },
  {
    id: '06',
    icon: Shield,
    title: 'Siber Güvenlik & OT',
    desc: 'Zero-Trust endüstriyel güvenlik. VLAN segmentasyonu ve derin paket analizi.',
    tags: ['FIREWALL', 'DMZ', 'VPN'],
    image: cyberImg,
    to: '/services/cyber',
  },
  {
    id: '07',
    icon: Activity,
    title: 'Digital Twin & Simülasyon',
    desc: 'Tesis hatlarının sanal klonu. Devreye almadan önce sanal reaktörde test ve validasyon.',
    tags: ['SIMULATION', 'VIRTUAL', 'FAT'],
    image: digitalTwinImg,
    to: '/services/digital-twin',
  },
];

const Services = () => {
  const { t } = useLanguage();
  return (
    <div className="bg-black min-h-screen py-24">
      <SEO 
        title={t('seo.services.title')}
        description={t('seo.services.description')}
        keywords={t('seo.services.keywords')}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-white mb-4">Hizmetler & Çözümler</h1>
          <p className="text-slate-400 max-w-2xl">
            Tesisin sadece kas gücünü değil, karar veren beyin gücünü inşa ediyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.to}
              className="relative bg-[#0d0f0d] border border-white/5 p-8 group hover:border-brand/50 transition-all duration-300 overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand/60"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500 scale-105 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f0d]/90 via-[#0d0f0d]/60 to-transparent"></div>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-military group-hover:bg-brand transition-colors z-10"></div>
              
              <div className="absolute top-4 right-4 text-xs font-mono text-military-light group-hover:text-brand z-10">
                SVC-{service.id}
              </div>

              <div className="relative z-10">
                <service.icon className="w-10 h-10 text-brand mb-6 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-200 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-black/50 px-2 py-1 rounded text-slate-200 font-mono border border-white/10 group-hover:border-brand/40">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-brand font-semibold">
                  Detaya Git <span className="w-6 h-px bg-brand inline-block"></span>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity z-10">
                 <div className="w-8 h-8 border border-white p-0.5">
                    <div className="w-full h-full bg-white/50"></div>
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

