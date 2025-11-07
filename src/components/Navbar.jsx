import { useState, useEffect } from 'react';
import { Menu, X, Rocket, User, FolderGit, Layers, Mail } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home', icon: Rocket },
  { href: '#about', label: 'About', icon: User },
  { href: '#projects', label: 'Projects', icon: FolderGit },
  { href: '#tech', label: 'Tech', icon: Layers },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors ${
      scrolled ? 'bg-black/60 backdrop-blur-md' : 'bg-transparent'
    }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_30px_6px_rgba(16,185,129,0.6)]"></div>
          <span className="text-white font-semibold tracking-wide">MyPortfolio</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={href}
              href={href}
              className="text-sm text-gray-200/90 hover:text-emerald-400 px-3 py-2 rounded-md transition-colors flex items-center gap-2"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-gray-200"
          aria-label="Toggle Menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-4 py-2 grid">
            {links.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-gray-200 py-2 hover:text-emerald-400"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
      <div aria-hidden className="h-px w-full bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
    </header>
  );
}
