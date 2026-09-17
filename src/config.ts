export interface SiteConfig {
  language: string;
  brandName: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  brandName: "Rahman",
};

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

export interface HeroConfig {
  title: string;
  subtitleLine1: string;
  subtitleLine2: string;
  ctaText: string;
  resumeUrl: string;
}

export const heroConfig: HeroConfig = {
  title: "Naiem Naimur",
  subtitleLine1: "Junior IT Engineer | AWS & Cloud Infrastructure.",
  subtitleLine2:
    "Developing practical skills in AWS, cloud infrastructure, Linux, networking, and database technologies.",
  ctaText: "View My Projects",
  resumeUrl: "/resume.pdf",
};

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
  bio: "I'm Naiem Naimur Rahman, a Junior IT Engineer based in Toyama, Japan, with a growing focus on AWS and cloud infrastructure. I graduated from Sundai IT Business College in March 2026 and continue developing practical skills in AWS, cloud infrastructure, Linux, networking, and database technologies while applying my software development background to real-world projects.",
  education:
    "Sundai IT Business College - IT Expert Course (2024-2026)",
  location: "Toyama-ken, Takaoka-shi, Japan",
  languages:
    "Japanese (JLPT N2), English, Hindi, Bengali",
  certifications: [
    "AWS Certified Cloud Practitioner (September 2026)",
    "JLPT N2 (July 2025)",
    "TOEIC 660 (June 2025)",
    "JPET 532 (October 2024)",
  ],
};

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
      title: "AWS & Cloud",
      slug: "frontend-development",
      description:
        "Working with AWS services including EC2, S3, VPC, IAM, RDS, and other core cloud services while building practical cloud infrastructure knowledge.",
      image: "images/capability-1.jpg",
    },
    {
      title: "Linux & Networking",
      slug: "backend-development",
      description:
        "Developing practical Linux administration and networking skills, including IP addressing, subnets, routing, DNS, and troubleshooting.",
      image: "images/capability-2.jpg",
    },
    {
      title: "Cloud Security",
      slug: "java-development",
      description:
        "Learning cloud security fundamentals with IAM, permissions, access control, security groups, and secure infrastructure practices.",
      image: "images/capability-3.jpg",
    },
    {
      title: "Database & Git",
      slug: "database-git",
      description:
        "Working with MySQL, relational database fundamentals, Git, and GitHub for data management and version control.",
      image: "images/capability-4.jpg",
    },
  ],
};

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
    "frontend-development": {
      title: "AWS & Cloud",
      subtitle:
        "Building practical cloud infrastructure knowledge.",
      paragraphs: [
        "I am developing practical knowledge of AWS and cloud infrastructure through hands-on learning and certification study.",
        "I work with core AWS services such as EC2, S3, VPC, IAM, and RDS to understand how cloud resources are created, connected, and managed.",
        "I am learning how networking, permissions, storage, compute, and databases work together within AWS environments.",
        "My goal is to continue improving my practical cloud skills through labs, projects, and AWS certification study.",
      ],
    },

    "backend-development": {
      title: "Linux & Networking",
      subtitle:
        "Developing Linux and networking fundamentals.",
      paragraphs: [
        "I am developing practical Linux skills including command-line navigation, file and directory management, permissions, and basic system administration.",
        "I am also studying networking fundamentals such as IP addressing, subnetting, routing, DNS, ports, and common network protocols.",
        "I use these concepts to better understand how servers, networks, and cloud infrastructure communicate with each other.",
        "Linux and networking are an important part of my cloud infrastructure learning and AWS study.",
      ],
    },

    "java-development": {
      title: "Cloud Security",
      subtitle:
        "Learning secure cloud infrastructure practices.",
      paragraphs: [
        "I am learning cloud security fundamentals with a focus on AWS identity, permissions, and access management.",
        "I practice concepts such as IAM users, groups, roles, policies, security groups, and the principle of least privilege.",
        "I am also learning how access control and network security help protect AWS resources and cloud environments.",
        "I continue developing my security knowledge as part of my AWS and cloud infrastructure studies.",
      ],
    },

    "database-git": {
      title: "Database & Git",
      subtitle:
        "Data management and version control fundamentals.",
      paragraphs: [
        "I use MySQL to work with structured data and practice relational database concepts, SQL queries, joins, and basic database management.",
        "I use Git and GitHub for version control, project history, code organization, and documenting my technical learning.",
        "I practice branches, commits, repository management, and clear project documentation so my work remains easy to review and continue.",
        "These tools support both my software development background and my growing cloud and infrastructure project work.",
      ],
    },
  },
};

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
    "A collection of my software projects, cloud learning, and hands-on technical practice.",
};

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
      github:
        "https://github.com/Naiem00/mobile-app/tree/main/03_4calculator",
      live: "https://calc-pro-psi.vercel.app",
    },
    {
      title: "Memo App",
      year: "2026",
      discipline: "Note Taking Application",
      image: "images/research-2.jpg",
      github:
        "https://github.com/Naiem00/mobile-app/tree/main/04_7memo",
      live: "https://memo1-zeta.vercel.app",
    },
    {
      title: "Omikuji Game",
      year: "2026",
      discipline: "Interactive Fortune Game",
      image: "images/research-3.jpg",
      github:
        "https://github.com/Naiem00/mobile-app/tree/main/10c_omikuji",
      live: "https://omikuzigame.vercel.app",
    },
    {
      title: "Time Guessing Quiz",
      year: "2026",
      discipline: "Interactive Quiz",
      image: "images/research-4.jpg",
      github:
        "https://github.com/Naiem00/mobile-app/tree/main/98_Time%20guessing%20quiz",
      live: "https://timeguessingquiz.vercel.app",
    },
  ],
};

export interface HobbySlide {
  titleKey: string;
  descKey: string;
  image: string;
}

export interface VlogConfig {
  sectionLabelKey: string;
  slides: HobbySlide[];
}

export const vlogConfig: VlogConfig = {
  sectionLabelKey: "vlogTitle",
  slides: [
    {
      titleKey: "vlogSlide1Title",
      descKey: "vlogSlide1Desc",
      image: "images/snow-explore.jpg",
    },
    {
      titleKey: "vlogSlide2Title",
      descKey: "vlogSlide2Desc",
      image: "images/sakura-night.jpg",
    },
    {
      titleKey: "vlogSlide3Title",
      descKey: "vlogSlide3Desc",
      image: "images/urban-view.jpg",
    },
    {
      titleKey: "vlogSlide4Title",
      descKey: "vlogSlide4Desc",
      image: "images/sunset-sky.jpg",
    },
  ],
};

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
        {
          label: "Email",
          href: "mailto:tsnayeem@gmail.com",
        },
        {
          label: "GitHub",
          href: "https://github.com/Naiem00",
        },
        {
          label: "LinkedIn",
          href:
            "https://www.linkedin.com/in/naiem-rahman-2b96583aa/",
        },
      ],
    },

    {
      title: "Location",
      links: [
        {
          label: "Japan",
          href: "#",
        },
        {
          label: "Open to Opportunities",
          href: "#",
        },
      ],
    },
  ],

  copyright:
    "© 2026 Naiem Rahman. All rights reserved.",

  bottomLinks: [
    {
      label: "Privacy Policy",
      href: "#",
    },
    {
      label: "Terms of Service",
      href: "#",
    },
  ],
};