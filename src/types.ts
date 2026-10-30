export type ActiveTab = 'home' | 'diagnose' | 'healthy' | 'encyclopedia' | 'deep-lab';

export type Language = 'en' | 'hi' | 'gu';

export type DeviceMode = 'pc' | 'phone';

export interface DiseaseInfo {
  name: string;
  category: 'Fungal' | 'Bacterial' | 'Viral' | 'Pest Damage' | 'Nutrient Deficiency' | 'Physiological' | 'None';
  severity: 'None' | 'Low' | 'Moderate' | 'Severe' | 'Critical';
  symptoms: string[];
  cause: string;
  pathogen: string;
}

export interface TreatmentInfo {
  summary: string;
  organicCures: string[];
  chemicalOptions: string[];
  immediateActions: string[];
  wateringAndCare: string;
}

export interface BotanicalCareGuide {
  sunlight: string;
  watering: string;
  soilType: string;
  humidity: string;
  toxicity: string;
  propagation: string;
  funFact: string;
}

export interface PlantAnalysisResult {
  plantName: string;
  botanicalName: string;
  plantFamily: string;
  isHealthy: boolean;
  healthStatus: 'Healthy' | 'Diseased' | 'Pest Infestation' | 'Nutrient Deficiency';
  confidence: number;
  diseaseInfo: DiseaseInfo;
  treatment: TreatmentInfo;
  prevention: string[];
  botanicalCareGuide: BotanicalCareGuide;
  deepResearchNotes?: string;
  analyzedAt?: string;
  imagePreview?: string;
}

export interface PlantDiseaseEncyclopediaItem {
  id: string;
  name: string;
  pathogen: string;
  category: 'Fungal' | 'Bacterial' | 'Viral' | 'Pest Damage' | 'Nutrient Deficiency';
  severity: 'Low' | 'Moderate' | 'Severe' | 'Critical';
  affectedPlants: string[];
  symptoms: string[];
  issueDescription: string;
  causesAndSpread: string;
  curesAndTreatment: {
    organic: string[];
    chemical: string[];
    emergencyAction: string;
  };
  preventionTips: string[];
  sampleImageUrl?: string;
}

export interface SamplePlant {
  id: string;
  title: string;
  plantName: string;
  type: 'diseased' | 'healthy';
  conditionName: string;
  description: string;
  image: string;
  defaultResult: PlantAnalysisResult;
}
