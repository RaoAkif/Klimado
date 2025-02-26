import Badge from "@/components/ui/badge";
import DividerSlim from "@/components/ui/divider-slim";
import imgBadge1 from "@/(routes)/about-us/assets/un-badge-1.webp";
import imgBadge2 from "@/(routes)/about-us/assets/un-badge-2.webp";
import imgBadge3 from "@/(routes)/about-us/assets/un-badge-3.webp";
import imgBadge4 from "@/(routes)/about-us/assets/un-badge-4.webp";
import imgBadge5 from "@/(routes)/about-us/assets/un-badge-5.webp";
import Image from "next/image";

const CARDS_INFO = [
  {
    title: "Quality education",
    img: imgBadge1,
  },
  {
    title: "Gender Equality",
    img: imgBadge2,
  },
  {
    title: "Industry, Innovation and Infrastructure",
    img: imgBadge3,
  },
  {
    title: "Sustainable Cities and Communities",
    img: imgBadge4,
  },
  {
    title: "Climate Action",
    img: imgBadge5,
  },
];

export default function UNCommitment() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="flex flex-col gap-4 items-start">
          <Badge>United nations</Badge>
          <h2 className="h2-content">Our UN SDG Commitment</h2>
          <DividerSlim />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {CARDS_INFO.map((card, index) => (
              <div
                key={index}
                className="flex flex-col items-center h-full text-center gap-3">
                <Image
                  src={card.img}
                  alt={card.title + " badge"}
                  height={150}
                  width={150}
                  className="rounded-lg"
                />
                <h4 className="font-semibold">{card.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
