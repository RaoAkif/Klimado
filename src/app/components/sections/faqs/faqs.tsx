"use client";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ChevronsUp } from "lucide-react";
import { useRouter } from "next/navigation";

import Markdown from "react-markdown";
import Line from "../../ui/line";
import Image from "next/image";

export default function FAQs({
  title,
  faqs,
}: {
  title: string;
  faqs: { question: string; answer: string }[];
}) {
  const [showAll, setShowAll] = useState(false);
  const router = useRouter();

  return (
    <section id="FAQsSection" className="py-20">
      <div className="container flex flex-col gap-3">
        <Line />
        <h2 className="h2-content">{title}</h2>
        <Accordion
          type="single"
          collapsible
          defaultValue="1"
          className="mt-5 w-full">
          {showAll
            ? faqs.map(({ question, answer }, index) => (
                <AccordionItem
                  value={`${index + 1}`}
                  key={index}
                  className=" px-4 py-1 mt-3  rounded-3xl bg-[#F9FAFC]">
                  <AccordionTrigger className="font-semibold text-lg">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <Markdown className="prose">{answer}</Markdown>
                  </AccordionContent>
                </AccordionItem>
              ))
            : faqs.slice(0, 4).map(({ question, answer }, index) => (
                <AccordionItem
                  value={`${index + 1}`}
                  key={index}
                  className=" px-4 py-1 mt-3  rounded-3xl bg-[#F9FAFC]">
                  <AccordionTrigger className="font-semibold text-lg">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <Markdown className="prose">{answer}</Markdown>
                  </AccordionContent>
                </AccordionItem>
              ))}
        </Accordion>
        <button
          onClick={() => {
            if (showAll) {
              router.replace("#FAQsSection");
            }
            setShowAll(!showAll);
          }}
          className="self-center mt-10 flex gap-3 items-center text-primary font-bold">
          {showAll ? (
            <>
              SHOW LESS <ChevronsUp />
            </>
          ) : (
            <>
              <span className="text-sm">READ MORE FAQS</span>
              <Image width={16} height={16} alt="arrow up icon" src="/img/icons/arrow-up-right.png" />
            </>
          )}
        </button>
      </div>
    </section>
  );
}
