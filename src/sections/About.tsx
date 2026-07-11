import { useTranslation } from 'react-i18next';
import { aboutConfig } from '../config';

export default function About() {
  const { t } = useTranslation();

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
        {/* Section Label */}
        <span
          style={{
            display: 'block',
            fontFamily: "'GeistMono', monospace",
            fontWeight: 300,
            fontSize: '12px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#888888',
            marginBottom: '64px',
          }}
        >
          {t('aboutLabel')}
        </span>

        {/* Name */}
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
          Naiem Naimur Rahman
        </h2>

        {/* Bio */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 200,
            fontSize: '18px',
            lineHeight: 1.7,
            color: '#aaaaaa',
            maxWidth: '700px',
            marginBottom: '80px',
          }}
        >
          {t('aboutBio')}
        </p>

        {/* Info Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '60px',
            marginBottom: '60px',
          }}
        >
          <div>
            <h4 style={{ fontFamily: "'GeistMono', monospace", fontWeight: 300, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#666666', marginBottom: '12px' }}>
              {t('eduLabel')}
            </h4>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 200, fontSize: '15px', lineHeight: 1.6, color: '#cccccc' }}>
              {t('eduText')}
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: "'GeistMono', monospace", fontWeight: 300, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#666666', marginBottom: '12px' }}>
              {t('locLabel')}
            </h4>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 200, fontSize: '15px', lineHeight: 1.6, color: '#cccccc' }}>
              {t('locText')}
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: "'GeistMono', monospace", fontWeight: 300, fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#666666', marginBottom: '12px' }}>
              {t('langLabel')}
            </h4>
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 200, fontSize: '15px', lineHeight: 1.6, color: '#cccccc' }}>
              {t('langText')}
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h4
            style={{
              fontFamily: "'GeistMono', monospace",
              fontWeight: 300,
              fontSize: '11px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#666666',
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
                  fontWeight: 300,
                  fontSize: '12px',
                  letterSpacing: '0.05em',
                  color: '#888888',
                  padding: '10px 20px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}