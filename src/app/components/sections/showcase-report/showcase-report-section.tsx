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

// ✅ Updated Verified Products Paths
const VerifiedProducts = [
  "/img/verified/verified_product_1.png",
  "/img/verified/verified_product_2.png",
  "/img/verified/verified_product_3.png",
];

export default function ShowcaseReport() {
  return (
    <section className="py-20">
      <div className="container flex flex-col gap-y-8 ml-16">
        <div className="ml-4">
          <Badge>Explore</Badge>
        </div>
        <h2 className="text-2xl font-bold ml-4">
        Showcase Your Sustainability Reporting to Attract Customers
      </h2>
      <span className="ml-4">
        <Line />
      </span>
      <p className="font-medium max-w-[95%] text-base text-[#7C7C7C] ml-4">
        Earn our sustainability badge as a payoff to your sustainability efforts.
        Display it digitally or physically to attract eco-conscious customers,
        investors, & partners.
      </p>

        {/* ✅ Badge Cards Section (Responsive Two-Column Layout) */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-10 w-full mt-5">
          {CardsInfo.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center text-center gap-4 bg-white rounded-3xl shadow-md shadow-gray-200 border border-gray-100 p-6 max-w-lg flex-1"
            >
              <Image
                alt="IMPAKTER Badge"
                src={card.image}
                height={291}
                width={291}
              />
              <h4 className="text-base font-semibold leading-tight">
                {card.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h4>
              <div className="w-6 h-1 bg-primary rounded-full"></div>
            </div>
          ))}
        </div>

        {/* ✅ Verified Products Grid Below (Centered, Consistent Size) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {VerifiedProducts.map((image, index) => (
            <div key={index} className="flex justify-center">
              <Image
                alt={`Verified Product ${index + 1}`}
                src={image}
                width={494}
                height={410}
                className="w-auto h-auto shadow-md rounded-3xl border border-gray-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
