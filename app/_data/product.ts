interface ProductList {
  id: number;
  type: "normal" | "discount" | "new";
  productImage: string;
  name: string;
  description: string;
  newPrice: string;
  originalPrice: string;
  discount: string;
}

export const productList: ProductList[] = [
  {
    id: 1,
    type: "normal",
    productImage: "/assets/images/products/syltherine.png",
    name: "Syltherine",
    description: "Stylish cafe chair",
    newPrice: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    discount: "-30%",
  },
  {
    id: 2,
    type: "normal",
    productImage: "/assets/images/products/syltherine.png",
    name: "Leviosa",
    description: "Stylish cafe chair",
    newPrice: "",
    originalPrice: "Rp 2.500.000",
    discount: "",
  },
  {
    id: 3,
    type: "discount",
    productImage: "/assets/images/products/syltherine.png",
    name: "Lolito",
    description: "Luxury big sofa",
    newPrice: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "-50%",
  },
  {
    id: 4,
    type: "new",
    productImage: "/assets/images/products/syltherine.png",
    name: "Respira",
    description: "Outdoor bar table and stool",
    newPrice: "",
    originalPrice: "Rp 500.000",
    discount: "",
  },
  {
    id: 5,
    type: "normal",
    productImage: "/assets/images/products/syltherine.png",
    name: "Grifo",
    description: "Night lamp",
    newPrice: "",
    originalPrice: "Rp 1.500.000",
    discount: "",
  },
  {
    id: 6,
    type: "new",
    productImage: "/assets/images/products/syltherine.png",
    name: "Muggo",
    description: "Luxury sofa",
    newPrice: "",
    originalPrice: "Rp 150.000",
    discount: "",
  },
  {
    id: 7,
    type: "discount",
    productImage: "/assets/images/products/syltherine.png",
    name: "Pingky",
    description: "Luxury big sofa",
    newPrice: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    discount: "-50%",
  },
  {
    id: 8,
    type: "new",
    productImage: "/assets/images/products/syltherine.png",
    name: "Nico",
    description: "Luxury brown leather sofa",
    newPrice: "",
    originalPrice: "Rp 8.500.000",
    discount: "",
  },
];
