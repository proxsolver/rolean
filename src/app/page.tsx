import type { Metadata } from "next";
import PortfolioContent from "@/components/PortfolioContent";

export const metadata: Metadata = {
  title: "Hyunwoo Lee (Harry) — 제조업이 가진 데이터에서 최적해를 찾는 사람 | Power BI · Lean/IWS",
  description:
    "15년 제조 도메인 경력. 스마트팩토리는 먼 곳에 없다 — 기존 데이터의 연결에서 최적해를 찾습니다. Lean/IWS와 Power BI로 구축한 OEE 층별분석 대시보드는 글로벌 베스트 프랙티스로 채택. OEE 115%, MTBF 208%, 폐기율 82% 절감.",
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
