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
  subtitleLine1:
    "Junior Software Developer based in Japan.",
  subtitleLine2: "Building modern web applications with React, TypeScript, Java, and Spring Boot.",
  ctaText: "View My Projects",
};

// ============================================================
// Capabilities (Curriculum section)
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
        "Building responsive user interfaces using React, TypeScript, and modern CSS frameworks like Tailwind.",
      image: "images/capability-1.jpg",
    },
    {
      title: "Backend Development",
      slug: "backend-development",
      description:
        "Creating REST APIs using Node.js and Java. Working with authentication, databases, and server-side logic.",
      image: "images/capability-2.jpg",
    },
    {
      title: "Java Development",
      slug: "java-development",
      description:
        "Developing applications and APIs using Java, focusing on clean code and OOP principles.",
      image: "images/capability-3.jpg",
    },
    {
      title: "Database & Git",
      slug: "database-git",
      description:
        "Working with MySQL and Git/GitHub for version control and data management.",
      image: "images/capability-4.jpg",
    },
  ],
};

// ============================================================
// Capability Detail (sub-pages)
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
    subtitle: "Building modern web applications.",
    paragraphs: [
      "I build web applications using React, TypeScript, and Java on the backend. I focus on writing clean and maintainable code while learning how real-world applications are structured.",
      "On the frontend, I work with React, HTML, CSS, and JavaScript to create responsive and user-friendly interfaces.",
      "On the backend, I build simple APIs using Java and Node.js, and I work with MySQL for data storage.",
      "I use Git and GitHub for version control and practice organizing projects in a structured way."
    ],
  },

  "ui-ux-design": {
  title: "Frontend Development",
  subtitle: "Building simple and responsive interfaces.",
  paragraphs: [
    "I build user interfaces using HTML, CSS, JavaScript, and React.",
    "I focus on making layouts responsive and easy to use.",
    "I practice improving UI structure, spacing, and basic design consistency.",
    "I am continuously learning frontend development through real projects."
  ],
},

  "cloud-architecture": {
    title: "Backend & Database",
    subtitle: "Working with APIs and data systems.",
    paragraphs: [
      "I build basic backend systems using Java and Node.js for handling application logic.",
      "I work with REST APIs to connect frontend and backend systems.",
      "I use MySQL to store and manage application data.",
      "I focus on understanding how data flows between client and server."
    ],
  },

  "mobile-development": {
    title: "Projects & Practice",
    subtitle: "Learning by building real applications.",
    paragraphs: [
      "I build small projects like calculator apps, memo apps, and simple games using JavaScript.",
      "These projects help me improve problem-solving and logic-building skills.",
      "I practice DOM manipulation, event handling, and responsive design.",
      "I focus on improving step by step through hands-on coding."
    ],
  },
}

// ============================================================
// Architecture (CinematicVision section)
// ============================================================

export interface ArchitectureConfig {
  sectionLabel: string;
  videoPath: string;
  title: string;
  description: string;
}

export const architectureConfig: ArchitectureConfig = {
  sectionLabel: "Showreel",
  videoPath: "/videos/showreel.mp4",
  title: "A Glimpse Into My Creative & Technical World",
  description:
    "A curated showcase of my development process, design thinking, and the projects I've brought to life. From initial wireframes to deployed applications, this reel captures the craft behind every line of code and every design decision.",
};

// ============================================================
// Research (AlumniArchives section)
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
      discipline: "JavaScript / Frontend",
      image: "images/research-1.jpg",
    },
    {
      title: "Memo App",
      year: "2026",
      discipline: "CRUD Application",
      image: "images/research-2.jpg",
    },
    {
      title: "Browser Game",
      year: "2026",
      discipline: "JavaScript Game Development",
      image: "images/research-3.jpg",
    },
    {
      title: "Mobile-Friendly UI Website",
      year: "2026",
      discipline: "Responsive Frontend Design",
      image: "images/research-4.jpg",
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
  copyright: "\u00A9 2026 Naiem Rahman All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
