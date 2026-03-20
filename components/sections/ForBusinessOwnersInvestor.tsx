'use client'

import Image, { StaticImageData } from "next/image";
import GlobalButton from "../buttons/GlobalButton";

import BusinessImg from "@/public/assets/pngs/for-business-owners.png";
import InvestorImg from "@/public/assets/pngs/for-investors.png";

import BusinessIcon_1 from "@/public/assets/svgs/for-business-owners-1.svg";
import BusinessIcon_2 from "@/public/assets/svgs/for-business-owners-2.svg";
import BusinessIcon_3 from "@/public/assets/svgs/for-business-owners-3.svg";
import BusinessIcon_4 from "@/public/assets/svgs/for-business-owners-4.svg";

import InvestorIcon_1 from "@/public/assets/svgs/for-investors-1.svg";
import InvestorIcon_2 from "@/public/assets/svgs/for-investors-2.svg";
import InvestorIcon_3 from "@/public/assets/svgs/for-investors-3.svg";

const ForBusinessOwnersInvestor: React.FC = () => {
  return (
    <section className="bg-linear-to-l from-[#FFF7F5] to-[#F8F7F7] px-[4%] py-10 lg:py-16 lg:rounded-2xl">

      <div className="text-center mb-12">
        <h2 className="text-[46px] max-[1200px]:text-[36px] max-[640px]:text-[28px] font-semibold">
          For Business Owners & Investors
        </h2>
        <p className="text-base md:text-lg mt-2 text-[#52525b]">
          Build and scale with structure
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-12 max-w-257.5 mx-auto">

        <div className="bg-linear-to-l from-[#FFF7F5] to-[#F8F7F7]">
          <ImageCard image={BusinessImg} title="For Business Owners" />
          <div className="grid md:grid-cols-2 gap-y-4 lg:gap-y-6 gap-x-10 mb-8 px-5">
            <Feature icon={BusinessIcon_1} text="Launch Faster" />
            <Feature icon={BusinessIcon_2} text="Operate Smarter" />
            <Feature icon={BusinessIcon_3} text="Improve Margins" />
            <Feature icon={BusinessIcon_4} text="Expand With Support" />
          </div>
          <GlobalButton
            title="Join Now — Pay $0 Signup Fee"
            borderRadius="8px"
            height="48px"
            bgColor="#1E50C1"
            color="white"
            className="w-full"
          />
          <p className="text-center mt-4 text-sm text-black">
            Limited Time — $499 Value
          </p>
        </div>

        <div className="bg-linear-to-r from-[#FFF7F5] to-[#F8F7F7]">
          <ImageCard image={InvestorImg} title="For Investors" />
          <div className="space-y-6 mb-8 px-5">
            <Feature icon={InvestorIcon_1} text="Access structured opportunities" />
            <Feature icon={InvestorIcon_2} text="Partner with strong concepts" />
            <Feature icon={InvestorIcon_3} text="Grow with operational backing" />
          </div>
          <GlobalButton
            title="Learn More"
            borderRadius="8px"
            height="48px"
            bgColor="#1E50C1"
            color="white"
            className="w-full"
          />
        </div>

      </div>
    </section>
  );
};

export default ForBusinessOwnersInvestor;

interface FeatureProps {
  icon: StaticImageData;
  text: string;
}

interface ImageCardProps {
  image: StaticImageData;
  title: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3">
      <Image src={icon} alt={text} width={22} height={22} />
      <span className="text-[#27272A] text-sm md:text-base font-medium">
        {text}
      </span>
    </div>
  );
};

const ImageCard: React.FC<ImageCardProps> = ({ image, title }) => {
  return (
    <div className="relative h-65 rounded-t-2xl overflow-hidden mb-8">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <h3 className="absolute bottom-6 left-6 text-white text-2xl font-semibold z-10">
        {title}
      </h3>
    </div>
  );
};