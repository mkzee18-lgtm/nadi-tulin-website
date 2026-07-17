import { Facebook, Instagram, MessageCircle, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const QUICK_LINKS = [
  { href: '#about', label: 'About Us' },
  { href: '#product', label: 'Our Product' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#why', label: 'Why Choose Us' },
];

const SUPPORT_LINKS = [
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
  { href: '#location', label: 'Location' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-primary text-white">
      <div className="pointer-events-none absolute inset-0 batik-pattern opacity-20" aria-hidden="true" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/15">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
                  <path d="M12 2c2.5 3.5 2.5 6 0 9.5C9.5 8 9.5 5.5 12 2Z" fill="currentColor" opacity="0.9" />
                  <path d="M12 22c-2.5-3.5-2.5-6 0-9.5 2.5 4 2.5 6.5 0 9.5Z" fill="currentColor" opacity="0.6" />
                  <circle cx="12" cy="12" r="2.2" fill="#F4E4C1" />
                </svg>
              </span>
              <div className="leading-tight">
                <p className="text-base font-semibold">Nadi Tulin Enterprise</p>
                <p className="text-xs uppercase tracking-[0.18em] text-accent-300">
                  Premium Malaysian Batik Supplier
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              Authentic Malaysian batik products crafted with quality, tradition,
              and elegance — supplied locally and internationally.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Facebook, label: 'Facebook', href: '#' },
                { Icon: Instagram, label: 'Instagram', href: '#' },
                { Icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/60192282166' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-secondary hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">
              Quick Links
            </p>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(n.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-secondary transition-all duration-300 group-hover:w-4" />
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">
              Support
            </p>
            <ul className="mt-5 space-y-3">
              {SUPPORT_LINKS.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(n.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="group inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-secondary transition-all duration-300 group-hover:w-4" />
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-300">
              Get In Touch
            </p>
            <ul className="mt-5 space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                <span>
                  PT20347K, Taman Permint Perdana Fasa 3,<br />
                  Seberang Takir, Kuala Terengganu, Malaysia
                </span>
              </li>
              <li>
                <a
                  href="tel:+60192282166"
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 flex-shrink-0 text-secondary" />
                  +60 19-2282166
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 flex-shrink-0 text-secondary" />
                  Send a message
                </a>
              </li>
            </ul>

            <a
              href="https://wa.me/60192282166"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-white/60">
            © {year} Nadi Tulin Enterprise. All Rights Reserved.
          </p>
          <p className="text-xs text-white/50">
            Premium Malaysian Batik Supplier · Crafted with tradition
          </p>
        </div>
      </div>
    </footer>
  );
}
