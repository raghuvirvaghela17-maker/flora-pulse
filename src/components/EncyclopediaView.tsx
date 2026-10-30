import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  AlertTriangle,
  HeartHandshake,
  Sprout,
  Filter,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Info,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';
import { PLANT_DISEASES } from '../data/plantDiseases';
import { PlantDiseaseEncyclopediaItem } from '../types';

interface EncyclopediaViewProps {
  onSelectForScanner?: (diseaseName: string) => void;
}

export const EncyclopediaView: React.FC<EncyclopediaViewProps> = ({ onSelectForScanner }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedDiseaseId, setExpandedDiseaseId] = useState<string | null>('early-blight');

  const categories = ['All', 'Fungal', 'Bacterial', 'Viral', 'Pest Damage', 'Nutrient Deficiency'];

  const filteredDiseases = useMemo(() => {
    return PLANT_DISEASES.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch =
        item.name.toLowerCase().includes(q) ||
        item.pathogen.toLowerCase().includes(q) ||
        item.affectedPlants.some((p) => p.toLowerCase().includes(q)) ||
        item.symptoms.some((s) => s.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn pb-12">
      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-4 h-4 text-amber-700" />
          Phyto-Pathology Knowledge Base • 35+ Crop & Plant Afflictions
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
          Comprehensive Plant Disease & Symptoms Atlas
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Explore botanical diseases across vegetables, fruits, crops, and houseplants. View the
          issue breakdown in subtle light red and actionable biological cures in subtle green.
        </p>
      </div>

      {/* Search and Category Filter Toolbar */}
      <div className="bg-white rounded-3xl border border-slate-200 p-4 sm:p-6 shadow-sm space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by plant (e.g. Tomato, Rose, Citrus), disease, or symptom (e.g. yellow halo, powdery, mosaic)..."
            className="w-full pl-12 pr-4 py-3 rounded-2xl border border-slate-300 text-sm focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-slate-50/50"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-100">
          <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5 mr-1">
            <Filter className="w-3.5 h-3.5" />
            Filter Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="text-xs text-slate-400 ml-auto font-mono">
            {filteredDiseases.length} condition{filteredDiseases.length !== 1 ? 's' : ''} listed
          </span>
        </div>
      </div>

      {/* Disease List */}
      <div className="space-y-4">
        {filteredDiseases.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center">
            <ShieldAlert className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 font-serif">No diseases found</h3>
            <p className="text-sm text-slate-500 mt-1">
              No results matching "{searchQuery}". Try searching for Tomato, Blight, Mildew, or Rust.
            </p>
          </div>
        ) : (
          filteredDiseases.map((item) => {
            const isExpanded = expandedDiseaseId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-xs overflow-hidden transition-all"
              >
                {/* Accordion Header */}
                <div
                  onClick={() => setExpandedDiseaseId(isExpanded ? null : item.id)}
                  className="p-5 sm:p-6 flex items-start sm:items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60 transition-colors select-none"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span
                        className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-md ${
                          item.category === 'Fungal'
                            ? 'bg-amber-100 text-amber-900 border border-amber-200'
                            : item.category === 'Bacterial'
                            ? 'bg-purple-100 text-purple-900 border border-purple-200'
                            : item.category === 'Viral'
                            ? 'bg-sky-100 text-sky-900 border border-sky-200'
                            : item.category === 'Pest Damage'
                            ? 'bg-red-100 text-red-900 border border-red-200'
                            : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
                        }`}
                      >
                        {item.category}
                      </span>

                      <span
                        className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-md ${
                          item.severity === 'Critical' || item.severity === 'Severe'
                            ? 'bg-red-100 text-red-900'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        Severity: {item.severity}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
                        {item.name}
                      </h3>
                      <span className="text-xs italic text-slate-500 font-serif">
                        ({item.pathogen})
                      </span>
                    </div>

                    {/* Host Plants Tags */}
                    <div className="flex flex-wrap items-center gap-1.5 mt-2">
                      <span className="text-[11px] text-slate-400 font-medium">Hosts:</span>
                      {item.affectedPlants.map((plant, pIdx) => (
                        <span
                          key={pIdx}
                          className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-lg"
                        >
                          {plant}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs text-emerald-700 font-semibold hidden sm:inline">
                      {isExpanded ? 'Collapse' : 'View Cures & Details'}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details with Mandatory Subtle Colors */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 space-y-6">
                    {/* The Two Primary Cards: Subtle Red Issue & Subtle Green Cure */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
                      {/* ========================================================= */}
                      {/* WHAT'S THE ISSUE: SUBTLE LIGHT RED BACKGROUND             */}
                      {/* ========================================================= */}
                      <div className="bg-red-50/80 border border-red-200/90 rounded-2xl p-5 text-red-950 shadow-2xs">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-800 mb-2">
                          <AlertTriangle className="w-4 h-4 text-red-700" />
                          What's The Issue & Symptoms
                        </div>
                        <p className="text-xs sm:text-sm text-red-900 leading-relaxed mb-3">
                          {item.issueDescription}
                        </p>

                        <div className="text-xs font-semibold text-red-900 mb-1.5">
                          Visual Symptoms to Check:
                        </div>
                        <ul className="space-y-1.5">
                          {item.symptoms.map((s, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-red-950/90 flex items-start gap-1.5 bg-white/60 p-2 rounded-xl border border-red-200/50"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0" />
                              <span>{s}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-3 pt-2 border-t border-red-200/60 text-xs text-red-900">
                          <strong>Causes & Weather Vector: </strong>
                          {item.causesAndSpread}
                        </div>
                      </div>

                      {/* ========================================================= */}
                      {/* HOW TO CURE IT: SUBTLE GREENISH BACKGROUND                */}
                      {/* ========================================================= */}
                      <div className="bg-emerald-50/80 border border-emerald-200/90 rounded-2xl p-5 text-emerald-950 shadow-2xs">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2">
                          <HeartHandshake className="w-4 h-4 text-emerald-700" />
                          How to Cure It & Biological Treatments
                        </div>

                        {/* Emergency Sanitation */}
                        <div className="bg-white/80 p-3 rounded-xl border border-emerald-200/70 text-xs text-emerald-950 mb-3">
                          <strong className="text-emerald-900 font-semibold block mb-0.5">
                            🚨 Emergency Action:
                          </strong>
                          {item.curesAndTreatment.emergencyAction}
                        </div>

                        {/* Organic Treatments */}
                        <div className="text-xs font-semibold text-emerald-900 mb-1.5">
                          🌿 Organic & Biological Cures:
                        </div>
                        <ul className="space-y-1.5 mb-3">
                          {item.curesAndTreatment.organic.map((org, idx) => (
                            <li
                              key={idx}
                              className="text-xs text-emerald-950/90 flex items-start gap-1.5 bg-white/60 p-2 rounded-xl border border-emerald-200/60"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                              <span>{org}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Chemical Alternatives */}
                        {item.curesAndTreatment.chemical.length > 0 && (
                          <div>
                            <div className="text-xs font-semibold text-emerald-900 mb-1">
                              🧪 Targeted Horticultural Options:
                            </div>
                            <ul className="space-y-1">
                              {item.curesAndTreatment.chemical.map((chem, idx) => (
                                <li key={idx} className="text-xs text-emerald-900 flex items-center gap-1.5">
                                  <ArrowRight className="w-3 h-3 text-emerald-600 shrink-0" />
                                  <span>{chem}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Prevention Tips */}
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                        <Sprout className="w-3.5 h-3.5 text-emerald-600" />
                        Preventative Agronomy Tips:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {item.preventionTips.map((tip, idx) => (
                          <div
                            key={idx}
                            className="bg-white p-2.5 rounded-xl border border-slate-200/70 text-xs text-slate-700"
                          >
                            • {tip}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
