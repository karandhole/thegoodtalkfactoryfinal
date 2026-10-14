import React from 'react';

export default class ContactInfo extends React.Component {
    render(){
        return (
            <>
                <section className="contact-info">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4">
                                {/* Contact Info Single */}
                                <div className="contact-info__single">
                                    <h4 className="contact-info__title">About</h4>
                                    <p className="contact-info__text">The Good Talk Factory (TGTF) is a non-governmental organization (NGO) .</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                {/* Contact Info Single */}
                                <div className="contact-info__single">
                                    <h4 className="contact-info__title">Address</h4>
                                    <p className="contact-info__text"> Gandhi Heights, Vivekananda Nagar, Kukatpally, <br />
                                    Telangana</p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                {/* Contact Info Single */}
                                <div className="contact-info__single contact-info__single-3">
                                    <h4 className="contact-info__title">Contact</h4>
                                    <p className="contact-info__email-phone">
                                        <a href="mailto:needhelp@company.com"
                                            className="contact-info__email">admin@thegoodtalkfactory.org</a>
                                        <a href="tel:13077760608" className="contact-info__phone">+91  989776-0608</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}