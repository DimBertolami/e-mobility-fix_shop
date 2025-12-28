import { useState } from 'react';
import { Battery, Zap, Box } from 'lucide-react';

interface InputState {
  volt: number;
  ah: number;
  series: number;
  parallel: number;
  height: number;
  length: number;
  width: number;
}

interface ResultState {
  totalVoltage: string;
  totalAh: string;
  totalCells: number;
  deckVolume: string;
}

export default function BatteryPackCalculator() {
  const [inputs, setInputs] = useState<InputState>({
    volt: 3.7,
    ah: 2.8,
    series: 13,
    parallel: 8,
    height: 7.5,
    length: 30.5,
    width: 14.5
  });

  const [results, setResults] = useState<ResultState | null>(null);
  const [showFlow, setShowFlow] = useState(false);

  const handleInputChange = (field: keyof InputState, value: string) => {
    setInputs(prev => ({ ...prev, [field]: parseFloat(value) || 0 }));
  };

  const calculate = () => {
    const totalVoltage = inputs.series * inputs.volt;
    const totalAh = inputs.parallel * inputs.ah;
    const totalCells = inputs.series * inputs.parallel;
    const deckVolume = (inputs.height * inputs.length * inputs.width) / 1000;

    setResults({
      totalVoltage: totalVoltage.toFixed(2),
      totalAh: totalAh.toFixed(2),
      totalCells,
      deckVolume: deckVolume.toFixed(2)
    });

    setShowFlow(false);
    setTimeout(() => setShowFlow(true), 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Battery className="w-12 h-12 text-purple-400" />
            <h1 className="text-5xl font-bold text-white">Battery Pack Designer</h1>
          </div>
          <p className="text-purple-200 text-lg">Design custom battery packs for electric vehicles</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  Battery Specifications
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-purple-200 text-sm font-medium mb-2">
                      Voltage per Cell (V)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={inputs.volt}
                      onChange={(e) => handleInputChange('volt', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-purple-300/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-purple-200 text-sm font-medium mb-2">
                      Capacity per Cell (Ah)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={inputs.ah}
                      onChange={(e) => handleInputChange('ah', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-purple-300/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-purple-200 text-sm font-medium mb-2">
                      Cells in Series
                    </label>
                    <input
                      type="number"
                      value={inputs.series}
                      onChange={(e) => handleInputChange('series', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-purple-300/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-purple-200 text-sm font-medium mb-2">
                      Cells in Parallel
                    </label>
                    <input
                      type="number"
                      value={inputs.parallel}
                      onChange={(e) => handleInputChange('parallel', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-purple-300/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Box className="w-6 h-6 text-blue-400" />
                  Battery Size
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-purple-200 text-sm font-medium mb-2">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      value={inputs.height}
                      onChange={(e) => handleInputChange('height', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-purple-300/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-purple-200 text-sm font-medium mb-2">
                      Length (cm)
                    </label>
                    <input
                      type="number"
                      value={inputs.length}
                      onChange={(e) => handleInputChange('length', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-purple-300/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-purple-200 text-sm font-medium mb-2">
                      Width (cm)
                    </label>
                    <input
                      type="number"
                      value={inputs.width}
                      onChange={(e) => handleInputChange('width', e.target.value)}
                      className="w-full px-4 py-3 bg-white/5 border border-purple-300/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={calculate}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg transform transition hover:scale-105"
              >
                Calculate Pack
              </button>
            </div>

            {/* Results */}
            {results && (
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 rounded-xl border border-purple-400/30">
                  <p className="text-purple-200 text-sm">Total Voltage</p>
                  <p className="text-3xl font-bold text-white">{results.totalVoltage}V</p>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-4 rounded-xl border border-blue-400/30">
                  <p className="text-blue-200 text-sm">Total Capacity</p>
                  <p className="text-3xl font-bold text-white">{results.totalAh}Ah</p>
                </div>
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-4 rounded-xl border border-green-400/30">
                  <p className="text-green-200 text-sm">Total Cells</p>
                  <p className="text-3xl font-bold text-white">{results.totalCells}</p>
                </div>
                <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 p-4 rounded-xl border border-orange-400/30">
                  <p className="text-orange-200 text-sm">Deck Volume</p>
                  <p className="text-3xl font-bold text-white">{results.deckVolume}L</p>
                </div>
              </div>
            )}
          </div>

          {/* Visualization Section */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Cell Configuration</h2>
            {results ? (
              <div className="flex items-center justify-center">
                <svg
                  viewBox={`0 0 ${inputs.series * 60 + 100} ${inputs.parallel * 50 + 80}`}
                  className="w-full h-full"
                  style={{ maxHeight: '600px' }}
                >
                  <defs>
                    <linearGradient id="cellGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 1 }} />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Draw parallel groups */}
                  {[...Array(inputs.parallel)].map((_, p) => (
                    <g key={`parallel-${p}`}>
                      {/* Draw cells in series */}
                      {[...Array(inputs.series)].map((_, s) => {
                        const x = 50 + s * 60;
                        const y = 40 + p * 50;
                        return (
                          <g key={`cell-${s}-${p}`}>
                            {/* Cell body */}
                            <rect
                              x={x}
                              y={y}
                              width="40"
                              height="30"
                              rx="4"
                              fill="url(#cellGradient)"
                              stroke="#fff"
                              strokeWidth="2"
                              filter="url(#glow)"
                              className={showFlow ? 'animate-pulse' : ''}
                              style={{
                                animation: showFlow ? `pulse 2s ease-in-out ${s * 0.1}s infinite` : 'none'
                              }}
                            />
                            {/* Plus terminal */}
                            <circle cx={x + 32} cy={y + 15} r="4" fill="#fbbf24" stroke="#fff" strokeWidth="1" />
                            <text x={x + 32} y={y + 17} textAnchor="middle" fill="#000" fontSize="10" fontWeight="bold">+</text>
                            {/* Minus terminal */}
                            <circle cx={x + 8} cy={y + 15} r="4" fill="#6b7280" stroke="#fff" strokeWidth="1" />
                            <text x={x + 8} y={y + 17} textAnchor="middle" fill="#fff" fontSize="10" fontWeight="bold">−</text>

                            {/* Series connection (horizontal) */}
                            {s < inputs.series - 1 && (
                              <>
                                <line
                                  x1={x + 40}
                                  y1={y + 15}
                                  x2={x + 50}
                                  y2={y + 15}
                                  stroke="#fbbf24"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                />
                                {showFlow && (
                                  <circle
                                    cx={x + 40}
                                    cy={y + 15}
                                    r="3"
                                    fill="#fbbf24"
                                    filter="url(#glow)"
                                  >
                                    <animate
                                      attributeName="cx"
                                      from={x + 40}
                                      to={x + 50}
                                      dur="1.5s"
                                      begin={`${s * 0.15}s`}
                                      repeatCount="indefinite"
                                    />
                                  </circle>
                                )}
                              </>
                            )}

                            {/* Parallel connection (vertical) */}
                            {p < inputs.parallel - 1 && s === 0 && (
                              <line
                                x1={x + 8}
                                y1={y + 30}
                                x2={x + 8}
                                y2={y + 50}
                                stroke="#6b7280"
                                strokeWidth="3"
                                strokeLinecap="round"
                              />
                            )}
                          </g>
                        );
                      })}
                    </g>
                  ))}

                  {/* Labels */}
                  <text x="20" y="25" fill="#a78bfa" fontSize="14" fontWeight="bold">Series →</text>
                  <text x="10" y={inputs.parallel * 25 + 40} fill="#a78bfa" fontSize="14" fontWeight="bold" transform={`rotate(-90 10 ${inputs.parallel * 25 + 40})`}>Parallel ↓</text>
                </svg>
              </div>
            ) : (
              <div className="flex items-center justify-center h-96 text-purple-300">
                <div className="text-center">
                  <Battery className="w-24 h-24 mx-auto mb-4 opacity-50" />
                  <p className="text-xl">Enter specifications and click Calculate</p>
                </div>
              </div>
            )}

            {results && (
              <div className="mt-6 bg-purple-500/20 p-4 rounded-xl border border-purple-400/30">
                <p className="text-purple-200 text-sm mb-2">Configuration:</p>
                <p className="text-white font-mono">{inputs.series}S{inputs.parallel}P Pack</p>
                <p className="text-purple-200 text-xs mt-2">
                  {inputs.series} cells in series (horizontal) × {inputs.parallel} parallel groups (vertical)
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}