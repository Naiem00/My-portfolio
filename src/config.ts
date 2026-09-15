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
  subtitleLine1: "Junior IT Engineer | AWS & Cloud Infrastructure",
  subtitleLine2: "AWS, Linux, networking, databases, and cloud security.",
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
  bio: "I'm Naiem Naimur Rahman, a Junior IT Engineer based in Toyama, Japan, with a growing focus on AWS and cloud infrastructure. I graduated from Sundai IT Business College in March 2026 and continue building practical skills in AWS, Linux, networking, databases, and cloud security while applying my software development background to real projects.",
  education: "Sundai IT Business College - IT Expert Course (2024-2026)",
  location: "Toyama-ken, Takaoka-shi, Japan",
  languages: "Japanese (JLPT N2), English, Hindi, Bengali",
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
      slug: "aws-cloud",
      description:
        "Learning and building with core AWS services such as EC2, S3, VPC, IAM, CloudWatch, and other cloud infrastructure fundamentals.",
      image: "images/capability-1.jpg",
    },
    {
      title: "Linux & Networking",
      slug: "linux-networking",
      description:
        "Developing practical Linux administration and networking skills including TCP/IP, DNS, routing, subnets, permissions, and command-line workflows.",
      image: "images/capability-2.jpg",
    },
    {
      title: "Cloud Security",
      slug: "cloud-security",
      description:
        "Building a strong foundation in IAM, least-privilege access, security groups, monitoring, shared responsibility, and secure cloud design concepts.",
      image: "images/capability-3.jpg",
    },
    {
      title: "Database & Git",
      slug: "database-git",
      description:
        "Working with MySQL and Git/GitHub for structured data, version control, collaboration, and maintaining organized technical project workflows.",
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
    "aws-cloud": {
      title: "AWS & Cloud",
      subtitle: "Building practical cloud infrastructure skills.",
      paragraphs: [
        "I am developing practical AWS skills around core services such as EC2, S3, VPC, IAM, CloudWatch, and related infrastructure concepts.",
        "I focus on understanding how cloud resources connect, how permissions are managed, and how reliable environments are designed and monitored.",
        "My AWS Certified Cloud Practitioner foundation supports my continued preparation for more technical cloud and infrastructure roles.",
        "I reinforce what I learn through hands-on labs, small projects, documentation, and GitHub-based progress tracking.",
      ],
    },
    "linux-networking": {
      title: "Linux & Networking",
      subtitle: "Strengthening infrastructure fundamentals.",
      paragraphs: [
        "I am building Linux command-line and system administration skills including files, permissions, processes, packages, users, and basic troubleshooting.",
        "I study networking fundamentals such as TCP/IP, DNS, routing, ports, CIDR, public and private subnets, and how systems communicate across networks.",
        "These fundamentals help me better understand cloud infrastructure, especially VPC design, server connectivity, and security configurations.",
        "I continue improving through repeatable labs and practical exercises rather than relying only on theory.",
      ],
    },
    "cloud-security": {
      title: "Cloud Security",
      subtitle: "Applying secure cloud fundamentals.",
      paragraphs: [
        "I study AWS security fundamentals including IAM users and roles, policies, least-privilege access, MFA, security groups, and the shared responsibility model.",
        "I am learning how monitoring, logging, network controls, and identity management work together to protect cloud environments.",
        "My goal is to design infrastructure with security considered from the beginning instead of treating it as an afterthought.",
        "I continue practicing these concepts through AWS labs and architecture-based study scenarios.",
      ],
    },
    "database-git": {
      title: "Database & Git",
      subtitle: "Data management and version control fundamentals.",
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
    "A visual look at my technical journey across software development, AWS, cloud infrastructure, Linux, networking, and hands-on learning as I continue growing toward an IT and cloud engineering career.",
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
      github: "https://github.com/Naiem00/mobile-app/tree/main/03_4calculator",
      live: "https://calc-pro-psi.vercel.app",
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
      live: "https://omikuzigame.vercel.app",
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