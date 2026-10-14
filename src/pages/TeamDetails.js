import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import TeamDetailsContent from '../components/team-details/TeamDetailsContent';
import FooterOne from '../common/footer/FooterOne';
import FooterTwo from '../common/footer/FooterTwo';

const TeamDetails = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Volunteer"
                currentPage="Volunteer Registration" 
            />
            <TeamDetailsContent />
            <FooterTwo />
        </>
    )
}

export default TeamDetails;