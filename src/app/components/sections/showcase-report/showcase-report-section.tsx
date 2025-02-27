import Badge from "@/components/ui/badge";
import Line from "@/components/ui/line";
import Image from "next/image";

const CardsInfo = [
  {
    title: "VERIFIED, if rated A or B \n for a given year",
    image: "/badge-1.webp",
  },
  {
    title: "PENDING, if rated C with exceptional \n progress in a year",
    image: "/badge-2.webp",
  },
];

export default function ShowcaseReport() {
  return (
    <section className="py-20">
      <div className="container flex flex-col gap-y-5">
        <div>
          <Badge>Badges</Badge>
        </div>
        <h2 className="h2-content">
          Showcase Your Sustainability Reporting to Attract Customers
        </h2>
        <Line />
        <p className="p-content font-medium">
          Earn our sustainability badge as a payoff to your sustainability
          efforts. Display it digitally or physically to attract eco-conscious
          customers, investors, & partners.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-9 mx-auto w-3/4 mt-5">
          {CardsInfo.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center gap-5 p-12 text-center text-balance card rounded-2xl">
              <Image
                alt="IMPAKTER Badge"
                src={card.image}
                className="w-auto h-auto sm:h-[200px]"
                height={291}
                width={291}
              />
              <h4 className="text-base font-semibold">
              {card.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </h4>
              <Line />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
