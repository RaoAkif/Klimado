import { EXTERNAL_LINKS } from "@/data/links/all-web-external-links";
import Link from "next/link";

const LINKS_INFO = [
  {
    title: "ESG Software",
    links: [
      { title: "ESG Tool for Companies", link: EXTERNAL_LINKS.esgToolBusiness },
      {
        title: "ESG Tool for Enterprise",
        link: EXTERNAL_LINKS.esgToolSupply,
      },
    ],
  },
  {
    title: "Pricing",
    links: [
      { title: "Plans & Pricing", link: EXTERNAL_LINKS.pricing },
      {
        title: "*Free Initial ESG Score",
        link: EXTERNAL_LINKS.login,
      },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About Us", link: EXTERNAL_LINKS.aboutUs },
      { title: "Contact Us", link: EXTERNAL_LINKS.contact },
    ],
  },
  {
    title: "Our Platforms",
    links: [
      { title: "IMPAKTER Media", link: EXTERNAL_LINKS.impakterMedia },
      { title: "IMPAKTER PRO", link: EXTERNAL_LINKS.impakterPro },
      { title: "IMPAKTER INDEX", link: EXTERNAL_LINKS.impakterIndex },
    ],
  },
];
export default function LinksSection() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 text-sm gap-8">
      {LINKS_INFO.map(({ title, links }, index) => (
        <div key={index} className="flex flex-col gap-2">
          <h3 className="font-semibold ">{title}</h3>
          {links.map(({ title, link }) => (
            <Link key={title} href={link} className="hover:underline">
              {title}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
