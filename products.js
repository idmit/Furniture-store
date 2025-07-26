const categories = [
  { id: "sofas", name: "Диваны" },
  { id: "beds", name: "Кровати" },
  { id: "tables", name: "Столы" },
  { id: "chairs", name: "Кресла" },
  { id: "storage", name: "Шкафы и комоды" }
];

const products = [
  {
    id: 1,
    category: "sofas",
    title: "Диван Stockholm",
    price: 69900,
    image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80",
    description: "Современный и удобный диван с мягкой обивкой и подушками.",
    tags: ["Новинка", "Хит"],
    features: {
      "Габариты": "220×90×85 см",
      "Материал": "Велюр, массив дерева",
      "Цвет": "Серый",
      "Страна": "Россия"
    }
  },
  {
    id: 2,
    category: "sofas",
    title: "Диван Loft",
    price: 58900,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    description: "Лаконичный диван в стиле лофт для современной гостиной.",
    tags: ["Акция"],
    features: {
      "Габариты": "210×88×80 см",
      "Материал": "Ткань, металл",
      "Цвет": "Темно-серый",
      "Страна": "Польша"
    }
  },
  {
    id: 3,
    category: "beds",
    title: "Кровать Milano 160x200",
    price: 84900,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "Двуспальная кровать в итальянском стиле.",
    tags: ["Новинка"],
    features: {
      "Габариты": "170×215×110 см",
      "Материал": "Экокожа, ЛДСП",
      "Цвет": "Бежевый",
      "Страна": "Италия"
    }
  },
  {
    id: 4,
    category: "beds",
    title: "Кровать Oslo 140x200",
    price: 74900,
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    description: "Стильная кровать с высокой мягкой спинкой.",
    tags: [],
    features: {
      "Габариты": "150×210×105 см",
      "Материал": "Ткань, массив сосны",
      "Цвет": "Синий",
      "Страна": "Россия"
    }
  },
  {
    id: 5,
    category: "tables",
    title: "Обеденный стол Oslo",
    price: 34900,
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=600&q=80",
    description: "Минималистичный стол из массива дуба на 6 персон.",
    tags: ["Хит"],
    features: {
      "Габариты": "180×90×75 см",
      "Материал": "Массив дуба",
      "Цвет": "Светлый дуб",
      "Страна": "Беларусь"
    }
  },
  {
    id: 6,
    category: "tables",
    title: "Стол раскладной Berlin",
    price: 37900,
    image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=600&q=80",
    description: "Функциональный стол, который подойдет даже для небольшой кухни.",
    tags: [],
    features: {
      "Габариты": "120/180×80×76 см",
      "Материал": "ЛДСП, металл",
      "Цвет": "Белый",
      "Страна": "Германия"
    }
  },
  {
    id: 7,
    category: "chairs",
    title: "Кресло Relax",
    price: 24900,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    description: "Эргономичное кресло для отдыха и чтения.",
    tags: ["Новинка"],
    features: {
      "Габариты": "80×90×105 см",
      "Материал": "Велюр, металл",
      "Цвет": "Зеленый",
      "Страна": "Россия"
    }
  },
  {
    id: 8,
    category: "chairs",
    title: "Кресло Classic",
    price: 19900,
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80",
    description: "Классическое кресло с деревянными подлокотниками.",
    tags: ["Акция"],
    features: {
      "Габариты": "78×85×100 см",
      "Материал": "Ткань, дерево",
      "Цвет": "Бордовый",
      "Страна": "Россия"
    }
  },
  {
    id: 9,
    category: "storage",
    title: "Шкаф-купе Modern",
    price: 59900,
    image: "https://images.unsplash.com/photo-1470093851215-6244f01b6b60?auto=format&fit=crop&w=600&q=80",
    description: "Удобный шкаф-купе с зеркалами и вместительными полками.",
    tags: [],
    features: {
      "Габариты": "220×60×240 см",
      "Материал": "ЛДСП, зеркало",
      "Цвет": "Дуб сонома",
      "Страна": "Россия"
    }
  },
  {
    id: 10,
    category: "storage",
    title: "Комод Simple",
    price: 15900,
    image: "https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=600&q=80",
    description: "Компактный комод для спальни и гостиной.",
    tags: ["Хит"],
    features: {
      "Габариты": "90×45×80 см",
      "Материал": "ЛДСП",
      "Цвет": "Белый",
      "Страна": "Россия"
    }
  }
];