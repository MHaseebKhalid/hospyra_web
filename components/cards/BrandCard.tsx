import { CircleCheck, Send, Eye, Star, X } from 'lucide-react';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface BrandCardProps {
  title: string;
  subtitle: string;
  whatWeDid: string[];
  outcome: string;
  outcomeColor: string;
  imageSrc: string | StaticImageData;
  icon: React.ReactElement;
  imagePosition: 'left' | 'right';
}

const BrandCard: React.FC<BrandCardProps> = ({
  title,
  subtitle,
  whatWeDid,
  outcome,
  outcomeColor,
  imageSrc,
  icon,
  imagePosition,
}) => {
  const getGradient = (color: string) => {
    const gradients: Record<string, string> = {
      '#FF6B35': 'linear-gradient(135deg, #FF6B35 0%, #FF8555 100%)',
      '#9333EA': 'linear-gradient(135deg, #9333EA 0%, #A855F7 100%)',
      '#3B82F6': 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 100%)',
      '#00BD72': 'linear-gradient(135deg, #00BD72 10%, #00BD72 100%)',
    };
    return gradients[color] || `linear-gradient(-90deg, ${color} 0%, ${color}dd 100%)`;
  };
  const imageSection = (
    <div className={`relative order-1 ${imagePosition === 'left' ? 'order-1-900' : 'order-2-900'}`}>
      <div className="relative w-full h-auto sm:h-130 rounded-2xl overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
        {icon}
      </div>
    </div>
  );

  const textSection = (
    <div className={`flex flex-col gap-4 order-2 ${imagePosition === 'left' ? 'order-2-900' : 'order-1-900'}`}>
      <h3 className="text-3xl md:text-4xl font-bold font-antonio text-[#27272A] mb-2">
        {title}
      </h3>
      <p className="text-md text-[#27272A] font-medium">
        {subtitle}
      </p>

      <div className="flex gap-3">
        <div>
          <div className='flex gap-3'>
            <div style={{ background: outcomeColor }} className="w-1 shrink-0 rounded-full" />
            <p className="text-xl font-semibold text-[#27272A] uppercase">
              What We Did
            </p>
          </div>
          <ul className="space-y-3 mt-4">
            {whatWeDid.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CircleCheck className="w-5 h-5 text-[#00A63E] shrink-0 mt-0.5" />
                <span className="text-md text-[#27272A]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="rounded-2xl p-6 mt-4"
        style={{ background: getGradient(outcomeColor) }}
      >
        <p className='text-white text-2xl font-bold'>Outcome</p>
        <p className="text-white text-lg mt-3">{outcome}</p>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 grid-cols-2-900 gap-8 items-center my-12">
      {imageSection}
      {textSection}
    </div>
  );
};

export default BrandCard;