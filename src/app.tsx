import { useState } from 'react';
import BatteryPackCalculator from './pages/battery_pack_calculator';
import ServicePage from './pages/servicepage';
import { LanguageProvider, useLanguage } from './LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<'calc' | 'service'>('calc');
  const { t } = useLanguage();

  return (
    <div className="relative">
      {/* Navigation Bar */}
      <nav className="fixed top-4 left-0 right-0 z-50 px-4 flex justify-between items-center">
        {/* Page Navigation */}
        <div className="absolute left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 p-1 rounded-full flex gap-2">
          <button
            onClick={() => setCurrentPage('calc')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition ${currentPage === 'calc' ? 'bg-purple-600 text-white' : 'text-purple-200 hover:text-white'}`}
          >
            {t('calculator')}
          </button>
          <button
            onClick={() => setCurrentPage('service')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition ${currentPage === 'service' ? 'bg-purple-600 text-white' : 'text-purple-200 hover:text-white'}`}
          >
            {t('reparatie')}
          </button>
        </div>

        {/* Language Switcher - Top Right */}
        <div className="ml-auto">
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Page Content */}
      <main>
        {currentPage === 'calc' ? <BatteryPackCalculator /> : <ServicePage />}
      </main>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;