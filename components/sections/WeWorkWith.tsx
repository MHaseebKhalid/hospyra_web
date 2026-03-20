'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const categories = [
  { name: 'Fast Food', image: '/assets/pngs/fast-food.png' },
  { name: 'Fast Casual', image: '/assets/pngs/fast-casual.jpg' },
  { name: 'Fine Dining', image: '/assets/pngs/fine-dining.png' },
  { name: 'Sports Bars', image: '/assets/pngs/sports-bar.png' },
  { name: 'Pubs & Cafes', image: '/assets/pngs/pubs-cafes.png' },
  { name: 'Interment Clubs', image: '/assets/pngs/interment-clubs.png' },
  { name: 'Party Venue', image: '/assets/pngs/party-venue.png' },
  { name: 'Casino', image: '/assets/pngs/casino.png' },
]

const WeWorkWith = () => {
  return (
    <section className="bg-linear-to-r from-[#FFF7F5] to-[#F8F7F7] py-10 lg:py-16 lg:rounded-2xl">
      <div className="text-center mb-8 lg:mb-10 px-[4%]">
        <h2 className="text-[46px] max-[1200px]:text-[36px] max-[640px]:text-[28px] font-bold text-[#27272A]">
          We Work With
        </h2>
        <p className="text-base md:text-lg text-[#27272A]">
          Built For All Types Of Hospitality Businesses
        </p>
      </div>

      <div className="flex lg:grid grid-cols-4 gap-4 md:gap-5 px-[4%] max-lg:overflow-auto hide-scrollbar">
        {categories.map((item) => (
          <Link
            key={item.name}
            href="/services"
            className="group relative aspect-4/3 rounded-2xl overflow-hidden w-[320px] shrink-0 lg:w-full"
          >
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex justify-center items-end">
              <span className="text-white font-medium text-lg md:text-xl text-center p-6">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default WeWorkWith
