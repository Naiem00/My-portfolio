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
  { label: "About", href: "#about" },
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
  resumeUrl: string;  
}

export const heroConfig: HeroConfig = {
  title: "Naiem Naimur",
  subtitleLine1: "Junior Software Developer based in Japan.",
  subtitleLine2:
    "Building modern web applications with React, TypeScript, Java, and Spring Boot.",
  ctaText: "View My Projects",
  resumeUrl: "/resume.pdf",
};

// ============================================================
// About       
// ============================================================

export interface AboutConfig {
  sectionLabel: string;
  bio: string;
  education: string;
  location: string;
  languages: string;
  certifications: string[];
}

export const aboutConfig: AboutConfig = {
  sectionLabel: "About Me",
  bio: "I'm Naiem Naimur Rahman, a Junior Software Developer based in Toyama, Japan. I graduated from Sundai IT Business College in March 2026 with a specialization in IT. I'm passionate about building modern web applications with React, TypeScript, Java, and Spring Boot.",
  education: "Sundai IT Business College - IT Expert Course (2024-2026)",
  location: "Toyama-ken, Takaoka-shi, Japan",
  languages: "Japanese (JLPT N2), English, Hindi, Bengali",
  certifications: [
    "JLPT N2 (July 2025)",
    "TOEIC 660 (June 2025)",
    "JPET 532 (October 2024)",
  ],
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
      subtitle: "Building modern web applications.",
      paragraphs: [
        "I build web apps using React, TypeScript, Java, and Node.js.",
        "I focus on clean UI and responsive frontend design.",
        "I build simple REST APIs and connect frontend with backend.",
        "I use GitHub for version control and project management.",
      ],
    },

    "frontend-development": {
      title: "Frontend Development",
      subtitle: "UI development and responsive design.",
      paragraphs: [
        "I build responsive UI using HTML, CSS, JavaScript, and React.",
        "I focus on layout, spacing, and usability.",
        "I practice modern frontend development through projects.",
        "I improve step by step through real coding experience.",
      ],
    },

    "backend-development": {
      title: "Backend Development",
      subtitle: "API and server-side development.",
      paragraphs: [
        "I build backend systems using Node.js and Java.",
        "I create REST APIs and handle application logic.",
        "I work with MySQL for database management.",
        "I focus on understanding how server and client communicate.",
      ],
    },

    "java-development": {
      title: "Java Development",
      subtitle: "Object-oriented programming with Java.",
      paragraphs: [
        "I develop applications using Java and OOP principles.",
        "I build simple backend systems and APIs.",
        "I focus on clean and structured code.",
        "I continuously practice Java through projects.",
      ],
    },

    "database-git": {
      title: "Database & Git",
      subtitle: "Version control and database basics.",
      paragraphs: [
        "I use MySQL to manage structured data and understand relational database basics.",
        "I work with Git and GitHub for version control and collaboration.",
        "I practice branching, merging, and commit history management.",
        "This helps me maintain clean and organized project workflow.",
      ],
    },
  },
};

// ============================================================
// Showreel
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
  title: "A Glimpse Into My Work",
  description:
    "A collection of my projects and learning journey using modern web technologies.",
};

// ============================================================
// Projects
// ============================================================

export interface ResearchProject {
  title: string;
  year: string;
  discipline: string;
  image: string;
  github: string;
  live: string;
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
  discipline: "Responsive Calculator",
  image: "images/research-1.jpg",
  github: "https://github.com/Naiem00/mobile-app/tree/main/03_4calculator",
  live: "https://calc-pro-git-main-naiem-portfolio.vercel.app",
},
    
 {
  title: "Memo App",
  year: "2026",
  discipline: "Note Taking Application",
  image: "images/research-2.jpg",
  github: "https://github.com/Naiem00/mobile-app/tree/main/04_7memo",
  live: "https://memo1-zeta.vercel.app",
},
    {
  title: "Omikuji Game",
  year: "2026",
  discipline: "Interactive Fortune Game",
  image: "images/research-3.jpg",
  github: "https://github.com/Naiem00/mobile-app/tree/main/10c_omikuji",
  live: "https://omikuzigame-71iv3kdtm-naiem-portfolio.vercel.app",
},
    
 {
  title: "Time Guessing Quiz",
  year: "2026",
  discipline: "Interactive Quiz",
  image: "images/research-4.jpg",
  github: "https://github.com/Naiem00/mobile-app/tree/main/98_Time%20guessing%20quiz",
  live: "https://timeguessingquiz.vercel.app",
},
  ],
};

// ============================================================
// Footer
// ============================================================

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterLinkColumn {
  title: string;
  links: FooterLink[];
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
      links: [
        { label: "Email", href: "mailto:tsnayeem@gmail.com" },
        { label: "GitHub", href: "https://github.com/Naiem00" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/naiem-rahman-2b96583aa/",
        },
      ],
    },
    {
      title: "Location",
      links: [
        { label: "Japan", href: "#" },
        { label: "Open to Opportunities", href: "#" },
      ],
    },
  ],
  copyright: "© 2026 Naiem Rahman. All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};