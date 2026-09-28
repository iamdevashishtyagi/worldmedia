// src/data/serviceCategories.ts
// Master categories registry — add new sub-services here and they appear everywhere automatically

export interface SubService {
  slug: string; // URL slug for the page
  name: string; // Display name
  shortDesc: string; // Short description for nav cards & listings
  icon: string; // Lucide icon name
  badge?: string; // Optional badge like "New", "Popular"
  keywords: string[]; // Primary SEO keywords
}

export interface ServiceCategory {
  slug: string; // category slug (used in /services/[category])
  name: string; // Display name
  tagline: string; // Short tagline for nav
  description: string; // Longer description for category landing page
  icon: string; // Lucide icon name
  accentColor: string; // Tailwind color class for accent
  heroGradient: string; // Tailwind gradient classes for hero
  services: SubService[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "outdoor-advertising",
    name: "Outdoor Advertising",
    tagline: "Hoardings, Billboards & OOH Media",
    description:
      "Dominate Meerut, NCR & Western UP with premium outdoor advertising. High-impact highway hoardings, digital wall painting, billboard gantries, vehicle branding, LED screens & more — all fully licensed.",
    icon: "Megaphone",
    accentColor: "text-yellow-400",
    heroGradient: "from-[#0A173E] via-[#0D1C4D] to-[#060E27]",
    services: [
      {
        slug: "hoarding-advertising-meerut",
        name: "Hoarding Advertising",
        shortDesc: "Premium highway & arterial hoardings in Meerut NCR",
        icon: "Megaphone",
        badge: "Top Service",
        keywords: ["best hoarding advertising meerut", "billboard advertising meerut"],
      },
      {
        slug: "digital-wall-painting-meerut",
        name: "Digital Wall Painting",
        shortDesc: "High-res wall painting across cities & 500+ villages",
        icon: "Brush",
        keywords: ["digital wall painting meerut", "wall advertising agency meerut"],
      },
      {
        slug: "billboard-advertising-meerut",
        name: "Billboard & Gantries",
        shortDesc: "Overhead gantries & landmark billboard installations",
        icon: "PanelTop",
        keywords: ["billboard advertising meerut", "overhead gantry advertising"],
      },
      {
        slug: "vehicle-branding-meerut",
        name: "Vehicle Fleet Branding",
        shortDesc: "Transit branding on autos, buses & delivery fleets",
        icon: "Truck",
        keywords: ["vehicle branding meerut", "auto branding advertising meerut"],
      },
      {
        slug: "led-display-advertising-meerut",
        name: "LED Digital Screens",
        shortDesc: "DOOH LED video display advertising at prime locations",
        icon: "Monitor",
        keywords: ["led screen advertising meerut", "DOOH advertising meerut"],
      },
      {
        slug: "flex-printing-meerut",
        name: "Flex Printing",
        shortDesc: "Large-format commercial flex printing & installation",
        icon: "Printer",
        keywords: ["flex printing meerut", "banner printing meerut"],
      },
      {
        slug: "political-advertising-meerut",
        name: "Political Campaigns",
        shortDesc: "End-to-end election campaign advertising solutions",
        icon: "Vote",
        keywords: ["political advertising meerut", "election campaign advertising up"],
      },
    ],
  },
  {
    slug: "development",
    name: "Web Development",
    tagline: "Websites, E-Commerce & Web Software",
    description:
      "Professional website development in Meerut — from business portfolio websites and e-commerce stores to custom web software & management systems. Built for performance, SEO & conversions.",
    icon: "Code2",
    accentColor: "text-blue-400",
    heroGradient: "from-[#0A173E] via-[#0D2060] to-[#060E27]",
    services: [
      {
        slug: "business-website-development",
        name: "Business Website",
        shortDesc: "Professional business websites that rank & convert",
        icon: "Globe",
        badge: "Popular",
        keywords: [
          "business website development meerut",
          "best website developer meerut",
          "professional website design meerut",
        ],
      },
      {
        slug: "portfolio-website-development",
        name: "Portfolio Website",
        shortDesc: "Stunning personal & creative portfolio websites",
        icon: "LayoutTemplate",
        keywords: [
          "portfolio website development meerut",
          "personal website developer meerut",
        ],
      },
      {
        slug: "ecommerce-website-development",
        name: "E-Commerce Store",
        shortDesc: "Full-featured online stores with payment integration",
        icon: "ShoppingBag",
        badge: "High Demand",
        keywords: [
          "ecommerce website development meerut",
          "online store development meerut",
          "best ecommerce developer meerut",
        ],
      },
      {
        slug: "web-software-development",
        name: "Web Software & ERP",
        shortDesc: "Custom management systems, ERP & web applications",
        icon: "Settings2",
        keywords: [
          "web software development meerut",
          "management system development meerut",
          "custom web application meerut",
        ],
      },
    ],
  },
  {
    slug: "designing",
    name: "Design Services",
    tagline: "Branding, UI/UX & Visual Identity",
    description:
      "Creative design services in Meerut — logo design, brand identity, website UI/UX design, social media graphics & print design. Make your brand unforgettable.",
    icon: "Palette",
    accentColor: "text-orange-400",
    heroGradient: "from-[#0A173E] via-[#1a0E2D] to-[#060E27]",
    services: [
      {
        slug: "logo-design-meerut",
        name: "Logo & Brand Identity",
        shortDesc: "Memorable logos & complete brand identity systems",
        icon: "Sparkles",
        badge: "Popular",
        keywords: [
          "logo design meerut",
          "best logo designer meerut",
          "brand identity design meerut",
        ],
      },
      {
        slug: "website-ui-ux-design",
        name: "Website UI/UX Design",
        shortDesc: "Pixel-perfect website design with great user experience",
        icon: "Layers",
        keywords: [
          "website design meerut",
          "ui ux design meerut",
          "website designer meerut",
        ],
      },
      {
        slug: "social-media-design",
        name: "Social Media Design",
        shortDesc: "Scroll-stopping creatives for Instagram, Facebook & more",
        icon: "Image",
        keywords: [
          "social media design meerut",
          "instagram post design meerut",
          "graphic design meerut",
        ],
      },
    ],
  },
  {
    slug: "digital-advertising",
    name: "Digital Advertising",
    tagline: "Meta Ads, YouTube & AI Video Content",
    description:
      "Grow your business online with targeted digital advertising in Meerut — Meta Ads (Facebook & Instagram), YouTube video ads, AI-generated business videos & performance marketing campaigns.",
    icon: "TrendingUp",
    accentColor: "text-emerald-400",
    heroGradient: "from-[#0A173E] via-[#062020] to-[#060E27]",
    services: [
      {
        slug: "meta-ads-management",
        name: "Meta Ads",
        shortDesc: "ROI-driven Facebook & Instagram ad campaigns",
        icon: "Target",
        badge: "High ROI",
        keywords: [
          "meta ads management meerut",
          "facebook ads meerut",
          "instagram ads meerut",
          "social media marketing meerut",
        ],
      },
      {
        slug: "youtube-video-advertising",
        name: "YouTube Advertising",
        shortDesc: "Pre-roll & in-stream YouTube ad campaigns",
        icon: "Play",
        keywords: [
          "youtube advertising meerut",
          "youtube ads management meerut",
          "video advertising meerut",
        ],
      },
      {
        slug: "ai-business-videos",
        name: "AI Business Videos",
        shortDesc: "AI-generated promo & explainer videos for your brand",
        icon: "Clapperboard",
        badge: "New",
        keywords: [
          "ai business videos meerut",
          "ai video creation meerut",
          "promotional video meerut",
        ],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((cat) => cat.slug === slug);
}

export function getAllCategorySlugs(): string[] {
  return serviceCategories.map((cat) => cat.slug);
}

export function getSubServiceByCategoryAndSlug(
  categorySlug: string,
  serviceSlug: string
): SubService | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.services.find((s) => s.slug === serviceSlug);
}

export function getAllCategoryAndServiceSlugs(): { category: string; slug: string }[] {
  return serviceCategories.flatMap((cat) =>
    cat.services.map((s) => ({ category: cat.slug, slug: s.slug }))
  );
}
