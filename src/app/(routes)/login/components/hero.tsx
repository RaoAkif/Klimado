import Image from "next/image";
import Line from "@/components/ui/line";
import heroImg from "@/(routes)/about-us/assets/hero-about-us.svg";

export default function Hero() {
  return (
    <section className="first-section">
      <div className="flex flex-col  lg:mt-20 lg:gap-5 container relative">
        <Image
          src={heroImg}
          alt="Hero Image About Us"
          height={300}
          width={300}
          className="lg:absolute -right-6 -top-10 w-auto static"
        />

        <div className="flex flex-col items-center text-center gap-y-3 md:gap-y-5 lg:text-start lg:items-start w-full lg:w-[45%]">
          <h1 className="h1-content ">
            Empowering Businesses on Their Sustainability Journey
          </h1>
          <p className="p-content">
            At IMPAKTER, we believe, meeting 1.5°C is not a matter of
            destination but speed. Our comprehensive sustainability solutions
            help businesses of all size, across industries to accelerate their
            speed towards sustainable transformation.
          </p>
          <Line />
        </div>
      </div>
    </section>
  );
}
