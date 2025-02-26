import GetStarted from "@/components/sections/get-started/get-started-section";
import { Metadata } from "next";
import Hero from "./components/hero";
import PricingComparator from "./components/pricing-comparator";

export const metadata: Metadata = {
  title: "ESG Software Plans & Pricing Starting at €299 | IMPAKTER PRO",
  description:
    "Discover affordable ESG software starting at just €299 per year. Tailored plans for SMEs and enterprises to meet sustainability goals.",
};

export default function Pricing() {
  return (
    <>
      <Hero />
      <PricingComparator />
      <GetStarted />
    </>
  );
}
