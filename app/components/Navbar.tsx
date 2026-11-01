"use client"
import { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
   
    <nav className="bg-[#4169E1] text-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="text-2xl font-bold">
          Millennium
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/" className="transition hover:text-teal-400">
            Home
          </Link>

          <Link href="/about" className="transition hover:text-teal-400">
            About
          </Link>

          <Link href="/products" className="transition hover:text-teal-400">
            Products
          </Link>

          <Link href="/contact" className="transition hover:text-teal-400">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-blue-400 px-6 pb-4 md:hidden">
          <a
            href="#"
            className="block py-3 hover:text-blue-200"
          >
            Home
          </a>

          <a
            href="#"
            className="block py-3 hover:text-blue-200"
          >
            About
          </a>

          <a
            href="#"
            className="block py-3 hover:text-blue-200"
          >
            Services
          </a>

          <a
            href="#"
            className="block py-3 hover:text-blue-200"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  </>
  );
}

export default Navbar;

