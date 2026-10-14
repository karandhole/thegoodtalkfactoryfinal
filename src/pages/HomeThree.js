import React from "react";
import HeaderOne from "../common/header/HeaderOne";
import HeroThree from "../components/hero/HeroThree";
import AboutOne from "../components/about/AboutOne";
import HelpPeopleOne from "../components/help-people/HelpPeopleOne";
import ProjectOne from "../components/project/ProjectOne";
import CausesTwo from "../components/causes/CausesTwo";
import BrandOne from "../components/brand/BrandOne";
import TeamOne from "../components/team/TeamOne";
import TwoSection from "../components/two-section/TwoSectionOne";
import RecentEventsTwo from "../components/events/RecentEventsTwo";
import HelpPeopleTwo from "../components/help-people/HelpPeopleTwo";
import TestimonialTwo from "../components/testimonial/TestimonialTwo";
import BlogSectionThree from "../components/blog/BlogSectionThree";
import CtaOne from "../components/cta/CtaOne";
import FooterOne from "../common/footer/FooterOne";
import RecentEventsOne from "../components/events/RecentEventsOne";
import FooterTwo from "../common/footer/FooterTwo";
import GalleryOne from "../components/gallery/GalleryOne";
import TestimonialOne from "../components/testimonial/TestimonialOne";
import BrandTwo from "../components/brand/BrandTwo";
import FeatureOne from "../components/features/FeatureTwo";

const HomeThree = () => {
    return (
        <>
            <HeaderOne />
            <HeroThree />
             <FeatureOne/>
            <AboutOne />

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