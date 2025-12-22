export interface Product {
  id: string | number; // Unique identifier (could be string or number)
  name: string; // Title or name of the product
  sizes: string[] | { id: number; value: string }[]; // Array of sizes or related size objects
  price: number; // Original price of the product
  discountPrice?: number; // Optional sale price or discount amount
  imageUrl: string | string[]; // URL/path to product image(s)
  description: string; // Detailed product description
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White Shoe",
    sizes: ["3", "4", "5", "6"],
    price: 19.99,
    discountPrice: 14.99,
    imageUrl: "/products/white-shoe.png",
    description: "A classic white shoe. Perfect for everyday wear.",
  },
  {
    id: 2,
    name: "Blue Shoe",
    sizes: ["3", "4", "5", "6"],
    price: 24.99,
    imageUrl: "/products/blue-shoe.png",
    description: "A stylish blue shoe for casual outings.",
  },
  {
    id: 3,
    name: "Red Running Shoe",
    sizes: ["4", "5", "6", "7"],
    price: 49.99,
    discountPrice: 39.99,
    imageUrl: ["/products/red-running-shoe-1.png", "/products/red-running-shoe-2.jpg"],
    description: "A vibrant red running shoe designed for performance.",
  },
];