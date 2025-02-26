import DividerSlim from "@/components/ui/divider-slim";
import Line from "@/components/ui/line";

const CARDS_INFO = [
  {
    title: "Offers Competitive Advantages:",
    body: "83% of larger companies are likely to leverage sustainability for competitive growth. ",
  },
  {
    title: "Rising Demand for Sustainability: ",
    body: "77% of companies see increasing customer preferences for sustainable offerings.",
  },
  {
    title: "Sustainability Adoption Growing:",
    body: "71% of Central European firms already address sustainability, with 20% planning to.",
  },
  {
    title: "Ownership of Sustainability:",
    body: "For 1/4th firms, sustainability is a marketing task; while 16% have dedicated internal team.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20">
      <div className="container flex flex-col gap-4">
        <h2 className="h2-content">
          How a Supply Chain Can Benefit from Sustainable Practices
        </h2>
        <Line />
        <p className="p-content">
          Becoming sustainable does more than meeting ESG regulations. It helps
          make the most of the changing market preferences.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-2">
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
