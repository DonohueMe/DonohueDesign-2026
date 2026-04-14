import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, MapPin, Phone, Mail, Star, Check } from "lucide-react";
import logoPath from "@assets/logo.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const NAV_LINKS = [
  { label: "Website Designer", id: "website-designer" },
  { label: "Internet Marketing Service", id: "internet-marketing" },
  { label: "Graphic Designer", id: "graphic-designer" },
  { label: "Locations", id: "locations" },
];

const WEBSITE_SERVICES = [
  "Website Design",
  "Website Development",
  "Website Redesign",
  "E-commerce Website Design",
  "UI/UX Design",
  "SEO-Optimized Website Design",
  "Website Maintenance",
];

const MARKETING_SERVICES = [
  "AI Voice Assistant",
  "AI Receptionist",
  "AI Chat Assistant",
  "Email Marketing Automation",
  "Local SEO Services (GMB)",
];

const GRAPHIC_SERVICES = [
  "Email Design",
  "Brand Identity Design",
  "Logo Design",
  "Stationery and Business Card Design",
  "Brochure & Flyer Design",
  "Infographic Design",
  "Presentation Design",
];

const REVIEWS = [
  {
    name: "Sarah Jenkins",
    business: "Sonoma Valley Roasters",
    text: "Omniva Design completely transformed our online presence. Our e-commerce sales doubled within three months of launching the new site. Remarkable work.",
    rating: 5,
  },
  {
    name: "David Chen",
    business: "Chen & Associates Law",
    text: "Professional, responsive, and incredibly talented. They delivered a website and brand identity that perfectly captures the essence of our firm.",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    business: "Bloom Floral Studio",
    text: "The AI tools they implemented saved us countless hours every week. We never miss a customer inquiry anymore. Best investment we've made.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    business: "Torres Construction",
    text: "From the first meeting to launch, the whole process was seamless. Our new site looks incredible and has brought in real leads from day one.",
    rating: 5,
  },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 52;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="min-h-screen bg-white text-[#1d1d1f]"
      style={{ fontFamily: "-apple-system, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}
    >
      {/* ── Navigation ─────────────────────────────────────────── */}
      <header
        data-testid="nav-bar"
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl border-b border-[#d2d2d7]"
            : "bg-white/80 backdrop-blur-xl border-b border-transparent"
        }`}
        style={{ minHeight: 44 }}
      >
        <div className="max-w-[980px] mx-auto px-5 flex items-center justify-between" style={{ height: 44 }}>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
            data-testid="nav-logo"
          >
            <img src={logoPath} alt="Omniva Design" className="h-5 w-auto" style={{ filter: "invert(0)" }} />
            <span className="text-[17px] font-medium tracking-tight text-[#1d1d1f]">Omniva Design</span>
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => scrollTo(l.id)}
                className="text-[12px] text-[#1d1d1f] opacity-80 hover:opacity-100 transition-opacity tracking-tight"
                data-testid={`nav-link-${l.id}`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            data-testid="nav-mobile-toggle"
          >
            <span className={`block h-[1px] w-5 bg-[#1d1d1f] transition-all ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
            <span className={`block h-[1px] w-5 bg-[#1d1d1f] transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[1px] w-5 bg-[#1d1d1f] transition-all ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#d2d2d7]">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => { scrollTo(l.id); setMenuOpen(false); }}
                className="block w-full text-left px-5 py-3 text-[15px] text-[#1d1d1f] border-b border-[#f5f5f7] hover:bg-[#f5f5f7] transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        data-testid="hero-section"
        className="pt-[44px] bg-white"
      >
        <div className="max-w-[980px] mx-auto px-5 pt-20 pb-16 md:pt-28 md:pb-24 text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p
              variants={fadeUp}
              className="text-[17px] font-medium mb-4"
              style={{ color: "#0066cc" }}
              data-testid="hero-location"
            >
              Website Designer, Santa Rosa, CA
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-[56px] md:text-[80px] font-bold leading-[1.05] tracking-[-0.03em] text-[#1d1d1f] mb-6"
            >
              Your business.<br />
              <span style={{ color: "#0066cc" }}>Beautifully online.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[21px] leading-[1.5] text-[#6e6e73] max-w-[600px] mx-auto mb-10"
            >
              Omniva Design crafts websites, marketing systems, and brand identities for businesses in Northern California that deserve to stand out.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollTo("locations")}
                className="inline-flex items-center justify-center gap-1 px-6 py-3 rounded-full text-[17px] font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#0066cc" }}
                data-testid="hero-cta-primary"
              >
                Get a Free Consultation <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollTo("website-designer")}
                className="inline-flex items-center justify-center gap-1 px-6 py-3 rounded-full text-[17px] font-medium border border-[#d2d2d7] text-[#1d1d1f] hover:bg-[#f5f5f7] transition-colors"
                data-testid="hero-cta-secondary"
              >
                Explore Services
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#d2d2d7]" />
      </section>

      {/* ── Website Designer ───────────────────────────────────── */}
      <section
        id="website-designer"
        data-testid="section-website-designer"
        className="bg-white py-20 md:py-28 scroll-mt-[44px]"
      >
        <div className="max-w-[980px] mx-auto px-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-16 items-start"
          >
            <motion.div variants={fadeUp}>
              <p className="text-[14px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "#0066cc" }}>
                Website Designer
              </p>
              <h2 className="text-[40px] md:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] text-[#1d1d1f] mb-6">
                Websites that work as hard as you do.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#6e6e73]">
                We design and build fast, beautiful, responsive websites built to convert — from simple brochure sites to fully custom e-commerce stores.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="space-y-0">
              {WEBSITE_SERVICES.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center justify-between py-4 border-b border-[#d2d2d7] group"
                  data-testid={`service-website-${i}`}
                >
                  <span className="text-[17px] text-[#1d1d1f]">{s}</span>
                  <ChevronRight className="w-4 h-4 text-[#6e6e73] group-hover:text-[#0066cc] transition-colors" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="border-t border-[#d2d2d7]" />

      {/* ── Internet Marketing ─────────────────────────────────── */}
      <section
        id="internet-marketing"
        data-testid="section-internet-marketing"
        className="py-20 md:py-28 scroll-mt-[44px]"
        style={{ backgroundColor: "#f5f5f7" }}
      >
        <div className="max-w-[980px] mx-auto px-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-16 items-start"
          >
            <motion.div variants={stagger} className="order-2 md:order-1 space-y-0">
              {MARKETING_SERVICES.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center justify-between py-4 border-b border-[#d2d2d7] group"
                  data-testid={`service-marketing-${i}`}
                >
                  <span className="text-[17px] text-[#1d1d1f]">{s}</span>
                  <ChevronRight className="w-4 h-4 text-[#6e6e73] group-hover:text-[#0066cc] transition-colors" />
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="order-1 md:order-2">
              <p className="text-[14px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "#0066cc" }}>
                Internet Marketing Service
              </p>
              <h2 className="text-[40px] md:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] text-[#1d1d1f] mb-6">
                Smarter marketing, powered by AI.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#6e6e73]">
                From AI receptionists that never miss a call to local SEO strategies that get you found first — we bring enterprise-grade tools to your local business.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="border-t border-[#d2d2d7]" />

      {/* ── Graphic Designer ───────────────────────────────────── */}
      <section
        id="graphic-designer"
        data-testid="section-graphic-designer"
        className="bg-white py-20 md:py-28 scroll-mt-[44px]"
      >
        <div className="max-w-[980px] mx-auto px-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-16 items-start"
          >
            <motion.div variants={fadeUp}>
              <p className="text-[14px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "#0066cc" }}>
                Graphic Designer
              </p>
              <h2 className="text-[40px] md:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] text-[#1d1d1f] mb-6">
                A brand identity you're proud to show off.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#6e6e73]">
                We design cohesive visual identities — logos, print materials, and digital assets — that communicate who you are the moment someone sees your brand.
              </p>
            </motion.div>

            <motion.div variants={stagger} className="space-y-0">
              {GRAPHIC_SERVICES.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-center justify-between py-4 border-b border-[#d2d2d7] group"
                  data-testid={`service-graphic-${i}`}
                >
                  <span className="text-[17px] text-[#1d1d1f]">{s}</span>
                  <ChevronRight className="w-4 h-4 text-[#6e6e73] group-hover:text-[#0066cc] transition-colors" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="border-t border-[#d2d2d7]" />

      {/* ── Reviews ────────────────────────────────────────────── */}
      <section
        id="reviews"
        data-testid="section-reviews"
        className="py-20 md:py-28 scroll-mt-[44px]"
        style={{ backgroundColor: "#f5f5f7" }}
      >
        <div className="max-w-[980px] mx-auto px-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.p
              variants={fadeUp}
              className="text-[14px] font-semibold uppercase tracking-[0.08em] mb-3 text-center"
              style={{ color: "#0066cc" }}
            >
              Reviews
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="text-[40px] md:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] text-[#1d1d1f] text-center mb-14"
            >
              Trusted by local businesses.
            </motion.h2>

            <motion.div
              variants={stagger}
              className="grid md:grid-cols-2 gap-4"
            >
              {REVIEWS.map((r, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="bg-white rounded-[18px] p-8"
                  data-testid={`review-card-${i}`}
                >
                  <div className="flex gap-0.5 mb-5">
                    {Array.from({ length: r.rating }).map((_, s) => (
                      <Star key={s} className="w-[14px] h-[14px] fill-[#0066cc] text-[#0066cc]" />
                    ))}
                  </div>
                  <p className="text-[17px] leading-[1.6] text-[#1d1d1f] mb-6">"{r.text}"</p>
                  <div>
                    <p className="text-[15px] font-semibold text-[#1d1d1f]">{r.name}</p>
                    <p className="text-[13px] text-[#6e6e73]">{r.business}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="border-t border-[#d2d2d7]" />

      {/* ── Locations / Map ────────────────────────────────────── */}
      <section
        id="locations"
        data-testid="section-locations"
        className="bg-white py-20 md:py-28 scroll-mt-[44px]"
      >
        <div className="max-w-[980px] mx-auto px-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-16 items-start"
          >
            <motion.div variants={fadeUp}>
              <p className="text-[14px] font-semibold uppercase tracking-[0.08em] mb-3" style={{ color: "#0066cc" }}>
                Locations
              </p>
              <h2 className="text-[40px] md:text-[48px] font-bold tracking-[-0.02em] leading-[1.1] text-[#1d1d1f] mb-6">
                Based in the heart of wine country.
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#6e6e73] mb-10">
                We're proudly rooted in Santa Rosa, CA, serving local businesses across Sonoma County and the greater Bay Area.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4" data-testid="contact-address">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#f5f5f7" }}>
                    <MapPin className="w-4 h-4" style={{ color: "#0066cc" }} />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-[#1d1d1f]">Address</p>
                    <p className="text-[15px] text-[#6e6e73]">Santa Rosa, CA 95401</p>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-testid="contact-phone">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#f5f5f7" }}>
                    <Phone className="w-4 h-4" style={{ color: "#0066cc" }} />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-[#1d1d1f]">Phone</p>
                    <a href="tel:+17075550100" className="text-[15px] transition-opacity hover:opacity-70" style={{ color: "#0066cc" }}>
                      (707) 555-0100
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-testid="contact-email">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: "#f5f5f7" }}>
                    <Mail className="w-4 h-4" style={{ color: "#0066cc" }} />
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-[#1d1d1f]">Email</p>
                    <a href="mailto:info@omnivadesign.com" className="text-[15px] transition-opacity hover:opacity-70" style={{ color: "#0066cc" }}>
                      info@omnivadesign.com
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={() => scrollTo("website-designer")}
                className="inline-flex items-center gap-1 mt-10 px-6 py-3 rounded-full text-[17px] font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#0066cc" }}
                data-testid="cta-get-started"
              >
                Get Started <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-[18px] overflow-hidden" style={{ height: 460 }}>
              <iframe
                title="Omniva Design — Santa Rosa, CA"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.05836661688!2d-122.75534!3d38.44047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085a56f7a2b5c1d%3A0x8e7a3a29ffd5588e!2sSanta%20Rosa%2C%20CA!5e0!3m2!1sen!2sus!4v1"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                data-testid="map-embed"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="border-t border-[#d2d2d7]" />

      {/* ── Footer ─────────────────────────────────────────────── */}
      <footer data-testid="footer" className="bg-white py-10">
        <div className="max-w-[980px] mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <img src={logoPath} alt="Omniva Design" className="h-5 w-auto opacity-80" />
                <span className="text-[17px] font-medium text-[#1d1d1f]">Omniva Design</span>
              </div>
              <p className="text-[13px] leading-[1.5] text-[#6e6e73]">
                A boutique digital agency driving growth for local businesses in Sonoma County.
              </p>
            </div>

            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#6e6e73] mb-3">Services</p>
              <ul className="space-y-2">
                {["Website Design", "Internet Marketing", "Graphic Design"].map((s) => (
                  <li key={s}>
                    <button
                      onClick={() => scrollTo(s.toLowerCase().replace(" ", "-"))}
                      className="text-[13px] text-[#6e6e73] hover:text-[#0066cc] transition-colors"
                    >
                      {s}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#6e6e73] mb-3">Contact</p>
              <ul className="space-y-2">
                <li className="text-[13px] text-[#6e6e73]">Santa Rosa, CA 95401</li>
                <li>
                  <a href="tel:+17075550100" className="text-[13px] text-[#6e6e73] hover:text-[#0066cc] transition-colors">
                    (707) 555-0100
                  </a>
                </li>
                <li>
                  <a href="mailto:info@omnivadesign.com" className="text-[13px] text-[#6e6e73] hover:text-[#0066cc] transition-colors">
                    info@omnivadesign.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#d2d2d7] pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-[12px] text-[#6e6e73]">
              Copyright &copy; {new Date().getFullYear()} Omniva Design. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[12px] text-[#6e6e73] hover:text-[#0066cc] transition-colors">Privacy Policy</a>
              <a href="#" className="text-[12px] text-[#6e6e73] hover:text-[#0066cc] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
