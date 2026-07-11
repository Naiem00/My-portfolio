import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import About from './sections/About';
import Curriculum from './sections/Curriculum';
import CinematicVision from './sections/CinematicVision';
import AlumniArchives from './sections/AlumniArchives';
import Footer from './sections/Footer';
import CapabilityDetail from './sections/CapabilityDetail';

function HomePage() {
  return (
    <div
      style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <Navigation />

      <main>
        <Hero />
        <About />
        <Curriculum />
        <CinematicVision />
        <AlumniArchives />
        <Footer />
      </main>
    </div>
  );
}

export default function App() {
  
  // Crisp AI Chatbot Integration
  useEffect(() => {
    // React Router change ba multiple re-render-e jate chatbot script double double inject na hoy
    if (!(window as any).$crisp) {
      (window as any).$crisp = [];
      (window as any).CRISP_WEBSITE_ID = "534af1e4-536b-4367-8b26-d852e4a0dda8";

      const d = document;
      const s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = true;
      d.getElementsByTagName("head")[0]?.appendChild(s);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/capability/:slug" element={<CapabilityDetail />} />
    </Routes>
  );
}