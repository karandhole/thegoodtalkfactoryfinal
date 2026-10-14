import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import AboutOne from '../components/about/AboutOne';
import CounterOne from '../components/counter/CounterOne';
import ProjectOne from '../components/project/ProjectOne';
import SkillsOne from '../components/skills/SkillOne';
import TeamOne from '../components/team/TeamOne';
import VideoOne from '../components/video/VideoOne';
import TestimonialOne from '../components/testimonial/TestimonialOne';
import BlogOne from '../components/blog/BlogOne';
import FooterOne from '../common/footer/FooterOne';
import FooterTwo from '../common/footer/FooterTwo';
import CtaOne from '../components/cta/CtaOne';
import FaqOne from '../components/faq/FaqOne';
import AboutThree from '../components/about/AboutThree';

const About = () => {
    return (
        <>
            <HeaderOne />
            {/* <Breadcrumb
                heading="About Us"
                currentPage="About"
            /> */}

            {/* <VideoOne /> */}
            <AboutOne />
            <CounterOne />
            {/* <ProjectOne />  */}
            {/* <SkillsOne /> */}
            <AboutThree />

            {/* <CtaOne/> */}
            {/* <FaqOne/> */}

            {/* <TestimonialOne /> */}
            {/* <BlogOne /> */}
            <FooterTwo />

        </>
    )
}

export default About;