"use client"
export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        background: "linear-gradient(135deg, #2C1810 0%, #4A2C1A 40%, #6B4423 100%)",
        minHeight: "100vh",
        paddingTop: "80px",
      }}
      className="relative flex items-center overflow-hidden"
    >
      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4956A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
              style={{ backgroundColor: "rgba(196,149,106,0.2)", color: "#C4956A", fontFamily: "'Inter', sans-serif", border: "1px solid rgba(196,149,106,0.4)" }}
            >
              For Interior Designers & Architects
            </div>
            <h1
              className="text-5xl md:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: "#FAF7F4" }}
            >
              Artisan Craftsmanship,{" "}
              <span style={{ color: "#C4956A" }}>Direct from the Source</span>
            </h1>
            <p
              className="text-lg mb-4"
              style={{ color: "rgba(245,240,235,0.8)", fontFamily: "'Inter', sans-serif", fontWeight: 300, lineHeight: "1.8" }}
            >
              We create responsibly handcrafted Indian home fashion — rugs, textiles, and decor — exclusively sourced for design professionals who demand authenticity.
            </p>
            <p
              className="text-base mb-10"
              style={{ color: "rgba(196,149,106,0.9)", fontFamily: "'Inter', sans-serif", fontWeight: 400, fontStyle: "italic" }}
            >
              Artful. Ethical. Elevated.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-8 py-4 rounded text-sm font-semibold text-center transition-all duration-300"
                style={{ backgroundColor: "#C4956A", color: "#2C1810", fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D4A574")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C4956A")}
              >
                Start Your Partnership →
              </a>
              <a
                href="#products"
                className="px-8 py-4 rounded text-sm font-semibold text-center transition-all duration-300"
                style={{ border: "1px solid rgba(196,149,106,0.6)", color: "#F5F0EB", fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(196,149,106,0.1)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; }}
              >
                Explore Collection
              </a>
            </div>
          </div>

          {/* Right: Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "15+", label: "Years of Craft" },
              { number: "30+", label: "Countries Served" },
              { number: "500+", label: "Design Partners" },
              { number: "10K+", label: "Custom Pieces" },
            ].map(({ number, label }) => (
              <div
                key={label}
                className="rounded-lg p-6 text-center"
                style={{ backgroundColor: "rgba(245,240,235,0.06)", border: "1px solid rgba(196,149,106,0.2)", backdropFilter: "blur(10px)" }}
              >
                <div
                  className="text-4xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#C4956A" }}
                >
                  {number}
                </div>
                <div
                  className="text-sm"
                  style={{ color: "rgba(245,240,235,0.7)", fontFamily: "'Inter', sans-serif" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs tracking-widest" style={{ color: "rgba(196,149,106,0.6)", fontFamily: "'Inter', sans-serif" }}>SCROLL</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4v12M4 10l6 6 6-6" stroke="#C4956A" strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
