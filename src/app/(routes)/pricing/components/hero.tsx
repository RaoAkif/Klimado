import Badge from "@/components/ui/badge";
import Line from "@/components/ui/line";
import StripeBadge from "./stripe-badge";

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container flex flex-col justify-center items-center gap-4">
        <Badge>pricing</Badge>
        <h1 className="h1-content text-center lg:text-start">
          We Make Your ESG Strategy Powerful and Results-Driven!
        </h1>
        <Line />
        <p className="p-content">
          Choose a plan that suits your business needs
        </p>
        <StripeBadge />
      </div>
    </section>
  );
}
