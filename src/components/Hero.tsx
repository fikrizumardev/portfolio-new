import { ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-slate-50">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" style={{ animationDelay: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center md:text-left flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-3/5"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary-600 font-semibold text-sm mb-6 border border-primary-100">
              👋 Halo, selamat datang di portofolio saya
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Building Scalable <br/>
              <span className="gradient-text">Web & Infrastructure</span>
            </h1>
            <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              Fullstack Web Developer, DevOps Engineer, dan System Administrator. Fokus pada efisiensi sistem, stabilitas aplikasi, dan solusi web yang scalable.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#experience" className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                Lihat Pekerjaan
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-700 rounded-xl font-semibold border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all">
                Hubungi Saya
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 justify-center md:justify-start">
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Temukan saya di</span>
              <div className="flex gap-4">
                <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><GithubIcon size={24} /></a>
                <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors"><LinkedinIcon size={24} /></a>
                <a href="#" className="text-slate-400 hover:text-red-500 transition-colors"><Mail size={24} /></a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-2/5 mt-16 md:mt-0 hidden md:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-indigo-500 rounded-[2rem] transform rotate-3 scale-105 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Workspace" 
                className="relative rounded-[2rem] shadow-2xl object-cover h-[500px] w-full border-4 border-white"
              />
              
              <div className="absolute -bottom-6 -left-6 glass px-6 py-4 rounded-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="p-3 bg-green-100 rounded-full text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Tersedia</p>
                  <p className="text-xs text-slate-500">untuk proyek baru</p>
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
