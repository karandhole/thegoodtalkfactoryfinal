import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import RecentEventsOne from '../components/events/RecentEventsOne';
import CausesOne from '../components/causes/CausesOne';
import FooterOne from '../common/footer/FooterOne';
import RecentEventsThree from '../components/events/RecentEventsThree';
import FooterTwo from '../common/footer/FooterTwo';

const Events = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Events"
                currentPage="Events" 
            />
            <RecentEventsThree />
            {/* <CausesOne /> */}
            <FooterTwo />
        </>
    )
}

export default Events;