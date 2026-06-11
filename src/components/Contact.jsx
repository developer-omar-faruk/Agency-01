import {contactInfo,socialLinks, fadeUp,scaleIn} from '../data01'
import AnimatedSection from './common/AnimatedSection';

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  FiTwitter, FiLinkedin, FiInstagram, FiGithub,
  FiDribbble, FiMail, FiPhone, FiMapPin,
  FiArrowRight,
} from "react-icons/fi";

const iconMap = {
  FiTwitter, FiLinkedin, FiInstagram, FiGithub, FiDribbble,
};

const getIcon = (name, props = {}) => {
  const Icon = iconMap[name];
  return Icon ? <Icon {...props} /> : null;
};


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

export default Contact
