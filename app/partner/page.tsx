import type { Metadata } from "next";
import PartnerBanner from '@/components/banners/PartnerBanner'
import UnstoppableCard from '@/components/cards/UnstoppableCard'
import TitleCard from "@/components/cards/TitleCard";
import TopBorderCard from "@/components/cards/TopBorderCard";
import { Briefcase, HeartHandshake, Rocket, UserStar, Workflow } from "lucide-react";
import ProfessionalPartnerApplyForm from "@/components/forms/ProfessionalPartnerApplyForm";
import ProfessionalCoordination from "@/components/sections/ProfessionalCoordination";
import ApplyEligibility from "@/components/sections/ApplyEligibility";
import ApprovedPartnerCategories from "@/components/sections/ApprovedPartnerCategories";
import WhyProfessionalPartnerWithHospyra from "@/components/sections/WhyProfessionalPartnerWithHospyra";

export const metadata: Metadata = {
  title: "Partner - Hospyra",
  description: "Partner with Hospyra to unlock new opportunities in the restaurant industry. Join our network of hospitality professionals and grow together.",
  keywords: "restaurant partnership, hospitality partner, restaurant network, business partnership",
};

const PartnerPage = () => {
  return (
    <>
      <PartnerBanner />
      <div className="bg-[#fffdfb]">
        <ApplyEligibility />
        <ApprovedPartnerCategories />
      </div>
      <WhyProfessionalPartnerWithHospyra/>
      <div className="bg-[#F6F6F6] py-12">
        <TitleCard title="HOW THE PARTNERSHIP WORKS" orangeLabel="" className="px-[4%]" />
        <div className="flex gap-6 px-[4%] hide-scrollbar py-10 overflow-x-auto">
          <TopBorderCard className="w-70.75" title={"Apply as a professional"} icon={<Briefcase className="h-6 w-6 text-[#F05830]" />} count="01" />
          <TopBorderCard className="w-70.75" title={"Hospyra reviews and vets experience"} icon={<UserStar className="h-6 w-6 text-[#F05830]" />} count="02" />
          <TopBorderCard className="w-70.75" title={"You’re approved as a direct partner"} icon={<HeartHandshake className="h-6 w-6 text-[#F05830]" />} count="03" />
          <TopBorderCard className="w-70.75" title={"You’re matched to relevant projects"} icon={<Workflow className="h-6 w-6 text-[#F05830]" />} count="04" />
          <TopBorderCard className="w-70.75" title={"You grow with the Hospyra ecosystem"} icon={<Rocket className="h-6 w-6 text-[#F05830]" />} count="05" />
        </div>
      </div>
      <ProfessionalCoordination />
      <ProfessionalPartnerApplyForm />
      <UnstoppableCard
        heading="READY TO WORK ON SERIOUS HOSPITALITY PROJECTS?"
        description="Join Hospyra's Network Of Trusted Direct Hospitality Professionals"
        backgroundColor="#27272A"
        textColor="white"
        buttons={[
          {
            title: "Apply as a Hospyra Professional",
            bgColor: "white",
            color: "#27272A",
            borderColor: "#27272A",
            borderWidth: "1px",
            href: "/contact",
          },
          {
            title: "Talk to Hospyra",
            bgColor: "#27272A",
            color: "white",
            borderColor: "white",
            borderWidth: "1px",
            href: "/contact",
          },
        ]}
      />
    </>
  )
}

export default PartnerPage

