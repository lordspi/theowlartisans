"use client"
const testimonials = [
  {
    quote: "The Owl Artisans transformed our hotel lobby project. The custom rugs arrived on time, exceeded our expectations in quality, and our clients were blown away by the provenance story.",
    name: "Priya Sharma",
    role: "Principal Interior Designer, Mumbai",
    initial: "PS",
  },
  {
    quote: "As an architect, I need suppliers I can trust completely. The craftsmanship is exceptional — every piece arrives exactly as promised, and the team is incredibly responsive.",
    name: "James Whitfield",
    role: "Design Architect, London",
    initial: "JW",
  },
  {
    quote: "The private label program allowed us to launch our own home collection under our studio brand. The quality, ethics, and process were everything we hoped for.",
    name: "Sophie Laurent",
    role: "Creative Director, Paris",
    initial: "SL",
  },
];

export default function Testimonials() {
  return (
    <section style={{ backgroundColor: "#2C1810" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ backgroundColor: "rgba(196,149,106,0.2)", color: "#C4956A", fontFamily: "'Inter', sans-serif", border: "1px solid rgba(196,149,106,0.3)" }}
          >
            Partner Stories
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: "#FAF7F4" }}
          >
            Trusted by Design Professionals
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, name, role, initial }) => (
            <div
              key={name}
              className="rounded-xl p-8"
              style={{ backgroundColor: "rgba(245,240,235,0.05)", border: "1px solid rgba(196,149,106,0.15)" }}
            >
              {/* Quote mark */}
              <div
                className="text-5xl leading-none mb-4"
                style={{ color: "#C4956A", fontFamily: "'Playfair Display', serif", opacity: 0.6 }}
              >
                "
              </div>
              <p
                className="text-base leading-relaxed mb-6"
                style={{ color: "rgba(245,240,235,0.8)", fontFamily: "'Inter', sans-serif", fontWeight: 300, fontStyle: "italic" }}
              >
                {quote}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ backgroundColor: "#C4956A", color: "#2C1810", fontFamily: "'Inter', sans-serif" }}
                >
                  {initial}
                </div>
                <div>
                  <div className="text-sm font-semibold" style={{ color: "#FAF7F4", fontFamily: "'Inter', sans-serif" }}>
                    {name}
                  </div>
                  <div className="text-xs" style={{ color: "rgba(196,149,106,0.8)", fontFamily: "'Inter', sans-serif" }}>
                    {role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
