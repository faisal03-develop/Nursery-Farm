export type ProductType = "fruit" | "decorative";

export type FruitCategory = "tropical" | "citrus" | "seasonal";
export type DecorativeCategory = "indoor" | "outdoor" | "flowering" | "low-maintenance";
export type Season = "summer" | "winter" | "all-season";
export type Climate = "hot" | "moderate" | "cold";
export type SunReq = "full-sun" | "partial-shade" | "shade";
export type WaterReq = "low" | "medium" | "high";
export type LightReq = "low" | "medium" | "bright";
export type Maintenance = "beginner" | "moderate" | "expert";
export type PotSize = "small" | "medium" | "large";
export type Placement = "living-room" | "bedroom" | "office" | "balcony" | "garden";

export interface BasePlant {
  id: string;
  slug: string;
  name: string;
  scientificName: string;
  price: number; // in rupees
  image: string;
  shortDescription: string;
  description: string;
  stock: number;
  featured?: boolean;
  faqs: { q: string; a: string }[];
  careGuide: { title: string; body: string }[];
}

export interface FruitPlant extends BasePlant {
  type: "fruit";
  category: FruitCategory;
  season: Season;
  timeToFruitMonths: number;
  expectedYield: string;
  sunlight: SunReq;
  water: WaterReq;
  climate: Climate[];
}

export interface DecorativePlant extends BasePlant {
  type: "decorative";
  category: DecorativeCategory;
  light: LightReq;
  maintenance: Maintenance;
  potSize: PotSize;
  placement: Placement[];
  petFriendly: boolean;
  airPurifying: boolean;
}

export type Plant = FruitPlant | DecorativePlant;

export const plants: Plant[] = [
  {
    id: "p-monstera",
    slug: "monstera-deliciosa",
    name: "Monstera Deliciosa",
    scientificName: "Monstera deliciosa",
    type: "decorative",
    category: "indoor",
    price: 1899,
    image: "/images/plant-monstera.jpg",
    shortDescription: "Iconic split leaves that transform any room into a quiet jungle.",
    description:
      "A statement plant with dramatic, fenestrated leaves. Loves bright, indirect light and rewards minimal care with rapid, sculptural growth.",
    stock: 24,
    featured: true,
    light: "medium",
    maintenance: "beginner",
    potSize: "medium",
    placement: ["living-room", "office"],
    petFriendly: false,
    airPurifying: true,
    faqs: [
      { q: "How often should I water?", a: "Once a week in summer, every 10–14 days in winter. Let the top 2 inches dry between waterings." },
      { q: "Why are leaves not splitting?", a: "Young leaves are solid; splits appear with age, brighter light, and humidity above 50%." },
    ],
    careGuide: [
      { title: "Light", body: "Bright, indirect light. Avoid direct afternoon sun." },
      { title: "Water", body: "Weekly in growing season. Reduce in winter." },
      { title: "Humidity", body: "Loves 50%+ humidity. Mist leaves twice a week." },
    ],
  },
  {
    id: "p-snake",
    slug: "snake-plant",
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    type: "decorative",
    category: "low-maintenance",
    price: 899,
    image: "/images/plant-snake.jpg",
    shortDescription: "Architectural, nearly indestructible, and a quiet air purifier.",
    description:
      "The perfect first plant. Tolerates low light, thrives on neglect, and converts CO₂ into oxygen at night.",
    stock: 60,
    featured: true,
    light: "low",
    maintenance: "beginner",
    potSize: "small",
    placement: ["bedroom", "office", "living-room"],
    petFriendly: false,
    airPurifying: true,
    faqs: [
      { q: "Can it survive low light?", a: "Yes — one of the few true low-light plants. Growth slows but it remains healthy." },
      { q: "How often to water?", a: "Every 2–3 weeks. Overwatering is the only real risk." },
    ],
    careGuide: [
      { title: "Light", body: "Low to bright, indirect light. Extremely flexible." },
      { title: "Water", body: "Every 2–3 weeks. Soil must dry fully between waterings." },
      { title: "Soil", body: "Well-draining cactus mix prevents root rot." },
    ],
  },
  {
    id: "p-peacelily",
    slug: "peace-lily",
    name: "Peace Lily",
    scientificName: "Spathiphyllum wallisii",
    type: "decorative",
    category: "flowering",
    price: 1299,
    image: "/images/plant-peacelily.jpg",
    shortDescription: "Elegant white blooms and lush leaves that thrive in shade.",
    description:
      "A graceful flowering houseplant that signals when it needs water by drooping — then springs back within hours.",
    stock: 35,
    featured: false,
    light: "low",
    maintenance: "beginner",
    potSize: "medium",
    placement: ["living-room", "bedroom", "office"],
    petFriendly: false,
    airPurifying: true,
    faqs: [
      { q: "Why are leaves turning yellow?", a: "Usually overwatering or direct sun. Move to indirect light and let soil dry slightly." },
      { q: "How often does it bloom?", a: "Typically blooms in spring and summer, with flowers lasting for over a month." }
    ],
    careGuide: [
      { title: "Light", body: "Low to medium indirect light." },
      { title: "Water", body: "Keep soil lightly moist. Will droop dramatically when thirsty." },
      { title: "Feeding", body: "Balanced houseplant food once every 6 weeks during spring and summer." }
    ],
  },
  {
    id: "p-zz",
    slug: "zz-plant",
    name: "ZZ Plant",
    scientificName: "Zamioculcas zamiifolia",
    type: "decorative",
    category: "low-maintenance",
    price: 1099,
    image: "/images/plant-zz.jpg",
    shortDescription: "Glossy, waxy leaves on a plant that asks for almost nothing.",
    description:
      "Drought-tolerant and shade-loving. The ZZ thrives in offices, hallways, and forgetful homes.",
    stock: 40,
    featured: true,
    light: "low",
    maintenance: "beginner",
    potSize: "medium",
    placement: ["office", "living-room", "bedroom"],
    petFriendly: false,
    airPurifying: true,
    faqs: [{ q: "How often to water?", a: "Every 3 weeks. The subterranean rhizomes store water efficiently." }],
    careGuide: [
      { title: "Light", body: "Low to bright indirect — adapts to almost any indoor lighting." },
      { title: "Water", body: "Sparingly. Always let soil dry fully between waterings." },
    ],
  },
  {
    id: "p-hibiscus",
    slug: "tropical-hibiscus",
    name: "Tropical Hibiscus",
    scientificName: "Hibiscus rosa-sinensis",
    type: "decorative",
    category: "outdoor",
    price: 1499,
    image: "/images/plant-hibiscus.jpg",
    shortDescription: "Bold red blooms that turn any balcony into a tropical garden.",
    description:
      "A sun-loving flowering shrub that produces vibrant blooms throughout summer. Perfect for balconies and gardens.",
    stock: 28,
    featured: false,
    light: "bright",
    maintenance: "moderate",
    potSize: "large",
    placement: ["balcony", "garden"],
    petFriendly: true,
    airPurifying: false,
    faqs: [{ q: "How long do blooms last?", a: "Each individual flower lasts a day, but a healthy plant blooms continuously." }],
    careGuide: [
      { title: "Light", body: "Full sun — at least 6 hours of direct sunlight daily." },
      { title: "Water", body: "Daily in hot summer. Keep soil consistently moist but never waterlogged." },
    ],
  },
  {
    id: "p-mango",
    slug: "alphonso-mango",
    name: "Alphonso Mango Sapling",
    scientificName: "Mangifera indica 'Alphonso'",
    type: "fruit",
    category: "tropical",
    price: 2499,
    image: "/images/plant-mango.jpg",
    shortDescription: "The king of mangoes — sweet, aromatic Alphonso variety, grafted.",
    description:
      "A grafted Alphonso sapling that begins fruiting in 3–4 years. Yields rich, golden, intensely fragrant mangoes prized across India.",
    stock: 18,
    featured: true,
    season: "summer",
    timeToFruitMonths: 36,
    expectedYield: "30–80 kg per season at maturity",
    sunlight: "full-sun",
    water: "medium",
    climate: ["hot", "moderate"],
    faqs: [
      { q: "When will it fruit?", a: "Grafted Alphonso saplings typically fruit in their 3rd or 4th year." },
      { q: "Can I grow it in a pot?", a: "Yes — use a 24-inch pot minimum and prune to maintain compact shape." },
    ],
    careGuide: [
      { title: "Sunlight", body: "Full sun, minimum 6–8 hours daily." },
      { title: "Watering", body: "Deep watering twice a week. Reduce during flowering to encourage fruit set." },
      { title: "Fertilizer", body: "NPK 10-10-10 monthly. Add compost in spring." },
      { title: "Pruning", body: "Prune after harvest to shape canopy and encourage next year's flush." },
    ],
  },
  {
    id: "p-lemon",
    slug: "kagzi-lemon",
    name: "Kagzi Lemon Tree",
    scientificName: "Citrus aurantiifolia",
    type: "fruit",
    category: "citrus",
    price: 1199,
    image: "/images/plant-lemon.jpg",
    shortDescription: "Year-round, thin-skinned, juice-packed lemons from a compact tree.",
    description:
      "A productive container-friendly citrus that yields fragrant white blooms and tangy lemons almost year-round.",
    stock: 45,
    featured: true,
    season: "all-season",
    timeToFruitMonths: 18,
    expectedYield: "20–40 kg per year at maturity",
    sunlight: "full-sun",
    water: "medium",
    climate: ["hot", "moderate"],
    faqs: [
      { q: "Will it fruit indoors?", a: "Only with 6+ hours of bright direct light. South-facing windows work best." },
      { q: "Why are leaves yellow?", a: "Usually nitrogen or iron deficiency. Apply a citrus-specific fertilizer." },
    ],
    careGuide: [
      { title: "Sunlight", body: "Full sun is essential for fruiting." },
      { title: "Watering", body: "Deep, infrequent watering. Let top inch dry." },
      { title: "Feeding", body: "Citrus fertilizer monthly during growing season." },
    ],
  },
  {
    id: "p-guava",
    slug: "thai-guava",
    name: "Thai Guava",
    scientificName: "Psidium guajava 'Thai'",
    type: "fruit",
    category: "tropical",
    price: 999,
    image: "/images/plant-guava.jpg",
    shortDescription: "Crisp, sweet, low-seed guavas on a fast-fruiting tree.",
    description:
      "A vigorous tropical tree that fruits within 2 years. Thai guavas are larger, crunchier, and sweeter than native varieties.",
    stock: 32,
    featured: false,
    season: "all-season",
    timeToFruitMonths: 24,
    expectedYield: "25–50 kg per year at maturity",
    sunlight: "full-sun",
    water: "medium",
    climate: ["hot", "moderate"],
    faqs: [{ q: "Pot or ground?", a: "Both work. Use a 20-inch pot minimum and prune to 4 ft for container growing." }],
    careGuide: [
      { title: "Sunlight", body: "Full sun for best fruit production." },
      { title: "Watering", body: "Twice a week. More during fruit development." },
    ],
  },
  {
    id: "p-pomegranate",
    slug: "bhagwa-pomegranate",
    name: "Bhagwa Pomegranate",
    scientificName: "Punica granatum 'Bhagwa'",
    type: "fruit",
    category: "seasonal",
    price: 1399,
    image: "/images/plant-pomegranate.jpg",
    shortDescription: "Premium saffron-red pomegranates with soft, sweet arils.",
    description:
      "The export-quality Bhagwa variety. Drought-tolerant, ornamental in bloom, and yields heavy clusters of jewel-like fruit.",
    stock: 22,
    featured: false,
    season: "winter",
    timeToFruitMonths: 30,
    expectedYield: "15–30 kg per year at maturity",
    sunlight: "full-sun",
    water: "low",
    climate: ["hot", "moderate", "cold"],
    faqs: [{ q: "Cold tolerance?", a: "Hardy to brief frost. Mulch roots in winter for protection." }],
    careGuide: [
      { title: "Sunlight", body: "Full sun. Tolerates partial shade with reduced yield." },
      { title: "Watering", body: "Low water needs once established. Drought-tolerant." },
      { title: "Pruning", body: "Annual winter pruning improves fruit size." },
    ],
  },
];

export const getPlantBySlug = (slug: string) => plants.find((p) => p.slug === slug);
export const featuredPlants = () => plants.filter((p) => p.featured);
export const fruitPlants = () => plants.filter((p): p is FruitPlant => p.type === "fruit");
export const decorativePlants = () => plants.filter((p): p is DecorativePlant => p.type === "decorative");

export const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);

