"use client";
import Link from "next/link";
import Navbar from "@/components/sections/header/navbar-header";
import ImpakterProTextLogo from "../../ui/impakter-pro-text-logo";
import { EXTERNAL_LINKS } from "@/data/links/all-web-external-links";

export default function Header() {
  return (
    <header className="h-[4rem] flex items-center border-b sticky top-0 bg-white z-50">
      <div className="mx-auto flex justify-between items-center w-full px-5 lg:px-16">
        <Link href={EXTERNAL_LINKS.impakterPro} className="font-bold">
          <ImpakterProTextLogo />
        </Link>
        <Navbar />
      </div>
    </header>
  );
}
