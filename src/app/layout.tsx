import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '600', '700', '800'],
});

export const viewport: Viewport = {
  themeColor: '#0A1B33',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://opsuspharma.com'),
  title: {
    default: 'Opsus™ Pharmaceuticals | Pharmaceutical Marketing & Distribution',
    template: '%s | Opsus™ Pharmaceuticals',
  },
  description:
    'Established in 2010, Opsus™ Pharmaceuticals is a leading pharmaceutical marketing and distribution company delivering high-quality formulations sourced exclusively through WHO-GMP certified manufacturing partners across India.',
  keywords: [
    'Opsus Pharmaceuticals',
    'Pharmaceutical Marketing Company India',
    'PCD Pharma Franchise',
    'Monopoly Pharma Franchise',
    'WHO-GMP Certified Medicines',
    'Pharmaceutical Distribution Network',
    'Orthopaedic Formulations',
    'Anti-Infective Antibiotics',
    'Gastroenterology Medicines',
  ],
  authors: [{ name: 'Opsus Pharmaceuticals' }],
  creator: 'Opsus Pharmaceuticals',
  publisher: 'Opsus Pharmaceuticals',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Opsus Pharmaceuticals | Better Healthcare Through Stronger Partnerships',
    description:
      'Quality-focused pharmaceutical formulations sourced through WHO-GMP certified manufacturing partners. Pan-India supply network and PCD franchise opportunities.',
    url: 'https://opsuspharma.com',
    siteName: 'Opsus Pharmaceuticals',
    images: [
      {
        url: '/images/hero/hero-scientist-microscope-01.jpg',
        width: 1200,
        height: 630,
        alt: 'Opsus Pharmaceuticals Research & Quality Distribution',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opsus Pharmaceuticals | Better Healthcare Through Stronger Partnerships',
    description:
      'Quality-focused pharmaceutical marketing and distribution across 15+ Indian states.',
    images: ['/images/hero/hero-scientist-microscope-01.jpg'],
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'PharmaceuticalOrganization',
    name: 'Opsus Pharmaceuticals',
    alternateName: 'Opsus Pharma',
    url: 'https://opsuspharma.com',
    logo: 'https://opsuspharma.com/images/hero/hero-scientist-microscope-01.jpg',
    foundingDate: '2010',
    description:
      'Leading pharmaceutical marketing and distribution enterprise partnering with WHO-GMP certified manufacturing partners for pan-India healthcare delivery.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Opsus Corporate Tower, Plot 42-B, Sector 18',
      addressLocality: '[Placeholder City]',
      addressRegion: '[Placeholder State]',
      postalCode: '110001',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-98XXXXXXXX',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['en', 'hi'],
    },
    sameAs: [
      'https://www.linkedin.com',
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#5B6B7D] antialiased selection:bg-[#C9A15E]/30 selection:text-[#0A1B33]">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
