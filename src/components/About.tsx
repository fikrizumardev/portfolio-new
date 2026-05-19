import { motion } from 'framer-motion';
import { Server, Code, Layers } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <Code size={28} className="text-primary-500" />,
      title: t('about.card1.title'),
      desc: t('about.card1.desc'),
      accent: 'from-primary-500/10 to-primary-500/5 border-primary-100 dark:border-primary-900/50',
      iconBg: 'bg-primary-50 dark:bg-primary-900/30',
    },
    {
      icon: <Server size={28} className="text-indigo-500" />,
      title: t('about.card2.title'),
      desc: t('about.card2.desc'),
      accent: 'from-indigo-500/10 to-indigo-500/5 border-indigo-100 dark:border-indigo-900/50',
      iconBg: 'bg-indigo-50 dark:bg-indigo-900/30',
    },
    {
      icon: <Layers size={28} className="text-sky-500" />,
      title: t('about.card3.title'),
      desc: t('about.card3.desc'),
      accent: 'from-sky-500/10 to-sky-500/5 border-sky-100 dark:border-sky-900/50',
      iconBg: 'bg-sky-50 dark:bg-sky-900/30',
    },
  ];

  return (
    <section id="about" className="py-28 bg-white dark:bg-slate-800 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="section-label mb-4 inline-flex">{t('about.subtitle')}</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('about.title')}
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* ── Left: Bio ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="space-y-5 text-slate-600 dark:text-slate-300 text-[1.05rem] leading-relaxed">
              <p>
                {t('about.p1.1')}
                <strong className="font-semibold text-slate-800 dark:text-slate-200">{t('about.p1.strong')}</strong>
                {t('about.p1.2')}
              </p>
              <p>{t('about.p2')}</p>
              <p>{t('about.p3')}</p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6">
              {[
                { value: '3+', label: t('about.stats.years'), sub: t('about.stats.exp'), color: 'text-primary-600 dark:text-primary-400' },
                { value: '20+', label: t('about.stats.projects'), sub: t('about.stats.completed'), color: 'text-indigo-600 dark:text-indigo-400' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-700/40 border border-slate-100 dark:border-slate-700"
                >
                  <div className={`font-display text-4xl font-extrabold ${stat.color}`}>{stat.value}</div>
                  <div className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest leading-snug">
                    {stat.label}<br />{stat.sub}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 grid sm:grid-cols-2 gap-5 w-full"
          >
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`bg-gradient-to-br ${card.accent} p-7 rounded-2xl border card-glow ${idx === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className={`w-12 h-12 ${card.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                  {card.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
