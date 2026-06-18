import type { Metadata } from "next";
import PortfolioContent from "@/components/PortfolioContent";

export const metadata: Metadata = {
  title: "Hyunwoo Lee (Harry) — 공장 데이터를 모두가 읽게 만드는 사람 | Power BI · Lean/IWS",
  description:
    "15년 제조 도메인 경력. Lean/IWS와 Power BI로 공장 데이터를 경영진부터 현장 직원까지 모두가 쓸 수 있는 시각화로 압축합니다. OEE 층별분석 대시보드는 글로벌 베스트 프랙티스로 채택. OEE 115%, MTBF 208%, 폐기율 82% 절감.",
  alternates: {
    canonical: "https://rolean.org",
    languages: {
      ko: "https://rolean.org",
      en: "https://rolean.org/en",
    },
  },
};

export default function KoreanPage() {
  return <PortfolioContent locale="ko" />;
}
