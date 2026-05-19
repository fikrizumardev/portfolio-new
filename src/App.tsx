import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 font-sans">
      <ScrollProgressBar />
      <Navbar />

      {/* ── Main Content ── */}
      <main>
        {/* Hero — full viewport, dark gradient mesh */}
        <Hero />

        {/* About — white / slate-800 */}
        <div className="relative">
          <About />
        </div>

        {/* Portfolio / Experience — slate-50 / slate-900 with subtle top border */}
        <div className="relative border-t border-slate-100 dark:border-slate-800">
          <Portfolio />
        </div>

        {/* Skills — white / slate-800 */}
        <div className="relative border-t border-slate-100 dark:border-slate-800">
          <Skills />
        </div>

        {/* Contact — slate-50 / slate-900 */}
        <div className="relative border-t border-slate-100 dark:border-slate-800">
          <Contact />
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
