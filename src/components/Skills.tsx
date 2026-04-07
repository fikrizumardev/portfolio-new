import { motion } from 'framer-motion';
import { Terminal, Layout, ServerCrash, AlignRight, Workflow } from 'lucide-react';

const skillCategories = [
  {
    title: "Backend & Framework",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["PHP", "Laravel", "Livewire", "REST API Integration"],
    color: "bg-indigo-50 text-indigo-600 border-indigo-200"
  },
  {
    title: "Frontend & UI",
    icon: <Layout className="w-5 h-5" />,
    skills: ["Tailwind CSS", "Alpine.js", "Responsive Web Design", "React"],
    color: "bg-pink-50 text-pink-600 border-pink-200"
  },
  {
    title: "Server & DevOps",
    icon: <ServerCrash className="w-5 h-5" />,
    skills: ["Proxmox VE", "Linux Server Administration", "Nginx/Apache", "Cloudflare"],
    color: "bg-emerald-50 text-emerald-600 border-emerald-200"
  },
  {
    title: "Content Management",
    icon: <AlignRight className="w-5 h-5" />,
    skills: ["WordPress", "CMS Optimization"],
    color: "bg-blue-50 text-blue-600 border-blue-200"
  },
  {
    title: "Tools & Lainnya",
    icon: <Workflow className="w-5 h-5" />,
    skills: ["Git / Version Control", "Jira & Confluence", "Manajemen Proyek", "Manajemen Tim"],
    color: "bg-orange-50 text-orange-600 border-orange-200"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-base font-semibold text-primary-600 dark:text-primary-400 tracking-wide uppercase">Keahlian & Teknologi</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Kemampuan Utama
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white dark:bg-slate-700/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-600 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2.5 rounded-lg border ${category.color}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx} 
                    className="px-4 py-2 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full border border-slate-200 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
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
