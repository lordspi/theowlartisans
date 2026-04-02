"use client"
const benefits = [
  {
    icon: "✦",
    title: "Exclusive Trade Pricing",
    desc: "Interior designers and architects receive preferential pricing directly from the factory — no middlemen, no markups.",
  },
  {
    icon: "✦",
    title: "No Minimum Order Quantities",
    desc: "Order exactly what your project needs. From single statement pieces to full-project sourcing — we accommodate all scales.",
  },
  {
    icon: "✦",
    title: "Custom Design & Bespoke Pieces",
    desc: "Collaborate with our artisans to create custom colorways, sizes, and patterns that match your exact vision.",
  },
  {
    icon: "✦",
    title: "Project-Based Support",
    desc: "A dedicated relationship manager guides you from inspiration to installation — available for every project.",
  },
  {
    icon: "✦",
    title: "Sample Library Access",
    desc: "Access curated sample kits of rugs, textiles, and materials — shipped to your studio for client presentations.",
  },
  {
    icon: "✦",
    title: "Private Label & Branding",
    desc: "Launch your own branded home collection. Private labeling available from select order volumes.",
  },
];

export default function ForDesigners() {
  return (
    <section id="for-designers" style={{ backgroundColor: "#2C1810" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ backgroundColor: "rgba(196,149,106,0.2)", color: "#C4956A", fontFamily: "'Inter', sans-serif", border: "1px solid rgba(196,149,106,0.3)" }}
          >
            Partnership Program
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#FAF7F4" }}
          >
            Built for Design Professionals
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "rgba(245,240,235,0.7)", fontFamily: "'Inter', sans-serif", fontWeight: 300, lineHeight: "1.8" }}
          >
            We understand that interior designers and architects need more than a supplier — you need a creative partner who delivers on vision, quality, and reliability.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map(({ title, desc }) => (
            <div
              key={title}
              className="rounded-xl p-6 transition-all duration-300"
              style={{ backgroundColor: "rgba(245,240,235,0.05)", border: "1px solid rgba(196,149,106,0.15)" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(196,149,106,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "rgba(245,240,235,0.05)")}
            >
              <div
                className="text-xl mb-3"
                style={{ color: "#C4956A" }}
              >
                ✦
              </div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ fontFamily: "'Playfair Display', serif", color: "#FAF7F4" }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(245,240,235,0.6)", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          className="rounded-2xl p-10 text-center"
          style={{ backgroundColor: "rgba(196,149,106,0.15)", border: "1px solid rgba(196,149,106,0.3)" }}
        >
          <h3
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif", color: "#FAF7F4" }}
          >
            Ready to elevate your projects?
          </h3>
          <p
            className="text-base mb-8"
            style={{ color: "rgba(245,240,235,0.7)", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            Join our growing network of designers and architects who source authentic Indian craft through The Owl Artisans.
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 rounded text-sm font-semibold transition-all duration-300"
            style={{ backgroundColor: "#C4956A", color: "#2C1810", fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D4A574")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C4956A")}
          >
            Apply for Trade Account
          </a>
        </div>
      </div>
    </section>
  );
}
