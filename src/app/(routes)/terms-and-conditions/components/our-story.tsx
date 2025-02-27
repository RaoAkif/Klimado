import Line from "@/components/ui/line";
import { EXTERNAL_LINKS } from "@/data/links/all-web-external-links";
import Link from "next/link";

export default function OurStory() {
  return (
    <section className="py-20 ">
      <div className="container flex flex-col gap-4 justify-center items-center">
        <Line />
        <h2 className="h2-content">Our Story</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5 text-typo-secondary">
          <div className="flex flex-col gap-5">
            <p>
              In June 2014, IMPAKTER was born with the idea to become the
              ultimate inspiration for a sustainable lifestyle.
            </p>
            <p>
              We do this by building tools, stories and experience that makes
              sustainable living easy. From education to championing it. For
              individuals and institutions. Across the globe.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p>
              We started with,{" "}
              <Link
                href={EXTERNAL_LINKS.impakterMedia}
                className="text-primary hover:underline">
                IMPAKTER MEDIA
              </Link>
              , a sustainable business magazine. Our extended coverage spans
              from ESG, finance, business, climate tech, sustainable living, and
              more. With have established a community of thousands of loyal
              monthly readers who are inspired daily by hundreds of
              sustainability expert contributors, and dozens of global ESG
              partners.
            </p>
            <p>
              We have developed a proprietary methodology to assess
              sustainability efforts of an organizations. This powers our
              marquee product{" "}
              <Link
                href={EXTERNAL_LINKS.impakterPro}
                className="text-primary hover:underline">
                IMPAKTER PRO
              </Link>
              . An ESG software for CSRD reporting for businesses designed for
              speed, cost & efficiency.
            </p>
            <p>
              And we are constantly growing with more products and services like{" "}
              <Link
                href={EXTERNAL_LINKS.impakterIndex}
                className="text-primary hover:underline">
                IMPAKTER INDEX
              </Link>
              , an encylopedia of yearly sustainability efforts by global
              companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
