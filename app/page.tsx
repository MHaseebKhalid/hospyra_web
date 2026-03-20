import type { Metadata } from "next";
import HomeBanner from "@/components/banners/HomeBanner";
import TrustedByRestaurants from "@/components/sections/TrustedByRestaurants";
import WhatHosperraOffers from "@/components/sections/WhatHosperraOffers";
import OperationsAreTooFragmented from "@/components/sections/OperationsAreTooFragmented";
import HowItWorks from "@/components/sections/HowItWorks";
import Faq from "@/components/sections/Faq";
import FocusOnGrowthCTA from "@/components/cards/FocusOnGrowthCTA";
import ForBusinessOwnersInvestorsWithBg from "@/components/sections/ForBusinessOwnersInvestorsWithBg";
import ForBusinessOwnersInvestor from "@/components/sections/ForBusinessOwnersInvestor";
import WeWorkWith from "@/components/sections/WeWorkWith";
import Platform from "@/components/sections/Platform";
import WhyJoinHospyra from "@/components/sections/WhyJoinHospyra";

export const metadata: Metadata = {
  title: "Hospyra - Restaurant Growth, Media & Execution Partner",
  description: "Hospyra is the all-in-one growth, media, and execution partner for restaurants. We help restaurants increase visibility and revenue first, then support everything needed to improve, expand, and scale with confidence.",
  keywords: "restaurant growth, restaurant marketing, restaurant media, restaurant execution, hospitality partner, restaurant expansion",
};

const Home = () => {

  return (
    <div>
      <HomeBanner />
      <WhatHosperraOffers />
      <OperationsAreTooFragmented />
      <HowItWorks />
      <WhyJoinHospyra/>
      <Platform />
      <WeWorkWith/>
      <TrustedByRestaurants />
      <ForBusinessOwnersInvestor />
      <FocusOnGrowthCTA />
      <Faq />
      <ForBusinessOwnersInvestorsWithBg />
    </div>
  );
}
export default Home;