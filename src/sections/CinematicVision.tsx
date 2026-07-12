import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const CODE_LINES = [
  { text: 'import React from "react";', color: '#c586c0' },
  { text: 'import { useState, useEffect } from "react";', color: '#c586c0' },
  { text: '', color: '' },
  { text: 'const Portfolio = () => {', color: '#dcdcaa' },
  { text: '  const [skills, setSkills] = useState([]);', color: '#9cdcfe' },
  { text: '  const [projects, setProjects] = useState([]);', color: '#9cdcfe' },
  { text: '', color: '' },
  { text: '  useEffect(() => {', color: '#dcdcaa' },
  { text: '    setSkills(["React", "TypeScript", "Java"]);', color: '#ce9178' },
  { text: '    setProjects(["Calculator", "Memo App", "Game"]);', color: '#ce9178' },
  { text: '  }, []);', color: '#d4d4d4' },
  { text: '', color: '' },
  { text: '  return (', color: '#c586c0' },
  { text: '    <div className="portfolio">', color: '#808080' },
  { text: '      <Hero name="Naiem Rahman" />', color: '#dcdcaa' },
  { text: '      <Skills data={skills} />', color: '#dcdcaa' },
  { text: '      <Projects data={projects} />', color: '#dcdcaa' },
  { text: '    </div>', color: '#808080' },
  { text: '  );', color: '#c586c0' },
  { text: '};', color: '#d4d4d4' },
  { text: '', color: '' },
  { text: 'export default Portfolio;', color: '#c586c0' },
];

export default function CinematicVision() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const { t } = useTranslation();

  // Blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(blinkInterval);
  }, []);

  // Typing animation
  useEffect(() => {
    if (currentLine >= CODE_LINES.length) {
      setIsTypingComplete(true);
      return;
    }

    const line = CODE_LINES[currentLine];

    if (line.text === '') {
      setDisplayedLines((prev) => [...prev, '']);
      setCurrentLine((prev) => prev + 1);
      setCurrentChar(0);
      return;
    }

    if (currentChar < line.text.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (newLines.length <= currentLine) {
            newLines.push(line.text.substring(0, currentChar + 1));
          } else {
            newLines[currentLine] = line.text.substring(0, currentChar + 1);
          }
          return newLines;
        });
        setCurrentChar((prev) => prev + 1);
      }, 30 + Math.random() * 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
        setCurrentChar(0);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar]);

  // Restart animation after completion
  useEffect(() => {
    if (isTypingComplete) {
      const timeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLine(0);
        setCurrentChar(0);
        setIsTypingComplete(false);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [isTypingComplete]);

  const getLineColor = (lineIndex: number): string => {
    if (lineIndex >= CODE_LINES.length) return '#d4d4d4';
    return CODE_LINES[lineIndex].color || '#d4d4d4';
  };

  return (
    <section
      id="cinematic"
      ref={containerRef}
      style={{
        padding: '150px 5vw',
        background: '#0a0a0a',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 80,
            flexWrap: 'wrap',
            gap: 24,
          }}
        >
          <h2
            className="font-display text-white"
            style={{
              fontSize: 'clamp(32px, 5vw, 64px)',
              fontWeight: 400,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            {t('showreelTitle')}
          </h2>
          <p
            className="font-mono text-sm"
            style={{
              color: '#dadada',
              opacity: 0.6,
              maxWidth: 400,
              lineHeight: 1.6,
            }}
          >
            {t('showreelDesc')}
          </p>
        </div>

        {/* Terminal Window */}
        <div
          style={{
            background: '#1e1e1e',
            borderRadius: 12,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
          }}
        >
          {/* Terminal Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '16px 20px',
              background: '#252526',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#ff5f56',
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#ffbd2e',
              }}
            />
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                background: '#27c93f',
              }}
            />
            <span
              className="font-mono"
              style={{
                fontSize: 12,
                color: '#858585',
                marginLeft: 12,
                letterSpacing: '0.05em',
              }}
            >
              Portfolio.tsx — Naiem Rahman
            </span>
          </div>

          {/* Terminal Body */}
          <div
            style={{
              padding: '24px 28px',
              fontFamily: "'Fira Code', 'Consolas', 'Monaco', monospace",
              fontSize: 14,
              lineHeight: 1.8,
              minHeight: 420,
            }}
          >
            {displayedLines.map((line, lineIndex) => (
              <div
                key={`${lineIndex}-${isTypingComplete ? 'done' : 'typing'}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: '1.8em',
                }}
              >
                <span
                  style={{
                    color: '#858585',
                    marginRight: 16,
                    minWidth: 28,
                    textAlign: 'right',
                    fontSize: 12,
                    userSelect: 'none',
                  }}
                >
                  {lineIndex + 1}
                </span>
                <span
                  style={{
                    color: getLineColor(lineIndex),
                    whiteSpace: 'pre',
                  }}
                >
                  {line}
                  {lineIndex === currentLine && !isTypingComplete && (
                    <span
                      style={{
                        display: 'inline-block',
                        width: 8,
                        height: 18,
                        background: showCursor ? '#4ec9b0' : 'transparent',
                        marginLeft: 2,
                        verticalAlign: 'text-bottom',
                        transition: 'background 0.1s',
                      }}
                    />
                  )}
                </span>
              </div>
            ))}
            {/* Cursor on empty line while typing */}
            {!isTypingComplete && currentLine < CODE_LINES.length && (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  minHeight: '1.8em',
                }}
              >
                <span
                  style={{
                    color: '#858585',
                    marginRight: 16,
                    minWidth: 28,
                    textAlign: 'right',
                    fontSize: 12,
                    userSelect: 'none',
                  }}
                >
                  {currentLine + 1}
                </span>
                <span
                  style={{
                    display: 'inline-block',
                    width: 8,
                    height: 18,
                    background: showCursor ? '#4ec9b0' : 'transparent',
                    marginLeft: 2,
                    verticalAlign: 'text-bottom',
                    transition: 'background 0.1s',
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}