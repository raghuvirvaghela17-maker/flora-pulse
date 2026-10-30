import { PlantDiseaseEncyclopediaItem } from '../types';

export const PLANT_DISEASES: PlantDiseaseEncyclopediaItem[] = [
  {
    id: 'early-blight',
    name: 'Early Blight',
    pathogen: 'Alternaria solani',
    category: 'Fungal',
    severity: 'Moderate',
    affectedPlants: ['Tomato', 'Potato', 'Eggplant', 'Bell Pepper'],
    symptoms: [
      'Brown to dark brown circular spots with characteristic concentric rings (target board pattern)',
      'Chlorotic bright yellow halo encircling dark spots',
      'Defoliation starting on lowest, oldest leaves progressing upward',
      'Dark, sunken leathery lesions on stems and fruit calyx',
    ],
    issueDescription:
      'Alternaria solani produces altenuene mycotoxins that breakdown chlorophyll membranes. Spores overwinter in infected debris and splash onto lower leaves during irrigation or rain.',
    causesAndSpread:
      'Warm wet weather (24°C-29°C / 75°F-85°F), prolonged leaf wetness over 8 hours, poor air circulation, overhead watering.',
    curesAndTreatment: {
      organic: [
        'Apply Liquid Copper Octanoate fungicide every 7-10 days',
        'Foliar spray with Bacillus subtilis bio-fungicide (Serenade ASO)',
        'Neem oil foliar spray (0.5% concentration) combined with potassium bicarbonate',
      ],
      chemical: [
        'Chlorothalonil (Daconil) protectant fungicide',
        'Mancozeb or Azoxystrobin applied alternatively to prevent resistance',
      ],
      emergencyAction:
        'Prune off all diseased lower leaves immediately with shears sanitized in 70% alcohol. Never compost infected leaves.',
    },
    preventionTips: [
      'Mulch soil bed with 2-3 inches of straw to block spore splashback',
      'Drip irrigate early in the morning so foliage never remains wet overnight',
      'Rotate crops on a 3-4 year cycle away from all Solanaceae family plants',
    ],
  },
  {
    id: 'late-blight',
    name: 'Late Blight',
    pathogen: 'Phytophthora infestans',
    category: 'Fungal',
    severity: 'Critical',
    affectedPlants: ['Potato', 'Tomato', 'Petunia'],
    symptoms: [
      'Large, irregular water-soaked pale-green to dark brown patches on foliage',
      'White cottony or downy mildew spore fuzz on leaf undersides in humid conditions',
      'Rapid collapse and blackening of entire vine in 24-48 hours',
      'Firm, dark greasy brown rot penetrating fruit and potato tubers',
    ],
    issueDescription:
      'An infamous, highly destructive oomycete water-mold responsible for the Irish Potato Famine. It can destroy whole crop fields within days under cool, damp conditions.',
    causesAndSpread:
      'Cool, foggy, wet weather (15°C-21°C / 60°F-70°F) with relative humidity above 90%. Windblown sporangia can travel miles.',
    curesAndTreatment: {
      organic: [
        'Fixed copper hydroxide applied thoroughly on top and bottom of foliage',
        'Bio-fungicide containing Bacillus amyloliquefaciens strain D747',
      ],
      chemical: [
        'Mandipropamid (Revus) or Cymoxanil (Curzate) systemic oomycide',
        'Mefenoxam or Chlorothalonil tank mix',
      ],
      emergencyAction:
        'Uproot and destroy heavily afflicted plants immediately in sealed plastic bags. Notify nearby growers.',
    },
    preventionTips: [
      'Plant certified blight-resistant tomato cultivars (e.g., Mountain Magic, Defiant, Iron Lady)',
      'Ensure 24-36 inch spacing for maximum sun exposure and wind flow',
      'Destroy all volunteer potatoes and cull piles before the planting season begins',
    ],
  },
  {
    id: 'powdery-mildew',
    name: 'Powdery Mildew',
    pathogen: 'Podosphaera & Erysiphe species',
    category: 'Fungal',
    severity: 'Moderate',
    affectedPlants: ['Cucumber', 'Zucchini', 'Squash', 'Rose', 'Grapevine', 'Apple', 'Phlox'],
    symptoms: [
      'White, talcum powder-like fungal patches on upper leaf surfaces and stems',
      'Curling, puckering, and upward cupping of young foliage',
      'Yellowing (chlorosis) under white patches followed by premature leaf drop',
      'Stunted shoots and reduced fruit sweetness due to impaired photosynthesis',
    ],
    issueDescription:
      'Superficial fungal mycelia tap into epidermal cells using haustoria to drain nutrients. Unlike most fungi, spores germinate even in dry weather if humidity is moderate.',
    causesAndSpread:
      'High relative humidity at night, warm dry sunny days (20°C-28°C), shade, poor air movement, and excessive nitrogen fertilizer.',
    curesAndTreatment: {
      organic: [
        'Potassium bicarbonate spray (3 tbsp per gallon water + 1 tsp horticultural oil)',
        'Milk-water foliar spray (40% whole milk, 60% water) activated by sunlight',
        'Sulfur dust or wettable sulfur spray (do not apply if temperature exceeds 32°C / 90°F)',
      ],
      chemical: [
        'Myclobutanil (Immunox) systemic fungicide',
        'Trifloxystrobin or Tebuconazole foliar treatment',
      ],
      emergencyAction:
        'Trim overcrowded interior canopy to allow sunlight penetration and spray foliage with bio-fungicide.',
    },
    preventionTips: [
      'Plant in locations receiving at least 6-8 hours of direct sunshine',
      'Avoid high-nitrogen fertilizers that generate soft, vulnerable flush growth',
      'Select resistant cucurbit varieties labeled "PMR"',
    ],
  },
  {
    id: 'black-spot-rose',
    name: 'Rose Black Spot',
    pathogen: 'Diplocarpon rosae',
    category: 'Fungal',
    severity: 'Moderate',
    affectedPlants: ['Rose (Rosa spp.)'],
    symptoms: [
      'Circular black spots with feathery, fringed margins up to 1/2 inch wide',
      'Yellow chlorotic halos expanding around black spots',
      'Severe premature defoliation leaving bare canes',
      'Reddish-purple raised blisters on first-year green canes',
    ],
    issueDescription:
      'The most widespread and troublesome disease of cultivated garden roses worldwide. Weakens canes, reducing winter hardiness and flower yield.',
    causesAndSpread:
      'Splashing water from rain or overhead sprinklers; requires 7 hours of continuous leaf wetness to initiate infection.',
    curesAndTreatment: {
      organic: [
        'Neem oil or liquid copper soap applied at 7-day intervals during spring flush',
        'Baking soda horticultural oil spray (1 tbsp baking soda, 1 tsp vegetable oil, 1 gallon water)',
      ],
      chemical: [
        'Tebuconazole systemic rose spray',
        'Triforine or Propiconazole foliar fungicide',
      ],
      emergencyAction:
        'Rake up and discard every fallen diseased leaf; prune infected canes 2 inches below visible blisters.',
    },
    preventionTips: [
      'Water roses solely at the root base with drip emitters or soaker hose',
      'Prune hybrid teas into an open vase shape to permit free air flow through the center',
      'Apply fresh cedar or pine bark mulch in early spring to bury overwintering spores',
    ],
  },
  {
    id: 'citrus-canker',
    name: 'Citrus Canker',
    pathogen: 'Xanthomonas axonopodis pv. citri',
    category: 'Bacterial',
    severity: 'Severe',
    affectedPlants: ['Lemon', 'Lime', 'Orange', 'Grapefruit', 'Kumquat'],
    symptoms: [
      'Raised, corky, crater-like brown lesions on leaves, twigs, and fruit rind',
      'Oily, water-soaked margins encircled by distinct bright yellow halos',
      'Premature fruit drop and severe twig dieback',
      'Blemished unmarketable fruit with rough erupted craters',
    ],
    issueDescription:
      'A regulated quarantine bacterial disease affecting all commercial citrus species. Spreads easily during storm winds and rainstorms.',
    causesAndSpread:
      'Driven by wind-driven rain, overhead irrigation, contaminated pruning shears, and citrus leafminer insect larval galleries providing bacterial entry.',
    curesAndTreatment: {
      organic: [
        'Preventative copper hydroxide or cuprous oxide sprays timed with new leaf flushes',
        'Control citrus leafminer larvae with spinosad spray to eliminate entry wounds',
      ],
      chemical: [
        'Bactericides containing copper sulfate pentahydrate',
        'Streptomycin agricultural antibiotic where legally permitted',
      ],
      emergencyAction:
        'Prune and burn cankered twigs during dry weather. Disinfect tools with 10% bleach solution between cuts.',
    },
    preventionTips: [
      'Plant windbreak hedges around citrus orchards to reduce wind-driven rain velocity',
      'Never move citrus budwood or fruit out of quarantined canker containment zones',
      'Sanitize farm machinery and pruning equipment after servicing each tree',
    ],
  },
  {
    id: 'rust-fungus',
    name: 'Rust (Puccinia / Uromyces)',
    pathogen: 'Puccinia spp.',
    category: 'Fungal',
    severity: 'Moderate',
    affectedPlants: ['Bean', 'Coffee', 'Wheat', 'Corn', 'Snapdragon', 'Hollyhock', 'Apple (Cedar Apple Rust)'],
    symptoms: [
      'Powdery reddish-orange or cinnamon-brown pustules erupting through lower leaf surfaces',
      'Matching pale chlorotic yellow speckles on the upper leaf surface',
      'Severe leaf curling, desiccation, and premature leaf drop',
      'Weakened stems with brown elongated pustules',
    ],
    issueDescription:
      'Obligate biotrophic fungi producing microscopic urediniospores that easily blow on gentle breezes, coating hands or clothing in rust-colored dust.',
    causesAndSpread:
      'Cool to warm humid days (15°C-24°C), morning dews, and prolonged leaf wetness.',
    curesAndTreatment: {
      organic: [
        'Wettable sulfur or liquid sulfur dust at first appearance of orange pustules',
        'Copper octanoate foliar spray applied every 7-10 days',
        'Bio-fungicide containing Bacillus subtilis',
      ],
      chemical: [
        'Myclobutanil or Azoxystrobin systemic fungicide',
        'Mancozeb protectant foliar barrier',
      ],
      emergencyAction:
        'Carefully clip afflicted leaves and bag immediately to prevent releasing clouds of airborne spores.',
    },
    preventionTips: [
      'Space plants generously to promote rapid drying of morning dew',
      'Eradicate alternate host plants nearby (e.g. wild cedar junipers near apple orchards)',
      'Plant rust-resistant cultivars certified for your agricultural zone',
    ],
  },
  {
    id: 'peach-leaf-curl',
    name: 'Peach Leaf Curl',
    pathogen: 'Taphrina deformans',
    category: 'Fungal',
    severity: 'Severe',
    affectedPlants: ['Peach', 'Nectarine', 'Almond'],
    symptoms: [
      'Severe puckering, distortion, thickening, and curling of spring leaves',
      'Color transformation from green to bright crimson red, pink, and pale yellow',
      'Velvety gray-white spore bloom across curled leaf surfaces',
      'Early summer defoliation forcing tree to spend vital reserves growing replacement foliage',
    ],
    issueDescription:
      'A fungal pathogen that attacks nascent leaf buds as they swell in late winter. Once leaves unfold distorted in spring, foliar sprays are ineffective for that current season.',
    causesAndSpread:
      'Cool, wet spring weather (10°C-18°C) during bud swell; fungal spores overwinter in bark crevices and bud scales.',
    curesAndTreatment: {
      organic: [
        'Liquid copper fungicide applied during late autumn after leaf drop (dormancy spray)',
        'Second preventative copper spray in late winter right before buds break swell',
      ],
      chemical: [
        'Chlorothalonil applied during dormancy before bud break',
        'Lime sulfur spray during winter dormancy',
      ],
      emergencyAction:
        'Thoroughly fertilize and water trees that lose their foliage to aid secondary leaf emergence; thin fruit load to prevent tree exhaustion.',
    },
    preventionTips: [
      'Apply dormant copper sprays faithfully every November and February',
      'Erect a clear plastic overhead rain shelter above small dwarf peach trees during winter to keep buds dry',
      'Choose resistant peach cultivars like Frost, Avalon Pride, or Muir',
    ],
  },
  {
    id: 'anthracnose',
    name: 'Anthracnose',
    pathogen: 'Colletotrichum species',
    category: 'Fungal',
    severity: 'Moderate',
    affectedPlants: ['Mango', 'Avocado', 'Strawberry', 'Cucumber', 'Tomato', 'Sycamore'],
    symptoms: [
      'Sunken, circular, water-soaked dark lesions on fruits and leaves',
      'Salmon-pink or orange gelatinous spore masses in lesion centers during wet weather',
      'Necrotic brown spots along leaf veins causing leaf distortion',
      'Twig dieback and blossom blight resulting in fruit abort',
    ],
    issueDescription:
      'A widespread fungal group that produces characteristic sunken spots on ripe fruit and foliage. Survives on plant debris, seed coats, and infected twigs.',
    causesAndSpread:
      'Rainy weather, overhead sprinklers, temperatures between 21°C and 27°C (70°F-80°F).',
    curesAndTreatment: {
      organic: [
        'Bio-fungicide containing Bacillus subtilis',
        'Liquid copper octanoate applied from flowering through fruit set',
        'Pure cold-pressed neem oil emulsion',
      ],
      chemical: [
        'Azoxystrobin or Pyraclostrobin strobilurin fungicides',
        'Chlorothalonil preventative barrier',
      ],
      emergencyAction:
        'Pick and discard all spotted or rotting fruit immediately; prune dead branch tips.',
    },
    preventionTips: [
      'Harvest fruits promptly at maturity before over-ripening on the tree',
      'Improve orchard air drainage by selective pruning',
      'Soak seeds in 50°C (122°F) hot water for 25 minutes prior to planting to eradicate seedborne spores',
    ],
  },
  {
    id: 'bacterial-wilt',
    name: 'Bacterial Wilt',
    pathogen: 'Ralstonia solanacearum',
    category: 'Bacterial',
    severity: 'Critical',
    affectedPlants: ['Tomato', 'Potato', 'Eggplant', 'Banana', 'Ginger'],
    symptoms: [
      'Rapid wilting of foliage during warm daytime, failing to recover even in moist soil',
      'Leaves retain green color initially despite total flaccid collapse',
      'Vascular discoloration: dark brown vascular ring visible when stem is sliced horizontally',
      'White milky bacterial ooze streaming into water from freshly cut stem section (bacterial streaming test)',
    ],
    issueDescription:
      'Soil-borne bacterium that invades root wounds and multiplies inside xylem vessels, physically clogging water transport throughout the plant.',
    causesAndSpread:
      'High soil temperatures (>28°C / 82°F), waterlogged soils, root knot nematode damage providing bacterial entry wounds.',
    curesAndTreatment: {
      organic: [
        'No direct curative chemical exists once xylem is blocked',
        'Soil solarization using clear polyethylene tarp for 6-8 weeks during peak summer sun',
        'Inoculate soil with beneficial antagonist bacteria (Bacillus velezensis)',
      ],
      chemical: [
        'Soil fumigation with methyl bromide replacements in commercial agriculture',
      ],
      emergencyAction:
        'Carefully dig out infected plant with surrounding root ball and soil; discard in landfill. Do not compost.',
    },
    preventionTips: [
      'Graft susceptible scions onto resistant rootstocks (e.g., Maxifort or Shin Cheong Gwang)',
      'Maintain soil pH between 6.5 and 7.0; incorporate brassica green manure biofumigation',
      'Control root nematodes to eliminate root entrance wounds',
    ],
  },
  {
    id: 'mosaic-virus',
    name: 'Mosaic Virus (TMV / CMV)',
    pathogen: 'Tobacco / Cucumber Mosaic Virus',
    category: 'Viral',
    severity: 'Severe',
    affectedPlants: ['Tomato', 'Cucumber', 'Melon', 'Pepper', 'Zucchini', 'Squash', 'Tobacco'],
    symptoms: [
      'Mottled mosaic patterns of alternating dark green and chlorotic pale yellow on leaves',
      'Severe leaf distortion: blistering, puckering, and "shoestring" strapping of foliage',
      'Severe plant stunting, shortened internodes, and bushy appearance',
      'Bumpy, mottled, deformed fruit with bitter flavor',
    ],
    issueDescription:
      'Extremely stable plant viruses capable of persisting for decades in dried plant tissue or seeds. Once inside a plant cell, it systemically replicates through vascular tissues.',
    causesAndSpread:
      'Mechanical transmission (hands, tools, smoking tobacco debris) and insect vectors like aphids and thrips.',
    curesAndTreatment: {
      organic: [
        'There is no cure for systemic plant viral infections',
        'Spray insecticidal soap or neem oil to eradicate aphid vectors',
        'Wash hands and dip tools in 20% nonfat dry milk solution which inactivates viral particles',
      ],
      chemical: [
        'Apply systemic insecticides (Imidacloprid/Acetamiprid) targeting vector insects',
      ],
      emergencyAction:
        'Uproot and burn or bag infected plants immediately to prevent aphids from transmitting virus to adjacent crops.',
    },
    preventionTips: [
      'Purchase certified virus-free seed stock labeled "TMV" or "ToMV" resistant',
      'Never smoke or use tobacco products near greenhouse plants without washing hands thoroughly',
      'Erect yellow sticky traps and fine insect netting (50-mesh) to exclude aphid vectors',
    ],
  },
  {
    id: 'spider-mites',
    name: 'Spider Mite Damage',
    pathogen: 'Tetranychus urticae (Two-Spotted Spider Mite)',
    category: 'Pest Damage',
    severity: 'Moderate',
    affectedPlants: ['Houseplants (Calathea, Palm, Alocasia)', 'Tomato', 'Strawberry', 'Rose', 'Cannabis'],
    symptoms: [
      'Fine chlorotic stippling (tiny yellow/white pinprick dots) on leaf surfaces',
      'Fine silky webbing woven between leaf undersides, petioles, and stem joints',
      'Foliage takes on a dull, bronzed, dusty appearance',
      'Severe leaf dry-out, crisping, and premature leaf drop',
    ],
    issueDescription:
      'Microscopic arachnid pests that puncture plant cell walls on leaf undersides and suck out liquid chlorophyll contents. Populations explode exponentially in hot, dry conditions.',
    causesAndSpread:
      'Dry, low-humidity air (<40%), hot indoor or greenhouse temperatures, lack of natural predatory beneficials.',
    curesAndTreatment: {
      organic: [
        'Wash foliage thoroughly with strong blast of tepid water to dislodge webbing and mites',
        'Release predatory mites (Phytoseiulus persimilis or Neoseiulus californicus)',
        'Spray thoroughly with insecticidal soap or cold-pressed neem oil (target undersides)',
      ],
      chemical: [
        'Bifenazate (Floramite) targeted miticide',
        'Abamectin translaminar miticide',
      ],
      emergencyAction:
        'Isolate infested plant in bathroom and spray thoroughly with tepid water shower, then mist with insecticidal soap.',
    },
    preventionTips: [
      'Elevate ambient humidity above 60% with humidifiers or pebble trays',
      'Regularly wipe indoor plant foliage with damp cloth to deter web spinning',
      'Avoid broad-spectrum chemical pesticides that kill off natural ladybugs and lacewings',
    ],
  },
  {
    id: 'blossom-end-rot',
    name: 'Blossom End Rot',
    pathogen: 'Physiological (Calcium Transport Deficiency)',
    category: 'Nutrient Deficiency',
    severity: 'Moderate',
    affectedPlants: ['Tomato', 'Bell Pepper', 'Eggplant', 'Watermelon', 'Zucchini'],
    symptoms: [
      'Water-soaked circular spot at the blossom end (bottom tip) of developing fruit',
      'Spot enlarges, darkens, and flattens into a sunken, dark brown or black leathery disc',
      'Premature fruit ripening on afflicted tomatoes',
      'Leaves and vines remain completely healthy and green with zero spots',
    ],
    issueDescription:
      'Not caused by a fungus or bacteria, but by localized calcium deficiency in rapidly expanding distal fruit cells during hot, dry spells or erratic watering.',
    causesAndSpread:
      'Fluctuating soil moisture (drought followed by heavy deluge), root damage, low soil calcium, or excess ammonium nitrogen.',
    curesAndTreatment: {
      organic: [
        'Foliar spray with liquid calcium chelate or calcium acetate during fruit development',
        'Amend soil with gypsum (calcium sulfate) or crushed oyster shell meal',
        'Maintain a consistent 1-2 inch weekly moisture schedule',
      ],
      chemical: [
        'Apply calcium chloride foliar sprays (Stop-Rot) during peak fruit expansion',
      ],
      emergencyAction:
        'Snip off all afflicted fruits so the plant stops sending energy to damaged produce and channels calcium into new fruit.',
    },
    preventionTips: [
      'Install automatic drip irrigation timer to prevent soil drying out between waterings',
      'Mulch garden beds with 3 inches of compost or straw to stabilize root temperatures and moisture',
      'Test soil pH and maintain it at 6.2 to 6.8 for optimal calcium root uptake',
    ],
  },
  {
    id: 'iron-chlorosis',
    name: 'Iron Chlorosis',
    pathogen: 'Physiological (Micronutrient Inavailability)',
    category: 'Nutrient Deficiency',
    severity: 'Low',
    affectedPlants: ['Gardenia', 'Hydrangea', 'Citrus', 'Rose', 'Blueberry', 'Azalea'],
    symptoms: [
      'Interveinal chlorosis: leaf lamina turns pale yellow/ivory while veins remain vividly green',
      'Appears first on youngest, newest growth near branch tips',
      'In severe cases, entire leaf turns creamy white with brown marginal necrosis',
      'Stunted new branch elongation and poor flowering',
    ],
    issueDescription:
      'Occurs when roots cannot absorb iron from the soil, usually because high soil pH (>7.2) or cold waterlogged soil locks iron into an insoluble oxidized state.',
    causesAndSpread:
      'Alkaline soil pH, high tap water carbonates, poor soil drainage, root compaction.',
    curesAndTreatment: {
      organic: [
        'Drench soil with EDDHA or EDTA chelated iron (EDDHA is stable up to pH 9.0)',
        'Top-dress soil with elemental sulfur or aluminum sulfate to lower pH',
        'Incorporate acidic peat moss or composted pine bark around the root zone',
      ],
      chemical: [
        'Foliar iron spray with ferrous sulfate (0.5% solution) for immediate rapid greening',
      ],
      emergencyAction:
        'Spray yellowing foliage with chelated iron foliar mist for visible relief within 5-7 days.',
    },
    preventionTips: [
      'Use rainwater or filtered water for acid-loving container plants instead of hard alkaline tap water',
      'Test soil pH annually and maintain at 5.5-6.5 for general plants, 4.5-5.5 for acid lovers',
      'Avoid over-watering in compacted soils which suffocates root hair respiration',
    ],
  },
  {
    id: 'root-rot',
    name: 'Root Rot (Phytophthora & Pythium)',
    pathogen: 'Phytophthora, Pythium, & Fusarium species',
    category: 'Fungal',
    severity: 'Critical',
    affectedPlants: ['All Houseplants (Pothos, Monstera, Snake Plant)', 'Citrus', 'Avocado', 'Strawberry'],
    symptoms: [
      'Sudden dull yellowing and wilting of foliage despite wet, saturated potting mix',
      'Foul sour swampy odor emanating from the drainage holes or soil',
      'Roots are brown/black, mushy, fragile, and strip away easily leaving stringy core (sloughing)',
      'Blackening and rot ascending the stem base from the soil line',
    ],
    issueDescription:
      'Destructive anaerobic water-molds and fungi that attack root systems suffocated by stagnant, waterlogged potting substrate lacking oxygen.',
    causesAndSpread:
      'Pots without drainage holes, overwatering, heavy clay potting soil, saucers left sitting full of runoff water.',
    curesAndTreatment: {
      organic: [
        'Unpot immediately, wash all soil away from roots under running water',
        'Prune off all brown mushy roots with sanitized scissors back to clean white root tissue',
        'Dip root system in diluted hydrogen peroxide (3% H2O2 diluted 1:4 in water) for 10 minutes',
        'Repot into fresh airy aroid mix with 40% perlite and clean sanitized nursery pot with drainage holes',
      ],
      chemical: [
        'Mefenoxam or Metalaxyl soil drench for commercial nursery stock',
      ],
      emergencyAction:
        'Stop all watering immediately! Take plant out of its pot onto newspaper to air dry roots for 24 hours.',
    },
    preventionTips: [
      'Always use containers with ample bottom drainage holes',
      'Empty cachepot saucers 15 minutes after watering; never allow roots to sit submerged',
      'Use porous terracotta pots for moisture-sensitive species like Snake Plants and Succulents',
    ],
  },
  {
    id: 'aphid-infestation',
    name: 'Aphid Colonization & Sooty Mold',
    pathogen: 'Aphis gossypii & Myzus persicae',
    category: 'Pest Damage',
    severity: 'Moderate',
    affectedPlants: ['Rose', 'Pepper', 'Tomato', 'Hibiscus', 'Orchid', 'Apple'],
    symptoms: [
      'Dense clusters of tiny pear-shaped green, black, or pink insects on tender shoots and bud tips',
      'Sticky, clear sweet honeydew glaze coating leaf surfaces',
      'Black charcoal-like sooty mold fungus growing across sticky honeydew residues',
      'Curled, crumpled, and stunted tender new foliage',
    ],
    issueDescription:
      'Prolific sap-sucking insects capable of parthenogenesis (cloning without mating), giving birth to 5-10 live young daily. They transmit over 100 known plant viruses.',
    causesAndSpread:
      'Warm weather, excessive nitrogen fertilization causing lush succulent growth, absence of natural predators.',
    curesAndTreatment: {
      organic: [
        'Blast colonies with strong jet of water from garden hose or sink spray',
        'Apply insecticidal soap (potassium salts of fatty acids) directly onto insect bodies',
        'Release live ladybug beetles (Hippodamia convergens) or green lacewing larvae',
        'Pure cold-pressed neem oil (0.5% concentration) to disrupt molting hormone',
      ],
      chemical: [
        'Acetamiprid or Imidacloprid systemic soil drench',
        'Pyrethrin contact spray',
      ],
      emergencyAction:
        'Spray leaf undersides and apical growth tips thoroughly with soapy water (1 tsp gentle dish soap per quart of water).',
    },
    preventionTips: [
      'Companion plant with alliums (garlic, chives) and marigolds which deter aphids',
      'Erect yellow sticky cards near canopy to monitor early winged aphid arrivals',
      'Wash off honeydew promptly to starve sooty mold fungal growth',
    ],
  },
  {
    id: 'downy-mildew',
    name: 'Downy Mildew',
    pathogen: 'Pseudoperonospora cubensis / Peronospora species',
    category: 'Fungal',
    severity: 'Severe',
    affectedPlants: ['Cucumber', 'Melon', 'Grape', 'Basil', 'Spinach', 'Lettuce'],
    symptoms: [
      'Angular, sharp chlorotic yellow patches on upper leaf surface, strictly delimited by leaf veins',
      'Purplish-gray to dark brown velvety downy felt on corresponding lower leaf surface',
      'Rapid browning and crisping of affected leaf sectors ("burned" appearance)',
      'Total defoliation in warm, wet humid conditions within 7-14 days',
    ],
    issueDescription:
      'A destructive oomycete that proliferates under prolonged moisture. Unlike powdery mildew which prefers dry sunny days, downy mildew requires continuous moisture.',
    causesAndSpread:
      'Temperatures between 15°C and 22°C (59°F-72°F) accompanied by high relative humidity (>85%) or prolonged rain.',
    curesAndTreatment: {
      organic: [
        'Preventative copper octanoate or copper hydroxide spray',
        'Potassium phosphite (Phostrol) systemic inducer of systemic acquired resistance (SAR)',
        'Bacillus subtilis bio-fungicide',
      ],
      chemical: [
        'Cymoxanil, Dimethomorph, or Cyazofamid specialized oomycides',
      ],
      emergencyAction:
        'Remove severely blighted leaves; adjust greenhouse exhaust fans for continuous dehumidification.',
    },
    preventionTips: [
      'Cultivate in high tunnels or greenhouses where overhead rain is excluded',
      'Select downy-mildew resistant basil (e.g., Prospera varieties) or resistant cucumber hybrids',
      'Never irrigate in the late afternoon or evening',
    ],
  },
  {
    id: 'fire-blight',
    name: 'Fire Blight',
    pathogen: 'Erwinia amylovora',
    category: 'Bacterial',
    severity: 'Critical',
    affectedPlants: ['Apple', 'Pear', 'Quince', 'Cotoneaster', 'Hawthorn'],
    symptoms: [
      'Branch tips, blossoms, and leaves suddenly turn scorched black, appearing as though burned by fire',
      'Shoot tips bend sharply into a characteristic downward "shepherd’s crook"',
      'Milky amber bacterial droplets oozing from diseased bark and fruit in humid mornings',
      'Sunken dark cankers on limbs with cracked margins',
    ],
    issueDescription:
      'Devastating bacterial disease native to North America that can kill mature fruit trees within a single growing season. Bacteria enter through open blossoms.',
    causesAndSpread:
      'Warm spring weather (18°C-29°C / 65°F-85°F) coinciding with blooming periods and rain or honeybee visits.',
    curesAndTreatment: {
      organic: [
        'Apply Blossom Protect (Aureobasidium pullulans) bio-fungicide during bloom',
        'Fixed copper sprays applied at silver-tip bud stage in early spring',
      ],
      chemical: [
        'Streptomycin agricultural antibiotic applied during bloom before warm rain',
        'Oxytetracycline where streptomycin resistance exists',
      ],
      emergencyAction:
        'Prune afflicted branches during dry weather, cutting at least 12-18 inches below visible canker margin. Sterilize loppers with 70% alcohol between cuts.',
    },
    preventionTips: [
      'Avoid high-nitrogen fertilizers that stimulate tender succulence',
      'Select fire-blight resistant rootstocks (Geneva series) and scions (e.g., Enterprise, Liberty apples)',
      'Regularly scout orchard in spring after bloom for shepherd\'s crooks',
    ],
  },
  {
    id: 'fusarium-wilt',
    name: 'Fusarium Wilt',
    pathogen: 'Fusarium oxysporum',
    category: 'Fungal',
    severity: 'Severe',
    affectedPlants: ['Tomato', 'Banana (Panama Disease)', 'Watermelon', 'Cotton', 'Pea'],
    symptoms: [
      'Yellowing and wilting of foliage, often characteristically starting on one side of a single leaf or branch (one-sided yellowing)',
      'Upward leaf curling and severe daytime flagging',
      'Dark reddish-brown vascular staining visible inside the xylem when stem is peeled',
      'Progressive stunting and eventual plant death',
    ],
    issueDescription:
      'Soil-borne vascular fungus producing microconidia and chlamydospores that persist dormant in field soil for up to 20-30 years.',
    causesAndSpread:
      'Warm soil temperatures (27°C-32°C / 80°F-90°F), acidic sandy soils, spread by farm machinery and infected soil particles.',
    curesAndTreatment: {
      organic: [
        'Inoculate soil with Trichoderma harzianum or Streptomyces lydicus bio-control agents',
        'Raise soil pH to 6.8-7.0 with agricultural lime (Fusarium prefers acidic soil)',
        'Solarize garden beds under clear plastic for 6-8 weeks',
      ],
      chemical: [
        'Commercial soil fumigation with dazomet prior to crop planting',
      ],
      emergencyAction:
        'Uproot infected crop immediately and burn or dispose in municipal landfill. Do not work soil while wet.',
    },
    preventionTips: [
      'Plant cultivars certified resistant to Fusarium races 1, 2, and 3 (labeled "VFN" or "FFN")',
      'Graft commercial varieties onto resistant wild Solanum rootstocks',
      'Practice strict farm boot sanitation when entering growing zones',
    ],
  },
  {
    id: 'sooty-mold',
    name: 'Sooty Mold',
    pathogen: 'Capnodium species',
    category: 'Fungal',
    severity: 'Low',
    affectedPlants: ['Citrus', 'Camellia', 'Crepe Myrtle', 'Gardenia', 'Pothos', 'Ficus'],
    symptoms: [
      'Black, soot-like or charcoal-colored crust coating the upper leaf surfaces',
      'Leaves, stems, and fruits feel sticky underneath the black powder',
      'Wipes away relatively easily with a damp cloth, revealing green leaf underneath',
      'Yellowing beneath mold due to blocked photosynthetic sunlight',
    ],
    issueDescription:
      'Not a true plant parasite—sooty mold does not infect or penetrate leaf tissue. It is a superficial saprophytic fungus living on honeydew excrement deposited by sap-sucking bugs.',
    causesAndSpread:
      'Infestation of aphids, soft scale insects, mealybugs, or whiteflies secreting sugary honeydew.',
    curesAndTreatment: {
      organic: [
        'Eliminate the underlying insect infestation (aphids/scale) with insecticidal soap or neem oil',
        'Gently wash leaves with warm water mixed with mild horticultural castile soap (1 tbsp/gal)',
        'Spray with horticultural paraffinic oil to loosen the black soot flakes',
      ],
      chemical: [
        'Systemic insecticide (Imidacloprid/Dinotefuran) to eliminate honeydew producers',
      ],
      emergencyAction:
        'Spray foliage with warm water and wipe leaves with soft cloth or sponge to restore photosynthesis.',
    },
    preventionTips: [
      'Band tree trunks with sticky barriers (Tanglefoot) to prevent ants from protecting aphids from ladybugs',
      'Inspect leaf undersides monthly for early scale or mealybug colonies',
      'Prune overlapping branches to improve sunlight penetration which dries honeydew',
    ],
  },
  {
    id: 'bacterial-leaf-spot',
    name: 'Bacterial Leaf Spot',
    pathogen: 'Xanthomonas campestris pv. vesicatoria',
    category: 'Bacterial',
    severity: 'Moderate',
    affectedPlants: ['Pepper', 'Tomato', 'English Ivy', 'Hydrangea', 'Geranium'],
    symptoms: [
      'Small, angular, water-soaked brown lesions on leaves and stems',
      'Spots turn purplish-black with translucent margins',
      'Leaves turn yellow around spots and drop prematurely',
      'Small raised scabby blisters on pepper and tomato fruits',
    ],
    issueDescription:
      'Bacterial pathogen that gains access through natural stomata and mechanical wounds. Highly active during warm rainy periods.',
    causesAndSpread:
      'Warm temperatures (24°C-30°C), driving rain, overhead irrigation, and working among wet foliage.',
    curesAndTreatment: {
      organic: [
        'Apply copper octanoate or copper hydroxide spray every 7-10 days',
        'Bio-fungicide containing Bacillus subtilis',
      ],
      chemical: [
        'Copper sulfate combined with mancozeb for synergistic bactericidal effect',
      ],
      emergencyAction:
        'Remove severely spotted leaves and avoid handling plants when moisture is present on the leaves.',
    },
    preventionTips: [
      'Purchase certified disease-free seeds or hot water treat seeds at 50°C (122°F) for 25 min',
      'Switch to ground-level drip irrigation',
      'Maintain 2-3 year crop rotation away from peppers and tomatoes',
    ],
  },
];
