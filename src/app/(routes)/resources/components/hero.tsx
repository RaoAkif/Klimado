import Badge from "@/components/ui/badge";
import Line from "@/components/ui/line";
import StripeBadge from "./stripe-badge";

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container flex flex-col justify-center items-center gap-4">
        <Badge>Resources</Badge>
        <h1 className="h1-content text-center lg:text-start">
          Blogposts go there...
        </h1>
        <Line />
      </div>
    </section>
  );
}
