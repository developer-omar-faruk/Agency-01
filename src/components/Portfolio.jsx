import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { projects, portfolioCategories } from '../data';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="portfolio" className="py-32 bg-[#0B0B0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block text-[#FFCB05] text-sm font-bold uppercase tracking-widest mb-4"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black text-white leading-tight mb-6"
          >
            Projects That<br />
            <span className="text-[#FFCB05]">Define Excellence</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#A1A1AA] text-lg max-w-2xl mx-auto"
          >
            A curated showcase of our finest digital work — built for brands that demand nothing less than extraordinary.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {portfolioCategories.map((cat) => (
            <motion.button
              key={cat}
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
        </div>

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

/* Project Card Component */
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
      {/* Image Container */}
      <div className="relative overflow-hidden h-56">
        <motion.img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Hover Overlay */}
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

        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-[#FFCB05] text-xs font-bold px-3 py-1 rounded-full border border-[#FFCB05]/20">
          {project.category}
        </span>
      </div>

      {/* Card Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-bold text-white">{project.name}</h3>
          <span className="text-xs text-[#A1A1AA]">{project.year}</span>
        </div>
        <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs text-[#A1A1AA] bg-white/5 px-2.5 py-1 rounded-full border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Portfolio;