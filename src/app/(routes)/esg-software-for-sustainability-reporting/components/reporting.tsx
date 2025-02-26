import DividerSlim from "@/components/ui/divider-slim";
import Line from "@/components/ui/line";
import { FileText, NotepadText, Medal, Database } from "lucide-react";

const CARDS_INFO = [
  {
    title: "CSRD-Compliant Scorecard",
    body: {
      1: "Receive instant score of your sustainability status",
      2: "Share ESG scorecard cum achievements to investors",
    },
    icon: FileText,
  },
  {
    title: "ESG Progress Report & Action Plan",
    body: {
      1: "Get lowest-cost roadmap to full sustainability",
      2: "See to-do’s to mitigate ESG risks listed by priority",
    },
    icon: NotepadText,
  },
  {
    title: "Sustainability Badge",
    body: {
      1: "Show your ESG efforts on digital & physical assets",
      2: "Leverage your sustainable edge over competitors",
    },
    icon: Medal,
  },
  {
    title: "ESG Data, News & Resources",
    body: {
      1: "Exclusive ESG updates in your industry",
      2: "Expert guides on running a sustainable business",
    },
    icon: Database,
  },
];

export default function Reporting() {
  return (
    <section className="py-20 bg-primary-light">
      <div className="container flex flex-col gap-4">
        <h2 className="h2-content">
          More Than a Sustainability Software for CSRD Reporting
        </h2>
        <Line />
        <p className="p-content">
          Reporting sustainability for business is a new mandate and keeps
          evolving, so just a CSRD software for SMEs is not enough. We recognise
          it and offer a decade strong ecosystem to partner up in your ESG
          journey—from learning to championing it!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
          {CARDS_INFO.map((card) => (
            <div
              key={card.title}
              className="flex flex-col gap-2 card">
              <div className="bg-primary/10 p-2 w-fit rounded-3xl">
                <card.icon className="text-primary" />
              </div>
              <DividerSlim />
              <h3 className="font-semibold my-2">{card.title}</h3>
              <div className="flex gap-1 justify-start items-star mt-auto">
                <span>·</span>
                <p className="p-content">{card.body[1]}</p>
              </div>

              <div className="flex gap-1 justify-start items-star">
                <span>·</span>
                <p className="p-content">{card.body[2]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
