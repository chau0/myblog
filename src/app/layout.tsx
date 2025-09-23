import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StatusBar from '@/components/StatusBar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Dev Blog',
    template: '%s | Dev Blog'
  },
  description: 'A minimalist tech blog focused on development, self-hosting, and clean code.',
  keywords: ['development', 'programming', 'tech', 'self-hosting', 'blog'],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourdomain.com',
    siteName: 'Dev Blog',
    title: 'Dev Blog',
    description: 'A minimalist tech blog focused on development, self-hosting, and clean code.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dev Blog',
    description: 'A minimalist tech blog focused on development, self-hosting, and clean code.',
    creator: '@yourusername',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
        <StatusBar />
      </body>
    </html>
  );
}
