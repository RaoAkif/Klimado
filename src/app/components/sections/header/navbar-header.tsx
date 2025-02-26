"use client";
import { useState } from "react";
import { X } from "lucide-react";
import NavbarLinks from "./navbar-links";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

  return (
    <nav>
      <button
        className="block lg:hidden ml-auto"
        onClick={() => setIsMenu(!isMenu)}>
        {isMenu ? (
          <X className="size-7 text-primary" />
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5 6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6C19 6.55228 18.5523 7 18 7H6C5.44772 7 5 6.55228 5 6ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM5 18C5 17.4477 5.44772 17 6 17H18C18.5523 17 19 17.4477 19 18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18Z"
              fill="#1492EF"
            />
          </svg>
        )}
      </button>

      <NavbarLinks isMenu={isMenu} setIsMenu={setIsMenu} />
    </nav>
  );
}
