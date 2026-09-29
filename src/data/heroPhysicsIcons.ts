export interface PhysicsIconItem {
  id: string;
  icon: string;
  label?: string; // When provided, renders as small capsule/pill with label
  shape?: "pure" | "circle" | "square" | "rectangle" | "pill";
  size?: number; // Size of icon in px
  radius?: number; // Circle radius if shape="circle"
  width?: number; // Width of container in px
  height?: number; // Height of container in px
  color?: string;
  bg?: string;
  borderColor?: string;
  className?: string;
}

// Small tech capsules for the hero right-column (preserved original shape with slightly rounded corners)
export const heroPhysicsItems: PhysicsIconItem[] = [
  {
    id: "react",
    icon: "devicon:react",
    label: "React",
    shape: "pill",
    color: "#61DAFB",
    bg: "rgba(97, 218, 251, 0.08)",
    borderColor: "rgba(97, 218, 251, 0.3)",
  },
  {
    id: "nextjs",
    icon: "devicon:nextjs",
    label: "Next.js",
    shape: "pill",
    color: "#000000",
    bg: "rgba(0, 0, 0, 0.06)",
    borderColor: "rgba(0, 0, 0, 0.2)",
  },
  {
    id: "typescript",
    icon: "devicon:typescript",
    label: "TypeScript",
    shape: "pill",
    color: "#3178C6",
    bg: "rgba(49, 120, 198, 0.08)",
    borderColor: "rgba(49, 120, 198, 0.3)",
  },
  {
    id: "nodejs",
    icon: "devicon:nodejs",
    label: "Node.js",
    shape: "pill",
    color: "#5FA04E",
    bg: "rgba(95, 160, 78, 0.08)",
    borderColor: "rgba(95, 160, 78, 0.3)",
  },
  {
    id: "tailwindcss",
    icon: "devicon:tailwindcss",
    label: "Tailwind CSS",
    shape: "pill",
    color: "#06B6D4",
    bg: "rgba(6, 182, 212, 0.08)",
    borderColor: "rgba(6, 182, 212, 0.3)",
  },
  {
    id: "figma",
    icon: "devicon:figma",
    label: "Figma UI/UX",
    shape: "pill",
    color: "#F24E1E",
    bg: "rgba(242, 78, 30, 0.08)",
    borderColor: "rgba(242, 78, 30, 0.3)",
  },
  {
    id: "meta",
    icon: "logos:meta-icon",
    label: "Meta Ads",
    shape: "pill",
    color: "#0081FB",
    bg: "rgba(0, 129, 251, 0.08)",
    borderColor: "rgba(0, 129, 251, 0.3)",
  },
  {
    id: "google",
    icon: "logos:google-icon",
    label: "Google Ads",
    shape: "pill",
    color: "#4285F4",
    bg: "rgba(66, 133, 244, 0.08)",
    borderColor: "rgba(66, 133, 244, 0.3)",
  },
  {
    id: "youtube",
    icon: "logos:youtube-icon",
    label: "YouTube Video",
    shape: "pill",
    color: "#FF0000",
    bg: "rgba(255, 0, 0, 0.08)",
    borderColor: "rgba(255, 0, 0, 0.3)",
  },
  {
    id: "python",
    icon: "devicon:python",
    label: "Python AI",
    shape: "pill",
    color: "#3776AB",
    bg: "rgba(55, 118, 171, 0.08)",
    borderColor: "rgba(55, 118, 171, 0.3)",
  },
  {
    id: "javascript",
    icon: "devicon:javascript",
    label: "JavaScript",
    shape: "pill",
    color: "#F7DF1E",
    bg: "rgba(247, 223, 30, 0.08)",
    borderColor: "rgba(247, 223, 30, 0.3)",
  },
];

// Big pure brand icons for main hero section background (slightly increased in size ~90px):
// Pure icon only (no boundary, no filling box)
export const heroBackgroundIcons: PhysicsIconItem[] = [
  {
    id: "bg-instagram",
    icon: "skill-icons:instagram",
    shape: "square",
    width: 90,
    height: 90,
    size: 90,
  },
  {
    id: "bg-facebook",
    icon: "devicon:facebook",
    shape: "square",
    width: 90,
    height: 90,
    size: 90,
  },
  {
    id: "bg-linkedin",
    icon: "devicon:linkedin",
    shape: "square",
    width: 90,
    height: 90,
    size: 90,
  },
  {
    id: "bg-youtube",
    icon: "logos:youtube-icon",
    shape: "rectangle",
    width: 106,
    height: 74,
    size: 74,
  },
  {
    id: "bg-website",
    icon: "flat-color-icons:globe",
    shape: "circle",
    radius: 45,
    size: 90,
  },
  {
    id: "bg-google",
    icon: "logos:google-icon",
    shape: "circle",
    radius: 45,
    size: 90,
  },
  {
    id: "bg-meta",
    icon: "logos:meta-icon",
    shape: "circle",
    radius: 45,
    size: 90,
  },
  {
    id: "bg-whatsapp",
    icon: "logos:whatsapp-icon",
    shape: "circle",
    radius: 45,
    size: 90,
  },
];

// Big pure developer tech icons for developer page hero section:
// Pure tech icons (Next.js, React, TypeScript, Python, Node.js, Docker, GitHub, Tailwind, Figma)
export const developerPhysicsIcons: PhysicsIconItem[] = [
  {
    id: "dev-nextjs",
    icon: "devicon:nextjs",
    shape: "circle",
    radius: 44,
    size: 88,
  },
  {
    id: "dev-react",
    icon: "devicon:react",
    shape: "circle",
    radius: 44,
    size: 88,
  },
  {
    id: "dev-typescript",
    icon: "devicon:typescript",
    shape: "square",
    width: 86,
    height: 86,
    size: 86,
  },
  {
    id: "dev-nodejs",
    icon: "devicon:nodejs",
    shape: "circle",
    radius: 44,
    size: 88,
  },
  {
    id: "dev-python",
    icon: "devicon:python",
    shape: "circle",
    radius: 44,
    size: 88,
  },
  {
    id: "dev-tailwindcss",
    icon: "devicon:tailwindcss",
    shape: "circle",
    radius: 44,
    size: 88,
  },
  {
    id: "dev-docker",
    icon: "devicon:docker",
    shape: "circle",
    radius: 44,
    size: 88,
  },
  {
    id: "dev-github",
    icon: "logos:github-icon",
    shape: "circle",
    radius: 44,
    size: 88,
  },
  {
    id: "dev-figma",
    icon: "devicon:figma",
    shape: "circle",
    radius: 44,
    size: 88,
  },
];
