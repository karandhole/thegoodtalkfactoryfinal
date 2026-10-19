import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import HeroThree from "../components/hero/HeroThree";
import AboutOne from "../components/about/AboutOne";
import HelpPeopleOne from "../components/help-people/HelpPeopleOne";

import CausesTwo from "../components/causes/CausesTwo";

import TwoSection from "../components/two-section/TwoSectionOne";
import RecentEventsTwo from "../components/events/RecentEventsTwo";
import HelpPeopleTwo from "../components/help-people/HelpPeopleTwo";

import RecentEventsOne from "../components/events/RecentEventsOne";
import FooterTwo from "../common/footer/FooterTwo";
import GalleryOne from "../components/gallery/GalleryOne";

import FeatureOne from "../components/features/FeatureTwo";
import FeatureTwo from "../components/features/FeatureOne";

const HomeThree = () => {
    return (
        <>
            <HeaderOne />
            <HeroThree />
             <FeatureOne/>
            <AboutOne />
            <FeatureTwo/>

            <HelpPeopleOne />
            <TwoSection />
            <HelpPeopleTwo />
            <RecentEventsOne />
            <CausesTwo />
            {/* <BrandOne /> */}
          
            {/* <TeamOne /> */}
            
            <RecentEventsTwo />
           
           
            {/* <BlogSectionThree /> */}
            {/* <ProjectOne /> */} 
            <GalleryOne/>
         
            {/* <CtaOne /> */}
            <FooterTwo />
        </>
    )
}

export default HomeThree;