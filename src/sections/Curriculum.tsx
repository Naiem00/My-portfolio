import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';

const CAPABILITIES = [
  { slug: 'frontend-development', image: 'images/capability-1.jpg' },
  { slug: 'backend-development', image: 'images/capability-2.jpg' },
  { slug: 'java-development', image: 'images/capability-3.jpg' },
  { slug: 'database-git', image: 'images/capability-4.jpg' },
];

export default function Curriculum() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    const observers: IntersectionObserver[] = [];

    items.forEach((item, index) => {
      gsap.set(item, {
        opacity: 0,
        y: 60,
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: index * 0.15,
                ease: 'power3.out',
              });

              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.2,
        }
      );

      observer.observe(item);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
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
        padding: '80px 5vw',
        minHeight: 'auto',
        background: 'transparent',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
        }}
      >
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

        <div
          className="flex flex-col"
          style={{
            gap: 40,
          }}
        >
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap.slug}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="flex flex-col md:flex-row md:items-start"
              style={{
                gap: '40px',
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                style={{
                  flex: '0 0 70%',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontWeight: 400,
                    fontSize: 'clamp(32px, 4vw, 64px)',
                    lineHeight: 1.05,
                    letterSpacing: '-1.44px',
                    color:
                      hoveredIndex === i
                        ? 'rgba(200, 170, 130, 1)'
                        : '#ffffff',
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
                    fontWeight: 200,
                    fontSize: 15,
                    lineHeight: 1.8,
                    color: '#dadada',
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
                      transform:
                        hoveredIndex === i
                          ? 'scale(1)'
                          : 'scale(1.05)',
                      transition:
                        'opacity 0.45s ease, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                      filter: 'grayscale(30%)',
                    }}
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 60,
          }}
        >
          <div
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 300,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#dadada',
              opacity: 0.6,
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
              gridTemplateColumns:
                'repeat(auto-fit, minmax(120px, 1fr))',
              gap: 16,
            }}
          >
            <div
              className="tech-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                padding: '24px 16px',
                border:
                  '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 12,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  'rgba(255, 153, 0, 0.45)';
                e.currentTarget.style.background =
                  'rgba(255, 153, 0, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background =
                  'transparent';
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <rect
                  x="2"
                  y="2"
                  width="36"
                  height="36"
                  rx="8"
                  stroke="#FF9900"
                  strokeWidth="1.5"
                />

                <text
                  x="20"
                  y="24"
                  textAnchor="middle"
                  fill="#FF9900"
                  fontFamily="Arial"
                  fontWeight="bold"
                  fontSize="11"
                >
                  AWS
                </text>
              </svg>

              <span
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 11,
                  color: '#dadada',
                  letterSpacing: '0.05em',
                }}
              >
                AWS
              </span>
            </div>

            <div
              className="tech-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                padding: '24px 16px',
                border:
                  '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 12,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  'rgba(255, 255, 255, 0.35)';
                e.currentTarget.style.background =
                  'rgba(255, 255, 255, 0.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background =
                  'transparent';
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <rect
                  x="3"
                  y="6"
                  width="34"
                  height="28"
                  rx="5"
                  stroke="#E5E5E5"
                  strokeWidth="1.5"
                />

                <path
                  d="M10 15L15 20L10 25"
                  stroke="#E5E5E5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <path
                  d="M19 25H29"
                  stroke="#E5E5E5"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <span
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 11,
                  color: '#dadada',
                  letterSpacing: '0.05em',
                }}
              >
                Linux
              </span>
            </div>

            <div
              className="tech-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                padding: '24px 16px',
                border:
                  '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 12,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  'rgba(255, 153, 0, 0.45)';
                e.currentTarget.style.background =
                  'rgba(255, 153, 0, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background =
                  'transparent';
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle
                  cx="20"
                  cy="9"
                  r="4"
                  stroke="#FF9900"
                  strokeWidth="1.5"
                />

                <circle
                  cx="10"
                  cy="29"
                  r="4"
                  stroke="#FF9900"
                  strokeWidth="1.5"
                />

                <circle
                  cx="30"
                  cy="29"
                  r="4"
                  stroke="#FF9900"
                  strokeWidth="1.5"
                />

                <path
                  d="M18 13L12 25"
                  stroke="#FF9900"
                  strokeWidth="1.5"
                />

                <path
                  d="M22 13L28 25"
                  stroke="#FF9900"
                  strokeWidth="1.5"
                />

                <path
                  d="M14 29H26"
                  stroke="#FF9900"
                  strokeWidth="1.5"
                />
              </svg>

              <span
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 11,
                  color: '#dadada',
                  letterSpacing: '0.05em',
                }}
              >
                VPC
              </span>
            </div>

            <div
              className="tech-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                padding: '24px 16px',
                border:
                  '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 12,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  'rgba(255, 153, 0, 0.45)';
                e.currentTarget.style.background =
                  'rgba(255, 153, 0, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background =
                  'transparent';
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M20 4L32 9V18C32 26 27 32 20 36C13 32 8 26 8 18V9L20 4Z"
                  stroke="#FF9900"
                  strokeWidth="1.5"
                />

                <circle
                  cx="20"
                  cy="18"
                  r="3"
                  stroke="#FF9900"
                  strokeWidth="1.5"
                />

                <path
                  d="M20 21V27"
                  stroke="#FF9900"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              <span
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 11,
                  color: '#dadada',
                  letterSpacing: '0.05em',
                }}
              >
                IAM
              </span>
            </div>

            <div
              className="tech-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                padding: '24px 16px',
                border:
                  '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 12,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  'rgba(0, 117, 143, 0.4)';
                e.currentTarget.style.background =
                  'rgba(0, 117, 143, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background =
                  'transparent';
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6zm4 4h-2v-2h2v2zm0-4h-2V7h2v6z"
                  fill="#00758F"
                />
              </svg>

              <span
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 11,
                  color: '#dadada',
                  letterSpacing: '0.05em',
                }}
              >
                MySQL
              </span>
            </div>

            <div
              className="tech-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                padding: '24px 16px',
                border:
                  '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: 12,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  'rgba(240, 80, 50, 0.4)';
                e.currentTarget.style.background =
                  'rgba(240, 80, 50, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor =
                  'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.background =
                  'transparent';
              }}
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.56 10.93L13.07.44a1.49 1.49 0 0 0-2.12 0l-2.12 2.12 2.68 2.68a1.76 1.76 0 0 1 2.23 2.24l2.59 2.59a1.76 1.76 0 0 1 1.81-.3 1.77 1.77 0 0 1 1.05 1.6 1.76 1.76 0 0 1-3.01 1.24l-2.43 2.43a1.76 1.76 0 1 1-2.49-2.49l1.82-1.82a4.74 4.74 0 0 0-1.24-2.42L8.97 5.5a4.74 4.74 0 0 0-6.68 0l-2.12 2.12a1.49 1.49 0 0 0 0 2.12l10.49 10.49a1.49 1.49 0 0 0 2.12 0l8.78-8.78a1.49 1.49 0 0 0 0-2.12z"
                  fill="#F05032"
                />
              </svg>

              <span
                style={{
                  fontFamily: "'GeistMono', monospace",
                  fontSize: 11,
                  color: '#dadada',
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