import React from 'react';
import TitleCard from '../cards/TitleCard';
import Image from 'next/image';

import Project_1 from "@/public/assets/pngs/curated-proejcts-1.png";
import Project_2 from "@/public/assets/pngs/curated-proejcts-2.png";
import Project_3 from "@/public/assets/pngs/curated-proejcts-3.png";
import Project_4 from "@/public/assets/pngs/curated-proejcts-4.png";

const projects = [
  {
    imgPath: Project_1,
    title: 'New restaurant concepts in high-demand markets',
  },
  {
    imgPath: Project_2,
    title: 'Expansion of successful existing brands',
  },
  {
    imgPath: Project_3,
    title: 'Multi-location rollouts',
  },
  {
    imgPath: Project_4,
    title: 'Lifestyle and experience-driven dining concepts',
  },
];

const CuratedHospitalityProjects = () => {
  return (
    <div className="bg-[#F6F6F6] py-12">
      <div className="px-[4%]">
        <TitleCard title="Curated Hospitality Projects" />
        <p className="text-center font-light mt-2 text-[#27272A]">
          Hospyra structures and supports:
        </p>
      </div>
      <div className="px-[4%] py-12 flex lg:grid overflow-x-auto hide-scrollbar grid-cols-4 gap-6">
        {projects.map((item, index) => (
          <div key={index} className="bg-white shadow rounded-2xl overflow-clip max-lg:w-70 shrink-0">
            <Image
              src={item.imgPath}
              alt={item.title}
              className="w-full h-41 object-cover"
            />
            <p className="text-base p-4 font-bold">{item.title}</p>
          </div>
        ))}
      </div>
      <TitleCard title='Each opportunity is designed with:' className='px-[4%]' />
      <div className="px-[4%] py-12 flex lg:grid overflow-x-auto hide-scrollbar grid-cols-4 gap-6">
        {designPrinciples.map((item, index) => (
          <div key={index} className="bg-white shadow rounded-2xl overflow-clip max-lg:w-68 shrink-0 p-6">
            <div className="mb-4 text-[#27272A]">
              <Image
                src={item.icon}
                alt={item.title}
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </div>
            <p className="text-xl xl:text-2xl font-bold xl:pr-8">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const designPrinciples = [
  {
    icon: '/assets/svgs/double-location-icon.svg',
    title: 'Clear Positioning',
  },
  {
    icon: '/assets/svgs/target.svg',
    title: 'Defined Target Market',
  },
  {
    icon: '/assets/svgs/ranking-star.svg',
    title: 'Scalable Operations',
  },
  {
    icon: '/assets/svgs/plan-strategy.svg',
    title: 'Media And Brand Strategy Built In',
  },
];

export default CuratedHospitalityProjects;