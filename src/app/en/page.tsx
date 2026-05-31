import type { Metadata } from "next";
import PortfolioContent from "@/components/PortfolioContent";

export const metadata: Metadata = {
  title: "Hyunwoo Lee (Harry) — Domain-First Engineer | Smart Factory, Lean/IWS, AI & Software",
  description:
    "Portfolio of Hyunwoo Lee (Harry) — 15+ years of manufacturing domain expertise (Smart Factory, Lean/IWS, OT Security) meets full-stack software engineering and AI. OEE 115%, MTBF 208%, Waste -82%.",
  alternates: {
    canonical: "https://rolean.org/en",
    languages: {
      ko: "https://rolean.org",
      en: "https://rolean.org/en",
    },
  },
};

export default function EnglishPage() {
  return <PortfolioContent locale="en" />;
}
