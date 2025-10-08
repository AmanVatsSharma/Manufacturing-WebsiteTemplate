import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vedpragya bharat Pvt. Ltd. - Leading Manufacturing Company in India",
  description: "Vedpragya bharat Pvt. Ltd. - ISO certified manufacturing company specializing in precision engineering and industrial products. Located in Gurugram and Bhiwani, Haryana.",
  keywords: "manufacturing company, industrial products, precision engineering, ISO certified, Vedpragya bharat, Gurugram manufacturing, Bhiwani factory, manufacturing India",
  authors: [{ name: "Vedpragya bharat Pvt. Ltd." }],
  openGraph: {
    title: "Vedpragya bharat Pvt. Ltd. - Manufacturing Excellence",
    description: "Leading manufacturing company delivering high-quality industrial products and precision engineering solutions.",
    type: "website",
    locale: "en_IN",
    siteName: "Vedpragya bharat Pvt. Ltd.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedpragya bharat - Manufacturing Excellence",
    description: "ISO certified manufacturing company specializing in precision engineering and industrial products.",
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
        {/* Favicon - Company Logo */}
        <link rel="icon" href="/logo_favicon.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/logo_favicon.webp" />
        <Analytics />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}