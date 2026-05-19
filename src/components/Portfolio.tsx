import { motion } from 'framer-motion';
import { LayoutGrid, Server, Shield, Globe, MonitorSmartphone, Database } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      icon: <Database className="w-5 h-5" />,
      title: t('portfolio.p1.title'),
      role: t('portfolio.p1.role'),
      desc: t('portfolio.p1.desc'),
      tags: ['PHP', 'ERP', 'Business Logic'],
      iconColor: 'text-emerald-500',
      iconBg: 'bg-emerald-50 dark:bg-emerald-900/30',
      accent: 'hover:border-emerald-200 dark:hover:border-emerald-800',
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: t('portfolio.p2.title'),
      role: t('portfolio.p2.role'),
      desc: t('portfolio.p2.desc'),
      tags: ['Proxmox', 'Virtualization', 'Linux'],
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-50 dark:bg-blue-900/30',
      accent: 'hover:border-blue-200 dark:hover:border-blue-800',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: t('portfolio.p3.title'),
      role: t('portfolio.p3.role'),
      desc: t('portfolio.p3.desc'),
      tags: ['Server Management', 'Backup', 'Security'],
      iconColor: 'text-red-500',
      iconBg: 'bg-red-50 dark:bg-red-900/30',
      accent: 'hover:border-red-200 dark:hover:border-red-800',
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: t('portfolio.p4.title'),
      role: t('portfolio.p4.role'),
      desc: t('portfolio.p4.desc'),
      tags: ['Laravel', 'PHP', 'Tailwind CSS'],
      iconColor: 'text-orange-500',
      iconBg: 'bg-orange-50 dark:bg-orange-900/30',
      accent: 'hover:border-orange-200 dark:hover:border-orange-800',
    },
    {
      icon: <MonitorSmartphone className="w-5 h-5" />,
      title: t('portfolio.p5.title'),
      role: t('portfolio.p5.role'),
      desc: t('portfolio.p5.desc'),
      tags: ['WordPress', 'CMS', 'SEO'],
      iconColor: 'text-indigo-500',
      iconBg: 'bg-indigo-50 dark:bg-indigo-900/30',
      accent: 'hover:border-indigo-200 dark:hover:border-indigo-800',
    },
    {
      icon: <LayoutGrid className="w-5 h-5" />,
      title: t('portfolio.p6.title'),
      role: t('portfolio.p6.role'),
      desc: t('portfolio.p6.desc'),
      tags: ['Cloudflare', 'DNS', 'Tunneling'],
      iconColor: 'text-sky-500',
      iconBg: 'bg-sky-50 dark:bg-sky-900/30',
      accent: 'hover:border-sky-200 dark:hover:border-sky-800',
    },
  ];

  return (
    <section id="experience" className="py-28 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="section-label mb-4 inline-flex">{t('portfolio.subtitle')}</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('portfolio.title')}
          </h2>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group bg-white dark:bg-slate-800 p-7 rounded-2xl border border-slate-100 dark:border-slate-700 card-glow ${exp.accent} transition-colors duration-300`}
            >
              <div className="flex items-start gap-5">
                {/* Icon */}
                <div className={`p-3 rounded-xl flex-shrink-0 ${exp.iconBg} ${exp.iconColor}`}>
                  {exp.icon}
                </div>

                <div className="min-w-0">
                  {/* Role label */}
                  <div className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-1.5">
                    {exp.role}
                  </div>
                  {/* Title */}
                  <h3 className="font-display text-lg font-bold text-slate-800 dark:text-white mb-3 leading-snug">
                    {exp.title}
                  </h3>
                  {/* Description */}
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
                    {exp.desc}
                  </p>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-lg font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
