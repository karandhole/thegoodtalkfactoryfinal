import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TestimonialFour from '../components/testimonial/TestimonialFour';
import FooterOne from '../common/footer/FooterOne';
import FooterTwo from '../common/footer/FooterTwo';

const Testimonials = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Testimonials"
                currentPage="Testimonials" 
            />
            <TestimonialFour />
            <FooterTwo />
        </>
    )
}

export default Testimonials;