import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AmberCascades from './AmberCascades';

const SKILLS = [
  {
    slug: 'frontend-development',
    key: 'awsCloud',
  },
  {
    slug: 'backend-development',
    key: 'linux',
  },
  {
    slug: 'java-development',
    key: 'security',
  },
  {
    slug: 'database-git',
    key: 'database',
  },
];

export default function CapabilityDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const currentIndex = SKILLS.findIndex(
    (skill) => skill.slug === slug
  );

  if (currentIndex === -1) {
    return (
      <div
        style={{
          minHeight: '100vh',
          background: '#0a0a0a',
          color: '#dadada',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "'Inter', sans-serif",
        }}
      >
        {t('skillNotFound')}
      </div>
    );
  }

  const currentSkill = SKILLS[currentIndex];
  const previousSkill =
    currentIndex > 0 ? SKILLS[currentIndex - 1] : null;
  const nextSkill =
    currentIndex < SKILLS.length - 1
      ? SKILLS[currentIndex + 1]
      : null;

  const paragraphs = [
    t(`${currentSkill.key}P1`),
    t(`${currentSkill.key}P2`),
    t(`${currentSkill.key}P3`),
    t(`${currentSkill.key}P4`),
  ];

  const getSkillTitle = (key: string) => {
    return t(`${key}Title`);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        color: '#ffffff',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      <header
        style={{
          height: '86px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 5vw',
          position: 'relative',
          zIndex: 20,
          background: '#0a0a0a',
        }}
      >
        <button
          onClick={() => navigate('/')}
          style={{
            background: 'transparent',
            border: 'none',
            padding: 0,
            color: '#ffffff',
            cursor: 'pointer',
            fontFamily: "'GeistMono', monospace",
            fontSize: '17px',
            fontWeight: 300,
          }}
        >
          {t('brandName')}
        </button>

        <button
          onClick={() => navigate('/')}
          style={{
            background: 'transparent',
            border: 'none',
            padding: 0,
            color: '#dadada',
            cursor: 'pointer',
            fontFamily: "'GeistMono', monospace",
            fontSize: '13px',
            fontWeight: 300,
            letterSpacing: '0.03em',
          }}
        >
          {t('skillBack')}
        </button>
      </header>

      <section
        style={{
          position: 'relative',
          minHeight: 'calc(100vh - 86px)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.4,
            pointerEvents: 'none',
          }}
        >
          <AmberCascades />
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '860px',
            margin: '0 auto',
            padding: '90px 24px 100px',
          }}
        >
          <div
            style={{
              fontFamily: "'GeistMono', monospace",
              fontSize: '11px',
              fontWeight: 300,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#8f8f8f',
              marginBottom: '28px',
            }}
          >
            {t('skillDetailLabel')}
          </div>

          <h1
            style={{
              fontFamily: "'EB Garamond', serif",
              fontWeight: 400,
              fontSize: 'clamp(44px, 6vw, 72px)',
              lineHeight: 1.05,
              letterSpacing: '-1.5px',
              color: '#ffffff',
              margin: '0 0 20px',
            }}
          >
            {t(`${currentSkill.key}Title`)}
          </h1>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: '18px',
              lineHeight: 1.7,
              color: '#b8b8b8',
              margin: 0,
              maxWidth: '700px',
            }}
          >
            {t(`${currentSkill.key}Subtitle`)}
          </p>

          <div
            style={{
              width: '100%',
              height: '1px',
              background: 'rgba(255,255,255,0.12)',
              margin: '80px 0 64px',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '28px',
            }}
          >
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '16px',
                  fontWeight: 300,
                  lineHeight: 1.9,
                  color: '#c5c5c5',
                  margin: 0,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div
            style={{
              width: '100%',
              height: '1px',
              background: 'rgba(255,255,255,0.12)',
              margin: '72px 0 40px',
            }}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '30px',
            }}
          >
            <div style={{ flex: 1 }}>
              {previousSkill && (
                <button
                  onClick={() =>
                    navigate(
                      `/capability/${previousSkill.slug}`
                    )
                  }
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    textAlign: 'left',
                    color: '#ffffff',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'GeistMono', monospace",
                      fontSize: '10px',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: '#777777',
                      marginBottom: '10px',
                    }}
                  >
                    {t('skillPrevious')}
                  </div>

                  <div
                    style={{
                      fontFamily: "'EB Garamond', serif",
                      fontSize: '24px',
                      fontWeight: 400,
                    }}
                  >
                    {getSkillTitle(previousSkill.key)}
                  </div>
                </button>
              )}
            </div>

            <div
              style={{
                flex: 1,
                textAlign: 'right',
              }}
            >
              {nextSkill && (
                <button
                  onClick={() =>
                    navigate(`/capability/${nextSkill.slug}`)
                  }
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    textAlign: 'right',
                    color: '#ffffff',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'GeistMono', monospace",
                      fontSize: '10px',
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      color: '#777777',
                      marginBottom: '10px',
                    }}
                  >
                    {t('skillNext')}
                  </div>

                  <div
                    style={{
                      fontFamily: "'EB Garamond', serif",
                      fontSize: '24px',
                      fontWeight: 400,
                    }}
                  >
                    {getSkillTitle(nextSkill.key)}
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}