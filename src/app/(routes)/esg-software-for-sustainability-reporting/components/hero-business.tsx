import Image from "next/image";
import Line from "@/components/ui/line";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DividerSlim from "@/components/ui/divider-slim";
import { EXTERNAL_LINKS } from "@/data/links/all-web-external-links";

export default function Hero() {
  return (
    <section className="first-section">
      <div className="flex flex-col  lg:mt-20 lg:gap-5 container relative">
        <Image
          src={"/hero-business-page.svg"}
          alt="Hero Image"
          height={300}
          width={300}
          className="lg:absolute -right-6 -top-10 w-auto static"
        />

        <div className="flex flex-col items-center text-center gap-y-3 md:gap-y-5 lg:text-start lg:items-start w-full lg:w-[45%]">
          <h1 className="h1-content ">
            ESG Reporting Tool for SMEs. Designed for Speed, Cost, and
            Efficiency.
          </h1>
          <Line />
          <p className="p-content">
            Accurate CSRD reporting for businesses of any industry active in the
            EU. Get sustainability report, action plan, green label, and more in
            one AI ESG software – that’s as simple as filling a form!
          </p>
          <DividerSlim />
          <Link href={EXTERNAL_LINKS.login} className="gap-2 btn btn-secondary">
            Free esg score <ArrowRight />
          </Link>
          <p className="p-content font-medium">*no credit card required</p>
        </div>
      </div>
    </section>
  );
}
