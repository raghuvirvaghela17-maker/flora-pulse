import React, { useState, useRef } from 'react';
import {
  Search,
  Upload,
  Camera,
  Sparkles,
  AlertTriangle,
  Clock,
  CheckCircle2,
  X,
  AlertCircle,
  ArrowRight,
  ShieldAlert,
} from 'lucide-react';
import { SAMPLE_PLANTS } from '../data/samplePlants';
import { PlantAnalysisResult } from '../types';
import { DeepResearchVisualizer } from './DeepResearchVisualizer';
import { AnalysisResultView } from './AnalysisResultView';

interface DiseaseDiagnosticViewProps {
  onAnalyze: (image: string, mode: 'disease_detection', deepResearch: boolean, hint?: string) => Promise<PlantAnalysisResult>;
}

export const DiseaseDiagnosticView: React.FC<DiseaseDiagnosticViewProps> = ({ onAnalyze }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [deepResearch, setDeepResearch] = useState(true);
  const [userHint, setUserHint] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isShowingDeepVisualizer, setIsShowingDeepVisualizer] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<PlantAnalysisResult | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const diseasedSamples = SAMPLE_PLANTS.filter((s) => s.type === 'diseased');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    processFile(file);
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      setErrorMsg('Please upload a valid image file (JPG, PNG, WebP).');
      return;
    }
    setErrorMsg(null);
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

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
      console.error('Camera error:', err);
      setIsCameraActive(false);
      setErrorMsg('Unable to open camera. You can upload an image file instead.');
    }
  };

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
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

  const handleSelectSample = (sample: typeof SAMPLE_PLANTS[0]) => {
    setSelectedImage(sample.image);
    setErrorMsg(null);
  };

  const handleStartAnalysis = () => {
    if (!selectedImage) {
      setErrorMsg('Please select or capture a plant photo to diagnose.');
      return;
    }

    setErrorMsg(null);
    setIsProcessing(true);

    if (deepResearch) {
      setIsShowingDeepVisualizer(true);
    } else {
      executeAnalysis();
    }
  };

  const executeAnalysis = async () => {
    try {
      const result = await onAnalyze(selectedImage!, 'disease_detection', deepResearch, userHint);
      setAnalysisResult({
        ...result,
        imagePreview: selectedImage || undefined,
      });
    } catch (err: any) {
      console.error('Analysis error:', err);
      setErrorMsg('Diagnosis failed. Please check network connection and try again.');
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
    setUserHint('');
    stopCamera();
  };

  if (analysisResult) {
    return <AnalysisResultView result={analysisResult} onReset={handleReset} />;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn pb-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-100 text-red-900 border border-red-200 text-xs font-bold uppercase tracking-wider">
          <AlertTriangle className="w-4 h-4 text-red-700" />
          Phyto-Pathology Disease Scanner
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
          AI Plant Disease Diagnosis & Cure Engine
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Snap or upload a photo of afflicted leaves, fruits, or stems. Flora Pulse AI identifies the
          specific pathogen, displays the issue in a{' '}
          <span className="text-red-700 font-semibold underline decoration-red-300">
            clear light red diagnostic card
          </span>
          , and prescribes treatment in a{' '}
          <span className="text-emerald-700 font-semibold underline decoration-emerald-300">
            subtle green biological cure protocol
          </span>
          .
        </p>
      </div>

      {/* Main Workstation */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
        {isShowingDeepVisualizer ? (
          <DeepResearchVisualizer
            imagePreview={selectedImage}
            mode="disease_detection"
            onComplete={handleVisualizerComplete}
            targetDurationSeconds={12}
          />
        ) : isCameraActive ? (
          /* Live Camera HUD */
          <div className="space-y-4">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-black max-w-lg mx-auto">
              <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-2 border-red-400/40 pointer-events-none rounded-2xl m-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-red-400/30 animate-pulse" />
              </div>
            </div>
            <div className="flex justify-center gap-3">
              <button
                onClick={capturePhoto}
                className="px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-bold flex items-center gap-2 shadow-md cursor-pointer"
              >
                <Camera className="w-5 h-5" />
                <span>Snap Disease Specimen</span>
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
          /* Image Selected / Ready for Analysis */
          <div className="space-y-6">
            <div className="relative aspect-16/9 sm:aspect-21/9 max-h-80 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200">
              <img
                src={selectedImage}
                alt="Selected diseased specimen"
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
              <div className="absolute bottom-3 left-3 bg-red-950/80 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs text-red-300 font-medium border border-red-500/30 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-red-400" />
                Diseased Leaf Specimen Ready for Deep Pathology
              </div>
            </div>

            {/* Optional Hint */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Optional: Plant Type or Symptom Note (Helps the AI agronomist zero in faster)
              </label>
              <input
                type="text"
                value={userHint}
                onChange={(e) => setUserHint(e.target.value)}
                placeholder="e.g. Tomato plant in greenhouse, yellow spots started on lower leaves last week"
                className="w-full px-4 py-2.5 rounded-2xl border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50/50"
              />
            </div>

            {/* Controls: Deep Research Switch & Diagnose Button */}
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
                    Deep Phyto-Research (10-15s precision)
                  </div>
                  <div className="text-xs text-slate-500">
                    Conducts multi-stage chlorosis indexing, pathogen spore matching, and organic treatment curation.
                  </div>
                </div>
              </label>

              <button
                onClick={handleStartAnalysis}
                disabled={isProcessing}
                className="w-full sm:w-auto px-7 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-sm shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>{deepResearch ? 'Run 15s Deep Diagnostic' : 'Instant Diagnose'}</span>
              </button>
            </div>
          </div>
        ) : (
          /* Dropzone / Upload & Camera Selection Area */
          <div
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            className="border-2 border-dashed border-red-300 hover:border-red-400 bg-red-50/20 hover:bg-red-50/30 rounded-3xl p-8 sm:p-12 text-center transition-colors cursor-pointer group"
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />

            <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-700 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform shadow-xs">
              <Search className="w-8 h-8" />
            </div>

            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif mb-1">
              Upload or snap afflicted plant photo
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md mx-auto mb-6">
              Clear close-ups of leaves, spots, stems, or fruits provide the highest diagnostic precision.
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

        {/* Error message */}
        {errorMsg && (
          <div className="mt-4 p-3.5 rounded-2xl bg-red-50 border border-red-200 text-xs text-red-800 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}
      </div>

      {/* 1-Click Diseased Specimens for Instant Testing */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-600" />
            <h3 className="text-lg font-bold text-slate-900 font-serif">
              Try Instant Diseased Samples (1-Click Test)
            </h3>
          </div>
          <span className="text-xs text-slate-500">Click any specimen to run test</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {diseasedSamples.map((sample) => (
            <div
              key={sample.id}
              onClick={() => handleSelectSample(sample)}
              className="bg-white rounded-2xl border border-slate-200 hover:border-red-400 p-4 transition-all hover:shadow-md cursor-pointer flex flex-col justify-between group"
            >
              <div className="aspect-4/3 rounded-xl overflow-hidden bg-slate-900 mb-3 relative">
                <img
                  src={sample.image}
                  alt={sample.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute top-2 left-2 text-[10px] uppercase font-bold bg-red-600 text-white px-2 py-0.5 rounded-md shadow-xs">
                  {sample.conditionName.split(' ')[0]}
                </span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 line-clamp-1">{sample.title}</h4>
                <p className="text-xs text-slate-500 line-clamp-2 mt-1">{sample.description}</p>
              </div>
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-700 font-semibold">
                <span>Test this specimen</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
