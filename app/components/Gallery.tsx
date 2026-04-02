"use client"
const images = [
  { src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80&auto=format&fit=crop", alt: "Handwoven rug detail" },
  { src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80&auto=format&fit=crop", alt: "Artisan pouf" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop", alt: "Textile wall art" },
  { src: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80&auto=format&fit=crop", alt: "Throw pillows" },
  { src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80&auto=format&fit=crop", alt: "Handcrafted bench" },
  { src: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80&auto=format&fit=crop", alt: "Interior design space" },
];

export default function Gallery() {
  return (
    <section id="gallery" style={{ backgroundColor: "#F5F0EB" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ backgroundColor: "rgba(44,24,16,0.08)", color: "#8B6F47", fontFamily: "'Inter', sans-serif" }}
          >
            Gallery
          </div>
          <h2
            className="text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}
          >
            The Craft in Detail
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map(({ src, alt }, i) => (
            <div
              key={i}
              className={`overflow-hidden rounded-xl ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
              style={{ aspectRatio: i === 0 ? "auto" : "1", height: i === 0 ? "400px" : "190px" }}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
