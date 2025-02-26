import { EXTERNAL_LINKS } from "@/data/links/all-web-external-links";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import Dropdown from "./dropdown";

export default function NavbarLinks({
  isMenu,
  setIsMenu,
}: {
  isMenu: boolean;
  setIsMenu: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <ul
      className={`${
        isMenu ? "left-0" : "-left-full"
      } uppercase top-[3.4rem] font-bold lg:justify-between flex lg:flex-row flex-col absolute lg:static z-50 w-full gap-8 lg:gap-10 lg:items-center py-20 lg:py-1 transition-all duration-500 bg-white lg:bg-transparent items-start pl-5 lg:pl-0 h-screen lg:h-auto text-sm`}>
      <Dropdown
        setIsMenu={setIsMenu}
        name="Solutions"
        links={[
          { name: "ESG For Companies", link: EXTERNAL_LINKS.esgToolBusiness },
          { name: "ESG For Enterprises", link: EXTERNAL_LINKS.esgToolSupply },
        ]}
      />
      <li className="hover:text-primary transition-all ease-in">
        <Link href={EXTERNAL_LINKS.pricing}>Pricing</Link>
      </li>
      <Dropdown
        setIsMenu={setIsMenu}
        name="Company"
        links={[
          { name: "About Us", link: EXTERNAL_LINKS.aboutUs },
          { name: "Contact Us", link: EXTERNAL_LINKS.contact },
        ]}
      />
      <li>
        <Link href={EXTERNAL_LINKS.contact} className="btn btn-secondary">
          Book a demo
        </Link>
      </li>
      <li>
        <Link
          href={EXTERNAL_LINKS.login}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary flex gap-1 items-center">
          <LogIn className="size-4" />
          Sign in
        </Link>
      </li>
    </ul>
  );
}
