
export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";

export type Culture = {
  _id?: string;
  title: string;
  slug: string;
  category: string;
  region: string;
  summary: string;
  description: string;
  imageUrl?: string;
  facts?: string[];
  sources?: { label: string; url: string }[];
};
export async function getCultures(): Promise<Culture[]> {
  try {
    const res = await fetch(`https://budayakita.vercel.app/api/cultures`, { cache: "no-store" });
    if (!res.ok) return [];
    const json = await res.json();
    return json.data || [];
  } catch {
    return [];
  }
}
