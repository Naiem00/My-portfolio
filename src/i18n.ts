import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navHome: "Home",
      navProjects: "Projects",
      navAbout: "About",
      heroTitle: "Naimur Rahman",
      heroSubtitle: "Software Engineer",
      projectSection: "Featured Projects",
      aboutSection: "About Me",
      viewProject: "View Code"
    }
  },
  ja: {
    translation: {
      navHome: "ホーム",
      navProjects: "プロジェクト",
      navAbout: "経歴",
      heroTitle: "ナイムル・ラーマン",
      heroSubtitle: "ソフトウェアエンジニア",
      projectSection: "主なプロジェクト",
      aboutSection: "自己紹介",
      viewProject: "コードを見る"
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