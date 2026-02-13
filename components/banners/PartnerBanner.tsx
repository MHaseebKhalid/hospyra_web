import React from 'react'
import BannerCard from '@/components/cards/BannerCard'

const PartnerBanner = () => {
  return (
    <BannerCard
      backgroundImage="/assets/pngs/banner-images/partner-banner-img.png"
      heading="WORK DIRECTLY ON HIGH-QUALITY HOSPITALITY PROJECTS"
      description="Hospyra Partners Only With Direct Hospitality Professionals People Who Personally Deliver Their Expertise. No Staffing Agencies. No Marketing Agencies. No Middle Parties. If You Do The Work Yourself, Hospyra Wants To Hear From You."
      primaryButton={{
        text: 'Apply as a Professional Partner',
        href: '/contact',
      }}
      secondaryButton={{
        text: 'Work With Hospyra',
        href: '/contact',
      }}
    />
  )
}

export default PartnerBanner

