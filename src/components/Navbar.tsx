import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#product', label: 'Product' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#why', label: 'Why Us' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Over the hero (not scrolled) => transparent with light text.
  // After scroll => glass with dark text.
  const onHero = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 shadow-soft' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav('#home');
          }}
          className="flex items-center gap-2.5"
          aria-label="Nadi Tulin Enterprise home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-200 text-primary shadow-soft">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path d="M12 2c2.5 3.5 2.5 6 0 9.5C9.5 8 9.5 5.5 12 2Z" fill="currentColor" opacity="0.9" />
              <path d="M12 22c-2.5-3.5-2.5-6 0-9.5 2.5 4 2.5 6.5 0 9.5Z" fill="currentColor" opacity="0.6" />
              <circle cx="12" cy="12" r="2.2" fill="#8B4513" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className={`text-base font-semibold tracking-tight ${onHero ? 'text-white' : 'text-primary'}`}>
              Nadi Tulin
            </span>
            <span className={`text-[10px] font-medium uppercase tracking-[0.18em] ${onHero ? 'text-accent-200' : 'text-secondary'}`}>
              Enterprise
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className={`group relative text-sm font-medium transition-colors ${
                  onHero ? 'text-white/85 hover:text-white' : 'text-ink/80 hover:text-primary'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full bg-secondary transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="tel:+60192282166"
            className="inline-flex items-center gap-2 rounded-full bg-accent-200 px-5 py-2.5 text-sm font-semibold text-primary shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-300 hover:shadow-glow"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors lg:hidden ${
            onHero
              ? 'border border-white/20 bg-white/10 text-white'
              : 'border border-primary/15 bg-white/70 text-primary'
          }`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-all duration-400 lg:hidden ${
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="mx-4 mt-3 flex flex-col gap-1 rounded-3xl glass p-4 shadow-soft">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-ink/80 transition-colors hover:bg-accent/60 hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-1">
            <a
              href="tel:+60192282166"
              className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-medium text-white"
            >
              <Phone className="h-4 w-4" />
              Call +60 19-2282166
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
