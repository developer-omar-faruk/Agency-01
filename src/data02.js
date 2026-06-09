/* ========================================
   DATA FILE - ALL WEBSITE CONTENT
   ======================================== */

// Navigation Links
export const navLinks = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "process", label: "Process" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

// Hero Content
export const heroContent = {
  badge: "🚀 Award-Winning Digital Agency",
  heading: ["Building Digital", "Experiences That", "Grow Brands"],
  description:
    "We craft premium digital products — from blazing-fast websites to powerful mobile apps and unforgettable brand identities that convert visitors into loyal customers.",
  primaryCTA: { label: "Start a Project", href: "#contact" },
  secondaryCTA: { label: "View Our Work", href: "#portfolio" },
};

// Clients
export const clients = [
  "Google",
  "Meta",
  "Adobe",
  "Shopify",
  "Slack",
  "Stripe",
  "Figma",
  "Airbnb",
  "HubSpot",
  "Notion",
  "Vercel",
  "Linear",
  "Loom",
  "Pitch",
  "Webflow",
];

// Services
export const services = [
  {
    id: 1,
    icon: "FiCode",
    title: "Web Development",
    description:
      "We build lightning-fast, scalable web applications using the latest technologies — React, Next.js, Node.js — crafted for performance and conversion.",
    features: ["React / Next.js", "API Integration", "CMS Development"],
    color: "#FFCB05",
  },
  {
    id: 2,
    icon: "FiSmartphone",
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless user experiences across iOS and Android with intuitive design.",
    features: ["iOS & Android", "React Native", "Flutter"],
    color: "#A78BFA",
  },
  {
    id: 3,
    icon: "FiTrendingUp",
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies that skyrocket your rankings, increase organic traffic, and turn search engines into your most powerful growth engine.",
    features: ["Technical SEO", "Content Strategy", "Analytics"],
    color: "#34D399",
  },
  {
    id: 4,
    icon: "FiLayers",
    title: "Brand Design",
    description:
      "Distinctive brand identities that resonate emotionally — from logo design and visual systems to full brand guidelines and motion design.",
    features: ["Logo Design", "Brand Guidelines", "UI/UX Design"],
    color: "#F472B6",
  },
];

// Portfolio Projects
export const projects = [
  {
    id: 1,
    name: "Luminary Finance",
    category: "Web",
    description: "A premium fintech dashboard with real-time analytics and AI-powered insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    year: "2026",
  },
  {
    id: 2,
    name: "Orbita Social",
    category: "Mobile",
    description: "A next-generation social networking app with immersive AR features.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    tags: ["React Native", "GraphQL", "Firebase"],
    year: "2026",
  },
  {
    id: 3,
    name: "Velour Studio",
    category: "Branding",
    description: "A luxury fashion brand identity crafted for the modern creative market.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&q=80",
    tags: ["Brand Identity", "Motion", "Figma"],
    year: "2026",
  },
  {
    id: 4,
    name: "Zenith Commerce",
    category: "Web",
    description: "A high-converting e-commerce platform built for scale and speed.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    tags: ["Shopify", "React", "SEO"],
    year: "2026",
  },
  {
    id: 5,
    name: "Pulsera Health",
    category: "SEO",
    description: "A comprehensive SEO strategy that tripled organic traffic in 90 days.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["SEO", "Analytics", "Content"],
    year: "2026",
  },
  {
    id: 6,
    name: "Aeris Rides",
    category: "Mobile",
    description: "A sleek ride-sharing app with real-time GPS tracking and in-app payments.",
    image: "https://images.unsplash.com/photo-1471440671318-55bdbb772f93?w=800&q=80",
    tags: ["Flutter", "Maps API", "Stripe"],
    year: "2026",
  },
];

// Portfolio Categories
export const portfolioCategories = ["All", "Web", "Mobile", "Branding", "SEO"];

// Process Steps
export const processSteps = [
  {
    id: 1,
    step: "01",
    title: "Discovery",
    description:
      "We dive deep into your business, audience, and goals through structured discovery sessions to build a clear strategic foundation.",
    icon: "FiSearch",
  },
  {
    id: 2,
    step: "02",
    title: "Strategy",
    description:
      "We craft a data-backed roadmap — market research, competitor analysis, and a tailored action plan for measurable growth.",
    icon: "FiTarget",
  },
  {
    id: 3,
    step: "03",
    title: "Design",
    description:
      "Our designers create stunning, user-centric interfaces — wireframes to high-fidelity prototypes that captivate and convert.",
    icon: "FiPenTool",
  },
  {
    id: 4,
    step: "04",
    title: "Development",
    description:
      "We build with precision — clean code, modern frameworks, and performance-first architecture for a flawless product.",
    icon: "FiCode",
  },
  {
    id: 5,
    step: "05",
    title: "Launch",
    description:
      "Rigorous QA, testing, and deployment pipelines ensure a smooth launch — your product hits the market polished and ready.",
    icon: "FiZap",
  },
  {
    id: 6,
    step: "06",
    title: "Growth",
    description:
      "Post-launch, we monitor performance, iterate based on data, and scale your product to continuously reach new heights.",
    icon: "FiTrendingUp",
  },
];

// Testimonials
export const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO, Luminary Finance",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "TabTech completely transformed our digital presence. The website they built for us increased conversions by 340% within the first month. Absolutely world-class team.",
    company: "Luminary Finance",
  },
  {
    id: 2,
    name: "Marcus Rivera",
    role: "Founder, Orbita Social",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "From strategy to launch, the TabTech team was exceptional. Our app exceeded 100K downloads in 3 months. Their attention to detail and creativity is unmatched.",
    company: "Orbita Social",
  },
  {
    id: 3,
    name: "Priya Kapoor",
    role: "CMO, Zenith Commerce",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    review:
      "The SEO work TabTech did for us was phenomenal. Organic traffic tripled, and our search rankings skyrocketed. Best investment we've ever made.",
    company: "Zenith Commerce",
  },
  {
    id: 4,
    name: "James Whitfield",
    role: "Creative Director, Velour Studio",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    review:
      "The brand identity TabTech created for us is stunning. It perfectly captures our vision and has received incredible feedback from clients and industry peers alike.",
    company: "Velour Studio",
  },
  {
    id: 5,
    name: "Amara Osei",
    role: "CTO, Pulsera Health",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    rating: 5,
    review:
      "TabTech delivered a technically flawless platform on time and within budget. Their development team is top-tier — we'll be working with them for years to come.",
    company: "Pulsera Health",
  },
];

// FAQ
export const faqs = [
  {
    id: 1,
    question: "What types of web development services do you offer?",
    answer:
      "We offer full-stack web development including landing pages, e-commerce stores, SaaS platforms, custom web applications, and CMS-based websites. We work with React, Next.js, Node.js, and more.",
  },
  {
    id: 2,
    question: "How long does it take to build a website?",
    answer:
      "Timelines vary by project scope. A landing page typically takes 1–2 weeks, a full website 4–8 weeks, and complex web applications 8–16+ weeks. We provide detailed timelines during discovery.",
  },
  {
    id: 3,
    question: "How do you approach SEO optimization?",
    answer:
      "Our SEO process includes technical audits, keyword research, on-page optimization, content strategy, link building, and continuous performance monitoring — all data-driven and ROI-focused.",
  },
  {
    id: 4,
    question: "What is included in your Brand Design service?",
    answer:
      "Brand Design includes logo design, color palette, typography system, brand voice guidelines, social media templates, stationery design, and a comprehensive brand style guide.",
  },
  {
    id: 5,
    question: "How much do your services cost?",
    answer:
      "Pricing depends on project complexity and scope. Web projects start from $5,000, mobile apps from $15,000, SEO retainers from $2,000/month, and brand design from $3,500. Contact us for a custom quote.",
  },
  {
    id: 6,
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes! We offer flexible maintenance and support plans including hosting management, performance monitoring, content updates, security patches, and continuous optimization.",
  },
];

// Contact Info
export const contactInfo = {
  email: "hello@tabtech.agency",
  phone: "+1 (415) 890-2340",
  address: "340 Pine Street, Suite 800, San Francisco, CA 94104",
  formServices: [
    "Web Development",
    "App Development",
    "SEO Optimization",
    "Brand Design",
    "Full Package",
    "Other",
  ],
  budgets: [
    "$5K – $10K",
    "$10K – $25K",
    "$25K – $50K",
    "$50K – $100K",
    "$100K+",
  ],
};

// Social Media Links
export const socialLinks = [
  { id: 1, name: "Twitter", icon: "FiTwitter", href: "#" },
  { id: 2, name: "LinkedIn", icon: "FiLinkedin", href: "#" },
  { id: 3, name: "Instagram", icon: "FiInstagram", href: "#" },
  { id: 4, name: "GitHub", icon: "FiGithub", href: "#" },
  { id: 5, name: "Dribbble", icon: "FiDribbble", href: "#" },
];

// Footer Content
export const footerContent = {
  logo: "TabTech",
  tagline: "Building digital experiences that move the world forward.",
  quickLinks: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ],
  serviceLinks: [
    { label: "Web Development", href: "#services" },
    { label: "App Development", href: "#services" },
    { label: "SEO Optimization", href: "#services" },
    { label: "Brand Design", href: "#services" },
  ],
  copyright: "© 2026 TabTech Agency. All rights reserved.",
};

// Stats
export const stats = [
  { id: 1, value: "150+", label: "Projects Delivered" },
  { id: 2, value: "98%", label: "Client Satisfaction" },
  { id: 3, value: "12+", label: "Industry Awards" },
  { id: 4, value: "8yrs", label: "Industry Experience" },
];