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
    <li className="relative">
      <button
        className="flex gap-1 uppercase w-full lg:w-auto"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {name} <ChevronDown className={`size-5 text-primary transition-transform ${showDropdown ? "rotate-180" : ""}`} />
      </button>

      {/* Desktop Mode: Hover Dropdown */}
      <div className="hidden lg:block">
        {showDropdown && (
          <div className="absolute flex flex-col bg-white border justify-start text-start text-nowrap rounded-lg z-[9999] top-5">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                className="border-b py-3 px-4 hover:text-primary transition-all duration-300 font-semibold"
                onClick={() => {
                  setIsMenu(false);
                  setShowDropdown(false);
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Mode: Inline Expansion */}
      <div className={`lg:hidden flex flex-col gap-2 mt-2 transition-all duration-300 ${showDropdown ? "block" : "hidden"}`}>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.link}
            className="py-2 px-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-all duration-300 font-medium"
            onClick={() => setIsMenu(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </li>
  );
}
