import { useEffect, useRef, useState } from 'react';

type Stat = { value: number; suffix: string; label: string };

const STATS: Stat[] = [
  { value: 10, suffix: '+', label: 'Years of Craft' },
  { value: 5000, suffix: '+', label: 'Sarongs Supplied' },
  { value: 15, suffix: '+', label: 'Countries Shipped' },
  { value: 98, suffix: '%', label: 'Happy Customers' },
];

function useCountUp(target: number, durationMs = 1800, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / durationMs, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, durationMs, start]);

  return count;
}

function formatNumber(n: number) {
  return n.toLocaleString('en-US');
}

function StatCard({ stat, index, active }: { stat: Stat; index: number; active: boolean }) {
  const count = useCountUp(stat.value, 1800, active);
  return (
    <div
      className={`reveal reveal-delay-${index + 1} group relative overflow-hidden rounded-3xl glass p-8 text-center shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-soft`}
    >
      <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-secondary/15 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
      <p className="relative bg-gradient-to-br from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
        {formatNumber(count)}
        <span className="text-secondary">{stat.suffix}</span>
      </p>
      <p className="relative mt-2 text-sm font-medium uppercase tracking-wider text-ink/65">
        {stat.label}
      </p>
    </div>
  );
}

export default function Statistics() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative -mt-2 py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
