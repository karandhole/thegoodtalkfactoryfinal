import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import DonationDetailsContent from '../components/donation/DonationDetailsContent';
import FooterOne from '../common/footer/FooterOne';
import FooterTwo from '../common/footer/FooterTwo';

const DonationDetails = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Donation Details"
                currentPage="Donation Details" 
            />
            <DonationDetailsContent />
            <FooterTwo />
        </>
    )
}

export default DonationDetails;