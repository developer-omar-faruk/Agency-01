import { testimonials } from '../data01';
import AnimatedSection from './common/AnimatedSection';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiStar, FiChevronLeft, FiChevronRight } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

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

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

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

                {/* Author Info */}
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
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
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
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? "w-8 bg-[#FFCB05]" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
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

export default Testimonials;