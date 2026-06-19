import PortfolioContent from "@/components/PortfolioContent";
import { pageMetadata } from "@/domains/profile/meta";

export const metadata = pageMetadata("en");

export default function EnglishPage() {
  return <PortfolioContent locale="en" />;
}
