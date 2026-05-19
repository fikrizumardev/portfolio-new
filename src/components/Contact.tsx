import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactItems = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'muhammad.fikri.azzumardi@gmail.com',
      href: 'mailto:muhammad.fikri.azzumardi@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: t('contact.phone'),
      value: '+62 896-1203-2599',
      href: 'tel:+6289612032599',
    },
  ];

  return (
    <section
      id="contact"
      className="py-28 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300"
    >
      {/* Ambient blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-200 dark:bg-primary-900/30 rounded-full opacity-20 filter blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/30 rounded-full opacity-20 filter blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-label mb-4 inline-flex">{t('contact.subtitle')}</span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed">
            {t('contact.desc')}
          </p>
        </motion.div>

        {/* ── Contact Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-indigo-700 dark:from-primary-700 dark:via-primary-800 dark:to-indigo-800" />

          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/[0.03] rounded-full" />

          <div className="relative z-10 p-10 lg:p-16">
            {/* Contact items */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
              {contactItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 bg-white/10 group-hover:bg-white/20 transition-colors rounded-2xl flex items-center justify-center mb-5 text-white shadow-lg backdrop-blur-sm">
                    {item.icon}
                  </div>
                  <p className="text-xs font-bold text-primary-200 uppercase tracking-widest mb-2">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    className="text-white font-medium hover:text-primary-100 transition-colors underline-offset-4 hover:underline break-all text-sm md:text-base"
                  >
                    {item.value}
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="mt-12 pt-10 border-t border-white/10 flex justify-center">
              <div className="flex items-center gap-3 text-primary-100">
                <MapPin className="w-5 h-5 text-primary-300 flex-shrink-0" />
                <p className="text-sm font-medium">{t('contact.address')}</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
