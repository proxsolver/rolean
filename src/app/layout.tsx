import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
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
    default: "Hyunwoo Lee (Harry) — Finding Optimal Solutions in Manufacturing Data | rolean.org",
    template: "%s | rolean.org",
  },
  description:
    "Hyunwoo Lee (Harry) — 15 years in manufacturing. The smart factory isn't far off — it starts by connecting the data you already have to find the optimum. Lean/IWS meets Power BI; my OEE stratified analysis was adopted as a global best practice.",
  keywords: [
    "Hyunwoo Lee",
    "Harry Lee",
    "이현우",
    "Power BI",
    "Data Visualization",
    "Data Democratization",
    "OEE",
    "Smart Factory",
    "Lean Manufacturing",
    "IWS",
    "OT Security",
    "IoT",
    "ESP32",
    "Software Engineer",
    "AI",
    "PTC Kepware",
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
    title: "Hyunwoo Lee (Harry) — Finding Optimal Solutions in Manufacturing Data",
    description:
      "15 years in manufacturing meets Power BI & Lean. The smart factory isn't far off — it starts by connecting the data you already have. OEE stratified analysis adopted as a global best practice.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyunwoo Lee (Harry) — Finding Optimal Solutions in Manufacturing Data",
    description:
      "15 years in manufacturing meets Power BI & Lean. The smart factory isn't far off — it starts by connecting the data you already have. OEE stratified analysis adopted as a global best practice.",
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
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
