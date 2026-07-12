import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      navAbout: "About", navSkills: "Skills", navShowreel: "Showreel", navProjects: "Projects", navContact: "Contact", ctaHire: "Hire Me",
      // Hero
      heroTitle: "Naiem Naimur",
      heroSub1: "Junior Software Developer based in Japan.",
      heroSub2: "Building modern web applications with React, TypeScript, Java, and Spring Boot.",
      ctaView: "View My Projects",
      ctaDownload: "Download CV",
      // Sections
      skillsLabel: "Core Skills",
      projectsLabel: "Projects",
      // Skills
      frontendTitle: "Frontend Development", frontendDesc: "Building responsive user interfaces using React, TypeScript, and modern CSS frameworks like Tailwind.",
      backendTitle: "Backend Development", backendDesc: "Creating REST APIs using Node.js and Java. Working with authentication, databases, and server-side logic.",
      javaTitle: "Java Development", javaDesc: "Developing applications and APIs using Java, focusing on clean code and OOP principles.",
      dbTitle: "Database & Git", dbDesc: "Working with MySQL and Git/GitHub for version control and data management."
    }
  },
  ja: {
    translation: {
      // Navigation
      navAbout: "経歴", navSkills: "スキル", navShowreel: "ショーリール", navProjects: "プロジェクト", navContact: "お問い合わせ", ctaHire: "採用依頼",
      // Hero
      heroTitle: "ラーマン",
      heroSub1: "日本を拠点とするジュニアソフトウェアエンジニア。",
      heroSub2: "React、TypeScript、Java、Spring Bootを使ったモダンなWebアプリを開発。",
      ctaView: "プロジェクトを見る",
      ctaDownload: "履歴書をダウンロード",
      // Sections
      skillsLabel: "スキルセット",
      projectsLabel: "プロジェクト",
      // Skills
      frontendTitle: "フロントエンド開発", frontendDesc: "React、TypeScript、TailwindなどのモダンなCSSフレームワークを使用してレスポンシブなUIを構築。",
      backendTitle: "バックエンド開発", backendDesc: "Node.jsとJavaを使用したREST APIの開発。認証、データベース、サーバーサイドロジックの実装。",
      javaTitle: "Java開発", javaDesc: "クリーンコードとOOP原則に重点を置いたJavaによるアプリケーションとAPIの開発。",
      dbTitle: "データベース & Git", dbDesc: "MySQLとGit/GitHubを使用したバージョン管理とデータ管理。"
    }
  }
};

i18n.use(initReactI18next).init({ 
  resources, 
  lng: 'en', 
  fallbackLng: 'en', 
  interpolation: { escapeValue: false } 
});

export default i18n;