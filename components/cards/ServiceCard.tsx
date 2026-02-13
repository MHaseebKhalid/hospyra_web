'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { ArrowRight } from 'lucide-react';
import GlobalButton from '../buttons/GlobalButton';

interface ServiceCardProps {
  title: string;
  features: string[];
  btnTitle: string;
  btnHref: () => void;
  imageSrc: string | StaticImageData;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, features, btnTitle, btnHref, imageSrc }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md w-90 md:w-104.5 shrink-0">
      <Image src={imageSrc} alt={title} className="h-63 w-full object-cover" />
      <div className="p-5 flex flex-col gap-3">
        <p className="font-semibold text-[36px] font-antonio line-clamp-2 text-ellipsis">{title}</p>
        {features.map((item, idx) => (
          <p key={idx} className="text-gray-600 text-sm">{item}</p>
        ))}
        <GlobalButton
          title={btnTitle}
          bgColor="#F05830"
          color="white"
          icon={<ArrowRight className="w-5 h-5" />}
          onClick={btnHref}
          className="w-full mt-4"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
