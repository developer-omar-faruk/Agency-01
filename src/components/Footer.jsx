import {socialLinks} from '../data'
import { motion } from "framer-motion";
import {
  FiTwitter, FiLinkedin, FiInstagram, FiGithub,
  FiDribbble, FiMail, FiPhone, FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

const footerLinks = {
  quickLinks: [{ label: "Services", id: "services" }, { label: "Portfolio", id: "portfolio" }, { label: "Process", id: "process" }, { label: "Testimonials", id: "testimonials" }, { label: "FAQ", id: "faq" }, { label: "Contact", id: "contact" }],
  services: [{ label: "Web Development" }, { label: "App Development" }, { label: "SEO Optimization" }, { label: "Brand Design" }],
};

// ── Icon Resolver ──────────────────────────────────────────
const iconMap = { FiTwitter, FiLinkedin, FiInstagram, FiGithub, FiDribbble };
const Icon = ({ name, ...props }) => { const C = iconMap[name]; return C ? <C {...props} /> : null; };


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#050505] border-t border-white/8 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-2">
            <div className="text-3xl font-black text-white mb-4">Tab<span className="text-[#FFCB05]">Tech</span></div>
            <p className="text-[#A1A1AA] text-sm leading-relaxed max-w-xs mb-6">Bringing together strategy, creativity, and technology to build digital products that make our clients look extraordinary.</p>
            <div className="flex gap-3">
              {socialLinks.map(s => (
                <motion.a key={s.id} href={s.href} whileHover={{ scale: 1.15, y: -2 }} className="w-10 h-10 rounded-full border border-white/10 bg-white/4 flex items-center justify-center text-[#A1A1AA] hover:text-[#FFCB05] hover:border-[#FFCB05]/40 transition-all">
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
          <p className="text-[#A1A1AA] text-sm">© {year} TabTech. All rights reserved.</p>
          <p className="text-[#A1A1AA] text-sm">Crafted with precision by TabTech Studio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer
