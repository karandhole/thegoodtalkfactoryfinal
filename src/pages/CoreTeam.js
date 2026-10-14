import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamTwo from '../components/team/TeamTwo';
import FooterOne from '../common/footer/FooterOne';
import FooterTwo from '../common/footer/FooterTwo';
import TeamFour from '../components/team/TeamFour';

const CoreTeam = () => {
    return (
        <>
            <HeaderOne />
            {/* <Breadcrumb 
                heading="Team"
                currentPage="Team" 
            /> */}
            <TeamFour />
            <FooterTwo />
        </>
    )
}

export default CoreTeam;