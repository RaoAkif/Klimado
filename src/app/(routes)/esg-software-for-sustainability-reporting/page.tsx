import ShowcaseReport from "@/components/sections/showcase-report/showcase-report-section";
import BetterROI from "./components/better-roi";
import Hero from "./components/hero-business";
import Reporting from "./components/reporting";
import GetStarted from "@/components/sections/get-started/get-started-section";
import FAQs from "@/components/sections/faqs/faqs";
import { FAQS_BUSINESS } from "@/data/faqs/business";
import { Metadata } from "next";
import Partners from "@/components/sections/partners/partners";

export const metadata: Metadata = {
  title: "ESG Software for EU Companies ",
  description:
    "SMEs with CSRD reporting requirements use our ESG Software, IMPAKTER PRO, to generate sustainability reports - without training, within minutes!",
};

export default function Business() {
  return (
    <>
      <Hero />
      <BetterROI />
      <Reporting />
      <ShowcaseReport />
      <Partners />
      <FAQs title="FAQs for ESG Software in the EU" faqs={FAQS_BUSINESS} />
      <GetStarted />
    </>
  );
}
