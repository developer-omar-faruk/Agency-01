import { heroContent } from '../data01.js';
import { useRef, useMemo, useCallback } from "react";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { FiArrowRight, FiChevronDown } from "react-icons/fi";

const Hero = () => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sx = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const sy = useSpring(mouseY, { stiffness: 40, damping: 30 });

  const bubbles = useMemo(() => 
    Array.from({ length: 16 }, (_, i) => ({
      id: i,
      size: Math.random() * 80 + 20,
      x: Math.random() * 100,
      y: Math.random() * 100,
      dur: Math.random() * 10 + 8,
      del: Math.random() * 4
    })), 
  []);

  const onMove = useCallback((e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set(((e.clientX - r.left) / r.width - 0.5) * 40);
    mouseY.set(((e.clientY - r.top) / r.height - 0.5) * 40);
  }, [mouseX, mouseY]);

  return (
    <section 
      id='Hero'
      ref={ref} 
      onMouseMove={onMove} 
      className="relative min-h-screen flex flex-col justify-start items-center overflow-hidden bg-[#050505]"
    >
      {bubbles.map(b => (
        <motion.div 
          key={b.id} 
          className="absolute rounded-full pointer-events-none"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.x}%`,
            top: `${b.y}%`,
            background: "radial-gradient(circle, rgba(255,203,5,0.08) 0%, transparent 70%)",
            border: "1px solid rgba(255,203,5,0.06)",
            x: sx,
            y: sy
          }}
          animate={{ 
            y: [0, -30, 0], 
            scale: [1, 1.1, 1], 
            opacity: [0.3, 0.8, 0.3] 
          }}
          transition={{ 
            duration: b.dur, 
            delay: b.del, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }} 
        />
      ))}

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FFCB05]/7 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/7 rounded-full blur-3xl pointer-events-none" />
      
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
          backgroundSize: "60px 60px"
        }} 
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-22 md:pt-32 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#FFCB05]/30 bg-[#FFCB05]/5 text-[#FFCB05] text-sm font-medium mb-8"
        >
          {heroContent.badge}
        </motion.div>

        <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-black leading-none tracking-tighter text-white mb-6">
          <motion.span 
            initial={{ opacity: 0, y: 60 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.25 }} 
            className="block"
          >
            {heroContent.headingLine1}
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 60 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.38 }} 
            className="block text-transparent" 
            style={{ WebkitTextStroke: "2px #FFCB05" }}
          >
            {heroContent.headingLine2}
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 60 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.5 }} 
            className="block"
          >
            {heroContent.headingLine3}
          </motion.span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.65 }} 
          className="max-w-2xl mx-auto text-[#A1A1AA] text-lg leading-relaxed mb-10"
        >
          {heroContent.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.78 }} 
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,203,5,0.5)" }} 
            whileTap={{ scale: 0.95 }} 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} 
            className="flex items-center gap-2 px-8 py-4 bg-[#FFCB05] text-black font-bold text-base rounded-full"
          >
            {heroContent.primaryCTA.label} <FiArrowRight />
          </motion.button>

          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })} 
            className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold text-base rounded-full hover:bg-white/5 transition-all"
          >
            {heroContent.secondaryCTA.label}
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.9 }} 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
        >
          {heroContent.stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#FFCB05] mb-1">{s.value}</div>
              <div className="text-sm text-[#A1A1AA]">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 2, repeat: Infinity }} 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#A1A1AA]"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <FiChevronDown size={18} />
      </motion.div>
    </section>
  );
};

export default Hero;
