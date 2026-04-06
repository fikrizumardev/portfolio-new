import { motion } from 'framer-motion';
import { LayoutGrid, Server, Shield, Globe, MonitorSmartphone, Database } from 'lucide-react';

const experiences = [
  {
    icon: <Database className="w-6 h-6 text-emerald-500" />,
    title: "Sistem FrontAccounting",
    role: "Backend & ERP Customization",
    desc: "Mengembangkan dan menyesuaikan fitur pada sistem FrontAccounting berbasis PHP sesuai dengan kebutuhan bisnis dan efisiensi operasional.",
    tags: ["PHP", "ERP", "Business Logic"],
    color: "bg-emerald-50 border-emerald-100"
  },
  {
    icon: <Server className="w-6 h-6 text-blue-500" />,
    title: "SMAN 1 Rancabungur Bogor",
    role: "System Administrator",
    desc: "Mengelola instalasi dan operasional virtualisasi server berbasis Proxmox untuk mendukung infrastruktur IT sekolah.",
    tags: ["Proxmox", "Virtualization", "Linux"],
    color: "bg-blue-50 border-blue-100"
  },
  {
    icon: <Shield className="w-6 h-6 text-red-500" />,
    title: "SMAN 2 Cibinong Bogor",
    role: "IT Infrastructure Maintenance",
    desc: "Melakukan manajemen server dan backup rutin pada infrastruktur secara berkala guna memastikan tidak ada data yang hilang.",
    tags: ["Server Management", "Backup", "Security"],
    color: "bg-red-50 border-red-100"
  },
  {
    icon: <Globe className="w-6 h-6 text-orange-500" />,
    title: "Platform Lazismu Gresik",
    role: "Fullstack Developer",
    desc: "Mengembangkan platform fundraising modern berbasis Laravel untuk mempermudah proses donasi dari masyarakat.",
    tags: ["Laravel", "PHP", "Tailwind CSS"],
    color: "bg-orange-50 border-orange-100"
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-indigo-500" />,
    title: "WordPress Development",
    role: "Web Developer",
    desc: "Membangun, mengelola, dan mengoptimalkan website berbasis WordPress untuk berbagai kebutuhan klien.",
    tags: ["WordPress", "CMS", "SEO"],
    color: "bg-indigo-50 border-indigo-100"
  },
  {
    icon: <LayoutGrid className="w-6 h-6 text-sky-500" />,
    title: "Domain & DNS Security",
    role: "Network Security Guard",
    desc: "Mengelola domain, DNS, dan menerapkan keamanan dasar menggunakan layanan Cloudflare dan sistem tunneling.",
    tags: ["Cloudflare", "DNS", "Tunneling"],
    color: "bg-sky-50 border-sky-100"
  }
];

const Portfolio = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Pengalaman & Portofolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Proyek yang Pernah Dikerjakan
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
              className={`p-8 rounded-3xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white border-slate-100`}
            >
              <div className="flex items-start gap-5">
                <div className={`p-4 rounded-2xl flex-shrink-0 ${exp.color}`}>
                  {exp.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-primary-600 mb-1">{exp.role}</div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{exp.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-5">{exp.desc}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-lg">
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
