import { motion } from 'framer-motion';
import { Server, Code, Layers } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <Code size={32} className="text-primary-500" />,
      title: t('about.card1.title'),
      desc: t('about.card1.desc')
    },
    {
      icon: <Server size={32} className="text-indigo-500" />,
      title: t('about.card2.title'),
      desc: t('about.card2.desc')
    },
    {
      icon: <Layers size={32} className="text-sky-500" />,
      title: t('about.card3.title'),
      desc: t('about.card3.desc')
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-800 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-base font-semibold text-primary-600 dark:text-primary-400 tracking-wide uppercase">{t('about.subtitle')}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('about.title')}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="prose prose-lg text-slate-600 dark:text-slate-300">
              <p className="mb-6 leading-relaxed text-lg">
                {t('about.p1.1')}<strong className="text-slate-800 dark:text-slate-200">{t('about.p1.strong')}</strong>{t('about.p1.2')}
              </p>
              <p className="mb-6 leading-relaxed text-lg">
                {t('about.p2')}
              </p>
              <p className="leading-relaxed text-lg">
                {t('about.p3')}
              </p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-slate-100 dark:border-slate-700 grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-extrabold text-primary-600 dark:text-primary-400">3+</div>
                <div className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">{t('about.stats.years')}<br/>{t('about.stats.exp')}</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">20+</div>
                <div className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">{t('about.stats.projects')}<br/>{t('about.stats.completed')}</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 grid sm:grid-cols-2 gap-6 w-full"
          >
            {cards.map((card, idx) => (
              <div key={idx} className={`bg-slate-50 dark:bg-slate-700/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-600 hover:shadow-xl transition-shadow ${idx === 2 ? 'sm:col-span-2' : ''}`}>
                <div className="w-14 h-14 bg-white dark:bg-slate-800 rounded-xl shadow-sm flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{card.title}</h3>
                <p className="text-slate-600 dark:text-slate-300">{card.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
