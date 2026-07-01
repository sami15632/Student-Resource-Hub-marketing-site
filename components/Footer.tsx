import { SOCIAL_LINKS } from "@/lib/constants";

const PRODUCT_LINKS = [
  { label: "About", href: "#top" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] pt-16 pb-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="col-span-2 lg:col-span-1">
            <a href="#top" className="flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-signal to-echo grid place-items-center">
                <span className="text-[13px] font-display font-bold text-white">S</span>
              </span>
              <span className="font-display font-semibold text-[15px] text-ink">
                Student Resource Hub
              </span>
            </a>
            <p className="mt-4 text-sm text-mist leading-relaxed max-w-xs">
              Learn. Share. Grow. A free, student-built library of notes, exams,
              and projects from universities around the world.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-haze mb-4">
              Product
            </h4>
            <ul className="flex flex-col gap-3">
              {PRODUCT_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-mist hover:text-ink transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-haze mb-4">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-mist hover:text-ink transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-wider text-haze mb-4">
              Community
            </h4>
            <ul className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-mist hover:text-ink transition-colors"
                  >
                    <link.icon className="w-4 h-4" strokeWidth={2} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-haze">
            © {new Date().getFullYear()} Student Resource Hub. Built for students, by students.
          </p>
        </div>
      </div>
    </footer>
  );
}
