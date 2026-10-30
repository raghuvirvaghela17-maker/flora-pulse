import React, { useState } from 'react';
import {
  AlertTriangle,
  CheckCircle,
  ShieldAlert,
  Sprout,
  Sun,
  Droplets,
  Layers,
  Sparkles,
  Info,
  RefreshCw,
  Printer,
  Share2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  ArrowRight,
  HeartHandshake,
  Stethoscope,
  BookOpen,
} from 'lucide-react';
import { PlantAnalysisResult, Language } from '../types';

interface AnalysisResultViewProps {
  result: PlantAnalysisResult;
  onReset: () => void;
  onSelectSample?: (id: string) => void;
  language?: Language;
}

type TabSection = 'diagnosis' | 'treatment' | 'care' | 'chat';

const UI_T = {
  en: {
    backBtn: 'Scan Another Plant',
    printBtn: 'Print Report',
    shareBtn: 'Share Result',
    copied: 'Copied!',
    tabDiag: 'Diagnosis',
    tabTreat: 'Treatment',
    tabCare: 'Care Guide',
    tabChat: 'Ask AI',
    statusHealthy: 'Healthy',
    statusDiseased: 'Health Issue Detected',
    confidence: 'AI Confidence',
    diagOverview: 'Diagnosis Overview',
    symptomsTitle: 'Visual Symptoms & Markers',
    rootCauseTitle: 'Biological Root Cause',
    actionPlanTitle: 'Immediate Action Plan',
    actionPlanSub: 'Step-by-step emergency care instructions',
    organicTitle: 'Organic & Chemical Remedies',
    organicSub: 'Treatment options to cure the infection',
    preventionTitle: 'Long-Term Prevention',
    preventionSub: 'Prevent pathogen resurgence',
    careTitle: 'Botanical Care Profile',
    sunlight: 'Sunlight',
    water: 'Hydration',
    soil: 'Soil Type',
    toxicity: 'Toxicity',
    botanicalNote: 'Botanical Note',
    deepResearchTitle: 'Deep Research Phyto-Pathology Notes',
    deepResearchSub: 'Scientific epidemiology and cellular impact',
    askAiTitle: 'Have questions about this diagnosis?',
    askAiSub: 'Ask the Flora Pulse AI Assistant for specific advice about your plant.',
    askBtn: 'Ask',
    askPlaceholder: 'E.g., Can I use neem oil for this?',
  },
  hi: {
    backBtn: 'दूसरा पौधा स्कैन करें',
    printBtn: 'रिपोर्ट प्रिंट करें',
    shareBtn: 'शेयर करें',
    copied: 'कॉपी किया गया!',
    tabDiag: 'निदान',
    tabTreat: 'उपचार',
    tabCare: 'देखभाल गाइड',
    tabChat: 'AI से पूछें',
    statusHealthy: 'स्वस्थ',
    statusDiseased: 'स्वास्थ्य समस्या पाई गई',
    confidence: 'AI आत्मविश्वास',
    diagOverview: 'निदान अवलोकन',
    symptomsTitle: 'दृश्य लक्षण और संकेत',
    rootCauseTitle: 'जैविक मूल कारण',
    actionPlanTitle: 'तत्काल कार्य योजना',
    actionPlanSub: 'चरण-दर-चरण आपातकालीन देखभाल निर्देश',
    organicTitle: 'जैविक और रासायनिक उपचार',
    organicSub: 'संक्रमण को ठीक करने के विकल्प',
    preventionTitle: 'दीर्घकालिक रोकथाम',
    preventionSub: 'रोगजनकों को वापस आने से रोकें',
    careTitle: 'वानस्पतिक देखभाल प्रोफ़ाइल',
    sunlight: 'धूप',
    water: 'पानी (हाइड्रेशन)',
    soil: 'मिट्टी का प्रकार',
    toxicity: 'विषाक्तता',
    botanicalNote: 'वानस्पतिक नोट',
    deepResearchTitle: 'गहन शोध फाइटो-पैथोलॉजी नोट्स',
    deepResearchSub: 'वैज्ञानिक महामारी विज्ञान और सेलुलर प्रभाव',
    askAiTitle: 'क्या इस निदान के बारे में कोई प्रश्न हैं?',
    askAiSub: 'अपने पौधे के बारे में विशिष्ट सलाह के लिए फ्लोरा पल्स AI सहायक से पूछें।',
    askBtn: 'पूछें',
    askPlaceholder: 'उदा., क्या मैं इसके लिए नीम के तेल का उपयोग कर सकता हूँ?',
  },
  gu: {
    backBtn: 'બીજો છોડ સ્કેન કરો',
    printBtn: 'રિપોર્ટ પ્રિન્ટ કરો',
    shareBtn: 'શેર કરો',
    copied: 'કોપી થઈ ગયું!',
    tabDiag: 'નિદાન',
    tabTreat: 'સારવાર',
    tabCare: 'સંભાળ માર્ગદર્શિકા',
    tabChat: 'AI ને પૂછો',
    statusHealthy: 'સ્વસ્થ',
    statusDiseased: 'આરોગ્ય સમસ્યા મળી',
    confidence: 'AI આત્મવિશ્વાસ',
    diagOverview: 'નિદાન વિહંગાવલોકન',
    symptomsTitle: 'દ્રશ્ય લક્ષણો અને સંકેતો',
    rootCauseTitle: 'જૈવિક મૂળ કારણ',
    actionPlanTitle: 'તાત્કાલિક કાર્ય યોજના',
    actionPlanSub: 'પગલાવાર ઈમરજન્સી સંભાળ સૂચનાઓ',
    organicTitle: 'જૈવિક અને રાસાયણિક ઉપાયો',
    organicSub: 'ચેપ મટાડવાના વિકલ્પો',
    preventionTitle: 'લાંબા ગાળાની નિવારણ',
    preventionSub: 'રોગકારક જીવાણુઓને પાછા આવતા અટકાવો',
    careTitle: 'બોટનિકલ કેર પ્રોફાઇલ',
    sunlight: 'સૂર્યપ્રકાશ',
    water: 'પાણી (હાઇડ્રેશન)',
    soil: 'માટીનો પ્રકાર',
    toxicity: 'ઝેરીતા',
    botanicalNote: 'બોટનિકલ નોંધ',
    deepResearchTitle: 'ડીપ રિસર્ચ ફાઇટો-પેથોલોજી નોટ્સ',
    deepResearchSub: 'વૈજ્ઞાનિક રોગશાસ્ત્ર અને સેલ્યુલર અસર',
    askAiTitle: 'શું આ નિદાન વિશે કોઈ પ્રશ્નો છે?',
    askAiSub: 'તમારા છોડ વિશે ચોક્કસ સલાહ માટે ફ્લોરા પલ્સ AI સહાયકને પૂછો.',
    askBtn: 'પૂછો',
    askPlaceholder: 'દા.ત., શું હું આના માટે લીમડાના તેલનો ઉપયોગ કરી શકું?',
  }
};

export const AnalysisResultView: React.FC<AnalysisResultViewProps> = ({
  result,
  onReset,
  language = 'en',
}) => {
  const t = UI_T[language];
  const [activeSection, setActiveSection] = useState<TabSection>('diagnosis');
  const [showDeepNotes, setShowDeepNotes] = useState(true);
  const [question, setQuestion] = useState('');
  const [chatLog, setChatLog] = useState<{ q: string; a: string }[]>([]);
  const [isAsking, setIsAsking] = useState(false);
  const [copied, setCopied] = useState(false);

  const isHealthy = result.isHealthy;

  const handleShare = () => {
    if (navigator.clipboard) {
      const summaryText = `🌿 Flora Pulse AI Diagnosis:\nPlant: ${result.plantName} (${result.botanicalName})\nStatus: ${result.healthStatus}\nDiagnosis: ${result.diseaseInfo.name}\nTreatment: ${result.treatment.summary}`;
      navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setIsAsking(true);
    const userQ = question.trim();
    setQuestion('');

    setTimeout(() => {
      let answer = '';
      const qLower = userQ.toLowerCase();
      if (qLower.includes('water') || qLower.includes('how often')) {
        answer = `For ${result.plantName}: ${result.botanicalCareGuide.watering}. Avoid overhead foliage spraying which encourages fungal spore germination.`;
      } else if (qLower.includes('pet') || qLower.includes('dog') || qLower.includes('cat') || qLower.includes('toxic')) {
        answer = `Pet Safety Profile: ${result.botanicalCareGuide.toxicity}. If ingested, keep your pet hydrated and consult your local veterinarian with the botanical name ${result.botanicalName}.`;
      } else if (qLower.includes('soil') || qLower.includes('pot') || qLower.includes('fertilizer')) {
        answer = `Recommended substrate: ${result.botanicalCareGuide.soilType}. Ensure containers have drainage holes to prevent root suffocation.`;
      } else if (qLower.includes('sun') || qLower.includes('light')) {
        answer = `Lighting recommendation: ${result.botanicalCareGuide.sunlight}. Adequate lighting boosts cellular immune resilience against foliar pathogens.`;
      } else {
        answer = `Based on our phyto-pathological inspection of ${result.plantName} (${result.botanicalName}): The key protocol is "${result.treatment.summary}". Ensure strict hygiene: remove affected foliage and maintain airflow.`;
      }

      setChatLog((prev) => [...prev, { q: userQ, a: answer }]);
      setIsAsking(false);
    }, 600);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fadeIn pb-12 print:p-0">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200/90 shadow-xs print:hidden">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
            Analysis Complete • {t.confidence}: {result.confidence}%
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? t.copied : t.shareBtn}</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>{t.printBtn}</span>
          </button>
          <button
            onClick={onReset}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>{t.backBtn}</span>
          </button>
        </div>
      </div>

      {/* Main Specimen Overview Card */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Specimen Thumbnail / Image Preview */}
          {result.imagePreview && (
            <div className="w-full md:w-64 h-52 shrink-0 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 shadow-inner relative group">
              <img
                src={result.imagePreview}
                alt={result.plantName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2.5 left-2.5">
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-bold shadow-xs ${
                    isHealthy
                      ? 'bg-emerald-600 text-white'
                      : 'bg-red-600 text-white'
                  }`}
                >
                  {result.healthStatus}
                </span>
              </div>
            </div>
          )}

          {/* Plant Taxonomy & Status Summary */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {result.plantFamily}
                </span>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif mt-1">
                  {result.plantName}
                </h1>
                <p className="text-sm sm:text-base italic text-slate-600 font-serif">
                  {result.botanicalName}
                </p>
              </div>

              {/* Health Score Pill */}
              <div className="text-right">
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-2xl border text-sm font-bold ${
                    isHealthy
                      ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
                      : 'bg-red-50 text-red-900 border-red-300'
                  }`}
                >
                  {isHealthy ? (
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <ShieldAlert className="w-4 h-4 text-red-600" />
                  )}
                  <span>{result.healthStatus}</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1 font-mono">
                  Neural Confidence: {result.confidence}%
                </div>
              </div>
            </div>

            {/* Quick Verdict Description */}
            <div className="mt-4 pt-4 border-t border-slate-100">
              <p className="text-sm text-slate-700 leading-relaxed">
                <strong className="text-slate-900">{t.diagOverview}: </strong>
                {result.treatment.summary}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center justify-start overflow-x-auto gap-2 mb-6 pb-px scrollbar-hide border-b border-slate-200">
        <button onClick={() => setActiveSection('diagnosis')} className={`whitespace-nowrap px-4 py-2.5 rounded-t-xl font-bold text-sm transition-colors border-b-2 ${activeSection === 'diagnosis' ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50' : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'}`}>
          <div className="flex items-center gap-2">
            <Stethoscope className="w-4 h-4" />
            {t.tabDiag}
          </div>
        </button>
        <button onClick={() => setActiveSection('treatment')} className={`whitespace-nowrap px-4 py-2.5 rounded-t-xl font-bold text-sm transition-colors border-b-2 ${activeSection === 'treatment' ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50' : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'}`}>
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-4 h-4" />
            {t.tabTreat}
          </div>
        </button>
        <button onClick={() => setActiveSection('care')} className={`whitespace-nowrap px-4 py-2.5 rounded-t-xl font-bold text-sm transition-colors border-b-2 ${activeSection === 'care' ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50' : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'}`}>
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            {t.tabCare}
          </div>
        </button>
        <button onClick={() => setActiveSection('chat')} className={`whitespace-nowrap px-4 py-2.5 rounded-t-xl font-bold text-sm transition-colors border-b-2 ${activeSection === 'chat' ? 'border-emerald-600 text-emerald-700 bg-emerald-50/50' : 'border-transparent text-slate-500 hover:text-slate-800 hover:bg-slate-50'}`}>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            {t.tabChat}
          </div>
        </button>
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-2 duration-500 space-y-6">
        {/* ========================================================= */}
        {/* DIAGNOSIS TAB */}
        {/* ========================================================= */}
        {activeSection === 'diagnosis' && (
          <div
            id="disease-issue-card"
            className="bg-red-50/75 border border-red-200/90 rounded-3xl p-6 sm:p-7 text-red-950 shadow-xs relative overflow-hidden transition-all hover:border-red-300"
          >
          {/* Subtle watermarked leaf background icon */}
          <AlertTriangle className="absolute -bottom-4 -right-4 w-32 h-32 text-red-300/20 pointer-events-none" />

          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-red-200/80 text-red-900 flex items-center justify-center shadow-xs">
                <AlertTriangle className="w-5 h-5 text-red-800" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-red-950 font-serif">
                  What's the Issue?
                </h2>
                <span className="text-xs text-red-700 font-medium">
                  Detected Condition & Visual Symptoms
                </span>
              </div>
            </div>

            {/* Severity Tag */}
            <span
              className={`text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wide border ${
                result.diseaseInfo.severity === 'Critical' || result.diseaseInfo.severity === 'Severe'
                  ? 'bg-red-200/90 text-red-900 border-red-300'
                  : result.diseaseInfo.severity === 'Moderate'
                  ? 'bg-amber-100 text-amber-900 border-amber-300'
                  : 'bg-emerald-100 text-emerald-900 border-emerald-300'
              }`}
            >
              Severity: {result.diseaseInfo.severity}
            </span>
          </div>

          {/* Condition Name Banner */}
          <div className="bg-white/80 backdrop-blur-xs p-4 rounded-2xl border border-red-200/70 mb-4">
            <div className="text-xs font-semibold uppercase text-red-700 tracking-wider">
              Diagnosed Pathogen / Disorder
            </div>
            <div className="text-base sm:text-lg font-bold text-red-950 mt-0.5">
              {result.diseaseInfo.name}
            </div>
            {result.diseaseInfo.pathogen && result.diseaseInfo.pathogen !== 'None' && (
              <div className="text-xs italic text-red-800 font-serif mt-0.5">
                Pathogen: {result.diseaseInfo.pathogen} ({result.diseaseInfo.category})
              </div>
            )}
          </div>

          {/* Specific Symptoms Observed */}
          <div className="space-y-2 mb-4">
            <div className="text-xs font-bold uppercase tracking-wider text-red-800 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5" />
              Observable Symptoms
            </div>
            <ul className="space-y-1.5">
              {result.diseaseInfo.symptoms.map((symptom, i) => (
                <li
                  key={i}
                  className="text-xs sm:text-sm text-red-950/90 flex items-start gap-2 bg-white/50 p-2 rounded-xl border border-red-200/50"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 shrink-0" />
                  <span className="leading-relaxed">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Root Cause / Transmission */}
          <div className="bg-red-100/60 p-3.5 rounded-2xl border border-red-200/80 text-xs sm:text-sm text-red-900 leading-relaxed">
            <strong className="text-red-950 font-semibold">{t.rootCauseTitle}: </strong>
            {result.diseaseInfo.cause}
          </div>
        </div>
        )}

        {/* ========================================================= */}
        {/* TREATMENT TAB */}
        {/* ========================================================= */}
        {activeSection === 'treatment' && (
          <div className="space-y-6">
            <div
              id="cure-treatment-card"
              className="bg-emerald-50/75 border border-emerald-200/90 rounded-3xl p-6 sm:p-7 text-emerald-950 shadow-xs relative overflow-hidden transition-all hover:border-emerald-300"
            >
          {/* Subtle watermarked leaf background icon */}
          <Sprout className="absolute -bottom-4 -right-4 w-32 h-32 text-emerald-300/20 pointer-events-none" />

          <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-200/80 text-emerald-900 flex items-center justify-center shadow-xs">
                <HeartHandshake className="w-5 h-5 text-emerald-800" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-emerald-950 font-serif">
                  {t.actionPlanTitle}
                </h2>
                <span className="text-xs text-emerald-700 font-medium">
                  {t.actionPlanSub}
                </span>
              </div>
            </div>

            <span className="text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wide bg-emerald-200/90 text-emerald-900 border border-emerald-300">
              Active Protocol
            </span>
          </div>

          {/* Immediate Emergency Actions */}
          <div className="mb-4">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2 flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />
              Step 1: Immediate Emergency Sanitation
            </div>
            <div className="space-y-1.5">
              {result.treatment.immediateActions.map((action, i) => (
                <div
                  key={i}
                  className="bg-white/80 p-2.5 rounded-xl border border-emerald-200/70 text-xs sm:text-sm text-emerald-950 flex items-start gap-2"
                >
                  <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{action}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Organic & Biological Cures */}
          <div className="mb-4">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
              🌿 {t.organicTitle}
            </div>
            <ul className="space-y-1.5">
              {result.treatment.organicCures.map((cure, i) => (
                <li
                  key={i}
                  className="text-xs sm:text-sm text-emerald-950/90 flex items-start gap-2 bg-white/60 p-2 rounded-xl border border-emerald-200/60"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 shrink-0" />
                  <span className="leading-relaxed">{cure}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Targeted Conventional Options (if any) */}
          {result.treatment.chemicalOptions && result.treatment.chemicalOptions.length > 0 && (
            <div className="mb-4">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1.5">
                🧪 Targeted Horticultural Options
              </div>
              <ul className="space-y-1">
                {result.treatment.chemicalOptions.map((opt, i) => (
                  <li key={i} className="text-xs text-emerald-900 flex items-start gap-1.5">
                    <ArrowRight className="w-3 h-3 text-emerald-600 mt-0.5 shrink-0" />
                    <span>{opt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Watering & Care during Recovery */}
          <div className="bg-emerald-100/70 p-3.5 rounded-2xl border border-emerald-200/80 text-xs sm:text-sm text-emerald-900 leading-relaxed">
            <strong className="text-emerald-950 font-semibold">Irrigation & Micro-climate: </strong>
            {result.treatment.wateringAndCare}
          </div>
        </div>

        {/* Prevention & Cultural Management Card */}
        {result.prevention && result.prevention.length > 0 && (
          <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-6 sm:p-7">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
                <Layers className="w-4 h-4 text-amber-700" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 font-serif">
                  {t.preventionTitle}
                </h3>
                <p className="text-xs text-slate-500">
                  {t.preventionSub}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {result.prevention.map((tip, i) => (
                <div
                  key={i}
                  className="bg-white p-3.5 rounded-2xl border border-slate-200/80 text-xs sm:text-sm text-slate-700 flex items-start gap-2.5 shadow-2xs"
                >
                  <div className="w-5 h-5 rounded-full bg-slate-100 text-slate-600 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <span className="leading-relaxed">{tip}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
      )}

      {/* ========================================================= */}
      {/* CARE GUIDE TAB */}
      {/* ========================================================= */}
      {activeSection === 'care' && (
        <div className="space-y-6">
          {/* Complete Botanical Care Profile (For gardeners and plant parents) */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="w-8 h-8 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
            <Sprout className="w-4 h-4 text-teal-700" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 font-serif">
              {t.careTitle}
            </h3>
            <p className="text-xs text-slate-500">
              {result.plantName} ({result.botanicalName})
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
            <div className="flex items-center gap-2 text-amber-600 text-xs font-bold uppercase tracking-wider mb-1">
              <Sun className="w-4 h-4" />
              {t.sunlight}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {result.botanicalCareGuide.sunlight}
            </p>
          </div>

          <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
            <div className="flex items-center gap-2 text-sky-600 text-xs font-bold uppercase tracking-wider mb-1">
              <Droplets className="w-4 h-4" />
              {t.water}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {result.botanicalCareGuide.watering}
            </p>
          </div>

          <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
            <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-1">
              <Layers className="w-4 h-4" />
              {t.soil}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {result.botanicalCareGuide.soilType}
            </p>
          </div>

          <div className="bg-slate-50/80 p-4 rounded-2xl border border-slate-200/80">
            <div className="flex items-center gap-2 text-purple-600 text-xs font-bold uppercase tracking-wider mb-1">
              <Info className="w-4 h-4" />
              {t.toxicity}
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {result.botanicalCareGuide.toxicity}
            </p>
          </div>
        </div>

        {/* Fun Fact */}
        {result.botanicalCareGuide.funFact && (
          <div className="mt-4 p-3.5 bg-teal-50/60 rounded-2xl border border-teal-200/70 text-xs sm:text-sm text-teal-950 flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold">{t.botanicalNote}: </strong>
              <span>{result.botanicalCareGuide.funFact}</span>
            </div>
          </div>
        )}
      </div>
      </div>
      )}

      {/* ========================================================= */}
      {/* CHAT & DEEP RESEARCH TAB */}
      {/* ========================================================= */}
      {activeSection === 'chat' && (
        <div className="space-y-6">
          {/* Deep Research Phyto-Pathology Notes (Collapsible) */}
          {result.deepResearchNotes && (
            <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 sm:p-7 border border-slate-800 shadow-md">
              <button
                onClick={() => setShowDeepNotes(!showDeepNotes)}
            className="w-full flex items-center justify-between text-left cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <div>
                <h3 className="text-base font-bold text-white font-serif">
                  {t.deepResearchTitle}
                </h3>
                <span className="text-xs text-slate-400">
                  {t.deepResearchSub}
                </span>
              </div>
            </div>
            {showDeepNotes ? (
              <ChevronUp className="w-5 h-5 text-slate-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-slate-400" />
            )}
          </button>

          {showDeepNotes && (
            <div className="mt-4 pt-4 border-t border-slate-800">
              <p className="text-xs sm:text-sm text-slate-300 font-mono leading-relaxed bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                {result.deepResearchNotes}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Interactive AI Agronomist Follow-Up Q&A */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xs print:hidden">
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-emerald-700" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 font-serif">
              {t.askAiTitle}
            </h3>
            <p className="text-xs text-slate-500">
              {t.askAiSub}
            </p>
          </div>
        </div>

        {/* Existing Chat Stream */}
        {chatLog.length > 0 && (
          <div className="space-y-3 mb-4 max-h-60 overflow-y-auto pr-1">
            {chatLog.map((entry, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-end">
                  <div className="bg-slate-100 text-slate-800 text-xs sm:text-sm px-3.5 py-2 rounded-2xl rounded-tr-xs max-w-[80%]">
                    {entry.q}
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-emerald-50 text-emerald-950 text-xs sm:text-sm px-4 py-2.5 rounded-2xl rounded-tl-xs border border-emerald-200/80 max-w-[90%] leading-relaxed">
                    <div className="font-semibold text-emerald-800 text-[11px] mb-1 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Flora Pulse AI
                    </div>
                    {entry.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <form onSubmit={handleAskQuestion} className="flex gap-2">
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={t.askPlaceholder}
            className="flex-1 px-4 py-2.5 rounded-2xl border border-slate-300 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50/50"
          />
          <button
            type="submit"
            disabled={isAsking || !question.trim()}
            className="px-5 py-2.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs sm:text-sm font-semibold shadow-xs transition-all cursor-pointer"
          >
            {isAsking ? '...' : t.askBtn}
          </button>
        </form>

        {/* Suggested Quick Inquiries */}
        <div className="flex flex-wrap items-center gap-1.5 mt-3">
          <span className="text-[11px] text-slate-400 font-medium">Quick asks:</span>
          {['How often should I water it?', 'Is it safe for pets?', 'What soil mix is best?', 'How to prune safely?'].map(
            (preset, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setQuestion(preset)}
                className="text-[11px] px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
              >
                {preset}
              </button>
            )
          )}
        </div>
      </div>
      </div>
      )}
      </div>
    </div>
  );
};
