import { motion } from 'framer-motion';
import { Server, Code, Layers } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import photo2 from '../assets/photo2.jpg';

const About = () => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <Code size={24} className="text-primary-500" />,
      title: t('about.card1.title'),
      desc: t('about.card1.desc'),
      accent: 'from-primary-500/10 to-primary-500/5 border-primary-100 dark:border-primary-900/50',
      iconBg: 'bg-primary-50 dark:bg-primary-900/30',
    },
    {
      icon: <Server size={24} className="text-indigo-500" />,
      title: t('about.card2.title'),
      desc: t('about.card2.desc'),
      accent: 'from-indigo-500/10 to-indigo-500/5 border-indigo-100 dark:border-indigo-900/50',
      iconBg: 'bg-indigo-50 dark:bg-indigo-900/30',
    },
    {
      icon: <Layers size={24} className="text-sky-500" />,
      title: t('about.card3.title'),
      desc: t('about.card3.desc'),
      accent: 'from-sky-500/10 to-sky-500/5 border-sky-100 dark:border-sky-900/50',
      iconBg: 'bg-sky-50 dark:bg-sky-900/30',
    },
  ];

  return (
    <section id="about" className="py-16 md:py-28 bg-white dark:bg-slate-800 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <span className="section-label mb-3 inline-flex">{t('about.subtitle')}</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('about.title')}
          </h2>
        </motion.div>

        {/* ── Main Layout: Photo | Bio + Stats | Cards ── */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

          {/* ── Col 1: Photo ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[280px] xl:w-[300px] flex-shrink-0"
          >
            <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[300px] lg:max-w-none">
              {/* Decorative tilt bg */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-indigo-100 dark:from-primary-900/40 dark:to-indigo-900/40 rounded-2xl transform rotate-2 scale-[1.03]" />

              {/* Photo frame */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white dark:border-slate-700 shadow-xl aspect-[3/4]">
                <img
                  src={photo2}
                  alt="Fikri Zumar"
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-900/40 to-transparent" />
              </div>

              {/* Floating experience badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -right-3 sm:-right-5 glass dark:glass-dark px-3.5 py-2.5 rounded-xl flex items-center gap-2.5 shadow-lg"
              >
                <div className="w-8 h-8 bg-primary-100 dark:bg-primary-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-base">💼</span>
                </div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900 dark:text-slate-100 leading-tight">3+ Tahun</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Pengalaman</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── Col 2: Bio + Stats ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 min-w-0 mt-6 lg:mt-0"
          >
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                {t('about.p1.1')}
                <strong className="font-semibold text-slate-800 dark:text-slate-200">{t('about.p1.strong')}</strong>
                {t('about.p1.2')}
              </p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { value: '3+', label: t('about.stats.years'), sub: t('about.stats.exp'), color: 'text-primary-600 dark:text-primary-400' },
                { value: '20+', label: t('about.stats.projects'), sub: t('about.stats.completed'), color: 'text-indigo-600 dark:text-indigo-400' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-700/40 border border-slate-100 dark:border-slate-700"
                >
                  <div className={`font-display text-3xl sm:text-4xl font-extrabold ${stat.color}`}>{stat.value}</div>
                  <div className="mt-1.5 text-[10px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-snug">
                    {stat.label}<br />{stat.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Cards — visible on mobile/tablet below bio, hidden on lg (shown in col 3) */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 lg:hidden">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className={`bg-gradient-to-br ${card.accent} p-4 rounded-2xl border card-glow`}
                >
                  <div className={`w-9 h-9 ${card.iconBg} rounded-xl flex items-center justify-center mb-3`}>
                    {card.icon}
                  </div>
                  <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white mb-1">{card.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Col 3: Cards (desktop only) ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="hidden lg:flex flex-col gap-4 w-[260px] xl:w-[280px] flex-shrink-0"
          >
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`bg-gradient-to-br ${card.accent} p-5 rounded-2xl border card-glow`}
              >
                <div className={`w-10 h-10 ${card.iconBg} rounded-xl flex items-center justify-center mb-3`}>
                  {card.icon}
                </div>
                <h3 className="font-display text-sm font-bold text-slate-900 dark:text-white mb-1.5">{card.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
