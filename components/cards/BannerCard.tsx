'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone, MapPin } from 'lucide-react'

type BannerCardProps = {
  backgroundImage: string
  heading: string
  tagline?: string
  description: string
  topLabel?: string
  primaryButton?: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
    withPhoneIcon?: boolean
    withLocationIcon?: boolean
  }
  socialProof?: {
    text: string
    avatarCount?: number
  }
}

const BannerCard = ({
  backgroundImage,
  heading,
  tagline,
  description,
  topLabel,
  primaryButton,
  secondaryButton,
  socialProof,
}: BannerCardProps) => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden py-16 lg:py-24">

      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Banner background"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">

          {topLabel && (
            <div className="flex justify-center">
              <span className="inline-block px-4 py-1 border border-white/60 rounded-full text-white text-sm font-medium">
                {topLabel}
              </span>
            </div>
          )}

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-antonio leading-normal text-center uppercase">
            {heading}
          </h1>

          {tagline && (
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white leading-tight text-center">
              {tagline}
            </p>
          )}

          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed text-center">
            {description}
          </p>

          {(primaryButton || secondaryButton || socialProof) && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 pt-4">
              {primaryButton && (
                <Link href={primaryButton.href} className='max-sm:w-full'>
                  <button className="max-sm:w-full justify-center flex items-center cursor-pointer gap-2 bg-[#FF6B35] hover:bg-[#FF8555] text-white font-light px-8 py-3 rounded-full transition-colors duration-200 text-base md:text-lg">
                    {primaryButton.text}
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </Link>
              )}
              {secondaryButton && (
                <Link href={secondaryButton.href} className='max-sm:w-full'>
                  <button className="max-sm:w-full justify-center flex items-center cursor-pointer gap-2 bg-white hover:bg-gray-200 text-black font-light px-8 py-3 rounded-full transition-colors duration-200 text-base md:text-lg border border-black/20">
                    {secondaryButton.withPhoneIcon && <Phone className="h-5 w-5" />}
                    {secondaryButton.withLocationIcon && <MapPin className="h-5 w-5" />}
                    {secondaryButton.text}
                    {!secondaryButton.withPhoneIcon && !secondaryButton.withLocationIcon && <ArrowRight className="h-5 w-5" />}
                  </button>
                </Link>
              )}
              {socialProof && (
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-4">
                    {[...Array(socialProof.avatarCount || 5)].map((_, index) => (
                      <div
                        key={index}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white overflow-hidden"
                      >
                        <Image
                          src="/assets/svgs/Avatar.svg"
                          alt={`Avatar ${index + 1}`}
                          width={40}
                          height={40}
                          className="w-full hover:scale-110 transition-all h-full"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-white text-sm md:text-base">{socialProof.text}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BannerCard
