import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';

const PROJECTS_DATA = [
  {
    titleKey: 'project1Title',
    descKey: 'project1Desc',
    year: '2026',
    image: 'images/research-1.jpg',
    github: 'https://github.com/Naiem00/mobile-app/tree/main/03_4calculator',
    live: 'https://calc-pro-psi.vercel.app',
  },
  {
    titleKey: 'project2Title',
    descKey: 'project2Desc',
    year: '2026',
    image: 'images/research-2.jpg',
    github: 'https://github.com/Naiem00/mobile-app/tree/main/04_7memo',
    live: 'https://memo1-zeta.vercel.app',
  },
  {
    titleKey: 'project3Title',
    descKey: 'project3Desc',
    year: '2026',
    image: 'images/research-3.jpg',
    github: 'https://github.com/Naiem00/mobile-app/tree/main/10c_omikuji',
    live: 'https://omikuzigame.vercel.app',
  },
  {
    titleKey: 'project4Title',
    descKey: 'project4Desc',
    year: '2026',
    image: 'images/research-4.jpg',
    github: 'https://github.com/Naiem00/mobile-app/tree/main/98_Time%20guessing%20quiz',
    live: 'https://timeguessingquiz.vercel.app',
  },
];

export default function AlumniArchives() {
  const gridRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];

    items.forEach((item) => {
      gsap.set(item, { opacity: 0, y: 30 });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = items.indexOf(entry.target as HTMLDivElement);
            gsap.to(entry.target, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: (idx % 4) * 0.1,
              ease: 'power2.out',
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="alumni"
      style={{
        padding: '150px 5vw',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        <div
          className="mb-6"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            fontWeight: 300,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#dadada',
            opacity: 0.6,
          }}
        >
          {t('projectsLabel')}
        </div>
        <div
          className="mb-16"
          style={{
            width: '100%',
            height: 1,
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        />

        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: 0 }}
        >
          {PROJECTS_DATA.map((project, i) => (
            <div
              key={`${project.titleKey}-${i}`}
              ref={(el) => { itemRefs.current[i] = el; }}
              className="group cursor-pointer"
              style={{
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                borderRight: (i + 1) % 4 !== 0 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
                padding: '24px 20px',
              }}
            >
              <div
                className="relative overflow-hidden mb-4"
                style={{ aspectRatio: '1/1' }}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={t(project.titleKey)}
                    className="w-full h-full object-cover transition-all duration-700"
                    style={{
                      opacity: 0.5,
                      filter: 'grayscale(100%)',
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '1';
                      (e.target as HTMLImageElement).style.filter = 'grayscale(0%)';
                      (e.target as HTMLImageElement).style.transform = 'scale(1.04)';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLImageElement).style.opacity = '0.5';
                      (e.target as HTMLImageElement).style.filter = 'grayscale(100%)';
                      (e.target as HTMLImageElement).style.transform = 'scale(1)';
                    }}
                    loading="lazy"
                  />
                )}
              </div>
              {/* Title + GitHub Icon */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '6px',
                }}
              >
                <h4
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontWeight: 400,
                    fontSize: 18,
                    color: '#ffffff',
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {t(project.titleKey)}
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  {/* GitHub Link */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '18px',
                        height: '18px',
                        color: '#666666',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = '#666666';
                      }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                  {/* Live Demo Link */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '18px',
                        height: '18px',
                        color: '#666666',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease',
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = '#666666';
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
              <div
                className="flex items-center justify-between"
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 200,
                    fontSize: 12,
                    color: '#dadada',
                    opacity: 0.6,
                  }}
                >
                  {t(project.descKey)}
                </span>
                <span
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    fontWeight: 400,
                    fontSize: 11,
                    color: '#dadada',
                    opacity: 0.4,
                  }}
                >
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}