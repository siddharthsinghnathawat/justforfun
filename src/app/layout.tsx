import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import MusicPlayer from '@/components/MusicPlayer';

const oswald = Oswald({
  subsets: ['latin'],
  variable: '--font-oswald',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Siddharth Singh Nathawat | Creative Frontend Developer',
  description: 'A modern and sleek developer portfolio.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('font-body antialiased', oswald.variable, inter.variable)}>
        <Header />
        {children}
        <MusicPlayer />
        <Toaster />
      </body>
    </html>
  );
}
