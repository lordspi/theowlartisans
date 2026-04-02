"use client"
const products = [
  {
    name: "Handwoven Rugs",
    desc: "Hand-knotted and hand-tufted rugs in natural wool, jute, cotton, and recycled materials. Each piece tells a story.",
    icon: "◈",
    tag: "Best Seller",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Artisan Poufs",
    desc: "Handcrafted poufs blending traditional Indian craft with contemporary form — perfect accent pieces for curated interiors.",
    icon: "◉",
    tag: "Trending",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Wall Art & Textiles",
    desc: "Woven wall hangings and textile art that elevate any space with texture, depth, and authentic artisan character.",
    icon: "◇",
    tag: "Designer Pick",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Throw Pillows",
    desc: "Versatile, hand-embroidered and block-printed cushion covers that add warmth and personality to any interior.",
    icon: "◎",
    tag: "Versatile",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Artisanal Lighting",
    desc: "Handcrafted pendant lamps and decorative lighting in natural fibers, metals, and terracotta for striking focal points.",
    icon: "◐",
    tag: "Statement Piece",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop",
  },
  {
    name: "Handcrafted Benches",
    desc: "Solid wood and cane benches with handwoven upholstery — functional art pieces for lobbies, bedrooms, and studios.",
    icon: "◑",
    tag: "Functional Art",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80&auto=format&fit=crop",
  },
];

export default function Products() {
  return (
    <section id="products" style={{ backgroundColor: "#FAF7F4" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ backgroundColor: "rgba(196,149,106,0.15)", color: "#8B6F47", fontFamily: "'Inter', sans-serif" }}
          >
            Our Collections
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}
          >
            Crafted for Discerning Spaces
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "#6B5744", fontFamily: "'Inter', sans-serif", fontWeight: 300, lineHeight: "1.8" }}
          >
            Every piece is handmade in India by master artisans using traditional techniques passed down through generations — responsibly sourced, endlessly beautiful.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(({ name, desc, tag, image }) => (
            <div
              key={name}
              className="group rounded-xl overflow-hidden transition-all duration-300"
              style={{ backgroundColor: "#fff", boxShadow: "0 2px 20px rgba(44,24,16,0.06)" }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 8px 40px rgba(44,24,16,0.14)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 20px rgba(44,24,16,0.06)")}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "#2C1810", color: "#C4956A", fontFamily: "'Inter', sans-serif" }}
                >
                  {tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}
                >
                  {name}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "#6B5744", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                >
                  {desc}
                </p>
                <a
                  href="#contact"
                  className="text-sm font-medium inline-flex items-center gap-1 transition-colors duration-200"
                  style={{ color: "#C4956A", fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#8B6F47")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#C4956A")}
                >
                  Request Samples →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
