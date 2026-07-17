import { ArrowRight } from 'lucide-react';

export default function Product() {
  return (
    <section id="product" className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 batik-pattern opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Featured Product
          </span>
          <h2 className="reveal reveal-delay-1 mt-5 text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl lg:text-[2.75rem]">
            Our Main Product
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-base text-ink/70">
            A signature offering that embodies the artistry of Malaysian batik.
          </p>
        </div>

        <div className="reveal reveal-delay-3 mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2.5rem] glass shadow-soft">
          <div className="grid items-center gap-0 md:grid-cols-2">
            {/* Image */}
            <div className="relative h-72 overflow-hidden sm:h-96 md:h-full">
              <img
                src="https://images.pexels.com/photos/6313441/pexels-photo-6313441.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Premium Malaysian batik sarong with vibrant traditional patterns"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent md:bg-gradient-to-r" />
            </div>

            {/* Content */}
            <div className="p-8 sm:p-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                Best Seller
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-primary sm:text-3xl">
                Batik Sarong
              </h3>
              <p className="mt-4 text-base leading-relaxed text-ink/75">
                Traditional Malaysian batik sarongs made with quality materials,
                vibrant colors, and authentic craftsmanship. Each piece reflects
                generations of textile artistry.
              </p>

              <ul className="mt-6 space-y-2.5">
                {['Vibrant traditional colors', 'Soft & durable fabric', 'Authentic handcrafted motifs'].map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm text-ink/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-glow"
              >
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
