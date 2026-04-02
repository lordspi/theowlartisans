"use client"
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#1A0F0A" }} className="pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', serif", color: "#C4956A" }}
            >
              The Owl Artisans
            </div>
            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: "rgba(245,240,235,0.6)", fontFamily: "'Inter', sans-serif", fontWeight: 300 }}
            >
              Responsibly handcrafted Indian home fashion for design professionals worldwide. Direct from our artisans to your projects.
            </p>
            <a
              href="mailto:team@theowlartisans.com"
              className="text-sm transition-colors"
              style={{ color: "#C4956A", fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#D4A574")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#C4956A")}
            >
              team@theowlartisans.com
            </a>
          </div>

          {/* Links */}
          <div>
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "rgba(245,240,235,0.4)", fontFamily: "'Inter', sans-serif" }}
            >
              Explore
            </div>
            <div className="flex flex-col gap-3">
              {["Products", "For Designers", "Our Process", "Gallery", "About Us"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-sm transition-colors"
                  style={{ color: "rgba(245,240,235,0.6)", fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C4956A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,235,0.6)")}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <div
              className="text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: "rgba(245,240,235,0.4)", fontFamily: "'Inter', sans-serif" }}
            >
              Collections
            </div>
            <div className="flex flex-col gap-3">
              {["Handwoven Rugs", "Artisan Poufs", "Wall Art", "Throw Pillows", "Artisanal Lighting", "Handcrafted Benches"].map((item) => (
                <a
                  key={item}
                  href="#products"
                  className="text-sm transition-colors"
                  style={{ color: "rgba(245,240,235,0.6)", fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C4956A")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,240,235,0.6)")}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(196,149,106,0.15)" }} className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-xs"
              style={{ color: "rgba(245,240,235,0.3)", fontFamily: "'Inter', sans-serif" }}
            >
              © {currentYear} The Owl Artisans. All rights reserved. Handcrafted in India.
            </p>
            <div className="flex items-center gap-2">
              <span
                className="text-xs px-3 py-1 rounded-full"
                style={{ backgroundColor: "rgba(196,149,106,0.1)", color: "rgba(196,149,106,0.7)", fontFamily: "'Inter', sans-serif", border: "1px solid rgba(196,149,106,0.15)" }}
              >
                🏆 Ethically Made & Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
