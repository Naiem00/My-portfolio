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
      heroSub1: "Junior IT Engineer | AWS & Cloud Infrastructure.",
      heroSub2: "Developing practical skills in AWS, cloud infrastructure, Linux, networking, and database technologies.",

      ctaView: "View My Projects",
      ctaDownload: "Download CV",

      aboutLabel: "About Me",
      aboutSectionTitle: "About Me",
      aboutBio: "I'm Naiem Naimur Rahman, a Junior IT Engineer based in Toyama, Japan, with a growing focus on AWS and cloud infrastructure. I graduated from Sundai IT Business College in March 2026 and continue developing practical skills in AWS, cloud infrastructure, Linux, networking, and database technologies while applying my software development background to real-world projects.",

      eduLabel: "Education",
      eduText: "Sundai IT Business College - IT Expert Course (2024-2026)",

      locLabel: "Location",
      locText: "Toyama-ken, Takaoka-shi, Japan",

      langLabel: "Languages",
      langText: "Japanese (JLPT N2), English, Hindi, Bengali",

      certsLabel: "Certifications",

      skillsLabel: "Core Skills",

      frontendTitle: "AWS & Cloud",
      frontendDesc: "Working with AWS services including EC2, S3, VPC, IAM, RDS, and other core cloud services while building practical cloud infrastructure knowledge.",

      backendTitle: "Linux & Networking",
      backendDesc: "Developing practical Linux administration and networking skills, including IP addressing, subnets, routing, DNS, and troubleshooting.",

      javaTitle: "Cloud Security",
      javaDesc: "Learning cloud security fundamentals with IAM, permissions, access control, security groups, and secure infrastructure practices.",

      dbTitle: "Database & Git",
      dbDesc: "Working with MySQL, relational database fundamentals, Git, and GitHub for data management and version control.",

      skillDetailLabel: "Skill Detail",
      skillBack: "Back to home",
      skillPrevious: "Previous",
      skillNext: "Next",
      skillNotFound: "Skill not found.",

      awsCloudTitle: "AWS & Cloud",
      awsCloudSubtitle: "Building practical cloud infrastructure knowledge.",
      awsCloudP1: "I am developing practical knowledge of AWS and cloud infrastructure through hands-on learning and certification study.",
      awsCloudP2: "I work with core AWS services such as EC2, S3, VPC, IAM, and RDS to understand how cloud resources are created, connected, and managed.",
      awsCloudP3: "I am learning how networking, permissions, storage, compute, and databases work together within AWS environments.",
      awsCloudP4: "My goal is to continue improving my practical cloud skills through labs, projects, and AWS certification study.",

      linuxTitle: "Linux & Networking",
      linuxSubtitle: "Developing Linux and networking fundamentals.",
      linuxP1: "I am developing practical Linux skills including command-line navigation, file and directory management, permissions, and basic system administration.",
      linuxP2: "I am also studying networking fundamentals such as IP addressing, subnetting, routing, DNS, ports, and common network protocols.",
      linuxP3: "I use these concepts to better understand how servers, networks, and cloud infrastructure communicate with each other.",
      linuxP4: "Linux and networking are an important part of my cloud infrastructure learning and AWS study.",

      securityTitle: "Cloud Security",
      securitySubtitle: "Learning secure cloud infrastructure practices.",
      securityP1: "I am learning cloud security fundamentals with a focus on AWS identity, permissions, and access management.",
      securityP2: "I practice concepts such as IAM users, groups, roles, policies, security groups, and the principle of least privilege.",
      securityP3: "I am also learning how access control and network security help protect AWS resources and cloud environments.",
      securityP4: "I continue developing my security knowledge as part of my AWS and cloud infrastructure studies.",

      databaseTitle: "Database & Git",
      databaseSubtitle: "Data management and version control fundamentals.",
      databaseP1: "I use MySQL to work with structured data and practice relational database concepts, SQL queries, joins, and basic database management.",
      databaseP2: "I use Git and GitHub for version control, project history, code organization, and documenting my technical learning.",
      databaseP3: "I practice branches, commits, repository management, and clear project documentation so my work remains easy to review and continue.",
      databaseP4: "These tools support both my software development background and my growing cloud and infrastructure project work.",

      showreelLabel: "Showreel",
      showreelTitle: "A Glimpse Into My Work",
      showreelDesc: "A collection of my software projects, cloud learning, and hands-on technical practice.",

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
      brandName: "ラーマン",

      navAbout: "経歴",
      navSkills: "スキル",
      navShowreel: "ショーリール",
      navProjects: "プロジェクト",
      navContact: "お問い合わせ",
      ctaHire: "採用依頼",

      heroTitle: "ナイエム ナイムール",
      heroSub1: "AWS・クラウドインフラを志向するジュニアITエンジニア。",
      heroSub2: "AWS、クラウドインフラ、Linux、ネットワーク、データベースの技術習得に取り組んでいます。",

      ctaView: "プロジェクトを見る",
      ctaDownload: "履歴書をダウンロード",

      aboutLabel: "自己紹介",
      aboutSectionTitle: "自己紹介",
      aboutBio: "富山県高岡市を拠点とするジュニアITエンジニアです。AWSとクラウドインフラへの関心を深めながら、実践的なスキルを身につけています。2026年3月に駿台電子情報ビジネス専門学校を卒業し、AWS、クラウドインフラ、Linux、ネットワーク、データベースの学習を続けながら、ソフトウェア開発の経験を実際のプロジェクトに活かしています。",

      eduLabel: "学歴",
      eduText: "駿台電子情報ビジネス専門学校 ITエキスパートコース (2024-2026)",

      locLabel: "所在地",
      locText: "日本・富山県高岡市",

      langLabel: "言語",
      langText: "日本語（JLPT N2）、英語、ヒンディー語、ベンガル語",

      certsLabel: "資格",

      skillsLabel: "スキル",

      frontendTitle: "AWS・クラウド",
      frontendDesc: "EC2、S3、VPC、IAM、RDSなどのAWSサービスを学びながら、クラウドインフラに関する実践的な知識を身につけています。",

      backendTitle: "Linux・ネットワーク",
      backendDesc: "Linuxの基本操作や管理に加え、IPアドレス、サブネット、ルーティング、DNS、トラブルシューティングなどのネットワーク技術を学んでいます。",

      javaTitle: "クラウドセキュリティ",
      javaDesc: "IAM、権限管理、アクセス制御、セキュリティグループなど、AWSにおけるクラウドセキュリティの基礎を学んでいます。",

      dbTitle: "データベース・Git",
      dbDesc: "MySQL、リレーショナルデータベースの基礎、Git、GitHubを使用したデータ管理とバージョン管理に取り組んでいます。",

      skillDetailLabel: "スキル詳細",
      skillBack: "ホームに戻る",
      skillPrevious: "前へ",
      skillNext: "次へ",
      skillNotFound: "スキルが見つかりません。",

      awsCloudTitle: "AWS・クラウド",
      awsCloudSubtitle: "クラウドインフラの実践的な知識を身につけています。",
      awsCloudP1: "ハンズオン学習や資格学習を通じて、AWSとクラウドインフラに関する実践的な知識を身につけています。",
      awsCloudP2: "EC2、S3、VPC、IAM、RDSなどの主要なAWSサービスを学び、クラウドリソースがどのように作成・接続・管理されるかを理解しています。",
      awsCloudP3: "AWS環境において、ネットワーク、権限、ストレージ、コンピューティング、データベースがどのように連携するかを学んでいます。",
      awsCloudP4: "ハンズオンラボ、プロジェクト、AWS資格学習を通じて、クラウドに関する実践的なスキルを継続的に向上させています。",

      linuxTitle: "Linux・ネットワーク",
      linuxSubtitle: "Linuxとネットワークの基礎を学んでいます。",
      linuxP1: "コマンドライン操作、ファイル・ディレクトリ管理、権限設定、基本的なシステム管理など、Linuxの実践的なスキルを学んでいます。",
      linuxP2: "IPアドレス、サブネット、ルーティング、DNS、ポート、一般的なネットワークプロトコルなど、ネットワークの基礎についても学習しています。",
      linuxP3: "これらの知識を活用し、サーバー、ネットワーク、クラウドインフラがどのように通信するかについて理解を深めています。",
      linuxP4: "Linuxとネットワークの知識は、AWSおよびクラウドインフラを学ぶ上で重要な基礎として継続的に学習しています。",

      securityTitle: "クラウドセキュリティ",
      securitySubtitle: "安全なクラウド環境の基礎を学んでいます。",
      securityP1: "AWSのアイデンティティ、権限、アクセス管理を中心に、クラウドセキュリティの基本を学んでいます。",
      securityP2: "IAMユーザー、グループ、ロール、ポリシー、セキュリティグループ、最小権限の原則などの概念を学習しています。",
      securityP3: "アクセス制御やネットワークセキュリティによって、AWSリソースやクラウド環境をどのように保護するかについて理解を深めています。",
      securityP4: "AWSとクラウドインフラの学習の一環として、セキュリティに関する知識を継続的に身につけています。",

      databaseTitle: "データベース・Git",
      databaseSubtitle: "データ管理とバージョン管理の基礎。",
      databaseP1: "MySQLを使用して構造化データを扱い、リレーショナルデータベース、SQLクエリ、JOIN、基本的なデータベース管理について学んでいます。",
      databaseP2: "GitとGitHubを使用して、バージョン管理、プロジェクト履歴、コード管理、技術学習の記録を行っています。",
      databaseP3: "ブランチ、コミット、リポジトリ管理、プロジェクトのドキュメント作成を実践し、作業内容を整理して管理しています。",
      databaseP4: "これらのツールを、ソフトウェア開発の経験とクラウド・インフラ関連の学習やプロジェクトの両方に活用しています。",

      showreelLabel: "ショーリール",
      showreelTitle: "作品の一部をご紹介",
      showreelDesc: "ソフトウェア開発プロジェクト、クラウド学習、実践的な技術トレーニングの一部をご紹介します。",

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
      footerCopyright: "© 2026 ナイエム・ラーマン. All rights reserved."
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