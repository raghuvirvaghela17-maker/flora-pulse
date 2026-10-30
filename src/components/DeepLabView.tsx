import React, { useState } from 'react';
import {
  Microscope,
  Thermometer,
  Droplets,
  Wind,
  Sparkles,
  Activity,
  AlertTriangle,
  HeartHandshake,
  CheckCircle2,
  Clock,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { SAMPLE_PLANTS } from '../data/samplePlants';
import { PlantAnalysisResult } from '../types';
import { DeepResearchVisualizer } from './DeepResearchVisualizer';
import { AnalysisResultView } from './AnalysisResultView';

interface DeepLabViewProps {
  onAnalyze: (image: string, mode: 'disease_detection' | 'healthy_identification', deepResearch: boolean) => Promise<PlantAnalysisResult>;
}

export const DeepLabView: React.FC<DeepLabViewProps> = ({ onAnalyze }) => {
  const [selectedSample, setSelectedSample] = useState(SAMPLE_PLANTS[0]);
  const [humidity, setHumidity] = useState(78);
  const [temperature, setTemperature] = useState(26);
  const [leafWetnessHours, setLeafWetnessHours] = useState(9);
  const [isRunningDeepScan, setIsRunningDeepScan] = useState(false);
  const [labResult, setLabResult] = useState<PlantAnalysisResult | null>(null);

  // Environmental Risk Model Calculation
  const isHighRisk = humidity > 70 && temperature >= 22 && leafWetnessHours >= 6;
  const sporeGerminationIndex = Math.min(
    100,
    Math.round((humidity * 0.4 + (temperature / 35) * 30 + (leafWetnessHours / 12) * 30))
  );

  const handleRunDeepScan = () => {
    setIsRunningDeepScan(true);
  };

  const handleVisualizerComplete = async () => {
    try {
      const mode = selectedSample.type === 'healthy' ? 'healthy_identification' : 'disease_detection';
      const result = await onAnalyze(selectedSample.image, mode, true);
      setLabResult({
        ...result,
        imagePreview: selectedSample.image,
        deepResearchNotes: `Environmental Simulation Conditions: Temp ${temperature}°C, RH ${humidity}%, Leaf Wetness ${leafWetnessHours}h. Spore Germination Index: ${sporeGerminationIndex}%. ${result.deepResearchNotes}`,
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsRunningDeepScan(false);
    }
  };

  if (labResult) {
    return (
      <AnalysisResultView
        result={labResult}
        onReset={() => {
          setLabResult(null);
          setIsRunningDeepScan(false);
        }}
      />
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn pb-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 text-teal-900 border border-teal-200 text-xs font-bold uppercase tracking-wider">
          <Microscope className="w-4 h-4 text-teal-700" />
          Phyto-Pathology Agronomic Simulation Lab
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
          15-Second Deep Precision Research Engine
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Simulate micro-climate environmental pressures (humidity, temperature, leaf wetness duration)
          and run a 15-second multi-phase microscopic inspection to predict pathogen transmission.
        </p>
      </div>

      {isRunningDeepScan ? (
        <DeepResearchVisualizer
          imagePreview={selectedSample.image}
          mode={selectedSample.type === 'healthy' ? 'healthy_identification' : 'disease_detection'}
          onComplete={handleVisualizerComplete}
          targetDurationSeconds={13}
        />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Specimen Selection */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900 font-serif flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-600" />
              1. Select Plant Specimen for Deep Analysis
            </h3>

            {/* Specimen Preview Card */}
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
              <img
                src={selectedSample.image}
                alt={selectedSample.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2.5 left-2.5">
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded shadow-xs text-white ${
                    selectedSample.type === 'diseased' ? 'bg-red-600' : 'bg-emerald-600'
                  }`}
                >
                  {selectedSample.type === 'diseased' ? 'Pathogen Inoculated' : 'Clean Specimen'}
                </span>
              </div>
              <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-black/75 backdrop-blur-xs p-2.5 rounded-xl text-white text-xs font-mono">
                {selectedSample.title}
              </div>
            </div>

            {/* Sample Selector Thumbnails */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-slate-500">Choose Specimen:</span>
              <div className="grid grid-cols-2 gap-2">
                {SAMPLE_PLANTS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSelectedSample(s)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-medium transition-all cursor-pointer ${
                      selectedSample.id === s.id
                        ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold shadow-2xs'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    <div className="truncate">{s.title}</div>
                    <div className="text-[10px] text-slate-400 truncate mt-0.5">
                      {s.conditionName}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Agronomic Environment Simulator */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm space-y-6">
            <h3 className="text-base font-bold text-slate-900 font-serif flex items-center gap-2">
              <Activity className="w-4 h-4 text-emerald-600" />
              2. Environmental Stress & Spore Growth Parameters
            </h3>

            {/* Parameter Sliders */}
            <div className="space-y-5">
              {/* Relative Humidity */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                  <span className="flex items-center gap-1.5 text-sky-700">
                    <Droplets className="w-4 h-4" />
                    Relative Atmospheric Humidity (%)
                  </span>
                  <span className="font-mono text-emerald-800 font-bold text-sm">{humidity}%</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="99"
                  value={humidity}
                  onChange={(e) => setHumidity(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>30% (Dry Arid)</span>
                  <span>70% (Fungal Threshold)</span>
                  <span>99% (Saturated)</span>
                </div>
              </div>

              {/* Ambient Temperature */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                  <span className="flex items-center gap-1.5 text-amber-700">
                    <Thermometer className="w-4 h-4" />
                    Ambient Canopy Temperature (°C)
                  </span>
                  <span className="font-mono text-emerald-800 font-bold text-sm">{temperature}°C ({Math.round((temperature * 9) / 5 + 32)}°F)</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="40"
                  value={temperature}
                  onChange={(e) => setTemperature(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>10°C (Dormant)</span>
                  <span>24-28°C (Optimal Spore Bloom)</span>
                  <span>40°C (Heat Stress)</span>
                </div>
              </div>

              {/* Continuous Leaf Wetness */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
                <div className="flex items-center justify-between text-xs font-bold text-slate-700 mb-2">
                  <span className="flex items-center gap-1.5 text-teal-700">
                    <Clock className="w-4 h-4" />
                    Continuous Foliage Wetness (Hours)
                  </span>
                  <span className="font-mono text-emerald-800 font-bold text-sm">{leafWetnessHours} Hours</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="24"
                  value={leafWetnessHours}
                  onChange={(e) => setLeafWetnessHours(Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>0h (Bone Dry)</span>
                  <span>6-8h (Infection Gate)</span>
                  <span>24h (Maximum Sporulation)</span>
                </div>
              </div>
            </div>

            {/* Calculated Pathogen Index HUD */}
            <div className="p-4 rounded-2xl bg-slate-900 text-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-[11px] uppercase font-bold text-slate-400 tracking-wider">
                  Pathogen Proliferation Risk
                </div>
                <div className="text-xl font-bold font-mono text-white flex items-center gap-2 mt-0.5">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      sporeGerminationIndex > 70
                        ? 'bg-red-500 animate-ping'
                        : sporeGerminationIndex > 45
                        ? 'bg-amber-400'
                        : 'bg-emerald-400'
                    }`}
                  />
                  Index: {sporeGerminationIndex} / 100 ({isHighRisk ? 'CRITICAL RISK' : 'MODERATE RISK'})
                </div>
              </div>

              <button
                onClick={handleRunDeepScan}
                className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center gap-2 cursor-pointer transition-all hover:scale-102"
              >
                <Sparkles className="w-4 h-4" />
                <span>Execute 15s Deep Scan</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
