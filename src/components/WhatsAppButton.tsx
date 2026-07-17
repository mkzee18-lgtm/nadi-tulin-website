import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setTooltipOpen(true), 1200);
    const t2 = setTimeout(() => setTooltipOpen(false), 6000);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, [visible]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-8 opacity-0'
      }`}
    >
      {tooltipOpen && (
        <div className="relative max-w-[220px] rounded-2xl bg-white px-4 py-3 shadow-soft ring-1 ring-primary/10">
          <button
            type="button"
            onClick={() => setTooltipOpen(false)}
            className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white shadow-soft"
            aria-label="Close tooltip"
          >
            <X className="h-3.5 w-3.5" />
          </button>
          <p className="text-sm font-medium text-ink/80">
            Need help? Chat with us on WhatsApp!
          </p>
        </div>
      )}

      <a
        href="https://wa.me/60192282166"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-soft transition-all duration-300 hover:scale-110 hover:shadow-glow"
      >
        <MessageCircle className="h-6 w-6 transition-transform duration-300 group-hover:rotate-12" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" aria-hidden="true" />
      </a>
    </div>
  );
}
