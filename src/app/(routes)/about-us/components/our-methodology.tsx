import Badge from "@/components/ui/badge";
import DividerSlim from "@/components/ui/divider-slim";
import Line from "@/components/ui/line";
import { EXTERNAL_LINKS } from "@/data/links/all-web-external-links";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function OurMethodology() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col gap-4 items-start w-[60%]">
          <Badge>Our methodology</Badge>
          <h2 className="h2-content">The IMPAKTER INDEX Methodology</h2>
          <Line />
          <p className="p-content mb-2">
            The IMPAKTER INDEX Methodology has been developed over several years
            by a multidisciplinary team of experts both internally and
            externally.
          </p>
          <p className="p-content mb-2">
            It is an evolving set of systems, that we keep updating to stay on
            top of the latest regulations, discoveries, and trends.
          </p>
          <p className="p-content">
            The objective is to draw lessons and formulate strategies about how
            to achieve sustainability efficiently.
          </p>
          <DividerSlim />
          <Link
            href={EXTERNAL_LINKS.methodologyDoc}
            target="_blank"
            rel="noopener"
            className="gap-2 btn btn-secondary">
            Explore <ArrowRight className="size-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
