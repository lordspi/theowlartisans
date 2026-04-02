"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission would connect to your backend
    setSubmitted(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: "6px",
    border: "1px solid rgba(44,24,16,0.15)",
    backgroundColor: "#fff",
    color: "#2C1810",
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s",
  };

  return (
    <section id="contact" style={{ backgroundColor: "#FAF7F4" }} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div>
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ backgroundColor: "rgba(196,149,106,0.15)", color: "#8B6F47", fontFamily: "'Inter', sans-serif" }}
            >
              Get In Touch
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}
            >
              Let&apos;s Create Something Beautiful Together
            </h2>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#6B5744", fontFamily: "'Inter', sans-serif", fontWeight: 300, lineHeight: "1.9" }}
            >
              Whether you&apos;re sourcing for a residential project, hospitality space, or launching your own collection — we&apos;re here to help. Share your vision and we&apos;ll respond within 24 hours.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:team@theowlartisans.com"
                className="flex items-center gap-3 text-sm"
                style={{ color: "#2C1810", fontFamily: "'Inter', sans-serif" }}
              >
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(196,149,106,0.15)" }}
                >
                  ✉
                </span>
                team@theowlartisans.com
              </a>
              <div
                className="flex items-center gap-3 text-sm"
                style={{ color: "#6B5744", fontFamily: "'Inter', sans-serif" }}
              >
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(196,149,106,0.15)" }}
                >
                  📍
                </span>
                India — Crafting for the World
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { label: "Response Time", value: "< 24hrs" },
                { label: "Sample Delivery", value: "7-10 days" },
                { label: "Production Lead", value: "3-6 weeks" },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="text-center p-4 rounded-lg"
                  style={{ backgroundColor: "rgba(44,24,16,0.04)", border: "1px solid rgba(44,24,16,0.06)" }}
                >
                  <div
                    className="text-lg font-bold mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#C4956A" }}
                  >
                    {value}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "#8B6F47", fontFamily: "'Inter', sans-serif" }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="rounded-2xl p-8"
            style={{ backgroundColor: "#fff", boxShadow: "0 4px 40px rgba(44,24,16,0.08)" }}
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-5xl mb-4">✨</div>
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}
                >
                  Thank You!
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "#6B5744", fontFamily: "'Inter', sans-serif" }}
                >
                  We&apos;ve received your inquiry and will be in touch within 24 hours at{" "}
                  <strong>{form.email}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3
                  className="text-xl font-bold mb-2"
                  style={{ fontFamily: "'Playfair Display', serif", color: "#2C1810" }}
                >
                  Partner Inquiry Form
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: "#8B6F47", fontFamily: "'Inter', sans-serif" }}>Full Name *</label>
                    <input
                      required
                      style={inputStyle}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: "#8B6F47", fontFamily: "'Inter', sans-serif" }}>Email *</label>
                    <input
                      required
                      type="email"
                      style={inputStyle}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@studio.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: "#8B6F47", fontFamily: "'Inter', sans-serif" }}>Studio / Company Name</label>
                  <input
                    style={inputStyle}
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    placeholder="Your studio or firm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: "#8B6F47", fontFamily: "'Inter', sans-serif" }}>I am a...</label>
                    <select
                      style={{ ...inputStyle, cursor: "pointer" }}
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                    >
                      <option value="">Select role</option>
                      <option value="interior-designer">Interior Designer</option>
                      <option value="architect">Architect</option>
                      <option value="retailer">Retailer / Buyer</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium block mb-1" style={{ color: "#8B6F47", fontFamily: "'Inter', sans-serif" }}>Project Type</label>
                    <select
                      style={{ ...inputStyle, cursor: "pointer" }}
                      value={form.projectType}
                      onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    >
                      <option value="">Select type</option>
                      <option value="residential">Residential</option>
                      <option value="hospitality">Hospitality</option>
                      <option value="commercial">Commercial</option>
                      <option value="retail">Retail / Showroom</option>
                      <option value="private-label">Private Label</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium block mb-1" style={{ color: "#8B6F47", fontFamily: "'Inter', sans-serif" }}>Tell us about your project *</label>
                  <textarea
                    required
                    rows={4}
                    style={{ ...inputStyle, resize: "vertical" }}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your project, aesthetic, and what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded text-sm font-semibold transition-all duration-300 mt-2"
                  style={{ backgroundColor: "#2C1810", color: "#F5F0EB", fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#4A2C1A")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2C1810")}
                >
                  Send Partnership Inquiry →
                </button>

                <p className="text-xs text-center" style={{ color: "#8B6F47", fontFamily: "'Inter', sans-serif" }}>
                  We respond within 24 hours — or reach us directly at{" "}
                  <a href="mailto:team@theowlartisans.com" style={{ color: "#C4956A" }}>
                    team@theowlartisans.com
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
