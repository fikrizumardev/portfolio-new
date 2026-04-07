import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import myPhoto from '../assets/my-photo.png';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-200 dark:bg-primary-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-200 dark:bg-indigo-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-sky-200 dark:bg-sky-900/30 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center md:text-left flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-3/5"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-semibold text-sm mb-6 border border-primary-100 dark:border-primary-800">
              👋 Halo, saya Muh. Fikri Azzumardi
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
              Building Scalable <br/>
              <span className="gradient-text">Web & Infrastructure</span>
            </h1>

            {/* Mobile Image */}
            <div className="md:hidden w-full my-10">
              <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[400px]">
                <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/50 rounded-[2rem] transform -rotate-3 scale-105"></div>
                <div className="relative bg-gradient-to-b from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-[2rem] overflow-hidden border-[5px] border-white dark:border-slate-700 shadow-xl h-[380px] sm:h-[450px] flex items-end justify-center pt-8">
                  <img src={myPhoto} alt="My Profile" className="w-[100%] h-full object-contain object-bottom drop-shadow-[0_15px_15px_rgba(0,0,0,0.15)]" />
                </div>
                <div className="absolute -bottom-5 -left-2 sm:-left-4 glass dark:glass-dark px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl sm:rounded-2xl flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 shadow-sm">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div className="text-left">
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100 leading-tight">Tersedia</p>
                    <p className="text-[10px] sm:text-sm text-slate-500 dark:text-slate-400">untuk proyek baru</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Fullstack Web Developer, DevOps Engineer, dan System Administrator. Fokus pada efisiensi sistem, stabilitas aplikasi, dan solusi web yang scalable.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#experience" className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 dark:bg-primary-500 text-white rounded-xl font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Lihat Pekerjaan
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="group flex items-center justify-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl font-semibold border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
                Hubungi Saya
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 justify-center md:justify-start">
              <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Temukan saya di</span>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-200 transition-colors"><GithubIcon size={24} /></a>
                <a href="https://www.linkedin.com/in/muhammad-fikri-azzumardi" className="text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><LinkedinIcon size={24} /></a>
                <a href="mailto:muhammad.fikri.azzumardi@gmail.com" className="text-slate-400 dark:text-slate-500 hover:text-red-500 dark:hover:text-red-400 transition-colors"><Mail size={24} /></a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-2/5 mt-16 md:mt-0 w-full hidden md:block"
          >
            <div className="relative mx-auto w-full max-w-[400px]">
              {/* Back tilted shape */}
              <div className="absolute inset-0 bg-indigo-100 dark:bg-indigo-900/50 rounded-[2.5rem] transform -rotate-3 scale-105 transition-transform duration-500 hover:rotate-0"></div>
              
              {/* Inner shape with gradient and photo */}
              <div className="relative bg-gradient-to-b from-blue-100 to-indigo-100 dark:from-blue-900/50 dark:to-indigo-900/50 rounded-[2.5rem] overflow-hidden border-[6px] border-white dark:border-slate-700 shadow-xl h-[450px] flex items-end justify-center pt-8">
                <img 
                  src={myPhoto} 
                  alt="My Profile" 
                  className="w-[100%] h-full object-contain object-bottom drop-shadow-[0_15px_15px_rgba(0,0,0,0.15)]"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-8 glass dark:glass-dark px-5 py-3 rounded-2xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 shadow-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-tight">Tersedia</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">untuk proyek baru</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
