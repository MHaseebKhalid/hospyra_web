import type { Metadata } from "next";
import ExpansionBanner from '@/components/banners/ExpansionBanner'
import FeatureCard from "@/components/cards/FeatureCard";
import TitleCard from "@/components/cards/TitleCard";
import expansion_ideal_1 from "@/public/assets/pngs/expansion-ideal-for-1.png";
import expansion_ideal_2 from "@/public/assets/pngs/expansion-ideal-for-2.png";
import expansion_ideal_3 from "@/public/assets/pngs/expansion-ideal-for-3.png";
import expansion_ideal_4 from "@/public/assets/pngs/expansion-ideal-for-4.jpg";

export const metadata: Metadata = {
  title: "Expansion Services - Hospyra",
  description: "Strategic planning for restaurant expansion and growth. Comprehensive strategic planning to help your restaurant grow successfully, whether you're opening new locations or scaling your operations.",
  keywords: "restaurant expansion, restaurant growth, scaling restaurants, opening new locations, restaurant strategy",
};

const ExpansionPage = () => {
  return (
    <>
      <ExpansionBanner />
      <div className='bg-[#fffdfb] py-14'>
        <TitleCard title={'Ideal For'} className='px-[4%]' />
        <div className='flex overflow-x-auto hide-scrollbar gap-6 px-[4%] pt-12'>
          <FeatureCard className='w-98 h-85 shadow' image={expansion_ideal_1} title={'Proven operators'} />
          <FeatureCard className='w-98 h-85 shadow' image={expansion_ideal_2} title={'Multi-location groups'} />
          <FeatureCard className='w-98 h-85 shadow' image={expansion_ideal_3} title={'Hospitality investors'} />
          <FeatureCard className='w-98 h-85 shadow' image={expansion_ideal_4} title={'Portfolio builders'} />
        </div>
      </div>
    </>
  )
}

export default ExpansionPage

