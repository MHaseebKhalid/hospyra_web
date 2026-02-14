'use client'

import React from 'react'
import Image from 'next/image'
import TitleCard from '@/components/cards/TitleCard'
import { Shield, FileText, Calendar, BarChart3, Target } from 'lucide-react'
import WhoCanApply_img_1 from "@/public/assets/pngs/who-can-apply-1.png";
import WhoCanApply_img_2 from "@/public/assets/pngs/who-can-apply-2.png";
import WhoCanApply_img_3 from "@/public/assets/pngs/who-can-apply-3.png";
import WhoCanApply_img_4 from "@/public/assets/pngs/who-can-apply-4.png";

const ApplyEligibility = () => {
  const whoCanApply = [
    {
      image: WhoCanApply_img_1,
      label: 'An Independent Professional',
    },
    {
      image: WhoCanApply_img_2,
      label: 'A Licensed Individual',
    },
    {
      image: WhoCanApply_img_3,
      label: 'A Principal Or Owner Of A Professional Firm',
    },
    {
      image: WhoCanApply_img_4,
      label: 'A Specialist With Hospitality Experience',
    },
  ]

  const whoCannotApply = [
    {
      icon: <Shield className="w-9 h-9" />,
      label: 'Staffing Agencies',
    },
    {
      icon: <FileText className="w-9 h-9" />,
      label: 'Recruitment Firms',
    },
    {
      icon: <Calendar className="w-9 h-9" />,
      label: 'Outsourcing Companies',
    },
    {
      icon: <BarChart3 className="w-9 h-9" />,
      label: 'Marketing Or Media Agencies',
    },
    {
      icon: <Target className="w-9 h-9" />,
      label: 'Talent Brokers',
    },
  ]

  return (
    <div className='lg:px-[4%]'>
      <div className="bg-white py-14">
        <TitleCard title="WHO CAN APPLY" className="mb-4" />
        <p className="text-center text-lg text-[#27272A] mb-12">
          Direct Professionals & Professional Firms
        </p>
        <div className="flex lg:grid grid-cols-4 overflow-x-auto hide-scrollbar gap-6 pb-6 max-lg:px-[4%]">
          {whoCanApply.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-md shrink-0 max-lg:w-80"
            >
              <div className="relative w-full h-40">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-base font-semibold text-[#27272A]">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#27272A] py-14 lg:rounded-3xl">
        <div className='px-[4%]'>
          <TitleCard
            title="WHO CANNOT APPLY"
            color="white"
            className="mb-4"
          />
          <p className="text-center font-bold text-lg text-white mb-2">
            Not Accepted
          </p>
          <p className="text-center text-base text-white/80 mb-12 max-w-3xl mx-auto">
            To Maintain Quality And Accountability, Hospyra Does Not Onboard:
          </p>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar px-[4%] gap-6">
          {whoCannotApply.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shrink-0 w-64 h-40"
            >
              <div className="text-[#27272A] mb-4">
                {item.icon}
              </div>
              <p className="text-2xl font-semibold text-[#27272A]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ApplyEligibility
