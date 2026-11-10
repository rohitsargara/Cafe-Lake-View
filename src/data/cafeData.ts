export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  category: 'coffee' | 'tea' | 'sourdough' | 'bowls' | 'desserts';
  price: number;
  description: string;
  tags: string[];
  origin?: string;
  notes?: string[];
  isPopular?: boolean;
  image?: string;
}

export interface RooftopZone {
  id: string;
  name: string;
  description: string;
  vibe: string;
  bestFor: string;
  capacity: string;
  view: string;
}

export interface Review {
  id: string;
  author: string;
  origin: string;
  date: string;
  rating: number;
  quote: string;
  vibe: string;
}

export const CAFE_DETAILS = {
  name: 'Cafe Lake View',
  city: 'Pushkar, Rajasthan',
  address: 'Near Varaha Ghat & Brahma Temple, Pushkar Lake, Rajasthan 305022, India',
  phone: '+91 98290 82001',
  email: 'hello@cafelakeviewpushkar.com',
  hours: '07:30 AM – 10:30 PM (Daily)',
  sunsetTime: '17:54',
  coordinates: {
    lat: 26.4893752,
    lng: 74.5540116,
  },
  googleMapsUrl:
    'https://www.google.com/maps/place/Cafe+Lake+View/@26.4893752,74.5540116,15z/data=!4m10!1m2!2m1!1scafe+in+Pushkar,+Rajasthan,+India!3m6!1s0x396bdd22408503ff:0xd153c05ea0382001!8m2!3d26.4893752!4d74.5540116!15sCiFjYWZlIGluIFB1c2hrYXIsIFJhamFzdGhhbiwgSW5kaWFaISIfY2FmZSBpbiBwdXNoa2FyIHJhamFzdGhhbiBpbmRpYZIBCnJlc3RhdXJhbnSaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVTnVkVTE2Ymt4bkVBReABAPoBBAgAEEg!16s%2Fg%2F11f1w7hxpb',
};

export const ROOFTOP_ZONES: RooftopZone[] = [
  {
    id: 'balcony-edge',
    name: 'Front Balcony Edge',
    description: 'Direct unobstructed edge overlooking the sacred water, bathing ghats, and Brahma temple peaks.',
    vibe: 'Meditative & Golden Hour Panoramic',
    bestFor: 'Sunset viewings & slow pour-overs',
    capacity: '2–4 guests per table',
    view: 'Pushkar Lake & Aravalli Ridges',
  },
  {
    id: 'sky-terrace',
    name: 'Upper Sky Terrace',
    description: 'Elevated 360-degree open-air deck above Pushkar’s whitewashed skyline, blessed with cooling desert breezes.',
    vibe: 'Breezy, wide horizons, evening starlight',
    bestFor: 'Groups, long conversations & stargazing',
    capacity: '4–8 guests per lounge',
    view: 'Full 360° Lake & Desert Horizon',
  },
  {
    id: 'diwan-library',
    name: 'Heritage Diwan Nook',
    description: 'Low cushioned diwans with handcrafted Rajasthani block-print linens, shaded arches, and curated art books.',
    vibe: 'Wabi-sabi shelter, peaceful & introspective',
    bestFor: 'Solo travelers, writers & quiet reading',
    capacity: '1–3 guests per diwan',
    view: 'Ghat arches & serene courtyard light',
  },
  {
    id: 'shaded-pergola',
    name: 'Bamboo Shaded Pergola',
    description: 'Natural woven cane canopy that filters midday desert sun into gentle dappled light, surrounded by palms.',
    vibe: 'Cool afternoon sanctuary',
    bestFor: 'All-day brunch & remote journal writing',
    capacity: '2–6 guests',
    view: 'Courtyard palms & shimmer of holy waters',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  {
    id: 'c1',
    name: 'Pushkar Golden Hour Pour-Over',
    category: 'coffee',
    price: 240,
    description: 'Manual V60 pour-over using light-roasted Chikmagalur single-estate Arabica. Subtle notes of stone fruit, wild honey, and citrus blossom.',
    tags: ['Single Estate', 'Filter Craft', 'House Special'],
    origin: 'Attikan Estate, Biligirirangana Hills (1,750m)',
    notes: ['Peach Blossom', 'Wild Honey', 'Meyer Lemon'],
    isPopular: true,
  },
  {
    id: 'c2',
    name: 'Saffron & Green Cardamom Cortado',
    category: 'coffee',
    price: 260,
    description: 'Double ristretto infused with hand-crushed Kashmiri saffron threads and green cardamom, textured with velvety oat milk.',
    tags: ['Barista Signature', 'Ayurvedic Botanical', 'Vegan Option'],
    origin: 'Kalledevarapura Estate Arabica',
    notes: ['Golden Saffron', 'Crushed Pods', 'Creamy Toffee'],
    isPopular: true,
  },
  {
    id: 'c3',
    name: '24-Hour Ghats Cold Drip',
    category: 'coffee',
    price: 270,
    description: 'Slow ice-drip extraction yielding an ultra-smooth, naturally sweet brew served over hand-carved ice sphere with orange peel twist.',
    tags: ['Cold Brew', 'Low Acidity', 'Refreshing'],
    origin: 'Araku Valley Organic Micro-lot',
    notes: ['Dark Cacao', 'Sweet Fig', 'Candied Citrus'],
  },
  {
    id: 'c4',
    name: 'Rustic Terracotta Cappuccino',
    category: 'coffee',
    price: 210,
    description: 'Rich espresso poured into locally thrown unglazed clay kulhad. The warm earthenware imparts a grounding mineral finish.',
    tags: ['Heritage Earthenware', 'Best-Seller'],
    origin: 'Shevaroys Estate Blend',
    notes: ['Roasted Hazelnut', 'Brown Butter', 'Mineral Clay'],
    isPopular: true,
  },
  {
    id: 'c5',
    name: 'AeroPress Desert Tonic',
    category: 'coffee',
    price: 250,
    description: 'Concentrated Aeropress extraction poured over sparkling botanical tonic with fresh rosemary sprig and pink grapefruit.',
    tags: ['Sparkling', 'Summer Tonic'],
    origin: 'Chikmagalur Washed Arabica',
    notes: ['Crisp Tonic', 'Grapefruit Zest', 'Bergamot'],
  },

  // TEAS & ELIXIRS
  {
    id: 't1',
    name: 'Organic Kashmiri Saffron Kahwa',
    category: 'tea',
    price: 220,
    description: 'Traditional green tea steeped with whole cinnamon bark, green cardamom, organic rose petals, and slivered sweet almonds.',
    tags: ['Herbal Elixir', 'Caffeine Light', 'Ayurvedic'],
    origin: 'Srinagar Valley & Pushkar Rose Gardens',
    notes: ['Whole Almonds', 'Rose Water', 'Ceylon Cinnamon'],
    isPopular: true,
  },
  {
    id: 't2',
    name: 'Uji Ceremonial Matcha Cloud',
    category: 'tea',
    price: 320,
    description: 'First-harvest Japanese stone-ground matcha whisked by hand with bamboo chasen, layered over iced coconut-almond milk.',
    tags: ['Imported Single Origin', 'Antioxidant', 'Plant-Based'],
    origin: 'Uji, Kyoto, Japan',
    notes: ['Umami Sweetness', 'Spring Grass', 'Silky Coconut'],
    isPopular: true,
  },
  {
    id: 't3',
    name: 'Pushkar Desert Rose Infusion',
    category: 'tea',
    price: 190,
    description: 'Sun-dried Damascus rose petals from local Pushkar flower farms, lemon verbena, and raw desert honey.',
    tags: ['Caffeine-Free', 'Hyper-Local Pushkar', 'Floral'],
    origin: 'Local Pushkar Valley Rose Gardens',
    notes: ['Sweet Damascus Rose', 'Crisp Verbena', 'Warm Amber'],
  },
  {
    id: 't4',
    name: 'Golden Turmeric Root Elixir',
    category: 'tea',
    price: 230,
    description: 'Fresh pressed organic yellow turmeric, ginger root, cracked Tellicherry black pepper, and steamed cashew milk.',
    tags: ['Immunity', 'Anti-Inflammatory', 'Warm'],
    notes: ['Fresh Ginger', 'Turmeric Curcumin', 'Cracked Pepper'],
  },

  // SOURDOUGH & BAKERY
  {
    id: 's1',
    name: 'Avocado & Heirloom Radish Sourdough',
    category: 'sourdough',
    price: 380,
    description: 'Crusty wood-fired sourdough slice topped with ripe Hass avocado, shaved watermelon radish, pomegranate jewels, dukkah spice, and cold-pressed olive oil.',
    tags: ['Plant-Based', 'Artisan Bakery', 'House Favorite'],
    notes: ['Egyptian Dukkah', 'Hass Avocado', 'Pomegranate'],
    isPopular: true,
  },
  {
    id: 's2',
    name: 'Wood-Fired Shakshuka Skillet',
    category: 'sourdough',
    price: 410,
    description: 'Simmered spiced San Marzano tomato & roasted red bell pepper stew with organic pasture eggs, crumbled Greek feta, and warm rustic sourdough batard.',
    tags: ['Vegetarian', 'Skillet Classic'],
    notes: ['Cumin Roasted Pepper', 'Pasture Eggs', 'Crusty Loaf'],
    isPopular: true,
  },
  {
    id: 's3',
    name: 'Wild Forest Mushroom & Truffle Tartine',
    category: 'sourdough',
    price: 430,
    description: 'Pan-seared oyster and shiitake mushrooms in garlic thyme butter on toasted country sourdough with goat cheese spread and balsamic glaze.',
    tags: ['Artisan Savory', 'Vegetarian'],
    notes: ['Shiitake', 'Fresh Thyme', 'White Truffle Essence'],
  },
  {
    id: 's4',
    name: 'Sundried Tomato & Pesto Toast',
    category: 'sourdough',
    price: 350,
    description: 'House-made pine nut and holy basil pesto, confit cherry tomatoes, kalamata olives, and fresh buffalo mozzarella on sourdough.',
    tags: ['Vegetarian', 'Mediterranean'],
    notes: ['Holy Basil', 'Buffalo Mozzarella', 'Confit Garlic'],
  },

  // WHOLESOME BOWLS
  {
    id: 'b1',
    name: 'Lakeview Mezze & Crisp Falafel Bowl',
    category: 'bowls',
    price: 440,
    description: 'Crispy herb falafels, smoked paprika hummus, roasted beetroot labneh, cucumber sumac salad, warm Zaatar pita, and kalamata olives.',
    tags: ['Mediterranean', 'High Protein', 'Gluten-Free Option'],
    notes: ['Creamy Tahini', 'Fresh Sumac', 'Sprouted Chickpeas'],
    isPopular: true,
  },
  {
    id: 'b2',
    name: 'Pushkar Date & Toasted Seed Granola',
    category: 'bowls',
    price: 320,
    description: 'House-baked rolled oats with roasted pumpkin seeds, desert dates, fresh seasonal figs, and whipped Greek yogurt or creamy almond milk.',
    tags: ['Breakfast Bowl', 'Natural Sweetness'],
    notes: ['Medjool Dates', 'Chia Seeds', 'Wild Fig'],
  },
  {
    id: 'b3',
    name: 'Spiced Quinoa & Roasted Veggie Nirvana',
    category: 'bowls',
    price: 390,
    description: 'Warm organic quinoa tossed with cumin roasted sweet potatoes, charred broccoli, baby spinach, avocado cubes, and turmeric citrus dressing.',
    tags: ['100% Plant-Based', 'Gluten-Free', 'Nutritious'],
    notes: ['Sweet Potato', 'Charred Greens', 'Golden Dressing'],
  },

  // SUNSET DESSERTS
  {
    id: 'd1',
    name: 'Pushkar Saffron & Pistachio Basque Cheesecake',
    category: 'desserts',
    price: 340,
    description: 'Burned Basque-style silky cheesecake subtly perfumed with saffron and crusted with roasted Iranian green pistachios.',
    tags: ['House Specialty', 'Decadent', 'Must-Try'],
    notes: ['Caramelized Top', 'Silky Interior', 'Crushed Pistachio'],
    isPopular: true,
  },
  {
    id: 'd2',
    name: 'Raw Cacao & Sea Salt Fudge Brownie',
    category: 'desserts',
    price: 280,
    description: 'Flourless 70% single-origin dark chocolate brownie with Rajasthan desert salt crystals and a scoop of Madagascar vanilla bean gelato.',
    tags: ['Gluten-Free', 'Rich Chocolate'],
    notes: ['70% Single Origin', 'Pink Rock Salt', 'Pure Vanilla'],
  },
  {
    id: 'd3',
    name: 'Cardamom Citrus Olive Oil Cake',
    category: 'desserts',
    price: 260,
    description: 'Moist and fragrant olive oil sponge infused with sweet orange zest, green cardamom, and a dollop of honey crème fraîche.',
    tags: ['Delicate Sweet', 'Olive Oil Bake'],
    notes: ['Candied Citrus', 'Green Cardamom', 'Organic Olive Oil'],
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Elena Rostova',
    origin: 'Vienna, Austria',
    date: 'February 2026',
    rating: 5,
    quote:
      'Finding Cafe Lake View was the highlight of our 3-week Rajasthan journey. Watching the golden sun sink into Pushkar Lake while sipping their single-origin V60 pour-over was pure meditation. The silence up here above the lively market is magical.',
    vibe: 'Sunset Pour-Over on Balcony',
  },
  {
    id: 'r2',
    author: 'Arjun & Mira Kapoor',
    origin: 'Bengaluru, India',
    date: 'January 2026',
    rating: 5,
    quote:
      'As serious coffee purists, we never expected such world-class specialty coffee in Pushkar. The saffron cortado and wood-fired avocado toast rival the best cafes in Melbourne and Tokyo. Remarkable hospitality and wabi-sabi aesthetics.',
    vibe: 'Specialty Coffee Lovers',
  },
  {
    id: 'r3',
    author: 'Marcus Lindqvist',
    origin: 'Stockholm, Sweden',
    date: 'March 2026',
    rating: 5,
    quote:
      'The rooftop seating with the low diwans and warm breeze has an energy you will remember forever. When the temple bells start chiming for the evening aarti across the water, time genuinely stands still.',
    vibe: 'Evening Aarti Experience',
  },
  {
    id: 'r4',
    author: 'Ananya Deshmukh',
    origin: 'Mumbai, India',
    date: 'December 2025',
    rating: 5,
    quote:
      'Clean, peaceful, delicious organic produce, and the kindest baristas. The mezze platter and the Basque cheesecake with saffron are out of this world. Booking our sunset table online in advance was effortless.',
    vibe: 'Sunset Table Reservation',
  },
];

export const PUSHKAR_GUIDELINES = [
  {
    title: 'Sacred Water Reverence',
    text: 'Pushkar Lake is revered across centuries. We invite guests to maintain a gentle, reflective volume while on the edge terraces.',
  },
  {
    title: 'Shoe-Free Rooftop Diwans',
    text: 'To honor traditional Rajasthani diwan culture and cleanliness, our cushioned carpet terraces are shoe-free zones with wooden cubbies at the stair entry.',
  },
  {
    title: 'Daily Golden Hour Aarti',
    text: 'Every evening at dusk (~6:00–6:30 PM), the holy ghats ring with brass bells and conch shells. Reserve your table at least 45 minutes prior for the best seat.',
  },
  {
    title: 'Walking from Brahma Temple',
    text: 'We are situated a brief 3-minute stroll down through the historic stone alleyways leading directly to the Varaha Ghat water edge.',
  },
];
