import { motion } from 'framer-motion';
import { LayoutGrid, Server, Shield, Globe, MonitorSmartphone, Database } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Portfolio = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      icon: <Database className="w-6 h-6 text-emerald-500" />,
      title: t('portfolio.p1.title'),
      role: t('portfolio.p1.role'),
      desc: t('portfolio.p1.desc'),
      tags: ["PHP", "ERP", "Business Logic"],
      color: "bg-emerald-50 border-emerald-100"
    },
    {
      icon: <Server className="w-6 h-6 text-blue-500" />,
      title: t('portfolio.p2.title'),
      role: t('portfolio.p2.role'),
      desc: t('portfolio.p2.desc'),
      tags: ["Proxmox", "Virtualization", "Linux"],
      color: "bg-blue-50 border-blue-100"
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: t('portfolio.p3.title'),
      role: t('portfolio.p3.role'),
      desc: t('portfolio.p3.desc'),
      tags: ["Server Management", "Backup", "Security"],
      color: "bg-red-50 border-red-100"
    },
    {
      icon: <Globe className="w-6 h-6 text-orange-500" />,
      title: t('portfolio.p4.title'),
      role: t('portfolio.p4.role'),
      desc: t('portfolio.p4.desc'),
      tags: ["Laravel", "PHP", "Tailwind CSS"],
      color: "bg-orange-50 border-orange-100"
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6 text-indigo-500" />,
      title: t('portfolio.p5.title'),
      role: t('portfolio.p5.role'),
      desc: t('portfolio.p5.desc'),
      tags: ["WordPress", "CMS", "SEO"],
      color: "bg-indigo-50 border-indigo-100"
    },
    {
      icon: <LayoutGrid className="w-6 h-6 text-sky-500" />,
      title: t('portfolio.p6.title'),
      role: t('portfolio.p6.role'),
      desc: t('portfolio.p6.desc'),
      tags: ["Cloudflare", "DNS", "Tunneling"],
      color: "bg-sky-50 border-sky-100"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-base font-semibold text-primary-600 dark:text-primary-400 tracking-wide uppercase">{t('portfolio.subtitle')}</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t('portfolio.title')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-8 lg:gap-10">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white dark:bg-slate-800 border-slate-100 dark:border-slate-700`}
            >
              <div className="flex items-start gap-5">
                <div className={`p-4 rounded-2xl flex-shrink-0 ${exp.color}`}>
                  {exp.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-primary-600 dark:text-primary-400 mb-1">{exp.role}</div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{exp.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-5">{exp.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-lg">
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
