import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rolean.org"),
  title: {
    default: "Hyunwoo Lee (Harry) — Domain-First Engineer | rolean.org",
    template: "%s | rolean.org",
  },
  description:
    "Portfolio of Hyunwoo Lee (Harry) — domain-first engineer combining 15 years of manufacturing expertise with software engineering, AI, and Smart Factory innovation.",
  keywords: [
    "Hyunwoo Lee",
    "Harry Lee",
    "이현우",
    "Smart Factory",
    "Lean Manufacturing",
    "IWS",
    "OT Security",
    "IoT",
    "ESP32",
    "Software Engineer",
    "AI",
    "PTC Kepware",
    "OEE Optimization",
    "Vibe Coding",
    "rolean",
  ],
  authors: [{ name: "Hyunwoo Lee (Harry)", url: "https://rolean.org" }],
  creator: "Hyunwoo Lee (Harry)",
  publisher: "Hyunwoo Lee (Harry)",
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
  openGraph: {
    type: "website",
    locale: "ko_KR",
    alternateLocale: "en_US",
    url: "https://rolean.org",
    siteName: "rolean.org",
    title: "Hyunwoo Lee (Harry) — Domain-First Engineer",
    description:
      "15+ years in manufacturing meets software engineering. Smart Factory, Lean/IWS, OT Security, AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyunwoo Lee (Harry) — Domain-First Engineer",
    description:
      "15+ years in manufacturing meets software engineering. Smart Factory, Lean/IWS, OT Security, AI.",
  },
  alternates: {
    canonical: "https://rolean.org",
    languages: {
      ko: "https://rolean.org",
      en: "https://rolean.org/en",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
