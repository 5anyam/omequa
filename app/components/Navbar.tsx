"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X, Zap } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-900 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-blue-950">
                Omequa
              </span>
              <span className="text-xs text-blue-500 font-medium tracking-widest block leading-none">
                LIFE SCIENCES
              </span>
            </div>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Products", "Science", "Reviews", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-600 hover:text-blue-700 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-full hover:bg-blue-50 transition-colors">
              <ShoppingCart className="w-5 h-5 text-slate-700" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-blue-600 rounded-full text-white text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <a
              href="#products"
              className="hidden md:inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg hover:shadow-blue-200 active:scale-95"
            >
              Shop Now
            </a>
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-5 h-5 text-slate-700" />
              ) : (
                <Menu className="w-5 h-5 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-blue-50 py-4 px-2">
            {["Products", "Science", "Reviews", "About"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg"
              >
                {item}
              </a>
            ))}
            <a
              href="#products"
              className="mt-2 flex items-center justify-center bg-blue-700 text-white text-sm font-semibold px-5 py-3 rounded-full"
            >
              Shop Now
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
