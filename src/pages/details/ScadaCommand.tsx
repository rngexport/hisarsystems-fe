import React from 'react';
import { ArrowLeft, MonitorSmartphone, ShieldCheck, AlarmClockCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import controlRoomImg from '../../images/a-modern-chemical-plant-control-room-featuring-anti-static-flooring.webp';

const ScadaCommand = () => {
  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="relative h-[60vh] overflow-hidden">
        <img src={controlRoomImg} className="w-full h-full object-cover" alt="SCADA Command" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <Link to="/" className="inline-flex items-center text-brand mb-6 hover:underline">
              <ArrowLeft className="w-4 h-4 mr-2" /> Geri Dön
            </Link>
            <h1 className="text-5xl font-bold text-white mb-4">SCADA Central Command</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Redundant SCADA, alarm matrisi, trend motoru ve anlık operasyon karar destek altyapısı.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-white mb-4">Operasyonel Komuta Merkezi</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                SCADA sadece izleme ekranı değildir. Alarm, event, trend motorları; role-based access, OT güvenlik katmanı ve
                redundant server mimarisi ile kesintisiz komuta kontrol sağlar.
              </p>
              <p className="text-slate-400 leading-relaxed">
                ISA-101 standardında okunabilir ekranlar, alarm önceliklendirme (ANSI/ISA-18.2), historian kayıt ve batch izleme
                ile operatör hatasını minimize ediyoruz.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-dark-900 border border-white/10 p-6 rounded hover:border-brand/50 transition-colors">
                <MonitorSmartphone className="w-8 h-8 text-brand mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Redundant SCADA</h4>
                <p className="text-sm text-slate-400">Primary / Hot-Standby, 0s failover, historian mirroring.</p>
              </div>
              <div className="bg-dark-900 border border-white/10 p-6 rounded hover:border-brand/50 transition-colors">
                <AlarmClockCheck className="w-8 h-8 text-brand mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Alarm & Trend Motoru</h4>
                <p className="text-sm text-slate-400">1ms trend kayıt, alarm escalation, event root-cause mapping.</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-dark-800 p-6 border-l-4 border-brand">
              <h4 className="text-white font-bold mb-2">Teknik Özellikler</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Platform:</span> <span className="text-white">WinCC / Ignition</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Failover:</span> <span className="text-white">0s Hot-Standby</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Alarm:</span> <span className="text-white">ISA-18.2</span>
                </li>
                <li className="flex justify-between border-b border-white/5 pb-2">
                  <span>Security:</span> <span className="text-white">RBAC + OT Firewall</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScadaCommand;


