import type { Metadata } from "next";
import PortfolioContent from "@/components/PortfolioContent";

export const metadata: Metadata = {
  title: "Hyunwoo Lee (Harry) — Making Factory Data Readable | Power BI · Lean/IWS",
  description:
    "15 years in manufacturing. Lean/IWS meets Power BI — factory-data visualizations everyone, from operators to executives, can act on. OEE stratified analysis adopted as a global best practice. OEE +115%, MTBF +208%, Waste -82%.",
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
