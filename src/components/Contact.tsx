import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Decorative background vectors */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-200 dark:bg-primary-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten opacity-20 filter blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten opacity-20 filter blur-3xl"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-base font-semibold text-primary-600 dark:text-primary-400 tracking-wide uppercase">Kontak</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Mari Berkolaborasi
          </p>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            Tertarik untuk bekerja sama, memiliki pertanyaan, atau sekadar ingin menyapa? Hubungi saya melalui kanal di bawah ini.
          </p>
        </motion.div>

        <div className="bg-primary-600 dark:bg-primary-700 rounded-3xl shadow-xl overflow-hidden p-10 lg:p-16 text-white relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white dark:bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white dark:bg-white opacity-5 rounded-full -ml-24 -mb-24"></div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 relative z-10">
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-primary-500 dark:bg-primary-600 group-hover:bg-primary-400 dark:group-hover:bg-primary-500 transition-colors rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Mail className="w-8 h-8" />
              </div>
              <p className="text-sm text-primary-200 dark:text-primary-300 font-semibold mb-2 uppercase tracking-wider">Email</p>
              <a href="mailto:muhammad.fikri.azzumardi@gmail.com" className="text-xl font-medium hover:underline decoration-white underline-offset-8 break-all">muhammad.fikri.azzumardi@gmail.com</a>
            </div>
            
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-primary-500 dark:bg-primary-600 group-hover:bg-primary-400 dark:group-hover:bg-primary-500 transition-colors rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Phone className="w-8 h-8" />
              </div>
              <p className="text-sm text-primary-200 dark:text-primary-300 font-semibold mb-2 uppercase tracking-wider">Telepon / WhatsApp</p>
              <a href="tel:+6289612032599" className="text-xl font-medium hover:underline decoration-white underline-offset-8">+62 896-1203-2599</a>
            </div>

          </div>
          
          <div className="mt-12 pt-12 border-t border-primary-500/50 dark:border-primary-600/50 flex flex-col items-center text-center relative z-10">
             <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary-300 dark:text-primary-400" />
                <p className="text-lg text-primary-100 dark:text-primary-200">Gresik, Jawa Timur, Indonesia</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
