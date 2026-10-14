import React from 'react';
import { Link } from 'react-router-dom';

export default class HelpPeopleOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="help-people">
                    <div className="help-people-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/volunteer-bg.jpg)'}}></div>
                    <div className="container">
                        <div className="help-people__inner wow fadeInUp" data-wow-delay="300ms" style={{borderRadius:"10px"}}>
                            <div className="help-people__sub-title-box">
                                <p style={{color:"black", fontWeight:"700"}}>Become a Volunteer</p>
                            </div>
                            
                            <Link to={process.env.PUBLIC_URL + `/volunteer`} className="thm-btn help-people__btn">Join Us Now</Link>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}