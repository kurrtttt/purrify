import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Purrify by Pawlish Co. - Portable Eco-Friendly Stain Remover',
  description: 'Discover Purrify, the portable "Anik-Anik" stain remover with a handcrafted cat-shaped cap. Eco-friendly, refillable, and perfect for students on the go. Made by Naga City Science High School students. Make it clean, make it purr!',
  keywords: 'stain remover, portable, eco-friendly, student, cat design, refillable, sustainable, Pawlish Co, Naga City, anik-anik',
  authors: [{ name: 'Pawlish Co.' }],
  openGraph: {
    title: 'Purrify - Make It Clean, Make It Purr',
    description: 'Your portable, eco-friendly solution to unexpected stains — designed by students, for students on the go.',
    type: 'website',
    siteName: 'Purrify by Pawlish Co.',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' }
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins bg-white">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}