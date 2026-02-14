import Image, { StaticImageData } from "next/image";
import React from "react";

interface FeatureCardProps {
  image: string | StaticImageData;
  title: string;
  className?: string;
  priority?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ image, title, className = "", priority = false }) => {
  return (
    <div className={`relative overflow-hidden rounded-4xl shrink-0 group cursor-pointer ${className}`}>
      <Image src={image} alt={title} fill priority={priority} className="object-cover transition-transform duration-500 group-hover:scale-105" />
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
      <div className="absolute bottom-6 left-6 right-6">
        <h2 className="text-white text-2xl font-light leading-tight">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default FeatureCard;