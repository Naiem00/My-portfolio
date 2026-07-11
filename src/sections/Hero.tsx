import { useRef, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AmberCascades from './AmberCascades';
import LiquidGlassButton from '../components/LiquidGlassButton';
import { heroConfig } from '../config';

export default function Hero() {
  const { t } = useTranslation();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [titleWidth, setTitleWidth] = useState<number>(0);

  useEffect(() => {
    const measure = () => {
      if (titleRef.current) setTitleWidth(titleRef.current.offsetWidth);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  if (!heroConfig.title) {
    return null;
  }

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh' }}
    >
      <AmberCascades />
      <div
        className="relative z-10 flex flex-col justify-between pointer-events-none"
        style={{ height: '100%', padding: '28vh 5vw 8vh' }}
      >
        <div>
          <h1
            ref={titleRef}
            className="text-white"
            style={{
              fontFamily: "'GeistMono', monospace",
              fontWeight: 400,
              fontSize: 'clamp(48px, 6vw, 96px)',
              lineHeight: 1.0,
              letterSpacing: '-3px',
              textShadow: '0 4px 24px rgba(0,0,0,0.8)',
              marginBottom: 'clamp(32px, 4vw, 56px)',
              width: 'fit-content',
            }}
          >
            {t('heroTitle')}
          </h1>
          
          <p
            style={{
              fontFamily: "'GeistMono', monospace",
              fontWeight: 200,
              fontSize: 'clamp(15px, 1.5vw, 22px)',
              lineHeight: 1.7,
              letterSpacing: '-0.3px',
              color: '#ffffff',
              margin: '0 0 12px 0',
              width: titleWidth || 'auto',
              maxWidth: '100%',
              textShadow: '0 2px 12px rgba(0,0,0,0.6)',
            }}
          >
            {t('heroSub1')}
          </p>
          
          <p
            style={{
              fontFamily: "'GeistMono', monospace",
              fontWeight: 200,
              fontSize: 'clamp(15px, 1.5vw, 22px)',
              lineHeight: 1.7,
              letterSpacing: '-0.3px',
              color: '#ffffff',
              margin: 0,
              width: titleWidth || 'auto',
              maxWidth: '100%',
              textShadow: '0 2px 12px rgba(0,0,0,0.6)',
            }}
          >
            {t('heroSub2')}
          </p>
        </div>

        {heroConfig.ctaText && (
          <div 
            style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }} 
            className="pointer-events-auto"
          >
            <LiquidGlassButton
              onClick={() => document.querySelector('#alumni')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('ctaView')}
            </LiquidGlassButton>

            <a
              href={heroConfig.resumeUrl}
              download
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '14px 32px',
                background: 'transparent',
                color: '#ffffff',
                textDecoration: 'none',
                fontFamily: "'GeistMono', monospace",
                fontWeight: 200,
                fontSize: '13px',
                letterSpacing: '0.05em',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(12px)',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {t('ctaDownload')}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}