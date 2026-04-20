export type TravelEntry = {
  n: string;
  place: string;
  slug: string;
  year: string;
  region: string;
  summary: string;
  intro: string;
  highlights: string[];
};

export const travelEntries: TravelEntry[] = [
  {
    n: "01",
    place: "Uzbekistan",
    slug: "uzbekistan",
    year: "2024",
    region: "Central Asia",
    summary: "Silk Road cities, blue domes, and endless desert horizons.",
    intro:
      "Uzbekistan felt like stepping into a living museum of the Silk Road. From the turquoise tilework of Samarkand to the labyrinth alleys of Bukhara, every corner carried centuries of trade, conquest, and craft.",
    highlights: [
      "Registan Square at sunrise — empty, gold, silent.",
      "Long marshrutka rides between oases.",
      "Plov shared with strangers in Tashkent.",
      "The desert quiet outside Khiva.",
    ],
  },
  {
    n: "02",
    place: "Kazakhstan",
    slug: "kazakhstan",
    year: "2024",
    region: "Central Asia",
    summary: "Soviet skylines giving way to steppe and sharp mountain light.",
    intro:
      "Kazakhstan surprised me with its scale — Almaty's tree-lined avenues under the Tien Shan, then hours of empty steppe in every direction. A country still figuring out its post-Soviet identity, in the best way.",
    highlights: [
      "Hiking above Almaty in Ile-Alatau.",
      "Brutalist architecture in Astana.",
      "Bazaar food: lagman, manti, samsa.",
      "Sunset over the Charyn Canyon.",
    ],
  },
  {
    n: "03",
    place: "Kyrgyzstan",
    slug: "kyrgyzstan",
    year: "2024",
    region: "Central Asia",
    summary: "Yurts, horses, and alpine lakes that don't feel real.",
    intro:
      "Kyrgyzstan is mountains. Everywhere. I rode horses across jailoo pastures, slept in yurts beside Song-Kul, and met nomadic families whose hospitality redefined the word for me.",
    highlights: [
      "Three days on horseback to Song-Kul.",
      "Ala-Kul lake — turquoise, freezing, perfect.",
      "Kumis (fermented mare's milk) — once was enough.",
      "Bishkek's Soviet mosaics.",
    ],
  },
  {
    n: "04",
    place: "Ecuador",
    slug: "ecuador",
    year: "2023",
    region: "South America",
    summary: "Andes, Amazon, and Pacific — all in one small country.",
    intro:
      "Ecuador packs three worlds into a country the size of Colorado. I climbed volcanoes near Quito, dropped into the Amazon basin, and ended on the Pacific coast eating ceviche straight from the boats.",
    highlights: [
      "Quilotoa crater hike.",
      "Night sounds in the Amazon.",
      "Old town Quito at dusk.",
      "Bus rides with absurd mountain views.",
    ],
  },
  {
    n: "05",
    place: "China · Shanghai",
    slug: "china-shanghai",
    year: "2023",
    region: "East Asia",
    summary: "A city sprinting into the future without losing its alleyways.",
    intro:
      "Shanghai is contradictions stacked vertically. Pudong's neon skyline across the river from 1920s Bund facades, with longtang lane houses tucked between glass towers. Few cities reward wandering this much.",
    highlights: [
      "The Bund at night.",
      "Tianzifang's narrow lanes.",
      "Maglev to the airport (just because).",
      "Tea houses in the French Concession.",
    ],
  },
  {
    n: "06",
    place: "Shanghai Food",
    slug: "shanghai-food",
    year: "2023",
    region: "East Asia",
    summary: "Soup dumplings, scallion oil noodles, and street breakfasts.",
    intro:
      "Eating in Shanghai deserves its own entry. Mornings of jianbing from a cart, lunches of xiaolongbao at Jia Jia Tang Bao, late-night skewers in alleys that don't exist on any map.",
    highlights: [
      "Xiaolongbao at Jia Jia Tang Bao.",
      "Shengjianbao — pan-fried, life-changing.",
      "Scallion oil noodles for ¥10.",
      "Hairy crab season at a local spot.",
    ],
  },
  {
    n: "07",
    place: "New Zealand",
    slug: "new-zealand",
    year: "2022",
    region: "Oceania",
    summary: "A road trip through landscapes that don't quite seem real.",
    intro:
      "Two islands, one campervan, six weeks. New Zealand is what happens when geology shows off. Fjords, glaciers, geothermal valleys, and roads with almost no one on them.",
    highlights: [
      "Milford Sound in the rain.",
      "Tongariro Alpine Crossing.",
      "Sandflies. Always the sandflies.",
      "Stargazing in Aoraki.",
    ],
  },
  {
    n: "08",
    place: "Romania",
    slug: "romania",
    year: "2022",
    region: "Europe",
    summary: "Carpathian villages, painted monasteries, and Transylvanian roads.",
    intro:
      "Romania is one of Europe's last truly slow countries. Horse carts on village roads, fortified Saxon churches, and the Transfăgărășan winding into clouds. Easy to love, hard to leave.",
    highlights: [
      "Driving the Transfăgărășan.",
      "Painted monasteries of Bucovina.",
      "Sighișoara's medieval old town.",
      "Sarmale and tuică with locals.",
    ],
  },
];

export const getEntryBySlug = (slug: string) =>
  travelEntries.find((e) => e.slug === slug);
