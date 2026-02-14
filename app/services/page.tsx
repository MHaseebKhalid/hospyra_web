'use client'

import { useRouter } from 'next/navigation'
import ServicesBanner from '@/components/banners/ServicesBanner'
import TitleCard from '@/components/cards/TitleCard'
import ServiceCard from '@/components/cards/ServiceCard'
import GlobalButton from '@/components/buttons/GlobalButton'
import { Wrench, Megaphone, Clock, Users, Star, Phone, Calendar } from 'lucide-react'
import Service_img_1 from "@/public/assets/pngs/services-1.png";
import Service_img_2 from "@/public/assets/pngs/services-2.png";
import Service_img_3 from "@/public/assets/pngs/services-3.png";
import Service_img_4 from "@/public/assets/pngs/services-4.png";
import Service_img_5 from "@/public/assets/pngs/services-5.png";
import Service_img_6 from "@/public/assets/pngs/services-6.png";

const ServicesPage = () => {
  const router = useRouter()

  const coreServices = [
    {
      title: 'Culinary & Menu',
      features: [
        'Menu Engineering',
        'Cost & Margin Optimization',
        'Signature Dish Development',
        'Seasonal Menus',
      ],
      imageSrc: Service_img_1,
      btnTitle: 'Explore Menu & Culinary Services',
      btnHref: () => router.push('/services/culinary'),
    },
    {
      title: 'Expansion',
      features: [
        'Multi-Location Strategy',
        'Market Analysis',
        'Site Selection',
        'Growth Planning',
      ],
      imageSrc: Service_img_2,
      btnTitle: 'Explore Expansion Services',
      btnHref: () => router.push('/services/expansion'),
    },
    {
      title: 'Design',
      features: [
        'Brand Identity & Positioning',
        'Interior & Exterior Design',
        'Guest Flow & Layout Planning',
        'Lighting, Sound & Ambiance',
      ],
      imageSrc: Service_img_3,
      btnTitle: 'Explore Design Services',
      btnHref: () => router.push('/services/design'),
    },
    {
      title: 'Vendors & Supplies',
      features: [
        'Supply Chain Management',
        'Vendor Relationships',
        'Quality Assurance',
        'Cost Optimization',
      ],
      imageSrc: Service_img_4,
      btnTitle: 'Explore Vendors & Supplies',
      btnHref: () => router.push('/services/vendors-supplies'),
    },
    {
      title: 'Construction',
      features: [
        'New Build-Outs',
        'Renovations & Remodels',
        'Kitchen Layout',
        'Project Management',
      ],
      imageSrc: Service_img_5,
      btnTitle: 'Explore Construction Services',
      btnHref: () => router.push('/services/construction'),
    },
    {
      title: 'Entertainment',
      features: [
        'Live Entertainment',
        'Event Planning',
        'Atmosphere Design',
        'Guest Experience',
      ],
      imageSrc: Service_img_6,
      btnTitle: 'Explore Entertainment Services',
      btnHref: () => router.push('/services/entertainment'),
    },
  ]

  const emergencyFeaturesLeft = [
    { icon: <Wrench className="w-5 h-5" />, text: 'Urgent Vendor Or Equipment Issues' },
    { icon: <Users className="w-5 h-5" />, text: 'Last-Minute Staffing Gaps' },
  ]

  const emergencyFeaturesRight = [
    { icon: <Megaphone className="w-5 h-5" />, text: 'Emergency Marketing Or PR Needs' },
    { icon: <Star className="w-5 h-5" />, text: 'Opening-Night Or Event Crises' },
    { icon: <Clock className="w-5 h-5" />, text: 'Time-Sensitive Operational Problems' },
  ]

  return (
    <>
      <ServicesBanner />

      <div className="bg-white pt-14">
        <TitleCard title="CORE HOSPITALITY SERVICES" className="mb-12 px-6" />
        <div className="flex overflow-x-auto hide-scrollbar gap-6 px-[4%] pb-12">
          {coreServices.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              features={service.features}
              btnTitle={service.btnTitle}
              btnHref={service.btnHref}
              imageSrc={service.imageSrc}
            />
          ))}
        </div>
      </div>

      <div className="md:px-[4%]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start bg-[#27272A] md:rounded-3xl py-10 lg:py-16 px-[4%]">
          <div className='lg:col-span-2'>
            <TitleCard
              title="EMERGENCY HOSPITALITY SUPPORT"
              color="white"
              className="mb-6 text-left"
            />
            <p className="text-base text-white mb-8">
              Because Restaurants Don't Operate 9-5. Hospyra Provides 24/7 Emergency Support For Active Clients. When Something Breaks, Fails, Or Goes Wrong — You Call Hospyra.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {emergencyFeaturesLeft.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-white mt-1">{feature.icon}</div>
                  <p className="text-white">{feature.text}</p>
                </div>
              ))}

              {emergencyFeaturesRight.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="text-white mt-1">{feature.icon}</div>
                  <p className="text-white">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

            <div className="bg-[#313133] rounded-2xl p-8 w-full my-auto">
              <div className="w-16 h-16 rounded-full bg-[#27272A] flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <p className="text-white mb-2 text-center">Dedicated Line</p>
              <p className="text-white text-3xl font-bold mb-2 text-center font-antonio uppercase">+1 (800) HOSPYRA</p>
              <p className="text-white text-center">Active Clients Only</p>
            </div>
        </div>
      </div>

      <div className="bg-white py-16 px-[4%]">
        <div className="max-w-4xl mx-auto text-center">
          <TitleCard title="PARTNER WITH HOSPYRA" className="mb-6" />
          <p className="text-xl text-[#27272A] mb-8">
            From Growth Strategy To Operational Crises, We Are The Only Partner Your Restaurant Needs.
          </p>
          <GlobalButton
            title="Talk to a Hospyra Advisor"
            bgColor="#2F6656"
            color="white"
            height='55px'
            icon={<Calendar className="w-5 h-5" />}
            onClick={() => router.push('/contact')}
            className="px-8 py-4 flex-row-reverse mx-auto w-full sm:w-70"
          />
        </div>
      </div>
    </>
  )
}

export default ServicesPage

