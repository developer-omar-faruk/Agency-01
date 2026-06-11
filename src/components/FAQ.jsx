import { faqs, fadeUp } from "../data01.js";
import SW from "./common/SectionWraper.jsx";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";


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

export default FAQ
