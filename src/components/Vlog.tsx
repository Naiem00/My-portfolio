import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { vlogConfig } from '../config';

export const Vlog: React.FC = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % vlogConfig.slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="vlog" className="w-full py-20 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 tracking-wider text-center md:text-left">
          {t(vlogConfig.sectionLabelKey)}
        </h2>
        
        <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-2xl bg-zinc-900">
          {vlogConfig.slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={t(slide.titleKey)}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 z-20">
                <h3 className="text-2xl md:text-4xl font-bold mb-3 tracking-wide">
                  {t(slide.titleKey)}
                </h3>
                <p className="text-zinc-300 text-sm md:text-lg max-w-2xl leading-relaxed">
                  {t(slide.descKey)}
                </p>
              </div>
            </div>
          ))}

          <div className="absolute top-1/2 -translate-y-1/2 left-4 z-30">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + vlogConfig.slides.length) % vlogConfig.slides.length)}
              className="w-10 h-10 rounded-full bg-black/50 border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              &larr;
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4 z-30">
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % vlogConfig.slides.length)}
              className="w-10 h-10 rounded-full bg-black/50 border border-zinc-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"
            >
              &rarr;
            </button>
          </div>

          <div className="absolute bottom-4 right-4 z-30 flex gap-2">
            {vlogConfig.slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-zinc-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};