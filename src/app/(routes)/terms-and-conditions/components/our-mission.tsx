import Badge from "@/components/ui/badge";
import DividerSlim from "@/components/ui/divider-slim";
import Line from "@/components/ui/line";

export default function OurMission() {
  return (
    <section className="py-20">
      <div className="container flex flex-col gap-5 text-center items-center">
        <div className="mx-auto">
          <Badge>Our mission</Badge>
        </div>
        <h2 className="h2-content">
          To empower and guide SMEs on their journey to sustainable practices.​
        </h2>
        <DividerSlim />
        <p className="p-content">
          We are dedicated to providing tailored, transparent, and
          cost-effective ESG solutions, ensuring companies thrive in compliance
          with CSRD regulations while maintaining their financial health
        </p>
        <Line />
      </div>
    </section>
  );
}
