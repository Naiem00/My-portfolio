// ============================================================
// Site Configuration
// ============================================================

export interface SiteConfig {
  language: string;
  brandName: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  brandName: "Rahman",
};

// ============================================================
// Navigation
// ============================================================

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  links: NavLink[];
  ctaText: string;
}

export const navigationConfig: NavigationConfig = {
  links: [
    { label: "Skills", href: "#curriculum" },
    { label: "Showreel", href: "#cinematic" },
    { label: "Projects", href: "#alumni" },
    { label: "Contact", href: "#footer" },
  ],
  ctaText: "Hire Me",
};

// ============================================================
// Hero
// ============================================================

export interface HeroConfig {
  title: string;
  subtitleLine1: string;
  subtitleLine2: string;
  ctaText: string;
}

export const heroConfig: HeroConfig = {
  title: "Naiem Rahman",
  subtitleLine1: "Junior Software Developer based in Japan.",
  subtitleLine2:
    "Building modern web applications with React, TypeScript, Java, and Spring Boot.",
  ctaText: "View My Projects",
};

// ============================================================
// Capabilities
// ============================================================

export interface CapabilityItem {
  title: string;
  slug: string;
  description: string;
  image: string;
}

export interface CapabilitiesConfig {
  sectionLabel: string;
  items: CapabilityItem[];
}

export const capabilitiesConfig: CapabilitiesConfig = {
  sectionLabel: "Core Skills",
  items: [
    {
      title: "Frontend Development",
      slug: "frontend-development",
      description:
        "Building responsive user interfaces using React, TypeScript, and modern CSS.",
      image: "images/capability-1.jpg",
    },
    {
      title: "Backend Development",
      slug: "backend-development",
      description:
        "Creating REST APIs using Java and Node.js.",
      image: "images/capability-2.jpg",
    },
    {
      title: "Java Development",
      slug: "java-development",
      description: "Developing applications using Java.",
      image: "images/capability-3.jpg",
    },
    {
      title: "Database & Git",
      slug: "database-git",
      description: "Working with MySQL and Git/GitHub.",
      image: "images/capability-4.jpg",
    },
  ],
};

// ============================================================
// Capability Detail
// ============================================================

export interface CapabilityDetailData {
  title: string;
  subtitle: string;
  paragraphs: string[];
}

export interface CapabilityDetailConfig {
  sectionLabel: string;
  backLinkText: string;
  prevLabel: string;
  nextLabel: string;
  notFoundText: string;
  capabilities: Record<string, CapabilityDetailData>;
}

export const capabilityDetailConfig: CapabilityDetailConfig = {
  sectionLabel: "Skill Detail",
  backLinkText: "Back to home",
  prevLabel: "Previous",
  nextLabel: "Next",
  notFoundText: "Skill not found.",
  capabilities: {
    "fullstack-development": {
      title: "Full-Stack Development",
      subtitle: "Building modern web apps.",
      paragraphs: [
        "I build web apps using React and Java.",
        "I work with frontend and backend basics.",
        "I use MySQL for data storage.",
        "I practice Git and project structure.",
      ],
    },
  },
};

// ============================================================
// Architecture (Showreel)
// ============================================================

export const architectureConfig = {
  sectionLabel: "Showreel",
  videoPath: "",
  title: "My Development Work",
  description: "Projects and practice work.",
};

// ============================================================
// Research
// ============================================================

export interface ResearchProject {
  title: string;
  year: string;
  discipline: string;
  image: string;
}

export interface ResearchConfig {
  sectionLabel: string;
  projects: ResearchProject[];
}

export const researchConfig: ResearchConfig = {
  sectionLabel: "Projects",
  projects: [
    {
      title: "Calculator App",
      year: "2026",
      discipline: "JavaScript",
      image: "images/research-1.jpg",
    },
    {
      title: "Memo App",
      year: "2026",
      discipline: "CRUD App",
      image: "images/research-2.jpg",
    },
  ],
};

// ============================================================
// Footer
// ============================================================

export interface FooterLinkColumn {
  title: string;
  links: string[];
}

export interface FooterBottomLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  heading: string;
  columns: FooterLinkColumn[];
  copyright: string;
  bottomLinks: FooterBottomLink[];
}

export const footerConfig: FooterConfig = {
  heading: "Let's Build Something Great",
  columns: [
    {
      title: "Contact",
      links: ["Email", "GitHub", "LinkedIn"],
    },
    {
      title: "Location",
      links: ["Japan", "Open to Opportunities"],
    },
  ],
  copyright: "© 2026 Naiem Rahman All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};