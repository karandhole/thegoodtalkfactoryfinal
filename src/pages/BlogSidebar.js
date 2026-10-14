import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import BlogThree from '../components/blog/BlogThree';
import FooterOne from '../common/footer/FooterOne';
import FooterTwo from '../common/footer/FooterTwo';

const BlogSidebar = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Blog Sidebar"
                currentPage="Blog Sidebar" 
            />
            <BlogThree />
            <FooterTwo />
        </>
    )
}

export default BlogSidebar;