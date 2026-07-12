import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      brandName: "Rahman",
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
      aboutBio:
        "I'm Naiem Naimur Rahman, a Junior Software Developer based in Toyama, Japan. I graduated from Sundai IT Business College in March 2026 with a specialization in IT. I'm passionate about building modern web applications with React, TypeScript, Java, and Spring Boot.",

      eduLabel: "Education",
      eduText: "Sundai IT Business College - IT Expert Course (2024-2026)",

      locLabel: "Location",
      locText: "Toyama-ken, Takaoka-shi, Japan",

      langLabel: "Languages",
      langText: "Japanese (JLPT N2), English, Hindi, Bengali",

      certsLabel: "Certifications",

      skillsLabel: "Core Skills",

      frontendTitle: "Frontend Development",
      frontendDesc:
        "Building responsive user interfaces using React, TypeScript, and modern CSS frameworks like Tailwind.",

      backendTitle: "Backend Development",
      backendDesc:
        "Creating REST APIs using Node.js and Java. Working with authentication, databases, and server-side logic.",

      javaTitle: "Java Development",
      javaDesc:
        "Developing applications and APIs using Java, focusing on clean code and OOP principles.",

      dbTitle: "Database & Git",
      dbDesc:
        "Working with MySQL and Git/GitHub for version control and data management.",

      showreelLabel: "Showreel",
      showreelTitle: "A Glimpse Into My Work",
      showreelDesc: "A collection of my projects and learning journey using modern web technologies.",

      projectsLabel: "Projects",

      project1Title: "Calculator App",
      project1Desc: "Responsive Calculator",

      project2Title: "Memo App",
      project2Desc: "Note Taking Application",

      project3Title: "Omikuji Game",
      project3Desc: "Interactive Fortune Game",

      project4Title: "Time Guessing Quiz",
      project4Desc: "Interactive Quiz",

      vlogTitle: "My Journey & Photography",
      vlogSlide1Title: "Exploring Japan's Nature",
      vlogSlide1Desc: "Embracing the breathtaking seasonal landscapes of Japan, from serene snow-covered mountains to vibrant outdoor adventures.",
      vlogSlide2Title: "Night Photography & Aesthetics",
      vlogSlide2Desc: "Capturing the magical essence of Japanese culture, focusing on stunning night views, cherry blossoms, and natural reflections.",
      vlogSlide3Title: "Urban Exploration",
      vlogSlide3Desc: "Observing cityscapes and modern architectures from creative perspectives, finding inspiration in everyday urban life.",
      vlogSlide4Title: "Cinematic Skies & Editing",
      vlogSlide4Desc: "Chasing golden sunsets and dramatic horizons, enhanced through meticulous digital image processing and lighting control.",

      footerHeading: "Let's Build Something Great",
      footerNameLabel: "Name",
      footerEmailLabel: "Email",
      footerMessageLabel: "Message",
      footerSendButton: "Send Message",
      footerSending: "Sending...",
      footerSuccessMsg: "Thank you! Your message has been sent successfully.",
      footerErrorMsg: "Something went wrong. Please try again.",
      footerNetworkError: "Error sending message. Please check your connection.",
      footerConnectTitle: "Other Ways to Connect",
      footerAvailability: "Availability",
      footerAvailable: "Available for Hire",
      footerPrivacy: "Privacy Policy",
      footerTerms: "Terms of Service",
      footerCopyright: "© 2026 Naiem Rahman. All rights reserved."
    }
  },

  ja: {
    translation: {
      brandName: "Rahman",

      navAbout: "経歴",
      navSkills: "スキル",
      navShowreel: "ショーリール",
      navProjects: "プロジェクト",
      navContact: "お問い合わせ",
      ctaHire: "採用依頼",

      heroTitle: "Naiem Naimur",
      heroSub1: "日本を拠点とするジュニアソフトウェアエンジニア。",
      heroSub2: "React、TypeScript、Java、Spring Bootを使用したモダンなWebアプリケーションを開発しています。",

      ctaView: "プロジェクトを見る",
      ctaDownload: "履歴書をダウンロード",

      aboutLabel: "自己紹介",
      aboutBio:
        "ナイエム ナイムールです。富山県高岡市を拠点に活動するジュニアソフトウェアエンジニアです。2026年3月に駿台電子情報ビジネス専門学校 ITエキスパートコースを卒業しました。React、TypeScript、Java、Spring Bootを使用したモダンなWebアプリケーション開発に取り組んでいます。",

      eduLabel: "学歴",
      eduText: "駿台電子情報ビジネス専門学校 ITエキスパートコース (2024-2026)",

      locLabel: "所在地",
      locText: "日本・富山県高岡市",

      langLabel: "言語",
      langText: "日本語（JLPT N2）、英語、ヒンディー語、ベンガル語",

      certsLabel: "資格",

      skillsLabel: "スキル",

      frontendTitle: "フロントエンド開発",
      frontendDesc:
        "React、TypeScript、Tailwind CSSを使用したレスポンシブなUI開発。",

      backendTitle: "バックエンド開発",
      backendDesc:
        "Node.jsとJavaを使用したREST APIの開発、認証、データベース、サーバーサイドロジックの実装。",

      javaTitle: "Java開発",
      javaDesc:
        "オブジェクト指向とクリーンコードを意識したJavaアプリケーション・API開発。",

      dbTitle: "データベース & Git",
      dbDesc:
        "MySQL、Git、GitHubを利用したデータ管理とバージョン管理。",

      showreelLabel: "ショーリール",
      showreelTitle: "作品の一部をご紹介",
      showreelDesc: "モダンなWeb技術を使用したプロジェクトと学習の旅のコレクション。",

      projectsLabel: "プロジェクト",

      project1Title: "電卓アプリ",
      project1Desc: "レスポンシブ電卓",

      project2Title: "メモアプリ",
      project2Desc: "メモ帳アプリケーション",

      project3Title: "おみくじゲーム",
      project3Desc: "インタラクティブな運勢ゲーム",

      project4Title: "時間当てクイズ",
      project4Desc: "インタラクティブクイズ",

      vlogTitle: "ジャーニー ＆ フォトグラフィー",
      vlogSlide1Title: "日本の自然探訪",
      vlogSlide1Desc: "一面の銀世界から鮮やかな風景まで、日本の息をのむような四季折々の美しさに触れる旅。",
      vlogSlide2Title: "夜間撮影と美学",
      vlogSlide2Desc: "美しい夜桜や水面の反射など、日本の文化と自然が織りなす幻想的な瞬間を切り取る夜間撮影。",
      vlogSlide3Title: "都市探訪",
      vlogSlide3Desc: "都会の街並みや近代建築をクリエイティブな視点から観察し、日常の都市生活の中にインスピレーションを見出す。",
      vlogSlide4Title: "シネマティックスカイ ＆ 編集",
      vlogSlide4Desc: "黄金色に染まる夕暮れやドラマチックな空の表情を追い求め、デジタル画像処理とライティング調整で洗練された作品に仕上げる。",

      footerHeading: "一緒に素晴らしいものを作りましょう",
      footerNameLabel: "お名前",
      footerEmailLabel: "メールアドレス",
      footerMessageLabel: "メッセージ",
      footerSendButton: "送信",
      footerSending: "送信中...",
      footerSuccessMsg: "ありがとうございます！メッセージが正常に送信されました。",
      footerErrorMsg: "エラーが発生しました。もう一度お試しください。",
      footerNetworkError: "メッセージの送信中にエラーが発生しました。接続を確認してください。",
      footerConnectTitle: "その他の連絡方法",
      footerAvailability: "稼働状況",
      footerAvailable: "採用可能",
      footerPrivacy: "プライバシーポリシー",
      footerTerms: "利用規約",
      footerCopyright: "© 2026 ナイエム・ラフマン. All rights reserved."
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