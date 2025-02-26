import GetStarted from "@/components/sections/get-started/get-started-section";
import { Metadata } from "next";
import Hero from "./components/hero";
import OurStory from "./components/our-story";
import OurMission from "./components/our-mission";
import OurValues from "./components/our-values";
import OurMethodology from "./components/our-methodology";
import UNCommitment from "./components/un-commitment";

export const metadata: Metadata = {
  title: "A 360° Business Sustainability Solution | IMPAKTER PRO",
  description:
    "Learn how IMPAKTER PRO provides 360° sustainability solutions, empowering businesses to achieve ESG compliance and drive meaningful change.",
};

export default function AboutUs() {
  return (
    <>
      <Hero />
      <OurStory />
      <OurMission />
      <OurValues />
      <OurMethodology />
      <UNCommitment />
      <GetStarted />
    </>
  );
}
