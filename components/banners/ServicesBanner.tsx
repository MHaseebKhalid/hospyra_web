import React from 'react'
import BannerCard from '@/components/cards/BannerCard'

const ServicesBanner = () => {
  return (
    <BannerCard
      backgroundImage="/assets/pngs/banner-images/services-banner-img.png"
      heading="EVERYTHING YOUR RESTAURANT NEEDS ONE PARTNER"
      description="Hospyra Provides A Complete, End-To-End Hospitality Execution Ecosystem. Once Growth Is Addressed, We Support Every Operational, Creative, And Structural Need Required To Run And Scale A Successful Restaurant."
      topLabel="Full Hospitality Execution Ecosystem"
      primaryButton={{
        text: 'Explore Services',
        href: '/services',
      }}
      secondaryButton={{
        text: 'Talk to a Hospyra Advisor',
        href: '/contact',
        withPhoneIcon: true,
      }}
    />
  )
}

export default ServicesBanner

