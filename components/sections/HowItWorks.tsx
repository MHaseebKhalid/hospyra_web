import Image from 'next/image'
import icon_1 from "@/public/assets/svgs/how-it-works-icon-1.svg";
import icon_2 from "@/public/assets/svgs/how-it-works-icon-2.svg";
import icon_3 from "@/public/assets/svgs/how-it-works-icon-3.svg";
import icon_4 from "@/public/assets/svgs/how-it-works-icon-4.svg";
import icon_5 from "@/public/assets/svgs/how-it-works-icon-5.svg";
import icon_6 from "@/public/assets/svgs/how-it-works-icon-6.svg";
import icon_7 from "@/public/assets/svgs/how-it-works-icon-7.svg";

const steps = [
  { num: '01', title: 'Apply', description: 'Submit Your Business To Join The System.', icon: icon_1 },
  { num: '02', title: 'Get Approved', description: 'We Onboard Businesses That Align With Our Structure.', icon: icon_2 },
  { num: '03', title: 'Dedicated Team Assigned', description: 'Your Account Leadership Team Is Aligned With Your Business.', icon: icon_3 },
  { num: '04', title: 'Submit Requests', description: 'Send What Your Business Needs In One Place.', icon: icon_4 },
  { num: '05', title: 'Execution Managed', description: 'Your Team Coordinates With The Right Partners, Secures Strong Pricing, And Manages Execution Fully.', icon: icon_5 },
  { num: '06', title: 'Monitor Activity', description: 'Track Requests, Performance, And Operations.', icon: icon_6 },
  { num: '07', title: 'Improve And Grow', description: 'Use Insights And Ongoing Involvement To Guide Your Business Forward.', icon: icon_7 },
];

const HowItWorks = () => {
  return (
    <div className="py-10 lg:py-16 px-[4%]">
      <div className="text-center">
        <h2 className="text-[46px] max-[1200px]:text-[36px] max-[640px]:text-[28px] font-semibold">
          How It Works
        </h2>
        <p className="text-base text-black">
          Simple. Structured. Fully managed.
        </p>
      </div>
      <div className="max-w-4xl mx-auto mt-10 lg:mt-12 space-y-4">
        {steps.map((step) => (
          <div
            key={step.num}
            className="rounded-xl bg-linear-to-r from-[#F8F7F7] to-[#FFF7F5] p-6 flex items-center gap-6"
          >
            <div className="relative shrink-0">
              <div className="absolute -top-1 -left-1 z-10 w-6 h-6 rounded-full bg-[#1E50C1] flex items-center justify-center text-white text-xs">
                {step.num}
              </div>
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                <Image src={step.icon} alt={step.title} width={24} height={24} />
              </div>
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-[#27272A] font-effra text-lg md:text-xl">{step.title}</h3>
              <p className="text-sm md:text-base text-[#52525b] mt-1 font-effra">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;