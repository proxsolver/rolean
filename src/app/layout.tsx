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
    default: "Hyunwoo Lee (Harry) — Domain-First Engineer | Smart Factory, Lean/IWS, AI & Software",
    template: "%s | rolean.org",
  },
  description:
    "Portfolio of Hyunwoo Lee (Harry), a domain-first engineer with 15+ years in manufacturing (Smart Factory, Lean/IWS, OT Security) combined with full-stack software engineering and AI. OEE 115%, MTBF 208%, Waste -82%. Building the bridge between IT and OT.",
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
    "Manufacturing Engineer",
    "Software Engineer",
    "Full-Stack Developer",
    "AI",
    "PTC Kepware",
    "OEE Optimization",
    "Vibe Coding",
    "rolean",
    "Domain First",
    "AI Always",
    "FMCG",
    "Process Optimization",
    "Power BI",
    "Next.js",
    "TypeScript",
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
    url: "https://rolean.org",
    siteName: "rolean.org",
    title: "Hyunwoo Lee (Harry) — Domain-First Engineer",
    description:
      "15+ years in manufacturing meets software engineering. Smart Factory, Lean/IWS, OT Security, AI. Building the bridge between IT and OT.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "rolean.org — Hyunwoo Lee (Harry) Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyunwoo Lee (Harry) — Domain-First Engineer",
    description:
      "15+ years in manufacturing meets software engineering. Smart Factory, Lean/IWS, OT Security, AI.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://rolean.org",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
