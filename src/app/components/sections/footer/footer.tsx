import DividerSlim from "@/components/ui/divider-slim";
import LeftSection from "./left-section";
import LinksSection from "./links-section";
import ImpakterProTextLogo from "@/components/ui/impakter-pro-text-logo";
import Link from "next/link";
import { EXTERNAL_LINKS } from "@/data/links/all-web-external-links";

export default function Footer() {
  return (
    <footer className="bg-white py-12">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <LeftSection />
          <LinksSection />
        </div>
        <div className="my-5">
          <DividerSlim />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-0">
          <div className="flex gap-3 flex-col lg:flex-row">
            <ImpakterProTextLogo />{" "}
            <p className="font-semibold">© 2025 IMPAKTER All rights reserved</p>
          </div>

          <div className="flex gap-3 lg:justify-end">
            <Link
              href={EXTERNAL_LINKS.privacyPolicy}
              className="font-semibold hover:underline">
              Privacy Policy
            </Link>
            <span className="text-typo-secondary/50">|</span>
            <Link
              href={EXTERNAL_LINKS.contact}
              className="font-semibold hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
