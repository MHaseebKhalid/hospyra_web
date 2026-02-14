import FeatureCard from '../cards/FeatureCard';
import TitleCard from '../cards/TitleCard';
import CulinaryService_img_1 from "@/public/assets/pngs/services-5.png";
import CulinaryService_img_2 from "@/public/assets/pngs/philosophy-2.png";
import CulinaryService_img_3 from "@/public/assets/pngs/services-7.png";
import CulinaryService_img_4 from "@/public/assets/pngs/services-8.png";

const CulinaryServices = () => {
  return (
    <div className='bg-[#fffdfb] py-14'>
      <TitleCard title={'CULINARY SERVICES'} className='px-[4%]' />
      <p className='text-center p-3 text-[#27272A]'>Comprehensive Menu Solutions Designed To Drive Performance And Profitability</p>
      <div className='flex overflow-x-auto hide-scrollbar gap-6 px-[4%] pt-12'>
        <FeatureCard className='w-98 h-85 shadow' image={CulinaryService_img_1} title={'Menu Creation & Re-Engineering'} />
        <FeatureCard className='w-98 h-85 shadow' image={CulinaryService_img_2} title={'Cost & Margin Optimization'} />
        <FeatureCard className='w-98 h-85 shadow' image={CulinaryService_img_3} title={'Signature Dish Development'} />
        <FeatureCard className='w-98 h-85 shadow' image={CulinaryService_img_4} title={'Seasonal & promotional menus'} />
      </div>
    </div>
  );
};

export default CulinaryServices;
