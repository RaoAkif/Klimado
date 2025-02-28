import { EXTERNAL_LINKS } from "@/data/links/all-web-external-links";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import Dropdown from "./dropdown";
import Modal from "@/components/ui/Modal";

export default function NavbarLinks({
  isMenu,
  setIsMenu,
}: {
  isMenu: boolean;
  setIsMenu: Dispatch<SetStateAction<boolean>>;
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ul
        className={`${
          isMenu ? "left-0" : "-left-full"
        } uppercase top-[3.4rem] font-bold lg:justify-between flex lg:flex-row flex-col absolute lg:static z-50 w-full gap-8 lg:gap-10 lg:items-center py-20 lg:py-1 transition-all duration-500 bg-white lg:bg-transparent items-start pl-5 lg:pl-0 h-screen lg:h-auto text-sm`}
      >
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
        <li className="hover:text-primary transition-all ease-in">
          <Link href={EXTERNAL_LINKS.resources}>Resources</Link>
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
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn btn-primary flex gap-1 items-center"
          >
            <LogIn className="size-4" />
            Pre Sign Up
          </button>
        </li>
      </ul>
      {/* Render the modal */}
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </>
  );
}