import { ArrowRight, Phone, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      {/* Premium batik background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/6313441/pexels-photo-6313441.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-primary-900/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent" />
        <div className="absolute inset-0 batik-pattern opacity-30" />
      </div>

      {/* Floating decorative shapes */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-secondary/30 blur-3xl animate-float-slow" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl animate-float" aria-hidden="true" />

      <div className="pointer-events-none absolute right-[8%] top-[22%] hidden lg:block animate-float" aria-hidden="true">
        <div className="h-24 w-24 rounded-full border-2 border-dashed border-accent/40" />
      </div>
      <div className="pointer-events-none absolute left-[6%] bottom-[18%] hidden lg:block animate-float-slow" aria-hidden="true">
        <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
          <path d="M60 10c14 18 14 34 0 50-14-16-14-32 0-50Z" fill="#F4E4C1" opacity="0.35" />
          <path d="M60 60c14 18 14 34 0 50-14-16-14-32 0-50Z" fill="#C58B3A" opacity="0.3" />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="reveal inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-accent-200 shadow-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-accent-300" />
            Malaysian Heritage · Premium Craft
          </span>

          <h1 className="reveal reveal-delay-1 mt-6 font-sans text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Nadi Tulin
            <span className="block bg-gradient-to-r from-accent-200 via-secondary to-accent-400 bg-clip-text text-transparent">
              Enterprise
            </span>
          </h1>

          <p className="reveal reveal-delay-2 mt-5 text-lg font-medium text-accent-200 sm:text-xl">
            Premium Malaysian Batik Sarong Supplier
          </p>

          <p className="reveal reveal-delay-3 mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/85 lg:mx-0">
            Authentic Malaysian batik products crafted with quality, tradition, and
            elegance — bringing the soul of Malaysian heritage to every thread.
          </p>

          <div className="reveal reveal-delay-4 mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-200 px-7 py-3.5 text-sm font-semibold text-primary shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-300 hover:shadow-glow sm:w-auto"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#product"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#product')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/20 sm:w-auto"
            >
              View Products
            </a>
          </div>

          <div className="reveal mt-10 flex items-center justify-center gap-8 lg:justify-start">
            {[
              { value: '100%', label: 'Authentic' },
              { value: 'Premium', label: 'Quality' },
              { value: 'Local', label: 'Crafted' },
            ].map((s) => (
              <div key={s.label} className="text-center lg:text-left">
                <p className="text-xl font-semibold text-accent-200">{s.value}</p>
                <p className="text-xs uppercase tracking-wider text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div className="reveal reveal-delay-2 relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-soft ring-1 ring-white/20">
            <img
              src="https://images.pexels.com/photos/6313448/pexels-photo-6313448.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Folded premium Malaysian batik sarong with vibrant traditional patterns"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>

          <div className="glass absolute -bottom-6 -left-4 hidden rounded-3xl p-4 shadow-soft sm:block animate-float">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary/20 text-secondary">
                <Sparkles className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-primary">Handcrafted</p>
                <p className="text-xs text-ink/60">Traditional technique</p>
              </div>
            </div>
          </div>

          <div className="glass absolute -right-4 top-10 hidden rounded-3xl p-4 shadow-soft sm:block animate-float-slow">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-primary">Order Now</p>
                <p className="text-xs text-ink/60">+60 19-2282166</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1440 90" className="w-full" preserveAspectRatio="none">
          <path d="M0 60 C 240 90 480 30 720 45 C 960 60 1200 90 1440 60 L1440 90 L0 90 Z" fill="#FAFAFA" />
        </svg>
      </div>
    </section>
  );
}
