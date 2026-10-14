import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogTwo from '../components/blog/BlogTwo';
import FooterOne from '../common/footer/FooterOne';
import FooterTwo from '../common/footer/FooterTwo';

const BlogVersionTwo = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Blog Post"
                currentPage="Blog V-2" 
            />
            <BlogTwo />
            <FooterTwo />
        </>
    )
}

export default BlogVersionTwo;