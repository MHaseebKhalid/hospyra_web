import type { Metadata } from "next";
import TitleCard from "@/components/cards/TitleCard";
import HomeBanner from "@/components/banners/HomeBanner";
import RealBrands from "@/components/sections/RealBrands";
import TopBorderCard from "@/components/cards/TopBorderCard";
import MediaDrivenCard from "@/components/cards/MediaDrivenCard";
import UnstoppableCard from "@/components/cards/UnstoppableCard";
import TrustedPartners from "@/components/sections/TrustedPartners";
import WhyHospyraExists from "@/components/sections/WhyHospyraExists";
import MarketingAndMedia from "@/components/sections/MarketingAndMedia";
import TrustedByRestaurants from "@/components/sections/TrustedByRestaurants";
import { Building2, Cog, Map, Megaphone, RefreshCw, Rocket, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Hospyra - Restaurant Growth, Media & Execution Partner",
  description: "Hospyra is the all-in-one growth, media, and execution partner for restaurants. We help restaurants increase visibility and revenue first, then support everything needed to improve, expand, and scale with confidence.",
  keywords: "restaurant growth, restaurant marketing, restaurant media, restaurant execution, hospitality partner, restaurant expansion",
};

const Home = () => {
  return (
    <div>
      <HomeBanner />
      <TrustedByRestaurants />
      <WhyHospyraExists />
      <MarketingAndMedia />
      <TrustedPartners />
      <div className="bg-[#fffdfb]">
        <div className="py-12">
          <TitleCard
            className="px-[4%] pb-6"
            orangeLabel="WHO HOSPYRA IS FOR"
            title="Built for Serious Hospitality Builders"
          />
          <div className="flex px-[4%] overflow-x-auto hide-scrollbar gap-6 py-6">
            <TopBorderCard className="w-90.75" title="New restaurants launching their first concept the right way" icon={<Rocket color="#F05830" />} />
            <TopBorderCard className="w-90.75" title="Restaurants ready to reposition or modernize" icon={<RefreshCw color="#F05830" />} />
            <TopBorderCard className="w-90.75" title="Brands preparing for expansion" icon={<Map color="#F05830" />} />
            <TopBorderCard className="w-90.75" title="Hospitality groups building multi-location portfolios" icon={<Building2 color="#F05830" />} />
          </div>
        </div>
        <div className="px-[4%]">
          <MediaDrivenCard />
        </div>
        <div className="py-12">
          <TitleCard
            className="px-[4%] pb-6"
            orangeLabel="HOW IT WORKS"
            title="Simple. Structured. Effective."
          />
          <div className="flex md:grid grid-cols-2 lg:grid-cols-4 px-[4%] overflow-x-auto hide-scrollbar gap-6 py-6">
            <TopBorderCard className="w-80.75 md:w-full" count={"01"} title="We understand your current position" icon={<Search color="#F05830" />} />
            <TopBorderCard className="w-80.75 md:w-full" count={"02"} title="We build visibility and demand through media & growth" icon={<Megaphone color="#F05830" />} />
            <TopBorderCard className="w-80.75 md:w-full" count={"03"} title="We execute everything else with the right teams" icon={<Cog color="#F05830" />} />
            <TopBorderCard className="w-80.75 md:w-full" count={"04"} title="We stay involved as your brand grows" icon={<Rocket color="#F05830" />} />
          </div>
        </div>
      </div>
      <RealBrands />
      <UnstoppableCard
        heading="Let's Make Your Restaurant Visible Then Unstoppable"
        description="Everything becomes easier when growth is working. Start with a strategy call and discover what's possible."
        buttons={[
          {
            title: "Book a Free Strategy Call",
            bgColor: "white",
            color: "#27272A",
            href: "/contact",
          },
          {
            title: "Explore Hospyra Services",
            bgColor: "transparent",
            color: "white",
            borderColor: "white",
            borderWidth: "1px",
            href: "/services",
          },
        ]}
      />
    </div>
  );
}
export default Home;