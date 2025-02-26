import ImpakterProTextLogo from "@/components/ui/impakter-pro-text-logo";
import { EXTERNAL_LINKS } from "@/data/links/all-web-external-links";
import Image from "next/image";
import Link from "next/link";

export default function GetStarted() {
  return (
    <section className="py-20 bg-primary-light relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 container-wide">
        <div className="flex flex-col gap-5 lg:pr-20">
          <ImpakterProTextLogo />
          <h2 className="h2-content">Ready to get started?</h2>
          <p className="p-content font-semibold">
            From assessing your current ESG performance to road-mapping your
            path to comprehensive sustainability
          </p>
          <div className="flex gap-5 flex-col lg:flex-row justify-start items-start">
            <Link
              href={EXTERNAL_LINKS.contact}
              className="btn btn-primary ">
              Contact Us
            </Link>
            <Link
              href={EXTERNAL_LINKS.login}
              className="btn btn-secondary ">
              Get Free Score
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-1/2 max-h-[90%] hidden lg:block">
        <Image
          src={"/get-started-img.webp"}
          width={1316}
          height={549}
          alt="Dashboard image"
        />
      </div>
    </section>
  );
}
