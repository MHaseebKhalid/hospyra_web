import React from 'react'
import Image from 'next/image'
import WhyHospyraExistsImg from "@/public/assets/pngs/why-hospyra-exists.png";
import TitleCard from '../cards/TitleCard';

const WhyHospyraExists = () => {
  return (
    <div className="bg-white py-12 md:py-16 lg:py-20">
      <div className="px-[4%]">

        <div className="mb-10">
          <div className="relative w-full rounded-2xl overflow-hidden h-79.25">
            <Image
              src={WhyHospyraExistsImg}
              alt="Upscale dining space with elegantly set tables"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          <div className="space-y-4">

            <TitleCard orangeLabel='WHY HOSPYRA EXISTS' title='Restaurants Don&apos;t Fail Systems Do' className='lg:text-left' />

            <p className="text-xl md:text-2xl max-lg:text-center text-[#27272A] leading-relaxed">
              Most Restaurants Don&apos;t Struggle Because Of Food Or Service.
            </p>
          </div>

          <div className="space-y-4 max-lg:text-center">
            <p className="text-xl md:text-2xl text-[#27272A] leading-relaxed">
              They Struggle Because People Don&apos;t See Them, Remember Them, Or Talk About Them.
            </p>

            <p className="text-xl md:text-2xl text-[#27272A] leading-relaxed">
              Marketing, Media, Design, Vendors, And Operations Often Live In Silos With No Single Partner Accountable For Results. Hospyra Exists To Unify Growth, Media, And Execution Under One Roof.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyHospyraExists
