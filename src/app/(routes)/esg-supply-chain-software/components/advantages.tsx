import DividerSlim from "@/components/ui/divider-slim";
import Line from "@/components/ui/line";
import { Link, CreditCard, SearchCheck, Car } from "lucide-react";

const CARDS_INFO = [
  {
    title: "Map your Supply Chain",
    icon: Link,
  },
  {
    title: "Score Each & Every Supplier",
    icon: CreditCard,
  },
  {
    title: "Manage ESG risks effectively",
    icon: SearchCheck,
  },
  {
    title: "Track your Supplier Progress",
    icon: Car,
  },
];

export default function Advantages() {
  return (
    <section className="py-20 bg-primary-light">
      <div className="container flex flex-col gap-4">
        <h2 className="h2-content">
          Advantages of Using ESG Supply Chain Tool for Sustainability
        </h2>
        <Line />
        <p className="p-content">
          Our partners use IMPAKTER PRO for going green -- from individual SME
          partner to all the way up to meeting yearly ESG KPIs.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {CARDS_INFO.map((card) => (
            <div
              key={card.title}
              className="flex flex-col card gap-2">
              <div className="bg-primary/10 p-2 w-fit rounded-3xl">
                <card.icon className="text-primary" />
              </div>
              <DividerSlim />
              <h3 className="font-semibold my-2">{card.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
