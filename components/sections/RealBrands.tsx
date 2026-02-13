import BrandCard from '../cards/BrandCard';
import TitleCard from '../cards/TitleCard';
import { X, TrendingUp, Sparkles, Award, Eye } from 'lucide-react';
import RealBrand1 from '@/public/assets/pngs/real-brand-1.png';
import RealBrand2 from '@/public/assets/pngs/real-brand-2.png';
import RealBrand3 from '@/public/assets/pngs/real-brand-3.png';
import RealBrand4 from '@/public/assets/pngs/real-brand-4.png';

const RealBrands = () => {
  const caseStudies = [
    {
      title: 'Taco Empreso',
      subtitle: 'Brand Energy, Food Visibility, Consistency',
      whatWeDid: [
        'Defined a bold, modern food-first media identity',
        'Created high-impact food and lifestyle content',
        'Built consistent social storytelling around flavor, fire, and freshness',
        'Aligned visual tone across locations',
      ],
      outcome: 'Stronger brand recognition, improved foot traffic, and a clearer, more confident market presence.',
      outcomeColor: '#FF6B35',
      imageSrc: RealBrand1,
      icon: <TrendingUp className="w-5 h-5 text-[#27272A]" />,
      imagePosition: 'left' as const,
    },
    {
      title: 'Lab X',
      subtitle: 'Concept Clarity, Premium Positioning',
      whatWeDid: [
        'Translated a complex concept into clear visual storytelling',
        'Developed dark, premium media language',
        'Focused on experience-driven visuals, not just food',
      ],
      outcome: 'Sharper positioning, stronger curiosity, and improved engagement from the right audience.',
      outcomeColor: '#9333EA',
      imageSrc: RealBrand2,
      icon: <Eye className="w-5 h-5 text-[#27272A]" />,
      imagePosition: 'right' as const,
    },
    {
      title: 'Xperience',
      subtitle: 'Multi-Experience Brand Cohesion',
      whatWeDid: [
        'Unified multiple experiences under one brand story',
        'Created venue-focused and lifestyle-driven content',
        'Built launch narratives instead of generic promotions',
      ],
      outcome: 'Stronger brand clarity and improved launch impact across experiences.',
      outcomeColor: '#3B82F6',
      imageSrc: RealBrand3,
      icon: <Sparkles className="w-5 h-5 text-[#27272A]" />,
      imagePosition: 'left' as const,
    },
    {
      title: 'House Of Cuts',
      subtitle: 'Scale, Hype, And Differentiation',
      whatWeDid: [
        'Created bold, high-fashion hospitality visuals',
        'Focused on experience, energy, and scale',
        'Built pre-launch media momentum',
      ],
      outcome: 'Premium positioning before opening and strong market anticipation.',
      outcomeColor: '#10B981',
      imageSrc: RealBrand4,
      icon: <Award className="w-5 h-5 text-[#27272A]" />,
      imagePosition: 'right' as const,
    },
  ];

  return (
    <div className="bg-[#F6F6F6] px-[4%] py-16">
      <div className="text-center mb-12">
        <TitleCard
          className="lg:px-10"
          orangeLabel="Media & Brand Case Studies"
          title="REAL BRANDS. REAL POSITIONING. REAL VISIBILITY."
        />
        <p className="font-light text-center mt-3 text-lg text-[#27272A] max-w-4xl mx-auto">
          Hospyra Doesn&apos;t Just Market Restaurants We Shape How Brands Look, Feel, And Show Up In The Real World.
        </p>
      </div>
      <div>
        {caseStudies.map((caseStudy, idx) => (
          <BrandCard
            key={idx}
            title={caseStudy.title}
            subtitle={caseStudy.subtitle}
            whatWeDid={caseStudy.whatWeDid}
            outcome={caseStudy.outcome}
            outcomeColor={caseStudy.outcomeColor}
            imageSrc={caseStudy.imageSrc}
            icon={caseStudy.icon}
            imagePosition={caseStudy.imagePosition}
          />
        ))}
      </div>
      <div className='text-center bg-[#27272A] text-white p-8 space-y-6 rounded-3xl max-w-220 mx-auto'>
        <p className='font-antonio text-[32px] md:text-[40px] font-bold'>Media isn't decoration.</p>
        <p>It's how restaurants are discovered, remembered, and chosen.</p>
      </div>
    </div>
  );
};

export default RealBrands;