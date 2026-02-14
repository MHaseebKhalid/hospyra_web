import type { Metadata } from "next";
import EntertainmentBanner from '@/components/banners/EntertainmentBanner'
import UnstoppableCard from '@/components/cards/UnstoppableCard'
import { ArrowRight, Check } from 'lucide-react';
import EntertainmentImg from "@/public/assets/pngs/entertainment-img.png";
import Image from "next/image";
import TitleCard from "@/components/cards/TitleCard";

export const metadata: Metadata = {
  title: "Entertainment Services - Hospyra",
  description: "Entertainment solutions to enhance your restaurant experience. Create memorable experiences for your guests through live music, events, and entertainment programming.",
  keywords: "restaurant entertainment, live music, restaurant events, entertainment programming, restaurant experience",
};

const EntertainmentPage = () => {
  return (
    <>
      <EntertainmentBanner />
      <div className="px-[4%] py-14">
        <TitleCard title={'Entertainment Services'} />
        <p className='text-center p-3 text-[#27272A]'>Create unforgettable moments that keep guests coming back</p>
        <div className="grid md:grid-cols-2 gap-8 pt-10">
          <div className="space-y-4 lg:space-y-6 my-auto max-md:order-1">
            {['DJs & live entertainment',
              'Lighting & sound systems',
              'Event programming',
              'Grand openings & activations'
            ].map((text) => (
              <div key={text} className="flex items-center gap-3 bg-[#ECECEC4D] p-3 rounded-xl">
                <Check color="#27272A" />
                <p className="text-lg lg:text-xl font-semibold">{text}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center">
            <Image src={EntertainmentImg} alt="Entertainment Service" className="w-full" />
          </div>
        </div>
      </div>
      <UnstoppableCard
        heading="READY TO CREATE UNFORGETTABLE EXPERIENCES?"
        description="Let's Transform Your Restaurant Into A Destination People Talk About"
        backgroundColor="#F05830"
        buttons={[
          {
            title: "Upgrade My Experience",
            bgColor: "#387660",
            color: "white",
            href: "/contact",
            icon: <ArrowRight className="w-5 h-5" />,
          },
          {
            title: "Plan My Opening Event",
            bgColor: "white",
            color: "#27272A",
            href: "/contact",
            icon: <ArrowRight className="w-5 h-5" />,
          },
        ]}
      />
    </>
  )
}

export default EntertainmentPage

