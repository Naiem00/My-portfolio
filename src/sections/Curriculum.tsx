import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';

const CAPABILITIES = [
  { slug: 'frontend-development', image: 'images/capability-1.jpg' },
  { slug: 'backend-development', image: 'images/capability-2.jpg' },
  { slug: 'java-development', image: 'images/capability-3.jpg' },
  { slug: 'database-git', image: 'images/capability-4.jpg' },
];

export default function Curriculum() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    const observers: IntersectionObserver[] = [];

    items.forEach((item, index) => {
      gsap.set(item, { opacity: 0, y: 60 });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 1.0,
                delay: index * 0.15,
                ease: 'power3.out',
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  const titles = [
    t('frontendTitle'),
    t('backendTitle'),
    t('javaTitle'),
    t('dbTitle'),
  ];

  const descriptions = [
    t('frontendDesc'),
    t('backendDesc'),
    t('javaDesc'),
    t('dbDesc'),
  ];

  return (
    <section
      id="curriculum"
      ref={sectionRef}
      className="relative"
      style={{
        padding: '150px 5vw',
        minHeight: '100vh',
        background: 'transparent',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div
          className="mb-6"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            fontWeight: 400,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#aaaaaa',
          }}
        >
          {t('skillsLabel')}
        </div>
        <div
          className="mb-20"
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />

        <div className="flex flex-col" style={{ gap: 100 }}>
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap.slug}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="flex flex-col md:flex-row md:items-start"
              style={{ gap: '40px', cursor: 'pointer' }}
              onClick={() => navigate(`/capability/${cap.slug}`)}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div style={{ flex: '0 0 70%' }}>
                <h3
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontWeight: 400,
                    fontSize: 'clamp(40px, 5.4vw, 86.4px)',
                    lineHeight: 1.05,
                    letterSpacing: '-1.44px',
                    color: hoveredIndex === i ? 'rgba(200, 170, 130, 1)' : '#ffffff',
                    margin: 0,
                    textWrap: 'balance',
                    transition: 'color 0.4s ease',
                  }}
                >
                  {titles[i]}
                </h3>
              </div>
              <div
                className="flex items-start"
                style={{
                  flex: '1 1 30%',
                  paddingTop: 'clamp(4px, 1vw, 16px)',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: hoveredIndex === i ? 200 : 'auto',
                  transition: 'min-height 0.4s ease',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: '#ffffff',
                    margin: 0,
                    textWrap: 'pretty',
                    opacity: hoveredIndex === i ? 0 : 1,
                    transition: 'opacity 0.35s ease',
                  }}
                >
                  {descriptions[i]}
                </p>

                {cap.image && (
                  <img
                    src={cap.image}
                    alt={titles[i]}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: hoveredIndex === i ? 1 : 0,
                      transform: hoveredIndex === i ? 'scale(1)' : 'scale(1.05)',
                      transition: 'opacity 0.45s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                      filter: 'grayscale(30%)',
                    }}
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Section */}
        <div style={{ marginTop: 120 }}>
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 400,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#aaaaaa',
              marginBottom: 24,
            }}
          >
            Tech Stack
          </div>
          <div
            style={{
              width: '100%',
              height: 1,
              background: 'rgba(255, 255, 255, 0.1)',
              marginBottom: 40,
            }}
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
              gap: 16,
            }}
          >
            {/* React */}
            <div
              className="tech-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                padding: '24px 16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 12,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(97, 218, 251, 0.4)';
                e.currentTarget.style.background = 'rgba(97, 218, 251, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="2" fill="#61DAFB" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(0 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)" />
              </svg>
              <span
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 11,
                  color: '#ffffff',
                  letterSpacing: '0.05em',
                }}
              >
                React
              </span>
            </div>

            {/* TypeScript */}
            <div
              className="tech-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                padding: '24px 16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 12,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(49, 120, 198, 0.4)';
                e.currentTarget.style.background = 'rgba(49, 120, 198, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="3" fill="#3178C6" />
                <text x="12" y="17" textAnchor="middle" fill="white" fontFamily="Arial" fontWeight="bold" fontSize="13">
                  TS
                </text>
              </svg>
              <span
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 11,
                  color: '#ffffff',
                  letterSpacing: '0.05em',
                }}
              >
                TypeScript
              </span>
            </div>

            {/* Java */}
            <div
              className="tech-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                padding: '24px 16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 12,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(227, 79, 38, 0.4)';
                e.currentTarget.style.background = 'rgba(227, 79, 38, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24">
                <path d="M8.85 18.17s-.94.56.66.75c1.95.23 2.95.2 5.1-.22 0 0 .57.35 1.36.66-4.82 2.07-10.91-.12-7.12-1.19zm-.56-2.7s-1.05.78.55.95c2.07.21 3.7.23 6.52-.31 0 0 .4.4 1.02.62-5.79 1.7-12.25.13-8.09-1.26z" fill="#E34F26" />
                <path d="M13.86 10.47c1.17 1.35-.31 2.56-.31 2.56s2.97-1.53 1.6-3.45c-1.24-1.74-2.2-2.6 2.97-5.58 0 0-8.12 2.02-5.26 6.47z" fill="#E34F26" />
                <path d="M18.3 20.58s.69.57-.76.75c-2.76.33-11.45.43-13.86.01-.87-.15.76-.71 1.27-.8.53-.09.84-.08 1.3-.1-.92-.65-5.96 1.28-2.56 1.83 9.26 1.5 16.9-.68 14.61-1.69zm-10.2-7.45s-4.2 1 1.49 1.36c4.42.28 7.47-.3 10.36-.97.45.43 1.18.78 1.18.78-3.6 1.54-11.88 1.65-14.53.45-1.12-.51.88-1.62 1.5-1.62z" fill="#E34F26" />
              </svg>
              <span
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 11,
                  color: '#ffffff',
                  letterSpacing: '0.05em',
                }}
              >
                Java
              </span>
            </div>

            {/* Spring Boot */}
            <div
              className="tech-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                padding: '24px 16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 12,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(109, 179, 63, 0.4)';
                e.currentTarget.style.background = 'rgba(109, 179, 63, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24">
                <path d="M21.85 1.55c-.28-.57-.88-.88-1.5-.78-.62.1-1.1.58-1.18 1.2-.08.63.28 1.23.87 1.45.6.22 1.27-.02 1.58-.55.15-.26.23-.55.23-.85 0-.16-.02-.32-.07-.47h.07zm-3.2 2.35c-.35-.7-1.08-1.08-1.83-.92-.75.16-1.32.82-1.35 1.6-.03.77.48 1.47 1.22 1.68.74.21 1.53-.1 1.9-.75.2-.34.3-.73.3-1.12 0-.2-.03-.4-.08-.59h.07l.77-.9z" fill="#6DB33F" />
                <path d="M17.5 5.5c-.42-.85-1.3-1.3-2.2-1.1-.9.2-1.58 1-1.6 1.95-.03.94.58 1.8 1.47 2.05.89.25 1.85-.12 2.3-.9.24-.4.36-.87.36-1.34 0-.24-.04-.48-.1-.71l.77-.95z" fill="#6DB33F" />
                <path d="M14.8 8.8c-.5-1-1.55-1.55-2.6-1.35-1.05.2-1.85 1.1-1.9 2.2-.05 1.1.65 2.1 1.7 2.45 1.05.35 2.2-.1 2.75-1.1.28-.5.42-1.05.42-1.62 0-.3-.05-.6-.12-.88l.75-1z" fill="#6DB33F" />
                <path d="M11.5 12.5c-.6-1.2-1.85-1.85-3.1-1.6-1.25.25-2.2 1.35-2.25 2.7-.05 1.35.8 2.55 2.05 2.95 1.25.4 2.6-.15 3.25-1.35.33-.6.5-1.28.5-1.97 0-.36-.06-.72-.15-1.06l.7-1.67z" fill="#6DB33F" />
                <path d="M7.5 17.5c-.75-1.5-2.3-2.3-3.85-2-1.55.3-2.75 1.7-2.8 3.4-.05 1.7 1 3.2 2.55 3.7 1.55.5 3.25-.2 4.05-1.7.4-.75.6-1.6.6-2.45 0-.45-.08-.9-.2-1.33l.65-1.62z" fill="#6DB33F" />
              </svg>
              <span
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 11,
                  color: '#ffffff',
                  letterSpacing: '0.05em',
                }}
              >
                Spring Boot
              </span>
            </div>

            {/* MySQL */}
            <div
              className="tech-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                padding: '24px 16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 12,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(0, 117, 143, 0.4)';
                e.currentTarget.style.background = 'rgba(0, 117, 143, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z" fill="#00758F" />
              </svg>
              <span
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 11,
                  color: '#ffffff',
                  letterSpacing: '0.05em',
                }}
              >
                MySQL
              </span>
            </div>

            {/* Git */}
            <div
              className="tech-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                padding: '24px 16px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 12,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(240, 80, 50, 0.4)';
                e.currentTarget.style.background = 'rgba(240, 80, 50, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <svg width="40" height="40" viewBox="0 0 24 24">
                <path d="M23.56 10.93L13.07.44a1.49 1.49 0 0 0-2.12 0l-2.12 2.12 2.68 2.68a1.76 1.76 0 0 1 2.23 2.24l2.59 2.59a1.76 1.76 0 0 1 1.81-.3 1.77 1.77 0 0 1 1.05 1.6 1.76 1.76 0 0 1-3.01 1.24l-2.43 2.43a1.76 1.76 0 1 1-2.49-2.49l1.82-1.82a4.74 4.74 0 0 0-1.24-2.42L8.97 5.5a4.74 4.74 0 0 0-6.68 0l-2.12 2.12a1.49 1.49 0 0 0 0 2.12l10.49 10.49a1.49 1.49 0 0 0 2.12 0l8.78-8.78a1.49 1.49 0 0 0 0-2.12z" fill="#F05032" />
              </svg>
              <span
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 11,
                  color: '#ffffff',
                  letterSpacing: '0.05em',
                }}
              >
                Git
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}