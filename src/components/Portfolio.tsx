import { motion } from 'framer-motion';
import { LayoutGrid, Server, Shield, Globe, MonitorSmartphone, Database, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Gambar lokal dari folder assets
import imgFrontAccounting from '../assets/frontaccounting.png';
import imgSmanRancabungur from '../assets/smanrancabungur.png';
import imgSman2Cibinong from '../assets/sman2cibinong.png';
import imgLazismuGresik from '../assets/lazismugresik.png';
import imgSmpn280Jkt from '../assets/smpn280jkt.png';
import imgBaliTour from '../assets/balitour.png';

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
      iconBg: 'bg-emerald-500',
      accent: 'hover:border-emerald-400/50 dark:hover:border-emerald-600/50',
      // Gambar dokumentasi: dashboard ERP / accounting
      image: imgFrontAccounting,
      imageAlt: 'FrontAccounting ERP Dashboard',
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: t('portfolio.p2.title'),
      role: t('portfolio.p2.role'),
      desc: t('portfolio.p2.desc'),
      tags: ['Proxmox', 'Virtualization', 'Linux'],
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-500',
      accent: 'hover:border-blue-400/50 dark:hover:border-blue-600/50',
      // Gambar dokumentasi: server rack / data center
      image: imgSmanRancabungur,
      imageAlt: 'Server Infrastructure SMAN 1 Rancabungur',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: t('portfolio.p3.title'),
      role: t('portfolio.p3.role'),
      desc: t('portfolio.p3.desc'),
      tags: ['Server Management', 'Backup', 'Security'],
      iconColor: 'text-red-500',
      iconBg: 'bg-red-500',
      accent: 'hover:border-red-400/50 dark:hover:border-red-600/50',
      // Gambar dokumentasi: IT maintenance / network
      image: imgSman2Cibinong,
      imageAlt: 'IT Infrastructure Maintenance SMAN 2 Cibinong',
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: t('portfolio.p4.title'),
      role: t('portfolio.p4.role'),
      desc: t('portfolio.p4.desc'),
      tags: ['Laravel', 'PHP', 'Tailwind CSS'],
      iconColor: 'text-orange-500',
      iconBg: 'bg-orange-500',
      accent: 'hover:border-orange-400/50 dark:hover:border-orange-600/50',
      // Gambar dokumentasi: platform donasi / fundraising web
      image: imgLazismuGresik,
      imageAlt: 'Platform Fundraising Lazismu Gresik',
    },
    {
      icon: <MonitorSmartphone className="w-5 h-5" />,
      title: t('portfolio.p5.title'),
      role: t('portfolio.p5.role'),
      desc: t('portfolio.p5.desc'),
      tags: ['WordPress', 'CMS', 'SEO'],
      iconColor: 'text-indigo-500',
      iconBg: 'bg-indigo-500',
      accent: 'hover:border-indigo-400/50 dark:hover:border-indigo-600/50',
      // Gambar dokumentasi: web design / CMS
      image: imgSmpn280Jkt,
      imageAlt: 'WordPress Website Development',
    },
    {
      icon: <LayoutGrid className="w-5 h-5" />,
      title: t('portfolio.p6.title'),
      role: t('portfolio.p6.role'),
      desc: t('portfolio.p6.desc'),
      tags: ['Cloudflare', 'DNS', 'Tunneling'],
      iconColor: 'text-sky-500',
      iconBg: 'bg-sky-500',
      accent: 'hover:border-sky-400/50 dark:hover:border-sky-600/50',
      // Gambar dokumentasi: network security / DNS
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80',
      imageAlt: 'Domain & DNS Security Management',
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: t('portfolio.p7.title'),
      role: t('portfolio.p7.role'),
      desc: t('portfolio.p7.desc'),
      tags: ['Laravel', 'PHP', 'Tailwind CSS'],
      iconColor: 'text-rose-500',
      iconBg: 'bg-rose-500',
      accent: 'hover:border-rose-400/50 dark:hover:border-rose-600/50',
      // Gambar dokumentasi: Bali Tour website
      image: imgBaliTour,
      imageAlt: 'Bali Tour Website',
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-28 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-20"
        >
          <span className="section-label mb-3 inline-flex">{t('portfolio.subtitle')}</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {t('portfolio.title')}
          </h2>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 card-glow ${exp.accent} transition-all duration-300 overflow-hidden flex flex-col`}
            >
              {/* ── Image Header ── */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Dark overlay supaya teks tetap terbaca tanpa warna */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Role badge — top left */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest border border-white/20">
                    {exp.role}
                  </span>
                </div>

                {/* Icon — bottom right */}
                <div className="absolute bottom-3 right-3">
                  <div className={`p-2.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white`}>
                    {exp.icon}
                  </div>
                </div>

                {/* Title overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-8 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="font-display text-base sm:text-lg font-bold text-white leading-snug drop-shadow">
                    {exp.title}
                  </h3>
                </div>
              </div>

              {/* ── Card Body ── */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                  {exp.desc}
                </p>

                {/* Footer: Tags + link icon */}
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700/80 text-slate-600 dark:text-slate-300 text-[10px] sm:text-xs font-semibold rounded-lg font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-200 flex-shrink-0" />
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
