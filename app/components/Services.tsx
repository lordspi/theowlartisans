"use client"
const services = [
  {
    title: "Professional Photography",
    desc: "Every piece photographed in-house by our product photography team — crisp, editorial-quality images ready for your presentations and client proposals.",
    icon: "📷",
  },
  {
    title: "Global Logistics",
    desc: "We coordinate end-to-end shipping from our factory floor to your project site. Consolidated shipments, customs documentation, and last-mile delivery.",
    icon: "🌍",
  },
  {
    title: "Content & Behind-the-Scenes",
    desc: "Get factory footage, artisan stories, and process videos to share the craft journey with your clients — adding provenance and value to every piece.",
    icon: "🎬",
  },
  {
    title: "Private Label & Branding",
    desc: "Launch your own branded collection with our private label program. Custom swing tags, packaging, and certificates of authenticity from $250.",
    icon: "🏷️",
  },
];

export default function Services() {
  return (
    <section style={{ backgroundColor: "#FAF7F4" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ backgroundColor: "rgba(196,149,106,0.15)", color: "#8B6F47", fontFamily: "'Inter', sans-serif" }}
            >
              Beyond the Product
            </div>
            <h2
              className="text-4xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}
            >
              Services That Support Your Practice
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#6B5744", fontFamily: "'Inter', sans-serif", fontWeight: 300, lineHeight: "1.9" }}
            >
              We go beyond being a product supplier. The Owl Artisans is a full creative and logistics partner — helping you source, present, and deliver artisan pieces to your clients with confidence.
            </p>

            {/* Certification */}
            <div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-lg"
              style={{ backgroundColor: "rgba(44,24,16,0.06)", border: "1px solid rgba(44,24,16,0.1)" }}
            >
              <span className="text-2xl">🏆</span>
              <div>
                <div className="text-sm font-semibold" style={{ color: "#2C1810", fontFamily: "'Inter', sans-serif" }}>
                  Great Place to Work Certified
                </div>
                <div className="text-xs" style={{ color: "#8B6F47", fontFamily: "'Inter', sans-serif" }}>
                  Ethical manufacturing & fair trade practices
                </div>
              </div>
            </div>
          </div>

          {/* Right: Services List */}
          <div className="flex flex-col gap-6">
            {services.map(({ title, desc, icon }) => (
              <div
                key={title}
                className="flex gap-4 p-5 rounded-xl transition-all duration-300"
                style={{ backgroundColor: "#fff", boxShadow: "0 1px 12px rgba(44,24,16,0.05)" }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 24px rgba(44,24,16,0.10)")}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 1px 12px rgba(44,24,16,0.05)")}
              >
                <div className="text-2xl flex-shrink-0 mt-0.5">{icon}</div>
                <div>
                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#6B5744", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
