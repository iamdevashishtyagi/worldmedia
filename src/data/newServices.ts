// src/data/newServices.ts
// Detailed content data for new non-outdoor-advertising service pages
// (Development, Designing, Digital Advertising)

export interface NewServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface NewServiceProcess {
  step: string;
  title: string;
  desc: string;
}

export interface NewServiceFAQ {
  question: string;
  answer: string;
}

export interface NewServiceTech {
  name: string;
  icon: string;
}

export interface NewServiceItem {
  category: string; // e.g. "development"
  slug: string; // e.g. "ecommerce-website-development"
  name: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  serviceType: string;
  areaServed: string;

  heroHeadline: string;
  heroHeadlineHighlight: string;
  heroSubheadline: string;

  stats: { value: string; label: string; sublabel: string }[];

  overviewHeading: string;
  overviewSubheading: string;
  overviewParagraphs: string[];

  featuresHeading: string;
  features: NewServiceFeature[];

  techStack?: NewServiceTech[];

  processHeading: string;
  processSteps: NewServiceProcess[];

  pricingNote?: string;

  faqs: NewServiceFAQ[];

  relatedCategory: string; // slug of related category
  relatedSlugs: string[]; // other service slugs in same category
}

export const newServicesData: NewServiceItem[] = [
  // ============================================================
  // DEVELOPMENT CATEGORY
  // ============================================================
  {
    category: "development",
    slug: "business-website-development",
    name: "Business Website Development",
    tagline: "Professional websites that rank on Google & convert visitors",
    metaTitle: "Best Business Website Development in Meerut | World Media NCR",
    metaDescription:
      "World Media NCR builds high-performance business websites in Meerut that rank on Google and convert visitors into customers. Custom design, SEO architecture, fast loading, mobile-first. Call +91-9456497636.",
    keywords: [
      "business website development meerut",
      "best website developer in meerut",
      "professional website design meerut",
      "company website development meerut",
      "website development agency meerut",
      "best web development company meerut",
      "affordable website design meerut",
      "seo website development meerut",
      "top website designer meerut",
      "custom website development meerut",
      "website development services meerut ncr",
      "google ranking website meerut",
    ],
    canonical: "https://worldmediancr.com/services/development/business-website-development",
    ogImage: "/images/website/herobg2.jpg",
    serviceType: "Business Website Development",
    areaServed: "Meerut, Delhi NCR & Western Uttar Pradesh",

    heroHeadline: "Business Websites That",
    heroHeadlineHighlight: "Rank & Convert",
    heroSubheadline:
      "Professional business websites built for Google rankings, mobile performance, and real customer conversions — designed by Meerut's leading web development team.",

    stats: [
      { value: "50+", label: "Websites Delivered", sublabel: "Across Meerut & NCR" },
      { value: "<2s", label: "Page Load Speed", sublabel: "Google Core Web Vitals" },
      { value: "100%", label: "Mobile Optimized", sublabel: "All Screen Sizes" },
      { value: "Top 3", label: "Google Rankings", sublabel: "For Targeted Keywords" },
    ],

    overviewHeading: "Your Website Is Your 24/7 Sales Representative",
    overviewSubheading: "Why Every Business in Meerut Needs a High-Performance Website in 2025",
    overviewParagraphs: [
      "In today's digital-first world, your business website is the first impression for 90% of potential customers. A slow, outdated, or non-existent website means losing business to competitors every single day. World Media NCR builds business websites that aren't just visually impressive — they are engineered to rank on Google, load instantly, and convert visitors into paying customers.",
      "Our development approach combines modern technologies (Next.js, React, WordPress) with technical SEO architecture baked in from day one. Every page is structured for Google's Core Web Vitals, schema markup, local SEO, and mobile-first indexing — ensuring your Meerut business appears on top when potential customers search for your services online.",
      "From small business landing pages to multi-page company websites with inquiry forms, product galleries, and backend admin panels, we deliver complete solutions with clean code, fast performance, and ongoing maintenance support.",
    ],

    featuresHeading: "Why Our Business Websites Outperform Competitors",
    features: [
      {
        title: "SEO-First Architecture",
        description:
          "Built with technical SEO from the ground up — schema markup, meta optimization, Core Web Vitals, local SEO, and site structure designed for Google rankings.",
        icon: "SearchCheck",
      },
      {
        title: "Mobile-First & Responsive",
        description:
          "Every website is designed mobile-first and tested across all screen sizes, ensuring perfect display on smartphones, tablets, and desktops.",
        icon: "Smartphone",
      },
      {
        title: "Lightning Fast Performance",
        description:
          "Optimized for sub-2 second load times using Next.js, image compression, lazy loading, and CDN delivery — reducing bounce rates and boosting conversions.",
        icon: "Zap",
      },
      {
        title: "Custom Design",
        description:
          "No templates or cookie-cutter designs. Every website is custom-designed to reflect your brand identity, industry, and target audience.",
        icon: "Palette",
      },
      {
        title: "Secure & SSL Certified",
        description:
          "All websites are deployed with SSL encryption, HTTPS, and security hardening ensuring customer trust and Google ranking preference.",
        icon: "ShieldCheck",
      },
      {
        title: "Easy Admin & Updates",
        description:
          "Built with user-friendly CMS or admin panels so you can update content, add products, and manage inquiries without technical help.",
        icon: "Settings2",
      },
    ],

    techStack: [
      { name: "Next.js", icon: "Code2" },
      { name: "React", icon: "Atom" },
      { name: "WordPress", icon: "Globe" },
      { name: "Node.js", icon: "Server" },
      { name: "Tailwind CSS", icon: "Layers" },
      { name: "Google Analytics", icon: "TrendingUp" },
    ],

    processHeading: "Our 5-Step Website Delivery Process",
    processSteps: [
      {
        step: "01",
        title: "Discovery & Strategy",
        desc: "We understand your business goals, target audience, competitors, and SEO requirements before writing a single line of code.",
      },
      {
        step: "02",
        title: "Design Mockup",
        desc: "Custom Figma/wireframe design mockups are shared for your approval before development begins.",
      },
      {
        step: "03",
        title: "Development & SEO Setup",
        desc: "High-performance code with technical SEO architecture, schema markup, sitemap, and Google Search Console setup.",
      },
      {
        step: "04",
        title: "Testing & Launch",
        desc: "Cross-browser testing, mobile testing, speed optimization, and domain/hosting setup before going live.",
      },
      {
        step: "05",
        title: "Training & Maintenance",
        desc: "We train you to manage your website and offer ongoing maintenance, security updates, and SEO monitoring.",
      },
    ],

    pricingNote:
      "Business website packages start from ₹15,000. Pricing depends on pages, features, and complexity. Contact us for a free quote.",

    faqs: [
      {
        question: "How long does it take to build a business website in Meerut?",
        answer:
          "A standard business website takes 7 to 21 working days depending on pages, content readiness, and revisions. E-commerce and custom software projects take longer. We provide a clear timeline before starting.",
      },
      {
        question: "Will my website rank on Google?",
        answer:
          "Every website we build includes technical SEO — meta tags, schema markup, site speed optimization, mobile-first design, and local SEO for Meerut. We also offer ongoing SEO services to maintain and improve rankings.",
      },
      {
        question: "Do you provide domain and hosting?",
        answer:
          "Yes, we can assist with domain registration, hosting setup, and SSL certificate — or work with your existing hosting provider.",
      },
      {
        question: "Can I update the website content myself?",
        answer:
          "Yes! We build websites with easy-to-use admin panels or CMS systems so you can update text, images, products, and blog posts without technical knowledge.",
      },
      {
        question: "What technologies do you use for website development?",
        answer:
          "We use modern technologies including Next.js, React, WordPress, Node.js, and Tailwind CSS depending on your specific requirements and budget.",
      },
    ],

    relatedCategory: "development",
    relatedSlugs: ["portfolio-website-development", "ecommerce-website-development", "web-software-development"],
  },
  {
    category: "development",
    slug: "portfolio-website-development",
    name: "Portfolio Website Development",
    tagline: "Stunning portfolio websites for professionals, artists & freelancers",
    metaTitle: "Best Portfolio Website Development in Meerut | World Media NCR",
    metaDescription:
      "Get a stunning, professional portfolio website in Meerut that showcases your work and attracts top clients. Custom design, fast loading, SEO-optimized. Built by World Media NCR. Call +91-9456497636.",
    keywords: [
      "portfolio website development meerut",
      "personal website developer meerut",
      "freelancer portfolio website meerut",
      "professional portfolio website meerut",
      "creative portfolio website design",
      "artist portfolio website meerut",
      "photography portfolio website meerut",
      "architect portfolio website meerut",
      "best portfolio website designer meerut",
    ],
    canonical: "https://worldmediancr.com/services/development/portfolio-website-development",
    ogImage: "/images/website/herobg2.jpg",
    serviceType: "Portfolio Website Development",
    areaServed: "Meerut, Delhi NCR & Western Uttar Pradesh",

    heroHeadline: "Portfolio Websites That",
    heroHeadlineHighlight: "Win Clients",
    heroSubheadline:
      "Premium personal & professional portfolio websites for designers, photographers, architects, developers, consultants & creative professionals across Meerut & NCR.",

    stats: [
      { value: "30+", label: "Portfolios Built", sublabel: "Professionals & Artists" },
      { value: "100%", label: "Custom Design", sublabel: "No Templates Used" },
      { value: "<3s", label: "Load Speed", sublabel: "Optimized Performance" },
      { value: "5★", label: "Client Rating", sublabel: "Consistently Delivered" },
    ],

    overviewHeading: "Your Portfolio Website Is Your Best Salesperson",
    overviewSubheading: "Why Professionals in Meerut Need a Standout Online Portfolio in 2025",
    overviewParagraphs: [
      "Whether you are a photographer, architect, interior designer, developer, consultant, or artist — your portfolio website is the most powerful tool for attracting high-value clients. A stunning, fast-loading, and SEO-optimized portfolio tells your story, showcases your best work, and converts visitors into paying clients.",
      "World Media NCR creates portfolio websites that make you look world-class. Every design is custom-built around your personal brand, industry, and target audience — with smooth animations, beautiful image galleries, and compelling copy that positions you as the expert in your field.",
    ],

    featuresHeading: "What Makes Our Portfolio Websites Stand Out",
    features: [
      {
        title: "Bespoke Visual Design",
        description: "Completely custom design that reflects your unique style, personality, and professional niche — not generic templates.",
        icon: "Palette",
      },
      {
        title: "Project Showcases & Galleries",
        description: "Beautiful image galleries, case study sections, and project showcases with lightbox displays and smooth transitions.",
        icon: "Image",
      },
      {
        title: "Personal Brand SEO",
        description: "Optimized for your name, profession, and city so potential clients find you on Google when searching for professionals like you.",
        icon: "SearchCheck",
      },
      {
        title: "Contact & Inquiry Forms",
        description: "Integrated inquiry forms with email notifications so clients can reach you directly from your portfolio.",
        icon: "Mail",
      },
      {
        title: "Testimonials & Social Proof",
        description: "Client testimonial sections, review integrations, and achievement showcases to build trust and credibility.",
        icon: "Star",
      },
      {
        title: "Social Media Integration",
        description: "Linked Instagram, LinkedIn, Behance, and social feeds to keep your portfolio always updated with your latest work.",
        icon: "Globe",
      },
    ],

    processHeading: "Portfolio Website Creation Process",
    processSteps: [
      {
        step: "01",
        title: "Style Discovery",
        desc: "Understanding your style, target clients, and the impression you want to make — we define your portfolio's visual direction.",
      },
      {
        step: "02",
        title: "Content Planning",
        desc: "We help you select and organize your best work, write compelling bios, and structure the portfolio for maximum impact.",
      },
      {
        step: "03",
        title: "Design & Build",
        desc: "Custom design and development with smooth animations, responsive layouts, and optimized image loading.",
      },
      {
        step: "04",
        title: "SEO & Launch",
        desc: "Personal brand SEO setup, domain configuration, and launch across all devices.",
      },
    ],

    faqs: [
      {
        question: "What professionals need a portfolio website?",
        answer: "Photographers, architects, interior designers, graphic designers, developers, consultants, lawyers, doctors, artists, educators, and any professional who wants to attract clients online benefits from a portfolio website.",
      },
      {
        question: "Can I add my own work to the website later?",
        answer: "Yes! We build all portfolio websites with easy content management so you can add new projects, update images, and edit text without technical help.",
      },
      {
        question: "How quickly can my portfolio go live?",
        answer: "A standard portfolio website is ready in 5 to 14 working days depending on the amount of content and design complexity.",
      },
    ],

    relatedCategory: "development",
    relatedSlugs: ["business-website-development", "ecommerce-website-development", "website-ui-ux-design"],
  },
  {
    category: "development",
    slug: "ecommerce-website-development",
    name: "E-Commerce Website Development",
    tagline: "Full-featured online stores that sell 24/7",
    metaTitle: "Best E-Commerce Website Development in Meerut | World Media NCR",
    metaDescription:
      "Build a powerful online store in Meerut with World Media NCR. Full-featured e-commerce websites with product management, payment gateways, mobile optimization & SEO. Start selling online today. Call +91-9456497636.",
    keywords: [
      "ecommerce website development meerut",
      "online store development meerut",
      "best ecommerce developer meerut",
      "online shop website meerut",
      "ecommerce website design meerut",
      "shopify development meerut",
      "woocommerce development meerut",
      "custom ecommerce website meerut",
      "payment gateway integration meerut",
      "sell online meerut website",
      "best online store developer meerut",
    ],
    canonical: "https://worldmediancr.com/services/development/ecommerce-website-development",
    ogImage: "/images/website/herobg2.jpg",
    serviceType: "E-Commerce Website Development",
    areaServed: "Meerut, Delhi NCR & Western Uttar Pradesh",

    heroHeadline: "E-Commerce Stores That",
    heroHeadlineHighlight: "Sell Automatically",
    heroSubheadline:
      "Full-featured online stores with product management, UPI/card payment gateways, inventory tracking, and SEO — so your business sells online 24 hours a day, 7 days a week.",

    stats: [
      { value: "20+", label: "Stores Launched", sublabel: "Products & Services" },
      { value: "100%", label: "Payment Ready", sublabel: "Razorpay, Paytm, UPI" },
      { value: "GST", label: "Invoice Ready", sublabel: "Automated Billing" },
      { value: "3x", label: "Avg Revenue Lift", sublabel: "Within 6 Months" },
    ],

    overviewHeading: "Sell Online Without Limits",
    overviewSubheading: "Why Meerut Businesses Are Moving to E-Commerce in 2025",
    overviewParagraphs: [
      "The Indian e-commerce market is growing at 30% annually. Businesses that aren't selling online are leaving enormous revenue on the table. World Media NCR builds complete e-commerce solutions that allow Meerut businesses — from garment shops and electronics retailers to food brands and service providers — to sell online professionally.",
      "We build fully-featured e-commerce stores on modern platforms (WooCommerce, custom React, or Shopify) with complete product management, category filters, discount codes, UPI/card payment integration, GST invoicing, WhatsApp order notifications, and Google Shopping optimization. Every store is mobile-first and SEO-optimized so customers can find and buy from you online.",
    ],

    featuresHeading: "Complete E-Commerce Solution Features",
    features: [
      {
        title: "Product & Inventory Management",
        description: "Unlimited products, categories, variants (size, color), stock tracking, and easy bulk upload with admin dashboard.",
        icon: "Package",
      },
      {
        title: "Payment Gateway Integration",
        description: "Razorpay, Paytm, PhonePe, UPI, COD, and card payment integration for seamless checkout experience.",
        icon: "CreditCard",
      },
      {
        title: "Mobile Commerce Ready",
        description: "100% mobile-optimized shopping experience — because 80% of Indian online shoppers buy on smartphones.",
        icon: "Smartphone",
      },
      {
        title: "GST & Invoice Management",
        description: "Automatic GST-compliant invoice generation, order confirmation emails, and digital receipt system.",
        icon: "Receipt",
      },
      {
        title: "WhatsApp Order Alerts",
        description: "Real-time WhatsApp notifications for new orders, payment confirmations, and delivery updates.",
        icon: "MessageSquare",
      },
      {
        title: "Google Shopping SEO",
        description: "Product schema markup, Google Merchant Center integration, and SEO-optimized product pages for organic discovery.",
        icon: "SearchCheck",
      },
    ],

    techStack: [
      { name: "WooCommerce", icon: "ShoppingBag" },
      { name: "React", icon: "Atom" },
      { name: "Razorpay", icon: "CreditCard" },
      { name: "Next.js", icon: "Code2" },
      { name: "MongoDB", icon: "Database" },
      { name: "WhatsApp API", icon: "MessageSquare" },
    ],

    processHeading: "E-Commerce Store Launch Process",
    processSteps: [
      { step: "01", title: "Business & Product Analysis", desc: "Understanding your product catalog, target customers, pricing, and delivery logistics." },
      { step: "02", title: "Platform & Design Selection", desc: "Recommending the right platform and creating custom store design aligned with your brand." },
      { step: "03", title: "Product Upload & Payment Setup", desc: "Uploading all products, setting up payment gateways, taxes, shipping, and discount rules." },
      { step: "04", title: "SEO & Google Setup", desc: "Product schema markup, Google Search Console, Google Merchant Center, and sitemap submission." },
      { step: "05", title: "Training & Launch", desc: "Complete admin training, order management walkthrough, and store launch with marketing support." },
    ],

    pricingNote: "E-commerce website packages start from ₹25,000. Custom solutions for large catalogs quoted separately.",

    faqs: [
      {
        question: "Do you integrate Indian payment gateways like Razorpay and UPI?",
        answer: "Yes, we integrate all major Indian payment systems including Razorpay, Paytm, PhonePe, UPI, and Cash on Delivery (COD).",
      },
      {
        question: "Can customers buy on mobile?",
        answer: "Absolutely. All our e-commerce stores are 100% mobile-optimized with fast checkout, mobile-friendly product pages, and thumb-friendly navigation.",
      },
      {
        question: "Do you support GST invoicing?",
        answer: "Yes, we configure automatic GST-compliant invoice generation that is emailed to customers immediately after purchase.",
      },
      {
        question: "How long does it take to launch an online store?",
        answer: "A standard e-commerce store with up to 100 products can be launched in 14 to 30 working days. Larger catalogs require more time.",
      },
    ],

    relatedCategory: "development",
    relatedSlugs: ["business-website-development", "web-software-development", "meta-ads-management"],
  },
  {
    category: "development",
    slug: "web-software-development",
    name: "Web Software & Management Systems",
    tagline: "Custom ERP, management systems & web applications",
    metaTitle: "Custom Web Software Development in Meerut | ERP & Management Systems | World Media NCR",
    metaDescription:
      "Custom web software, ERP, and management system development in Meerut by World Media NCR. Inventory management, HR systems, billing software, school ERP & more. Built for your exact business needs. Call +91-9456497636.",
    keywords: [
      "web software development meerut",
      "management system development meerut",
      "custom erp development meerut",
      "school management system meerut",
      "inventory management software meerut",
      "billing software development meerut",
      "custom web application meerut",
      "hr management system meerut",
      "hospital management system meerut",
      "software development company meerut",
    ],
    canonical: "https://worldmediancr.com/services/development/web-software-development",
    ogImage: "/images/website/herobg2.jpg",
    serviceType: "Custom Web Software Development",
    areaServed: "Meerut, Delhi NCR & Western Uttar Pradesh",

    heroHeadline: "Custom Web Software",
    heroHeadlineHighlight: "Built for Your Business",
    heroSubheadline:
      "School ERP, inventory management, billing software, HR systems, and custom web applications — engineered to streamline operations and eliminate manual work for Meerut businesses.",

    stats: [
      { value: "15+", label: "Systems Deployed", sublabel: "Across Multiple Industries" },
      { value: "100%", label: "Custom Built", sublabel: "No Off-the-Shelf Limits" },
      { value: "Cloud", label: "Based", sublabel: "Access Anywhere, Anytime" },
      { value: "24/7", label: "Support", sublabel: "Post-Delivery Maintenance" },
    ],

    overviewHeading: "Automate Your Business Operations With Custom Software",
    overviewSubheading: "Why Meerut Businesses Are Moving from Manual Processes to Smart Web Systems",
    overviewParagraphs: [
      "Manual spreadsheets, paper records, and disconnected tools cost businesses enormous time, money, and accuracy. World Media NCR develops custom web-based management systems that automate daily operations — from school administration and inventory tracking to hospital billing and employee management.",
      "Unlike expensive off-the-shelf ERP software, our custom systems are built specifically for your workflow, team size, and business rules. You get exactly what you need — no unnecessary features, no complex configurations — just a clean, fast, and secure web application that your team can use from any device.",
    ],

    featuresHeading: "What We Build",
    features: [
      {
        title: "School & College ERP",
        description: "Student management, fee collection, attendance, results, teacher portal, and parent communication in one system.",
        icon: "GraduationCap",
      },
      {
        title: "Inventory & Stock Management",
        description: "Real-time inventory tracking, purchase orders, supplier management, low-stock alerts, and reporting.",
        icon: "Package",
      },
      {
        title: "Billing & Accounting",
        description: "GST-compliant invoicing, payment tracking, expense management, and financial reports.",
        icon: "Receipt",
      },
      {
        title: "HR & Payroll Systems",
        description: "Employee records, attendance, leave management, payroll calculation, and salary slip generation.",
        icon: "Users",
      },
      {
        title: "Hospital & Clinic Management",
        description: "Patient registration, appointment booking, OPD management, prescription records, and billing.",
        icon: "Stethoscope",
      },
      {
        title: "Custom Web Applications",
        description: "Any custom workflow, multi-user portal, reporting dashboard, or business automation you need — we build it.",
        icon: "Code2",
      },
    ],

    processHeading: "Custom Software Development Process",
    processSteps: [
      { step: "01", title: "Requirement Analysis", desc: "Deep understanding of your workflow, users, data, and business rules through detailed discovery sessions." },
      { step: "02", title: "System Architecture Design", desc: "Database design, user roles, modules, and feature specification with your approval before development." },
      { step: "03", title: "Development & Testing", desc: "Iterative development with regular demos, thorough testing, and bug fixes before final delivery." },
      { step: "04", title: "Deployment & Training", desc: "Cloud hosting setup, data migration, staff training, and comprehensive documentation." },
      { step: "05", title: "Maintenance & Upgrades", desc: "Ongoing technical support, security updates, and feature additions as your business grows." },
    ],

    faqs: [
      {
        question: "How is custom software different from buying existing software?",
        answer: "Custom software is built exactly for your business processes — no unnecessary features, no compromises. It grows with you and you own it completely with no recurring license fees.",
      },
      {
        question: "Can multiple employees use the system simultaneously?",
        answer: "Yes, all our web-based systems support multiple concurrent users with role-based access control — admins, managers, and staff have different views and permissions.",
      },
      {
        question: "Can we access the system on mobile?",
        answer: "Yes, all web applications are responsive and accessible on smartphones and tablets — ideal for field teams and managers on the move.",
      },
      {
        question: "How long does custom software development take?",
        answer: "Timeline depends on complexity. Simple management systems take 4 to 8 weeks. Complex ERP systems take 3 to 6 months. We provide detailed project timelines during discovery.",
      },
    ],

    relatedCategory: "development",
    relatedSlugs: ["business-website-development", "ecommerce-website-development"],
  },

  // ============================================================
  // DESIGNING CATEGORY
  // ============================================================
  {
    category: "designing",
    slug: "logo-design-meerut",
    name: "Logo & Brand Identity Design",
    tagline: "Logos that make your brand instantly recognizable",
    metaTitle: "Best Logo Design in Meerut | Brand Identity Design | World Media NCR",
    metaDescription:
      "Professional logo design and brand identity services in Meerut by World Media NCR. Memorable logos, brand guidelines, business cards, letterheads & complete brand kits. Call +91-9456497636.",
    keywords: [
      "logo design meerut",
      "best logo designer meerut",
      "brand identity design meerut",
      "professional logo design meerut",
      "company logo design meerut",
      "logo maker meerut",
      "brand design agency meerut",
      "business logo design meerut",
      "affordable logo design meerut",
      "top graphic designer meerut",
      "brand guidelines design meerut",
    ],
    canonical: "https://worldmediancr.com/services/designing/logo-design-meerut",
    ogImage: "/images/website/herobg2.jpg",
    serviceType: "Logo and Brand Identity Design",
    areaServed: "Meerut, Delhi NCR & Western Uttar Pradesh",

    heroHeadline: "Logos That Make Your Brand",
    heroHeadlineHighlight: "Unforgettable",
    heroSubheadline:
      "Strategic logo design and complete brand identity systems for businesses in Meerut — crafted to be memorable, professional, and instantly recognizable across every medium.",

    stats: [
      { value: "100+", label: "Logos Designed", sublabel: "Businesses & Brands" },
      { value: "5★", label: "Client Rating", sublabel: "Consistently Delivered" },
      { value: "3", label: "Unique Concepts", sublabel: "Per Project" },
      { value: "∞", label: "Revisions", sublabel: "Until You Love It" },
    ],

    overviewHeading: "A Great Logo Is the Foundation of Every Great Brand",
    overviewSubheading: "Why Professional Logo Design Matters for Meerut Businesses",
    overviewParagraphs: [
      "Your logo is the face of your business — it appears on every touchpoint from your website and social media to business cards, vehicle branding, hoardings, and packaging. A professionally designed logo communicates trust, quality, and professionalism at first glance, while an amateur logo undermines even the best products and services.",
      "World Media NCR's design team creates logos that are not just visually beautiful, but strategically crafted — designed to be memorable, scalable across any size, and versatile for both digital and outdoor advertising applications. Our brand identity packages include everything you need to launch or rebrand professionally.",
    ],

    featuresHeading: "Our Logo & Brand Design Services",
    features: [
      {
        title: "Custom Logo Design",
        description: "3 unique logo concepts crafted from scratch based on your industry, values, and target audience — with unlimited revisions.",
        icon: "Sparkles",
      },
      {
        title: "Brand Identity System",
        description: "Complete brand guidelines including color palette, typography, logo usage rules, and visual consistency standards.",
        icon: "Palette",
      },
      {
        title: "Business Card Design",
        description: "Professional business card designs optimized for print — both digital and print-ready files delivered.",
        icon: "CreditCard",
      },
      {
        title: "Letterhead & Stationery",
        description: "Professional letterhead, envelope, and stationery design for a cohesive corporate identity.",
        icon: "FileText",
      },
      {
        title: "Social Media Branding Kit",
        description: "Profile photos, cover banners, and post templates sized for Instagram, Facebook, LinkedIn, and WhatsApp.",
        icon: "Image",
      },
      {
        title: "Print & Outdoor Ready",
        description: "All files delivered in vector formats (AI, EPS, SVG, PDF) suitable for hoardings, vehicle branding, flex printing, and any scale.",
        icon: "Printer",
      },
    ],

    processHeading: "Logo Design Process",
    processSteps: [
      { step: "01", title: "Brand Discovery", desc: "Understanding your business, competitors, target audience, and the emotions your brand should evoke." },
      { step: "02", title: "Research & Moodboarding", desc: "Visual research, industry analysis, and style direction before any design work begins." },
      { step: "03", title: "3 Concept Presentation", desc: "Three distinct logo concepts presented with rationale and usage examples." },
      { step: "04", title: "Refinement & Approval", desc: "Unlimited revisions on your chosen concept until you are completely satisfied." },
      { step: "05", title: "Final File Delivery", desc: "Complete file package in all formats — vector, PNG, JPG, dark/light versions, and brand guidelines." },
    ],

    faqs: [
      {
        question: "What file formats will I receive for my logo?",
        answer: "You receive all formats: AI, EPS, SVG (vector), PNG (transparent), JPG, and PDF — suitable for web, print, hoardings, and vehicle branding at any size.",
      },
      {
        question: "How many logo concepts do you provide?",
        answer: "We provide 3 unique logo concepts. You choose one direction to develop further with unlimited revisions until you are completely happy.",
      },
      {
        question: "How long does logo design take?",
        answer: "First concepts are delivered within 3 to 5 working days. Final approved logo with complete files is typically ready within 7 to 14 working days.",
      },
      {
        question: "Can you redesign my existing logo?",
        answer: "Yes, we offer professional logo modernization and rebranding services that retain your brand recognition while updating the look for the modern market.",
      },
    ],

    relatedCategory: "designing",
    relatedSlugs: ["website-ui-ux-design", "social-media-design"],
  },
  {
    category: "designing",
    slug: "website-ui-ux-design",
    name: "Website UI/UX Design",
    tagline: "Beautiful, user-friendly website designs that convert",
    metaTitle: "Best Website UI/UX Design in Meerut | World Media NCR",
    metaDescription:
      "Professional website UI/UX design services in Meerut. Pixel-perfect, conversion-optimized website designs for businesses, apps & e-commerce. Custom Figma mockups. Call +91-9456497636.",
    keywords: [
      "website design meerut",
      "ui ux design meerut",
      "website designer meerut",
      "best website design company meerut",
      "web design agency meerut",
      "figma design meerut",
      "mobile app ui design meerut",
      "landing page design meerut",
      "professional web design meerut",
      "website redesign meerut",
    ],
    canonical: "https://worldmediancr.com/services/designing/website-ui-ux-design",
    ogImage: "/images/website/herobg2.jpg",
    serviceType: "Website UI/UX Design",
    areaServed: "Meerut, Delhi NCR & Western Uttar Pradesh",

    heroHeadline: "Website Designs That",
    heroHeadlineHighlight: "Users Love",
    heroSubheadline:
      "Strategic UI/UX design that combines stunning visuals with intuitive user experience — creating websites and apps that engage visitors and drive measurable business results.",

    stats: [
      { value: "40+", label: "Designs Delivered", sublabel: "Websites & Apps" },
      { value: "60%", label: "Avg Bounce Rate Drop", sublabel: "After Redesign" },
      { value: "3x", label: "Conversion Lift", sublabel: "Better UX = More Sales" },
      { value: "Figma", label: "Design Tool", sublabel: "Industry Standard" },
    ],

    overviewHeading: "Design Is Not Just How It Looks — It's How It Works",
    overviewSubheading: "Why UI/UX Design Directly Impacts Your Business Revenue",
    overviewParagraphs: [
      "A website that looks beautiful but is confusing to navigate loses customers. Great UI/UX design strikes the perfect balance — visually stunning AND intuitively easy to use. World Media NCR's design team creates website experiences that guide visitors naturally toward taking action, whether that's making a purchase, filling an inquiry form, or calling your business.",
      "We design complete Figma mockups before development begins, ensuring you can see and approve exactly how your website will look and function before a single line of code is written. This saves time, reduces revisions during development, and delivers a superior end product.",
    ],

    featuresHeading: "Our UI/UX Design Services",
    features: [
      {
        title: "Complete Figma Mockups",
        description: "Full desktop and mobile wireframes and high-fidelity designs in Figma — interactive prototypes you can click through.",
        icon: "Layout",
      },
      {
        title: "Mobile-First Design",
        description: "Every design is created mobile-first, ensuring perfect experience across all screen sizes.",
        icon: "Smartphone",
      },
      {
        title: "Conversion Rate Optimization",
        description: "Strategic placement of CTAs, trust signals, and user flow optimization to maximize conversions.",
        icon: "TrendingUp",
      },
      {
        title: "Brand-Aligned Visual System",
        description: "Design system with consistent colors, typography, spacing, and components aligned with your brand identity.",
        icon: "Palette",
      },
      {
        title: "Developer Handoff",
        description: "Clean, annotated Figma files with assets, specs, and component libraries ready for seamless development.",
        icon: "Code2",
      },
      {
        title: "Website Audit & Redesign",
        description: "Comprehensive UX audit of existing websites with actionable redesign recommendations and full redesign execution.",
        icon: "SearchCheck",
      },
    ],

    processHeading: "UI/UX Design Process",
    processSteps: [
      { step: "01", title: "Discovery & Research", desc: "Analyzing your business goals, target users, competitors, and industry best practices." },
      { step: "02", title: "Wireframing", desc: "Low-fidelity wireframes showing layout, content hierarchy, and user flow before visual design." },
      { step: "03", title: "Visual Design", desc: "High-fidelity Figma mockups with your brand colors, typography, and imagery." },
      { step: "04", title: "Interactive Prototype", desc: "Clickable prototype to test user flows and gather feedback before development." },
      { step: "05", title: "Developer Handoff", desc: "Complete Figma handoff with assets, specs, and documentation for development." },
    ],

    faqs: [
      {
        question: "Do you provide Figma files?",
        answer: "Yes, you receive complete Figma design files with all components, assets, and specifications — perfect for your development team.",
      },
      {
        question: "Can you redesign my existing website?",
        answer: "Yes, we conduct a full UX audit of your current website and deliver a complete redesign that improves user experience, aesthetics, and conversion rates.",
      },
    ],

    relatedCategory: "designing",
    relatedSlugs: ["logo-design-meerut", "social-media-design", "business-website-development"],
  },
  {
    category: "designing",
    slug: "social-media-design",
    name: "Social Media Design",
    tagline: "Scroll-stopping visuals for Instagram, Facebook & more",
    metaTitle: "Social Media Graphic Design in Meerut | Instagram & Facebook Creatives | World Media NCR",
    metaDescription:
      "Professional social media design services in Meerut. Scroll-stopping Instagram posts, Facebook banners, WhatsApp status graphics & complete social media brand kits. Call +91-9456497636.",
    keywords: [
      "social media design meerut",
      "instagram post design meerut",
      "graphic design meerut",
      "facebook ads design meerut",
      "social media creative agency meerut",
      "instagram creative design meerut",
      "whatsapp business graphics meerut",
      "social media branding meerut",
      "digital marketing design meerut",
    ],
    canonical: "https://worldmediancr.com/services/designing/social-media-design",
    ogImage: "/images/website/herobg2.jpg",
    serviceType: "Social Media Graphic Design",
    areaServed: "Meerut, Delhi NCR & Western Uttar Pradesh",

    heroHeadline: "Social Media Creatives That",
    heroHeadlineHighlight: "Stop the Scroll",
    heroSubheadline:
      "High-impact Instagram posts, Facebook banners, WhatsApp graphics, and social media brand kits designed to build your brand identity online and drive engagement.",

    stats: [
      { value: "500+", label: "Graphics Delivered", sublabel: "Social Media Posts" },
      { value: "3x", label: "Avg Engagement Lift", sublabel: "vs Non-Designed Posts" },
      { value: "48h", label: "Turnaround Time", sublabel: "Standard Delivery" },
      { value: "All", label: "Platforms Covered", sublabel: "Insta, FB, WA, LinkedIn" },
    ],

    overviewHeading: "Your Brand Deserves to Look Premium on Social Media",
    overviewSubheading: "Why Professional Social Media Design Beats DIY Canva Graphics",
    overviewParagraphs: [
      "On social media, the first 0.3 seconds determine whether a user scrolls past or stops to engage. Professional graphic design — with strategic color usage, typography, hierarchy, and visual storytelling — consistently outperforms DIY template-based graphics in engagement, shares, and conversion.",
      "World Media NCR creates social media creatives that are strategically designed to match your brand identity, communicate your message clearly, and drive meaningful action — whether that's a sale, website visit, or phone call.",
    ],

    featuresHeading: "Social Media Design Services",
    features: [
      {
        title: "Instagram Post & Story Design",
        description: "Square posts, portrait reels covers, and swipe carousel designs optimized for Instagram's algorithm and aesthetics.",
        icon: "Share2",
      },
      {
        title: "Facebook Cover & Ad Design",
        description: "Profile covers, event banners, and ad creatives designed for maximum Facebook reach and engagement.",
        icon: "Globe",
      },
      {
        title: "WhatsApp Business Catalog",
        description: "Product catalog images, status graphics, and business profile optimization for WhatsApp marketing.",
        icon: "MessageSquare",
      },
      {
        title: "Social Media Brand Kit",
        description: "Complete brand kit with profile photos, covers, post templates, and story templates across all platforms.",
        icon: "Palette",
      },
      {
        title: "Monthly Design Packages",
        description: "Monthly retainer packages for consistent social media content — post designs delivered weekly on schedule.",
        icon: "Calendar",
      },
      {
        title: "Festival & Occasion Graphics",
        description: "Branded festival greetings, sale announcements, and special occasion posts for every important date.",
        icon: "Sparkles",
      },
    ],

    processHeading: "Design Delivery Process",
    processSteps: [
      { step: "01", title: "Brand Brief", desc: "Understanding your brand colors, fonts, tone, and the message for each graphic." },
      { step: "02", title: "Design Creation", desc: "Professional design using your brand identity — delivered in 24 to 48 hours." },
      { step: "03", title: "Review & Revisions", desc: "Two rounds of revisions included — we refine until you are satisfied." },
      { step: "04", title: "Final File Delivery", desc: "Delivered in optimized formats for each platform — web resolution and print resolution." },
    ],

    faqs: [
      {
        question: "Do you offer monthly social media design packages?",
        answer: "Yes, we offer monthly retainer packages where you receive a set number of post designs, story graphics, and special occasion creatives every month at preferential rates.",
      },
      {
        question: "What file formats do you deliver social media graphics in?",
        answer: "We deliver JPG and PNG for posting, plus layered PSD/AI source files if requested, and platform-specific sized versions.",
      },
    ],

    relatedCategory: "designing",
    relatedSlugs: ["logo-design-meerut", "website-ui-ux-design", "meta-ads-management"],
  },

  // ============================================================
  // DIGITAL ADVERTISING CATEGORY
  // ============================================================
  {
    category: "digital-advertising",
    slug: "meta-ads-management",
    name: "Meta Ads Management",
    tagline: "ROI-driven Facebook & Instagram advertising campaigns",
    metaTitle: "Best Meta Ads Management in Meerut | Facebook & Instagram Ads | World Media NCR",
    metaDescription:
      "Expert Meta Ads (Facebook & Instagram) management in Meerut. Targeted campaigns, ROI tracking, creative design, and lead generation for local businesses. Call +91-9456497636.",
    keywords: [
      "meta ads management meerut",
      "facebook ads meerut",
      "instagram ads meerut",
      "social media marketing meerut",
      "facebook advertising agency meerut",
      "instagram advertising meerut",
      "lead generation facebook meerut",
      "digital marketing agency meerut",
      "paid social media advertising meerut",
      "best facebook ads manager meerut",
      "social media ads meerut",
    ],
    canonical: "https://worldmediancr.com/services/digital-advertising/meta-ads-management",
    ogImage: "/images/website/herobg2.jpg",
    serviceType: "Meta Ads Management",
    areaServed: "Meerut, Delhi NCR & Western Uttar Pradesh",

    heroHeadline: "Meta Ads That Generate",
    heroHeadlineHighlight: "Real Business Leads",
    heroSubheadline:
      "Strategic Facebook & Instagram ad campaigns engineered for Meerut businesses — targeted to the right audience at the right time, with real ROI tracking and transparent reporting.",

    stats: [
      { value: "5x", label: "Avg ROAS", sublabel: "Return on Ad Spend" },
      { value: "₹5k", label: "Min Budget", sublabel: "Start Small, Scale Fast" },
      { value: "7 Days", label: "Campaign Live", sublabel: "Fast Turnaround" },
      { value: "Weekly", label: "Reports", sublabel: "Transparent Tracking" },
    ],

    overviewHeading: "Reach Your Exact Customer on Facebook & Instagram",
    overviewSubheading: "Why Meta Ads Are the Most Powerful Local Marketing Tool for Meerut Businesses",
    overviewParagraphs: [
      "With over 3 billion users on Facebook and Instagram, Meta Ads allow Meerut businesses to reach their exact ideal customer — by age, location, interests, behavior, and even competitor audiences. Unlike outdoor advertising or organic posts, Meta Ads deliver measurable results with full tracking of impressions, clicks, leads, and conversions.",
      "World Media NCR manages complete Meta Ad campaigns — from audience research and creative design to campaign setup, A/B testing, optimization, and weekly performance reports. We focus on what matters: leads, sales, and real return on your advertising investment.",
    ],

    featuresHeading: "Our Meta Ads Management Services",
    features: [
      {
        title: "Audience Research & Targeting",
        description: "Deep audience analysis using Meta's targeting options — demographics, interests, behaviors, lookalike audiences, and Meerut-specific local targeting.",
        icon: "Target",
      },
      {
        title: "Ad Creative Design",
        description: "High-converting ad graphics, video thumbnails, and carousel creatives designed by our in-house design team.",
        icon: "Palette",
      },
      {
        title: "Lead Generation Campaigns",
        description: "Facebook Lead Ads with instant forms to capture qualified leads directly on Meta without requiring a website visit.",
        icon: "UserPlus",
      },
      {
        title: "Retargeting & Remarketing",
        description: "Pixel-based retargeting to re-engage website visitors and warm audiences who have interacted with your business.",
        icon: "RefreshCw",
      },
      {
        title: "A/B Testing & Optimization",
        description: "Continuous split testing of audiences, creatives, and ad copy to maximize campaign performance and reduce cost per lead.",
        icon: "BarChart2",
      },
      {
        title: "Weekly Performance Reports",
        description: "Transparent weekly reports with key metrics — impressions, reach, clicks, leads, cost per result, and ROAS.",
        icon: "TrendingUp",
      },
    ],

    processHeading: "Meta Ads Campaign Launch Process",
    processSteps: [
      { step: "01", title: "Business & Goal Discovery", desc: "Understanding your business, target audience, campaign goals, and budget allocation." },
      { step: "02", title: "Audience & Strategy Setup", desc: "Building custom audiences, lookalike audiences, and targeting strategy based on your ideal customer." },
      { step: "03", title: "Creative Development", desc: "Designing high-converting ad creatives, writing compelling copy, and preparing campaign assets." },
      { step: "04", title: "Campaign Launch & Optimization", desc: "Live campaign setup, pixel installation, and continuous optimization based on early performance data." },
      { step: "05", title: "Reporting & Scaling", desc: "Weekly performance reports with insights and recommendations for scaling successful campaigns." },
    ],

    pricingNote: "Meta Ads management starts from ₹5,000/month management fee (ad spend budget separate). Packages customized by goal and business type.",

    faqs: [
      {
        question: "What is the minimum budget to start Meta Ads in Meerut?",
        answer: "We recommend a minimum ad spend of ₹5,000 per month to run meaningful campaigns. Management fees are separate and depend on campaign complexity.",
      },
      {
        question: "How quickly can I expect results from Facebook Ads?",
        answer: "Most campaigns start generating impressions within 24 hours of launch. Lead generation results typically improve significantly within the first 2 to 4 weeks as the algorithm learns and optimizes.",
      },
      {
        question: "Do you handle ad creative design?",
        answer: "Yes, our in-house design team creates all ad graphics, video thumbnails, and carousel creatives included in our management packages.",
      },
      {
        question: "How do you measure campaign success?",
        answer: "We track and report on impressions, reach, clicks, link clicks, leads generated, cost per lead, conversion rate, and return on ad spend (ROAS) — all in transparent weekly reports.",
      },
    ],

    relatedCategory: "digital-advertising",
    relatedSlugs: ["youtube-video-advertising", "ai-business-videos", "social-media-design"],
  },
  {
    category: "digital-advertising",
    slug: "youtube-video-advertising",
    name: "YouTube Video Advertising",
    tagline: "Pre-roll & in-stream YouTube ads for Meerut businesses",
    metaTitle: "YouTube Advertising in Meerut | Video Ad Campaigns | World Media NCR",
    metaDescription:
      "Professional YouTube advertising campaigns for businesses in Meerut. Pre-roll ads, in-stream video ads, and Google Display Network targeting. Reach millions of viewers. Call +91-9456497636.",
    keywords: [
      "youtube advertising meerut",
      "youtube ads management meerut",
      "video advertising meerut",
      "youtube marketing meerut",
      "google video ads meerut",
      "youtube pre-roll ads meerut",
      "digital video advertising meerut",
      "youtube ad agency meerut",
    ],
    canonical: "https://worldmediancr.com/services/digital-advertising/youtube-video-advertising",
    ogImage: "/images/website/herobg2.jpg",
    serviceType: "YouTube Video Advertising",
    areaServed: "Meerut, Delhi NCR & Western Uttar Pradesh",

    heroHeadline: "YouTube Ads That Make",
    heroHeadlineHighlight: "Your Brand Impossible to Ignore",
    heroSubheadline:
      "Strategic YouTube advertising campaigns targeting Meerut audiences — pre-roll ads, skippable in-stream ads, and bumper ads on India's largest video platform.",

    stats: [
      { value: "2B+", label: "Monthly Users", sublabel: "YouTube Worldwide" },
      { value: "40%", label: "Watch Time India", sublabel: "Mobile Viewers" },
      { value: "CPV", label: "Pay Per View", sublabel: "Only Pay When Watched" },
      { value: "Local", label: "Targeting", sublabel: "Meerut & NCR Pinpointed" },
    ],

    overviewHeading: "Video Advertising: The Future of Digital Marketing",
    overviewSubheading: "Why YouTube Ads Deliver Massive Brand Recall for Meerut Businesses",
    overviewParagraphs: [
      "YouTube is India's largest video platform — with over 500 million Indian users spending an average of 40 minutes per day watching content. YouTube ads offer unparalleled brand recall because video engages multiple senses simultaneously, making your message 3 times more memorable than static display ads.",
      "World Media NCR manages complete YouTube advertising campaigns using Google Ads — from audience targeting and ad type selection to video optimization and performance tracking. We target Meerut and regional audiences precisely by age, location, interests, and even specific YouTube channels related to your industry.",
    ],

    featuresHeading: "YouTube Advertising Services",
    features: [
      {
        title: "Skippable In-Stream Ads",
        description: "Pre-roll ads that play before YouTube videos. You only pay when viewers watch 30+ seconds — maximum value for budget.",
        icon: "Play",
      },
      {
        title: "Non-Skippable Ads",
        description: "6 to 15-second unskippable ads that guarantee your complete message is seen before every video.",
        icon: "Monitor",
      },
      {
        title: "Bumper Ads",
        description: "6-second bumper ads for rapid brand recall — perfect for retargeting and brand awareness campaigns.",
        icon: "Zap",
      },
      {
        title: "Meerut Local Targeting",
        description: "Geo-targeted campaigns pinpointed to Meerut, Muzaffarnagar, Delhi NCR, and specific PIN codes.",
        icon: "MapPin",
      },
      {
        title: "Video Script & Production Support",
        description: "We guide you on script writing, ad format optimization, and video best practices for maximum impact.",
        icon: "Clapperboard",
      },
      {
        title: "Performance Analytics",
        description: "Complete view-through data, click-through rates, audience retention reports, and ROI tracking.",
        icon: "BarChart2",
      },
    ],

    processHeading: "YouTube Campaign Setup Process",
    processSteps: [
      { step: "01", title: "Campaign Strategy", desc: "Goal setting, budget planning, ad format selection, and targeting strategy for your Meerut audience." },
      { step: "02", title: "Video Ad Preparation", desc: "Reviewing your video creative, optimizing for YouTube's format requirements, and creating thumbnail graphics." },
      { step: "03", title: "Google Ads Setup", desc: "Complete Google Ads account setup, targeting configuration, bidding strategy, and campaign launch." },
      { step: "04", title: "Optimization & Reporting", desc: "Ongoing bid adjustments, audience refinement, and weekly performance reports." },
    ],

    faqs: [
      {
        question: "Do I need to have a video already made for YouTube Ads?",
        answer: "Yes, you need a video ad creative to run YouTube campaigns. We can help with video script optimization and can connect you with our AI video production service if you need a video created.",
      },
      {
        question: "How do I only reach Meerut viewers on YouTube?",
        answer: "Google Ads allows geographic targeting down to specific cities and even PIN codes, so you can exclusively target viewers in Meerut, Muzaffarnagar, Delhi NCR, or any combination of locations.",
      },
      {
        question: "How much does YouTube advertising cost?",
        answer: "YouTube ads work on a cost-per-view (CPV) model — you typically pay ₹0.25 to ₹1.50 per view. Minimum recommended budget is ₹5,000 per month for meaningful reach.",
      },
    ],

    relatedCategory: "digital-advertising",
    relatedSlugs: ["meta-ads-management", "ai-business-videos"],
  },
  {
    category: "digital-advertising",
    slug: "ai-business-videos",
    name: "AI Business Videos",
    tagline: "AI-generated promotional & explainer videos for your brand",
    metaTitle: "AI Business Video Creation in Meerut | Promotional Videos | World Media NCR",
    metaDescription:
      "Professional AI-generated promotional videos, explainer videos, and product showcase videos for businesses in Meerut. Fast, affordable, and high-quality video content. Call +91-9456497636.",
    keywords: [
      "ai business videos meerut",
      "ai video creation meerut",
      "promotional video meerut",
      "business video production meerut",
      "explainer video meerut",
      "product video meerut",
      "ai generated video content meerut",
      "affordable video production meerut",
      "marketing video meerut",
      "brand video meerut",
      "social media video meerut",
    ],
    canonical: "https://worldmediancr.com/services/digital-advertising/ai-business-videos",
    ogImage: "/images/website/herobg2.jpg",
    serviceType: "AI Business Video Production",
    areaServed: "Meerut, Delhi NCR & Western Uttar Pradesh",

    heroHeadline: "AI-Powered Videos That Make",
    heroHeadlineHighlight: "Your Brand Stand Out",
    heroSubheadline:
      "Professional promotional videos, product showcases, and explainer videos created using cutting-edge AI technology — delivered fast, at a fraction of traditional video production costs.",

    stats: [
      { value: "5 Days", label: "Delivery Time", sublabel: "Standard Projects" },
      { value: "70%", label: "Cost Savings", sublabel: "vs Traditional Production" },
      { value: "4K", label: "Quality", sublabel: "Ultra HD Output" },
      { value: "Any", label: "Language", sublabel: "Hindi, English & More" },
    ],

    overviewHeading: "Professional Video Content Without the Production Costs",
    overviewSubheading: "How AI Video Production is Revolutionizing Business Marketing in Meerut",
    overviewParagraphs: [
      "Video content drives 3x more engagement than images and generates 80% more conversions on websites. But traditional video production — cameras, actors, studios, editors — is expensive, time-consuming, and complex. AI-powered video production changes everything, delivering professional-quality business videos in days instead of weeks, at 70% lower cost.",
      "World Media NCR uses advanced AI video generation tools combined with professional editing, your brand assets, voiceovers, and music to create compelling promotional videos, product demonstrations, explainer animations, and social media content — tailored specifically for your business and ready for YouTube, Instagram, Facebook, and WhatsApp.",
    ],

    featuresHeading: "AI Video Production Services",
    features: [
      {
        title: "Promotional Brand Videos",
        description: "60 to 90-second brand introduction videos showcasing your business, services, and value proposition.",
        icon: "Film",
      },
      {
        title: "Product Showcase Videos",
        description: "Product demonstration videos highlighting features, benefits, and use cases — perfect for e-commerce and social media.",
        icon: "Package",
      },
      {
        title: "Explainer Animation Videos",
        description: "Animated explainer videos that simplify complex services or products in an engaging visual format.",
        icon: "Clapperboard",
      },
      {
        title: "Social Media Short Videos",
        description: "Vertical short-form videos optimized for Instagram Reels, YouTube Shorts, and Facebook — 15 to 60 seconds.",
        icon: "Play",
      },
      {
        title: "Hindi & English Voiceover",
        description: "Professional AI voiceovers in Hindi and English, with option for regional languages — clear, natural, and professional.",
        icon: "Mic",
      },
      {
        title: "Background Music & SFX",
        description: "Royalty-free background music and sound effects synchronized to your video for maximum emotional impact.",
        icon: "Music",
      },
    ],

    processHeading: "AI Video Production Process",
    processSteps: [
      { step: "01", title: "Brief & Script", desc: "Understanding your product/service and creating a compelling script and storyboard for your video." },
      { step: "02", title: "AI Video Generation", desc: "Using advanced AI tools to generate visuals, animations, and motion graphics matching your script." },
      { step: "03", title: "Voiceover & Music", desc: "Professional voiceover recording (AI or human) and background music selection." },
      { step: "04", title: "Editing & Branding", desc: "Professional editing, adding your logo, colors, and brand assets for a cohesive finished video." },
      { step: "05", title: "Delivery & Optimization", desc: "Final video delivered in all required formats and sizes optimized for each platform." },
    ],

    pricingNote: "AI business videos start from ₹3,500 per video. Social media packages with multiple videos available at discounted rates.",

    faqs: [
      {
        question: "What is an AI business video?",
        answer: "AI business videos use artificial intelligence tools to generate visuals, animations, and voice — combined with professional editing, your brand assets, and music — to create high-quality promotional videos at a fraction of traditional production costs.",
      },
      {
        question: "Can you create videos in Hindi?",
        answer: "Yes, we create videos with Hindi voiceovers (AI and human), Hindi text overlays, and content tailored for the Indian market.",
      },
      {
        question: "How long does it take to make an AI business video?",
        answer: "Standard promotional videos are delivered within 5 to 7 working days. Rush delivery options are available.",
      },
      {
        question: "What video formats do you deliver?",
        answer: "We deliver in MP4 format optimized for YouTube, Instagram, Facebook, and WhatsApp — in horizontal (16:9), square (1:1), and vertical (9:16) formats as needed.",
      },
    ],

    relatedCategory: "digital-advertising",
    relatedSlugs: ["meta-ads-management", "youtube-video-advertising", "social-media-design"],
  },
];

export function getNewServiceBySlug(category: string, slug: string): NewServiceItem | undefined {
  return newServicesData.find((s) => s.category === category && s.slug === slug);
}

export function getNewServicesByCategory(category: string): NewServiceItem[] {
  return newServicesData.filter((s) => s.category === category);
}

export function getAllNewServiceParams(): { category: string; slug: string }[] {
  return newServicesData.map((s) => ({ category: s.category, slug: s.slug }));
}
