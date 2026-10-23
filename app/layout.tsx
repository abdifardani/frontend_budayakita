import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
export const metadata: Metadata = { title: 'BudayaKita — Jelajah, Kenal, Lestarikan', description: 'Jelajahi warisan budaya Sumatera Selatan melalui BudayaKita.' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><body><Navbar/>{children}<footer className="footer"><div className="brand footer-brand"><span className="brand-mark">✳</span><span><strong>BudayaKita</strong><small>Jelajah, Kenal, Lestarikan</small></span></div><p>Merawat warisan hari ini, meneruskannya untuk generasi nanti.</p><span>© {new Date().getFullYear()} BudayaKita · Proyek edukasi budaya</span></footer></body></html>}
