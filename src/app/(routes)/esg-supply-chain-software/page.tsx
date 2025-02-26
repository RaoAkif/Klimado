import Hero from "./components/hero-supply-chain";
import GetStarted from "@/components/sections/get-started/get-started-section";
import FAQs from "@/components/sections/faqs/faqs";
import { Metadata } from "next";
import { FAQS_SUPPLYCHAIN } from "@/data/faqs/supply-chain";
import Benefits from "./components/benefits";
import Advantages from "./components/advantages";
import Partners from "@/components/sections/partners/partners";

export const metadata: Metadata = {
  title: "ESG Supply Chain Software: Map 1,000s of Suppliers ESG",
  description:
    "IMPAKTER PRO solves large company CSRD reporting: map entire supply chain ESG on one dashboard & earn fees on every supplier onboarded.",
};

export default function SupplyChain() {
  return (
    <>
      <Hero />
      <Benefits />
      <Advantages />
      <Partners />
      <FAQs
        title="FAQs for ESG Supply Chain Software in the EU"
        faqs={FAQS_SUPPLYCHAIN}
      />
      <GetStarted />
    </>
  );
}
