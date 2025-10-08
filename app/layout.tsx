import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EnterpriseHero - World-Class Manufacturing Websites by Vedpragya Bharat",
  description: "Transform your manufacturing business with enterprise-grade websites. Professional, SEO-optimized, and conversion-focused web solutions for the manufacturing industry.",
  keywords: "manufacturing website, enterprise web solutions, factory website, industrial web design, business websites, EnterpriseHero, Vedpragya Bharat",
  authors: [{ name: "Vedpragya Bharat Pvt. Ltd." }],
  openGraph: {
    title: "EnterpriseHero - World-Class Manufacturing Websites",
    description: "Transform your manufacturing business with enterprise-grade websites.",
    type: "website",
    locale: "en_US",
    siteName: "EnterpriseHero",
  },
  twitter: {
    card: "summary_large_image",
    title: "EnterpriseHero - World-Class Manufacturing Websites",
    description: "Transform your manufacturing business with enterprise-grade websites.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}