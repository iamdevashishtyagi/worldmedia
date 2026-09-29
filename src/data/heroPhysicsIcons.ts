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

// Big pure brand icons for full-hero background:
// Pure icon only (no boundary, no filling box, slightly bigger size ~78px-92px)
export const heroBackgroundIcons: PhysicsIconItem[] = [
  {
    id: "bg-instagram",
    icon: "skill-icons:instagram",
    shape: "square",
    width: 78,
    height: 78,
    size: 78,
  },
  {
    id: "bg-facebook",
    icon: "devicon:facebook",
    shape: "square",
    width: 78,
    height: 78,
    size: 78,
  },
  {
    id: "bg-linkedin",
    icon: "devicon:linkedin",
    shape: "square",
    width: 78,
    height: 78,
    size: 78,
  },
  {
    id: "bg-youtube",
    icon: "logos:youtube-icon",
    shape: "rectangle",
    width: 92,
    height: 64,
    size: 64,
  },
  {
    id: "bg-website",
    icon: "flat-color-icons:globe",
    shape: "circle",
    radius: 39,
    size: 78,
  },
  {
    id: "bg-google",
    icon: "logos:google-icon",
    shape: "circle",
    radius: 39,
    size: 78,
  },
  {
    id: "bg-meta",
    icon: "logos:meta-icon",
    shape: "circle",
    radius: 39,
    size: 78,
  },
  {
    id: "bg-whatsapp",
    icon: "logos:whatsapp-icon",
    shape: "circle",
    radius: 39,
    size: 78,
  },
];
