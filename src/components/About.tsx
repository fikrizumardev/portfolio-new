import { motion } from 'framer-motion';
import { Server, Code, Layers } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <Code size={32} className="text-primary-500" />,
      title: "Web Development",
      desc: "Membangun aplikasi web responsif dan dinamis, dengan fokus pada PHP dan Laravel."
    },
    {
      icon: <Server size={32} className="text-indigo-500" />,
      title: "Server Management",
      desc: "Instalasi dan konfigurasi server Linux (Nginx/Apache), DNS, dan keamanan jaringan."
    },
    {
      icon: <Layers size={32} className="text-sky-500" />,
      title: "DevOps & Virtualization",
      desc: "Virtualisasi menggunakan Proxmox VE dan pengelolaan proses deployment."
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
          <h2 className="text-base font-semibold text-primary-600 dark:text-primary-400 tracking-wide uppercase">Profil Singkat</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Sinergi Antara Development & Infrastruktur
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
                Seorang <strong className="text-slate-800 dark:text-slate-200">Fullstack Web Developer</strong> dengan pengalaman kerja 3 tahun dalam pengembangan aplikasi berbasis Laravel, manajemen server, dan implementasi DevOps.
              </p>
              <p className="mb-6 leading-relaxed text-lg">
                Saya terbiasa mengelola deployment, virtualisasi server menggunakan Proxmox, serta integrasi API untuk kebutuhan sistem bisnis yang kompleks.
              </p>
              <p className="leading-relaxed text-lg">
                Mampu bekerja secara mandiri maupun dalam tim, dengan fokus pada efisiensi sistem, stabilitas aplikasi, dan pengembangan solusi berbasis web yang scalable.
              </p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-slate-100 dark:border-slate-700 grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-extrabold text-primary-600 dark:text-primary-400">3+</div>
                <div className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">Tahun<br/>Pengalaman</div>
              </div>
              <div>
                <div className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400">20+</div>
                <div className="mt-2 text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">Proyek<br/>Diselesaikan</div>
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
