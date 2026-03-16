import productTeeBlack from "@/assets/product-tee-black.jpg";
import productTeeWhite from "@/assets/product-tee-white.jpg";
import productHoodieAsh from "@/assets/product-hoodie-ash.jpg";
import productHoodieWine from "@/assets/product-hoodie-wine.jpg";
import productHoodieCream from "@/assets/product-hoodie-cream.jpg";
import productSleevelessGreen from "@/assets/product-sleeveless-green.jpg";
import productSleevelessBlack from "@/assets/product-sleeveless-black.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "graphic-tees" | "hoodies" | "sleeveless-hoodies";
  image: string;
  colors: string[];
  sizes: string[];
  description: string;
  specs: string;
  isNew?: boolean;
};

export const products: Product[] = [
  {
    id: "gt-001",
    name: "Essential Oversized Tee",
    price: 85,
    category: "graphic-tees",
    image: productTeeBlack,
    colors: ["#111", "#fff", "#8B8B8B", "#722F37", "#4B5320", "#F5F5DC"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "450GSM heavyweight cotton. Oversized fit. Built for the city.",
    specs: "450GSM · 100% Cotton · Designed in Accra",
    isNew: true,
  },
  {
    id: "gt-002",
    name: "Geometric Print Tee",
    price: 95,
    category: "graphic-tees",
    image: productTeeWhite,
    colors: ["#fff", "#111", "#8B8B8B"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Abstract geometric print on premium heavyweight cotton. Statement piece.",
    specs: "400GSM · 100% Cotton · Screen Printed",
  },
  {
    id: "hd-001",
    name: "Heavyweight Pullover Hoodie",
    price: 150,
    category: "hoodies",
    image: productHoodieAsh,
    colors: ["#8B8B8B", "#111", "#722F37", "#F5F5DC"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "500GSM brushed fleece. Kangaroo pocket. Relaxed drop shoulder.",
    specs: "500GSM · Brushed Fleece · Ribbed Cuffs",
    isNew: true,
  },
  {
    id: "hd-002",
    name: "Wine Essential Hoodie",
    price: 150,
    category: "hoodies",
    image: productHoodieWine,
    colors: ["#722F37", "#111", "#8B8B8B", "#4B5320"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Deep wine colorway. Premium brushed fleece interior. Heavyweight.",
    specs: "500GSM · Brushed Fleece · YKK Drawcords",
  },
  {
    id: "hd-003",
    name: "Cream Cloud Hoodie",
    price: 160,
    category: "hoodies",
    image: productHoodieCream,
    colors: ["#F5F5DC", "#111", "#8B8B8B"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Soft cream colorway. Double-layered hood. Premium construction.",
    specs: "480GSM · French Terry · Double-Stitched",
    isNew: true,
  },
  {
    id: "sl-001",
    name: "Tactical Sleeveless Hoodie",
    price: 120,
    category: "sleeveless-hoodies",
    image: productSleevelessGreen,
    colors: ["#4B5320", "#111", "#8B8B8B", "#722F37"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Army green sleeveless hoodie. Raw-edge armholes. Street-ready.",
    specs: "420GSM · Cotton Blend · Raw Edge",
  },
  {
    id: "sl-002",
    name: "Stealth Sleeveless Hoodie",
    price: 120,
    category: "sleeveless-hoodies",
    image: productSleevelessBlack,
    colors: ["#111", "#8B8B8B", "#4B5320"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "All-black sleeveless hoodie. Oversized cut. Night-mode essential.",
    specs: "420GSM · Cotton Blend · Kangaroo Pocket",
    isNew: true,
  },
];

export const categories = [
  { id: "graphic-tees", name: "Graphic Tees", count: 2 },
  { id: "hoodies", name: "Hoodies", count: 3 },
  { id: "sleeveless-hoodies", name: "Sleeveless Hoodies", count: 2 },
] as const;
