import React, { useState, useRef } from 'react';
import {
  ShieldCheck,
  Upload,
  Camera,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Clock,
  ArrowRight,
  Leaf,
  X,
} from 'lucide-react';
import { SAMPLE_PLANTS } from '../data/samplePlants';
import { PlantAnalysisResult } from '../types';
import { DeepResearchVisualizer } from './DeepResearchVisualizer';
import { AnalysisResultView } from './AnalysisResultView';

interface HealthyPlantViewProps {
  onAnalyze: (image: string, mode: 'healthy_identification', deepResearch: boolean) => Promise<PlantAnalysisResult>;
}

export const HealthyPlantView: React.FC<HealthyPlantViewProps> = ({ onAnalyze }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [deepResearch, setDeepResearch] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isShowingDeepVisualizer, setIsShowingDeepVisualizer] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<PlantAnalysisResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const healthySamples = SAMPLE_PLANTS.filter((s) => s.type === 'healthy');

  // File Upload Handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    processFile(file);
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please select a valid image file (JPG, PNG, WebP).');
      return;
    }
    setErrorMsg(null);
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Drag and Drop handlers
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  // Camera handling
  const startCamera = async () => {
    try {
      setIsCameraActive(true);
      setErrorMsg(null);
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error('Camera access error:', err);
      setIsCameraActive(false);
      setErrorMsg('Camera permission not granted or device camera unavailable. You can upload an image instead.');
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setIsCameraActive(false);
  };

  const capturePhoto = () => {
    if (!videoRef.current) return;
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth || 640;
    canvas.height = videoRef.current.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
      setSelectedImage(dataUrl);
      stopCamera();
    }
  };

  // Sample Selection
  const handleSelectSample = (sample: typeof SAMPLE_PLANTS[0]) => {
    setSelectedImage(sample.image);
    setErrorMsg(null);
  };

  // Run Analysis
  const handleStartAnalysis = async () => {
    if (!selectedImage) {
      setErrorMsg('Please select or capture a plant photo first.');
      return;
    }

    setErrorMsg(null);
    setIsProcessing(true);

    if (deepResearch) {
      setIsShowingDeepVisualizer(true);
      // Deep visualizer will trigger the completion after 12-15s
    } else {
      executeAnalysis();
    }
  };

  const executeAnalysis = async () => {
    try {
      const result = await onAnalyze(selectedImage!, 'healthy_identification', deepResearch);
      setAnalysisResult({
        ...result,
        imagePreview: selectedImage || undefined,
      });
    } catch (err: any) {
      console.error(err);
      setErrorMsg('Could not complete analysis. Please try again.');
    } finally {
      setIsProcessing(false);
      setIsShowingDeepVisualizer(false);
    }
  };

  const handleVisualizerComplete = () => {
    executeAnalysis();
  };

  const handleReset = () => {
    setSelectedImage(null);
    setAnalysisResult(null);
    setErrorMsg(null);
    stopCamera();
  };

  // If already analyzed, show result
  if (analysisResult) {
    return <AnalysisResultView result={analysisResult} onReset={handleReset} />;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn pb-12">
      {/* Page Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4 text-emerald-700" />
          Dedicated Mode: Healthy Plant Identification
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
          Verify Health & Identify Plant Species
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Upload any photo of a normal or houseplant. Flora Pulse AI will verify that it is{' '}
          <strong className="text-emerald-800">100% free of disease</strong>, determine its exact
          taxonomic species, and compile a custom watering, lighting, and care guide.
        </p>
      </div>

      {/* Main Upload / Camera Stage */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden p-6 sm:p-8">
        {/* Deep Research Visualizer Active State */}
        {isShowingDeepVisualizer ? (
          <DeepResearchVisualizer
            imagePreview={selectedImage}
            mode="healthy_identification"
            onComplete={handleVisualizerComplete}
            targetDurationSeconds={12}
          />
        ) : isCameraActive ? (
          /* Live Camera Viewfinder */
          <div className="space-y-4">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-black max-w-lg mx-auto">
              <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-2 border-emerald-400/40 pointer-events-none rounded-2xl m-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-emerald-400/30 animate-pulse" />
              </div>
            </div>
            <div className="flex justify-center gap-3">
              <button
                onClick={capturePhoto}
                className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold flex items-center gap-2 shadow-md cursor-pointer"
              >
                <Camera className="w-5 h-5" />
                <span>Snap Specimen</span>
              </button>
              <button
                onClick={stopCamera}
                className="px-4 py-3 rounded-2xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : selectedImage ? (
          /* Selected Photo Preview with Action Buttons */
          <div className="space-y-6">
            <div className="relative aspect-16/9 sm:aspect-21/9 max-h-80 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
              <img
                src={selectedImage}
                alt="Selected Plant"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain mx-auto"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/70 text-white hover:bg-slate-900 transition-colors cursor-pointer"
                title="Remove photo"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-3 left-3 bg-emerald-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs text-emerald-300 font-medium border border-emerald-500/30 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Specimen Image Ready for Deep Inspection
              </div>
            </div>

            {/* Controls: Deep Research Switch & Run Button */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={deepResearch}
                  onChange={(e) => setDeepResearch(e.target.checked)}
                  className="w-5 h-5 rounded-md text-emerald-600 focus:ring-emerald-500 border-slate-300"
                />
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    Deep Research Mode (10-15s inspection)
                  </div>
                  <div className="text-xs text-slate-500">
                    Performs rigorous chlorophyll index, spectral venation, and pathogen exclusion checks.
                  </div>
                </div>
              </label>

              <button
                onClick={handleStartAnalysis}
                disabled={isProcessing}
                className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-sm shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>{deepResearch ? 'Begin Deep 15s Research' : 'Identify & Check Health'}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Dropzone / Upload & Camera Selection Area */
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="border-2 border-dashed border-emerald-300 hover:border-emerald-500 bg-emerald-50/20 hover:bg-emerald-50/40 rounded-3xl p-8 sm:p-12 text-center transition-colors cursor-pointer group"
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />

            <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform shadow-xs">
              <Upload className="w-8 h-8" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-1">
              Drop normal plant photo here, or browse files
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6">
              Supports JPEG, PNG, WebP photos of leaves, houseplant pots, stems, or garden specimens.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
                className="px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>Upload From Device</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  startCamera();
                }}
                className="px-5 py-2.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs sm:text-sm font-semibold shadow-2xs flex items-center gap-2 cursor-pointer"
              >
                <Camera className="w-4 h-4 text-emerald-600" />
                <span>Open Live Camera</span>
              </button>
            </div>
          </div>
        )}

        {/* Error Notification */}
        {errorMsg && (
          <div className="mt-4 p-3.5 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-800 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>

      {/* 1-Click Healthy Specimens for Instant Testing */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-emerald-600" />
            <h3 className="text-lg font-bold text-slate-900 font-serif">
              Try Instant Healthy Specimens (1-Click Test)
            </h3>
          </div>
          <span className="text-xs text-slate-500">No plant on hand? Click to test</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {healthySamples.map((sample) => (
            <div
              key={sample.id}
              onClick={() => handleSelectSample(sample)}
              className="bg-white rounded-2xl border border-slate-200 hover:border-emerald-400 p-4 transition-all hover:shadow-md cursor-pointer flex gap-4 items-center group"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-900 shrink-0 relative">
                <img
                  src={sample.image}
                  alt={sample.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute bottom-1 right-1 bg-emerald-600 text-white rounded-full p-0.5">
                  <CheckCircle2 className="w-3 h-3" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                  Healthy Plant
                </div>
                <h4 className="text-sm font-bold text-slate-900 truncate mt-0.5">
                  {sample.plantName}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2 mt-0.5">{sample.description}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all shrink-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Educational Value Proposition Card */}
      <div className="bg-emerald-50/70 border border-emerald-200 rounded-3xl p-6 sm:p-7">
        <h4 className="text-base font-bold text-emerald-950 font-serif mb-2 flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-700" />
          How Flora Pulse Confirms Disease-Free Plants
        </h4>
        <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed mb-4">
          Our deep vision system analyzes hundreds of microscopic sub-features across the leaf
          blade: it evaluates stomatal distribution, measures chlorotic gradient variations down to
          individual cell clusters, and cross-references over 10,000 known pathogen symptom patterns.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-emerald-950">
          <div className="bg-white/80 p-3 rounded-xl border border-emerald-200">
            <strong>1. Clean Bill of Health:</strong> Explicit verification that leaf cuticles and
            veins are free of bacterial, fungal, and viral lesions.
          </div>
          <div className="bg-white/80 p-3 rounded-xl border border-emerald-200">
            <strong>2. Species Taxonomy:</strong> Botanical binomial name, common name, family, and
            native origin.
          </div>
          <div className="bg-white/80 p-3 rounded-xl border border-emerald-200">
            <strong>3. Custom Growth Profile:</strong> Tailored sunlight, watering schedule, soil
            pH, and pet toxicity safety warnings.
          </div>
        </div>
      </div>
    </div>
  );
};
