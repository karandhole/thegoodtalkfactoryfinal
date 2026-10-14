import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogOne from '../components/blog/BlogOne';
import FooterOne from '../common/footer/FooterOne';
import FooterTwo from '../common/footer/FooterTwo';

const BlogVersionOne = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Blog Post"
                currentPage="Blog V-2" 
            />
            <BlogOne />
            <FooterTwo />
        </>
    )
}

export default BlogVersionOne;