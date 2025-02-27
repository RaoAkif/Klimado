import DividerSlim from "@/components/ui/divider-slim";
import Line from "@/components/ui/line";
import {
  PackagePlus,
  ArrowLeftRight,
  UserCheck,
  HandCoins,
} from "lucide-react";

const CARDS_INFO = [
  {
    title: "Innovation",
    body: "Efficient, forward-thinking ESG solutions",
    icon: PackagePlus,
  },
  {
    title: "Transparency",
    body: "Clear solutions, open communication",
    icon: ArrowLeftRight,
  },
  {
    title: "Customer Experience",
    body: "Prioritzing & adapting to customer needs ",
    icon: UserCheck,
  },
  {
    title: "Affordability",
    body: "Design to save time, money, and man power",
    icon: HandCoins,
  },
];

export default function OurValues() {
  return (
    <section className="py-20 bg-primary-light">
      <div className="container flex flex-col gap-3">
        <h2 className="h2-content">Our Values</h2>
        <Line />
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-3">
          {CARDS_INFO.map((card) => (
            <div
              key={card.title}
              className="flex flex-col cards-shadow rounded-3xl p-6 gap-2  bg-white">
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
