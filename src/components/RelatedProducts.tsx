import { ArrowUpRight } from 'lucide-react';

const PRODUCTS = [
  {
    title: 'Traditional Batik Sarong',
    desc: 'Classic hand-crafted sarongs featuring timeless Malaysian motifs.',
    img: 'https://images.pexels.com/photos/6313448/pexels-photo-6313448.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Printed Batik',
    desc: 'Beautifully printed batik fabrics with vibrant contemporary designs.',
    img: 'https://images.pexels.com/photos/6313434/pexels-photo-6313434.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Textile Products',
    desc: 'A range of premium textile goods for fashion and interior use.',
    img: 'https://images.pexels.com/photos/6313441/pexels-photo-6313441.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Fashion Accessories',
    desc: 'Batik-inspired accessories to complement any elegant wardrobe.',
    img: 'https://images.pexels.com/photos/6313433/pexels-photo-6313433.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function RelatedProducts() {
  return (
    <section id="related" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Related Products
          </span>
          <h2 className="reveal reveal-delay-1 mt-5 text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl lg:text-[2.75rem]">
            Explore Our Collection
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-base text-ink/70">
            Beyond our signature sarong — discover the full Nadi Tulin range.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <article
              key={p.title}
              className={`reveal reveal-delay-${i + 1} group overflow-hidden rounded-3xl glass shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-soft`}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-primary opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
