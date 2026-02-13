import React from 'react'
import BannerCard from '@/components/cards/BannerCard'

const EntertainmentBanner = () => {
  return (
    <BannerCard
      backgroundImage="/assets/pngs/banner-images/entertainment-banner-img.png"
      heading="TURN DINING INTO AN EXPERIENCE"
      topLabel="ENTERTAINMENT"
      primaryButton={{
        text: 'Upgrade My Experience',
        href: '/contact',
      }}
      secondaryButton={{
        text: 'Plan My Opening Event',
        href: '/contact',
      }}
      description="People don't just dine — they remember how your restaurant made them feel."
    />
  )
}

export default EntertainmentBanner

