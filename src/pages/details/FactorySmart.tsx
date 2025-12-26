import React from 'react';
import { ArrowLeft, Factory, Activity, Gauge } from 'lucide-react';
import { Link } from 'react-router-dom';
import factoryLineImg from '../../images/Accenture-Automobile-Plant-3840x2160_rad-3x2.webp';

const FactorySmart = () => {
  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="relative h-[60vh] overflow-hidden">
        <img src={factoryLineImg} className="w-full h-full object-cover" alt="Smart Factory" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <Link to="/" className="inline-flex items-center text-brand mb-6 hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" /> Geri Dön
            </Link>
            <h1 className="text-5xl font-bold text-white mb-4">Smart Factory</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Üretim hatlarında dijitalleşmiş planlama, enerji optimizasyonu ve gerçek-zamanlı kalite izleme.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-white mb-4">Akıllı Üretim Omurgası</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                OEE (Overall Equipment Effectiveness) artırmak için MES + SCADA + PLC katmanlarını tek çatı altında topluyoruz.
                Hız, tork, sıcaklık ve kalite metrikleri aynı ekranda; karar mekanizması otomatik.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Enerji tüketim eğrilerini ve üretim debilerini eşzamanlı analiz ederek, üretim planını gerçek zamanlı güncelliyoruz.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-dark-900 border border-white/10 p-6 rounded hover:border-brand/50 transition-colors">
                <Factory className="w-8 h-8 text-brand mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">OEE & MES</h4>
                <p className="text-sm text-slate-400">Planlama, üretim ve kalite verisi tek noktadan.</p>
              </div>
              <div className="bg-dark-900 border border-white/10 p-6 rounded hover:border-brand/50 transition-colors">
                <Gauge className="w-8 h-8 text-brand mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Enerji Optimizasyonu</h4>
                <p className="text-sm text-slate-400">Hız-enerji dengesi, otomatik tarif değişimi.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-dark-800 p-6 border-l-4 border-brand">
              <h4 className="text-white font-bold mb-2">Teknik Özellikler</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>MES:</span> <span className="text-white">OEE, Traceability</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Enerji:</span> <span className="text-white">Load Balancing</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Protokol:</span> <span className="text-white">OPC-UA / MQTT</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>SCADA:</span> <span className="text-white">WinCC / Ignition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactorySmart;


