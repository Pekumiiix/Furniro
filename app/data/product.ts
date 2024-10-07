interface ProductList {
  id: number;
  type: "normal" | "discount" | "new";
  productImage: string;
  name: string;
  description: string;
  newPrice?: number;
  originalPrice: number;
  discount?: string;
}

export const productList: ProductList[] = [
  {
    id: 1,
    type: "discount",
    productImage: "/assets/images/products/syltherine.png",
    name: "Syltherine",
    description: "Stylish cafe chair",
    newPrice: 2500000,
    originalPrice: 3500000,
    discount: "-30%",
  },
  {
    id: 2,
    type: "normal",
    productImage: "/assets/images/products/syltherine.png",
    name: "Leviosa",
    description: "Stylish cafe chair",
    originalPrice: 2500000,
    discount: "",
  },
  {
    id: 3,
    type: "discount",
    productImage: "/assets/images/products/syltherine.png",
    name: "Lolito",
    description: "Luxury big sofa",
    newPrice: 7000000,
    originalPrice: 14000000,
    discount: "-50%",
  },
  {
    id: 4,
    type: "new",
    productImage: "/assets/images/products/syltherine.png",
    name: "Respira",
    description: "Outdoor bar table and stool",
    originalPrice: 500000,
  },
  {
    id: 5,
    type: "normal",
    productImage: "/assets/images/products/syltherine.png",
    name: "Grifo",
    description: "Night lamp",
    originalPrice: 1500000,
  },
  {
    id: 6,
    type: "new",
    productImage: "/assets/images/products/syltherine.png",
    name: "Muggo",
    description: "Luxury sofa",
    originalPrice: 150000,
  },
  {
    id: 7,
    type: "discount",
    productImage: "/assets/images/products/syltherine.png",
    name: "Pingky",
    description: "Luxury big sofa",
    newPrice: 7000000,
    originalPrice: 14000000,
    discount: "-50%",
  },
  {
    id: 8,
    type: "new",
    productImage: "/assets/images/products/syltherine.png",
    name: "Nico",
    description: "Luxury brown leather sofa",
    originalPrice: 8500000,
  },
  {
    id: 9,
    type: "discount",
    productImage: "/assets/images/products/syltherine.png",
    name: "Zenith",
    description: "Stylish cafe chair",
    newPrice: 453017,
    originalPrice: 696950,
    discount: "-35%",
  },
  {
    id: 10,
    type: "new",
    productImage: "/assets/images/products/syltherine.png",
    name: "Aurora",
    description: "Stylish cafe chair",
    originalPrice: 2500000,
  },
  {
    id: 11,
    type: "discount",
    productImage: "/assets/images/products/syltherine.png",
    name: "Lumina",
    description: "Luxury big sofa",
    newPrice: 2631138,
    originalPrice: 3555592,
    discount: "-26%",
  },
  {
    id: 12,
    type: "new",
    productImage: "/assets/images/products/syltherine.png",
    name: "Vega",
    description: "Outdoor bar table and stool",
    newPrice: 1009405,
    originalPrice: 1173727,
    discount: "-14%",
  },
  {
    id: 13,
    type: "normal",
    productImage: "/assets/images/products/syltherine.png",
    name: "Nebulla",
    description: "Night lamp",
    originalPrice: 2711617,
  },
  {
    id: 14,
    type: "new",
    productImage: "/assets/images/products/syltherine.png",
    name: "Stella",
    description: "Luxury sofa",
    originalPrice: 3054913,
  },
  {
    id: 15,
    type: "discount",
    productImage: "/assets/images/products/syltherine.png",
    name: "Orion",
    description: "Luxury big sofa",
    newPrice: 5680948,
    originalPrice: 6683469,
    discount: "-15%",
  },
  {
    id: 16,
    type: "normal",
    productImage: "/assets/images/products/syltherine.png",
    name: "Cassius",
    description: "Luxury brown leather sofa",
    originalPrice: 4311297,
  },
  {
    id: 17,
    type: "discount",
    productImage: "/assets/images/products/syltherine.png",
    name: "Mercury",
    description: "Stylish cafe chair",
    newPrice: 6119467,
    originalPrice: 8051931,
    discount: "-24%",
  },
  {
    id: 18,
    type: "normal",
    productImage: "/assets/images/products/syltherine.png",
    name: "Neptune",
    description: "Stylish cafe chair",
    originalPrice: 2740745,
  },
  {
    id: 19,
    type: "discount",
    productImage: "/assets/images/products/syltherine.png",
    name: "Sirious",
    description: "Luxury big sofa",
    newPrice: 1983514,
    originalPrice: 3140435,
    discount: "-37%",
  },
  {
    id: 20,
    type: "discount",
    productImage: "/assets/images/products/syltherine.png",
    name: "Altair",
    description: "Outdoor bar table and stool",
    newPrice: 3497632,
    originalPrice: 4427372,
    discount: "-21%",
  },
  {
    id: 21,
    type: "normal",
    productImage: "/assets/images/products/syltherine.png",
    name: "Andromeda",
    description: "Night lamp",
    originalPrice: 7042337,
  },
  {
    id: 22,
    type: "new",
    productImage: "/assets/images/products/syltherine.png",
    name: "Polaris",
    description: "Luxury sofa",
    originalPrice: 757000,
  },
  {
    id: 23,
    type: "discount",
    productImage: "/assets/images/products/syltherine.png",
    name: "Lyria",
    description: "Luxury big sofa",
    newPrice: 2554116,
    originalPrice: 4911762,
    discount: "-48%",
  },
  {
    id: 24,
    type: "normal",
    productImage: "/assets/images/products/syltherine.png",
    name: "Rigel",
    description: "Luxury brown leather sofa",
    originalPrice: 4611458,
  },
  {
    id: 25,
    type: "discount",
    productImage: "/assets/images/products/syltherine.png",
    name: "Capella",
    description: "Stylish cafe chair",
    newPrice: 5599789,
    originalPrice: 6291898,
    discount: "-11%",
  },
  {
    id: 26,
    type: "new",
    productImage: "/assets/images/products/syltherine.png",
    name: "Antares",
    description: "Stylish cafe chair",
    originalPrice: 923349,
  },
  {
    id: 27,
    type: "new",
    productImage: "/assets/images/products/syltherine.png",
    name: "Aldebaran",
    description: "Luxury big sofa",
    originalPrice: 5527963,
  },
  {
    id: 28,
    type: "discount",
    productImage: "/assets/images/products/syltherine.png",
    name: "Betelgeuse",
    description: "Outdoor bar table and stool",
    newPrice: 3619247,
    originalPrice: 6500450,
    discount: "-45%",
  },
  {
    id: 29,
    type: "discount",
    productImage: "/assets/images/products/syltherine.png",
    name: "Deneb",
    description: "Night lamp",
    newPrice: 2518263,
    originalPrice: 5596149,
    discount: "-55%",
  },
  {
    id: 30,
    type: "normal",
    productImage: "/assets/images/products/syltherine.png",
    name: "Vulcan",
    description: "Luxury sofa",
    originalPrice: 4754826,
  },
  {
    id: 31,
    type: "discount",
    productImage: "/assets/images/products/syltherine.png",
    name: "Quasar",
    description: "Luxury big sofa",
    newPrice: 3898392,
    originalPrice: 5062847,
    discount: "-23%",
  },
  {
    id: 32,
    type: "new",
    productImage: "/assets/images/products/syltherine.png",
    name: "Lyria",
    description: "Luxury brown leather sofa",
    originalPrice: 9604967,
  },
];

/*interface ProductList {
  id: number;
  type: "normal" | "discount" | "new";
  productImage: string;
  name: string;
  description: string;
  newPrice?: number;
  originalPrice: number;
  discount?: string;
}

const productNames: string[] = [
  "Syltherine",
  "Leviosa",
  "Lolito",
  "Respira",
  "Grifo",
  "Muggo",
  "Pingky",
  "Nico",
  "Zenith",
  "Aurora",
  "Lumina",
  "Vega",
  "Nebula",
  "Stella",
  "Orion",
  "Cassio",
  "Atlas",
  "Mercury",
  "Neptune",
  "Sirius",
  "Altair",
  "Andromeda",
  "Polaris",
  "Lyra",
  "Rigel",
  "Capella",
  "Antares",
  "Aldebaran",
  "Betelgeuse",
  "Deneb",
  "Vulcan",
  "Quasar",
];

export const productList: ProductList[] = Array.from(
  { length: 32 },
  (_, index) => {
    const isDiscount = Math.random() > 0.5;
    const discount = isDiscount ? Math.floor(Math.random() * 50 + 10) : 1; // Random discount between 10% and 50%
    const originalPrice = Math.floor(Math.random() * 10000000) + 500000; // Random price between 500k and 10m
    const newPrice = isDiscount
      ? Math.floor(originalPrice * (1 - discount / 100))
      : undefined; // New price is 20% off if discounted
    const type = isDiscount
      ? "discount"
      : Math.random() > 0.5
      ? "normal"
      : "new";

    return {
      id: index + 1,
      type: type,
      productImage: "/assets/images/products/syltherine.png",
      name: productNames[index],
      description: "Stylish furniture piece",
      newPrice: newPrice,
      originalPrice: originalPrice,
      discount: "-" + discount + "%",
    };
  }
); **/
