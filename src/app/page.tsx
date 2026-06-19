import PortfolioContent from "@/components/PortfolioContent";
import { pageMetadata } from "@/domains/profile/meta";

export const metadata = pageMetadata("ko");

export default function KoreanPage() {
  return <PortfolioContent locale="ko" />;
}
