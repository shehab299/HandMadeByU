import { Product } from "@types";

export const products: Product[] = [
  {
    id: 1,
    name: "Handmade Ceramic Vase",
    price: 49.99,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Woven Wall Hanging",
    price: 89.99,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1595500381751-d940898d13a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Handcrafted Wooden Bowl",
    price: 34.99,
    rating: 4.8,
    image:
      "https://roaniris.co/cdn/shop/products/wild-olive-wood-bowl-sm-et5_b611b2fd-bfb1-4a02-a28e-4c1afb47d498_1800x1800.JPG?v=1720379883",
  },
  {
    id: 4,
    name: "Macramé Plant Hanger",
    price: 29.99,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
  },
];

export const detailedProduct = {
  id: 1,
  name: "Handmade Ceramic Vase",
  category: "Home Decor",
  price: 49.99,
  oldPrice: 69.99,
  rating: 4.9,
  reviews: 128,
  description:
    "Beautiful handcrafted ceramic vase, perfect for any modern home. Each piece is unique and made with attention to detail. The natural variations in the glaze make each vase one of a kind.",
  images: [
    "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1578749556039-b61c577d5be4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  ],
  sizes: ["S", "M", "L"],
};
