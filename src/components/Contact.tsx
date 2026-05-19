import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: 'Email',
      value: 'muhammad.fikri.azzumardi@gmail.com',
      href: 'mailto:muhammad.fikri.azzumardi@gmail.com',
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      label: t('contact.phone'),
      value: '+62 896-1203-2599',
      href: 'tel:+6289612032599',
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-28 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Ambient blobs */}
      <div className="absolute -top-32 -right-32 w-72 h-72 md:w-96 md:h-96 bg-primary-200 dark:bg-primary-900/30 rounded-full opacity-20 filter blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-72 h-72 md:w-96 md:h-96 bg-indigo-200 dark:bg-indigo-900/30 rounded-full opacity-20 filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-16"
        >
          <span className="section-label mb-3 inline-flex">{t('contact.subtitle')}</span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            {t('contact.title')}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('contact.desc')}
          </p>
        </motion.div>

        {/* ── Contact Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-700 dark:from-primary-700 dark:via-primary-800 dark:to-indigo-800" />

          {/* Decorative circles */}
          <div className="absolute -top-16 -right-16 w-48 h-48 sm:w-64 sm:h-64 bg-white/5 rounded-full" />
          <div className="absolute -bottom-12 -left-12 w-36 h-36 sm:w-48 sm:h-48 bg-white/5 rounded-full" />

          <div className="relative z-10 p-7 sm:p-10 lg:p-16">
            {/* Contact items */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-20">
              {contactItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  className="flex flex-col items-center text-center group w-full sm:w-auto"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 group-hover:bg-white/20 transition-colors rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 text-white shadow-lg backdrop-blur-sm">
                    {item.icon}
                  </div>
                  <p className="text-[10px] sm:text-xs font-bold text-primary-200 uppercase tracking-widest mb-1.5">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    className="text-white font-medium hover:text-primary-100 transition-colors underline-offset-4 hover:underline text-sm sm:text-base break-all max-w-[240px] sm:max-w-none"
                  >
                    {item.value}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Divider + Address */}
            <div className="mt-8 sm:mt-12 pt-7 sm:pt-10 border-t border-white/10 flex justify-center">
              <div className="flex items-center gap-2.5 text-primary-100">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary-300 flex-shrink-0" />
                <p className="text-xs sm:text-sm font-medium">{t('contact.address')}</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
