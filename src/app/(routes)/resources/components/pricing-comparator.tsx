import Image from "next/image";
import starterBadge from "@/(routes)/pricing/assets/starter-plan-badge.svg";
import premiumBadge from "@/(routes)/pricing/assets/premium-plan-badge.svg";
import DividerSlim from "@/components/ui/divider-slim";
import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { EXTERNAL_LINKS } from "@/data/links/all-web-external-links";
import Badge from "@/components/ui/badge";

const CARDS_INFO = [
  {
    title: "Starter",
    price: 299,
    img: starterBadge,
    body: [
      "Easy to read CSRD-Compliant Scorecard",
      "Downloadable Scorecard for Internal and External Communication",
    ],
  },
  {
    title: "Standard",
    price: 499,
    img: premiumBadge,
    popular: true,
    body: [
      "All starter package features +",
      "ESG Progress Report & Action Plan",
      "Sustainability Badge (If Applicable)",
      "Daily ESG News & Regulation Updates",
    ],
  },
];

export default function PricingComparator() {
  return (
    <section className="pt-7 pb-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-5 justify-center items-center w-[70%]">
        {CARDS_INFO.map((card) => (
          <div
            key={card.title}
            className="flex flex-col gap-3 p-7 rounded-3xl  border-2 border-transparent hover:border-primary transition-all duration-200 hover:bg-primary-light h-full relative blue-shadow-hover cards-shadow">
            {card.popular && (
              <div className="absolute top-7 right-7">
                <Badge>Popular</Badge>
              </div>
            )}
            <Image
              src={card.img}
              width={104}
              height={104}
              alt="starter plan badge"
              className="-ml-5 -mb-4"
            />
            <h4 className="font-semibold text-xl">{card.title}</h4>
            <div className="flex">
              <p className="text-primary text-3xl font-semibold">
                {card.price}
              </p>
              <span className="text-lg text-primary font-semibold">€</span>
              <span className="p-content font-normal  self-end">/yr.</span>
            </div>
            <div className="my-3">
              <DividerSlim />
            </div>
            <ul className="space-y-5 mb-20">
              {card.body.map((item, index) => (
                <li key={index} className="flex gap-2 items-center">
                  <div className="self-start">
                    <CircleCheck className="text-primary size-5" />
                  </div>
                  <p className="p-content font-medium">{item}</p>
                </li>
              ))}
            </ul>

            <Link
              href={EXTERNAL_LINKS.login}
              className="btn btn-primary uppercase mx-auto btn-big  mt-auto">
              Choose this plan
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
