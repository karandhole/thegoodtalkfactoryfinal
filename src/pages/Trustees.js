import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamTwo from '../components/team/TeamTwo';
import FooterOne from '../common/footer/FooterOne';
import FooterTwo from '../common/footer/FooterTwo';
import TeamOne from '../components/team/TeamOne';

const Trustee = () => {
    return (
        <>
            <HeaderOne />
            {/* <Breadcrumb 
                heading="Team"
                currentPage="Team" 
            /> */}
            <TeamOne />
            <FooterTwo />
        </>
    )
}

export default Trustee;