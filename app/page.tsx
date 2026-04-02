"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const onScroll = () => navbar?.classList.toggle("scrolled", window.scrollY > 60);
    window.addEventListener("scroll", onScroll);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal,.reveal-left,.reveal-right").forEach((el) => observer.observe(el));

    // Counter animation
    const counters = document.querySelectorAll(".stat-num[data-target]");
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        const target = parseInt(el.dataset.target || "0");
        const suffix = el.dataset.suffix || "";
        let start = 0;
        const duration = 1800;
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(ease * target) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        countObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach((el) => countObserver.observe(el));

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleFaq = (el: HTMLElement) => el.classList.toggle("open");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xwvwneqj", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.innerHTML = `<div style="text-align:center;padding:60px 20px">
          <div style="font-size:40px;margin-bottom:16px">✓</div>
          <div style="font-family:'Playfair Display',serif;font-size:28px;color:#2c1810;margin-bottom:10px">Thank You!</div>
          <div style="font-size:15px;color:#8b5e3c;font-weight:300;line-height:1.7">We've received your enquiry and will respond<br/>with a curated presentation within 24 hours.</div>
        </div>`;
      } else {
        alert("Something went wrong. Please email us at team@theowlartisans.com");
      }
    } catch {
      alert("Something went wrong. Please email us at team@theowlartisans.com");
    }
  };

  return (
    <>
      {/* NAV */}
      <nav id="navbar">
        <a href="#" className="logo">The Owl Artisans</a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#certifications">Why Us</a>
          <a href="#faq">FAQ</a>
          <a href="#order-now" className="cta">Get Quote</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-bg" style={{ backgroundImage: "url('/hero.png')" }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-eyebrow"><span></span>Exclusively for Interior Designers &amp; Architects</div>
          <h1>Where <em>Ancient Craft</em><br />Meets Modern Spaces.</h1>
          <p className="hero-sub">Direct from our ateliers in India to your most ambitious projects — handcrafted textiles and decor with no compromise, no minimums, no middlemen.</p>
          <div className="hero-btns">
            <a href="#order-now" className="btn-primary">Get Quote</a>
            <a href="#products" className="btn-ghost">View Collection</a>
          </div>
        </div>
        <div className="hero-scroll" onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* SOURCING */}
      <section className="sourcing reveal" id="about">
        <div className="section-tag">Better Sourcing Starts Here</div>
        <h2>Crafted for Spaces That<br />Demand More.</h2>
        <p>Skip the middlemen. Order directly from our factories in India and unlock exclusive perks that make your projects seamless — from concept to installation.</p>
        <div className="sourcing-ctas">
          <a href="#order-now" className="btn-dark">Get Quote</a>
          <a href="#perks" className="btn-text">What Perks? <span>→</span></a>
        </div>
      </section>

      {/* STATS */}
      <div className="stats">
        <div className="stats-inner">
          <div className="stat reveal delay-1"><span className="stat-num" data-target="2025" data-suffix="">0</span><span className="stat-label">Founded</span></div>
          <div className="stat reveal delay-2"><span className="stat-num" data-target="4" data-suffix="+">0+</span><span className="stat-label">Countries</span></div>
          <div className="stat reveal delay-3"><span className="stat-num" data-target="50" data-suffix="+">0+</span><span className="stat-label">Interior Studios</span></div>
          <div className="stat reveal delay-4"><span className="stat-num" data-target="200" data-suffix="+">0+</span><span className="stat-label">Containers Shipped</span></div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="divider">
        <div className="divider-line" /><div className="divider-text">Handmade in India. Loved Worldwide.</div><div className="divider-line" />
      </div>

      {/* PRODUCTS */}
      <section className="products" id="products">
        <div className="products-header reveal">
          <div className="section-tag">Our Collections</div>
          <h2>Six Categories.<br />Infinite Possibilities.</h2>
          <p>Every piece handmade by master artisans using natural and recycled materials — built to anchor your interiors with soul.</p>
        </div>
        <div className="products-grid">
          {[
            { tag: "Signature Collection", name: "Rugs", desc: "Handmade rugs with natural & recycled materials — each one a floor-bound work of art.", file: "rugs.png" },
            { tag: "Accent Seating", name: "Poufs", desc: "Lightweight seating with an artistic touch — the perfect accent for any curated corner.", file: "poufs.png" },
            { tag: "Wall Stories", name: "Wall Art", desc: "Ditch cheap prints. Elevated wall decor crafted with texture, depth and intention.", file: "wall-art.png" },
            { tag: "Soft Furnishings", name: "Pillows", desc: "Throw pillows that elevate every couch, chair, and daybed to something worth photographing.", file: "pillows.png" },
            { tag: "Ambient Light", name: "Artisanal Lighting", desc: "Decorative lamps like you've never seen before — organic materials, extraordinary form.", file: "lighting.png" },
            { tag: "Functional Art", name: "Benches", desc: "Rugs turned into handcrafted benches — sculptural seating that earns its place in any room.", file: "benches.png" },
          ].map(({ tag, name, desc, file }, i) => (
            <div key={name} className={`product-card reveal delay-${(i % 3) + 1}`}>
              <div className="product-img">
                <img src={`/${file}`} alt={name} onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
                <div className="img-placeholder"><div className="fname">{file}</div></div>
              </div>
              <div className="product-body">
                <div className="product-tag">{tag}</div>
                <h3>{name}</h3>
                <p>{desc}</p>
                <a href="#order-now" className="product-link">Enquire Now <span>→</span></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" id="process">
        <h2 className="reveal">As Easy As 1, 2, 3.</h2>
        <p className="process-sub reveal delay-1">We handle the complexity. You handle the vision.</p>
        <div className="steps">
          {[
            { n: "01", t: "Tell Us About You", p: "Fill the form below and tell us about your project, your aesthetic and your clients. The more detail, the better we can curate." },
            { n: "02", t: "We Curate for You", p: "We'll present a targeted selection based on your requirements — complete with pricing, lead times and customisation options. Within 48 hours." },
            { n: "03", t: "Order & Sit Back", p: "Confirm your selections and let our award-winning artisans get to work. We handle production, quality control and global delivery." },
          ].map(({ n, t, p }, i) => (
            <div key={n} className={`step reveal delay-${i + 1}`}>
              <div className="step-num">{n}</div>
              <h3>{t}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
        <a href="#order-now" className="btn-primary reveal">Get Quote</a>
      </section>

      {/* PERKS */}
      <section className="perks" id="perks">
        <div className="perks-header reveal">
          <div className="section-tag">The Perks</div>
          <h2>More Than a Supplier.<br />A Studio Partner.</h2>
          <p>Everything we offer is designed to make your practice run smoother and your projects shine brighter.</p>
        </div>
        <div className="perks-grid">
          {[
            { n: "01", t: "Logistics, Your Way", p: "Our dedicated shipping team secures the best freight rates and practices. We work with your nominated forwarders too — because your order should move exactly how you want it to.", img: "/logistic.png" },
            { n: "02", t: "Professional Photography", p: "Great product photography shouldn't cost extra. Our in-house studio produces e-commerce-ready images for everything you order — at no additional charge.", img: "/product-photography.png" },
            { n: "03", t: "Content & Storytelling", p: "Process videos, behind-the-scenes factory tours, artisan profiles — rich content that brings your sourcing story to life on social media and client decks.", img: "/content.png" },
            { n: "04", t: "Custom Branding", p: "Your clients buy your brand — not ours. Get custom packaging, swing tags and certificates of authenticity starting at just USD 250. Free on all orders above USD 10,000.", img: "/custom-branding.png" },
          ].map(({ n, t, p, img }, i) => (
            <div key={n} className={`perk-card reveal delay-${i + 1}`}>
              <img src={img} alt={t} className="perk-card-img" />
              <span className="perk-num">{n}</span>
              <h3>{t}</h3>
              <p>{p}</p>
              <a href="#order-now" className="perk-link">Get Started <span>→</span></a>
            </div>
          ))}
        </div>
      </section>

      {/* SUSTAINABILITY */}
      <section className="sustain" id="certifications">
        <div className="sustain-inner">
          <div className="sustain-left reveal-left">
            <div className="section-tag" style={{ background: "rgba(196,160,120,0.12)", color: "rgba(196,160,120,0.9)" }}>Made With Purpose</div>
            <h2>Craft That <em>Gives Back</em><br />More Than It Takes.</h2>
            <p>At The Owl Artisans, responsibility isn&apos;t a footnote — it&apos;s the foundation. Every piece we make is a commitment to the artisans who make it, the environment it comes from, and the spaces it will live in.</p>
            <a href="#order-now" className="btn-primary">Partner With Us</a>
          </div>
          <div className="reveal-right">
            <div className="sustain-pillars">
              {[
                { icon: "🌿", t: "Natural & Recycled Materials", d: "New Zealand wool, cotton, jute, denim and viscose — materials that have a story before they even reach our looms." },
                { icon: "🤝", t: "Fair Artisan Wages", d: "Every maker in our network earns a fair, living wage. We are proudly GPTW certified — one of the few in our industry." },
                { icon: "♻️", t: "Zero-Waste Production Goals", d: "Our factories operate with waste-reduction targets and responsible water use as standard — not as an afterthought." },
                { icon: "📜", t: "Transparent Supply Chain", d: "Know exactly where your pieces come from. We offer factory tours and open-door inspection policies for every partner." },
              ].map(({ icon, t, d }, i) => (
                <div key={t} className={`pillar delay-${i + 1}`}>
                  <div className="pillar-icon">{icon}</div>
                  <div><div className="pillar-title">{t}</div><div className="pillar-desc">{d}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" id="faq">
        <div className="faq-inner">
          <h2 className="reveal">Everything You Need<br />to Know.</h2>
          {[
            { q: "Do you have MOQs?", a: "Absolutely not. No minimum order quantities — ever. Whether you're sourcing one bespoke piece for a residential client or outfitting an entire hotel, we accommodate every scale." },
            { q: "How long will my order take?", a: "Standard production lead times are 3–6 weeks depending on the product type, customisation and quantity. Samples can be dispatched within 7–10 days." },
            { q: "Are you open to third-party inspections?", a: "Always. We operate an open-door factory policy and actively welcome third-party quality inspections at any stage of production." },
            { q: "What materials do you use?", a: "We work with New Zealand wool, cotton, jute, denim and viscose. Every material is selected for its quality, provenance and environmental footprint." },
            { q: "Can I get custom designs for my project?", a: "Yes — and this is where we shine. Bring us your mood boards, colour palettes and specifications and our design team will work directly with the artisans to create bespoke pieces." },
            { q: "What makes The Owl Artisans different?", a: "We were built specifically for design professionals. No MOQs, direct factory pricing, in-house photography, content creation, and a team that genuinely cares about your project's success." },
          ].map(({ q, a }, i) => (
            <div key={q} className={`faq-item reveal delay-${Math.min(i + 1, 5)}`} onClick={(e) => toggleFaq(e.currentTarget)}>
              <div className="faq-q">{q}<div className="faq-icon">+</div></div>
              <div className="faq-a">{a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="section-tag reveal">Certifiably Reliable</div>
        <h2 className="reveal delay-1">Join the World of<br /><em>Artisan Homes.</em></h2>
        <p className="reveal delay-2">Our certifications go beyond product quality. We&apos;re GPTW certified — one of the very few in our industry to earn it. Because great craft starts with great people.</p>
        <a href="#order-now" className="btn-dark reveal delay-3">Get Your Quote</a>
        <div className="cert-badges reveal delay-4">
          <div className="cert-badge"><span>🏆</span> GPTW Certified</div>
          <div className="cert-badge"><span>🌿</span> Sustainably Made</div>
          <div className="cert-badge"><span>🤝</span> Fair Trade Practices</div>
          <div className="cert-badge"><span>✦</span> Founded 2025</div>
        </div>
      </section>

      {/* ORDER FORM */}
      <section className="order" id="order-now">
        <div className="order-bg" style={{ backgroundImage: "url('/behind-form.png')" }} />
        <div className="order-inner reveal" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-tag">Get in Touch</div>
          <h2>Get a Quote</h2>
          <p className="order-sub">Tell us about your project and we&apos;ll respond with a personalised curation within 24 hours.</p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group"><label>Your Name *</label><input name="name" type="text" placeholder="Full name" required /></div>
              <div className="form-group"><label>Email *</label><input name="email" type="email" placeholder="you@studio.com" required /></div>
            </div>
            <div className="form-row">
              <div className="form-group"><label>Studio / Company</label><input name="studio" type="text" placeholder="Your studio name" /></div>
              <div className="form-group"><label>I am a...</label>
                <select name="role"><option value="">Select</option><option>Interior Designer</option><option>Architect</option><option>Retailer / Buyer</option><option>Other</option></select>
              </div>
            </div>
            <div className="form-group"><label>Products Interested In</label>
              <select name="products"><option value="">Select product category</option><option>Rugs</option><option>Poufs</option><option>Wall Art</option><option>Pillows</option><option>Artisanal Lighting</option><option>Benches</option><option>Multiple / All</option></select>
            </div>
            <div className="form-group"><label>Tell us about your project *</label>
              <textarea name="message" placeholder="Describe your project, aesthetic direction, quantities and timelines..." required></textarea>
            </div>
            <button type="submit" className="form-submit">Send Enquiry →</button>
            <p className="form-note">Or reach us at <a href="mailto:team@theowlartisans.com">team@theowlartisans.com</a></p>
          </form>
        </div>
      </section>

      {/* LOGO SCROLLER */}
      <div className="logo-scroller">
        <div className="logo-track">
          {[...Array(2)].map((_, d) =>
            ["/logo1.png","/logo2.png","/logo3.png","/logo4.png","/logo5.png","/logo6.png","/logo8.png","/logo9.png"].map((src) => (
              <div key={`${d}-${src}`} className="logo-item">
                <img src={src} alt="Partner" className="logo-img" />
              </div>
            ))
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-logo">The Owl Artisans</div>
              <p className="footer-desc">Responsibly handcrafted Indian home fashion — made with purpose, delivered with care.</p>
            </div>
            <div className="footer-links-cols">
              <div className="footer-col">
                <h4>Navigate</h4>
                <a href="#about">About Us</a><a href="#products">Products</a><a href="#perks">Why Us</a><a href="#faq">FAQ</a><a href="#order-now">Order Now</a>
              </div>
              <div className="footer-col">
                <h4>Collections</h4>
                <a href="#products">Rugs</a><a href="#products">Poufs</a><a href="#products">Wall Art</a><a href="#products">Pillows</a><a href="#products">Lighting</a><a href="#products">Benches</a>
              </div>
              <div className="footer-col">
                <h4>Contact</h4>
                <a href="mailto:team@theowlartisans.com">team@theowlartisans.com</a><a href="#order-now">Get a Quote</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span>Copyright The Owl Artisans © 2025. Handcrafted in India.</span>
            <span>Made with Purpose.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
