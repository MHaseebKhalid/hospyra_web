import type { Metadata } from "next";
import Image from 'next/image';
import CulinaryBanner from '@/components/banners/CulinaryBanner'
import TitleCard from "@/components/cards/TitleCard";
import CulinaryServices from "@/components/sections/CulinaryServices";

export const metadata: Metadata = {
  title: "Culinary Services - Hospyra",
  description: "Expert culinary consulting and menu development services. Create exceptional dining experiences through expert menu development, recipe creation, and culinary consulting tailored to your restaurant's unique vision.",
  keywords: "culinary consulting, menu development, restaurant menu, recipe creation, culinary services, food consulting",
};

const CulinaryPage = () => {
  const idealForCards = [
    {
      image: '/assets/pngs/ideal-for-1.png',
      label: 'New Concepts',
    },
    {
      image: '/assets/pngs/ideal-for-2.png',
      label: 'Existing Restaurants',
    },
    {
      image: '/assets/pngs/ideal-for-3.png',
      label: 'Growing Brands',
    },
  ]

  return (
    <>
      <CulinaryBanner />
      <CulinaryServices/>
      <div className="lg:px-[4%] py-10">
        <div className="bg-[#00BD72] lg:rounded-3xl py-12 lg:px-[4%]">
          <TitleCard title="Ideal for" color="white" />
          <div className="flex max-lg:overflow-x-auto hide-scrollbar lg:grid lg:grid-cols-3 gap-6 mt-8 max-lg:px-[4%]">
            {idealForCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md shrink-0 max-lg:w-80"
              >
                <div className="relative w-full h-40">
                  <Image
                    src={card.image}
                    alt={card.label}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xl font-semibold text-[#27272A]">
                    {card.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default CulinaryPage;

