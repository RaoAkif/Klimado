import DividerSlim from "@/components/ui/divider-slim";
import Line from "@/components/ui/line";

const CARDS_INFO = [
  {
    title: "Enhanced Data Collection:",
    body: "86% report improved efficiency in internal ESG data collection and validation processes.",
  },
  {
    title: "Better KPI Management: ",
    body: "78% note ESG software helps manage progress toward supply chain sustainability and ESG KPIs.",
  },
  {
    title: "ESG Risk Mitigation:",
    body: "74% confirm ESG software mitigates risks related to inaccurate ESG data and sustainability reporting. ",
  },
  {
    title: "Significant Time Savings: ",
    body: "Over 2/3rd respondents shared 25% of time savings in overall supply chain sustainability reporting. .",
  },
];

export default function BetterROI() {
  return (
    <section className="py-20">
      <div className="container flex flex-col gap-4">
        <h2 className="h2-content">
          ROI of Sustainability for SMEs with an ESG Software
        </h2>
        <Line />
        <p className="p-content">
          Most SMEs in the EU mandated to report CSRD struggle because of
          limited time, budget and ESG expertise. An ESG tool for SME can help
          mitigating ESG risks, improving collaboration, and meeting
          sustainability goals.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 nt-2">
          {CARDS_INFO.map((card, index) => (
            <div
              key={card.title}
              className="flex flex-col gap-2 card">
              <span className="text-primary font-semibold">· 0{index + 1}</span>
              <DividerSlim />
              <h4 className="font-semibold">{card.title}</h4>
              <p className="p-content">{card.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
