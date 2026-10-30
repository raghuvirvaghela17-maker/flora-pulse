import React, { useState, useRef } from 'react';
import {
  Sparkles,
  Search,
  CheckCircle2,
  Zap,
  Camera,
  HeartHandshake,
  Sprout,
  AlertTriangle,
  Upload
} from 'lucide-react';
import { ActiveTab, Language } from '../types';
import { SAMPLE_PLANTS } from '../data/samplePlants';

interface HomeViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  onSelectSample: (sampleId: string) => void;
  onDirectScanImage?: (image: string, mode: 'disease_detection' | 'healthy_identification') => void;
  language: Language;
}

const HOME_T = {
  en: {
    badge: "AI Plant Pathology",
    title1: "Detect plant diseases",
    title2: "in seconds",
    title3: ", not days.",
    subtitle: "Flora Pulse AI turns your phone camera into a plant doctor. Upload a photo and get an instant, expert-level diagnosis with treatment you can act on.",
    scanBtn: "Scan a Plant Now",
    historyBtn: "View History",
    stat1: "diseases",
    stat2: "deep research",
    stat3: "Free",
    stat3b: "to try",
    whyTitle: "Why Flora Pulse AI",
    whySub: "Everything you need to keep your plants healthy, powered by cutting-edge AI.",
    feature1Title: "Accurate & Researched",
    feature1Desc: "AI cross-references live web research across 100s of conditions — fungal, bacterial, viral, pest, and nutrient — for precise, trustworthy answers you can rely on.",
    feature2Title: "Instant Results",
    feature2Desc: "Get a full report — disease name, severity, symptoms, cause, treatment, and prevention — in one tap.",
    feature3Title: "Actionable Advice",
    feature3Desc: "Clear, practical treatment steps and prevention tips you can follow right away to save your plants.",
    instantTitle: "Instant Health Check",
    instantSub: "Upload a photo to detect diseases or verify a healthy plant.",
    dropText: "Drop leaf photo to analyze instantly",
    uploadBtn: "Upload Photo Now",
    uploadHelp: "Supports JPEG, PNG • Under 10MB",
    sampleTitle: "No plant photo right now?",
    sampleSub: "Try 1-Click Test Samples to see dual-color diagnosis reports",
    sampleDiseased: "Diseased Issue",
    sampleHealthy: "Healthy & Clean",
    samples: {
      'sample-early-blight': { title: 'Tomato Early Blight', desc: 'Concentric dark target-board rings on leaves with bright chlorotic yellow halos.' },
      'sample-powdery-mildew': { title: 'Zucchini Powdery Mildew', desc: 'White talcum powder-like fungal bloom spreading across leaf lamina and petioles.' },
      'sample-healthy-monstera': { title: 'Healthy Monstera Deliciosa', desc: 'Vibrant emerald leaves, perfect fenestrations, and firm glossy cell cuticles.' },
      'sample-healthy-snake-plant': { title: 'Healthy Snake Plant (Sansevieria)', desc: 'Upright architectural sword-like leaves with vivid variegation and firm fibrous structure.' },
      'sample-citrus-canker': { title: 'Lemon Citrus Canker', desc: 'Raised corky crater-like pustules with oily margins and bright yellow halos.' },
    }
  },
  hi: {
    badge: "AI प्लांट पैथोलॉजी",
    title1: "पौधों की बीमारियों का पता",
    title2: "सेकंडों में लगाएं",
    title3: ", दिनों में नहीं।",
    subtitle: "फ्लोरा पल्स AI आपके फोन कैमरे को एक प्लांट डॉक्टर में बदल देता है। एक फोटो अपलोड करें और तुरंत सटीक निदान और उपचार के उपाय पाएं।",
    scanBtn: "अभी पौधा स्कैन करें",
    historyBtn: "इतिहास देखें",
    stat1: "बीमारियां",
    stat2: "गहन शोध",
    stat3: "मुफ्त",
    stat3b: "उपयोग करें",
    whyTitle: "फ्लोरा पल्स AI क्यों",
    whySub: "आपके पौधों को स्वस्थ रखने के लिए आवश्यक सब कुछ, अत्याधुनिक AI द्वारा संचालित।",
    feature1Title: "सटीक और शोध-आधारित",
    feature1Desc: "AI सैकड़ों स्थितियों के पार लाइव वेब शोध का संदर्भ लेता है — सटीक और भरोसेमंद उत्तरों के लिए।",
    feature2Title: "त्वरित परिणाम",
    feature2Desc: "एक टैप में पूरी रिपोर्ट पाएं — बीमारी का नाम, गंभीरता, लक्षण, कारण, उपचार और रोकथाम।",
    feature3Title: "कारगर सलाह",
    feature3Desc: "स्पष्ट, व्यावहारिक उपचार कदम और रोकथाम युक्तियाँ जिन्हें आप तुरंत लागू कर सकते हैं।",
    instantTitle: "त्वरित स्वास्थ्य जांच",
    instantSub: "बीमारियों का पता लगाने या स्वस्थ पौधे की जांच के लिए एक फोटो अपलोड करें।",
    dropText: "तुरंत विश्लेषण के लिए पत्ते की फोटो यहाँ छोड़ें",
    uploadBtn: "अभी फोटो अपलोड करें",
    uploadHelp: "JPEG, PNG समर्थित • 10MB से कम",
    sampleTitle: "अभी पौधे की फोटो नहीं है?",
    sampleSub: "दोहरे रंग की निदान रिपोर्ट देखने के लिए 1-क्लिक टेस्ट नमूने आज़माएं",
    sampleDiseased: "बीमारी की समस्या",
    sampleHealthy: "स्वस्थ और साफ",
    samples: {
      'sample-early-blight': { title: 'टमाटर अर्ली ब्लाइट', desc: 'पत्तियों पर पीले घेरे के साथ गोल गहरे धब्बे।' },
      'sample-powdery-mildew': { title: 'तोरई पाउडरी मिल्ड्यू', desc: 'पत्तियों और तनों पर सफेद पाउडर जैसा फंगल संक्रमण।' },
      'sample-healthy-monstera': { title: 'स्वस्थ मोंस्टेरा', desc: 'जीवंत पन्ना रंग की पत्तियां, उत्तम कटाव और चमकदार सतह।' },
      'sample-healthy-snake-plant': { title: 'स्वस्थ स्नेक प्लांट', desc: 'सीधी तलवार जैसी पत्तियां, स्पष्ट रंग और मजबूत बनावट।' },
      'sample-citrus-canker': { title: 'नींबू सिट्रस कैंकर', desc: 'चमकीले पीले घेरे वाले उभरे हुए खुरदरे धब्बे।' },
    }
  },
  gu: {
    badge: "AI પ્લાન્ટ પેથોલોજી",
    title1: "છોડના રોગોને શોધો",
    title2: "સેકન્ડોમાં",
    title3: ", દિવસોમાં નહીં.",
    subtitle: "ફ્લોરા પલ્સ AI તમારા ફોનના કેમેરાને પ્લાન્ટ ડોક્ટરમાં ફેરવે છે. ફોટો અપલોડ કરો અને ત્વરિત, સચોટ નિદાન અને સારવારના ઉપાયો મેળવો.",
    scanBtn: "હવે છોડ સ્કેન કરો",
    historyBtn: "ઇતિહાસ જુઓ",
    stat1: "રોગો",
    stat2: "ડીપ રિસર્ચ",
    stat3: "મફત",
    stat3b: "ઉપયોગ કરો",
    whyTitle: "ફ્લોરા પલ્સ AI શા માટે",
    whySub: "તમારા છોડને સ્વસ્થ રાખવા માટે જરૂરી બધું, અત્યાધુનિક AI દ્વારા સંચાલિત.",
    feature1Title: "સચોટ અને સંશોધન-આધારિત",
    feature1Desc: "AI સેંકડો પરિસ્થિતિઓ પર લાઇવ વેબ સંશોધનનો સંદર્ભ લે છે — સચોટ અને વિશ્વસનીય જવાબો માટે.",
    feature2Title: "ત્વરિત પરિણામો",
    feature2Desc: "એક ટેપમાં સંપૂર્ણ રિપોર્ટ મેળવો — રોગનું નામ, ગંભીરતા, લક્ષણો, કારણ, સારવાર અને નિવારણ.",
    feature3Title: "અસરકારક સલાહ",
    feature3Desc: "સ્પષ્ટ, વ્યવહારુ સારવાર પગલાં અને નિવારણ ટિપ્સ જે તમે તરત જ લાગુ કરી શકો છો.",
    instantTitle: "ત્વરિત આરોગ્ય તપાસ",
    instantSub: "રોગો શોધવા અથવા તંદુરસ્ત છોડ ચકાસવા માટે ફોટો અપલોડ કરો.",
    dropText: "તરત જ વિશ્લેષણ કરવા માટે પાંદડાનો ફોટો અહીં મૂકો",
    uploadBtn: "હવે ફોટો અપલોડ કરો",
    uploadHelp: "JPEG, PNG સપોર્ટેડ • 10MB થી ઓછું",
    sampleTitle: "અત્યારે છોડનો ફોટો નથી?",
    sampleSub: "બે રંગના નિદાન અહેવાલો જોવા માટે 1-ક્લિક ટેસ્ટ નમૂનાઓ અજમાવો",
    sampleDiseased: "રોગની સમસ્યા",
    sampleHealthy: "સ્વસ્થ અને સ્વચ્છ",
    samples: {
      'sample-early-blight': { title: 'ટામેટાં અર્લી બ્લાઇટ', desc: 'પાંદડા પર પીળા કુંડાળા સાથે ગોળ ઘેરા ડાઘ.' },
      'sample-powdery-mildew': { title: 'તુરીયા પાઉડરી માઇલ્ડ્યુ', desc: 'પાંદડા અને ડાળીઓ પર સફેદ પાઉડર જેવું ફંગલ ઇન્ફેક્શન.' },
      'sample-healthy-monstera': { title: 'સ્વસ્થ મોન્સ્ટેરા', desc: 'આકર્ષક લીલા પાંદડા, સુંદર કાપ અને ચમકદાર સપાટી.' },
      'sample-healthy-snake-plant': { title: 'સ્વસ્થ સ્નેક પ્લાન્ટ', desc: 'સીધા તલવાર જેવા પાંદડા, સ્પષ્ટ રંગ અને મજબૂત રચના.' },
      'sample-citrus-canker': { title: 'લીંબુ સાઇટ્રસ કેન્કર', desc: 'તેજસ્વી પીળા કુંડાળાવાળા ઉપસેલા ખરબચડા ડાઘ.' },
    }
  }
};

export const HomeView: React.FC<HomeViewProps> = ({ setActiveTab, onSelectSample, onDirectScanImage, language }) => {
  const [dragOver, setDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const t = HOME_T[language];

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      if (onDirectScanImage) {
        onDirectScanImage(dataUrl, 'disease_detection');
      } else {
        setActiveTab('diagnose');
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="animate-fadeIn pb-16 space-y-16">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200/50">
              <Sprout className="w-3.5 h-3.5 text-emerald-600" />
              {t.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-serif tracking-tight leading-[1.15]">
              {t.title1} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400">
                {t.title2}
              </span>
              {t.title3}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-lg font-medium">
              {t.subtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setActiveTab('diagnose')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:-translate-y-0.5 transition-all text-base cursor-pointer"
              >
                {t.scanBtn}
                <Camera className="w-5 h-5" />
              </button>
              <button
                onClick={() => setActiveTab('encyclopedia')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-slate-200 text-slate-700 font-bold hover:bg-slate-50 transition-all text-base cursor-pointer hover:border-slate-300"
              >
                {t.historyBtn}
              </button>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-medium">
              <div>
                <span className="font-bold text-slate-900 text-xl block sm:inline">100s+</span> {t.stat1}
              </div>
              <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
              <div>
                <span className="font-bold text-slate-900 text-xl block sm:inline">15s</span> {t.stat2}
              </div>
              <div className="w-px h-10 bg-slate-200 hidden sm:block"></div>
              <div>
                <span className="font-bold text-slate-900 text-xl block sm:inline">{t.stat3}</span> {t.stat3b}
              </div>
            </div>
          </div>

          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white bg-slate-100 group">
            <img
              src="/hero-minimal.jpg"
              alt="Minimalist Botanical Specimen"
              referrerPolicy="no-referrer"
              className="w-full h-96 lg:h-[36rem] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-slate-200/50 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping absolute" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 relative" />
              <span className="text-sm font-bold text-slate-800">
                Live Analysis Active
              </span>
            </div>
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-slate-200/50 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span className="text-sm font-bold text-slate-800">
                Perfect Health Score
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Flora Pulse AI */}
      <section className="py-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            {t.whyTitle}
          </h2>
          <p className="mt-4 text-lg text-slate-600 font-medium">
            {t.whySub}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Search className="w-7 h-7 text-emerald-700" />
            </div>
            <h3 className="font-serif font-bold text-xl text-slate-900 mb-3">
              {t.feature1Title}
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              {t.feature1Desc}
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-7 h-7 text-emerald-700" />
            </div>
            <h3 className="font-serif font-bold text-xl text-slate-900 mb-3">
              {t.feature2Title}
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              {t.feature2Desc}
            </p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <HeartHandshake className="w-7 h-7 text-emerald-700" />
            </div>
            <h3 className="font-serif font-bold text-xl text-slate-900 mb-3">
              {t.feature3Title}
            </h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              {t.feature3Desc}
            </p>
          </div>
        </div>
      </section>

      {/* Lightning-Fast Instant Scanner */}
      <section>
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={handleDrop}
          className={`relative overflow-hidden rounded-[2rem] border-2 border-dashed transition-all duration-300 ${
            dragOver
              ? 'border-emerald-500 bg-emerald-50/50 scale-[1.01] shadow-xl'
              : 'border-slate-300 bg-white hover:border-emerald-300 hover:shadow-md'
          }`}
        >
          {dragOver && (
            <div className="absolute inset-0 bg-emerald-500/10 z-10 flex items-center justify-center backdrop-blur-xs">
              <p className="text-emerald-700 font-bold text-2xl font-serif">
                {t.dropText}
              </p>
            </div>
          )}
          
          <div className="p-12 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center shadow-inner">
              <Upload className="w-10 h-10 text-emerald-600" />
            </div>
            
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 font-serif">
                {t.instantTitle}
              </h2>
              <p className="text-slate-500 mt-2 font-medium">
                {t.instantSub}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                ref={fileInputRef}
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleFile(e.target.files[0]);
                  }
                }}
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                <Camera className="w-5 h-5" />
                {t.uploadBtn}
              </button>
            </div>
            <p className="text-xs text-slate-400">
              {t.uploadHelp}
            </p>
          </div>
        </div>
      </section>

      {/* Easy Test Samples Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-indigo-700" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 font-serif">
              {t.sampleTitle}
            </h2>
            <p className="text-sm text-slate-500 font-medium">
              {t.sampleSub}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SAMPLE_PLANTS.map((sample) => {
            const translatedSample = t.samples[sample.id as keyof typeof t.samples];
            return (
              <button
                key={sample.id}
                onClick={() => onSelectSample(sample.id)}
                className="group text-left rounded-2xl overflow-hidden border border-slate-200 bg-white hover:border-indigo-300 hover:shadow-lg transition-all cursor-pointer relative"
              >
                <div className="h-32 sm:h-40 overflow-hidden relative">
                  <img
                    src={sample.image}
                    alt={translatedSample?.title || sample.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent" />
                  
                  {/* Visual Type Badge */}
                  <div className="absolute top-2 left-2 flex items-center gap-1 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full shadow-xs bg-white/90">
                    {sample.type === 'diseased' ? (
                      <>
                        <AlertTriangle className="w-3 h-3 text-red-600" />
                        <span className="text-red-700">{t.sampleDiseased}</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span className="text-emerald-700">{t.sampleHealthy}</span>
                      </>
                    )}
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                    {translatedSample?.title || sample.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {translatedSample?.desc || sample.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
};
