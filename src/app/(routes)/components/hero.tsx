// 'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Modal from '@/components/ui/Modal';
import Line from '@/components/ui/line';
import DividerSlim from '@/components/ui/divider-slim';
import Badge from '@/components/ui/badge';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="first-section overflow-hidden">
      <div className="flex flex-col lg:mt-12 lg:gap-5 container relative">
        <Image
          src="/hero-homepage.svg"
          alt="Hero Image"
          height={300}
          width={300}
          className="lg:absolute -right-52 -top-52 w-auto static -z-10"
        />

        <div className="flex flex-col items-center text-center gap-y-3 md:gap-y-5 lg:text-start lg:items-start w-full lg:w-[45%]">
          <div>
            <Badge>For Businesses</Badge>
          </div>
          <h1 className="h1-content">
            ESG Software for CSRD Reporting: Easy. Affordable. Fast.
          </h1>
          <Line />
          <p className="p-content" style={{ fontWeight: '600' }}>
            ESG Tool for 360° sustainability solution for EU businesses across all sectors.
          </p>
          <ul className="flex flex-col gap-2 md:flex-row md:gap-5 lg:flex-col lg:gap-2 mt-[-9px]">
            <li className="p-content flex gap-1 items-center text-sm">
              <Image
                className="mr-1"
                height={14}
                width={14}
                src="/img/icons/Vector (Stroke).png"
                alt="tick icon"
              />{' '}
              No Training Required
            </li>
            <li className="p-content flex gap-1 items-center text-sm">
              <Image
                className="mr-1"
                height={14}
                width={14}
                src="/img/icons/Vector (Stroke).png"
                alt="tick icon"
              />{' '}
              Zero Consultancy Fee
            </li>
            <li className="p-content flex gap-1 items-center text-sm">
              <Image
                className="mr-1"
                height={14}
                width={14}
                src="/img/icons/Vector (Stroke).png"
                alt="tick icon"
              />{' '}
              Setup Within Minutes
            </li>
          </ul>

          <DividerSlim />
          <button
            onClick={() => setIsModalOpen(true)}
            className="gap-2 btn btn-secondary"
          >
            Pre Sign Up <ArrowRight />
          </button>
          <p className="p-content font-medium">*no credit card required</p>
        </div>
      </div>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}
