import React from "react";
// imports
import SectionHowItWork from "@/components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionSliderProductCard from "@/components/SectionSliderProductCard";
import DiscoverMoreSlider from "@/components/DiscoverMoreSlider";
import SectionGridMoreExplore from "@/components/SectionGridMoreExplore/SectionGridMoreExplore";
import SectionPromo3 from "@/components/SectionPromo3";
import SectionClientSay from "@/components/SectionClientSay/SectionClientSay";
import { PRODUCTS, SPORT_PRODUCTS } from "@/data/data";
import SectionGridFeatureItems from "@/components/SectionGridFeatureItems";


function PageHome() {
  return (
    <div className="nc-PageHome relative overflow-hidden">
      <div className="mt-5 lg:mt-5">
        <DiscoverMoreSlider />
      </div>
      <div className="relative py-5 lg:py-10">
          <BackgroundSection />
          <SectionGridMoreExplore />
        </div>
      <div className="container relative space-y-24 my-14 lg:space-y-22 lg:my-22">
        <SectionSliderProductCard
          data={[
            PRODUCTS[4],
            SPORT_PRODUCTS[5],
            PRODUCTS[7],
            SPORT_PRODUCTS[1],
            PRODUCTS[6],
          ]}
        />
        <div className="py-10 lg:py-12 border-t border-b border-slate-200 dark:border-slate-700">
          <SectionHowItWork />
        </div>
        <SectionPromo3 />
        <SectionGridFeatureItems />
        <SectionClientSay />
      </div>
    </div>
  );
}

export default PageHome;
