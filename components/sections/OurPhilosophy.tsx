import FeatureCard from '../cards/FeatureCard';
import TitleCard from '../cards/TitleCard';
import Philosophy_img_1 from "@/public/assets/pngs/philosophy-1.png";
import Philosophy_img_2 from "@/public/assets/pngs/philosophy-2.png";
import Philosophy_img_3 from "@/public/assets/pngs/philosophy-3.png";
import Philosophy_img_4 from "@/public/assets/pngs/philosophy-4.jpg";

const OurPhilosophy = () => {
  return (
    <div className='bg-[#fffdfb] py-14'>
      <TitleCard title={'Our Philosophy'} className='px-[4%]' />
      <p className='text-center p-3 text-[#27272A]'>Principles that guide everything we do</p>
      <div className='flex overflow-x-auto hide-scrollbar gap-6 px-[4%] pt-12'>
        <FeatureCard className='w-104 h-90 shadow' image={Philosophy_img_1} title={'Growth comes first'} />
        <FeatureCard className='w-104 h-90 shadow' image={Philosophy_img_2} title={'Execution beats theory'} />
        <FeatureCard className='w-104 h-90 shadow' image={Philosophy_img_3} title={'Long-term partnerships matter'} />
        <FeatureCard className='w-104 h-90 shadow' image={Philosophy_img_4} title={'Hospitality requires real experience'} />
      </div>
    </div>
  );
};

export default OurPhilosophy;
