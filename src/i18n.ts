import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // =========================
      // BRAND / NAVIGATION
      // =========================
      brandName: "Rahman",

      navAbout: "About",
      navSkills: "Skills",
      navShowreel: "Showreel",
      navProjects: "Projects",
      navContact: "Contact",

      ctaHire: "Hire Me",

      // =========================
      // HERO
      // =========================
      heroTitle: "Naiem Naimur",

      heroSub1:
        "Junior IT Engineer | AWS & Cloud Infrastructure.",

      heroSub2:
        "Developing practical skills in AWS, cloud infrastructure, Linux, networking, and database technologies.",

      ctaView: "View My Projects",
      ctaDownload: "Download CV",

      // =========================
      // ABOUT
      // =========================
      aboutLabel: "About Me",
      aboutSectionTitle: "About Me",

      aboutBio:
        "I'm Naiem Naimur Rahman, a Junior IT Engineer based in Toyama, Japan, with a focus on AWS and cloud infrastructure. I graduated from Sundai IT Business College in March 2026 with a specialization in IT. I'm developing practical skills in AWS, Linux, networking, databases, and cloud technologies, with an interest in building reliable and scalable infrastructure.",

      eduLabel: "Education",

      eduText:
        "Sundai IT Business College - IT Expert Course (2024-2026)",

      locLabel: "Location",

      locText:
        "Toyama-ken, Takaoka-shi, Japan",

      langLabel: "Languages",

      langText:
        "Japanese (JLPT N2), English, Hindi, Bengali",

      certsLabel: "Certifications",

      // =========================
      // SKILLS
      // =========================
      skillsLabel: "Core Skills",

      frontendTitle: "AWS & Cloud",

      frontendDesc:
        "Working with AWS services including EC2, S3, VPC, IAM, RDS, and other core cloud services while building practical cloud infrastructure knowledge.",

      backendTitle: "Linux & Networking",

      backendDesc:
        "Developing practical Linux administration and networking skills, including IP addressing, subnets, routing, DNS, and troubleshooting.",

      javaTitle: "Cloud Security",

      javaDesc:
        "Learning cloud security fundamentals with IAM, permissions, access control, security groups, and secure infrastructure practices.",

      dbTitle: "Database & Git",

      dbDesc:
        "Working with MySQL, relational database fundamentals, Git, and GitHub for data management and version control.",

      // =========================
      // SHOWREEL
      // =========================
      showreelLabel: "Showreel",

      showreelTitle:
        "A Glimpse Into My Work",

      showreelDesc:
        "A collection of my software projects, cloud learning, and hands-on technical practice.",

      // =========================
      // PROJECTS
      // =========================
      projectsLabel: "Projects",

      project1Title: "Calculator App",
      project1Desc: "Responsive Calculator",

      project2Title: "Memo App",
      project2Desc: "Note Taking Application",

      project3Title: "Omikuji Game",
      project3Desc: "Interactive Fortune Game",

      project4Title: "Time Guessing Quiz",
      project4Desc: "Interactive Quiz",

      // =========================
      // JOURNEY / PHOTOGRAPHY
      // =========================
      vlogTitle: "My Journey & Photography",

      vlogSlide1Title:
        "Exploring Japan's Nature",

      vlogSlide1Desc:
        "Embracing the breathtaking seasonal landscapes of Japan, from serene snow-covered mountains to vibrant outdoor adventures.",

      vlogSlide2Title:
        "Night Photography & Aesthetics",

      vlogSlide2Desc:
        "Capturing the magical essence of Japanese culture, focusing on stunning night views, cherry blossoms, and natural reflections.",

      vlogSlide3Title:
        "Urban Exploration",

      vlogSlide3Desc:
        "Observing cityscapes and modern architectures from creative perspectives, finding inspiration in everyday urban life.",

      vlogSlide4Title:
        "Cinematic Skies & Editing",

      vlogSlide4Desc:
        "Chasing golden sunsets and dramatic horizons, enhanced through meticulous digital image processing and lighting control.",

      // =========================
      // FOOTER
      // =========================
      footerHeading:
        "Let's Build Something Great",

      footerNameLabel: "Name",
      footerEmailLabel: "Email",
      footerMessageLabel: "Message",

      footerSendButton:
        "Send Message",

      footerSending:
        "Sending...",

      footerSuccessMsg:
        "Thank you! Your message has been sent successfully.",

      footerErrorMsg:
        "Something went wrong. Please try again.",

      footerNetworkError:
        "Error sending message. Please check your connection.",

      footerConnectTitle:
        "Other Ways to Connect",

      footerAvailability:
        "Availability",

      footerAvailable:
        "Available for Hire",

      footerPrivacy:
        "Privacy Policy",

      footerTerms:
        "Terms of Service",

      footerCopyright:
        "© 2026 Naiem Rahman. All rights reserved."
    }
  },

  ja: {
    translation: {
      // =========================
      // BRAND / NAVIGATION
      // =========================
      brandName: "ラーマン",

      navAbout: "経歴",
      navSkills: "スキル",
      navShowreel: "ショーリール",
      navProjects: "プロジェクト",
      navContact: "お問い合わせ",

      ctaHire: "採用依頼",

      // =========================
      // HERO
      // =========================
      heroTitle:
        "ナイエム ナイムール",

      heroSub1:
        "AWS・クラウドインフラを志向するジュニアITエンジニア。",

      heroSub2:
        "AWS、Linux、ネットワーク、データベース、クラウド技術の実践的なスキルを学んでいます。",

      ctaView:
        "プロジェクトを見る",

      ctaDownload:
        "履歴書をダウンロード",

      // =========================
      // ABOUT
      // =========================
      aboutLabel:
        "自己紹介",

      aboutSectionTitle:
        "自己紹介",

      aboutBio:
        "富山県高岡市を拠点とするジュニアITエンジニアです。AWSとクラウドインフラを中心に学んでおり、2026年3月に駿台電子情報ビジネス専門学校 ITエキスパートコースを卒業しました。AWS、Linux、ネットワーク、データベースなどの実践的な技術を学びながら、信頼性と拡張性の高いクラウドインフラの構築に関心を持っています。",

      eduLabel:
        "学歴",

      eduText:
        "駿台電子情報ビジネス専門学校 ITエキスパートコース (2024-2026)",

      locLabel:
        "所在地",

      locText:
        "日本・富山県高岡市",

      langLabel:
        "言語",

      langText:
        "日本語（JLPT N2）、英語、ヒンディー語、ベンガル語",

      certsLabel:
        "資格",

      // =========================
      // SKILLS
      // =========================
      skillsLabel:
        "スキル",

      frontendTitle:
        "AWS・クラウド",

      frontendDesc:
        "EC2、S3、VPC、IAM、RDSなどのAWS主要サービスを学び、クラウドインフラの実践的な知識を身につけています。",

      backendTitle:
        "Linux・ネットワーク",

      backendDesc:
        "Linux管理、IPアドレス、サブネット、ルーティング、DNS、トラブルシューティングなどの基礎を学んでいます。",

      javaTitle:
        "クラウドセキュリティ",

      javaDesc:
        "IAM、権限管理、アクセス制御、セキュリティグループなど、クラウドセキュリティの基本を学んでいます。",

      dbTitle:
        "データベース・Git",

      dbDesc:
        "MySQL、リレーショナルデータベース、Git、GitHubを使用したデータ管理とバージョン管理。",

      // =========================
      // SHOWREEL
      // =========================
      showreelLabel:
        "ショーリール",

      showreelTitle:
        "作品の一部をご紹介",

      showreelDesc:
        "ソフトウェア開発プロジェクト、クラウド学習、実践的な技術トレーニングの一部をご紹介します。",

      // =========================
      // PROJECTS
      // =========================
      projectsLabel:
        "プロジェクト",

      project1Title:
        "電卓アプリ",

      project1Desc:
        "レスポンシブ電卓",

      project2Title:
        "メモアプリ",

      project2Desc:
        "メモ帳アプリケーション",

      project3Title:
        "おみくじゲーム",

      project3Desc:
        "インタラクティブな運勢ゲーム",

      project4Title:
        "時間当てクイズ",

      project4Desc:
        "インタラクティブクイズ",

      // =========================
      // JOURNEY / PHOTOGRAPHY
      // =========================
      vlogTitle:
        "ジャーニー ＆ フォトグラフィー",

      vlogSlide1Title:
        "日本の自然探訪",

      vlogSlide1Desc:
        "一面の銀世界から鮮やかな風景まで、日本の息をのむような四季折々の美しさに触れる旅。",

      vlogSlide2Title:
        "夜間撮影と美学",

      vlogSlide2Desc:
        "美しい夜桜や水面の反射など、日本の文化と自然が織りなす幻想的な瞬間を切り取る夜間撮影。",

      vlogSlide3Title:
        "都市探訪",

      vlogSlide3Desc:
        "都会の街並みや近代建築をクリエイティブな視点から観察し、日常の都市生活の中にインスピレーションを見出す。",

      vlogSlide4Title:
        "シネマティックスカイ ＆ 編集",

      vlogSlide4Desc:
        "黄金色に染まる夕暮れやドラマチックな空の表情を追い求め、デジタル画像処理とライティング調整で洗練された作品に仕上げる。",

      // =========================
      // FOOTER
      // =========================
      footerHeading:
        "一緒に素晴らしいものを作りましょう",

      footerNameLabel:
        "お名前",

      footerEmailLabel:
        "メールアドレス",

      footerMessageLabel:
        "メッセージ",

      footerSendButton:
        "送信",

      footerSending:
        "送信中...",

      footerSuccessMsg:
        "ありがとうございます！メッセージが正常に送信されました。",

      footerErrorMsg:
        "エラーが発生しました。もう一度お試しください。",

      footerNetworkError:
        "メッセージの送信中にエラーが発生しました。接続を確認してください。",

      footerConnectTitle:
        "その他の連絡方法",

      footerAvailability:
        "稼働状況",

      footerAvailable:
        "採用可能",

      footerPrivacy:
        "プライバシーポリシー",

      footerTerms:
        "利用規約",

      footerCopyright:
        "© 2026 ナイエム・ラーマン. All rights reserved."
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