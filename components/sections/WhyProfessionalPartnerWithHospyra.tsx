'use client'

import React from 'react'
import TitleCard from '@/components/cards/TitleCard'
import FeatureCard from '@/components/cards/FeatureCard'
import ProfessionalPartner_img_1 from "@/public/assets/pngs/professional-partner-1.png";
import ProfessionalPartner_img_2 from "@/public/assets/pngs/professional-partner-2.png";
import ProfessionalPartner_img_3 from "@/public/assets/pngs/professional-partner-3.png";
import ProfessionalPartner_img_4 from "@/public/assets/pngs/professional-partner-4.png";

const WhyProfessionalPartnerWithHospyra = () => {
  const reasons = [
    {
      image: ProfessionalPartner_img_1,
      title: 'Access To Serious Operators And Investors',
    },
    {
      image: ProfessionalPartner_img_2,
      title: 'Clearly Defined Scopes Of Work',
    },
    {
      image: ProfessionalPartner_img_3,
      title: 'Coordinated Timelines',
    },
    {
      image: ProfessionalPartner_img_4,
      title: 'Central Management',
    },
  ]

  return (
    <div className="bg-[#fffdfb] py-14">
      <div className='px-[4%]'>
        <TitleCard title="WHY PROFESSIONALS PARTNER WITH HOSPYRA" className="mb-4" />
        <p className="text-center text-lg text-[#27272A]">
          Focused Work. Clear Scope. Real Projects.
        </p>
      </div>
      <div className="flex overflow-x-auto hide-scrollbar gap-6 px-[4%] py-12">
        {reasons.map((reason, index) => (
          <FeatureCard
            key={index}
            image={reason.image}
            title={reason.title}
            className="w-90 h-86"
            priority={index === 0}
          />
        ))}
      </div>
    </div>
  )
}

export default WhyProfessionalPartnerWithHospyra
