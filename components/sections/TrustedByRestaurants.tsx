'use client'

import React, { useState, useRef, useEffect } from 'react'
import TitleCard from '../cards/TitleCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const videos = [
  '/video.mp4',
  '/video.mp4',
  '/video.mp4',
  '/video.mp4',
]

const TrustedByRestaurants = () => {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

  const totalSlides = videos.length

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return

      if (index === carouselIndex) {
        video.currentTime = 0
        video.play()
      } else {
        video.pause()
      }
    })
  }, [carouselIndex])

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  return (
    <div className="py-14 bg-[#F6F6F6] overflow-hidden">
      <div className="mx-auto px-[4%] max-w-5xl">
        <TitleCard
          title="Trusted by Restaurants That Take Growth Seriously"
          orangeLabel="TRUSTED BY LEADING HOSPITALITY BRANDS"
          className="px-10"
        />

        <p className="text-center text-xl md:text-2xl font-light mt-5 text-[#27272A]">
          Hospyra Works With Restaurant Brands Across Fast-Casual,
          Premium Dining, Lifestyle Concepts, And Large-Format Hospitality.
        </p>
      </div>

      {/* ===== Carousel ===== */}
      <div className="relative mt-12">
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(50% - ${carouselIndex * 80}vw - 40vw))`,
            }}
          >
            {videos.map((src, index) => (
              <div
                key={index}
                className="w-[80vw] max-md:h-100 md:aspect-video shrink-0 rounded-xl overflow-hidden bg-black"
              >
                <video
                  ref={(el: HTMLVideoElement | null) => { videoRefs.current[index] = el }}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                >
                  <source src={src} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCarouselIndex(index)}
              className={`h-2 rounded-full transition-all ${index === carouselIndex
                ? 'bg-[#FF6B35] w-6'
                : 'bg-white w-2'
                }`}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-[#27272A] hover:bg-[#3a3a3a] flex items-center justify-center"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  )
}

export default TrustedByRestaurants