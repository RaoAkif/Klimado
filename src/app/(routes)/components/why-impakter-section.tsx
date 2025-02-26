import Badge from "@/components/ui/badge";
import Line from "@/components/ui/line";
import {
  Banknote,
  Box,
  Clock,
  PiggyBank,
  UserCheck,
  Image,
} from "lucide-react";

const CARDS_INFO = [
  {
    icon: Banknote,
    title: "Cost-Effective ESG Solutions",
  },
  {
    icon: Clock,
    title: "Time-Efficient Compliance",
  },
  {
    icon: UserCheck,
    title: "User-Friendly for ESG Beginners",
  },
  {
    icon: Box,
    title: "EU Regulation Ready",
  },
  {
    icon: PiggyBank,
    title: "No Consultancy Cost",
  },
  {
    icon: Image,
    title: "Daily ESG News & Updates",
  },
];

export default function WhyImpkaterSection() {
  return (
    <section className="py-20 bg-primary-light">
      <div className="container flex flex-col gap-4">
        <div>
          <Badge>Features</Badge>
        </div>
        <h2 className="h2-content">
          Why Businesses Choose IMPAKTER PRO ESG Software
        </h2>
        <Line />
        <p className="p-content font-medium">
          We cover essentials of CSRD reporting and go beyond with value-adds to
          ensure you meet all your sustainability needs.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-5 gap-5">
          {CARDS_INFO.map((card, index) => (
            <div
              key={index}
              className="flex justify-start gap-7  items-center h-[90px] card">
              <card.icon className="text-primary size-7" />
              <p className="font-semibold text-base text-balance">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
