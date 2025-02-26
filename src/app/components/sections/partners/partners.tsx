import Image from "next/image";

const PARTNERS_INFO = [
  { name: "Ashden", src: "/img/partners/partner-ashden.webp" },
  {
    name: "B Corporations",
    src: "/img/partners/partner-bcorporations.webp",
  },
  { name: "Bioversity", src: "/img/partners/partner-bioversity.webp" },
  { name: "CCAFS", src: "/img/partners/partner-ccafs.webp" },
  { name: "CGIAR", src: "/img/partners/partner-cgiar.webp" },
  { name: "FAO", src: "/img/partners/partner-fao.webp" },
  { name: "Heart", src: "/img/partners/partner-heart.webp" },
  { name: "ICLEI", src: "/img/partners/partner-iclei.webp" },
  { name: "IFAW", src: "/img/partners/partner-ifaw.webp" },
  { name: "IISD", src: "/img/partners/partner-iisd.webp" },
  { name: "Institute", src: "/img/partners/partner-institute.webp" },
  { name: "NREL", src: "/img/partners/partner-nrel.webp" },
  { name: "P4G", src: "/img/partners/partner-p4g.webp" },
  { name: "Root Capital", src: "/img/partners/partner-rootcapital.webp" },
  { name: "Tree Nation", src: "/img/partners/partner-treenation.webp" },
];

export default function Partners() {
  return (
    <section className="py-10">
      <div className="carousel-infinite">
        <div className="carousel-track">
          {PARTNERS_INFO.concat(PARTNERS_INFO).map((partner, index) => (
            <div key={index} className="carousel-item">
              <Image
                src={partner.src}
                height={100}
                width={100}
                alt={`IMPAKTER ${partner.name}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
