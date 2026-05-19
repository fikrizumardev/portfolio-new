const GithubIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/60 text-slate-400 py-10 sm:py-14 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-display font-extrabold text-xl tracking-tight text-white mb-2">
              <span className="gradient-text">Fikri</span>
              <span className="text-slate-200">Zumar</span>
              <span className="text-primary-500">.</span>
            </div>
            <p className="text-xs text-slate-600">
              &copy; {year} Fikri Zumar. All rights reserved.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { href: '#', icon: <GithubIcon size={18} />, label: 'GitHub', hover: 'hover:bg-slate-700' },
              { href: 'https://www.linkedin.com/in/muhammad-fikri-azzumardi', icon: <LinkedinIcon size={18} />, label: 'LinkedIn', hover: 'hover:bg-blue-600' },
              { href: '#', icon: <TwitterIcon size={18} />, label: 'Twitter / X', hover: 'hover:bg-sky-500' },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className={`w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white ${social.hover} transition-all duration-200`}
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
