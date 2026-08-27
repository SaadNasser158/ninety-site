import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ninety — Live football, beautifully focused',
  description:
    'Follow live scores, lineups, match moments, tables and the football that matters in Ninety for iPhone.',
  applicationName: 'Ninety',
  openGraph: {
    title: 'Ninety — Live football, beautifully focused',
    description:
      'Live scores, lineups, match moments and the football that matters — in one calm iPhone app.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ninety — Live football, beautifully focused',
    description:
      'Live scores, lineups, match moments and the football that matters — in one calm iPhone app.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
