import { processSteps, fadeUp } from '../data01';
import AnimatedSection from './common/AnimatedSection';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiCode,
  FiSmartphone,
  FiTrendingUp,
  FiLayers,
  FiSearch,
  FiTarget,
  FiPenTool,
  FiZap,
  FiArrowRight,
} from "react-icons/fi";

const iconMap = {
  FiCode,
  FiSmartphone,
  FiTrendingUp,
  FiLayers,
  FiSearch,
  FiTarget,
  FiPenTool,
  FiZap,
};

const getIcon = (name, props = {}) => {
  const Icon = iconMap[name];
  return Icon ? <Icon {...props} /> : null;
};


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
      
      className="relative hover:-translate-y-3 hover:border-[#FFCB05]/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,203,5,0.15)] p-8 rounded-3xl bg-[#0B0B0B] border border-white/5 overflow-hidden group transition-all duration-300"
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

export default Process;