import FAQs from "@/components/sections/faqs/faqs";
import GetStarted from "@/components/sections/get-started/get-started-section";
import Hero from "@/(routes)/components/hero";
import ShowcaseReport from "@/components/sections/showcase-report/showcase-report-section";
import ToolComparatorSection from "@/(routes)/components/tool-comparator-section";
import WhyImpkaterSection from "@/(routes)/components/why-impakter-section";
import { FAQS_HOMEPAGE } from "@/data/faqs/homepage";
import Partners from "@/components/sections/partners/partners";

export default function Home() {
  return (
    <>
      <Hero />
      <ToolComparatorSection />
      <Partners />
      <ShowcaseReport />
      <WhyImpkaterSection />
      <FAQs faqs={FAQS_HOMEPAGE} title="FAQs for ESG Software in the EU" />
      <GetStarted />
    </>
  );
}
