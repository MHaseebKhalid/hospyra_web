import React from 'react'
import BannerCard from '@/components/cards/BannerCard'

const VendorsSuppliesBanner = () => {
  return (
    <BannerCard
      backgroundImage="/assets/pngs/banner-images/design-banner-img.png"
      heading="VENDORS & SUPPLIES"
      tagline="Quality Vendors & Supply Chain Management"
      description="Connect with trusted suppliers and streamline your supply chain for consistent quality and operational efficiency."
      primaryButton={{
        text: 'Get Connected',
        href: '/contact',
      }}
      secondaryButton={{
        text: 'View Services',
        href: '/services',
      }}
    />
  )
}

export default VendorsSuppliesBanner

