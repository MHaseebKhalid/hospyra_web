'use client';

import TitleCard from '../cards/TitleCard';
import GlobalButton from '../buttons/GlobalButton';
import { ArrowRight, DollarSign, Lightbulb, MapPin, Megaphone, Palette, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ServiceCard from '../cards/ServiceCard';
import ServiceImage1 from '@/public/assets/pngs/services-1.png';
import ServiceImage2 from '@/public/assets/pngs/services-2.png';
import ServiceImage3 from '@/public/assets/pngs/services-3.png';
import ServiceImage4 from '@/public/assets/pngs/services-4.png';

const featureCards = [
  { rotate: "-0.5deg", icon: <Lightbulb className="w-7 h-8" />, title: 'Concept Creation', desc: 'cuisine, format, and experience built around demand' },
  { rotate: "3deg", icon: <DollarSign className="w-7 h-8" />, title: 'Investor & Bank Matching', desc: 'aligned capital partners' },
  { rotate: "-2deg", icon: <MapPin className="w-7 h-8" />, title: 'Location Strategy & Site Selection', desc: 'market gaps and site fit' },
  { rotate: "-2deg", icon: <Users className="w-7 h-8" />, title: 'Team Building', desc: 'leadership, culinary, and operational roles' },
  { rotate: "1deg", icon: <Palette className="w-7 h-8" />, title: 'Design, Menu & Build Execution', desc: 'complete build-out support' },
  { rotate: "3deg", icon: <Megaphone className="w-7 h-8" />, title: 'Media-Driven Launch', desc: '& ongoing growth' },
];

const TrustedPartners = () => {
  const router = useRouter();

  const serviceCards = [
    {
      title: 'Menu Engineering & Culinary Direction',
      features: ['Menus Designed To Sell, Scale, And Perform Consistently.'],
      btnTitle: 'Explore Menu & Culinary Services',
      btnHref: () => router.push('/services/culinary'),
      imageSrc: ServiceImage1,
    },
    {
      title: 'Branding, Design & Guest Experience',
      features: ['Brands And Spaces That Feel Premium, Flow Operationally, And Photograph Beautifully.'],
      btnTitle: 'View Brand & Design Services',
      btnHref: () => router.push('/services/design'),
      imageSrc: ServiceImage2,
    },
    {
      title: 'Vendors, Products & Supplies',
      features: ['Trusted, hospitality-tested partners and quality supplies — no guesswork.'],
      btnTitle: 'See Vendor & Supply Solutions',
      btnHref: () => router.push('/services/vendors-supplies'),
      imageSrc: ServiceImage3,
    },
    {
      title: 'Construction & Build Services',
      features: ['Complete construction and renovation services from concept to completion.'],
      btnTitle: 'View Construction Services',
      btnHref: () => router.push('/services/construction'),
      imageSrc: ServiceImage4,
    },
  ];

  return (
    <section className="bg-[#27272A] py-16">
      <div className="max-w-4xl mx-auto text-center px-4">
        <TitleCard
          color="white"
          labelColor="white"
          orangeLabel="Services"
          title="Everything You Need One Trusted Partner"
          className="lg:px-10"
        />
        <p className="mt-5 text-xl md:text-2xl font-light text-white">
          Hospyra is built as a full hospitality execution ecosystem. Once growth is addressed, we support every area required to operate, improve, and scale a restaurant successfully.
        </p>
      </div>

      <div className="md:px-[4%] my-12">
        <div className="bg-white py-8 lg:px-8 md:rounded-[24px] grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center max-md:px-[4%]">
            <TitleCard
              orangeLabel="MARKET-READY EXPANSION CONCEPTS"
              title="Your Next Location Strategically Built for Success"
              titleClassName="text-[32px] md:text-[36px]"
              className="lg:text-left"
            />
            <p className="text-lg lg:text-xl font-light my-6 lg:my-10 leading-relaxed max-lg:text-center">
              When your brand is visible and growing, expansion should be intentional not experimental. <br />
              Hospyra provides free, market-ready expansion concepts and supports execution from idea to <br /> opening and beyond.
            </p>

            <div className="flex flex-col sm:flex-row items-center max-lg:justify-center gap-4 md:gap-6">
              <GlobalButton
                title="Get a Free Expansion Plan"
                bgColor="#F05830"
                color="white"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={() => router.push('/growth')}
                className="w-full sm:w-67.5"
              />
              <GlobalButton
                title="Discuss My Next Location"
                bgColor="white"
                color="black"
                icon={<ArrowRight className="w-5 h-5" />}
                onClick={() => router.push('/contact')}
                className="w-full sm:w-55"
              />
            </div>
          </div>

          <div className="flex lg:grid overflow-x-auto hide-scrollbar lg:grid-cols-2 gap-4 max-md:px-[4%]">
            {featureCards.map((card, idx) => (
              <div
                key={idx}
                style={{ '--rotation': card.rotate } as React.CSSProperties}
                className="bg-[#00BD72] max-lg:w-67.5 shrink-0 rounded-3xl text-white p-5 flex flex-col lg:transform-[rotate(var(--rotation))]"
              >
                <span>{card.icon}</span>
                <p className="font-antonio text-2xl font-bold py-3">{card.title}</p>
                <p className="text-md">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto hide-scrollbar px-[4%]">
        {serviceCards.map((card, idx) => (
          <ServiceCard
            key={idx}
            title={card.title}
            features={card.features}
            btnTitle={card.btnTitle}
            btnHref={card.btnHref}
            imageSrc={card.imageSrc}
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedPartners;
