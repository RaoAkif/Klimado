import Badge from "@/components/ui/badge";
import DividerSlim from "@/components/ui/divider-slim";
import Line from "@/components/ui/line";
import { EXTERNAL_LINKS } from "@/data/links/all-web-external-links";
import { ArrowUpRight, CircleCheck } from "lucide-react";
import Link from "next/link";

export default function ToolComparatorSection() {
  return (
    <section className="py-28">
      <div className="container">
        <div className="flex flex-col gap-y-5">
          <div>
            <Badge>Explore</Badge>
          </div>
          <h2 className="h2-content w-[90%]">
            Many Challenges of Corporate Sustainability Reporting. All Solved by One ESG Reporting Software.
          </h2>
          <Line />
          <p className="p-content font-semibold">
            From assessing your ESG performance to mapping your sustainability
            journey, our ESG tool offers support at every stage.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mt-2">
            <div className=" p-8 rounded-3xl bg-white w-full border-2 border-transparent blue-shadow-hover cards-shadow  transition-all ease-in-out duration-200">
              <h4 className="font-semibold text-lg">ESG Tool for Companies</h4>
              <div className="my-5">
                <DividerSlim />
              </div>
              <ul className="space-y-3">
                <li className="flex gap-2 p-content font-medium">
                  <CircleCheck className="text-primary size-5" />
                  CSRD-compliant scorecard (in minutes)
                </li>
                <li className="flex gap-2 p-content font-medium">
                  <CircleCheck className="text-primary size-5" />
                  ESG progress report & action plan
                </li>
                <li className="flex gap-2 p-content font-medium">
                  <CircleCheck className="text-primary size-5" />
                  Sustainability badge (if qualified)
                </li>
                <li className="flex gap-2 p-content font-medium">
                  <CircleCheck className="text-primary size-5" />
                  ESG news & regulation updates
                </li>
              </ul>
              <div className="flex justify-center items-center mt-8">
                <Link
                  href={EXTERNAL_LINKS.esgToolBusiness}
                  className="btn btn-primary">
                  Explore <ArrowUpRight className="size-5" />
                </Link>
              </div>
            </div>

            <div className=" p-8 rounded-3xl bg-[#F8FBFF] w-full border-2 border-primary hover:border-primary blue-shadow-hover cards-shadow  transition-all ease-in-out duration-200">
              <h4 className="font-semibold text-lg">
                ESG Tool for Enterprises
              </h4>
              <div className="my-5">
                <DividerSlim />
              </div>
              <ul className="space-y-3">
                <li className="flex gap-2 p-content font-medium">
                  <CircleCheck className="text-primary size-5" />
                  Map entire supply chain by ESG score
                </li>
                <li className="flex gap-2 p-content font-medium">
                  <CircleCheck className="text-primary size-5" />
                  Manage supply chain ESG risks
                </li>
                <li className="flex gap-2 p-content font-medium">
                  <CircleCheck className="text-primary size-5" />
                  Track and monitor progress of suppliers
                </li>
                <li className="flex gap-2 p-content font-medium">
                  <CircleCheck className="text-primary size-5" />
                  Sustainable partner label (if qualified)
                </li>
              </ul>
              <div className="flex justify-center items-center mt-8">
                <Link
                  href={EXTERNAL_LINKS.esgToolSupply}
                  className="btn btn-primary">
                  Explore <ArrowUpRight className="size-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
