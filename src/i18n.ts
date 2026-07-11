import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navHome: "Home",
      navProjects: "Projects",
      navAbout: "About",
      heroTitle: "Naiem Naimur",
      heroSub1: "Junior Software Developer based in Japan.",
      heroSub2: "Building modern web applications with React, TypeScript, Java, and Spring Boot.",
      ctaView: "View My Projects",
      ctaDownload: "Download CV"
    }
  },
  ja: {
    translation: {
      navHome: "ホーム",
      navProjects: "プロジェクト",
      navAbout: "経歴",
      heroTitle: "ナイムル・ラーマン",
      heroSub1: "日本を拠点とするジュニアソフトウェアエンジニア。",
      heroSub2: "React、TypeScript、Java、Spring Bootを使ったモダンなWebアプリを開発。",
      ctaView: "プロジェクトを見る",
      ctaDownload: "履歴書をダウンロード"
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