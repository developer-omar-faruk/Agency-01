/* ========================================
   APP.JSX - TABTECH DIGITAL AGENCY WEBSITE
   Built with React + Tailwind CSS + Framer Motion
   ======================================== */

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import {
  FiCode, FiSmartphone, FiTrendingUp, FiLayers,
  FiSearch, FiTarget, FiPenTool, FiZap,
  FiTwitter, FiLinkedin, FiInstagram, FiGithub,
  FiDribbble, FiMenu, FiX, FiArrowRight,
  FiPlus, FiMinus, FiMail, FiPhone, FiMapPin,
  FiStar, FiChevronLeft, FiChevronRight, FiExternalLink,
  FiCheck, FiArrowUpRight,
} from "react-icons/fi";

import {
  navLinks, heroContent, clients, services, projects,
  portfolioCategories, processSteps, testimonials, faqs,
  contactInfo, socialLinks, footerContent, stats,
} from "./data02.js";

/* ========================================
   ICON MAP HELPER
   Maps icon string names to actual components
   ======================================== */
const iconMap = {
  FiCode, FiSmartphone, FiTrendingUp, FiLayers,
  FiSearch, FiTarget, FiPenTool, FiZap,
  FiTwitter, FiLinkedin, FiInstagram, FiGithub, FiDribbble,
};

const getIcon = (name, props = {}) => {
  const Icon = iconMap[name];
  return Icon ? <Icon {...props} /> : null;
};

/* ========================================
   ANIMATION VARIANTS
   Reusable Framer Motion variants
   ======================================== */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

/* ========================================
   ANIMATED SECTION WRAPPER
   Scroll-triggered reveal for each section
   ======================================== */
const AnimatedSection = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </motion.div>
  );
};

/* ========================================
   NAVBAR COMPONENT
   ======================================== */
const Navbar = () => {
  // Hooks: scroll state, mobile menu toggle
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Effect: detect scroll for background blur
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Callback: smooth scroll to section
  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
    setActiveSection(id);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="text-2xl font-black tracking-tight cursor-pointer"
            onClick={() => scrollTo("home")}
          >
            <span className="text-white">Tab</span>
            <span className="text-[#FFCB05]">Tech</span>
          </motion.div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className={`relative text-sm font-medium transition-colors duration-300 group ${
                    activeSection === link.id ? "text-[#FFCB05]" : "text-[#A1A1AA] hover:text-white"
                  }`}
                >
                  {link.label}
                  {/* Animated underline */}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FFCB05] group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,203,5,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("contact")}
              className="hidden lg:flex items-center gap-2 bg-[#FFCB05] text-black text-sm font-bold px-6 py-2.5 rounded-full transition-all duration-300"
            >
              Let's Talk <FiArrowRight />
            </motion.button>

            {/* Hamburger button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                    <FiX size={24} />
                  </motion.div>
                ) : (
                  <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                    <FiMenu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl flex flex-col justify-center items-center gap-8 lg:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(link.id)}
                className="text-3xl font-bold text-white hover:text-[#FFCB05] transition-colors"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              onClick={() => scrollTo("contact")}
              className="mt-4 bg-[#FFCB05] text-black font-bold px-8 py-3 rounded-full text-lg"
            >
              Let's Talk
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ========================================
   HERO COMPONENT
   Full-screen hero with animated background
   Mouse-tracking glowing bubbles + particles
   ======================================== */
const Hero = () => {
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });

  // Floating orbs config
  const orbs = useMemo(() => [
    { id: 1, x: "15%", y: "20%", size: 350, color: "#FFCB05", delay: 0, blur: 120 },
    { id: 2, x: "75%", y: "60%", size: 400, color: "#A78BFA", delay: 1.5, blur: 140 },
    { id: 3, x: "50%", y: "85%", size: 300, color: "#34D399", delay: 0.8, blur: 100 },
    { id: 4, x: "85%", y: "15%", size: 250, color: "#F472B6", delay: 2, blur: 90 },
    { id: 5, x: "5%", y: "70%", size: 200, color: "#60A5FA", delay: 1.2, blur: 80 },
  ], []);

  // Particles
  const particles = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 5,
      delay: Math.random() * 4,
    })), []);

  // Mouse tracking for orbs
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      };
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505]"
    >
      {/* Animated Orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: orb.color,
            filter: `blur(${orb.blur}px)`,
            opacity: 0.15,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            x: [0, 30, -20, 15, 0],
            y: [0, -25, 20, -10, 0],
            scale: [1, 1.15, 0.92, 1.08, 1],
            opacity: [0.12, 0.2, 0.13, 0.18, 0.12],
          }}
          transition={{
            duration: 12 + orb.delay * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Floating Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/30 pointer-events-none"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 backdrop-blur-sm text-[#FFCB05] text-sm font-semibold px-5 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 bg-[#FFCB05] rounded-full animate-pulse" />
          {heroContent.badge}
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-8"
        >
          {heroContent.heading.map((line, i) => (
            <motion.span
              key={i}
              variants={fadeUp}
              className={`block ${i === 1 ? "text-[#FFCB05]" : "text-white"}`}
            >
              {line}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-[#A1A1AA] text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {heroContent.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href={heroContent.primaryCTA.href}
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,203,5,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-[#FFCB05] text-black font-bold text-base px-8 py-4 rounded-full transition-all duration-300"
          >
            {heroContent.primaryCTA.label} <FiArrowRight />
          </motion.a>
          <motion.a
            href={heroContent.secondaryCTA.href}
            whileHover={{ scale: 1.05, borderColor: "rgba(255,203,5,0.5)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 border border-white/20 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-white/5 transition-all duration-300"
          >
            {heroContent.secondaryCTA.label} <FiArrowUpRight />
          </motion.a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-wrap justify-center gap-8 mt-20 pt-12 border-t border-white/5"
        >
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="text-3xl font-black text-white">{stat.value}</div>
              <div className="text-sm text-[#A1A1AA] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
    </section>
  );
};

/* ========================================
   CLIENTS MARQUEE COMPONENT
   Infinite horizontal scrolling marquee
   ======================================== */
const ClientsMarquee = () => {
  // Double the clients array for seamless loop
  const doubled = useMemo(() => [...clients, ...clients], []);

  return (
    <section className="py-20 bg-[#0B0B0B] overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[#A1A1AA] text-sm font-semibold uppercase tracking-widest"
        >
          Trusted by world-class brands
        </motion.p>
      </div>

      {/* Marquee Track */}
      <div className="relative group">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ width: "max-content" }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {doubled.map((client, i) => (
            <div
              key={i}
              className="flex items-center gap-3 text-[#A1A1AA] hover:text-white transition-colors duration-300 cursor-default whitespace-nowrap group/item"
            >
              <span className="w-2 h-2 rounded-full bg-[#FFCB05] opacity-60 group-hover/item:opacity-100 transition-opacity" />
              <span className="text-xl font-bold tracking-tight">{client}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

/* ========================================
   SERVICES COMPONENT
   Dynamic service cards with glow effects
   ======================================== */
const Services = () => {
  return (
    <section id="services" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFCB05]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.span variants={fadeUp} className="inline-block text-[#FFCB05] text-sm font-bold uppercase tracking-widest mb-4">
            What We Do
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-6xl font-black text-white leading-tight mb-6">
            Services Built for<br />
            <span className="text-[#FFCB05]">Real Results</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#A1A1AA] text-lg max-w-2xl mx-auto">
            Every service we offer is crafted with precision, powered by data, and designed to drive measurable growth for your business.
          </motion.p>
        </AnimatedSection>

        {/* Service Cards Grid */}
        <AnimatedSection className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

/* Service Card Sub-Component */
const ServiceCard = ({ service, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={scaleIn}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -8 }}
      className="relative group p-8 rounded-3xl bg-[#0B0B0B] border border-white/5 overflow-hidden cursor-pointer transition-all duration-500"
      style={{
        boxShadow: hovered ? `0 0 60px ${service.color}20, 0 20px 40px rgba(0,0,0,0.4)` : "none",
      }}
    >
      {/* Glow border */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        animate={{ opacity: hovered ? 1 : 0 }}
        style={{ border: `1px solid ${service.color}40` }}
        transition={{ duration: 0.3 }}
      />

      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ background: service.color }}
      />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl"
        style={{ background: `${service.color}15`, color: service.color }}
      >
        {getIcon(service.icon)}
      </motion.div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
      <p className="text-[#A1A1AA] leading-relaxed mb-6">{service.description}</p>

      {/* Features */}
      <ul className="flex flex-wrap gap-2 mb-6">
        {service.features.map((f, i) => (
          <li
            key={i}
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{ background: `${service.color}10`, color: service.color }}
          >
            <FiCheck size={10} /> {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <motion.button
        whileHover={{ x: 4 }}
        className="flex items-center gap-2 font-semibold text-sm transition-colors"
        style={{ color: service.color }}
      >
        Learn More <FiArrowRight size={14} />
      </motion.button>
    </motion.div>
  );
};

/* ========================================
   PORTFOLIO COMPONENT
   Filterable project grid with hover overlays
   ======================================== */
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter projects based on active category
  const filtered = useMemo(() =>
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="portfolio" className="py-32 bg-[#0B0B0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[#FFCB05] text-sm font-bold uppercase tracking-widest mb-4">
            Our Work
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-6xl font-black text-white leading-tight mb-6">
            Projects That<br /><span className="text-[#FFCB05]">Define Excellence</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#A1A1AA] text-lg max-w-2xl mx-auto">
            A curated showcase of our finest digital work — built for brands that demand nothing less than extraordinary.
          </motion.p>
        </AnimatedSection>

        {/* Category Filters */}
        <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-14">
          {portfolioCategories.map((cat) => (
            <motion.button
              key={cat}
              variants={fadeUp}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#FFCB05] text-black"
                  : "bg-white/5 text-[#A1A1AA] hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </AnimatedSection>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

/* Project Card Sub-Component */
const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -6 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative rounded-2xl overflow-hidden bg-[#0B0B0B] border border-white/5 group cursor-pointer"
      style={{ boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.6)" : "none" }}
    >
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.5 }}
        />
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6"
          animate={{ opacity: hovered ? 1 : 0.6 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: hovered ? 0 : 20, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 bg-[#FFCB05] text-black text-xs font-bold px-4 py-2 rounded-full"
          >
            Preview <FiExternalLink size={12} />
          </motion.button>
        </motion.div>
        {/* Category badge */}
        <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-[#FFCB05] text-xs font-bold px-3 py-1 rounded-full border border-[#FFCB05]/20">
          {project.category}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-white">{project.name}</h3>
          <span className="text-xs text-[#A1A1AA]">{project.year}</span>
        </div>
        <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span key={i} className="text-xs text-[#A1A1AA] bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* ========================================
   PROCESS COMPONENT
   Interactive timeline section
   ======================================== */
const Process = () => {
  return (
    <section id="process" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#A78BFA]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <motion.span variants={fadeUp} className="inline-block text-[#FFCB05] text-sm font-bold uppercase tracking-widest mb-4">
            How We Work
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-6xl font-black text-white leading-tight mb-6">
            Our Proven<br /><span className="text-[#FFCB05]">Process</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#A1A1AA] text-lg max-w-2xl mx-auto">
            A structured, transparent approach that turns your vision into a high-performing digital product — on time and beyond expectation.
          </motion.p>
        </AnimatedSection>

        {/* Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, i) => (
            <ProcessCard key={step.id} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* Process Card */
const ProcessCard = ({ step, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,203,5,0.15)" }}
      className="relative p-8 rounded-3xl bg-[#0B0B0B] border border-white/5 overflow-hidden group transition-all duration-500"
    >
      {/* Step number bg */}
      <div className="absolute -top-4 -right-4 text-[120px] font-black text-white/[0.03] leading-none select-none">
        {step.step}
      </div>

      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-[#FFCB05]/10 flex items-center justify-center text-[#FFCB05] text-xl mb-4 group-hover:bg-[#FFCB05]/20 transition-colors">
        {getIcon(step.icon)}
      </div>

      <div className="text-[#FFCB05] text-xs font-bold uppercase tracking-widest mb-2">{step.step}</div>
      <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
      <p className="text-[#A1A1AA] text-sm leading-relaxed">{step.description}</p>
    </motion.div>
  );
};

/* ========================================
   TESTIMONIALS COMPONENT
   Premium slider with glass cards
   ======================================== */
const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0, scale: 0.95 }),
  };

  return (
    <section id="testimonials" className="py-32 bg-[#0B0B0B] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#F472B6]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[#FFCB05] text-sm font-bold uppercase tracking-widest mb-4">
            Client Voices
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-6xl font-black text-white leading-tight mb-4">
            Words From<br /><span className="text-[#FFCB05]">Our Clients</span>
          </motion.h2>
        </AnimatedSection>

        {/* Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="p-10 lg:p-14 bg-white/[0.03] border border-white/10 rounded-3xl backdrop-blur-sm"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <FiStar key={i} className="text-[#FFCB05] fill-[#FFCB05]" size={18} />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white text-xl lg:text-2xl font-medium leading-relaxed mb-10">
                  "{testimonials[current].review}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    className="w-14 h-14 rounded-full border-2 border-[#FFCB05]/30 object-cover"
                  />
                  <div>
                    <div className="text-white font-bold">{testimonials[current].name}</div>
                    <div className="text-[#A1A1AA] text-sm">{testimonials[current].role}</div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-[#FFCB05] text-sm font-bold">{testimonials[current].company}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#FFCB05]/40 hover:text-[#FFCB05] transition-all"
            >
              <FiChevronLeft />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-[#FFCB05]" : "w-2 bg-white/20"}`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-[#FFCB05]/40 hover:text-[#FFCB05] transition-all"
            >
              <FiChevronRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ========================================
   FAQ COMPONENT
   Animated accordion
   ======================================== */
const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const toggle = useCallback((id) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  return (
    <section id="faq" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFCB05]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[#FFCB05] text-sm font-bold uppercase tracking-widest mb-4">
            Got Questions?
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-6xl font-black text-white leading-tight mb-4">
            Frequently Asked<br /><span className="text-[#FFCB05]">Questions</span>
          </motion.h2>
        </AnimatedSection>

        {/* Accordion */}
        <AnimatedSection className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.id}
              variants={fadeUp}
              className="rounded-2xl border border-white/5 bg-[#0B0B0B] overflow-hidden"
              style={{ boxShadow: openId === faq.id ? "0 0 30px rgba(255,203,5,0.06)" : "none" }}
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className={`font-semibold text-base transition-colors ${openId === faq.id ? "text-[#FFCB05]" : "text-white group-hover:text-[#FFCB05]"}`}>
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openId === faq.id ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`ml-4 flex-shrink-0 transition-colors ${openId === faq.id ? "text-[#FFCB05]" : "text-[#A1A1AA]"}`}
                >
                  <FiPlus size={20} />
                </motion.span>
              </button>

              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="px-6 pb-6 text-[#A1A1AA] leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
};

/* ========================================
   CONTACT COMPONENT
   Modern contact form with validation
   ======================================== */
const Contact = () => {
  // Form state
  const [form, setForm] = useState({ name: "", email: "", service: "", budget: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Form validation
  const validate = useCallback(() => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = "Valid email required";
    if (!form.service) errs.service = "Please select a service";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  }, [form]);

  // Handle input change
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  // Handle form submit
  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  }, [validate]);

  // Input class helper
  const inputClass = (field) =>
    `w-full bg-white/[0.04] border ${errors[field] ? "border-red-500" : "border-white/10"} text-white rounded-xl px-5 py-4 text-sm outline-none focus:border-[#FFCB05]/50 focus:ring-1 focus:ring-[#FFCB05]/20 transition-all duration-300 placeholder-[#A1A1AA]/50`;

  return (
    <section id="contact" className="py-32 bg-[#0B0B0B] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#34D399]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.span variants={fadeUp} className="inline-block text-[#FFCB05] text-sm font-bold uppercase tracking-widest mb-4">
            Let's Build Together
          </motion.span>
          <motion.h2 variants={fadeUp} className="text-4xl sm:text-6xl font-black text-white leading-tight mb-4">
            Start Your<br /><span className="text-[#FFCB05]">Project Today</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#A1A1AA] text-lg max-w-2xl mx-auto">
            Ready to elevate your digital presence? Tell us about your project and we'll get back to you within 24 hours.
          </motion.p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info Panel */}
          <AnimatedSection className="lg:col-span-2 space-y-8">
            <motion.div variants={fadeUp} className="p-8 rounded-3xl bg-[#050505] border border-white/5">
              <h3 className="text-xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-5">
                {[
                  { icon: <FiMail />, label: "Email", value: contactInfo.email },
                  { icon: <FiPhone />, label: "Phone", value: contactInfo.phone },
                  { icon: <FiMapPin />, label: "Address", value: contactInfo.address },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#FFCB05]/10 flex items-center justify-center text-[#FFCB05] flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-[#A1A1AA] font-semibold uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="text-white text-sm">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeUp} className="p-8 rounded-3xl bg-[#050505] border border-white/5">
              <h3 className="text-sm font-bold text-[#A1A1AA] uppercase tracking-widest mb-5">Follow Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.id}
                    href={s.href}
                    whileHover={{ scale: 1.1, color: "#FFCB05" }}
                    className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:border-[#FFCB05]/30 transition-all"
                    aria-label={s.name}
                  >
                    {getIcon(s.icon, { size: 16 })}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection className="lg:col-span-3">
            <motion.div variants={scaleIn} className="p-10 rounded-3xl bg-[#050505] border border-white/5">
              {submitted ? (
                /* Success State */
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-20 h-20 rounded-full bg-[#FFCB05]/10 flex items-center justify-center text-[#FFCB05] text-4xl mb-6"
                  >
                    <FiCheck />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-[#A1A1AA]">We'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", service: "", budget: "", message: "" }); }}
                    className="mt-6 text-[#FFCB05] text-sm font-semibold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <input type="text" name="name" value={form.name} onChange={handleChange}
                        placeholder="Full Name" className={inputClass("name")} />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="Email Address" className={inputClass("email")} />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <select name="service" value={form.service} onChange={handleChange} className={inputClass("service")}>
                        <option value="" disabled>Select Service</option>
                        {contactInfo.formServices.map((s) => (
                          <option key={s} value={s} className="bg-[#0B0B0B]">{s}</option>
                        ))}
                      </select>
                      {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
                    </div>
                    <div>
                      <select name="budget" value={form.budget} onChange={handleChange} className={inputClass("budget")}>
                        <option value="" disabled>Budget Range</option>
                        {contactInfo.budgets.map((b) => (
                          <option key={b} value={b} className="bg-[#0B0B0B]">{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <textarea name="message" value={form.message} onChange={handleChange}
                      placeholder="Tell us about your project..." rows={5}
                      className={`${inputClass("message")} resize-none`} />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(255,203,5,0.3)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-3 bg-[#FFCB05] text-black font-bold py-4 rounded-xl text-base transition-all duration-300 disabled:opacity-70"
                  >
                    {loading ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full" />
                    ) : (
                      <><span>Send Message</span><FiArrowRight /></>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

/* ========================================
   FOOTER COMPONENT
   ======================================== */
const Footer = () => {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="text-3xl font-black mb-4">
              <span className="text-white">Tab</span>
              <span className="text-[#FFCB05]">Tech</span>
            </div>
            <p className="text-[#A1A1AA] text-sm leading-relaxed max-w-sm mb-6">
              {footerContent.tagline}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.id}
                  href={s.href}
                  whileHover={{ scale: 1.1, color: "#FFCB05" }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:border-[#FFCB05]/30 transition-all"
                  aria-label={s.name}
                >
                  {getIcon(s.icon, { size: 14 })}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerContent.quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    className="text-[#A1A1AA] text-sm hover:text-[#FFCB05] transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-[#FFCB05] transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Services</h4>
            <ul className="space-y-3">
              {footerContent.serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    className="text-[#A1A1AA] text-sm hover:text-[#FFCB05] transition-colors flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-3 h-px bg-[#FFCB05] transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#A1A1AA] text-sm">{footerContent.copyright}</p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <a key={item} href="#" className="text-[#A1A1AA] text-sm hover:text-[#FFCB05] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ========================================
   MAIN APP COMPONENT
   Root layout — assembles all sections
   ======================================== */
export default function App() {
  return (
    <div className="bg-[#050505] text-white font-sans antialiased">
      {/* SEO-friendly structure with semantic HTML */}
      <Navbar />
      <main>
        <Hero />
        <ClientsMarquee />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}