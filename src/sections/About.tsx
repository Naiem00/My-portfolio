import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { aboutConfig, vlogConfig } from '../config';

export default function About() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % vlogConfig.slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="about"
      style={{
        position: 'relative',
        padding: '120px 24px',
        background: '#0a0a0a',
        color: '#ffffff',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: "'EB Garamond', serif",
            fontWeight: 400,
            fontSize: 'clamp(36px, 5vw, 56px)',
            lineHeight: 1.1,
            marginBottom: '32px',
            color: '#ffffff',
          }}
        >
          {t('aboutSectionTitle', 'About Me')}
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: 1.7,
            color: '#ffffff',
            maxWidth: '700px',
            marginBottom: '80px',
          }}
        >
          {t('aboutBio')}
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '60px',
            marginBottom: '60px',
          }}
        >
          <div>
            <h4 style={{ fontFamily: "'GeistMono', monospace", fontWeight: 400, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaaaaa', marginBottom: '12px' }}>
              {t('eduLabel')}
            </h4>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '15px', lineHeight: 1.6, color: '#ffffff' }}>
              {t('eduText')}
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: "'GeistMono', monospace", fontWeight: 400, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaaaaa', marginBottom: '12px' }}>
              {t('locLabel')}
            </h4>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '15px', lineHeight: 1.6, color: '#ffffff' }}>
              {t('locText')}
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: "'GeistMono', monospace", fontWeight: 400, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaaaaa', marginBottom: '12px' }}>
              {t('langLabel')}
            </h4>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '15px', lineHeight: 1.6, color: '#ffffff' }}>
              {t('langText')}
            </p>
          </div>
        </div>

        <div style={{ marginBottom: '80px' }}>
          <h4
            style={{
              fontFamily: "'GeistMono', monospace",
              fontWeight: 400,
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#aaaaaa',
              marginBottom: '20px',
            }}
          >
            {t('certsLabel')}
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {aboutConfig.certifications.map((cert: string, index: number) => (
              <span
                key={index}
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontWeight: 400,
                  fontSize: '12px',
                  letterSpacing: '0.05em',
                  color: '#ffffff',
                  padding: '10px 20px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        <div style={{ marginTop: '100px' }}>
          <h2
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 400,
              fontSize: 'clamp(28px, 4vw, 42px)',
              lineHeight: 1.2,
              marginBottom: '32px',
              color: '#ffffff',
            }}
          >
            {t(vlogConfig.sectionLabelKey)}
          </h2>

          <div 
            style={{ 
              position: 'relative', 
              width: '100%', 
              height: 'clamp(400px, 60vh, 650px)', 
              backgroundColor: '#121212',
              overflow: 'hidden'
            }}
          >
            {vlogConfig.slides.map((slide, index) => (
              <div
                key={index}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  transition: 'opacity 1.5s ease-in-out',
                  opacity: index === currentSlide ? 1 : 0,
                  zIndex: index === currentSlide ? 1 : 0,
                  pointerEvents: index === currentSlide ? 'auto' : 'none',
                }}
              >
                <img
                  src={slide.image}
                  alt={t(slide.titleKey)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    opacity: 0.9,
                  }}
                />
                
                <div 
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.1) 40%, transparent 100%)',
                    zIndex: 1
                  }} 
                />
                
                <div 
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 'clamp(24px, 5vw, 48px)',
                    zIndex: 2,
                  }}
                >
                  <h3 
                    style={{ 
                      fontFamily: "'EB Garamond', serif", 
                      fontSize: 'clamp(24px, 3vw, 36px)', 
                      fontWeight: 400, 
                      marginBottom: '12px',
                      letterSpacing: '0.02em',
                      color: '#ffffff',
                      textShadow: '0 2px 10px rgba(0,0,0,0.9)'
                    }}
                  >
                    {t(slide.titleKey)}
                  </h3>
                  <p 
                    style={{ 
                      fontFamily: "'Inter', sans-serif", 
                      fontSize: 'clamp(14px, 1.8vw, 16px)', 
                      fontWeight: 300, 
                      color: '#ffffff', 
                      maxWidth: '650px',
                      lineHeight: 1.6,
                      textShadow: '0 2px 8px rgba(0,0,0,0.9)'
                    }}
                  >
                    {t(slide.descKey)}
                  </p>
                </div>
              </div>
            ))}

            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + vlogConfig.slides.length) % vlogConfig.slides.length)}
              style={{
                position: 'absolute',
                top: '50%',
                left: '24px',
                transform: 'translateY(-50%)',
                zIndex: 10,
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#000000'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.6)'; e.currentTarget.style.color = '#ffffff'; }}
            >
              &larr;
            </button>
            
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % vlogConfig.slides.length)}
              style={{
                position: 'absolute',
                top: '50%',
                right: '24px',
                transform: 'translateY(-50%)',
                zIndex: 10,
                background: 'rgba(0,0,0,0.6)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: '#fff',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#ffffff'; e.currentTarget.style.color = '#000000'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.6)'; e.currentTarget.style.color = '#ffffff'; }}
            >
              &rarr;
            </button>

            <div style={{ position: 'absolute', bottom: '24px', right: '24px', zIndex: 10, display: 'flex', gap: '8px' }}>
              {vlogConfig.slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    backgroundColor: index === currentSlide ? '#ffffff' : 'rgba(255,255,255,0.4)',
                    transform: index === currentSlide ? 'scale(1.2)' : 'scale(1)',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}