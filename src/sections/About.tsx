import { aboutConfig } from '../config';

export default function About() {
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
          {aboutConfig.sectionLabel}
        </span>

        {/* Photo + Text Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '300px 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
        >
          {/* PHOTO - Left Side */}
          <div>
            <img
              src={aboutConfig.image}
              alt="Naiem Naimur Rahman"
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '3/4',
                objectFit: 'cover',
                display: 'block',
                filter: 'grayscale(20%)',
                transition: 'filter 0.5s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'grayscale(0%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'grayscale(20%)';
              }}
            />
          </div>

          {/* TEXT - Right Side */}
          <div>
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
              {aboutConfig.bio}
            </p>

            {/* Education, Location, Languages */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '60px',
                marginBottom: '60px',
              }}
            >
              <div>
                <h4
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontWeight: 300,
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#666666',
                    marginBottom: '12px',
                  }}
                >
                  Education
                </h4>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 200,
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: '#cccccc',
                  }}
                >
                  {aboutConfig.education}
                </p>
              </div>

              <div>
                <h4
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontWeight: 300,
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#666666',
                    marginBottom: '12px',
                  }}
                >
                  Location
                </h4>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 200,
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: '#cccccc',
                  }}
                >
                  {aboutConfig.location}
                </p>
              </div>

              <div>
                <h4
                  style={{
                    fontFamily: "'GeistMono', monospace",
                    fontWeight: 300,
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#666666',
                    marginBottom: '12px',
                  }}
                >
                  Languages
                </h4>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 200,
                    fontSize: '15px',
                    lineHeight: 1.6,
                    color: '#cccccc',
                  }}
                >
                  {aboutConfig.languages}
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
                Certifications
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
        </div>
      </div>
    </section>
  );
}