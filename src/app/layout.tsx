import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "【山梨・甲府】高価出張買取のリサイクルショップ｜即日対応・査定無料",
  description: "山梨県・甲府市周辺で家電、家具、ブランド品の高価買取なら当店へ。最短30分での即日出張買取も対応可能。LINEで簡単無料査定！",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'エコ買取王',
    image: 'https://example.com/images/hero.png',
    '@id': 'https://example.com',
    url: 'https://example.com',
    telephone: '0120-000-000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '丸の内1-1-1',
      addressLocality: '甲府市',
      addressRegion: '山梨県',
      postalCode: '400-0000',
      addressCountry: 'JP'
    },
    priceRange: '¥¥',
    description: '山梨県・甲府市周辺で家電、家具、ブランド品の高価買取なら当店へ。最短30分での即日出張買取も対応可能。'
  };

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={notoSansJP.className}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: 'var(--color-surface)', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
          <a href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>♻️ エコ買取王</a>
          <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="/items" style={{ fontWeight: '500', color: 'var(--color-text-main)' }}>買取品目・FAQ</a>
            <a href="/contact" style={{ fontWeight: '500', color: 'var(--color-text-main)' }}>お問い合わせ</a>
            <a href="/estimate" style={{ fontWeight: 'bold', color: 'var(--color-accent)', padding: '10px 20px', border: '2px solid var(--color-accent)', borderRadius: '30px' }}>10秒 簡易見積もり</a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
