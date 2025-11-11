/* eslint-disable @next/next/no-html-link-for-pages */
"use client";
import "./globals.css";
import { CartProvider, useCart } from "@/context/CartContext";

function Navbar() {
  const { cart } = useCart();
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <a href="/" className="font-bold text-xl">My Store</a>
      <a href="/checkout" className="font-medium">
        🛒 Cart ({cart.length})
      </a>
    </nav>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <CartProvider>
          <Navbar />
          {children}
          <footer className="text-center py-4 bg-white mt-10 border-t">
            © 2025 My Store
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
