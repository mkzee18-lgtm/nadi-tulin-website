import { ArrowUpRight } from 'lucide-react';

const GALLERY = [
  {
    title: 'Classic Floral Batik',
    tag: 'Sarong',
    img: 'https://images.pexels.com/photos/6313448/pexels-photo-6313448.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'Heritage Gold Motif',
    tag: 'Premium',
    img: 'https://images.pexels.com/photos/6313441/pexels-photo-6313441.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'Artisan at Work',
    tag: 'Craft',
    img: 'https://images.pexels.com/photos/6313434/pexels-photo-6313434.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'Vibrant Tropical',
    tag: 'Sarong',
    img: 'https://images.pexels.com/photos/6313433/pexels-photo-6313433.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'Traditional Patterns',
    tag: 'Textile',
    img: 'https://images.pexels.com/photos/6313441/pexels-photo-6313441.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
  {
    title: 'Contemporary Batik',
    tag: 'Fashion',
    img: 'https://images.pexels.com/photos/6313448/pexels-photo-6313448.jpeg?auto=compress&cs=tinysrgb&w=700',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="relative bg-gradient-to-b from-cream to-accent-100/40 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full bg-accent-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Gallery
          </span>
          <h2 className="reveal reveal-delay-1 mt-5 text-3xl font-semibold leading-tight tracking-tight text-primary sm:text-4xl lg:text-[2.75rem]">
            Our Batik Collection
          </h2>
          <p className="reveal reveal-delay-2 mt-4 text-base text-ink/70">
            A glimpse into the artistry and color of our premium batik textiles.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((item, i) => (
            <article
              key={`${item.title}-${i}`}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative overflow-hidden rounded-3xl shadow-card ring-1 ring-primary/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-soft`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-95" />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6">
                <span className="inline-flex rounded-full bg-accent-200/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary backdrop-blur">
                  {item.tag}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
              </div>

              <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-primary opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
