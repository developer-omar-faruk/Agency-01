/* ========================================
   ANIMATION VARIANTS
   Reusable Framer Motion variants
   ======================================== */
export const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


// Main Data

export const navLinks = [
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "process", label: "Process" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export const heroContent = {
  badge: "🚀 Premium Digital Agency",
  headingLine1: "We Build",
  headingLine2: "Digital",
  headingLine3: "Experiences",
  description: "Bringing together strategy, creativity, and technology to build digital products and campaigns that make our clients look extraordinary.",
  primaryCTA: { label: "Start a Project" },
  secondaryCTA: { label: "View Our Work" },
  stats: [
    { value: "150+", label: "Projects Done" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "12+", label: "Years Experience" },
    { value: "40+", label: "Team Members" },
  ],
};

export const clients = [
  { id: 1, name: "Google" },
  { id: 2, name: "Microsoft" },
  { id: 3, name: "Apple" },
  { id: 4, name: "Amazon" },
  { id: 5, name: "Meta" },
  { id: 6, name: "Netflix" },
  { id: 7, name: "Adobe" },
  { id: 8, name: "Spotify" },
  { id: 9, name: "Airbnb" },
  { id: 10, name: "Tesla" },
  { id: 11, name: "Samsung" },
  { id: 12, name: "NVIDIA" },
];

export const services = [
  { id: 1, icon: "FiCode", title: "Web Development", description: "We craft blazing-fast, pixel-perfect websites and web applications using modern stacks — React, Next.js, and beyond.", features: ["React / Next.js", "Performance Optimized", "CMS Integration"], color: "#FFCB05" },
  { id: 2, icon: "FiSmartphone", title: "App Development", description: "Native and cross-platform mobile experiences that users love — built with React Native and Flutter for iOS and Android.", features: ["React Native", "Flutter", "iOS & Android"], color: "#A78BFA" },
  { id: 3, icon: "FiTrendingUp", title: "SEO Optimization", description: "Data-driven SEO strategies that put your brand at the top of search results and keep you ahead of the competition.", features: ["Technical SEO", "Content Strategy", "Analytics & Reporting"], color: "#34D399" },
  { id: 4, icon: "FiFeather", title: "Brand Design", description: "Bold, strategic brand identities that resonate with your audience and make a lasting impression across every touchpoint.", features: ["Logo & Identity", "Design Systems", "Motion & UI"], color: "#F472B6" },
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
  { id: 1, question: "How long does a typical project take?", answer: "Project timelines vary based on scope. A landing page typically takes 2–3 weeks, a full web application 6–12 weeks, and a complete brand identity 3–5 weeks. We provide detailed timelines during the discovery phase." },
  { id: 2, question: "What is your pricing model?", answer: "We offer both project-based and retainer pricing. Projects are scoped and quoted individually based on complexity. Retainer plans start at $3,500/month and include ongoing development, design, and strategy support." },
  { id: 3, question: "Do you work with startups or only enterprise clients?", answer: "We work with clients of all sizes — from early-stage startups to Fortune 500 companies. What matters most is alignment on vision and commitment to quality." },
  { id: 4, question: "What technologies do you specialize in?", answer: "Our core stack includes React, Next.js, Node.js, React Native, Flutter, TypeScript, PostgreSQL, and Supabase. We stay current and choose the best tools for each project." },
  { id: 5, question: "Do you provide post-launch support?", answer: "Absolutely. All projects include a 30-day warranty period post-launch. We also offer ongoing support and maintenance retainers to keep your product running optimally." },
  { id: 6, question: "Can you work with our existing team?", answer: "Yes. We frequently embed with existing engineering or design teams as a collaborative extension. We adapt to your workflows, tools, and communication preferences seamlessly." },
];

//.........FORM........
// Contact Info
export const contactInfo = {
  email: "mdomarfaruk1045@gmail.com",
  phone: "+880 1624471890",
  address: "3651 Gazipur, Faridganj, Chandpur, Bangladesh",
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
  { id: 2, name: "LinkedIn", icon: "FiLinkedin", href: "https://www.linkedin.com/in/omar-faruk-dev/" },
  { id: 3, name: "Instagram", icon: "FiInstagram", href: "https://web.facebook.com/profile.php?id=100092026849199" },
  { id: 4, name: "GitHub", icon: "FiGithub", href: "https://github.com/developer-omar-faruk" },
  { id: 5, name: "Dribbble", icon: "FiDribbble", href: "#" },
];