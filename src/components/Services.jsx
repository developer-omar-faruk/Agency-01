import { services } from '../data01';
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiCode, FiSmartphone, FiTrendingUp,
  FiFeather, FiSearch, FiTarget,
  FiLayout, FiZap, FiArrowRight,
} from "react-icons/fi";

// ─────────────────────────────────────────────
// Icon Resolver
// ─────────────────────────────────────────────
const iconMap = {FiCode,FiSmartphone,FiTrendingUp,FiFeather,FiSearch,FiTarget,FiLayout,FiZap,};

const Icon = ({ name, ...props }) => {
  const Component = iconMap[name];
  return Component ? <Component {...props} /> : null;
};

// ─────────────────────────────────────────────
// Motion Variants
// ─────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ─────────────────────────────────────────────
// Section Wrapper with Scroll Animation
// ─────────────────────────────────────────────
const SW = ({ children, id, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// ─────────────────────────────────────────────
// Main Services Component
// ─────────────────────────────────────────────
const Services = () => (
  <SW id="services" className="py-28 bg-[#050505]">
    <div className="max-w-7xl mx-auto px-6 lg:px-10">
      {/* Header */}
      <motion.div variants={fadeUp} className="text-center mb-20">
        <p className="text-xs tracking-[0.3em] uppercase text-[#FFCB05] font-medium mb-4">
          What We Do
        </p>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-5">
          Our <span className="text-[#FFCB05]">Services</span>
        </h2>
        <p className="text-[#A1A1AA] max-w-xl mx-auto text-lg">
          End-to-end digital solutions crafted to elevate your brand and accelerate growth.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((s) => (
          <motion.div
            key={s.id}
            variants={scaleIn}
            whileHover={{ y: -8, scale: 1.01 }}
            className="group relative p-8 rounded-2xl bg-[#0B0B0B] border border-white/8 hover:border-[#FFCB05]/30 transition-all duration-300 overflow-hidden cursor-pointer"
          >
            {/* Hover Glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${s.color}10 0%, transparent 60%)`,
              }}
            />

            {/* Service Icon */}
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110"
              style={{
                backgroundColor: `${s.color}15`,
                border: `1px solid ${s.color}30`,
              }}
            >
              <Icon name={s.icon} size={24} style={{ color: s.color }} />
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFCB05] transition-colors">
              {s.title}
            </h3>

            <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">
              {s.description}
            </p>

            {/* Features */}
            <ul className="flex flex-wrap gap-2 mb-6">
              {s.features.map((f, j) => (
                <li
                  key={j}
                  className="text-xs px-3 py-1.5 rounded-full border font-medium"
                  style={{
                    borderColor: `${s.color}30`,
                    color: s.color,
                    background: `${s.color}08`,
                  }}
                >
                  {f}
                </li>
              ))}
            </ul>

            {/* Learn More Button */}
            <button
              className="flex items-center gap-2 text-sm font-semibold transition-all"
              style={{ color: s.color }}
            >
              Learn More
              <FiArrowRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </SW>
);

export default Services;