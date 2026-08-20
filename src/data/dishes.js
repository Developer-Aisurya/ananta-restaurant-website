
export const MENU_CATEGORIES = [
  { id: "starters", label: "Starters" },
  { id: "tandoor", label: "Tandoor" },
  { id: "vegetarian", label: "Vegetarian Mains" },
  { id: "non-vegetarian", label: "Non-Vegetarian Mains" },
  { id: "regional", label: "Regional Specialties" },
  { id: "breads", label: "Breads" },
  { id: "rice-biryani", label: "Rice & Biryani" },
  { id: "desserts", label: "Desserts" },
  { id: "beverages", label: "Beverages" },
];

export const DISHES = [
  {
    id: "d1",
    name: "Amritsari Fish Tikka",
    category: "starters",
    veg: false,
    spice: 2,
    price: "₹690",
    description:
      "Basa fillets marinated in carom seed, gram flour and ginger, seared in the tandoor till the crust crackles.",
    image:
      "/amritsari-fish-tikka.png",
  },
  {
    id: "d2",
    name: "Dahi Ke Sholay",
    category: "starters",
    veg: true,
    spice: 1,
    price: "₹450",
    description:
      "Hung curd and cream cheese rolled in crisp pastry, fried to a whisper-light shell, finished with tamarind.",
    image:
      "/dahi-ke-sholay.png",
  },
  {
    id: "d3",
    name: "Tandoori Prawns Malwani",
    category: "tandoor",
    veg: false,
    spice: 3,
    price: "₹920",
    description:
      "Coastal prawns in a Malwani chile-coconut marinade, char-grilled over coal for a smoked, briny finish.",
    image:
      "/tandoori-prawns-malwani.png",
  },
  {
    id: "d4",
    name: "Murgh Malai Kebab",
    category: "tandoor",
    veg: false,
    spice: 1,
    price: "₹680",
    description:
      "Chicken thigh steeped in cream, cashew and green cardamom, kissed by fire until silken at the centre.",
    image:
      "/murgh-malai-kebab.png",
  },
  {
    id: "d5",
    name: "Tandoori Gobhi",
    category: "tandoor",
    veg: true,
    spice: 2,
    price: "₹520",
    description:
      "Whole cauliflower rubbed with Kashmiri chile and hung curd, roasted slowly until the edges caramelise.",
    image:
      "/tandoori-gobhi.png",
  },
  {
    id: "d6",
    name: "Paneer Lababdar",
    category: "vegetarian",
    veg: true,
    spice: 1,
    price: "₹560",
    description:
      "Housemade paneer simmered in a velvet tomato-cashew gravy, tempered with kasuri methi and fresh cream.",
    image:
      "/src/assets/panner-lababdar.png",
  },
  {
    id: "d7",
    name: "Dal Ananta",
    category: "vegetarian",
    veg: true,
    spice: 1,
    price: "₹480",
    description:
      "Black lentils, slow-simmered for eighteen hours over embers, enriched with butter and a whisper of smoke.",
    image:
      "/src/assets/dal-ananta.png",
  },
  {
    id: "d8",
    name: "Avial",
    category: "vegetarian",
    veg: true,
    spice: 1,
    price: "₹440",
    description:
      "Kerala's harvest medley — mixed vegetables in coconut and raw mango, finished with cold-pressed coconut oil.",
    image:
      "/src/assets/avial.png",
  },
  {
    id: "d9",
    name: "Butter Chicken",
    category: "non-vegetarian",
    veg: false,
    spice: 1,
    price: "₹720",
    description:
      "The Delhi classic — tandoor-charred chicken folded into a tomato-butter gravy, born of Partition-era kitchens.",
    image:
      "/src/assets/butter-chicken.png",
  },
  {
    id: "d10",
    name: "Laal Maas",
    category: "non-vegetarian",
    veg: false,
    spice: 3,
    price: "₹840",
    description:
      "A Rajasthani hunter's curry — mutton braised with Mathania chiles and garlic until deeply, fiercely red.",
    image:
      "/src/assets/laal-maas.png",
  },
  {
    id: "d11",
    name: "Chettinad Chicken",
    category: "regional",
    veg: false,
    spice: 3,
    price: "₹760",
    description:
      "Tamil Nadu's peppercorn-and-star-anise masterpiece, roasted whole spices ground fresh with every batch.",
    image:
      "/src/assets/chettinad-chicken.png",
  },
  {
    id: "d12",
    name: "Bengali Shorshe Ilish",
    category: "regional",
    veg: false,
    spice: 2,
    price: "₹980",
    description:
      "Hilsa steamed in a mustard-seed paste and green chile, wrapped in banana leaf — a Bengal monsoon ritual.",
    image:
      "/src/assets/bengali-shorshe-ilish.png",
  },
  {
    id: "d13",
    name: "Gujarati Undhiyu",
    category: "regional",
    veg: true,
    spice: 1,
    price: "₹520",
    description:
      "A winter harvest of root vegetables and fenugreek dumplings, slow-cooked upside down in a clay matka.",
    image:
      "/src/assets/gujarati-undhiyu.png",
  },
  {
    id: "d14",
    name: "Tandoori Roti",
    category: "breads",
    veg: true,
    spice: 0,
    price: "₹90",
    description: "Whole wheat, hand-pressed and puffed to order in our clay oven.",
    image:
      "/src/assets/tandoori-roti.png",
  },
  {
    id: "d15",
    name: "Laccha Paratha",
    category: "breads",
    veg: true,
    spice: 0,
    price: "₹140",
    description: "Layered, flaky and ghee-brushed, folded by hand into a coiled tower before rolling.",
    image:
      "/src/assets/laccha-paratha.png",
  },
  {
    id: "d16",
    name: "Kashmiri Naan",
    category: "breads",
    veg: true,
    spice: 0,
    price: "₹180",
    description: "Stuffed with cherries, almonds and coconut — a festive bread from the Valley.",
    image:
      "/src/assets/kashmiri-naan.png",
  },
  {
    id: "d17",
    name: "Hyderabadi Biryani",
    category: "rice-biryani",
    veg: false,
    spice: 2,
    price: "₹820",
    description:
      "Mutton and basmati layered dum-style, sealed in dough and finished with saffron and fried onion.",
    image:
      "/src/assets/hyderabadi-biryani.png",
  },
  {
    id: "d18",
    name: "Lucknowi Vegetable Biryani",
    category: "rice-biryani",
    veg: true,
    spice: 1,
    price: "₹620",
    description:
      "Awadhi-style dum biryani of seasonal vegetables, perfumed with kewra and whole garam masala.",
    image:
      "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "d19",
    name: "Gulab Jamun",
    category: "desserts",
    veg: true,
    spice: 0,
    price: "₹280",
    description: "Milk-solid dumplings fried to a deep amber and soaked in cardamom-rose syrup.",
    image:
      "/src/assets/gulab-jamun.png",
  },
  {
    id: "d20",
    name: "Bengal Mishti Doi",
    category: "desserts",
    veg: true,
    spice: 0,
    price: "₹260",
    description: "Caramelised jaggery yoghurt, set slow in earthen clay pots overnight.",
    image:
      "/src/assets/bengal-mishti-doi.png",
  },
  {
    id: "d21",
    name: "Masala Chai",
    category: "beverages",
    veg: true,
    spice: 0,
    price: "₹180",
    description: "Assam leaf tea, simmered with ginger, cardamom and clove — poured tableside.",
    image:
      "/src/assets/masala-chai.png",
  },
  {
    id: "d22",
    name: "Jodhpuri Jaljeera",
    category: "beverages",
    veg: true,
    spice: 1,
    price: "₹220",
    description: "A sharp desert cooler of roasted cumin, mint and black salt, served over crushed ice.",
    image:
      "/src/assets/jodhpuri-jaljeera.png",
  },
];
