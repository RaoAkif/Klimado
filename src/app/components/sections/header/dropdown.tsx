import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

export default function Dropdown({
  setIsMenu,
  name,
  links,
}: {
  setIsMenu: Dispatch<SetStateAction<boolean>>;
  name: string;
  links: { name: string; link: string }[];
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <li
      className="relative"
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <button className="flex gap-1 uppercase">
        {name} <ChevronDown className="size-5 text-primary" />
      </button>
      {showDropdown && (
        <div className="absolute flex flex-col bg-white border justify-start text-start text-nowrap rounded-lg z-[9999] top-5">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.link}
              className="border-b py-3 px-4 hover:text-primary transition-all duration-300 font-semibold"
              onClick={() => {
                setIsMenu(false);
                setShowDropdown(false); // Close the dropdown
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
