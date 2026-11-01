"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const products = [
  { id: 1, name: "Classic 2 Piece Suit", category: "clothing - Millennium Studio", price: "N480,000", image: "/3rd pic.jpg" },
  { id: 2, name: "Essential Brown Suit", category: "clothing - Millennium Studio", price: "N320,000", image: "/1st pic.jpg" },
  { id: 3, name: "Modern Hoodie", category: "clothing - Millennium Studio", price: "N68,000", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Street Sneakers", category: "footwear - Millennium Studio", price: "N95,000", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "White Trainers", category: "footwear - Millennium Studio", price: "N110,000", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80" },
  { id: 6, name: "Leather Boots", category: "footwear - Millennium Studio", price: "N100,000", image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=800&q=80" },
  { id: 7, name: "Everyday Watch", category: "accessories - Millennium Studio", price: "N125,000", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80" },
  { id: 8, name: "Classic Sunglasses", category: "accessories - Millennium Studio", price: "N25,000", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80" },
  { id: 9, name: "Exclusive Accessories", category: "accessories - Millennium Studio", price: "N60,000", image: "/7th pic.jpg" },
  { id: 10, name: "Designer's Shoe", category: "Footwear - Millennium Studio", price: "N85,000", image: "/5th pic.jpg" },
  { id: 11, name: "Quality Footwear", category: "Footwear - Millennium Studio", price: "N95,000", image: "/8th pic.jpg" },
  { id: 12, name: "Exclusive Viena", category: "Footwear - Millennium Studio", price: "N90,000", image: "/9th pic.jpg" },
];

export default function Page() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = (activeCategory === "all"
    ? products
    : products.filter((product) => product.category.startsWith(activeCategory)
    )).slice(0, 12);

  return (
    <main>
      <Navbar />
      <div>
        <div className="container py-10 px-10">
          <p className="text-teal-500">MILLENNIUM</p>
          <h1 className="font-bold text-7xl font-serif">All Products</h1>
          <p>{filteredProducts.length} items</p>
        </div>
        <hr />

        <div className="container px-10 py-6">
          <div className="flex gap-4 flex-wrap items-center">
            <input
              type="text"
              placeholder="search products"
              className="w-full flex-1 rounded border px-6 py-4 text-lg"
            />
            <select className="rounded border py-4 px-4 text-lg" defaultValue="Featured">
              <option value="Featured">Featured</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          <div className="flex gap-3 mt-6">
            {["all", "clothing", "footwear", "accessories"].map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`border px-5 py-2 uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-teal-500 text-white border-teal-500 shadow-md"
                    : "bg-white hover:bg-teal-500 hover:text-white hover:border-teal-500 hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="container px-10 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <article key={product.id} className="group overflow-hidden rounded-lg border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-teal-500 hover:shadow-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm capitalize text-gray-500">{product.category}</p>
                      <h2 className="font-bold text-lg">{product.name}</h2>
                    </div>
                    <p className="font-semibold text-teal-600">{product.price}</p>
                  </div>
                  <Link
                    href="/checkout"
                    className="mt-4 block w-full rounded bg-teal-500 px-4 py-3 text-center font-semibold text-white transition hover:bg-teal-600"
                  >
                    Add to Cart
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <hr className="h-px border-0 bg-blue-800" />
      <Footer />
    </main>
  )
}
