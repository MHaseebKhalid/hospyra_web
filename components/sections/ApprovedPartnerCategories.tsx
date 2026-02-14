'use client'

import TitleCard from '@/components/cards/TitleCard'
import { ChefHat, Hammer, Palette, Calculator, Package, Music } from 'lucide-react'

const ApprovedPartnerCategories = () => {
  const categories = [
    {
      icon: <ChefHat className="w-6 h-6" />,
      iconColor: '#F05830',
      bgColor: '#FFF4F0',
      title: 'Culinary',
      professions: [
        'Executive Chefs',
        'Head Chefs',
        'Menu Engineers',
        'Culinary Consultants',
      ],
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      iconColor: '#314158',
      bgColor: '#F8FAFC',
      title: 'Construction & Trades',
      professions: [
        'General Contractors',
        'Restaurant Build-Out Specialists',
        'Electricians',
        'Plumbers',
        'HVAC Professionals',
        'Millwork & Fabrication Experts',
      ],
    },
    {
      icon: <Palette className="w-6 h-6" />,
      iconColor: '#9333EA',
      bgColor: '#F5F3FF',
      title: 'Design & Architecture',
      professions: [
        'Interior Designers',
        'Architects',
        'Kitchen Designers',
        'Experience Designers',
      ],
    },
    {
      icon: <Calculator className="w-6 h-6" />,
      iconColor: '#00BD72',
      bgColor: '#F0FDF4',
      title: 'Business, Finance & Compliance',
      professions: [
        'CPAs',
        'Accountants',
        'Bookkeepers',
        'Financial Advisors',
        'Licensing & Compliance Professionals',
      ],
    },
    {
      icon: <Package className="w-6 h-6" />,
      iconColor: '#3B82F6',
      bgColor: '#EFF6FF',
      title: 'Products & Technology',
      professions: [
        'Kitchen Equipment Manufacturers',
        'Direct Equipment Suppliers',
        'POS & Hospitality Technology Providers',
        'Furniture & Fixture Providers',
      ],
    },
    {
      icon: <Music className="w-6 h-6" />,
      iconColor: '#EC4899',
      bgColor: '#FDF2F8',
      title: 'Entertainment',
      professions: [
        'DJs',
        'Live Performers',
        'Sound & Lighting Professionals',
      ],
    },
  ]

  return (
    <div className="bg-[#F6F6F6] pt-14 mt-6">
    <div className='px-[4%]'>
        <TitleCard title="APPROVED PARTNER CATEGORIES" className="mb-4" />
      <p className="text-center text-lg text-[#27272A]">
        Direct Hospitality Experts
      </p>
    </div>
      <div className="flex overflow-x-auto hide-scrollbar lg:grid lg:grid-cols-3 gap-6 px-[4%] py-14">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md w-96 shrink-0 lg:w-full"
          >
            <div className='flex gap-3 items-center mb-4'>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: category.bgColor }}
              >
                <div style={{ color: category.iconColor }}>
                  {category.icon}
                </div>
              </div>
              <h3 className="text-2xl font-antonio font-bold text-[#27272A]">
                {category.title}
              </h3>
            </div>
            <ul className="space-y-2">
              {category.professions.map((profession, idx) => (
                <li key={idx} className="text-base text-[#27272A] flex items-start">
                  <span className="text-[#27272A] mr-2">•</span>
                  <span className='font-semibold'>{profession}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ApprovedPartnerCategories