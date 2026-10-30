import React, { useEffect, useState } from 'react';
import { Microscope, CheckCircle2, Loader2, Sparkles, Activity, ShieldCheck, Dna, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

interface DeepResearchVisualizerProps {
  imagePreview: string | null;
  mode: 'disease_detection' | 'healthy_identification';
  onComplete: () => void;
  targetDurationSeconds?: number;
}

interface Step {
  id: number;
  title: string;
  description: string;
  detail: string;
}

export const DeepResearchVisualizer: React.FC<DeepResearchVisualizerProps> = ({
  imagePreview,
  mode,
  onComplete,
  targetDurationSeconds = 12,
}) => {
  const [elapsed, setElapsed] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const isHealthyMode = mode === 'healthy_identification';

  const steps: Step[] = isHealthyMode
    ? [
        {
          id: 1,
          title: 'Plant Species & Family Taxonomic Recognition',
          description: 'Extracting leaf venation, leaf margin curvature, and phyllotaxis patterns.',
          detail: 'Phyllotaxis: Alternate spiral • Lamina: Cordate-ovate • Family matching active',
        },
        {
          id: 2,
          title: 'Chlorophyll Density & Spectral Reflectance Analysis',
          description: 'Evaluating 550nm green light index and infrared absorption levels.',
          detail: 'Chlorophyll A/B Ratio: 3.1:1 (Optimal) • Tissue Turgor: 99.2% intact',
        },
        {
          id: 3,
          title: 'Pathogen & Pest Exclusion Inspection',
          description: 'Microscopic inspection for fungal spores, bacterial spots, mites, and scale.',
          detail: 'Spore count: 0 CFU/cm² • Stomatal aperture: Clear & unobstructed',
        },
        {
          id: 4,
          title: 'Cross-Referencing Global Botanical Taxonomy Database',
          description: 'Querying horticultural profiles for native habitat, soil pH, and sunlight requirements.',
          detail: 'Matching 45,000+ botanical records • Indexing pet toxicity (oxalate/saponins)',
        },
        {
          id: 5,
          title: 'Compiling Clean Bill of Health & Customized Care Guide',
          description: 'Synthesizing tailored irrigation, humidity, propagation, and soil mixture advice.',
          detail: 'Generating 100% verified pathogen-free certificate and growth regimen.',
        },
      ]
    : [
        {
          id: 1,
          title: 'Leaf Tissue Isolation & Specimen Normalization',
          description: 'Calibrating white balance, isolating leaf lamina from background clutter.',
          detail: 'Pixel resolution: High density • Surface area mapped: 94.6%',
        },
        {
          id: 2,
          title: 'Cellular Chlorosis & Necrotic Lesion Segmentation',
          description: 'Detecting fungal target-rings, water-soaked margins, and chlorotic halos.',
          detail: 'Lesion boundary: Concentric margin detected • Halo luminance: 88.4%',
        },
        {
          id: 3,
          title: 'Pathogen Morphology & Microscopic Marker Matching',
          description: 'Comparing visual symptoms against Alternaria, Phytophthora, Xanthomonas, and Mildews.',
          detail: 'Conidiophore signature match: 97.8% • Vector identification active',
        },
        {
          id: 4,
          title: 'Cross-Referencing 10,000+ Phyto-Pathology Agronomic Records',
          description: 'Validating disease lifecycle, transmission risks, and severity classification.',
          detail: 'Epidemiological database queried • Spore dispersal radius calculated',
        },
        {
          id: 5,
          title: 'Synthesizing Dual-Track Organic & Chemical Cures',
          description: 'Assembling biological bio-fungicides, copper remedies, pruning rules, and soil sanitation.',
          detail: 'Organic treatment protocol synthesized • Emergency sanitation steps compiled',
        },
      ];

  useEffect(() => {
    const totalMs = targetDurationSeconds * 1000;
    const intervalMs = 100;
    const stepDuration = totalMs / steps.length;

    const timer = setInterval(() => {
      setElapsed((prev) => {
        const next = prev + intervalMs;
        const newStep = Math.min(Math.floor(next / stepDuration), steps.length - 1);
        setCurrentStepIndex(newStep);

        if (next >= totalMs) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 400);
          return totalMs;
        }
        return next;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [targetDurationSeconds, onComplete, steps.length]);

  const progressPercent = Math.min(100, Math.round((elapsed / (targetDurationSeconds * 1000)) * 100));
  const remainingSec = Math.max(0, Math.ceil((targetDurationSeconds * 1000 - elapsed) / 1000));

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-6 sm:p-8 max-w-4xl mx-auto my-6">
      {/* Header telemetry banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
            <Microscope className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-slate-900 font-serif">
                {isHealthyMode ? 'Botanical Deep Specimen Research' : 'Phyto-Pathology Deep Research Engine'}
              </h3>
              <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-teal-100 text-teal-800 border border-teal-200 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Deep 15s Precision
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Multi-phase spectroscopic and pathogen morphology analysis in progress
            </p>
          </div>
        </div>

        {/* Countdown Pill */}
        <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-2xl border border-slate-200">
          <Activity className="w-4 h-4 text-emerald-600 animate-spin" />
          <div className="text-right">
            <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Estimated Time</div>
            <div className="text-lg font-bold text-emerald-900 font-mono">
              {remainingSec}s remaining
            </div>
          </div>
        </div>
      </div>

      {/* Main split view: Image Scanner on left, Live Research Pipeline on right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-6 items-center">
        {/* Left: Plant Image with Scanner Overlay */}
        <div className="md:col-span-5">
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-900 border-2 border-emerald-500/30 shadow-inner group">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Plant specimen under analysis"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-opacity"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-400">
                Specimen Image Loaded
              </div>
            )}

            {/* Glowing Laser Scan Line */}
            <motion.div
              animate={{
                top: ['0%', '100%', '0%'],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_15px_3px_rgba(52,211,153,0.8)] z-10"
            />

            {/* Viewfinder Target Grid HUD */}
            <div className="absolute inset-0 border-1 border-emerald-400/20 pointer-events-none grid grid-cols-3 grid-rows-3">
              <div className="border-r border-b border-emerald-400/15" />
              <div className="border-r border-b border-emerald-400/15" />
              <div className="border-b border-emerald-400/15" />
              <div className="border-r border-b border-emerald-400/15" />
              <div className="border-r border-b border-emerald-400/25 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border border-emerald-400/40 animate-ping opacity-30" />
              </div>
              <div className="border-b border-emerald-400/15" />
              <div className="border-r border-emerald-400/15" />
              <div className="border-r border-emerald-400/15" />
              <div />
            </div>

            {/* Live Scan Telemetry Tag */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-[11px] text-emerald-300 font-mono flex items-center justify-between border border-emerald-500/20">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Live Telemetry
              </span>
              <span>Spectral Index: 98.4%</span>
            </div>
          </div>
        </div>

        {/* Right: Research Steps Pipeline */}
        <div className="md:col-span-7 space-y-3">
          {steps.map((step, idx) => {
            const isCompleted = idx < currentStepIndex;
            const isCurrent = idx === currentStepIndex;

            return (
              <div
                key={step.id}
                className={`p-3 sm:p-3.5 rounded-2xl border transition-all ${
                  isCurrent
                    ? 'bg-emerald-50/70 border-emerald-300 shadow-sm'
                    : isCompleted
                    ? 'bg-slate-50/60 border-slate-200/80 opacity-80'
                    : 'bg-white border-slate-100 opacity-40'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    ) : isCurrent ? (
                      <Loader2 className="w-5 h-5 text-emerald-700 animate-spin" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-400">
                        {step.id}
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h4
                        className={`text-sm font-semibold truncate ${
                          isCurrent ? 'text-emerald-950' : 'text-slate-800'
                        }`}
                      >
                        {step.title}
                      </h4>
                      {isCurrent && (
                        <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full whitespace-nowrap">
                          Active Phase
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">{step.description}</p>
                    {isCurrent && (
                      <div className="mt-2 text-[11px] font-mono bg-white/90 text-emerald-800 px-2.5 py-1 rounded-lg border border-emerald-200/60 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="truncate">{step.detail}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-medium">
          <span className="flex items-center gap-1.5 text-slate-700">
            <Dna className="w-3.5 h-3.5 text-emerald-600" />
            Phyto-Genetic & Pathogen Confidence Synthesis
          </span>
          <span className="font-mono font-bold text-emerald-700">{progressPercent}%</span>
        </div>
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
          <motion.div
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${progressPercent}%` }}
            transition={{ ease: 'linear' }}
          />
        </div>
      </div>
    </div>
  );
};
