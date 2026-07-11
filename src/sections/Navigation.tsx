import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { siteConfig, navigationConfig } from '../config';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  if (!siteConfig.brandName && navigationConfig.links.length === 0) {
    return null;
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-colors duration-500"
      style={{
        height: 80,
        padding: '0 5vw',
        backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
      }}
    >
      <a
        href="#hero"
        onClick={(e) => handleClick(e, '#hero')}
        className="text-white no-underline"
        style={{
          fontFamily: "'GeistMono', monospace",
          fontSize: 18,
          fontWeight: 400,
          letterSpacing: '-0.5px',
        }}
      >
        {i18n.language === 'ja' ? t('heroTitle') : siteConfig.brandName}
      </a>

      <div className="hidden md:flex items-center" style={{ gap: 40 }}>
        {navigationConfig.links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="nav-link"
          >
            {/* ডাইনামিক কি: nav + About, nav + Skills ইত্যাদি */}
            {t(`nav${link.label}`)}
          </a>
        ))}
      </div>

      <div className="flex items-center" style={{ gap: 24 }}>
        <div className="flex gap-2 font-mono text-xs select-none">
          <button
            onClick={() => changeLanguage('en')}
            className={`transition-colors duration-300 hover:text-white ${
              i18n.language === 'en' ? 'text-white underline underline-offset-4 font-bold' : 'text-zinc-500'
            }`}
          >
            EN
          </button>
          <span className="text-zinc-700">|</span>
          <button
            onClick={() => changeLanguage('ja')}
            className={`transition-colors duration-300 hover:text-white ${
              i18n.language === 'ja' ? 'text-white underline underline-offset-4 font-bold' : 'text-zinc-500'
            }`}
          >
            JA
          </button>
        </div>

        {navigationConfig.ctaText && (
          <a
            href="#footer"
            onClick={(e) => handleClick(e, '#footer')}
            className="nav-link hidden md:inline-block"
          >
            {t('ctaHire')}
          </a>
        )}
      </div>
    </nav>
  );
}