import { navLinks } from '../data01.js';
import { useState, useEffect } from 'react';

import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const go = (id) => {
   setActive(id);

   setTimeout(() => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    }, 100);

    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-black text-white cursor-pointer"
        >
          <a href="#Hero">Tab<span className="text-[#FFCB05]">Tech</span></a>
        </motion.div>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`relative text-sm font-medium tracking-wide transition-colors group ${
                  active === l.id ? "text-[#FFCB05]" : "text-[#A1A1AA] hover:text-white"
                }`}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#FFCB05] group-hover:w-full transition-all duration-300" />
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <motion.button
            onClick={() => go("contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-[#FFCB05] text-black text-sm font-bold rounded-full hover:shadow-[0_0_20px_rgba(255,203,5,0.5)] transition-all"
          >
            Let's Talk <FiArrowRight size={14} />
          </motion.button>

          <button
            className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-[#0B0B0B]/95 backdrop-blur-xl border-t border-white/5"
          >
            <ul className="flex flex-col p-6 gap-5">
              {navLinks.map((l) => (
                <li key={l.id}>
                  {/* href={`#${l.id}`} */}
                  <button
                    onClick={() => go(l.id)}
                    className="text-base font-medium text-[#A1A1AA] hover:text-[#FFCB05] transition-colors"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => go("contact")}
                  className="w-full py-3 bg-[#FFCB05] text-black font-bold rounded-full"
                >
                  Let's Talk
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;