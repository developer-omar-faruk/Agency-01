import { useMemo } from "react";
import { motion } from "framer-motion";
import { clients } from '../data01';

import { 
  FiGlobe, 
  FiCode, 
  FiMonitor, 
  FiSmartphone,
  FiCpu, 
  FiZap, 
  FiMusic, 
  FiCamera,
  FiStar
} from "react-icons/fi";

const iconMap = {
  Google: FiGlobe,
  Microsoft: FiCode,
  Apple: FiMonitor,
  Amazon: FiGlobe,
  Meta: FiCamera,
  Netflix: FiMusic,
  Adobe: FiZap,
  Spotify: FiMusic,
  Airbnb: FiGlobe,
  Tesla: FiZap,
  Samsung: FiMonitor,
  NVIDIA: FiCpu,
};

const ClientsMarquee = () => {
  const doubled = useMemo(() => [...clients, ...clients], []);

  return (
    <section className="py-16 bg-[#0B0B0B] border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#A1A1AA] font-medium">
          Trusted by industry leaders
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-[#0B0B0B] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-[#0B0B0B] to-transparent" />

        <motion.div 
          className="flex gap-12 items-center" 
          animate={{ x: ["0%", "-50%"] }} 
          transition={{ duration: 22, ease: "linear", repeat: Infinity }} 
          style={{ width: "max-content" }}
        >
          {doubled.map((c, i) => {
            const Icon = iconMap[c.name] || FiStar;
            return (
              <div 
                key={`${c.id}-${i}`} 
                className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/8 bg-white/3 hover:border-[#FFCB05]/40 hover:bg-[#FFCB05]/5 transition-all duration-300 whitespace-nowrap group cursor-default"
              >
                <Icon className="w-6 h-6 text-[#FFCB05] group-hover:scale-110 transition-transform" />
                <span className="text-[#A1A1AA] group-hover:text-white font-semibold text-sm tracking-wide transition-colors">
                  {c.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsMarquee;