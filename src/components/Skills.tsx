import { motion } from 'framer-motion';
import { Terminal, Layout, ServerCrash, AlignRight, Workflow } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.c1'),
      icon: <Terminal className="w-5 h-5" />,
      skills: ['PHP', 'Laravel', 'Livewire', 'REST API Integration'],
      color: 'text-indigo-600 dark:text-indigo-400',
      iconBg: 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-100 dark:border-indigo-800',
      tagBg: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border-indigo-100 dark:border-indigo-800/60',
    },
    {
      title: t('skills.c2'),
      icon: <Layout className="w-5 h-5" />,
      skills: ['Tailwind CSS', 'Alpine.js', 'Responsive Web Design', 'React'],
      color: 'text-pink-600 dark:text-pink-400',
      iconBg: 'bg-pink-50 dark:bg-pink-900/30 border-pink-100 dark:border-pink-800',
      tagBg: 'bg-pink-50 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300 border-pink-100 dark:border-pink-800/60',
    },
    {
      title: t('skills.c3'),
      icon: <ServerCrash className="w-5 h-5" />,
      skills: ['Proxmox VE', 'Linux Server Administration', 'Nginx/Apache', 'Cloudflare'],
      color: 'text-emerald-600 dark:text-emerald-400',
      iconBg: 'bg-emerald-50 dark:bg-emerald-900/30 border-emerald-100 dark:border-emerald-800',
      tagBg: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800/60',
    },
    {
      title: t('skills.c4'),
      icon: <AlignRight className="w-5 h-5" />,
      skills: ['WordPress', 'CMS Optimization'],
      color: 'text-blue-600 dark:text-blue-400',
      iconBg: 'bg-blue-50 dark:bg-blue-900/30 border-blue-100 dark:border-blue-800',
      tagBg: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-800/60',
    },
    {
      title: t('skills.c5'),
      icon: <Workflow className="w-5 h-5" />,
      skills: ['Git / Version Control', 'Jira & Confluence', t('skills.t1'), t('skills.t2')],
      color: 'text-orange-600 dark:text-orange-400',
      iconBg: 'bg-orange-50 dark:bg-orange-900/30 border-orange-100 dark:border-orange-800',
      tagBg: 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-100 dark:border-orange-800/60',
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-28 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
        >
          <span className="section-label mb-3 inline-flex">{t('skills.subtitle')}</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('skills.title')}
          </h2>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-white dark:bg-slate-700/40 p-5 sm:p-7 rounded-2xl border border-slate-100 dark:border-slate-700 card-glow"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2 sm:p-2.5 rounded-xl border ${category.iconBg} ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="font-display text-sm sm:text-base font-bold text-slate-800 dark:text-white leading-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className={`px-2.5 py-1 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-semibold rounded-lg border font-mono transition-colors ${category.tagBg}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
