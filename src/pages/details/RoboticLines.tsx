import React from 'react';
import { ArrowLeft, Cpu, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import robotArmImg from '../../images/ABB-IRB-6700-spot-welding-car-parts_v2.jpg';

const RoboticLines = () => {
  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="relative h-[60vh] overflow-hidden">
        <img src={robotArmImg} className="w-full h-full object-cover" alt="Robotic Lines" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <Link to="/" className="inline-flex items-center text-brand mb-6 hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" /> Geri Dön
            </Link>
            <h1 className="text-5xl font-bold text-white mb-4">Robotic Lines</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Yüksek hassasiyetli kaynak, montaj ve boya robotlarının tam senkronizasyonlu otomasyonu.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-white mb-4">Otomasyonun Zirvesi</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                Endüstriyel robot kollarının (ABB, KUKA, Fanuc) üretim hattına entegrasyonu, sadece mekanik bir kurulum değildir.
                Robotların PLC ile haberleşmesi, güvenlik bariyerleri (Safety PLC), çarpışma önleme algoritmaları ve
                cycle-time optimizasyonu bir bütün olarak tasarlanır.
              </p>
              <p className="text-slate-400 leading-relaxed">
                Hisar Systems olarak, robotik hücrelerin (robotic cells) simülasyonunu yapıyor, offline programming ile
                robot yörüngelerini önceden belirliyor ve sahada sıfır hata ile devreye alıyoruz.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-dark-900 border border-white/10 p-6 rounded hover:border-brand/50 transition-colors">
                <Cpu className="w-8 h-8 text-brand mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Senkronizasyon</h4>
                <p className="text-sm text-slate-400">Çoklu robot kollarının milisaniyelik uyumu.</p>
              </div>
              <div className="bg-dark-900 border border-white/10 p-6 rounded hover:border-brand/50 transition-colors">
                <Activity className="w-8 h-8 text-brand mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Verimlilik</h4>
                <p className="text-sm text-slate-400">%99.9 OEE (Overall Equipment Effectiveness) hedefi.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-dark-800 p-6 border-l-4 border-brand">
              <h4 className="text-white font-bold mb-2">Teknik Özellikler</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Protokol:</span> <span className="text-white">Profinet / EtherCAT</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Safety:</span> <span className="text-white">SIL3 / PLe Cat4</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Cycle Time:</span> <span className="text-white">&lt; 12s</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Entegrasyon:</span> <span className="text-white">Siemens / Allen-Bradley</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoboticLines;

