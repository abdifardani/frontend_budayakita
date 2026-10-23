import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Flower2,
  Instagram,
  Music2,
  Sparkles,
  Youtube,
} from "lucide-react";
import { getCultures } from "@/lib/api";

const categories = [
  {
    number: "01",
    title: "Seni & Pertunjukan",
    detail: "Tari, musik, dan ekspresi tradisi",
    image:
      "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=900&q=88",
  },
  {
    number: "02",
    title: "Kuliner Khas",
    detail: "Rasa yang menyimpan cerita",
    image: "/images/kuliner.png",
  },
  {
    number: "03",
    title: "Kriya & Busana",
    detail: "Motif, kain, dan keterampilan",
    image: "/images/songket.png",
  },
  {
    number: "04",
    title: "Sejarah & Bahasa",
    detail: "Jejak masa lalu dan tutur lokal",
    image: "/images/limas.png",
  },
];

const places = [
  { name: "Pagaralam", x: 16, y: 32 },
  { name: "Musi Banyuasin", x: 62, y: 14 },
  { name: "Palembang", x: 51, y: 49 },
  { name: "Muara Enim", x: 28, y: 64 },
  { name: "OKU", x: 70, y: 72 },
];

export default async function Home() {
  const cultures = await getCultures();
  const limas = cultures.find((item) => /limas/i.test(item.title));
  const featured = limas ?? cultures[0];
  const cardItems = cultures
    .filter((item) => item.slug !== featured?.slug)
    .slice(0, 2);

  return (
    <main className="bk-home">
      {/* HERO */}
      <section className="bk-hero">
        <div className="bk-hero-image" />
        <div className="bk-hero-grain" />
        <div className="bk-hero-content">
          <div className="bk-eyebrow">
            <i /> WARISAN SUMATERA SELATAN
          </div>
          <h1>
            Budaya yang hidup.
            <br />
            <em>Cerita yang abadi.</em>
          </h1>
          <p>
            Menjelajahi kekayaan budaya Sumatera Selatan—dari tradisi yang
            diwariskan, rasa yang dikenang, hingga kisah yang membentuk kita.
          </p>
          <div className="bk-hero-buttons">
            <Link href="/jelajahi" className="bk-button bk-button-gold">
              Mulai menjelajah <ArrowUpRight size={16} />
            </Link>
            <Link href="/tentang" className="bk-button bk-button-outline">
              Kenali misi kami <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
        <div className="bk-hero-index">
          <span>01 / 04</span>
          <i />
          <span>PALEMBANG · SUMATERA SELATAN</span>
        </div>
        <div className="bk-hero-side">CULTURE IS A LIVING LEGACY</div>
      </section>

      {/* INTRO */}
      <section className="bk-intro">
        <div className="bk-intro-pattern" />
        <div className="bk-intro-heading">
          <div className="bk-eyebrow bk-eyebrow-dark">
            <i /> LEBIH DARI SEKADAR WARISAN
          </div>
          <h2>
            Setiap budaya punya
            <br />
            <em>cerita untuk diceritakan.</em>
          </h2>
        </div>
        <div className="bk-intro-copy">
          <p>
            BudayaKita adalah ruang digital untuk mengenal, memahami, dan
            menjaga kekayaan budaya Sumatera Selatan dengan cara yang lebih
            dekat, menarik, dan mudah diakses.
          </p>
          <Link href="/jelajahi" className="bk-text-link">
            Temukan cerita budaya <ArrowUpRight size={15} />
          </Link>
        </div>
        <div className="bk-intro-illustration" aria-hidden="true" />
      </section>

      {/* CATEGORIES */}
      <section className="bk-categories">
        <div className="bk-section-head">
          <div>
            <div className="bk-eyebrow">
              <i /> JELAJAHI BERDASARKAN KATEGORI
            </div>
            <h2>
              Temukan sisi budaya
              <br />
              <em>yang memanggilmu.</em>
            </h2>
          </div>
          <p>
            Dari seni, kuliner, hingga sejarah—semua bagian dari identitas yang
            membentuk Sumatera Selatan.
          </p>
          <Link
            href="/jelajahi"
            className="bk-circle-link"
            aria-label="Lihat semua budaya"
          >
            <ArrowUpRight size={20} />
          </Link>
        </div>
        <div className="bk-category-grid">
          {categories.map((category) => (
            <Link
              href="/jelajahi"
              className="bk-category-card"
              key={category.number}
            >
              <div
                className="bk-category-image"
                style={{
                  backgroundImage: `linear-gradient(0deg,rgba(25,15,9,.93),rgba(25,15,9,0) 78%),url("${category.image}")`,
                }}
              />
              <div className="bk-category-content">
                <span>{category.number}</span>
                <h3>{category.title}</h3>
                <p>{category.detail}</p>
                <i>
                  <ArrowUpRight size={16} />
                </i>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="bk-stats">
        <div className="bk-stat">
          <Flower2 />
          <div>
            <strong>{Math.max(100, cultures.length)}+</strong>
            <b>Cerita Budaya</b>
            <small>Tersedia di platform</small>
          </div>
        </div>
        <div className="bk-stat">
          <Sparkles />
          <div>
            <strong>4</strong>
            <b>Kategori Utama</b>
            <small>Seni, kuliner, kriya, sejarah</small>
          </div>
        </div>
        <div className="bk-stat">
          <BookOpen />
          <div>
            <strong>1</strong>
            <b>Asisten AI</b>
            <small>Pembelajaran lebih interaktif</small>
          </div>
        </div>
        <div className="bk-stat">
          <span className="bk-infinity">∞</span>
          <div>
            <strong>∞</strong>
            <b>Warisan</b>
            <small>Untuk generasi mendatang</small>
          </div>
        </div>
      </section>

      {/* FEATURED STORY */}
      <section className="bk-featured">
        <div className="bk-featured-copy">
          <div className="bk-eyebrow">
            <i /> CERITA PILIHAN
          </div>
          <h2>
            Warisan yang dekat,
            <br />
            <em>makna yang mendalam.</em>
          </h2>
          <p>
            Temukan kisah-kisah budaya yang telah membentuk identitas Sumatera
            Selatan dari masa ke masa.
          </p>
          <Link href="/jelajahi" className="bk-button bk-button-gold">
            Jelajahi semua cerita <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="bk-featured-showcase">
          {featured ? (
            <Link
              href={`/budaya/${featured.slug}`}
              className="bk-featured-main"
            >
              <div
                className="bk-featured-photo"
                style={{
                  backgroundImage: `linear-gradient(
            0deg,
            rgba(20, 12, 8, 0.8),
            rgba(20, 12, 8, 0.05) 70%
          ), url("/images/limas.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />

              <span className="bk-featured-tag">
                {featured.category || "Sejarah"}
              </span>

              <div className="bk-featured-info">
                <div className="bk-mini-ornament">✿ ✿ ✿</div>
                <h3>{featured.title}</h3>
                <p>{featured.summary}</p>
              </div>
            </Link>
          ) : (
            <div
              className="bk-featured-main bk-featured-placeholder"
              style={{
                backgroundImage: `linear-gradient(
          0deg,
          rgba(20, 12, 8, 0.8),
          rgba(20, 12, 8, 0.05) 70%
        ), url("/images/limas.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <span className="bk-featured-tag">Sejarah</span>

              <div className="bk-featured-info">
                <div className="bk-mini-ornament">✿ ✿ ✿</div>
                <h3>Rumah Limas</h3>
                <p>Arsitektur tradisional khas Sumatera Selatan.</p>
              </div>
            </div>
          )}

          {cardItems.map((item, index) => (
            <Link
              key={item.slug}
              href={`/budaya/${item.slug}`}
              className={`bk-featured-peek bk-featured-peek-${index + 1}`}
              style={{
                backgroundImage: `linear-gradient(
          0deg,
          rgba(20, 12, 8, 0.85),
          transparent 80%
        ), url("/images/limas.png")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <span>{item.category}</span>
              <b>{item.title}</b>
            </Link>
          ))}

          <div className="bk-featured-controls">
            <span>
              01 / {String(Math.max(1, cultures.length)).padStart(2, "0")}
            </span>

            <i />

            <button type="button" aria-label="Cerita sebelumnya" disabled>
              <ArrowLeft size={16} />
            </button>

            <button type="button" aria-label="Cerita berikutnya" disabled>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* AI FEATURE */}
      <section className="bk-ai">
        <div className="bk-ai-art">
          <div className="bk-ai-woman" />
        </div>
        <div className="bk-ai-copy">
          <div className="bk-eyebrow bk-eyebrow-dark">
            <i /> KENALI LEBIH DALAM
          </div>
          <h2>
            Punya rasa ingin tahu?
            <br />
            <em>Tanyakan pada BudayaKita.</em>
          </h2>
          <p>
            Mulai percakapan tentang tradisi, sejarah, kuliner, dan makna budaya
            Sumatera Selatan bersama AI Culture Assistant.
          </p>
          <Link href="/assistant" className="bk-button bk-button-gold">
            Tanya AI Assistant <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* SOUTH SUMATRA EXPLORATION */}
      <section className="bk-region">
        <div className="bk-region-backdrop" />
        <div className="bk-region-copy">
          <div className="bk-eyebrow">
            <i /> JELAJAHI SUMATERA SELATAN
          </div>
          <h2>
            Lebih dari sekadar destinasi,
            <br />
            <em>ini tentang akar budaya.</em>
          </h2>
          <p>
            Temukan tempat, cerita, dan tradisi yang menjadikan Sumatera Selatan
            begitu istimewa.
          </p>
          <Link href="/jelajahi" className="bk-button bk-button-gold">
            Mulai menjelajah <ArrowUpRight size={16} />
          </Link>
        </div>
        <div
          className="bk-map"
          aria-label="Ilustrasi wilayah budaya Sumatera Selatan"
        >
          <div
            className="bk-map-shape"
            role="img"
            aria-label="Peta wilayah budaya Sumatera Selatan"
            style={{
              backgroundImage: 'url("/images/map.png")',
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
  
        </div>
      </section>

      {/* QUOTE */}
      <section className="bk-quote">
        <span className="bk-quote-mark">“</span>
        <blockquote>
          Budaya bukan hanya peninggalan,
          <br />
          <em>tetapi juga arah bagi masa depan.</em>
        </blockquote>
        <p>
          Dengan mengenal dan memahami budaya kita sendiri, kita ikut menjaga
          cerita yang akan terus hidup untuk generasi berikutnya.
        </p>
      </section>

      {/* NEWSLETTER */}
      <section className="bk-newsletter">
        <div className="bk-newsletter-icon">
          <Flower2 />
        </div>
        <div className="bk-newsletter-copy">
          <h3>Bersama, kita jaga budaya Sumatera Selatan.</h3>
          <p>
            Dapatkan cerita budaya terbaru, rekomendasi menarik, dan pembaruan
            dari BudayaKita langsung ke emailmu.
          </p>
        </div>
        <form className="bk-newsletter-form" action="mailto:" method="get">
          <label className="bk-sr-only" htmlFor="bk-email">
            Alamat email
          </label>
          <input id="bk-email" type="email" placeholder="Masukkan email kamu" />
          <button type="submit" aria-label="Kirim email">
            <ArrowUpRight size={19} />
          </button>
        </form>
      </section>

      {/* FOOTER BUILT INTO HOME TO MATCH THE REFERENCE */}
      <footer className="bk-footer">
        <div className="bk-footer-main">
          <Link href="/" className="bk-footer-brand">
            <Flower2 />
            <span>
              <b>BudayaKita</b>
              <small>Jelajah, Kenal, Lestarikan</small>
            </span>
          </Link>
          <div className="bk-footer-about">
            <p>
              Ruang digital untuk mengenal, memahami, dan menjaga kekayaan
              budaya Sumatera Selatan.
            </p>
          </div>
          <div className="bk-footer-col">
            <b>Navigasi</b>
            <Link href="/">Beranda</Link>
            <Link href="/jelajahi">Jelajahi</Link>
            <Link href="/assistant">AI Assistant</Link>
            <Link href="/tentang">Tentang</Link>
          </div>
          <div className="bk-footer-col">
            <b>Kategori</b>
            <Link href="/jelajahi">Seni & Pertunjukan</Link>
            <Link href="/jelajahi">Kuliner Khas</Link>
            <Link href="/jelajahi">Kriya & Busana</Link>
            <Link href="/jelajahi">Sejarah & Bahasa</Link>
          </div>
          <div className="bk-footer-col bk-social">
            <b>Ikuti Kami</b>
            <div>
              <Link href="https://instagram.com" aria-label="Instagram">
                <Instagram size={15} />
              </Link>
              <Link href="https://youtube.com" aria-label="YouTube">
                <Youtube size={15} />
              </Link>
              <Link href="https://tiktok.com" aria-label="TikTok">
                <Music2 size={15} />
              </Link>
            </div>
          </div>
        </div>
        <div className="bk-footer-bottom">
          <span>© 2026 BudayaKita. Semua hak dilindungi.</span>
          <div>
            <Link href="/tentang">Kebijakan Privasi</Link>
            <Link href="/tentang">Syarat & Ketentuan</Link>
            <Link href="/tentang">Kontak</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
