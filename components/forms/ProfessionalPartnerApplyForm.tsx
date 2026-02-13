'use client'

import React, { useState } from 'react'
import GlobalInput from '@/components/inputs/GlobalInput'
import GlobalTextarea from '@/components/inputs/GlobalTextarea'
import GlobalButton from '@/components/buttons/GlobalButton'
import TitleCard from '@/components/cards/TitleCard'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ArrowRight } from 'lucide-react'

const ProfessionalPartnerApplyForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    website: '',
    primaryRole: '',
    yearsOfExperience: '',
    projectTypes: '',
    marketsServed: '',
    additionalNotes: '',
    confirmation: false,
  })

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      confirmation: e.target.checked,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const professionalRoles = [
    'Architect',
    'Interior Designer',
    'Construction Manager',
    'Project Manager',
    'Chef Consultant',
    'Marketing Specialist',
    'Financial Advisor',
    'Legal Advisor',
    'Technology Consultant',
    'Other',
  ]

  return (
    <div className="px-[4%] py-8 md:py-12 bg-[#F9F8F6] mb-10">
      <TitleCard
        title="PROFESSIONAL PARTNER APPLICATION"
        orangeLabel=""
        className="mb-4"
      />
      <p className="text-lg max-w-md mx-auto text-[#4A5565] font-light mb-8 text-center">
        Join The Hospyra Network Of Direct Hospitality Professionals.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8 px-4 md:px-0">
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-[#27272A] mb-4">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlobalInput
              title="Full Name *"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleInputChange('fullName')}
            />
            <GlobalInput
              title="Business Name (if applicable)"
              placeholder="restaurant"
              value={formData.businessName}
              onChange={handleInputChange('businessName')}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlobalInput
              title="Email Address *"
              type="email"
              placeholder="john@restaurant.com"
              value={formData.email}
              onChange={handleInputChange('email')}
            />
            <GlobalInput
              title="Phone Number"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phone}
              onChange={handleInputChange('phone')}
            />
          </div>
          <GlobalInput
            title="Website or Portfolio"
            placeholder="Type here"
            value={formData.website}
            onChange={handleInputChange('website')}
          />
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-[#27272A] mb-4">Professional Category</h3>
          <div>
            <label className="text-[13px] mb-2 block" style={{ color: '#364153', fontWeight: '400' }}>
              Select your primary role *
            </label>
            <Select value={formData.primaryRole} onValueChange={(value) => setFormData(prev => ({ ...prev, primaryRole: value }))}>
              <SelectTrigger className="w-full h-11.5! border-[#D1D5DC] rounded-[10px] text-[14px]">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {professionalRoles.map((role) => (
                  <SelectItem key={role} value={role}>
                    {role}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-[#27272A] mb-4">Professional Experience</h3>
          <GlobalInput
            title="Years of experience *"
            placeholder="e.g., 5 years"
            value={formData.yearsOfExperience}
            onChange={handleInputChange('yearsOfExperience')}
          />
          <GlobalTextarea
            title="Hospitality Project Types *"
            placeholder="Describe the types of hospitality projects you've worked on..."
            value={formData.projectTypes}
            onChange={handleInputChange('projectTypes')}
            rows={4}
            height="120px"
          />
          <GlobalTextarea
            title="Markets Served *"
            placeholder="e.g., New York, Los Angeles, Chicago..."
            value={formData.marketsServed}
            onChange={handleInputChange('marketsServed')}
            rows={4}
            height="120px"
          />
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-[#27272A] mb-4">Additional Notes</h3>
          <GlobalTextarea
            title="Tell us more about your experience and expertise..."
            placeholder=""
            value={formData.additionalNotes}
            onChange={handleInputChange('additionalNotes')}
            rows={4}
            height="120px"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="confirmation"
            checked={formData.confirmation}
            onChange={handleCheckboxChange}
            className="w-4 h-4 border-[#D1D5DC] rounded accent-[#F05830]"
          />
          <label htmlFor="confirmation" className="text-[13px] text-[#27272A] cursor-pointer">
            I confirm I am a direct professional and not a staffing agency, broker, or middle party. *
          </label>
        </div>

        <GlobalButton
          title="Apply to Become a Hospyra Partner"
          bgColor="#F05830"
          color="white"
          icon={<ArrowRight className="w-5 h-5" />}
          onClick={handleSubmit}
          className="w-full py-4 mt-6"
          height="50px"
        />
      </form>
    </div>
  )
}

export default ProfessionalPartnerApplyForm
