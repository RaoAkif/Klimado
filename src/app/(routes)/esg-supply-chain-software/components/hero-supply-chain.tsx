import Image from "next/image";
import Line from "@/components/ui/line";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import DividerSlim from "@/components/ui/divider-slim";
import { EXTERNAL_LINKS } from "@/data/links/all-web-external-links";

export default function Hero() {
  return (
    <section className="first-section">
      <div className="flex flex-col  lg:mt-12 lg:gap-5 container relative">
        <Image
          src={"/hero-enterprise-page.svg"}
          alt="Hero Image"
          height={300}
          width={300}
          className="lg:absolute -right-6 -top-10 w-auto static"
        />

        <div className="flex flex-col items-center text-center gap-y-3 md:gap-y-5 lg:text-start lg:items-start w-full lg:w-[45%]">
          <h1 className="h1-content ">
            ESG Supply Chain Software or Sustainability Reporting
          </h1>
          <Line />
          <p className="p-content">
            Map your entire supply chain to comply with the latest CSRD
            guideline under one dashboard.
          </p>
          <DividerSlim />
          <Link
            href={EXTERNAL_LINKS.contact}
            className="gap-2 btn btn-secondary">
            Contact enterprise team <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
