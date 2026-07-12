import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navAbout: "About",
      navSkills: "Skills",
      navShowreel: "Showreel",
      navProjects: "Projects",
      navContact: "Contact",
      ctaHire: "Hire Me",
      
      heroTitle: "Naiem Naimur",
      heroSub1: "Junior Software Developer based in Japan.",
      heroSub2: "Building modern web applications with React, TypeScript, Java, and Spring Boot.",
      ctaView: "View My Projects",
      ctaDownload: "Download CV",
      
      aboutLabel: "About Me",
      aboutBio: "I'm Naiem Naimur Rahman, a Junior Software Developer based in Toyama, Japan. I graduated from Sundai IT Business College in March 2026 with a specialization in IT. I'm passionate about building modern web applications with React, TypeScript, Java, and Spring Boot.",
      eduLabel: "Education",
      eduText: "Sundai IT Business College - IT Expert Course (2024-2026)",
      locLabel: "Location",
      locText: "Toyama-ken, Takaoka-shi, Japan",
      langLabel: "Languages",
      langText: "Japanese (JLPT N2), English, Hindi, Bengali",
      certsLabel: "Certifications",
      
      skillsLabel: "Core Skills",
      frontendTitle: "Frontend Development",
      frontendDesc: "Building responsive user interfaces using React, TypeScript, and modern CSS frameworks like Tailwind.",
      backendTitle: "Backend Development",
      backendDesc: "Creating REST APIs using Node.js and Java. Working with authentication, databases, and server-side logic.",
      javaTitle: "Java Development",
      javaDesc: "Developing applications and APIs using Java, focusing on clean code and OOP principles.",
      dbTitle: "Database & Git",
      dbDesc: "Working with MySQL and Git/GitHub for version control and data management.",
      
      projectsLabel: "Projects"
    }
  },
  ja: {
    translation: {
      navAbout: "経歴",
      navSkills: "スキル",
      navShowreel: "ショーリール",
      navProjects: "プロジェクト",
      navContact: "お問い合わせ",
      ctaHire: "採用依頼",
      
      heroTitle: "ラーマン",
      heroSub1: "日本を拠点とするジュニアソフトウェアエンジニア。",
      heroSub2: "React、TypeScript、Java、Spring Bootを使ったモダンなWebアプリを開発。",
      ctaView: "プロジェクトを見る",
      ctaDownload: "履歴書をダウンロード",
      
      aboutLabel: "自己紹介",
      aboutBio: "富山県在住のジュニアソフトウェアエンジニア、ナイエム・ナイムール・ラフマンです。2026年3月に駿台電子情報ビジネス専門学校を卒業しました。React、TypeScript、Java、Spring Bootを用いたモダンなWebアプリケーション開発に情熱を注いでいます。",
      eduLabel: "学歴",
      eduText: "駿台電子情報ビジネス専門学校 - ITエキスパートコース (2024-2026)",
      locLabel: "所在地",
      locText: "日本、富山県高岡市",
      langLabel: "言語",
      langText: "日本語 (JLPT N2), 英語, ヒンディー語, ベンガル語",
      certsLabel: "資格",
      
      skillsLabel: "スキルセット",
      frontendTitle: "フロントエンド開発",
      frontendDesc: "React、TypeScript、TailwindなどのモダンなCSSフレームワークを使用してレスポンシブなUIを構築。",
      backendTitle: "バックエンド開発",
      backendDesc: "Node.jsとJavaを使用したREST APIの開発。認証、データベース、サーバーサイドロジックの実装。",
      javaTitle: "Java開発",
      javaDesc: "クリーンコードとOOP原則に重点を置いたJavaによるアプリケーションとAPIの開発。",
      dbTitle: "データベース & Git",
      dbDesc: "MySQLとGit/GitHubを使用したバージョン管理とデータ管理。",
      
      projectsLabel: "プロジェクト"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;