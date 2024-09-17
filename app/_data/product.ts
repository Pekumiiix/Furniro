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
];
