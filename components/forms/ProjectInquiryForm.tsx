'use client'

import React, { useState } from 'react'
import GlobalInput from '@/components/inputs/GlobalInput'
import GlobalTextarea from '@/components/inputs/GlobalTextarea'
import GlobalButton from '@/components/buttons/GlobalButton'
import TitleCard from '@/components/cards/TitleCard'
import { ArrowRight } from 'lucide-react'

const ProjectInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    restaurantName: '',
    currentSituation: '',
    goals: '',
    location: '',
    timeline: '',
  })

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="md:rounded-3xl md:px-8 py-8 md:py-12 max-w-6xl bg-[#F9F8F6] mx-auto mb-10">
      <TitleCard
        title="PROJECT INQUIRY FORM"
        orangeLabel=""
        className="mb-4"
      />
      <p className="text-lg max-w-md mx-auto text-[#4A5565] font-light mb-8 text-center">
        Tell Us About Your Restaurant And What You're Looking To Achieve
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlobalInput
            title="Your Name *"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleInputChange('name')}
          />
          <GlobalInput
            title="Email *"
            type="email"
            placeholder="john@restaurant.com"
            value={formData.email}
            onChange={handleInputChange('email')}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlobalInput
            title="Phone Number"
            type="tel"
            placeholder="(555) 123-4567"
            value={formData.phone}
            onChange={handleInputChange('phone')}
          />
          <GlobalInput
            title="Restaurant Name"
            placeholder="Your Restaurant"
            value={formData.restaurantName}
            onChange={handleInputChange('restaurantName')}
          />
        </div>

        <GlobalTextarea
          title="Current Situation *"
          placeholder="Tell us about your current restaurant situation, challenges, or what's working well..."
          value={formData.currentSituation}
          onChange={handleInputChange('currentSituation')}
          rows={4}
          height="120px"
        />

        <GlobalTextarea
          title="Goals *"
          placeholder="What are you hoping to achieve? Growth, renovation, new location, entertainment upgrades, etc."
          value={formData.goals}
          onChange={handleInputChange('goals')}
          rows={4}
          height="120px"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <GlobalInput
            title="Location *"
            placeholder="City, State"
            value={formData.location}
            onChange={handleInputChange('location')}
          />
          <GlobalInput
            title="Timeline *"
            placeholder=""
            value={formData.timeline}
            onChange={handleInputChange('timeline')}
          />
        </div>

        <GlobalButton
          title="Talk to Hospyra"
          bgColor="#F05830"
          color="white"
          icon={<ArrowRight className="w-5 h-5" />}
          onClick={handleSubmit}
          className="w-full py-4 mt-10"
          height="50px"
        />
      </form>
    </div>
  )
}

export default ProjectInquiryForm

