import { SamplePlant } from '../types';

export const SAMPLE_PLANTS: SamplePlant[] = [
  {
    id: 'sample-early-blight',
    title: 'Tomato Early Blight',
    plantName: 'Tomato (Solanum lycopersicum)',
    type: 'diseased',
    conditionName: 'Early Blight (Alternaria solani)',
    description: 'Concentric dark target-board rings on leaves with bright chlorotic yellow halos.',
    // High-resolution photorealistic specimen image
    image: '/sample-early-blight.jpg',
    defaultResult: {
      plantName: 'Tomato Plant (Roma / Garden Tomato)',
      botanicalName: 'Solanum lycopersicum',
      plantFamily: 'Solanaceae (Nightshade Family)',
      isHealthy: false,
      healthStatus: 'Diseased',
      confidence: 97.4,
      diseaseInfo: {
        name: 'Early Blight (Alternaria solani)',
        category: 'Fungal',
        severity: 'Moderate',
        symptoms: [
          'Concentric dark brown to black rings forming a distinctive "target board" pattern',
          'Chlorotic yellow halos encircling the necrotized tissue',
          'Progressive defoliation beginning on the lowest, oldest leaflets',
          'Stem lesions with dark leathery sunken contours',
        ],
        cause:
          'Fungal pathogen Alternaria solani stimulated by warm humid conditions (24°C-29°C), splashing rainwater, and dense unpruned foliage.',
        pathogen: 'Alternaria solani (Ellis & G. Martin)',
      },
      treatment: {
        summary:
          'Prune infected lower foliage immediately, mulch the soil surface to block spore splashback, and treat with organic copper octanoate or bio-fungicide.',
        organicCures: [
          'Liquid Copper Octanoate: Spray thoroughly every 7-10 days until new foliage emerges lesion-free',
          'Bio-fungicide containing Bacillus subtilis (Serenade Garden Disease Control)',
          'Cold-pressed Neem oil (0.5% v/v) mixed with potassium bicarbonate (1 tsp/gal) as preventative surfactant',
        ],
        chemicalOptions: [
          'Chlorothalonil (Daconil) protectant fungicide applied at first detection',
          'Mancozeb or Azoxystrobin applied alternatively to prevent fungal resistance',
        ],
        immediateActions: [
          'Snip off and bag all infected lower foliage with alcohol-sanitized pruning shears',
          'Do NOT compost infected leaves; dispose of in sealed landfill waste',
          'Lay down a 2-3 inch organic straw mulch blanket over the soil around the base of the plant',
        ],
        wateringAndCare:
          'Switch exclusively to morning ground-level drip irrigation. Keep leaves bone dry overnight.',
      },
      prevention: [
        'Practice a minimum 3-year crop rotation away from Solanaceae (tomatoes, peppers, potatoes, eggplants)',
        'Maintain 24-inch vine spacing and stake securely to promote convective airflow',
        'Choose certified disease-resistant varieties (labeled AB/EB resistant)',
      ],
      botanicalCareGuide: {
        sunlight: 'Full direct sunlight, 6 to 8+ hours daily',
        watering: 'Deep, consistent watering at soil base; 1-2 inches per week',
        soilType: 'Rich, well-draining loamy garden soil with ample compost (pH 6.2 - 6.8)',
        humidity: '40% - 60% relative humidity (avoid stagnant humidity)',
        toxicity: 'Green parts contain solanine; toxic to pets if eaten in large amounts',
        propagation: 'Seed germination or side-shoot sucker rooting in clean water',
        funFact: 'Tomatoes are native to the western Andes of South America and were cultivated by the Aztecs as early as 700 AD.',
      },
      deepResearchNotes:
        'Spectral chlorosis scan confirms destruction of chloroplast thylakoid membranes driven by alternariol toxins. Conidial germ tubes penetrated stomatal apertures. Trichoderma harzianum soil inoculation is advised to suppress overwintering chlamydospores.',
    },
  },
  {
    id: 'sample-powdery-mildew',
    title: 'Zucchini Powdery Mildew',
    plantName: 'Zucchini / Summer Squash (Cucurbita pepo)',
    type: 'diseased',
    conditionName: 'Powdery Mildew (Podosphaera xanthii)',
    description: 'White talcum powder-like fungal bloom spreading across leaf lamina and petioles.',
    image: '/sample-powdery-mildew.jpg',
    defaultResult: {
      plantName: 'Zucchini / Summer Squash',
      botanicalName: 'Cucurbita pepo',
      plantFamily: 'Cucurbitaceae (Gourd Family)',
      isHealthy: false,
      healthStatus: 'Diseased',
      confidence: 96.2,
      diseaseInfo: {
        name: 'Powdery Mildew (Podosphaera xanthii)',
        category: 'Fungal',
        severity: 'Moderate',
        symptoms: [
          'Circular powdery white fungal colonies on upper and lower leaf surfaces',
          'Curling and upward cupping of leaves with yellow chlorotic patches beneath',
          'Brittle, dry foliage that senesces prematurely under direct sunlight',
          'Reduced fruit yield and sunburned squash due to loss of leaf canopy cover',
        ],
        cause:
          'Superficial fungal hyphae tapping epidermal cells. Favored by high humidity at night combined with warm dry days (20°C-28°C) and shaded canopy interior.',
        pathogen: 'Podosphaera xanthii / Erysiphe cichoracearum',
      },
      treatment: {
        summary:
          'Spray with potassium bicarbonate or milk-water solution in sunlight, prune overcrowded interior leaves, and avoid high-nitrogen fertilizers.',
        organicCures: [
          'Potassium Bicarbonate: Mix 3 tablespoons per gallon of water with 1 teaspoon horticultural oil; spray both leaf sides thoroughly',
          'Milk Foliar Spray: 40% whole milk to 60% water, applied on sunny days (proteins produce antiseptic radicals under UV)',
          'Wettable sulfur or micronized sulfur dust applied early morning (avoid if temp > 32°C)',
        ],
        chemicalOptions: [
          'Myclobutanil (Immunox) systemic triazole fungicide',
          'Trifloxystrobin or Tebuconazole agricultural spray',
        ],
        immediateActions: [
          'Prune off the most heavily mildewed older leaves to open sunlight pathways into the plant center',
          'Wash tools with 70% isopropyl alcohol between plants',
        ],
        wateringAndCare: 'Water at the base early in the morning. Avoid overhead sprinklers.',
      },
      prevention: [
        'Plant in full sun locations receiving 8+ hours of direct light',
        'Space squash plants at least 3 feet apart for airflow',
        'Choose PMR (Powdery Mildew Resistant) certified seed varieties',
      ],
      botanicalCareGuide: {
        sunlight: 'Full direct sunlight (minimum 6-8 hours daily)',
        watering: 'Deep consistent irrigation; 1-2 inches per week',
        soilType: 'Loose, organic-rich soil with pH 6.0 to 6.8',
        humidity: '40% - 60% ideal',
        toxicity: 'Non-toxic to humans and common pets',
        propagation: 'Direct seed sowing after last spring frost',
        funFact: 'Male zucchini blossoms are gourmet delicacies and can be stuffed with ricotta cheese and lightly pan-fried!',
      },
      deepResearchNotes:
        'Epi-fluorescence simulation shows conidiophores actively releasing airborne catenate conidia. The fungus does not require free water to germinate, thriving on atmospheric vapor pressure deficits.',
    },
  },
  {
    id: 'sample-healthy-monstera',
    title: 'Healthy Monstera Deliciosa',
    plantName: 'Swiss Cheese Plant (Monstera deliciosa)',
    type: 'healthy',
    conditionName: 'Clean Bill of Health - 100% Robust',
    description: 'Vibrant emerald leaves, perfect fenestrations, and firm glossy cell cuticles.',
    image: '/sample-healthy-monstera.jpg',
    defaultResult: {
      plantName: 'Swiss Cheese Plant (Monstera Deliciosa)',
      botanicalName: 'Monstera deliciosa',
      plantFamily: 'Araceae (Aroid Family)',
      isHealthy: true,
      healthStatus: 'Healthy',
      confidence: 99.1,
      diseaseInfo: {
        name: 'Clean Bill of Health - Specimen Thriving',
        category: 'None',
        severity: 'None',
        symptoms: [
          'Vigorous, rich chlorophyll pigmentation with zero marginal chlorosis',
          'Symmetrical natural leaf fenestrations (perforations) with clean edges',
          'Optimal turgor pressure; no wilting, curling, or fungal spot colonization',
          'Intact glossy waxy cuticle providing natural pest barrier',
        ],
        cause: 'Optimal photosynthetic light conditions, balanced hydration, and nutrient equilibrium.',
        pathogen: 'None (Negative for fungal spores, bacterial spots, and spider mites)',
      },
      treatment: {
        summary:
          'No curative action required! Specimen exhibits peak physiological health and cellular vitality.',
        organicCures: [
          'Bi-weekly leaf cleaning: Wipe leaves with a damp microfiber cloth to remove domestic dust and maximize photosynthetic efficiency',
          'Organic maintenance feeding: Apply balanced organic seaweed or compost tea during spring and summer',
          'Incorporate beneficial mycorrhizal fungi at next repotting to sustain root network vigor',
        ],
        chemicalOptions: [
          'No chemical fungicides, pesticides, or treatments are needed or recommended for this healthy specimen',
        ],
        immediateActions: [
          'Maintain current lighting, temperature, and watering regimen',
          'Rotate plant 90 degrees every two weeks to encourage even, upright growth',
          'Provide a moss pole or coir totem as aerial roots develop for vertical climbing support',
        ],
        wateringAndCare:
          'Allow top 2-3 inches of substrate to dry out between thorough waterings. Always pour out excess water from the drainage saucer.',
      },
      prevention: [
        'Inspect leaf undersides once a month for early thrip or spider mite detection',
        'Keep indoor ambient humidity comfortably above 50%',
        'Maintain potting mix aeration by using chunky aroid soil blends',
      ],
      botanicalCareGuide: {
        sunlight: 'Medium to bright indirect sunlight (avoid scorching hot mid-day direct rays)',
        watering: 'Every 7-10 days in spring/summer; reduce in winter when top 50% of soil is dry',
        soilType: 'Chunky, airy aroid mix: 40% peat/coco, 30% orchid bark, 20% perlite, 10% worm castings (pH 5.5 - 6.5)',
        humidity: 'Thrives in 60%+ relative humidity; tolerates standard 40-50% room humidity',
        toxicity: 'Contains calcium oxalate crystals; mildly toxic to dogs and cats if chewed',
        propagation: 'Stem cuttings with at least one node and aerial root rooted in water or moist moss',
        funFact: 'In wild tropical rainforests of Mexico and Panama, Monstera can climb up trees to 65 feet tall with leaves spanning over 3 feet across!',
      },
      deepResearchNotes:
        'Spectral reflectance analysis displays peak 550nm green light scattering with minimal NIR absorption loss, confirming pristine leaf parenchymal tissue. Stomatal conductances are balanced and gas exchange is optimal.',
    },
  },
  {
    id: 'sample-healthy-snake-plant',
    title: 'Healthy Snake Plant (Sansevieria)',
    plantName: 'Snake Plant / Mother-in-Law’s Tongue',
    type: 'healthy',
    conditionName: 'Clean Bill of Health - Pristine Foliage',
    description: 'Upright architectural sword-like leaves with vivid variegation and firm fibrous structure.',
    image: '/sample-healthy-snake-plant.jpg',
    defaultResult: {
      plantName: 'Snake Plant (Dracaena trifasciata)',
      botanicalName: 'Dracaena trifasciata (syn. Sansevieria trifasciata)',
      plantFamily: 'Asparagaceae (Asparagus Family)',
      isHealthy: true,
      healthStatus: 'Healthy',
      confidence: 99.4,
      diseaseInfo: {
        name: 'Clean Bill of Health - Zero Disorders',
        category: 'None',
        severity: 'None',
        symptoms: [
          'Stout, erect sword-like leaves with crisp golden variegation margins',
          'Rigid fibrous cell structure; zero signs of fungal soft rot or mushy basal tissues',
          'Smooth epidermis free from scale insect armors or mealybug cotton',
        ],
        cause: 'Excellent CAM photosynthesis conditions and careful hydration discipline.',
        pathogen: 'None (Negative for Phytophthora root rot and leaf spots)',
      },
      treatment: {
        summary:
          'Specimen is in excellent physical condition. Continue low-intervention care protocol.',
        organicCures: [
          'Dust foliage occasionally with a dry or lightly damp cloth to keep stomata clear',
          'Feed lightly once in spring with a low-nitrogen organic cactus fertilizer',
        ],
        chemicalOptions: [
          'No chemical interventions required',
        ],
        immediateActions: [
          'Ensure the pot drain holes remain clear of mineral blockages',
          'Continue to allow the entire root ball to dry completely between waterings',
        ],
        wateringAndCare: 'Water sparingly every 2 to 4 weeks depending on season. When in doubt, underwater.',
      },
      prevention: [
        'Never allow water to sit pooled in the center rosette cup',
        'Use porous terracotta pots for rapid evaporative soil drying',
        'Protect from freezing temperatures below 10°C (50°F)',
      ],
      botanicalCareGuide: {
        sunlight: 'Highly adaptable: handles low indoor light to bright direct morning sun',
        watering: 'Every 2-4 weeks; allow potting soil to become 100% bone-dry before watering again',
        soilType: 'Gritty, fast-draining cactus and succulent mix with 50% perlite, pumice, or coarse sand',
        humidity: 'Tolerates low dry room humidity (30-50%)',
        toxicity: 'Contains saponins; mildly toxic to cats and dogs if ingested',
        propagation: 'Leaf cuttings rooted in water/perlite or rhizome division during repotting',
        funFact: 'Snake plants employ Crassulacean Acid Metabolism (CAM), opening their stomata at night to absorb carbon dioxide and release oxygen while you sleep!',
      },
      deepResearchNotes:
        'Cellular wall lignification is high, providing natural structural rigidity against physical stress and pathogen penetration. Rhizomatous storage organs possess rich carbohydrate reserves.',
    },
  },
  {
    id: 'sample-citrus-canker',
    title: 'Lemon Citrus Canker',
    plantName: 'Eureka Lemon (Citrus limon)',
    type: 'diseased',
    conditionName: 'Citrus Canker (Xanthomonas axonopodis)',
    description: 'Raised corky crater-like pustules with oily margins and bright yellow halos.',
    image:
      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%231e293b"/><path d="M300 370 Q 280 200 300 60" stroke="%2365a30d" stroke-width="8" fill="none"/><path d="M300 190 C 140 180 100 90 140 30 C 220 40 280 120 300 190 Z" fill="%234d7c0f"/><circle cx="210" cy="110" r="30" fill="%23facc15" opacity="0.9"/><circle cx="210" cy="110" r="18" fill="%2392400e"/><circle cx="210" cy="110" r="10" fill="%2378350f"/><circle cx="210" cy="110" r="4" fill="%23fef08a"/><circle cx="410" cy="150" r="36" fill="%23facc15" opacity="0.9"/><circle cx="410" cy="150" r="22" fill="%2392400e"/><circle cx="410" cy="150" r="12" fill="%2378350f"/><path d="M300 240 C 460 230 500 140 460 70 C 380 90 320 170 300 240 Z" fill="%233f6212"/><text x="300" y="370" font-family="sans-serif" font-size="16" font-weight="bold" fill="%23fef08a" text-anchor="middle">Specimen: Xanthomonas on Citrus limon</text></svg>',
    defaultResult: {
      plantName: 'Eureka Lemon Tree',
      botanicalName: 'Citrus limon',
      plantFamily: 'Rutaceae (Citrus Family)',
      isHealthy: false,
      healthStatus: 'Diseased',
      confidence: 98.2,
      diseaseInfo: {
        name: 'Citrus Canker (Xanthomonas axonopodis pv. citri)',
        category: 'Bacterial',
        severity: 'Severe',
        symptoms: [
          'Raised, corky, erupted blister lesions with spongy, crater-like centers',
          'Prominent, bright oily yellow halo encircling each individual canker lesion',
          'Premature fruit drop and twig tip dieback',
          'Rough, blemished fruit skin reducing edible quality',
        ],
        cause:
          'Bacterium Xanthomonas axonopodis pv. citri gaining entry through stomates and insect feeding wounds (such as citrus leafminer trails). Driven by wind-blown rainstorms.',
        pathogen: 'Xanthomonas axonopodis pv. citri',
      },
      treatment: {
        summary:
          'Apply preventative copper bactericide sprays timed with new growth flushes, prune cankered twigs during dry weather, and control leafminers.',
        organicCures: [
          'Liquid Copper Hydroxide or Cuprous Oxide bactericide applied at 10-14 day intervals during new leaf flush',
          'Control citrus leafminer larvae with organic Spinosad spray to prevent larval tunnels that serve as bacterial infection gates',
          'Biological bactericide containing Bacillus subtilis',
        ],
        chemicalOptions: [
          'Copper sulfate pentahydrate commercial citrus formulations',
          'Agricultural Streptomycin where approved by local horticultural authorities',
        ],
        immediateActions: [
          'Prune off and safely bag all cankered twigs 4-6 inches below the lesion during dry, sunny weather',
          'Sterilize pruning shears between every single cut with 70% alcohol or 10% bleach solution',
          'Do not transport infected citrus leaves or fruit beyond property boundaries',
        ],
        wateringAndCare: 'Use micro-sprinklers or ground drip irrigation. Never use overhead sprinklers that blast leaves.',
      },
      prevention: [
        'Establish windbreak hedges around citrus trees to suppress wind-blown rain speeds below 18 mph',
        'Sanitize garden equipment and ladders between tree maintenance',
        'Plant canker-tolerant citrus rootstocks and scions',
      ],
      botanicalCareGuide: {
        sunlight: 'Full direct sunlight (8-10 hours daily for optimal flowering and fruit)',
        watering: 'Deep watering once every 7-10 days; allow top 3 inches of soil to dry',
        soilType: 'Well-draining sandy loam with slightly acidic to neutral pH (6.0 - 7.0)',
        humidity: '50% - 70% relative humidity',
        toxicity: 'Essential citrus oils and psoralens can cause mild digestive upset in pets if ingested',
        propagation: 'T-bud grafting onto disease-resistant rootstock (e.g., Swingle or Carrizo)',
        funFact: 'A single mature lemon tree can produce between 500 and 600 pounds of fresh lemons every year under ideal sunny conditions!',
      },
      deepResearchNotes:
        'Pathogen produces pthA effector proteins that trigger host cell hypertrophy and hyperplasia, creating the characteristic eruptive corky pustules. Bacterial slime polysaccharides shield colonies against dry atmospheric conditions.',
    },
  },
];
