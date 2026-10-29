import React from 'react';
import HeaderOne from '../common/header/HeaderOne';
import Breadcrumb from '../common/breadcrumb/Breadcrumb';
import RecentEventsOne from '../components/events/RecentEventsOne';
import CausesOne from '../components/causes/CausesOne';
import FooterOne from '../common/footer/FooterOne';
import RecentEventsThree from '../components/events/RecentEventsThree';
import FooterTwo from '../common/footer/FooterTwo';
import Event1 from '../components/events/event1';

const Events = () => {
    return (
        <>
            <HeaderOne />
            <Breadcrumb 
                heading="Events & Special Initiatives"
                currentPage="Events" 
            />
            <RecentEventsThree />
            <Event1/>
            {/* <CausesOne /> */}
            <FooterTwo />
        </>
    )
}

export default Events;