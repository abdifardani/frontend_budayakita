"use client";

import { useEffect, useMemo, useState } from "react";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Search,
  LoaderCircle,
} from "lucide-react";

import CultureCard from "@/components/CultureCard";
import { API_URL, type Culture } from "@/lib/api";

const categories = [
  "Semua",
  "Seni Pertunjukan",
  "Kuliner",
  "Kerajinan",
  "Arsitektur",
  "Bahasa Daerah",
  "Sejarah",
];

const photos = {
  hero: "/images/amperaj.jpg",
  songket:
    "/images/songket.png",
  musi: "/images/amperaj.png",
  river:
    "/images/limas.png",
  bridge:
    "/images/ampera.png",
  village:
    "/images/bunderan.jpg",
};

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`jel-eyebrow ${light ? "is-light" : ""}`}>
      <span />
      {children}
    </div>
  );
}

function Gallery({
  images,
  title,
}: {
  images: { src: string; alt: string }[];
  title: string;
}) {
  return (
    <div className="jel-gallery">
      <div className="jel-gallery-images">
        {images.map((image) => (
          <div className="jel-gallery-image" key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>

      <div className="jel-gallery-caption">
        <span className="jel-gallery-line" />
        <div>
          <strong>{title}</strong>
          <p>
            Setiap detail menyimpan cerita tentang keterampilan, nilai, dan
            kehidupan masyarakat Sumatera Selatan.
          </p>
        </div>
        <span className="jel-gallery-arrow" aria-hidden="true">
          <ArrowRight size={19} />
        </span>
      </div>
    </div>
  );
}

export default function ExplorePage() {
  const [items, setItems] = useState<Culture[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/cultures`)
      .then((response) => {
        if (!response.ok) throw new Error("API tidak tersedia");
        return response.json();
      })
      .then((json) => setItems(json.data || []))
      .catch(() =>
        setError(
          "Belum dapat terhubung ke API. Pastikan backend aktif dan MongoDB terhubung.",
        ),
      )
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(
    () =>
      items.filter(
        (item) =>
          (category === "Semua" || item.category === category) &&
          `${item.title} ${item.summary} ${item.category}`
            .toLowerCase()
            .includes(search.toLowerCase()),
      ),
    [items, search, category],
  );

  return (
    <main className="jel-page">
      {/* HERO */}
      <section
        className="jel-hero"
        style={{ backgroundImage: `url("${photos.hero}")` }}
      >
        <div className="jel-hero-shade" />
        <div className="jel-hero-pattern" />

        <div className="jel-hero-content">
          <Eyebrow light>JELAJAHI</Eyebrow>

          <h1>
            Cerita Budaya
            <br />
            <em>Sumatera Selatan.</em>
          </h1>

          <p>
            Dari rumah adat yang megah, kuliner yang menggugah selera, hingga
            tradisi yang penuh makna—temukan kisah nyata yang membentuk
            identitas Sumatera Selatan.
          </p>

          <a className="jel-scroll" href="#rumah-limas">
            <span className="jel-scroll-icon">
              <ArrowDown size={18} />
            </span>
            Scroll untuk menjelajah
          </a>
        </div>

        <div className="jel-hero-note">
          <span />
          <p>
            Setiap sudut Sumatera Selatan menyimpan cerita yang layak untuk
            dikenal, dipelajari, dan dilestarikan.
          </p>
        </div>

        <div className="jel-hero-index">01 — WARISAN BUDAYA NUSANTARA</div>
      </section>

      {/* RUMAH LIMAS */}
      <section
        className="jel-story jel-story-light jel-story-limas"
        id="rumah-limas"
      >
        <div className="jel-story-pattern jel-pattern-left" />

        <div className="jel-story-copy">
          <Eyebrow>01 &nbsp; — &nbsp; ARSITEKTUR TRADISIONAL</Eyebrow>

          <h2>
            Rumah Limas
            <br />
            Palembang
          </h2>

          <h3>Ruang hidup yang sarat filosofi dan nilai kehidupan.</h3>

          <p>
            Rumah Limas merupakan rumah adat khas Sumatera Selatan yang dikenal
            dengan bentuk atap menyerupai limas dan lantai bertingkat. Lebih
            dari sekadar tempat tinggal, rumah ini mencerminkan tata kehidupan,
            penghormatan kepada tamu, serta nilai kebersamaan dalam masyarakat
            Palembang.
          </p>
        </div>

        <div className="jel-story-visual">
          <img
            src="/images/limas.png"
            alt="Interior rumah dengan detail arsitektur"
          />

          <div className="jel-photo-note">
            <span>ARSITEKTUR WARISAN</span>
            <p>
              Bentuk ruang dan susunan rumah menyimpan makna sosial yang
              diwariskan lintas generasi.
            </p>
          </div>
        </div>
      </section>

      {/* PEMPEK */}
      <section className="jel-story jel-story-dark jel-story-food">
        <div className="jel-dark-pattern" />

        <div className="jel-food-photo">
          <img
            src="/images/kuliner.png"
            alt="Hidangan makanan"
            loading="lazy"
          />

          <span className="jel-image-number">02 / KULINER</span>
        </div>

        <div className="jel-dark-copy">
          <Eyebrow light>02 &nbsp; — &nbsp; KULINER KHAS</Eyebrow>

          <h2>
            Pempek Palembang
            <br />
            <em>Rasa yang menyatukan cerita.</em>
          </h2>

          <p>
            Pempek merupakan ikon kuliner Palembang yang terbuat dari ikan dan
            tepung sagu, kemudian disajikan bersama kuah cuko dengan perpaduan
            rasa asam, manis, dan pedas. Lebih dari sekadar makanan, pempek
            telah menjadi bagian dari identitas dan kebanggaan masyarakat
            Sumatera Selatan.
          </p>
        </div>
      </section>

      {/* SONGKET */}
      {/* SONGKET */}
      <section className="jel-story jel-story-light jel-story-songket">
        <div className="jel-story-pattern jel-pattern-left" />

        <div className="jel-story-copy">
          <Eyebrow>03 &nbsp; — &nbsp; KRIYA &amp; BUSANA</Eyebrow>

          <h2>Songket Palembang</h2>

          <h3>Kain penuh makna dan kemegahan.</h3>

          <p>
            Songket Palembang merupakan kain tradisional yang dikenal melalui
            tenunan benang emas atau perak dengan motif khas. Proses
            pembuatannya membutuhkan ketelitian dan keterampilan tinggi. Kain
            ini kerap hadir dalam upacara adat, perayaan, serta berbagai momen
            penting masyarakat Sumatera Selatan.
          </p>
        </div>

        <div className="jel-story-visual jel-songket-visual">
          <img
            src="/images/songket.png"
            alt="Kain dan tekstil"
            loading="lazy"
          />

          <div className="jel-photo-note">
            <span>WARISAN KERAJINAN</span>
            <p>
              Setiap motif merekam kreativitas, nilai estetika, dan warisan
              budaya yang diteruskan dari generasi ke generasi.
            </p>
          </div>
        </div>
      </section>

      {/* SUNGAI MUSI */}
      <section className="jel-story jel-story-dark jel-story-river">
        <div className="jel-river-background">
          <img src={photos.musi} alt="Pemandangan perairan" loading="lazy" />
          <div />
        </div>

        <div className="jel-river-copy">
          <Eyebrow light>04 &nbsp; — &nbsp; SEJARAH &amp; IDENTITAS</Eyebrow>

          <h2>
            Sungai Musi
            <br />
            <em>Nadi kehidupan Palembang.</em>
          </h2>

          <p>
            Sungai Musi telah lama menjadi bagian penting kehidupan masyarakat
            Palembang. Sungai ini berperan dalam transportasi, perdagangan,
            interaksi antarmasyarakat, dan perkembangan kota. Hingga kini,
            kawasan sungai tetap menjadi salah satu penanda identitas Palembang.
          </p>

          <Link href="/jelajahi" className="jel-button">
            Baca selengkapnya <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="jel-river-gallery">
          <div className="jel-river-caption">
            <span />
            <div>
              <strong>Ikon Kota Palembang</strong>
              <p>
                Sungai Musi menghubungkan kehidupan masyarakat dan menjadi
                bagian penting dari sejarah kota.
              </p>
            </div>
          </div>

          <div className="jel-river-thumbnails">
            <img src={photos.river} alt="Pemandangan sungai" loading="lazy" />
            <img
              src={photos.bridge}
              alt="Pemandangan perkotaan"
              loading="lazy"
            />
            <img
              src={photos.village}
              alt="Pemandangan permukiman"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* KATALOG DINAMIS DARI BACKEND */}

      {/* PENUTUP */}
      <section className="jel-ending">
        <div className="jel-ending-pattern" />
        <Eyebrow>WARISAN UNTUK MASA DEPAN</Eyebrow>
        <h2>
          Setiap cerita layak dikenang,
          <br />
          <em>setiap budaya layak dijaga.</em>
        </h2>
        <p>
          Mari mengenal lebih dekat kekayaan budaya Sumatera Selatan dan
          meneruskan ceritanya kepada generasi berikutnya.
        </p>
        <Link href="/tentang" className="jel-button">
          Tentang BudayaKita <ArrowUpRight size={16} />
        </Link>
      </section>
    </main>
  );
}
