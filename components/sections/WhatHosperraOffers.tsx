'use client'

import { useState } from 'react'
import Image from 'next/image'
import GlobalButton from '../buttons/GlobalButton'
import img_1 from "@/public/assets/pngs/hosperra-offers-1.png";
import img_2 from "@/public/assets/pngs/hosperra-offers-2.png";
import img_3 from "@/public/assets/pngs/hosperra-offers-3.png";

const categories = [
  'Food & Supply',
  'Technology Systems',
  'Staffing',
  'Restaurant Optimization',
  'Marketing & Growth',
  'Emergency Support',
  'Construction & Design',
  'Kitchen Equipment',
  'Smallware',
  'Furniture & Fixtures',
  'Sound System & Lighting',
]

const WhatHosperraOffers = () => {

  const [activeCategory, setActiveCategory] = useState('Food & Supply')

  return (
    <section className="py-10 lg:py-16 px-[4%]">
      <div className="text-center mb-12 lg:mb-16">
        <h2 className="text-[46px] uppercase max-[1200px]:text-[36px] max-[640px]:text-[28px] font-semibold">
          What Hosperra Offers
        </h2>
        <p className="text-base text-black">
          Everything your business needs handled through one system
        </p>
      </div>

      <div className="lg:grid grid-cols-7 gap-6 mb-12 lg:mb-16">
        <div className="bg-[#F9F8F8] rounded-2xl p-2 lg:p-4 lg:max-h-120 overflow-y-auto hide-scrollbar lg:col-span-2">
          <ul className="space-y-2 flex lg:block whitespace-nowrap">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left py-1 px-3 rounded-lg transition-colors duration-200 text-md lg:text-xl font-effra ${activeCategory === category
                    ? 'text-[#FF6B35] font-semibold'
                    : 'text-[#666666]'
                    }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2 max-lg:flex overflow-auto hide-scrollbar lg:mt-0 mt-8 gap-6">
          <div className="relative h-80 max-lg:w-[320px] shrink-0 lg:h-[47%] rounded-xl overflow-hidden">
            <Image
              src={img_1}
              alt="Gourmet food"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 max-lg:w-[320px] shrink-0 lg:h-[47%] lg:mt-[7%] rounded-xl overflow-hidden">
            <Image
              src={img_2}
              alt="Fine dining experience"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-80 max-lg:w-[320px] shrink-0 lg:col-span-3 lg:h-full lg:hidden rounded-xl overflow-hidden">
            <Image
              src={img_3}
              alt="Warehouse operations"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="relative hidden lg:block col-span-3 h-full rounded-xl overflow-hidden">
          <Image
            src={img_3}
            alt="Warehouse operations"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="max-w-md mx-auto">
        <GlobalButton
          color="white"
          font="500"
          height="45px"
          width="100%"
          borderRadius="8px"
          bgColor="#1E50C1"
          title="Start with $0 — Take your business to the next level with $0"
          className="font-effra"
        />
      </div>
    </section>
  )
}

export default WhatHosperraOffers;