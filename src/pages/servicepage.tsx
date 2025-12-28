import { useState } from 'react';
import {
  Battery,
  CircleDot,
  Settings,
  Cpu,
  Disc,
  Wrench,
  MessageSquare,
  ChevronRight,
  Bike,
  Zap
} from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const SERVICES = [
  {
    id: 'revisie',
    titleKey: 'batteryRevision',
    descKey: 'batteryRevisionDesc',
    icon: Battery,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10'
  },
  {
    id: 'banden',
    titleKey: 'tireRepair',
    descKey: 'tireRepairDesc',
    icon: CircleDot,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10'
  },
  {
    id: 'motor',
    titleKey: 'motorRepair',
    descKey: 'motorRepairDesc',
    icon: Settings,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10'
  },
  {
    id: 'electronica',
    titleKey: 'controllerElectronics',
    descKey: 'controllerElectronicsDesc',
    icon: Cpu,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10'
  },
  {
    id: 'remmen',
    titleKey: 'brakes',
    descKey: 'brakesDesc',
    icon: Disc,
    color: 'text-red-400',
    bg: 'bg-red-500/10'
  },
  {
    id: 'onderhoud',
    titleKey: 'maintenance',
    descKey: 'maintenanceDesc',
    icon: Wrench,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10'
  }
];

const CATEGORIES = [
  'eSteps',
  'eBikes',
  'monowheels',
  'hoverboards'
] as const;

export default function ServicePage() {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl mb-6 border border-white/10">
            <Zap className="w-8 h-8 text-yellow-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            {t('serviceRepair')}
          </h1>
          <p className="text-purple-200/70 text-lg max-w-2xl mx-auto">
            {t('selectVehicleAndService')}
          </p>
        </header>

        {/* Categorieën */}
        <section className="mb-12">
          <h2 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
            <Bike className="w-5 h-5 text-purple-400" />
            {t('selectVehicle')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map((catKey) => (
              <button
                key={catKey}
                onClick={() => setSelectedCategory(catKey)}
                className={`py-4 px-6 rounded-xl border text-sm font-bold transition-all ${
                  selectedCategory === catKey
                  ? 'bg-purple-500 border-purple-400 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]'
                  : 'bg-white/5 border-white/10 text-purple-200 hover:bg-white/10'
                }`}
              >
                {t(catKey)}
              </button>
            ))}
          </div>
        </section>

        {/* Diensten Grid */}
        <section className="mb-16">
          <h2 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
            <Wrench className="w-5 h-5 text-purple-400" />
            {t('selectService')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              const isSelected = selectedService === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`group relative text-left p-8 rounded-3xl border transition-all duration-300 ${
                    isSelected 
                    ? 'bg-white/15 border-purple-400 shadow-2xl' 
                    : 'bg-white/5 border-white/10 hover:border-white/30'
                  }`}
                >
                  <div className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{t(service.titleKey)}</h3>
                  <p className="text-purple-200/60 text-sm leading-relaxed">{t(service.descKey)}</p>
                </button>
              );
            })}

            {/* Andere / Contact Card */}
            <div className="group p-8 rounded-3xl border border-dashed border-white/20 bg-transparent flex flex-col justify-between hover:border-purple-400/50 transition-colors">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                  <MessageSquare className="w-7 h-7 text-white/50" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{t('other')}</h3>
                <p className="text-purple-200/60 text-sm leading-relaxed">
                  {t('otherDesc')}
                </p>
              </div>
              <button className="mt-8 w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2">
                {t('contactUs2')}
              </button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        {selectedService && selectedCategory && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-full max-w-md px-4 animate-in fade-in slide-in-from-bottom-8">
            <button className="w-full bg-purple-500 hover:bg-purple-400 text-white py-5 rounded-2xl font-black text-lg shadow-[0_10px_40px_rgba(168,85,247,0.4)] flex items-center justify-center gap-3 transition-all">
              {t('finishRequest')}
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}