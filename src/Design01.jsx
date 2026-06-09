import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  FiCode, FiSmartphone, FiTrendingUp, FiFeather,
  FiSearch, FiTarget, FiLayout, FiZap,
  FiTwitter, FiLinkedin, FiInstagram, FiGithub,
  FiDribbble, FiMenu, FiX, FiChevronDown,
  FiArrowRight, FiStar, FiMail, FiPhone,
  FiMapPin, FiClock, FiPlus, FiMinus,
  FiCheckCircle, FiExternalLink
} from "react-icons/fi";

// ── All Data Inline (from data.js) ────────────────────────
const navLinks = [
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "process", label: "Process" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

const heroContent = {
  badge: "🚀 Premium Digital Agency",
  headingLine1: "We Build",
  headingLine2: "Digital",
  headingLine3: "Experiences",
  description: "Bringing together strategy, creativity, and technology to build digital products and campaigns that make our clients look extraordinary.",
  primaryCTA: { label: "Start a Project" },
  secondaryCTA: { label: "View Our Work" },
  stats: [
    { value: "150+", label: "Projects Done" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "12+", label: "Years Experience" },
    { value: "40+", label: "Team Members" },
  ],
};
const clients = [
  { id: 1, name: "Dropbox" }, { id: 2, name: "Stripe" }, { id: 3, name: "Notion" },
  { id: 4, name: "Vercel" }, { id: 5, name: "Linear" }, { id: 6, name: "Figma" },
  { id: 7, name: "Webflow" }, { id: 8, name: "Loom" }, { id: 9, name: "Framer" },
  { id: 10, name: "Supabase" }, { id: 11, name: "Raycast" }, { id: 12, name: "Arc" },
];
const services = [
  { id: 1, icon: "FiCode", title: "Web Development", description: "We craft blazing-fast, pixel-perfect websites and web applications using modern stacks — React, Next.js, and beyond.", features: ["React / Next.js", "Performance Optimized", "CMS Integration"], color: "#FFCB05" },
  { id: 2, icon: "FiSmartphone", title: "App Development", description: "Native and cross-platform mobile experiences that users love — built with React Native and Flutter for iOS and Android.", features: ["React Native", "Flutter", "iOS & Android"], color: "#A78BFA" },
  { id: 3, icon: "FiTrendingUp", title: "SEO Optimization", description: "Data-driven SEO strategies that put your brand at the top of search results and keep you ahead of the competition.", features: ["Technical SEO", "Content Strategy", "Analytics & Reporting"], color: "#34D399" },
  { id: 4, icon: "FiFeather", title: "Brand Design", description: "Bold, strategic brand identities that resonate with your audience and make a lasting impression across every touchpoint.", features: ["Logo & Identity", "Design Systems", "Motion & UI"], color: "#F472B6" },
];
const portfolioProjects = [
  { id: 1, title: "Luminary Finance", category: "Web Development", description: "A next-gen fintech dashboard with real-time analytics and AI-powered insights.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80", tags: ["React", "Node.js", "PostgreSQL"], year: "2026" },
  { id: 2, title: "Orbis App", category: "App Development", description: "A social productivity app connecting remote teams across time zones seamlessly.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80", tags: ["React Native", "Firebase"], year: "2026" },
  { id: 3, title: "Vexa E-Commerce", category: "Web Development", description: "A premium fashion e-commerce platform with immersive 3D product previews.", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80", tags: ["Next.js", "Stripe", "Three.js"], year: "2025" },
  { id: 4, title: "Pulse Health", category: "App Development", description: "A telehealth platform enabling secure video consultations and patient management.", image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&q=80", tags: ["React Native", "WebRTC"], year: "2025" },
  { id: 5, title: "Apex Brand Identity", category: "Brand Design", description: "Complete brand overhaul for a Series B startup — from logo to design system.", image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80", tags: ["Branding", "Figma", "Motion"], year: "2026" },
  { id: 6, title: "Zenith SEO Growth", category: "SEO Optimization", description: "600% organic traffic growth in 8 months through technical SEO and content strategy.", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", tags: ["SEO", "Analytics", "Content"], year: "2026" },
];
const portfolioCategories = ["All", "Web Development", "App Development", "Brand Design", "SEO Optimization"];
const processSteps = [
  { id: 1, step: "01", title: "Discovery", description: "We dive deep into your business, goals, and audience to uncover what makes your brand unique and what your users truly need.", icon: "FiSearch" },
  { id: 2, step: "02", title: "Strategy", description: "We craft a comprehensive roadmap — outlining architecture, tech stack, timelines, and measurable KPIs aligned to your goals.", icon: "FiTarget" },
  { id: 3, step: "03", title: "Design", description: "Our designers create stunning, conversion-focused UI/UX that balances aesthetic beauty with functional clarity.", icon: "FiLayout" },
  { id: 4, step: "04", title: "Development", description: "Clean, scalable, production-ready code crafted by senior engineers using modern frameworks and best practices.", icon: "FiCode" },
  { id: 5, step: "05", title: "Launch", description: "Rigorous QA, performance audits, and a seamless deployment process to ensure a flawless go-live experience.", icon: "FiZap" },
  { id: 6, step: "06", title: "Growth", description: "Post-launch analytics, continuous optimization, and strategic scaling to grow your digital presence over time.", icon: "FiTrendingUp" },
];
const testimonials = [
  { id: 1, name: "Sarah Mitchell", role: "CEO, Luminary Finance", image: "https://randomuser.me/api/portraits/women/44.jpg", rating: 5, text: "TabServ transformed our entire digital presence. Their team's attention to detail and technical excellence is unmatched. The dashboard they built is a masterpiece." },
  { id: 2, name: "James Okafor", role: "Founder, Orbis App", image: "https://randomuser.me/api/portraits/men/32.jpg", rating: 5, text: "Working with TabServ felt like having a world-class product team in our corner. They shipped our app on time, on budget, and it exceeded every expectation." },
  { id: 3, name: "Priya Sharma", role: "CMO, Vexa Fashion", image: "https://randomuser.me/api/portraits/women/68.jpg", rating: 5, text: "The 3D product previews TabServ built completely changed how customers experience our brand online. Conversion rates jumped 40% within the first month." },
  { id: 4, name: "Daniel Brooks", role: "CTO, Pulse Health", image: "https://randomuser.me/api/portraits/men/75.jpg", rating: 5, text: "TabServ's engineering team is phenomenal. They navigated complex compliance requirements while delivering a beautifully intuitive product." },
  { id: 5, name: "Elena Vasquez", role: "Brand Director, Apex", image: "https://randomuser.me/api/portraits/women/12.jpg", rating: 5, text: "The brand identity TabServ created for us was not just design — it was pure strategy. We've seen a dramatic improvement in brand recognition." },
];
const faqs = [
  { id: 1, question: "How long does a typical project take?", answer: "Project timelines vary based on scope. A landing page typically takes 2–3 weeks, a full web application 6–12 weeks, and a complete brand identity 3–5 weeks. We provide detailed timelines during the discovery phase." },
  { id: 2, question: "What is your pricing model?", answer: "We offer both project-based and retainer pricing. Projects are scoped and quoted individually based on complexity. Retainer plans start at $3,500/month and include ongoing development, design, and strategy support." },
  { id: 3, question: "Do you work with startups or only enterprise clients?", answer: "We work with clients of all sizes — from early-stage startups to Fortune 500 companies. What matters most is alignment on vision and commitment to quality." },
  { id: 4, question: "What technologies do you specialize in?", answer: "Our core stack includes React, Next.js, Node.js, React Native, Flutter, TypeScript, PostgreSQL, and Supabase. We stay current and choose the best tools for each project." },
  { id: 5, question: "Do you provide post-launch support?", answer: "Absolutely. All projects include a 30-day warranty period post-launch. We also offer ongoing support and maintenance retainers to keep your product running optimally." },
  { id: 6, question: "Can you work with our existing team?", answer: "Yes. We frequently embed with existing engineering or design teams as a collaborative extension. We adapt to your workflows, tools, and communication preferences seamlessly." },
];
const contactInfo = { email: "hello@tabserv.io", phone: "+1 (555) 287-4920", address: "340 Pine Street, San Francisco, CA 94104", availability: "Mon – Fri, 9:00 AM – 6:00 PM PST" };
const budgetOptions = ["Under $5,000", "$5,000 – $15,000", "$15,000 – $50,000", "$50,000 – $100,000", "$100,000+"];
const serviceOptions = ["Web Development", "App Development", "SEO Optimization", "Brand Design", "Full Package"];
const footerLinks = {
  quickLinks: [{ label: "Services", id: "services" }, { label: "Portfolio", id: "portfolio" }, { label: "Process", id: "process" }, { label: "Testimonials", id: "testimonials" }, { label: "FAQ", id: "faq" }, { label: "Contact", id: "contact" }],
  services: [{ label: "Web Development" }, { label: "App Development" }, { label: "SEO Optimization" }, { label: "Brand Design" }],
};
const socialLinks = [
  { id: 1, icon: "FiTwitter" }, { id: 2, icon: "FiLinkedin" }, { id: 3, icon: "FiInstagram" },
  { id: 4, icon: "FiGithub" }, { id: 5, icon: "FiDribbble" },
];

// ── Icon Resolver ──────────────────────────────────────────
const iconMap = { FiCode, FiSmartphone, FiTrendingUp, FiFeather, FiSearch, FiTarget, FiLayout, FiZap, FiTwitter, FiLinkedin, FiInstagram, FiGithub, FiDribbble };
const Icon = ({ name, ...props }) => { const C = iconMap[name]; return C ? <C {...props} /> : null; };

// ── Motion Variants ────────────────────────────────────────
const fadeUp = { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } } };

// ── Section Wrapper ────────────────────────────────────────
const SW = ({ children, id, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return <motion.section id={id} ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={stagger} className={className}>{children}</motion.section>;
};

/* ======== NAVBAR ======== */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => { const h = () => setScrolled(window.scrollY > 40); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);
  const go = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setActive(id); };
  return (
    <motion.nav initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-black text-white cursor-pointer">Tab<span className="text-[#FFCB05]">Serv</span></motion.div>
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <li key={l.id}><button onClick={() => go(l.id)} className={`relative text-sm font-medium tracking-wide transition-colors group ${active === l.id ? "text-[#FFCB05]" : "text-[#A1A1AA] hover:text-white"}`}>
              {l.label}<span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FFCB05] group-hover:w-full transition-all duration-300" />
            </button></li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <motion.button onClick={() => go("contact")} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-[#FFCB05] text-black text-sm font-bold rounded-full hover:shadow-[0_0_20px_rgba(255,203,5,0.5)] transition-all">
            Let's Talk <FiArrowRight size={14} />
          </motion.button>
          <button className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#0B0B0B]/95 backdrop-blur-xl border-t border-white/5">
            <ul className="flex flex-col p-6 gap-5">
              {navLinks.map(l => <li key={l.id}><button onClick={() => go(l.id)} className="text-base font-medium text-[#A1A1AA] hover:text-[#FFCB05] transition-colors">{l.label}</button></li>)}
              <li><button onClick={() => go("contact")} className="w-full py-3 bg-[#FFCB05] text-black font-bold rounded-full">Let's Talk</button></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

/* ======== HERO ======== */
const Hero = () => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0), mouseY = useMotionValue(0);
  const sx = useSpring(mouseX, { stiffness: 40, damping: 30 }), sy = useSpring(mouseY, { stiffness: 40, damping: 30 });
  const bubbles = useMemo(() => Array.from({ length: 16 }, (_, i) => ({ id: i, size: Math.random() * 80 + 20, x: Math.random() * 100, y: Math.random() * 100, dur: Math.random() * 10 + 8, del: Math.random() * 4 })), []);
  const onMove = useCallback((e) => { const r = ref.current?.getBoundingClientRect(); if (!r) return; mouseX.set(((e.clientX - r.left) / r.width - 0.5) * 40); mouseY.set(((e.clientY - r.top) / r.height - 0.5) * 40); }, []);
  return (
    <section ref={ref} onMouseMove={onMove} className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505]">
      {bubbles.map(b => (
        <motion.div key={b.id} className="absolute rounded-full pointer-events-none"
          style={{ width: b.size, height: b.size, left: `${b.x}%`, top: `${b.y}%`, background: "radial-gradient(circle, rgba(255,203,5,0.08) 0%, transparent 70%)", border: "1px solid rgba(255,203,5,0.06)", x: sx, y: sy }}
          animate={{ y: [0, -30, 0], scale: [1, 1.08, 1], opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: b.dur, delay: b.del, repeat: Infinity, ease: "easeInOut" }} />
      ))}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFCB05]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-32 pb-20">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#FFCB05]/30 bg-[#FFCB05]/5 text-[#FFCB05] text-sm font-medium mb-8">
          {heroContent.badge}
        </motion.div>
        <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-black leading-none tracking-tighter text-white mb-6">
          <motion.span initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="block">{heroContent.headingLine1}</motion.span>
          <motion.span initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.38 }} className="block text-transparent" style={{ WebkitTextStroke: "2px #FFCB05" }}>{heroContent.headingLine2}</motion.span>
          <motion.span initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="block">{heroContent.headingLine3}</motion.span>
        </h1>
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.65 }} className="max-w-2xl mx-auto text-[#A1A1AA] text-lg leading-relaxed mb-10">{heroContent.description}</motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.78 }} className="flex flex-wrap justify-center gap-4 mb-20">
          <motion.button whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,203,5,0.5)" }} whileTap={{ scale: 0.95 }} onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="flex items-center gap-2 px-8 py-4 bg-[#FFCB05] text-black font-bold text-base rounded-full">{heroContent.primaryCTA.label} <FiArrowRight /></motion.button>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })} className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold text-base rounded-full hover:bg-white/5 transition-all">{heroContent.secondaryCTA.label}</motion.button>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.9 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {heroContent.stats.map((s, i) => <div key={i} className="text-center"><div className="text-3xl md:text-4xl font-black text-[#FFCB05] mb-1">{s.value}</div><div className="text-sm text-[#A1A1AA]">{s.label}</div></div>)}
        </motion.div>
      </div>
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#A1A1AA]">
        <span className="text-xs tracking-widest uppercase">Scroll</span><FiChevronDown size={18} />
      </motion.div>
    </section>
  );
};

/* ======== CLIENTS MARQUEE ======== */
const ClientsMarquee = () => {
  const doubled = useMemo(() => [...clients, ...clients], []);
  return (
    <section className="py-16 bg-[#0B0B0B] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center"><p className="text-xs tracking-[0.3em] uppercase text-[#A1A1AA] font-medium">Trusted by industry leaders</p></div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-[#0B0B0B] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-[#0B0B0B] to-transparent" />
        <motion.div className="flex gap-12 items-center" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 22, ease: "linear", repeat: Infinity }} style={{ width: "max-content" }}>
          {doubled.map((c, i) => (
            <div key={`${c.id}-${i}`} className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/8 bg-white/3 hover:border-[#FFCB05]/40 hover:bg-[#FFCB05]/5 transition-all duration-300 whitespace-nowrap group cursor-default">
              <div className="w-2 h-2 rounded-full bg-[#FFCB05] group-hover:shadow-[0_0_8px_#FFCB05] transition-all" />
              <span className="text-[#A1A1AA] group-hover:text-white font-semibold text-sm tracking-wide transition-colors">{c.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ======== SERVICES ======== */
const Services = () => (
  <SW id="services" className="py-28 bg-[#050505]">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <motion.div variants={fadeUp} className="text-center mb-20">
        <p className="text-xs tracking-[0.3em] uppercase text-[#FFCB05] font-medium mb-4">What We Do</p>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-5">Our <span className="text-[#FFCB05]">Services</span></h2>
        <p className="text-[#A1A1AA] max-w-xl mx-auto text-lg">End-to-end digital solutions crafted to elevate your brand and accelerate growth.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <motion.div key={s.id} variants={scaleIn} whileHover={{ y: -8, scale: 1.01 }}
            className="group relative p-8 rounded-2xl bg-[#0B0B0B] border border-white/8 hover:border-[#FFCB05]/30 transition-all duration-300 overflow-hidden cursor-pointer">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" style={{ background: `radial-gradient(circle at 30% 30%, ${s.color}10 0%, transparent 60%)` }} />
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: `${s.color}15`, border: `1px solid ${s.color}30` }}>
              <Icon name={s.icon} size={24} style={{ color: s.color }} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFCB05] transition-colors">{s.title}</h3>
            <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">{s.description}</p>
            <ul className="flex flex-wrap gap-2 mb-6">
              {s.features.map((f, j) => <li key={j} className="text-xs px-3 py-1.5 rounded-full border font-medium" style={{ borderColor: `${s.color}30`, color: s.color, background: `${s.color}08` }}>{f}</li>)}
            </ul>
            <button className="flex items-center gap-2 text-sm font-semibold transition-all" style={{ color: s.color }}>
              Learn More <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </SW>
);

/* ======== PORTFOLIO ======== */
const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const filtered = useMemo(() => filter === "All" ? portfolioProjects : portfolioProjects.filter(p => p.category === filter), [filter]);
  return (
    <SW id="portfolio" className="py-28 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div variants={fadeUp} className="text-center mb-14">
          <p className="text-xs tracking-[0.3em] uppercase text-[#FFCB05] font-medium mb-4">Our Work</p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-5">Selected <span className="text-[#FFCB05]">Projects</span></h2>
          <p className="text-[#A1A1AA] max-w-xl mx-auto text-lg">A curated selection of our finest work across industries and disciplines.</p>
        </motion.div>
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mb-12">
          {portfolioCategories.map(c => (
            <button key={c} onClick={() => setFilter(c)} className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${filter === c ? "bg-[#FFCB05] text-black border-[#FFCB05] shadow-[0_0_15px_rgba(255,203,5,0.4)]" : "border-white/15 text-[#A1A1AA] hover:border-white/40 hover:text-white"}`}>{c}</button>
          ))}
        </motion.div>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map(p => (
              <motion.div key={p.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }} whileHover={{ y: -6 }}
                className="group relative rounded-2xl overflow-hidden bg-[#050505] border border-white/8 hover:border-[#FFCB05]/30 transition-all duration-300">
                <div className="relative h-52 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#FFCB05] text-black flex items-center justify-center shadow-lg"><FiExternalLink size={18} /></div>
                  </div>
                  <span className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-[#FFCB05] font-medium border border-[#FFCB05]/20">{p.year}</span>
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#FFCB05] font-medium tracking-wide uppercase mb-2 block">{p.category}</span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FFCB05] transition-colors">{p.title}</h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">{p.description}</p>
                  <div className="flex flex-wrap gap-2">{p.tags.map((t, i) => <span key={i} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#A1A1AA]">{t}</span>)}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </SW>
  );
};

/* ======== PROCESS ======== */
const Process = () => (
  <SW id="process" className="py-28 bg-[#050505]">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      <motion.div variants={fadeUp} className="text-center mb-20">
        <p className="text-xs tracking-[0.3em] uppercase text-[#FFCB05] font-medium mb-4">How We Work</p>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-5">Our <span className="text-[#FFCB05]">Process</span></h2>
        <p className="text-[#A1A1AA] max-w-xl mx-auto text-lg">A structured, transparent approach that delivers consistent excellence every time.</p>
      </motion.div>
      <div className="relative">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#FFCB05]/30 to-transparent" />
        <div className="flex flex-col gap-12">
          {processSteps.map((s, i) => (
            <motion.div key={s.id} variants={fadeUp} className={`flex flex-col lg:flex-row items-center gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
              <div className="w-full lg:w-5/12">
                <motion.div whileHover={{ scale: 1.02 }} className="p-7 rounded-2xl bg-[#0B0B0B] border border-white/8 hover:border-[#FFCB05]/30 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#FFCB05]/10 border border-[#FFCB05]/20 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FFCB05]/20 transition-colors">
                      <Icon name={s.icon} size={20} className="text-[#FFCB05]" />
                    </div>
                    <div><h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FFCB05] transition-colors">{s.title}</h3><p className="text-[#A1A1AA] text-sm leading-relaxed">{s.description}</p></div>
                  </div>
                </motion.div>
              </div>
              <div className="hidden lg:flex w-2/12 justify-center">
                <motion.div whileHover={{ scale: 1.2 }} className="w-14 h-14 rounded-full bg-[#FFCB05] text-black font-black text-lg flex items-center justify-center shadow-[0_0_25px_rgba(255,203,5,0.5)] z-10">{s.step}</motion.div>
              </div>
              <div className="hidden lg:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </SW>
);

/* ======== TESTIMONIALS ======== */
const Testimonials = () => {
  const [cur, setCur] = useState(0);
  useEffect(() => { const t = setInterval(() => setCur(p => (p + 1) % testimonials.length), 4500); return () => clearInterval(t); }, []);
  return (
    <SW id="testimonials" className="py-28 bg-[#0B0B0B] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#FFCB05] font-medium mb-4">Client Stories</p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-5">What They <span className="text-[#FFCB05]">Say</span></h2>
        </motion.div>
        <motion.div variants={scaleIn} className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div key={cur} initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -60 }} transition={{ duration: 0.5 }}
              className="relative p-10 rounded-3xl bg-[#050505]/80 border border-white/8 backdrop-blur-xl overflow-hidden">
              <div className="absolute top-0 left-1/4 w-64 h-32 bg-[#FFCB05]/4 blur-3xl rounded-full pointer-events-none" />
              <div className="flex gap-1 mb-6">{Array.from({ length: testimonials[cur].rating }).map((_, i) => <FiStar key={i} size={18} className="text-[#FFCB05] fill-[#FFCB05]" />)}</div>
              <div className="text-8xl text-[#FFCB05]/10 font-serif leading-none absolute top-6 right-10 select-none pointer-events-none">"</div>
              <p className="text-white text-lg md:text-xl leading-relaxed mb-8 relative z-10">"{testimonials[cur].text}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonials[cur].image} alt={testimonials[cur].name} className="w-14 h-14 rounded-full object-cover border-2 border-[#FFCB05]/30" />
                <div><div className="text-white font-bold">{testimonials[cur].name}</div><div className="text-[#A1A1AA] text-sm">{testimonials[cur].role}</div></div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => <button key={i} onClick={() => setCur(i)} className={`transition-all duration-300 rounded-full ${i === cur ? "w-8 h-2.5 bg-[#FFCB05] shadow-[0_0_8px_rgba(255,203,5,0.7)]" : "w-2.5 h-2.5 bg-white/20 hover:bg-white/40"}`} />)}
          </div>
        </motion.div>
      </div>
    </SW>
  );
};

/* ======== FAQ ======== */
const FAQ = () => {
  const [open, setOpen] = useState(null);
  return (
    <SW id="faq" className="py-28 bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6 lg:px-10">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#FFCB05] font-medium mb-4">Got Questions?</p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-5">Frequently <span className="text-[#FFCB05]">Asked</span></h2>
        </motion.div>
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <motion.div key={f.id} variants={fadeUp} className={`rounded-2xl border transition-all duration-300 overflow-hidden ${open === f.id ? "border-[#FFCB05]/40 bg-[#FFCB05]/4" : "border-white/8 bg-[#0B0B0B] hover:border-white/20"}`}>
              <button onClick={() => setOpen(p => p === f.id ? null : f.id)} className="w-full flex items-center justify-between px-7 py-6 text-left">
                <span className={`font-semibold text-base transition-colors ${open === f.id ? "text-[#FFCB05]" : "text-white"}`}>{f.question}</span>
                <span className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${open === f.id ? "bg-[#FFCB05] border-[#FFCB05] text-black" : "border-white/15 text-[#A1A1AA]"}`}>
                  {open === f.id ? <FiMinus size={14} /> : <FiPlus size={14} />}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {open === f.id && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }}>
                    <div className="px-7 pb-6 text-[#A1A1AA] text-sm leading-relaxed">{f.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </SW>
  );
};

/* ======== CONTACT ======== */
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", service: "", budget: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const validate = () => { const e = {}; if (!form.name.trim()) e.name = "Name required"; if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = "Valid email required"; if (!form.service) e.service = "Select a service"; if (!form.message.trim()) e.message = "Message required"; return e; };
  const submit = (e) => { e.preventDefault(); const errs = validate(); if (Object.keys(errs).length) { setErrors(errs); return; } setSent(true); };
  const change = (e) => { const { name, value } = e.target; setForm(p => ({ ...p, [name]: value })); setErrors(p => ({ ...p, [name]: "" })); };
  const cls = (f) => `w-full bg-[#0B0B0B] border ${errors[f] ? "border-red-500/50" : "border-white/10"} rounded-xl px-5 py-4 text-white text-sm placeholder-[#A1A1AA]/50 focus:outline-none focus:border-[#FFCB05]/60 focus:ring-1 focus:ring-[#FFCB05]/20 transition-all duration-200`;
  const contacts = [{ Ic: FiMail, label: "Email", value: contactInfo.email }, { Ic: FiPhone, label: "Phone", value: contactInfo.phone }, { Ic: FiMapPin, label: "Address", value: contactInfo.address }, { Ic: FiClock, label: "Availability", value: contactInfo.availability }];
  return (
    <SW id="contact" className="py-28 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div variants={fadeUp} className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[#FFCB05] font-medium mb-4">Get In Touch</p>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-5">Start a <span className="text-[#FFCB05]">Project</span></h2>
          <p className="text-[#A1A1AA] max-w-xl mx-auto text-lg">Ready to build something extraordinary? Let's talk about your vision.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div variants={fadeUp} className="lg:col-span-2 flex flex-col gap-6">
            {contacts.map(({ Ic, label, value }, i) => (
              <motion.div key={i} whileHover={{ x: 4 }} className="flex items-start gap-4 p-5 rounded-2xl bg-[#050505] border border-white/8 hover:border-[#FFCB05]/30 transition-all">
                <div className="w-10 h-10 rounded-xl bg-[#FFCB05]/10 border border-[#FFCB05]/20 flex items-center justify-center flex-shrink-0"><Ic size={16} className="text-[#FFCB05]" /></div>
                <div><div className="text-xs text-[#A1A1AA] mb-1">{label}</div><div className="text-white text-sm font-medium">{value}</div></div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={scaleIn} className="lg:col-span-3">
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="min-h-[400px] flex flex-col items-center justify-center gap-4 p-10 rounded-2xl bg-[#050505] border border-[#FFCB05]/30">
                <div className="w-20 h-20 rounded-full bg-[#FFCB05]/10 flex items-center justify-center"><FiCheckCircle size={40} className="text-[#FFCB05]" /></div>
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-[#A1A1AA] text-center">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button onClick={() => { setSent(false); setForm({ name: "", email: "", service: "", budget: "", message: "" }); }} className="mt-4 px-6 py-2.5 bg-[#FFCB05] text-black font-bold rounded-full">Send Another</button>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="p-8 rounded-2xl bg-[#050505] border border-white/8 flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div><input name="name" value={form.name} onChange={change} placeholder="Your Name" className={cls("name")} />{errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}</div>
                  <div><input name="email" value={form.email} onChange={change} placeholder="Email Address" className={cls("email")} />{errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}</div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <select name="service" value={form.service} onChange={change} className={`${cls("service")} appearance-none`}>
                      <option value="">Select Service</option>
                      {serviceOptions.map((s, i) => <option key={i} value={s} className="bg-[#0B0B0B]">{s}</option>)}
                    </select>
                    {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
                  </div>
                  <div>
                    <select name="budget" value={form.budget} onChange={change} className={`${cls("budget")} appearance-none`}>
                      <option value="">Select Budget</option>
                      {budgetOptions.map((b, i) => <option key={i} value={b} className="bg-[#0B0B0B]">{b}</option>)}
                    </select>
                  </div>
                </div>
                <div><textarea name="message" value={form.message} onChange={change} placeholder="Tell us about your project..." rows={5} className={`${cls("message")} resize-none`} />{errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}</div>
                <motion.button type="submit" whileHover={{ scale: 1.02, boxShadow: "0 0 25px rgba(255,203,5,0.45)" }} whileTap={{ scale: 0.97 }} className="w-full py-4 bg-[#FFCB05] text-black font-bold text-base rounded-xl flex items-center justify-center gap-2">
                  Send Message <FiArrowRight size={18} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </SW>
  );
};

/* ======== FOOTER ======== */
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#050505] border-t border-white/8 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-2">
            <div className="text-3xl font-black text-white mb-4">Tab<span className="text-[#FFCB05]">Serv</span></div>
            <p className="text-[#A1A1AA] text-sm leading-relaxed max-w-xs mb-6">Bringing together strategy, creativity, and technology to build digital products that make our clients look extraordinary.</p>
            <div className="flex gap-3">
              {socialLinks.map(s => (
                <motion.a key={s.id} href="#" whileHover={{ scale: 1.15, y: -2 }} className="w-10 h-10 rounded-full border border-white/10 bg-white/4 flex items-center justify-center text-[#A1A1AA] hover:text-[#FFCB05] hover:border-[#FFCB05]/40 transition-all">
                  <Icon name={s.icon} size={16} />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.quickLinks.map((l, i) => (
                <li key={i}><button onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })} className="text-[#A1A1AA] text-sm hover:text-[#FFCB05] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#FFCB05]/40 group-hover:bg-[#FFCB05] transition-colors" />{l.label}
                </button></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-5 text-sm tracking-wider uppercase">Services</h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((l, i) => (
                <li key={i}><button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="text-[#A1A1AA] text-sm hover:text-[#FFCB05] transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 rounded-full bg-[#FFCB05]/40 group-hover:bg-[#FFCB05] transition-colors" />{l.label}
                </button></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/8 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#A1A1AA] text-sm">© {year} TabServ. All rights reserved.</p>
          <p className="text-[#A1A1AA] text-sm">Crafted with precision by TabServ Studio</p>
        </div>
      </div>
    </footer>
  );
};

/* ======== ROOT APP ======== */
export default function App() {
  useEffect(() => { document.documentElement.style.scrollBehavior = "smooth"; }, []);
  return (
    <div className="bg-[#050505] min-h-screen font-sans antialiased">
      <Navbar />
      <Hero />
      <ClientsMarquee />
      <Services />
      <Portfolio />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}