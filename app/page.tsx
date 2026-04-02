"use client";
import { useEffect } from "react";
import Image from "next/image";

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
        method: "POST", body: data, headers: { Accept: "application/json" },
      });
      if (res.ok) {
        form.innerHTML = `<div style="text-align:center;padding:60px 20px">
          <div style="font-size:40px;margin-bottom:16px">✓</div>
          <div style="font-family:'Playfair Display',serif;font-size:28px;color:#2c1810;margin-bottom:10px">Thank You</div>
          <div style="font-size:15px;color:#8b5e3c;font-weight:300;line-height:1.7">We'll review your project and be in touch within 24 hours.</div>
        </div>`;
      }
    } catch { /* silent */ }
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
          <a href="#order-now" className="cta">Work With Us</a>
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
            <a href="#order-now" className="btn-primary">Start a Conversation</a>
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
        <div className="section-tag">Direct from the Factory</div>
        <h2>Your Clients Deserve<br />the Real Thing.</h2>
        <p>Most sourcing chains involve four intermediaries before a piece reaches your project. We remove all of them — giving you factory-direct access, honest pricing, and complete creative control.</p>
        <div className="sourcing-ctas">
          <a href="#perks" className="btn-text">See how it works <span>→</span></a>
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
        <div className="divider-line" /><div className="divider-text">Handmade in India. Trusted Worldwide.</div><div className="divider-line" />
      </div>

      {/* PRODUCTS */}
      <section className="products" id="products">
        <div className="products-header reveal">
          <div className="section-tag">Our Collections</div>
          <h2>Six Categories.<br />Infinite Possibilities.</h2>
          <p>Each piece is made by hand, by people who have spent their lives perfecting a single craft. No shortcuts. No compromises. Just work that holds up in the spaces your clients will never stop talking about.</p>
        </div>
        <div className="products-grid">
          {[
            { tag: "Signature Collection", name: "Rugs", desc: "Hand-knotted and hand-tufted in New Zealand wool, jute and cotton. Each rug is a considered object — not a commodity.", file: "rugs.png" },
            { tag: "Accent Seating", name: "Poufs", desc: "Lightweight, tactile and endlessly versatile. The kind of piece that makes a room feel lived in — deliberately.", file: "poufs.png" },
            { tag: "Wall Stories", name: "Wall Art", desc: "Woven, sculpted and crafted — not printed. Pieces that give your walls the same attention you give everything else.", file: "wall-art.png" },
            { tag: "Soft Furnishings", name: "Pillows", desc: "Hand-embroidered and block-printed. The finishing detail that separates a good room from a great one.", file: "pillows.png" },
            { tag: "Ambient Light", name: "Artisanal Lighting", desc: "Natural fibre and handformed metal pendants that cast the kind of light no catalogue piece ever could.", file: "lighting.png" },
            { tag: "Functional Art", name: "Benches", desc: "Solid wood and handwoven upholstery. Furniture that earns a second look — and a third.", file: "benches.png" },
          ].map(({ tag, name, desc, file }, i) => (
            <div key={name} className={`product-card reveal delay-${(i % 3) + 1}`}>
              <div className="product-img">
                <Image src={`/${file}`} alt={name} width={600} height={400} style={{width:"100%",height:"100%",objectFit:"cover"}} loading="lazy" />
              </div>
              <div className="product-body">
                <div className="product-tag">{tag}</div>
                <h3>{name}</h3>
                <p>{desc}</p>
                <a href="#order-now" className="product-link">Request Samples <span>→</span></a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="process" id="process">
        <h2 className="reveal">How We Work Together.</h2>
        <p className="process-sub reveal delay-1">Simple by design. Thorough by nature.</p>
        <div className="steps">
          {[
            { n: "01", t: "Share Your Brief", p: "Tell us about your project — the space, the client, the feeling you're after. The more context, the better we can respond." },
            { n: "02", t: "We Build Your Curation", p: "Within 48 hours, you'll receive a tailored selection of pieces with pricing, lead times and customisation options — no generic catalogues." },
            { n: "03", t: "We Handle the Rest", p: "Once you confirm, our artisans begin. We manage production, quality control, photography and delivery end to end." },
          ].map(({ n, t, p }, i) => (
            <div key={n} className={`step reveal delay-${i + 1}`}>
              <div className="step-num">{n}</div>
              <h3>{t}</h3>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PERKS */}
      <section className="perks" id="perks">
        <div className="perks-header reveal">
          <div className="section-tag">What We Bring to the Table</div>
          <h2>Every Partnership<br />Includes This.</h2>
          <p>We built The Owl Artisans around how design professionals actually work — not how suppliers assume they do.</p>
        </div>
        <div className="perks-grid">
          {[
            { n: "01", t: "Logistics, Handled", p: "From factory floor to project site — we coordinate freight, customs and last-mile delivery. We work with your nominated forwarders too. Your order moves your way.", img: "/logistic.png" },
            { n: "02", t: "Photography Included", p: "Every piece you order is photographed in our in-house studio at no extra cost. Editorial-quality images, ready for your presentations and client decks.", img: "/product-photography.png" },
            { n: "03", t: "Content & Provenance", p: "Factory tours, artisan profiles, process footage — rich content that gives your sourced pieces a story worth telling. Your clients will appreciate the authenticity.", img: "/content.png" },
            { n: "04", t: "Your Brand, Not Ours", p: "Private label packaging, swing tags and authenticity certificates from USD 250. On orders above USD 10,000, it's complimentary. Your clients see your name, not ours.", img: "/custom-branding.png" },
          ].map(({ n, t, p, img }, i) => (
            <div key={n} className={`perk-card reveal delay-${i + 1}`}>
              <Image src={img} alt={t} width={600} height={300} className="perk-card-img" style={{width:"100%",objectFit:"cover"}} loading="lazy" />
              <span className="perk-num">{n}</span>
              <h3>{t}</h3>
              <p>{p}</p>
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
            <p>Responsibility isn&apos;t a brand value we display on a website. It&apos;s embedded in every material we choose, every wage we pay, and every process we run. Your clients can feel the difference — even if they can&apos;t always name it.</p>
            <a href="#order-now" className="btn-primary">Work With Us</a>
          </div>
          <div className="reveal-right">
            <div className="sustain-pillars">
              {[
                { n: "1", t: "Natural & Recycled Materials", d: "New Zealand wool, cotton, jute, denim and viscose — materials selected for quality, provenance and environmental integrity." },
                { n: "2", t: "Fair Artisan Wages", d: "Every maker in our network earns a fair living wage. We are GPTW certified — one of the few manufacturers in our industry to hold it." },
                { n: "3", t: "Zero-Waste Production Goals", d: "Waste reduction targets and responsible water use are built into our factory operations as standard practice, not as an afterthought." },
                { n: "4", t: "Transparent Supply Chain", d: "We offer factory visits and open-door inspection policies for every partner. You should know exactly where your pieces come from." },
              ].map(({ n, t, d }) => (
                <div key={n} className="pillar">
                  <div className="pillar-icon" style={{ fontFamily: "'Playfair Display',serif", fontSize: "18px", fontWeight: 700, color: "rgba(196,160,120,0.9)" }}>{n}</div>
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
          <h2 className="reveal">Questions We<br />Actually Get Asked.</h2>
          {[
            { q: "Do you have minimum order quantities?", a: "No — and this is intentional. Whether you are sourcing a single statement piece for a residential project or furnishing an entire hotel, we work to your scale. There are no minimums, no exceptions." },
            { q: "How long does production take?", a: "Production typically takes 12–15 weeks from order confirmation, depending on the product and level of customisation. Rush timelines can sometimes be accommodated — share your project schedule and we will tell you honestly what is possible." },
            { q: "Can I create completely custom pieces for a project?", a: "Yes. Custom work is a significant part of what we do. Bring us your specifications — dimensions, materials, colourways, construction details — and our design team will work directly with the artisans. We have produced bespoke pieces for residential interiors, hotels, branded retail environments and private collections." },
            { q: "What does a long-term studio partnership look like?", a: "Our studio partners receive priority production scheduling, dedicated account management, preferential pricing on repeat orders and early access to new collections. Partnerships are built over time — most of our studio relationships begin with a single project and grow from there." },
            { q: "Can I present these pieces under my own brand?", a: "Absolutely. Our private label programme allows you to present pieces under your studio brand entirely — custom packaging, swing tags, certificates of authenticity and labels. Available from USD 250, and complimentary on orders above USD 10,000." },
            { q: "What materials do you work with?", a: "New Zealand wool, cotton, jute, denim and viscose — all selected for quality, sustainability and tactile integrity. We can also source specialist materials for bespoke projects where the brief demands something specific." },
            { q: "Do you support third-party quality inspections?", a: "We actively encourage them. Our factories operate an open-door policy at every stage of production. If you or your client require independent quality verification, we will facilitate it without friction." },
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
        <h2 className="reveal delay-1">The Standard Your<br /><em>Projects Deserve.</em></h2>
        <p className="reveal delay-2">GPTW certified. Ethically manufactured. Built for design professionals who cannot afford to compromise on quality, provenance or reliability.</p>
        <a href="#order-now" className="btn-dark reveal delay-3">Begin a Conversation</a>
      </section>

      {/* ORDER FORM */}
      <section className="order" id="order-now">
        <div className="order-bg" style={{ backgroundImage: "url('/behind-form.png')" }} />
        <div className="order-inner reveal" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-tag">Work With Us</div>
          <h2>Tell Us About Your Project</h2>
          <p className="order-sub">Share what you are working on and we will come back to you within 24 hours with a considered response — not a catalogue.</p>
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
              <select name="products"><option value="">Select category</option><option>Rugs</option><option>Poufs</option><option>Wall Art</option><option>Pillows</option><option>Artisanal Lighting</option><option>Benches</option><option>Multiple / All</option></select>
            </div>
            <div className="form-group"><label>About Your Project *</label>
              <textarea name="message" placeholder="The space, the client, the aesthetic you are working towards — any context helps us respond well." required></textarea>
            </div>
            <button type="submit" className="form-submit">Send Enquiry</button>
            <p className="form-note">Or write to us directly at <a href="mailto:team@theowlartisans.com">team@theowlartisans.com</a></p>
          </form>
        </div>
      </section>

      {/* LOGO SCROLLER */}
      <div className="logo-scroller">
        <div className="logo-track">
          {[...Array(2)].map((_, d) =>
            ["/logo1.png","/logo2.png","/logo3.png","/logo4.png","/logo5.png","/logo6.png","/logo8.png","/logo9.png"].map((src) => (
              <div key={`${d}-${src}`} className="logo-item">
                <Image src={src} alt="Partner" width={160} height={60} className="logo-img" style={{objectFit:"contain"}} loading="lazy" />
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
                <a href="#about">About Us</a><a href="#products">Products</a><a href="#perks">Why Us</a><a href="#faq">FAQ</a><a href="#order-now">Work With Us</a>
              </div>
              <div className="footer-col">
                <h4>Collections</h4>
                <a href="#products">Rugs</a><a href="#products">Poufs</a><a href="#products">Wall Art</a><a href="#products">Pillows</a><a href="#products">Lighting</a><a href="#products">Benches</a>
              </div>
              <div className="footer-col">
                <h4>Contact</h4>
                <a href="mailto:team@theowlartisans.com">team@theowlartisans.com</a><a href="#order-now">Start a Project</a>
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
