"use client"
const steps = [
  {
    number: "01",
    title: "Tell Us About Your Project",
    desc: "Share your project brief, aesthetic direction, material preferences, and timelines. The more detail, the better we can serve you.",
    detail: "Fill out our partner inquiry form or email us directly at team@theowlartisans.com",
  },
  {
    number: "02",
    title: "Receive a Curated Presentation",
    desc: "Our team handpicks pieces and custom options from our factory floor — tailored specifically to your project's vision and budget.",
    detail: "You'll receive a digital lookbook with pricing, lead times, and customization options within 48 hours.",
  },
  {
    number: "03",
    title: "Approve & We Create",
    desc: "Once you confirm your selections, our master artisans begin crafting. We handle logistics, quality control, and delivery.",
    detail: "Full transparency throughout production with factory updates and pre-shipment quality photos.",
  },
];

export default function HowItWorks() {
  return (
    <section id="process" style={{ backgroundColor: "#F5F0EB" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ backgroundColor: "rgba(44,24,16,0.08)", color: "#8B6F47", fontFamily: "'Inter', sans-serif" }}
          >
            Our Process
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}
          >
            Simple. Transparent. Reliable.
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "#6B5744", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
          >
            From first conversation to final installation — we make sourcing artisan pieces effortless for design professionals.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden md:block absolute top-12 left-1/6 right-1/6 h-px"
            style={{ backgroundColor: "rgba(196,149,106,0.3)" }}
          />

          {steps.map(({ number, title, desc, detail }) => (
            <div key={number} className="relative">
              {/* Number circle */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0"
                  style={{ backgroundColor: "#2C1810", color: "#C4956A", fontFamily: "'Playfair Display', serif" }}
                >
                  {number}
                </div>
                <div className="hidden md:block flex-1 h-px" style={{ backgroundColor: "rgba(196,149,106,0.3)" }} />
              </div>

              <h3
                className="text-xl font-semibold mb-3"
                style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}
              >
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: "#6B5744", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
              >
                {desc}
              </p>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "#8B6F47", fontFamily: "'Inter', sans-serif", fontStyle: "italic" }}
              >
                {detail}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-block px-10 py-4 rounded text-sm font-semibold transition-all duration-300"
            style={{ backgroundColor: "#2C1810", color: "#F5F0EB", fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4A2C1A")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2C1810")}
          >
            Begin Your Inquiry →
          </a>
        </div>
      </div>
    </section>
  );
}
