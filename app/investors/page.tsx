import type { Metadata } from "next";

import InvestorsBanner from '@/components/banners/InvestorsBanner'
import InvestorInquiryForm from "@/components/forms/InvestorInquiryForm";
import CuratedHospitalityProjects from "@/components/sections/CuratedHospitalityProjects";
import HospitalityWithDiscipline from "@/components/sections/HospitalityWithDiscipline";
import FeatureCard from "@/components/cards/FeatureCard";
import TitleCard from "@/components/cards/TitleCard";

import Execution_img_1 from "@/public/assets/pngs/execution-advantage-1.png";
import Execution_img_2 from "@/public/assets/pngs/execution-advantage-2.png";
import Execution_img_3 from "@/public/assets/pngs/execution-advantage-3.png";
import Execution_img_4 from "@/public/assets/pngs/execution-advantage-4.png";

import Image from "next/image";
import WhoThisIsForImg from "@/public/assets/pngs/who-this-is-for.png";

import { CircleCheck } from "lucide-react";
import InvestorEngagementModel from "@/components/sections/InvestorEngagementModel";

export const metadata: Metadata = {
  title: "Investors - Hospyra",
  description:
    "Invest in restaurants with structure, not guesswork. Hospyra gives investors access to carefully structured hospitality projects backed by market research and proven execution teams.",
  keywords:
    "restaurant investment, hospitality investment, restaurant funding, investment opportunities, restaurant investors",
};

const executionCards = [
  { image: Execution_img_1, title: "Concept Creation & Validation" },
  { image: Execution_img_2, title: "Location Strategy & Site Selection" },
  { image: Execution_img_3, title: "Team Building (Chefs, Leadership, Operations)" },
  { image: Execution_img_4, title: "Design & Vendor" },
];

const audience = [
  "Hospitality-Focused Investors",
  "Family Offices",
  "High-Net-Worth Individuals",
  "Strategic Partners",
  "Groups Looking For Structured Restaurant Investments",
];

const InvestorsPage = () => {
  return (
    <>
      <InvestorsBanner />
      <HospitalityWithDiscipline />
      <CuratedHospitalityProjects />

      <div className="bg-[#fffdfb] py-14">
        <TitleCard title="EXECUTION IS THE ADVANTAGE" className="px-[4%]" />
        <p className="text-center p-3 text-[#27272A]">
          Hospyra Stays Involved Across The Entire Lifecycle:
        </p>

        <div className="flex overflow-x-auto hide-scrollbar gap-6 px-[4%] py-12">
          {executionCards.map((card, index) => (
            <FeatureCard
              key={index}
              className="w-95 h-85 shadow shrink-0"
              image={card.image}
              title={card.title}
            />
          ))}
        </div>
      </div>

      <div className="bg-[#F6F6F6] py-12 md:py-16 lg:py-20 px-[4%]">
        <TitleCard title="WHO THIS IS FOR" className="mb-4" />
        <p className="text-base text-center font-normal text-[#27272A]">
          Professional Support & Coordination
        </p>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center mt-10">
          <div className="space-y-4 md:space-y-5 max-md:order-1">
            <ul className="space-y-4 md:space-y-5">
              {audience.map((item, index) => (
                <li key={index} className="font-semibold md:text-xl text-[#27272A] flex items-center gap-3 text-lg">
                  <CircleCheck color="#00A63E" className="shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative w-full rounded-2xl overflow-hidden">
            <Image src={WhoThisIsForImg} alt="Two men discussing business in a restaurant setting" className="w-full h-auto object-cover rounded-2xl" priority />
          </div>
        </div>
      </div>

      <InvestorEngagementModel />

      <InvestorInquiryForm />
    </>
  );
};

export default InvestorsPage;