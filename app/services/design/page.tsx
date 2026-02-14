import type { Metadata } from "next";
import Image from 'next/image';
import DesignBanner from '@/components/banners/DesignBanner'
import TitleCard from '@/components/cards/TitleCard';
import DesignService_img_1 from "@/public/assets/pngs/design-service-img-1.png";
import DesignService_img_2 from "@/public/assets/pngs/design-service-img-2.png";
import DesignService_img_3 from "@/public/assets/pngs/design-service-img-3.png";
import DesignService_img_4 from "@/public/assets/pngs/design-service-img-4.png";
import DesignService_img_5 from "@/public/assets/pngs/design-service-img-5.png";

export const metadata: Metadata = {
  title: "Design Services - Hospyra",
  description: "Interior and exterior design solutions for your restaurant. Create stunning, functional spaces that reflect your brand identity and enhance the dining experience for your guests.",
  keywords: "restaurant design, interior design, restaurant branding, space design, restaurant architecture",
};

const DesignPage = () => {
  const designServices = [
    {
      image: DesignService_img_1,
      title: 'BRAND IDENTITY & POSITIONING',
      description: 'Craft A Distinctive Brand That Resonates With Your Target Audience And Stands Out In The Market.',
    },
    {
      image: DesignService_img_2,
      title: 'INTERIOR & EXTERIOR DESIGN',
      description: 'Create Stunning Spaces That Enhance The Dining Experience And Reflect Your Brand Values.',
    },
    {
      image: DesignService_img_3,
      title: 'GUEST FLOW & LAYOUT PLANNING',
      description: 'Optimize Space Utilization And Customer Movement For Maximum Efficiency And Satisfaction.',
    },
    {
      image: DesignService_img_4,
      title: 'LIGHTING, SOUND & AMBIANCE',
      description: 'Design Multisensory Environments That Create The Perfect Atmosphere For Your Concept.',
    },
    {
      image: DesignService_img_5,
      title: 'EXPERIENCE-DRIVEN DESIGN',
      description: 'Build Memorable Dining Experiences That Keep Guests Coming Back And Generate Word-Of-Mouth.',
    },
  ]

  return (
    <>
      <DesignBanner />
      <div className='bg-white py-14 px-[4%]'>
        <TitleCard title={'DESIGN SERVICES'} />
        <p className='text-center p-3 text-[#27272A]'>Comprehensive Menu Solutions Designed To Drive Performance And Profitability</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12'>
          {designServices.map((service, index) => (
            <div
              key={index}
              className="bg-[#27272A] rounded-2xl overflow-hidden shadow-md"
            >
              <div className="relative w-full h-64 rounded-t-xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-antonio font-bold text-white uppercase mb-3">
                  {service.title}
                </h3>
                <p className="text-base text-white">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default DesignPage

