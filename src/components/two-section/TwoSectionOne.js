import React from 'react';
import { Link } from 'react-router-dom';

export default class TwoSectionOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="two-section">
                    <div className="two-section__wrapper">
                        <div className="two-section__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms" style={{backgroundImage: 'url('+publicUrl+')'}}>
                            <div className="two-section__content-box">
                                <h6 className="two-section__title " style={{ borderBottom: "3px solid orange", display: "inline-block", paddingBottom: "5px" }}>OUR VISION</h6>
                                    <p style={{}}></p>
                                <p className="two-section__sub-title">A world where every voice is heard, every individual is valued, and every person has the opportunity to participate, express themselves, and belong with dignity, equality, and respect, free from barriers and discrimination. </p>
                                <p></p>
                                
                                {/* <Link to={process.env.PUBLIC_URL + `/about`} className="thm-btn two-section__btn-1">View All</Link> */}
                            </div>
                        </div>
                        <div className="two-section__right wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms" style={{backgroundImage: 'url('+publicUrl+')'}}>
                            <div className="two-section__content-box">
                                <h6 className="two-section__title " style={{ borderBottom: "3px solid orange", display: "inline-block", paddingBottom: "5px" }}>OUR MISSION</h6>
                                <p className="two-section__sub-title">To create safe, welcoming, and accessible spaces for conversations, learning, creativity, and community participation—transforming human stories into empathy, understanding, inclusion, and meaningful social change.</p>
                                {/* <Link to={process.env.PUBLIC_URL + `/about`} className="thm-btn two-section__btn-2">See More</Link> */}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}