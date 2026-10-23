import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Culture } from "@/lib/api";
export default function CultureCard({ item }: { item: Culture }) {
  return (
    <Link href={`/budaya/${item.slug}`} className="culture-card">
      <div
        className="card-image"
        style={{
          backgroundImage: `linear-gradient(180deg,transparent 35%,rgba(20,12,8,.82)),url('${item.imageUrl || ""}')`,
        }}
      >
        <span className="category-pill">{item.category}</span>
        <span className="card-arrow">
          <ArrowUpRight size={18} />
        </span>
      </div>
      <div className="card-copy">
        <h3>{item.title}</h3>
        <p>{item.summary}</p>
        <span className="read-more">
          Baca cerita <span>→</span>
        </span>
      </div>
    </Link>
  );
}
