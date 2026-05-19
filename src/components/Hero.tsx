import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/my-photo.png';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 pb-10 md:pt-20 md:pb-0 overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300"
    >
      {/* ── Ambient blobs ── */}
      <div className="absolute top-1/4 -left-24 w-72 h-72 md:w-[500px] md:h-[500px] bg-primary-200 dark:bg-primary-900/40 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[60px] md:blur-[80px] opacity-40 animate-blob" />
      <div className="absolute top-1/3 -right-24 w-72 h-72 md:w-[500px] md:h-[500px] bg-indigo-200 dark:bg-indigo-900/40 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[60px] md:blur-[80px] opacity-40 animate-blob" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[300px] h-[150px] md:w-[600px] md:h-[300px] bg-sky-200 dark:bg-sky-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-[60px] md:blur-[80px] opacity-30 animate-blob" style={{ animationDelay: '4s' }} />

      {/* ── Grid pattern overlay ── */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(2,132,199,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(2,132,199,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-3/5 text-center md:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-semibold text-xs sm:text-sm mb-5 border border-primary-100 dark:border-primary-800/60 shadow-sm"
            >
              <Sparkles size={13} className="text-primary-500 flex-shrink-0" />
              <span className="truncate max-w-[220px] sm:max-w-none">{t('hero.greeting')}</span>
            </motion.div>

            {/* Heading — mobile: text-3xl, sm: text-4xl, md: text-5xl, lg: text-6xl */}
            <h1 className="font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-4">
              {t('hero.title.1')}
              <br />
              <span className="gradient-text">{t('hero.title.2')}</span>
            </h1>

            {/* Mobile photo — compact */}
            <div className="md:hidden w-full my-6">
              <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[300px]">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-indigo-200 dark:from-primary-900/50 dark:to-indigo-900/50 rounded-[1.5rem] transform -rotate-3 scale-105 blur-sm opacity-60" />
                <div className="relative bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-[1.5rem] overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl h-[280px] sm:h-[320px] flex items-end justify-center">
                  <img
                    src={myPhoto}
                    alt="My Profile"
                    className="w-full h-full object-contain object-bottom"
                  />
                </div>
                {/* Status badge */}
                <div className="absolute -bottom-3 left-3 glass dark:glass-dark px-3 py-2 rounded-xl flex items-center gap-2 shadow-lg">
                  <div className="w-6 h-6 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 flex-shrink-0">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-bold text-slate-900 dark:text-slate-100 leading-tight">{t('hero.status.title')}</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">{t('hero.status.desc')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-md mx-auto md:mx-0 leading-relaxed">
              {t('hero.description')}
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col xs:flex-row gap-3 justify-center md:justify-start">
              <a
                href="#experience"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary-600 dark:bg-primary-500 text-white rounded-xl font-semibold text-sm hover:bg-primary-700 dark:hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                {t('hero.btn.work')}
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl font-semibold text-sm border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                {t('hero.btn.contact')}
              </a>
            </div>
          </motion.div>

          {/* ── Right: Photo (desktop only) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex md:w-2/5 justify-center"
          >
            <div className="relative w-full max-w-[360px] lg:max-w-[400px]">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary-200 via-indigo-200 to-sky-200 dark:from-primary-900/60 dark:via-indigo-900/60 dark:to-sky-900/60 rounded-[2.5rem] opacity-60 blur-xl" />
              {/* Back tilt */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-indigo-100 dark:from-primary-900/40 dark:to-indigo-900/40 rounded-[2.5rem] transform -rotate-3 scale-[1.03]" />
              {/* Photo card */}
              <div className="relative bg-gradient-to-b from-blue-50 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-[2.5rem] overflow-hidden border-[5px] border-white dark:border-slate-700 shadow-2xl h-[420px] lg:h-[460px] flex items-end justify-center">
                <img
                  src={myPhoto}
                  alt="My Profile"
                  className="w-full h-full object-contain object-bottom"
                />
              </div>
              {/* Floating status badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-5 -left-6 glass dark:glass-dark px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-xl"
              >
                <div className="w-9 h-9 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 flex-shrink-0">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-tight">{t('hero.status.title')}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{t('hero.status.desc')}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
