import { useState } from 'react';
import BatteryPackCalculator from './pages/battery_pack_calculator';
import ServicePage from './pages/servicepage';

function App() {
  const [currentPage, setCurrentPage] = useState<'calc' | 'service'>('calc');

  return (
    <div className="relative">
      {/* Simple Navigation Toggle */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 p-1 rounded-full flex gap-2">
        <button 
          onClick={() => setCurrentPage('calc')}
          className={`px-6 py-2 rounded-full text-sm font-bold transition ${currentPage === 'calc' ? 'bg-purple-600 text-white' : 'text-purple-200 hover:text-white'}`}
        >
          Calculator
        </button>
        <button 
          onClick={() => setCurrentPage('service')}
          className={`px-6 py-2 rounded-full text-sm font-bold transition ${currentPage === 'service' ? 'bg-purple-600 text-white' : 'text-purple-200 hover:text-white'}`}
        >
          Reparatie
        </button>
      </nav>

      {/* Page Content */}
      <main>
        {currentPage === 'calc' ? <BatteryPackCalculator /> : <ServicePage />}
      </main>
    </div>
  );
}

export default App;