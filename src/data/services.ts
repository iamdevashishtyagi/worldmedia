// src/data/services.ts

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceStat {
  value: string;
  label: string;
  sublabel: string;
}

export interface ServiceGalleryImage {
  src: string;
  alt: string;
  location: string;
}

export interface ServiceItem {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  serviceType: string;
  areaServed: string;

  // Hero
  heroHeadline: string;
  heroHeadlineHighlight: string;
  heroSubheadline: string;
  heroImage: string;
  previewImage?: string;

  // Stats
  stats: ServiceStat[];

  // Strategic Overview
  overviewHeading: string;
  overviewSubheading: string;
  overviewParagraphs: string[];

  // Core Features / Advantages
  featuresHeading: string;
  features: ServiceFeature[];

  // Types / Sizing / Formats
  typesHeading?: string;
  typesSubheading?: string;
  typesList?: { name: string; sizeOrFormat: string; bestFor: string; description: string }[];

  // Gallery
  galleryHeading?: string;
  galleryImages?: ServiceGalleryImage[];

  // Prime Locations Covered
  locationsHeading: string;
  locationsList: { name: string; description: string; tag: string }[];

  // Execution Process
  processHeading: string;
  processSteps: { step: string; title: string; desc: string }[];

  // FAQs
  faqs: ServiceFAQ[];

  // Related Services
  relatedSlugs: string[];
}

export const servicesData: ServiceItem[] = [
  {
    slug: "hoarding-advertising-meerut",
    name: "Hoarding Advertising",
    metaTitle: "Hoarding Advertising in Meerut | Premium Billboard Outdoor Ads | World Media NCR",
    metaDescription: "Premium hoarding advertising in Meerut & NCR. Strategic billboard placements on Delhi Road, Roorkee Road, Garh Road & major highways. 12+ years experience. Trusted by 500+ brands for outdoor advertising solutions.",
    keywords: [
      "hoarding advertising meerut",
      "billboard advertising meerut",
      "outdoor hoardings meerut",
      "hoarding near meerut",
      "advertising hoardings meerut",
      "hoarding contractors meerut",
      "hoarding on delhi road meerut",
      "hoarding locations meerut",
      "hoarding advertising muzaffarnagar",
      "outdoor advertising shamli",
      "delhi meerut expressway hoarding"
    ],
    canonical: "https://worldmediancr.com/services/hoarding-advertising-meerut",
    ogImage: "/images/portfolio/Baghra Bus Stand.webp",
    serviceType: "Hoarding and Billboard Advertising",
    areaServed: "Meerut, Delhi NCR & Western Uttar Pradesh",

    heroHeadline: "Hoarding Advertising",
    heroHeadlineHighlight: "in Meerut & NCR",
    heroSubheadline: "Premium billboard placements at strategic highway corridors and arterial intersections across Meerut, Muzaffarnagar, Shamli & Saharanpur. Engineered for 24/7 unmissable brand visibility.",
    heroImage: "/images/portfolio/Baghra Bus Stand.webp",
    previewImage: "/images/services/Hoarding1.webp",

    stats: [
      { value: "100+", label: "Prime Sites", sublabel: "Arterials & Highways" },
      { value: "100k+", label: "Daily Views", sublabel: "Per High-Traffic Location" },
      { value: "12+ Yrs", label: "Industry Leadership", sublabel: "Since 2013" },
      { value: "100%", label: "Legal Clearances", sublabel: "Nagar Nigam & NHAI" }
    ],

    overviewHeading: "High-Impact Roadside Visibility That Commands Authority",
    overviewSubheading: "Why Large Format Highway Hoardings Remain the Number One Choice for Market Leaders",
    overviewParagraphs: [
      "In an era crowded with digital noise and skippable online ads, physical hoarding advertising stands tall, permanent, and impossible to overlook. For over a decade, World Media NCR has engineered the most visible outdoor hoarding infrastructure in Western Uttar Pradesh.",
      "Our prime hoarding inventory spans the Delhi-Meerut Expressway (NE-3), Delhi Road, Roorkee Road, Garh Road, and interstate routes linking Delhi, Muzaffarnagar, Shamli, and Saharanpur. Whether you are launching a product, cementing retail dominance, or building sustained multi-district brand recall, our billboards place your message directly before hundreds of thousands of daily decision-makers.",
      "All installations are fully licensed by local municipal corporations (Nagar Nigam) and highway authorities (NHAI), backed by robust steel structural fabrication, precision tension mounting, and 24/7 illumination options."
    ],

    featuresHeading: "Why Partner With World Media NCR for Hoarding Campaigns",
    features: [
      {
        title: "Prime Choke-Point Locations",
        description: "Situated exclusively at high-congestion signals, arterial junctions, flyover approaches, and toll corridors where vehicle dwell time is maximum.",
        icon: "map-pin"
      },
      {
        title: "Front-Lit & Back-Lit Illumination",
        description: "Equipped with high-lumen, energy-efficient commercial LED floodlights ensuring brilliant legibility from dusk to late night.",
        icon: "lightbulb"
      },
      {
        title: "100% Legal & Certified Mounting",
        description: "Every hoarding site is backed by official municipal approvals, avoiding regulatory interruptions and safeguarding your brand's reputation.",
        icon: "shield"
      },
      {
        title: "Turnkey Campaign Execution",
        description: "From wide-format flex printing and crane mounting to regular physical site audits and maintenance, our in-house crew manages everything.",
        icon: "settings"
      },
      {
        title: "Long-Distance Readability",
        description: "Engineered with optimal viewing elevation, angle orientation, and non-reflective weatherproof PVC substrates for clarity at 200+ meters.",
        icon: "eye"
      },
      {
        title: "Campaign Monitoring & Proof",
        description: "Receive geotagged day and night photographs upon installation, alongside monthly condition reports throughout your campaign duration.",
        icon: "camera"
      }
    ],

    typesHeading: "Hoarding Formats & Specifications",
    typesSubheading: "Custom-Engineered Structures Suited to Your Marketing Budget and Spatial Needs",
    typesList: [
      { name: "Highway Unipoles", sizeOrFormat: "40x20 ft / 50x20 ft", bestFor: "National Brands & Automobile", description: "Single-pole towering steel structures elevated 40+ feet above highways for panoramic, clutter-free visibility." },
      { name: "Arterial Roadside Billboards", sizeOrFormat: "30x15 ft / 20x10 ft", bestFor: "Retail, Hospitals & Real Estate", description: "Sturdy multi-pillar hoardings installed at key city intersections, market entries, and flyover ramps." },
      { name: "Bridge & Flyover Cantilevers", sizeOrFormat: "30x10 ft / 40x10 ft", bestFor: "FMCG & Educational Institutes", description: "Direct head-on view hoardings mounted adjacent to heavy traffic flyovers and railway overbridges." },
      { name: "Gantry & Overhead Hoardings", sizeOrFormat: "60x12 ft / 50x10 ft", bestFor: "Expressway Transit Domination", description: "Spanning across traffic lanes for unavoidable head-on commuter exposure at highway toll and junction points." }
    ],

    galleryHeading: "Featured Hoarding Sites in Our Network",
    galleryImages: [
      { src: "/images/portfolio/Baghra Bus Stand.webp", alt: "Hoarding at Baghra Bus Stand Meerut", location: "Baghra Bus Stand, Meerut" },
      { src: "/images/portfolio/Bhasuma Main Road.webp", alt: "Main Road Hoarding at Bhasuma", location: "Bhasuma Main Road, Meerut" },
      { src: "/images/portfolio/Muzaffarnagar Meerut Road.webp", alt: "Highway Hoarding Muzaffarnagar Meerut Road", location: "Muzaffarnagar Highway" },
      { src: "/images/portfolio/SHAMLI KAIRANA ROAD.webp", alt: "Commercial Hoarding on Shamli Kairana Road", location: "Shamli, Uttar Pradesh" },
      { src: "/images/portfolio/Saharanpur Chhutmalpur.webp", alt: "Highway Billboard at Saharanpur Chhutmalpur", location: "Saharanpur Highway" },
      { src: "/images/portfolio/Meerut Sardhana.webp", alt: "Large Format Hoarding Sardhana Road Meerut", location: "Sardhana Road, Meerut" }
    ],

    locationsHeading: "Key Hoarding Corridors Covered",
    locationsList: [
      { name: "Delhi Road (Partapur to Begum Bridge)", description: "Meerut's primary commercial lifeline carrying over 120,000 daily commuters between Delhi NCR and Meerut city.", tag: "Highest Traffic" },
      { name: "Delhi-Meerut Expressway (NE-3)", description: "The premier 14-lane national expressway connecting Delhi, Ghaziabad, and Meerut with high-income interstate travelers.", tag: "Expressway" },
      { name: "Roorkee Road (National Highway 58)", description: "The central educational and institutional artery linking northern Meerut to Modipuram, Daurala, and Muzaffarnagar.", tag: "Institutional Hub" },
      { name: "Garh Road (Medical & Retail Corridor)", description: "High-density transit route connecting central Meerut to leading super-speciality hospitals and retail hubs.", tag: "Healthcare & Retail" },
      { name: "Muzaffarnagar & Shamli Corridors", description: "Industrial and agricultural business arteries offering high frequency reach across western UP's prosperous district centers.", tag: "Regional Dominance" }
    ],

    processHeading: "Our 4-Step Seamless Hoarding Booking Process",
    processSteps: [
      { step: "01", title: "Objective & Route Shortlisting", desc: "Share your target demographics and budget. We furnish an inventory map with verified daily traffic metrics." },
      { step: "02", title: "Site Selection & Reservation", desc: "Choose specific hoardings from verified high-resolution photographs, GPS coordinates, and sightline angles." },
      { step: "03", title: "High-Tension Mounting", desc: "Our experienced fabrication team prints on heavy-duty GSM flex and securely installs it with certified safety rigging." },
      { step: "04", title: "Audit Proof & Maintenance", desc: "You receive immediate geo-tagged day and night photo proof, followed by round-the-clock structural upkeep." }
    ],

    faqs: [
      {
        question: "What are the best hoarding locations in Meerut?",
        answer: "The most effective hoarding locations in Meerut include Delhi Road (120,000+ daily commuters), Roorkee Road (educational hub), Garh Road (medical and retail corridor), and the Delhi-Meerut Expressway (NE-3). Each location offers unique demographic advantages depending on your campaign goals."
      },
      {
        question: "Do you handle municipal permits for hoarding installation?",
        answer: "Yes, 100%. World Media NCR manages all regulatory permissions from the Nagar Nigam, NHAI, and private site owners. Every site is fully legal and certified, ensuring zero risk of ad disruption or civic penalties."
      },
      {
        question: "What is the minimum duration for booking a hoarding in Meerut?",
        answer: "Campaign bookings start from 1 month. For sustained brand recall and preferential site rates, 3 to 12-month long-term packages are recommended."
      },
      {
        question: "Do you offer front-lit and back-lit illuminated hoardings?",
        answer: "Yes, we provide front-lit, back-lit, and energy-efficient LED illuminated hoardings ensuring round-the-clock visibility and dramatic nighttime impact."
      },
      {
        question: "Can I run a multi-city campaign spanning Meerut, Muzaffarnagar, and Delhi NCR?",
        answer: "Absolutely. World Media NCR specializes in coordinated regional campaigns across Meerut, Muzaffarnagar, Shamli, Saharanpur, Baghpat, Hapur, and Delhi NCR with a single consolidated point of contact."
      },
      {
        question: "How quickly can my hoarding campaign go live?",
        answer: "Once the artwork is finalized and site reservation is confirmed, our in-house printing and mounting teams can deploy your hoarding within 24 to 48 hours."
      }
    ],

    relatedSlugs: ["digital-wall-painting-meerut", "billboard-advertising-meerut", "led-display-advertising-meerut"]
  },
  {
    slug: "digital-wall-painting-meerut",
    name: "Digital Wall Painting",
    metaTitle: "Digital Wall Painting in Meerut | Rural & Urban Wall Ads | World Media NCR",
    metaDescription: "Leading digital wall painting advertising agency in Meerut & Western UP. High-resolution, weather-resistant wall branding spanning urban markets and 500+ rural villages. Affordable, long-lasting outdoor reach.",
    keywords: [
      "digital wall painting meerut",
      "wall painting advertising meerut",
      "digital wall painting on delhi road meerut",
      "wall advertisement meerut",
      "outdoor wall branding meerut",
      "wall hoarding meerut",
      "wall painting contractors meerut",
      "digital wall painting muzaffarnagar",
      "wall painting shamli",
      "rural wall advertising up"
    ],
    canonical: "https://worldmediancr.com/services/digital-wall-painting-meerut",
    ogImage: "/images/toWEBP/dwp19.webp",
    serviceType: "Digital Wall Painting & Outdoor Branding",
    areaServed: "Meerut, Western UP, Muzaffarnagar, Shamli, Saharanpur, Baghpat, Hapur",

    heroHeadline: "Digital Wall Painting",
    heroHeadlineHighlight: "in Meerut & Western UP",
    heroSubheadline: "Hyper-localized, long-lasting wall advertising that reaches consumers right at their doorsteps. High-definition photographic prints mounted seamlessly on prime urban and rural walls.",
    heroImage: "/images/toWEBP/dwp19.webp",
    previewImage: "/images/services/Hoarding3.webp",

    stats: [
      { value: "500+", label: "Completed Projects", sublabel: "Urban & Rural UP" },
      { value: "3+ Years", label: "Durability", sublabel: "Weather & UV Resistant" },
      { value: "60%", label: "Cost Savings", sublabel: "Vs Traditional Billboards" },
      { value: "50+ Towns", label: "Micro Coverage", sublabel: "Villages to Highways" }
    ],

    overviewHeading: "Massive Footprint Branding at a Fraction of Billboard Costs",
    overviewSubheading: "Why FMCG, Cement, Agro, Education, and Healthcare Brands Rely on Digital Wall Painting",
    overviewParagraphs: [
      "Digital Wall Painting has revolutionized outdoor advertising across India. Replacing labor-intensive, hand-painted murals with high-resolution digital PVC flex mounted flat against roadside walls, it delivers vibrant brand aesthetics with photographic detail.",
      "World Media NCR pioneered wide-scale digital wall painting throughout Meerut, Muzaffarnagar, Shamli, Saharanpur, Baghpat, and rural Western UP. With hundreds of curated wall inventory sites along highways, village bus stands, block headquarters, and bustling town markets, we give your brand continuous grassroots exposure.",
      "Using industrial-grade adhesive substrates and weather-treated mounting, our wall media resists harsh monsoons, direct summer UV radiation, and dust, maintaining pristine color vibrancy for 2 to 3 years."
    ],

    featuresHeading: "Key Advantages of Digital Wall Painting",
    features: [
      {
        title: "Photographic Color Precision",
        description: "Exact brand color matching, smooth gradients, and sharp text that preserve your brand's strict brand guidelines.",
        icon: "palette"
      },
      {
        title: "Unmatched Cost-Efficiency",
        description: "Achieve widespread frequency and district-wide saturation at a fraction of the monthly rental cost of large highway hoardings.",
        icon: "dollar-sign"
      },
      {
        title: "Penetration Into Semi-Urban & Rural Markets",
        description: "Reach Tier-3 towns, agricultural mandi hubs, and rural village crossroads where traditional billboards are unavailable.",
        icon: "compass"
      },
      {
        title: "All-Weather UV & Moisture Resistance",
        description: "Printed on heavy-duty exterior flex with UV-cured inks designed to withstand scorching North Indian summers and torrential monsoons.",
        icon: "sun"
      },
      {
        title: "High Consumer Dwell-Time",
        description: "Positioned on neighborhood compound walls, tea stalls, bus stands, and market squares where people gather daily.",
        icon: "clock"
      },
      {
        title: "Zero Vandalism Guarantee",
        description: "Flush-mounted and secured directly to concrete walls with property owner consent, minimizing peeling and damage.",
        icon: "layers"
      }
    ],

    typesHeading: "Ideal Wall Painting Applications",
    typesSubheading: "Targeted Solutions for B2C, Agriculture, Real Estate, and Social Awareness Campaigns",
    typesList: [
      { name: "Highway & Bypass Walls", sizeOrFormat: "20x10 ft / 30x10 ft", bestFor: "Cement, Steel & Automobile", description: "Long compound boundary walls alongside national and state highways facing high-speed vehicle traffic." },
      { name: "Village & Mandi Entrance Walls", sizeOrFormat: "15x10 ft / 20x8 ft", bestFor: "Agro-Chemicals & Fertilizers", description: "High-dwell points at agricultural trading centers, grain markets, and panchayat bhavans." },
      { name: "Town Market & Bus Stand Walls", sizeOrFormat: "12x8 ft / 15x8 ft", bestFor: "FMCG, Mobile Brands & Retail", description: "Eye-level wall placements in dense commercial alleys where pedestrian footfall is constant." },
      { name: "Educational & Hospital Environs", sizeOrFormat: "25x10 ft / 20x10 ft", bestFor: "Colleges, Coaching & Diagnostics", description: "Compound walls bordering schools, degree colleges, and regional hospital campuses." }
    ],

    galleryHeading: "Digital Wall Painting Showcase",
    galleryImages: [
      { src: "/images/toWEBP/dwp1.webp", alt: "Digital wall painting on Delhi Road Meerut", location: "Delhi Road, Meerut" },
      { src: "/images/toWEBP/dwp14.webp", alt: "Large format wall advertising in Meerut city", location: "Garh Road, Meerut" },
      { src: "/images/toWEBP/dwp10.webp", alt: "Premium wall branding on Roorkee Road Meerut", location: "Roorkee Road, Meerut" },
      { src: "/images/toWEBP/dwp36.webp", alt: "Digital wall painting in Muzaffarnagar", location: "Muzaffarnagar Highway" },
      { src: "/images/toWEBP/dwp21.webp", alt: "High-visibility wall hoarding in Shamli", location: "Shamli, UP" },
      { src: "/images/toWEBP/dwp25.webp", alt: "Wall branding in Saharanpur", location: "Saharanpur, UP" }
    ],

    locationsHeading: "Geographic Wall Footprint",
    locationsList: [
      { name: "Meerut District & Suburbs", description: "Extensive network across Sardhana, Mawana, Hastinapur, Daurala, Partapur, and Meerut Cantt bypass routes.", tag: "Core Base" },
      { name: "Muzaffarnagar & Khatauli", description: "Over 80 prime arterial compound walls spanning Roorkee Road, Jansath Road, and sugar mill corridors.", tag: "Agro & Industrial" },
      { name: "Shamli & Kairana", description: "High-impact rural and semi-urban wall sites along Panipat Road, Kairana Road, and Mandi hubs.", tag: "Trade Arteries" },
      { name: "Baghpat & Baraut", description: "Strategic rural network covering Western UP agricultural belts and regional highway links.", tag: "Rural Reach" }
    ],

    processHeading: "Our Execution Framework",
    processSteps: [
      { step: "01", title: "Wall Reconnaissance & Permissions", desc: "We survey high-traffic walls, negotiate long-term property agreements, and verify surface smoothness." },
      { step: "02", title: "High-DPI UV Printing", desc: "Artwork is printed on heavy-grade tear-resistant vinyl using vivid exterior-grade inks." },
      { step: "03", title: "Precision Wall Application", desc: "Our field crews prep the wall, anchor framing, and affix the digital graphic flush with industrial fasteners." },
      { step: "04", title: "Geotagged Photo Audit", desc: "Clients receive latitude/longitude verified photographs of every single wall location for transparent verification." }
    ],

    faqs: [
      {
        question: "How long does digital wall painting last compared to hand painting?",
        answer: "Digital wall painting typically lasts 2 to 3 years without fading. Because it uses UV-treated digital vinyl rather than standard water-based distemper paints, colors remain crisp through heavy rainfall, sunlight, and roadside dust."
      },
      {
        question: "Do you secure legal agreements with wall owners?",
        answer: "Yes. World Media NCR signs formal lease agreements with every private and commercial property owner, ensuring your ad will never be whitewashed, claimed, or disrupted prematurely."
      },
      {
        question: "What is the minimum number of walls needed for a campaign?",
        answer: "We accommodate targeted local packages starting from 5 to 10 walls, as well as multi-district saturation blitzes spanning 100 to 500+ walls across Western Uttar Pradesh."
      },
      {
        question: "How does digital wall painting help FMCG and agricultural brands?",
        answer: "FMCG and agro-chemical brands benefit from deep micro-market penetration into rural haats, villages, and mandi towns where electronic media and large hoardings are neither available nor cost-effective."
      }
    ],

    relatedSlugs: ["hoarding-advertising-meerut", "flex-printing-meerut", "political-advertising-meerut"]
  },
  {
    slug: "billboard-advertising-meerut",
    name: "Billboard Advertising",
    metaTitle: "Billboard Advertising in Meerut | Highway Unipoles & Billboards | World Media NCR",
    metaDescription: "Command your market with premier billboard advertising in Meerut & Delhi-Meerut Expressway. Giant unipoles, overhead gantries, and illuminated billboards at top traffic locations.",
    keywords: [
      "billboard advertising meerut",
      "billboard on delhi road meerut",
      "delhi meerut expressway billboard",
      "unipole billboard meerut",
      "outdoor billboard agency meerut",
      "billboard rates meerut",
      "highway advertising meerut",
      "large format billboard ncr"
    ],
    canonical: "https://worldmediancr.com/services/billboard-advertising-meerut",
    ogImage: "/images/portfolio/Muzaffarnagar Meerut Road.webp",
    serviceType: "Billboard & Large Format Outdoor Advertising",
    areaServed: "Meerut, Delhi-Meerut Expressway, Ghaziabad, Western UP",

    heroHeadline: "Billboard Advertising",
    heroHeadlineHighlight: "in Meerut & Highway Corridors",
    heroSubheadline: "Towering highway unipoles and sky-scraping arterial billboards engineered for massive scale, prestige, and dominant market positioning across Meerut and Delhi NCR.",
    heroImage: "/images/portfolio/Muzaffarnagar Meerut Road.webp",
    previewImage: "/images/services/Hoarding3.webp",

    stats: [
      { value: "40+ Ft", label: "Tower Heights", sublabel: "Unobstructed Views" },
      { value: "150k+", label: "Commuters Daily", sublabel: "Highway Transit Reach" },
      { value: "24/7", label: "Floodlit Visibility", sublabel: "Night & Day Exposure" },
      { value: "Zero Clutter", label: "Dedicated Sites", sublabel: "Sole Brand Focus" }
    ],

    overviewHeading: "Dominant Scale for Brands That Refuse to Be Ignored",
    overviewSubheading: "Capture Unrivaled Market Share With Monumental Outdoor Structures",
    overviewParagraphs: [
      "Billboard advertising is the undisputed benchmark of corporate scale and brand credibility. In high-traffic transit routes like the Delhi-Meerut Expressway and arterial bypasses, monumental billboards command immediate respect and build instant brand prestige.",
      "World Media NCR owns and operates prime billboard real estate engineered to deliver clear, unhindered visibility over heavy multi-lane traffic. Whether elevated on high unipoles or fixed to prominent commercial facades, our billboards are impossible for commuters to miss.",
      "From high-end real estate and luxury automobiles to major hospital chains and university admissions, our billboard campaigns generate high-velocity brand recognition and inbound inquiries."
    ],

    featuresHeading: "Why Our Billboards Outperform Competitors",
    features: [
      {
        title: "Monumental Sizing",
        description: "Massive advertising surfaces ranging from 30x15 ft to 60x20 ft designed for instant comprehension at high travel speeds.",
        icon: "maximize"
      },
      {
        title: "Pristine Sightlines",
        description: "Positioned perpendicular to primary traffic flow, ensuring clear viewing distance of up to 400 meters before vehicle pass-by.",
        icon: "milestone"
      },
      {
        title: "Commercial-Grade Illumination",
        description: "Heavy-duty multi-spot floodlighting illuminates every corner of your billboard, transforming it into an evening beacon.",
        icon: "lightbulb"
      },
      {
        title: "Structural Safety Certification",
        description: "Fabricated from reinforced galvanized steel trusses built to withstand high wind velocity storms and extreme temperatures.",
        icon: "building"
      }
    ],

    typesHeading: "Available Billboard Formats",
    typesSubheading: "Precision-Engineered Options for Urban Core and Interstate Highway Corridors",
    typesList: [
      { name: "Highway Monopoles & Unipoles", sizeOrFormat: "40x20 ft / 50x20 ft", bestFor: "Expressway & High-Speed Transit", description: "Elevated single-column structures offering 360-degree unobstructed sightlines across multi-lane highways." },
      { name: "Urban Commercial Billboards", sizeOrFormat: "30x15 ft / 35x15 ft", bestFor: "City Arterial & Retail Districts", description: "Robust multi-pillar frameworks situated at high-density city roundabouts, flyovers, and shopping hubs." },
      { name: "Overhead Highway Gantries", sizeOrFormat: "60x12 ft / 50x12 ft", bestFor: "Head-On Commuter Impact", description: "Spans directly across road lanes, placing your message right above driver windshields." }
    ],

    locationsHeading: "Prime Billboard Corridors",
    locationsList: [
      { name: "Delhi-Meerut Expressway Interchange", description: "Unrivaled visibility at Partapur toll plazas and expressway entry/exit corridors carrying high-income traffic.", tag: "Premier Site" },
      { name: "Delhi Road Metro/Rapid Rail Corridors", description: "Continuous passenger and roadway visibility parallel to the new RRTS corridor.", tag: "Transit Core" },
      { name: "NH-58 Bypass Toll & Bypass Junctions", description: "Interstate commercial freight and passenger route connecting Delhi, Meerut, Muzaffarnagar, and Dehradun.", tag: "Interstate Link" }
    ],

    processHeading: "Billboard Campaign Deployment",
    processSteps: [
      { step: "01", title: "Traffic & Visibility Analysis", desc: "Select high-impact sites based on commuter density and line-of-sight studies." },
      { step: "02", title: "Creative Layout Optimization", desc: "Guidance on bold typography, minimal copy, and high contrast for rapid highway comprehension." },
      { step: "03", title: "Heavy Rigging & Mounting", desc: "Crane-assisted installation using commercial vinyl and reinforced tension cables." },
      { step: "04", title: "Lighting & Daily Inspection", desc: "Automated timer-based floodlights and periodic maintenance audits." }
    ],

    faqs: [
      {
        question: "What is the difference between a unipole and a standard billboard?",
        answer: "A unipole is a large format billboard mounted atop a single tall steel pillar (often 30 to 50 feet high), offering panoramic visibility over flyovers, trees, and buildings. A standard billboard typically uses multi-column supports or commercial building facade mountings."
      },
      {
        question: "How far away is a billboard readable on the highway?",
        answer: "Our large highway billboards (40x20 ft and 50x20 ft) are engineered with bold visual scaling readable from 300 to 500 meters away, giving motorists over 10 to 15 seconds of sustained viewing time."
      },
      {
        question: "Are your billboards illuminated at night?",
        answer: "Yes, our prime highway and arterial billboards feature dedicated high-lumen commercial LED floodlights that turn on automatically at dusk and stay lit until midnight or dawn."
      }
    ],

    relatedSlugs: ["hoarding-advertising-meerut", "led-display-advertising-meerut", "digital-wall-painting-meerut"]
  },
  {
    slug: "led-display-advertising-meerut",
    name: "LED Display Advertising",
    metaTitle: "LED Display Advertising in Meerut | Digital OOH Screens | World Media NCR",
    metaDescription: "Dynamic digital outdoor LED display advertising in Meerut. High-brightness digital OOH video screens at premier shopping malls, traffic junctions, and commercial centers.",
    keywords: [
      "led display advertising meerut",
      "digital ooh meerut",
      "digital billboard meerut",
      "led screen advertising meerut",
      "outdoor digital screen meerut",
      "video billboard meerut",
      "led hoarding meerut",
      "digital out of home advertising meerut"
    ],
    canonical: "https://worldmediancr.com/services/led-display-advertising-meerut",
    ogImage: "/images/website/herobg2.jpg",
    serviceType: "Digital OOH & LED Video Billboard Advertising",
    areaServed: "Meerut & Delhi NCR",

    heroHeadline: "LED Display Advertising",
    heroHeadlineHighlight: "in Meerut & NCR",
    heroSubheadline: "Dynamic, motion-driven digital outdoor screens positioned at Meerut's highest footfall intersections and premium shopping hubs. Bring your brand to life with vibrant video and animated creatives.",
    heroImage: "/images/website/herobg2.jpg",
    previewImage: "/images/services/Hoarding4.webp",

    stats: [
      { value: "4K UHD", label: "Ultra Crisp Resolution", sublabel: "P4/P6 High Density" },
      { value: "6,500+", label: "Nits Brightness", sublabel: "Daylight Sunlight Legible" },
      { value: "100%", label: "Dynamic Updates", sublabel: "Swap Creatives Instantly" },
      { value: "200k+", label: "Daily Impressions", sublabel: "Urban Commercial Zones" }
    ],

    overviewHeading: "Next-Generation Digital OOH: Motion, Color & Instant Agility",
    overviewSubheading: "Why Digital LED Screens Deliver 3x Higher Engagement Than Static Outdoor Media",
    overviewParagraphs: [
      "Digital Out-of-Home (DOOH) is the fastest-growing outdoor advertising medium in India. With vivid full-motion video, radiant contrast, and daylight-readable brightness, digital LED video walls instantly capture commuter attention and eliminate ad fatigue.",
      "World Media NCR brings cutting-edge digital LED screen infrastructure to Meerut's premier commercial hotspots, including Begum Bridge, Abu Lane, Delhi Road mall complexes, and university hubs. Seamlessly broadcast your 10 to 30-second brand videos, festival promotions, or product launches with zero printing lead times.",
      "Update your campaign creative in minutes via cloud-managed schedulers. Launch targeted morning/evening slot variations, run flash sales, or countdown to major launches with unprecedented operational flexibility."
    ],

    featuresHeading: "Advantages of Digital LED Advertising",
    features: [
      {
        title: "Full-Motion Video & Animation",
        description: "Engage human eyes instinctively with 60fps video, dynamic transitions, and animated storytelling that static posters cannot replicate.",
        icon: "film"
      },
      {
        title: "Daylight-Readable Ultra Brightness",
        description: "Commercial grade P4/P6 outdoor LED modules rated at 6,500+ nits guarantee sharp, rich visuals even under direct midday sun.",
        icon: "sun"
      },
      {
        title: "Zero Flex Printing Costs",
        description: "Save 100% on wide-format vinyl printing and mechanical mounting labor. Simply upload digital MP4 video or JPG artwork.",
        icon: "zap"
      },
      {
        title: "Time-Slot Targeting (Dayparting)",
        description: "Target office commuters in morning peak hours, shoppers in the afternoon, and diners/families in the evening with tailored messaging.",
        icon: "clock"
      }
    ],

    locationsHeading: "Prime Digital LED Screen Hubs",
    locationsList: [
      { name: "Begum Bridge & Abu Lane", description: "Meerut's central retail and commercial epicenter with continuous pedestrian footfall and crawling vehicular transit.", tag: "Retail Epicenter" },
      { name: "Delhi Road Shopprix & Mall Hubs", description: "Premium lifestyle shopping destination attracting affluent family and youth demographics.", tag: "High-Income Audience" },
      { name: "University & Medical Choke Points", description: "Heavy dwell-time roundabouts surrounding Chaudhary Charan Singh University and leading hospitals.", tag: "Youth & Healthcare" }
    ],

    processHeading: "How to Launch a DOOH Campaign",
    processSteps: [
      { step: "01", title: "Select Screen Network & Frequency", desc: "Choose your preferred digital screen locations and desired spot duration (10s, 20s, or 30s)." },
      { step: "02", title: "Artwork & Video Optimization", desc: "Submit your video or motion graphic formatted to native screen aspect ratios." },
      { step: "03", title: "Cloud Broadcast Activation", desc: "Your ad enters rotation immediately across chosen screens within 2 hours." },
      { step: "04", title: "Proof-of-Play Analytics", desc: "Receive automated digital playback logs confirming the exact number of ad displays per day." }
    ],

    faqs: [
      {
        question: "How long can my video advertisement be on the LED screen?",
        answer: "Standard video spot lengths are 10, 15, 20, or 30 seconds, repeating every few minutes across the day in a shared or exclusive loop."
      },
      {
        question: "Can I change my creative mid-campaign?",
        answer: "Yes, absolutely! One of the major advantages of DOOH with World Media NCR is instant creative swapping with zero printing or dismantling fees."
      },
      {
        question: "Is the screen readable in bright direct sunlight?",
        answer: "Yes. Our commercial LED screens use industrial-grade SMD technology with auto-dimming sensors and up to 7,000 nits brightness, ensuring vivid visibility in sunlight and clear, glare-free viewing at night."
      }
    ],

    relatedSlugs: ["hoarding-advertising-meerut", "billboard-advertising-meerut", "vehicle-branding-meerut"]
  },
  {
    slug: "vehicle-branding-meerut",
    name: "Vehicle Branding",
    metaTitle: "Vehicle Branding in Meerut | Auto, Bus & Commercial Fleet Advertising | World Media NCR",
    metaDescription: "Professional vehicle branding in Meerut & Western UP. High-impact auto rickshaw hoods, bus wraps, commercial delivery vans, and mobile fleet advertising. Maximum citywide transit reach.",
    keywords: [
      "vehicle branding meerut",
      "auto branding meerut",
      "bus advertising meerut",
      "transit advertising meerut",
      "car branding meerut",
      "commercial van wrapping meerut",
      "auto rickshaw advertising meerut",
      "fleet branding western up"
    ],
    canonical: "https://worldmediancr.com/services/vehicle-branding-meerut",
    ogImage: "/images/website/herobg2.jpg",
    serviceType: "Transit Media & Vehicle Fleet Branding",
    areaServed: "Meerut, Delhi NCR, Muzaffarnagar, Western UP",

    heroHeadline: "Vehicle Branding",
    heroHeadlineHighlight: "in Meerut & NCR",
    heroSubheadline: "Turn commercial fleets, city buses, and auto-rickshaws into high-frequency mobile billboards that navigate every neighborhood, market lane, and transit artery.",
    heroImage: "/images/website/herobg2.jpg",
    previewImage: "/images/services/Hoarding2.webp",

    stats: [
      { value: "500+", label: "Branded Vehicles", sublabel: "Active On Transit" },
      { value: "70+ km", label: "Daily Route Range", sublabel: "Per Branded Vehicle" },
      { value: "3M Vinyl", label: "Automotive Grade", sublabel: "Zero Paint Damage" },
      { value: "100%", label: "City & Suburb Penetration", sublabel: "Deep Market Reach" }
    ],

    overviewHeading: "Mobile Billboards That Travel to Your Customers",
    overviewSubheading: "Why Transit Fleet Advertising Delivers Maximum Repeated Eyeballs Across Urban Density",
    overviewParagraphs: [
      "Unlike stationary billboards, vehicle fleet branding travels throughout the entire city landscape. Moving through residential neighborhoods, commercial office districts, educational campuses, and congested market alleys, branded vehicles deliver deep, unavoidable impressions.",
      "World Media NCR provides end-to-end vehicle branding services for commercial delivery fleets, auto-rickshaws, private company vehicles, and regional buses. We utilize automotive-grade cast vinyl and protective lamination that guards vehicle paintwork while maintaining vibrant color brilliance.",
      "Whether you need 50 auto-rickshaws dominating downtown Meerut for a hospital opening or branded delivery vans establishing professional presence across NCR, our team guarantees flawless, wrinkle-free application."
    ],

    featuresHeading: "Why Choose Our Transit Media Services",
    features: [
      {
        title: "Automotive-Grade Cast Vinyl",
        description: "Bubble-free 3M and Avery Dennison certified vinyl wraps designed specifically for vehicle curves and outdoor road friction.",
        icon: "truck"
      },
      {
        title: "Complete Route Coverage",
        description: "Auto-rickshaws and buses travel along primary commuter arteries, railway stations, and interior colonies daily.",
        icon: "compass"
      },
      {
        title: "Protective UV Overlaminate",
        description: "Guards against scratches, aggressive pressure washing, fuel spills, and continuous UV sunlight exposure.",
        icon: "shield"
      },
      {
        title: "High-Frequency Street-Level Exposure",
        description: "Engages pedestrians, two-wheeler riders, car drivers, and public transit passengers at direct eye level.",
        icon: "eye"
      }
    ],

    locationsHeading: "Key Transit Formats Available",
    locationsList: [
      { name: "Auto-Rickshaw Hoods & Back Panels", description: "Highly cost-effective saturation media penetrating narrow market lanes and dense urban colonies.", tag: "Mass Saturation" },
      { name: "Commercial Delivery Van Wraps", description: "Transform your supply chain vehicles into mobile prestige billboards across Delhi-Meerut corridors.", tag: "Corporate Fleet" },
      { name: "Intercity & City Bus Advertising", description: "Massive scale moving advertisements travelling along primary state highways and bus terminal hubs.", tag: "Interstate Transit" }
    ],

    processHeading: "Our Application Process",
    processSteps: [
      { step: "01", title: "Fleet Sizing & Template Blueprint", desc: "Detailed vehicle contour measurements to prevent vital text from falling on handles or door trims." },
      { step: "02", title: "High-Resolution UV Printing", desc: "Heavy-duty automotive vinyl printing with UV protective gloss or matte lamination." },
      { step: "03", title: "Dust-Free Installation Bay", desc: "Applied by experienced wrap technicians using heat guns for seamless, edge-sealed conformity." },
      { step: "04", title: "Delivery & Route Tracking", desc: "Fleet verification photos and deployment tracking." }
    ],

    faqs: [
      {
        question: "Does vehicle wrapping damage the original vehicle paint?",
        answer: "No. When applied and removed by our trained professionals using automotive-grade cast vinyl, the wrap actually protects the underlying factory paint from road chips and sun fading."
      },
      {
        question: "How long does a vehicle wrap typically last?",
        answer: "Our vehicle wraps last 2 to 4 years under normal road conditions without cracking, peeling, or significant color fading."
      },
      {
        question: "Can I brand auto-rickshaws for a 1-month promotional campaign?",
        answer: "Yes! Auto-rickshaw hood and back-panel branding is ideal for short-term promotional blitzes, sales events, and new store openings."
      }
    ],

    relatedSlugs: ["flex-printing-meerut", "hoarding-advertising-meerut", "digital-wall-painting-meerut"]
  },
  {
    slug: "flex-printing-meerut",
    name: "Flex Printing",
    metaTitle: "Flex Printing in Meerut | Large Format Banner Printing | World Media NCR",
    metaDescription: "Fast, high-resolution flex printing services in Meerut. Solvent, eco-solvent, and star flex printing for hoardings, banners, backlit signboards, and exhibition displays.",
    keywords: [
      "flex printing meerut",
      "banner printing meerut",
      "large format printing meerut",
      "star flex printing meerut",
      "backlit flex printing meerut",
      "flex board printing meerut",
      "eco solvent printing meerut",
      "vinyl printing meerut"
    ],
    canonical: "https://worldmediancr.com/services/flex-printing-meerut",
    ogImage: "/images/website/herobg2.jpg",
    serviceType: "Wide Format Flex & Banner Printing Services",
    areaServed: "Meerut, Western UP & Delhi NCR",

    heroHeadline: "Wide-Format Flex Printing",
    heroHeadlineHighlight: "in Meerut",
    heroSubheadline: "State-of-the-art industrial flex printing with true 1440 DPI resolution, weather-proof outdoor inks, and lightning-fast turnaround times for hoardings, banners, and back-lit displays.",
    heroImage: "/images/website/herobg2.jpg",
    previewImage: "/images/services/YoursNextHoarding.webp",

    stats: [
      { value: "1440 DPI", label: "Ultra Crisp Print", sublabel: "Photographic Quality" },
      { value: "10k+ Sq Ft", label: "Daily Output", sublabel: "Industrial Capacity" },
      { value: "24 Hours", label: "Fast Turnaround", sublabel: "Same-Day Dispatch" },
      { value: "Heavy GSM", label: "Tear Resistant", sublabel: "High Wind Tolerant" }
    ],

    overviewHeading: "Industrial-Grade Print Infrastructure for Flawless Outdoor Media",
    overviewSubheading: "Precision Color Science, Heavy-Duty Substrates, and Unmatched Turnaround Capacity",
    overviewParagraphs: [
      "The visual success of any outdoor advertising campaign hinges on print quality. Blurry graphics, washed-out tones, or flimsy flex that tears during the first storm can ruin your brand image. World Media NCR operates high-capacity industrial print facilities in Meerut.",
      "We print on premium frontlit, backlit, star flex, blackback, and vinyl substrates using imported solvent, eco-solvent, and UV-curable machines. Our color-calibrated rip software ensures that your corporate pantones and intricate graphics are rendered with razor-sharp fidelity.",
      "Whether you require a single 40x20 ft highway hoarding flex or thousands of square feet of retail banners dispatched within 24 hours, our 24/7 print operations deliver without compromise."
    ],

    featuresHeading: "Why Our Print Quality Stands Out",
    features: [
      {
        title: "Heavy GSM Weatherproof Flex",
        description: "Heavy-duty 340 to 480 GSM materials featuring reinforced polyester scrim weave engineered to resist tearing in high winds.",
        icon: "printer"
      },
      {
        title: "Fade-Resistant Outdoor Inks",
        description: "Pigment-rich solvent and UV inks formulated for prolonged exterior exposure with zero color degradation.",
        icon: "palette"
      },
      {
        title: "Reinforced Eyelets & Welding",
        description: "High-frequency heat-welded hems and reinforced brass grommets every 2 feet for secure, wrinkle-free mounting.",
        icon: "check-circle"
      },
      {
        title: "Blackback & Backlit Options",
        description: "Specialty blackout flex prevents structural pole shadowing on frontlit boards, while translucent backlit flex glows evenly.",
        icon: "lightbulb"
      }
    ],

    locationsHeading: "Flex Media Formats",
    locationsList: [
      { name: "Normal & Star Frontlit Flex", description: "Ideal for roadside billboards, store fascias, event stages, and outdoor hoardings.", tag: "Standard & Heavy" },
      { name: "Backlit Translucent Flex", description: "Designed specifically for illuminated lightboxes, airport signages, and glowing night displays.", tag: "Illuminated" },
      { name: "Blackback Flex", description: "Blocks light transmission completely, ensuring no rear framework or pole shadows bleed through your creative.", tag: "Opaque" },
      { name: "Eco-Solvent Vinyl & Canvas", description: "Indoor photographic quality for corporate showrooms, exhibition stalls, and premium retail branding.", tag: "Premium High-DPI" }
    ],

    processHeading: "Print Production Workflow",
    processSteps: [
      { step: "01", title: "Artwork Pre-Flight Check", desc: "Our technicians inspect resolution, bleed margins, and color profiles to guarantee flawless reproduction." },
      { step: "02", title: "Color Calibrated Printing", desc: "High-speed multi-pass printing on climate-controlled industrial machinery." },
      { step: "03", title: "Finishing & Edge Welding", desc: "Thermal heat seaming, rope insertion, and rust-proof brass grommet attachment." },
      { step: "04", title: "Packaging & Dispatch / Mounting", desc: "Carefully rolled, boxed, and dispatched or directly handed over to our field installation crew." }
    ],

    faqs: [
      {
        question: "What is the difference between normal flex and star flex?",
        answer: "Star flex is a higher-density, premium-grade substrate with superior tensile strength, smoother surface texture, and enhanced gloss. It offers greater tear resistance and richer color vibrancy, making it the preferred choice for highway hoardings."
      },
      {
        question: "How fast can you print a 30x10 ft hoarding banner?",
        answer: "With our in-house industrial printing machines, we can print, seam, and deliver a standard 30x10 ft hoarding banner within 4 to 6 hours of artwork confirmation."
      },
      {
        question: "What file format should I supply for large format printing?",
        answer: "We recommend high-resolution PDF, TIFF, or PSD files set at actual size with at least 72 to 100 DPI resolution in CMYK color mode."
      }
    ],

    relatedSlugs: ["hoarding-advertising-meerut", "digital-wall-painting-meerut", "billboard-advertising-meerut"]
  },
  {
    slug: "political-advertising-meerut",
    name: "Political Advertising",
    metaTitle: "Political Advertising in Meerut & Western UP | Campaign Strategy | World Media NCR",
    metaDescription: "Strategic political campaign advertising in Meerut & Western UP. Complete Lok Sabha, Vidhan Sabha, and Panchayat election advertising across hoardings, wall painting, and transit media.",
    keywords: [
      "political advertising meerut",
      "election advertising meerut",
      "political campaign hoardings up",
      "political wall painting meerut",
      "election campaign agency meerut",
      "vidhan sabha advertising up",
      "lok sabha advertising meerut",
      "political branding western up"
    ],
    canonical: "https://worldmediancr.com/services/political-advertising-meerut",
    ogImage: "/images/portfolio/Meerut Sardhana.webp",
    serviceType: "Political & Election Campaign Media Services",
    areaServed: "Meerut, Western UP, Muzaffarnagar, Shamli, Baghpat",

    heroHeadline: "Political Campaign Advertising",
    heroHeadlineHighlight: "in Meerut & Western UP",
    heroSubheadline: "Dominant constituency-wide visibility for leaders, parties, and candidates across Lok Sabha, Vidhan Sabha, and local elections. Unmatched saturation on highways, village crossroads, and city centers.",
    heroImage: "/images/portfolio/Meerut Sardhana.webp",
    previewImage: "/images/services/Hoarding5.webp",

    stats: [
      { value: "50+ Elections", label: "Campaigns Executed", sublabel: "Vidhan & Lok Sabha" },
      { value: "100%", label: "ECI Compliance", sublabel: "Strict Code of Conduct" },
      { value: "24/7", label: "Rapid Deployment", sublabel: "Overnight Blitzes" },
      { value: "500+ Villages", label: "Constituency Coverage", sublabel: "Grassroots Saturation" }
    ],

    overviewHeading: "Unmissable Constituency Dominance When Every Vote Counts",
    overviewSubheading: "Comprehensive Election Media Management Tailored to Western UP's Political Geography",
    overviewParagraphs: [
      "In high-stakes electoral campaigns, visible momentum creates voter perception and psychological dominance. A candidate whose visual presence spans every highway entry, rural bus stop, and neighborhood market signals strength, seriousness, and inevitable victory.",
      "World Media NCR possesses unmatched political campaign media execution capabilities in Western Uttar Pradesh. Having managed advertising for numerous Lok Sabha, Vidhan Sabha, Zila Panchayat, and Municipal elections, we understand both the urgency of rapid deployment and the strict compliance demands of the Election Commission of India (ECI).",
      "From rapid hoarding network reservations and wide-scale digital wall painting to branded mobile campaign vehicles and mass flag printing, we ensure your message reaches every voter across the constituency."
    ],

    featuresHeading: "Why Political Strategists Choose World Media NCR",
    features: [
      {
        title: "Constituency-Wide Saturation",
        description: "Comprehensive coverage spanning central city hubs down to the most remote village voting booths.",
        icon: "vote"
      },
      {
        title: "Rapid Overnight Deployment",
        description: "Massive print and installation capacity capable of rolling out hundreds of hoardings and wall ads within 48 hours.",
        icon: "zap"
      },
      {
        title: "Strict ECI & Civic Compliance",
        description: "Full compliance with Model Code of Conduct regulations, municipal permissions, and accounting documentation.",
        icon: "scale"
      },
      {
        title: "Strategic Crossroads Placement",
        description: "Securing the highest dwell-time chowks, bus stands, and village haats where rural voters congregate daily.",
        icon: "target"
      }
    ],

    locationsHeading: "Key Constituencies & Coverage Zones",
    locationsList: [
      { name: "Meerut Parliamentary & Assembly Segments", description: "Cantt, City, South, Kithore, and Sardhana assembly zones.", tag: "Urban & Rural" },
      { name: "Muzaffarnagar & Kairana Segments", description: "High-density sugarcane and industrial belts with active regional voting blocs.", tag: "Highway & Mandi" },
      { name: "Baghpat & Baraut Belts", description: "Traditional political nerve centers requiring extensive grassroots wall and banner presence.", tag: "Grassroots" }
    ],

    processHeading: "Election Campaign Rollout",
    processSteps: [
      { step: "01", title: "Constituency Media Mapping", desc: "Analyzing booth densities, main transit arteries, and key gathering points for optimal exposure." },
      { step: "02", title: "Rapid Printing & Stocking", desc: "Continuous printing of flex, banners, flags, and wall graphics in our dedicated production units." },
      { step: "03", title: "Overnight Field Mobilization", desc: "Coordinated installation teams deploy across urban sectors and rural blocks simultaneously." },
      { step: "04", title: "Real-Time Replacement & Maintenance", desc: "Immediate replacement of damaged or weathered campaign materials throughout voting season." }
    ],

    faqs: [
      {
        question: "Do you handle Election Commission (ECI) compliance?",
        answer: "Yes. All campaign hoardings and permissions comply strictly with Election Commission of India (ECI) guidelines and Model Code of Conduct requirements, complete with required invoice documentation."
      },
      {
        question: "How quickly can you saturate a constituency before an election?",
        answer: "Our industrial printing facility and dedicated field deployment crews can blanket an entire assembly constituency with hoardings, banners, and wall paintings within 48 to 72 hours."
      },
      {
        question: "Can you manage rural village wall painting alongside city hoardings?",
        answer: "Yes, this hybrid approach is our specialty. We combine high-impact highway unipoles for urban prestige with hundreds of village wall paintings for deep grassroots penetration."
      }
    ],

    relatedSlugs: ["digital-wall-painting-meerut", "hoarding-advertising-meerut", "vehicle-branding-meerut"]
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}
