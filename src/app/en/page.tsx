import type { Metadata } from "next";
import PortfolioContent from "@/components/PortfolioContent";

export const metadata: Metadata = {
  title: "Hyunwoo Lee (Harry) — Finding Optimal Solutions in Manufacturing Data | Power BI · Lean/IWS",
  description:
    "15 years in manufacturing. The smart factory isn't far off — it starts by connecting the data you already have to find the optimum. Lean/IWS meets Power BI; my OEE stratified analysis was adopted as a global best practice. OEE +115%, MTBF +208%, Waste -82%.",
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
