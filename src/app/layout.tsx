import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Link from "next/link";
import Script from "next/script";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from "@/components/GoogleAnalytics";
import AdBottom from "@/components/AdBottom";
import AdLeft from '@/components/AdLeft';
import AdRight from '@/components/AdRight';
import { GA_TRACKING_ID } from "@/lib/gtag";
import { Suspense } from 'react'; 
import ReloadAlert from '@/components/ReloadAlert';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "株価分析アプリ かぶちゃん",
  description: "楽しく株の知識が身につく、かぶちゃん公式アプリ",
  openGraph: {
    title: "株価分析アプリ かぶちゃん",
    description: "楽しく株の知識が身につく、かぶちゃん公式アプリ",
    siteName: "かぶちゃん",
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary",
    title: "株価分析アプリ かぶちゃん",
    description: "楽しく株の知識が身につく、かぶちゃん公式アプリ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <ReloadAlert />
        <Header />
        <div className="logo-fixed">
          <Link href="/" passHref>
            <img
              src="/kabuchan/logo.png"
              alt="かぶちゃんロゴ"
              width={350}
              height={175}
            />
          </Link>
        </div>
        <main>{children}</main>
        <Footer />
        <AdRight />
        <AdLeft />
        <AdBottom />

        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
