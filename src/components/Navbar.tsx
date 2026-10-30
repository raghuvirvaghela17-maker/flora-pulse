import React from 'react';
import { Leaf } from 'lucide-react';
import { Language } from '../types';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
}

const NAV_T = {
  en: { home: 'Home', diagnose: 'Disease Scan', healthy: 'Plant ID', history: 'History' },
  hi: { home: 'होम', diagnose: 'रोग स्कैन', healthy: 'पौधे की पहचान', history: 'इतिहास' },
  gu: { home: 'હોમ', diagnose: 'રોગ સ્કેન', healthy: 'છોડની ઓળખ', history: 'ઇતિહાસ' }
};

export function Navbar({ activeTab, setActiveTab, language, setLanguage }: NavbarProps) {
  const t = NAV_T[language];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => setActiveTab('home')}
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="font-serif font-bold text-lg text-slate-900 tracking-tight hidden sm:block">Flora Pulse <span className="text-emerald-700">AI</span></span>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="hidden md:flex items-center gap-4 sm:gap-6 mr-2">
              <button
                onClick={() => setActiveTab('home')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'home' ? 'text-emerald-700 font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.home}
              </button>
              <button
                onClick={() => setActiveTab('diagnose')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'diagnose' ? 'text-emerald-700 font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.diagnose}
              </button>
              <button
                onClick={() => setActiveTab('healthy')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'healthy' ? 'text-emerald-700 font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.healthy}
              </button>
              <button
                onClick={() => setActiveTab('encyclopedia')}
                className={`text-sm font-medium transition-colors ${
                  activeTab === 'encyclopedia' ? 'text-emerald-700 font-semibold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.history}
              </button>
            </div>

            {/* Language Capsule */}
            <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200 shadow-inner items-center">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  language === 'en' ? 'bg-white shadow-sm text-emerald-700' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('hi')}
                className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  language === 'hi' ? 'bg-white shadow-sm text-emerald-700' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                हिंदी
              </button>
              <button 
                onClick={() => setLanguage('gu')}
                className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  language === 'gu' ? 'bg-white shadow-sm text-emerald-700' : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                ગુજરાતી
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
