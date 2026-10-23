import Link from "next/link";
import { Flower2, Menu } from "lucide-react";
const links = [
  { href: "/", label: "Beranda" },
  { href: "/jelajahi", label: "Jelajahi" },
  { href: "/assistant", label: "AI Assistant" },
  { href: "/tentang", label: "Tentang" },
];
export default function Navbar() {
  return (
    <header className="site-nav">
      <Link href="/" className="brand">
        <span className="brand-mark">
          <Flower2 size={25} />
        </span>
        <span>
          <strong>BudayaKita</strong>
          <small>Jelajah, Kenal, Lestarikan</small>
        </span>
      </Link>
      <nav>
        {links.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
          </Link>
        ))}
      </nav>
      <Link className="nav-cta" href="/jelajahi">
        Mulai Jelajahi <span>↗</span>
      </Link>
      <details className="mobile-menu">
        <summary aria-label="Buka menu">
          <Menu />
        </summary>
        <div>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </div>
      </details>
    </header>
  );
}
