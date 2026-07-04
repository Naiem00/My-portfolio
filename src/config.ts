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
      subtitle: "End-to-end web application engineering.",
      paragraphs: [
        "My full-stack development practice spans the entire application lifecycle, from architecting robust database schemas to delivering pixel-perfect user interfaces. I specialize in the React ecosystem paired with Node.js backends, leveraging TypeScript for type safety across the stack. Every project I undertake emphasizes clean code architecture, comprehensive testing, and performance optimization.",
        "On the frontend, I build responsive, accessible interfaces using React, Next.js, and Tailwind CSS. I'm experienced with state management solutions like Zustand and Redux, as well as modern React patterns including hooks, server components, and streaming SSR. My focus is always on creating fast, intuitive experiences that work seamlessly across devices and network conditions.",
        "For backend development, I design RESTful and GraphQL APIs using Node.js, Express, and Fastify. I'm proficient with both SQL databases (PostgreSQL, MySQL) and NoSQL solutions (MongoDB, Redis). I implement authentication systems, rate limiting, caching strategies, and background job processing to ensure applications are secure, scalable, and resilient under load.",
        "DevOps and deployment are integral to my workflow. I configure CI/CD pipelines using GitHub Actions and GitLab CI, containerize applications with Docker, and deploy to cloud platforms including AWS, Vercel, and Railway. I monitor application health with logging and alerting systems, ensuring high availability and rapid incident response.",
      ],
    },
    "ui-ux-design": {
      title: "UI/UX Design",
      subtitle: "Human-centered design that drives engagement.",
      paragraphs: [
        "My design philosophy centers on empathy, understanding user needs, pain points, and behaviors before a single pixel is placed. I conduct user research through interviews, surveys, and usability testing to inform design decisions with real data rather than assumptions. This research-driven approach ensures the products I design solve genuine problems.",
        "I create comprehensive design systems that ensure consistency and scalability across products. Using Figma, I build component libraries with detailed documentation, design tokens for colors and typography, and interactive prototypes for stakeholder review. These systems accelerate development while maintaining visual coherence as products evolve.",
        "Interaction design is where I bring interfaces to life. I prototype micro-interactions, page transitions, and loading states that make applications feel responsive and delightful. I pay close attention to accessibility standards (WCAG 2.1), ensuring designs work for users with diverse abilities across different assistive technologies.",
        "The handoff from design to development is a process I've refined over many projects. I provide developers with annotated specifications, CSS variables, and asset exports that minimize implementation friction. My background in both design and engineering allows me to speak both languages fluently, ensuring the final product faithfully realizes the design vision.",
      ],
    },
    "cloud-architecture": {
      title: "Cloud Architecture",
      subtitle: "Resilient, scalable infrastructure design.",
      paragraphs: [
        "I architect cloud-native solutions that scale gracefully from startup MVP to enterprise scale. My approach emphasizes infrastructure as code using Terraform and AWS CloudFormation, enabling reproducible environments and disaster recovery capabilities. I design systems that are cost-efficient at every stage of growth.",
        "Serverless architectures are a particular area of expertise. I leverage AWS Lambda, API Gateway, and DynamoDB to build event-driven systems that automatically scale with demand. This approach eliminates server management overhead while ensuring you only pay for actual compute usage, making it ideal for applications with variable traffic patterns.",
        "Security is woven into every layer of my architectural designs. I implement least-privilege IAM policies, encrypt data at rest and in transit, and configure VPCs with proper network segmentation. I stay current with cloud security best practices and compliance requirements including GDPR and SOC 2.",
        "Monitoring and observability are essential for maintaining healthy systems. I set up comprehensive logging with CloudWatch, distributed tracing with X-Ray, and alerting systems that notify teams before users are impacted. I also design chaos engineering experiments to validate system resilience and identify failure modes before they affect production.",
      ],
    },
    "mobile-development": {
      title: "Mobile Development",
      subtitle: "Native-quality cross-platform applications.",
      paragraphs: [
        "I develop mobile applications that deliver native-quality experiences while maximizing code reuse across platforms. Using React Native and Flutter, I build apps that feel at home on both iOS and Android, with platform-specific UI patterns, smooth animations, and responsive layouts that adapt to any screen size.",
        "Performance is paramount in mobile development. I optimize app startup times, minimize bundle sizes through code splitting and tree shaking, and implement efficient state management to keep UI interactions snappy. I use profiling tools to identify and eliminate bottlenecks in rendering, memory usage, and network requests.",
        "I integrate mobile apps with backend services, implementing real-time data synchronization, offline-first architectures, and push notification systems. I'm experienced with Firebase services, GraphQL subscriptions, and WebSocket connections for live updates. I also implement deep linking and universal links for seamless user journeys between web and app.",
        "The mobile development lifecycle includes thorough testing across devices and OS versions. I write unit tests, integration tests, and end-to-end tests using Jest, Detox, and Maestro. I configure CI/CD pipelines that automatically build, test, and deploy to App Store Connect and Google Play Console, streamlining the release process.",
      ],
    },
  },
};

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
      title: "E-Commerce Platform",
      year: "2025",
      discipline: "Full-Stack",
      image: "images/research-1.jpg",
    },
    {
      title: "Health & Fitness App",
      year: "2025",
      discipline: "Mobile Dev",
      image: "images/research-2.jpg",
    },
    {
      title: "Fintech Dashboard",
      year: "2024",
      discipline: "UI/UX Design",
      image: "images/research-3.jpg",
    },
    {
      title: "Cloud Migration Tool",
      year: "2024",
      discipline: "Cloud Arch",
      image: "images/research-4.jpg",
    },
    {
      title: "Social Media Analytics",
      year: "2024",
      discipline: "Full-Stack",
      image: "images/research-1.jpg",
    },
    {
      title: "Restaurant Booking App",
      year: "2023",
      discipline: "Mobile Dev",
      image: "images/research-2.jpg",
    },
    {
      title: "SaaS Landing Page",
      year: "2023",
      discipline: "UI/UX Design",
      image: "images/research-3.jpg",
    },
    {
      title: "Serverless API Gateway",
      year: "2023",
      discipline: "Cloud Arch",
      image: "images/research-4.jpg",
    },
    {
      title: "Real-Time Chat Platform",
      year: "2023",
      discipline: "Full-Stack",
      image: "images/research-1.jpg",
    },
    {
      title: "Travel Companion App",
      year: "2022",
      discipline: "Mobile Dev",
      image: "images/research-2.jpg",
    },
    {
      title: "Design System Library",
      year: "2022",
      discipline: "UI/UX Design",
      image: "images/research-3.jpg",
    },
    {
      title: "Microservices Platform",
      year: "2022",
      discipline: "Cloud Arch",
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
      title: "Connect",
      links: ["Email", "LinkedIn", "GitHub", "Dribbble"],
    },
    {
      title: "Location",
      links: ["Jakarta, Indonesia", "Available Worldwide", "Remote Friendly"],
    },
  ],
  copyright: "\u00A9 2026 Naiem Rahman All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};
