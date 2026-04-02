"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#2C1810" }} className="fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="text-2xl font-bold tracking-wide" style={{ fontFamily: "'Playfair Display', serif", color: "#C4956A" }}>
            The Owl Artisans
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {["Products", "For Designers", "Process", "About", "Gallery"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "#F5F0EB", fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C4956A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#F5F0EB")}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded text-sm font-semibold transition-all duration-200"
            style={{ backgroundColor: "#C4956A", color: "#2C1810", fontFamily: "'Inter', sans-serif" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D4A574")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C4956A")}
          >
            Partner With Us
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5" style={{ backgroundColor: "#F5F0EB" }} />
          <span className="block w-6 h-0.5" style={{ backgroundColor: "#F5F0EB" }} />
          <span className="block w-6 h-0.5" style={{ backgroundColor: "#F5F0EB" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ backgroundColor: "#2C1810", borderTop: "1px solid #8B6F47" }} className="md:hidden px-6 pb-6 flex flex-col gap-4">
          {["Products", "For Designers", "Process", "About", "Gallery"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm font-medium"
              style={{ color: "#F5F0EB", fontFamily: "'Inter', sans-serif" }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded text-sm font-semibold text-center"
            style={{ backgroundColor: "#C4956A", color: "#2C1810", fontFamily: "'Inter', sans-serif" }}
            onClick={() => setMenuOpen(false)}
          >
            Partner With Us
          </a>
        </div>
      )}
    </nav>
  );
}
