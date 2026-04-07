import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'id' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  'nav.home': { id: 'Beranda', en: 'Home' },
  'nav.profile': { id: 'Profil', en: 'Profile' },
  'nav.experience': { id: 'Pengalaman', en: 'Experience' },
  'nav.skills': { id: 'Keahlian', en: 'Skills' },
  'nav.contact': { id: 'Kontak', en: 'Contact' },
  
  'hero.greeting': { id: '👋 Halo, saya Muh. Fikri Azzumardi', en: '👋 Hello, I am Muh. Fikri Azzumardi' },
  'hero.title.1': { id: 'Building Scalable', en: 'Building Scalable' },
  'hero.title.2': { id: 'Web & Infrastructure', en: 'Web & Infrastructure' },
  'hero.status.title': { id: 'Tersedia', en: 'Available' },
  'hero.status.desc': { id: 'untuk proyek baru', en: 'for new projects' },
  'hero.description': { 
    id: 'Fullstack Web Developer, DevOps Engineer, dan System Administrator. Fokus pada efisiensi sistem, stabilitas aplikasi, dan solusi web yang scalable.', 
    en: 'Fullstack Web Developer, DevOps Engineer, and System Administrator. Focused on system efficiency, application stability, and scalable web solutions.' 
  },
  'hero.btn.work': { id: 'Lihat Pekerjaan', en: 'View Work' },
  'hero.btn.contact': { id: 'Hubungi Saya', en: 'Contact Me' },

  'about.subtitle': { id: 'Profil Singkat', en: 'Short Profile' },
  'about.title': { id: 'Sinergi Antara Development & Infrastruktur', en: 'Synergy Between Development & Infrastructure' },
  'about.p1.1': { id: 'Seorang ', en: 'A ' },
  'about.p1.strong': { id: 'Fullstack Web Developer', en: 'Fullstack Web Developer' },
  'about.p1.2': { id: ' dengan pengalaman kerja 3 tahun dalam pengembangan aplikasi berbasis Laravel, manajemen server, dan implementasi DevOps.', en: ' with 3 years of experience in developing Laravel-based applications, server management, and DevOps implementation.' },
  'about.p2': { id: 'Saya terbiasa mengelola deployment, virtualisasi server menggunakan Proxmox, serta integrasi API untuk kebutuhan sistem bisnis yang kompleks.', en: 'I am accustomed to managing deployments, server virtualization using Proxmox, and API integration for complex business system needs.' },
  'about.p3': { id: 'Mampu bekerja secara mandiri maupun dalam tim, dengan fokus pada efisiensi sistem, stabilitas aplikasi, dan pengembangan solusi berbasis web yang scalable.', en: 'Able to work independently or in a team, with a focus on system efficiency, application stability, and scalable web-based solution development.' },
  'about.stats.years': { id: 'Tahun', en: 'Years of' },
  'about.stats.exp': { id: 'Pengalaman', en: 'Experience' },
  'about.stats.projects': { id: 'Proyek', en: 'Projects' },
  'about.stats.completed': { id: 'Diselesaikan', en: 'Completed' },
  'about.card1.title': { id: 'Web Development', en: 'Web Development' },
  'about.card1.desc': { id: 'Membangun aplikasi web responsif dan dinamis, dengan fokus pada PHP dan Laravel.', en: 'Building responsive and dynamic web applications, focusing on PHP and Laravel.' },
  'about.card2.title': { id: 'Server Management', en: 'Server Management' },
  'about.card2.desc': { id: 'Instalasi dan konfigurasi server Linux (Nginx/Apache), DNS, dan keamanan jaringan.', en: 'Installation and configuration of Linux servers (Nginx/Apache), DNS, and network security.' },
  'about.card3.title': { id: 'DevOps & Virtualization', en: 'DevOps & Virtualization' },
  'about.card3.desc': { id: 'Virtualisasi menggunakan Proxmox VE dan pengelolaan proses deployment.', en: 'Virtualization using Proxmox VE and managing the deployment process.' },

  'portfolio.subtitle': { id: 'Pengalaman & Portofolio', en: 'Experience & Portfolio' },
  'portfolio.title': { id: 'Proyek yang Pernah Dikerjakan', en: 'Projects Undertaken' },
  'portfolio.p1.title': { id: 'Sistem FrontAccounting', en: 'FrontAccounting System' },
  'portfolio.p1.role': { id: 'Backend & ERP Customization', en: 'Backend & ERP Customization' },
  'portfolio.p1.desc': { id: 'Mengembangkan dan menyesuaikan fitur pada sistem FrontAccounting berbasis PHP sesuai dengan kebutuhan bisnis dan efisiensi operasional.', en: 'Developing and customizing features on the PHP-based FrontAccounting system according to business needs and operational efficiency.' },
  'portfolio.p2.title': { id: 'SMAN 1 Rancabungur Bogor', en: 'SMAN 1 Rancabungur Bogor' },
  'portfolio.p2.role': { id: 'System Administrator', en: 'System Administrator' },
  'portfolio.p2.desc': { id: 'Mengelola instalasi dan operasional virtualisasi server berbasis Proxmox untuk mendukung infrastruktur IT sekolah.', en: 'Managing the installation and operations of Proxmox-based server virtualization to support school IT infrastructure.' },
  'portfolio.p3.title': { id: 'SMAN 2 Cibinong Bogor', en: 'SMAN 2 Cibinong Bogor' },
  'portfolio.p3.role': { id: 'IT Infrastructure Maintenance', en: 'IT Infrastructure Maintenance' },
  'portfolio.p3.desc': { id: 'Melakukan manajemen server dan backup rutin pada infrastruktur secara berkala guna memastikan tidak ada data yang hilang.', en: 'Performing regular server management and routine backups on the infrastructure periodically to ensure no data is lost.' },
  'portfolio.p4.title': { id: 'Platform Lazismu Gresik', en: 'Lazismu Gresik Platform' },
  'portfolio.p4.role': { id: 'Fullstack Developer', en: 'Fullstack Developer' },
  'portfolio.p4.desc': { id: 'Mengembangkan platform fundraising modern berbasis Laravel untuk mempermudah proses donasi dari masyarakat.', en: 'Developing a modern Laravel-based fundraising platform to facilitate the donation process from the public.' },
  'portfolio.p5.title': { id: 'WordPress Development', en: 'WordPress Development' },
  'portfolio.p5.role': { id: 'Web Developer', en: 'Web Developer' },
  'portfolio.p5.desc': { id: 'Membangun, mengelola, dan mengoptimalkan website berbasis WordPress untuk berbagai kebutuhan klien.', en: 'Building, managing, and optimizing WordPress-based websites for various client needs.' },
  'portfolio.p6.title': { id: 'Domain & DNS Security', en: 'Domain & DNS Security' },
  'portfolio.p6.role': { id: 'Network Security Guard', en: 'Network Security Guard' },
  'portfolio.p6.desc': { id: 'Mengelola domain, DNS, dan menerapkan keamanan dasar menggunakan layanan Cloudflare dan sistem tunneling.', en: 'Managing domains, DNS, and implementing basic security using Cloudflare services and tunneling systems.' },

  'skills.subtitle': { id: 'Keahlian & Teknologi', en: 'Skills & Technologies' },
  'skills.title': { id: 'Kemampuan Utama', en: 'Core Abilities' },
  'skills.c1': { id: 'Backend & Framework', en: 'Backend & Framework' },
  'skills.c2': { id: 'Frontend & UI', en: 'Frontend & UI' },
  'skills.c3': { id: 'Server & DevOps', en: 'Server & DevOps' },
  'skills.c4': { id: 'Content Management', en: 'Content Management' },
  'skills.c5': { id: 'Tools & Lainnya', en: 'Tools & Others' },
  'skills.t1': { id: 'Manajemen Proyek', en: 'Project Management' },
  'skills.t2': { id: 'Manajemen Tim', en: 'Team Management' },

  'contact.subtitle': { id: 'Kontak', en: 'Contact' },
  'contact.title': { id: 'Mari Berkolaborasi', en: 'Let\'s Collaborate' },
  'contact.desc': { id: 'Tertarik untuk bekerja sama, memiliki pertanyaan, atau sekadar ingin menyapa? Hubungi saya melalui kanal di bawah ini.', en: 'Interested in working together, have a question, or simply want to say hello? Reach out to me through the channels below.' },
  'contact.phone': { id: 'Telepon / WhatsApp', en: 'Phone / WhatsApp' },
  'contact.address': { id: 'Gresik, Jawa Timur, Indonesia', en: 'Gresik, East Java, Indonesia' }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language') as Language;
      if (savedLanguage === 'en' || savedLanguage === 'id') {
        return savedLanguage;
      }
    }
    // Default to id
    return 'id';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'id' ? 'en' : 'id');
  };

  const t = (key: string): string => {
    if (!translations[key]) return key;
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
