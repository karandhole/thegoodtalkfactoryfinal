import React from "react";
import { Link } from "react-router-dom";
import "./FooterTwo.css";

export default class FooterTwo extends React.Component {
    render() {
        const publicUrl = process.env.PUBLIC_URL + "/";

        return (
            <footer className="tgtf-footer">

                {/* FOOTER MAIN SECTION */}
                <div className="tgtf-footer-main">
                    <div className="container">
                        <div className="row">

                            {/* ABOUT / CONTACT */}
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="tgtf-footer-widget tgtf-footer-about">

                                    <Link to={publicUrl} className="tgtf-footer-logo">
                                        <img
                                            src={publicUrl + "assets/images/resources/logo1.jpg"}
                                            alt="The Good Talk Factory Foundation"
                                        />
                                    </Link>

                                    <p className="tgtf-footer-description">
                                        Creating meaningful conversations, building
                                        inclusive communities, and empowering young
                                        people through education and opportunity.
                                    </p>

                                    <ul className="tgtf-footer-contact-list">

                                        <li>
                                            <span className="tgtf-footer-contact-icon">
                                                <i className="far fa-clock"></i>
                                            </span>
                                            <div>
                                                <span className="tgtf-footer-contact-label">
                                                    Working Hours
                                                </span>
                                                <p>Mon - Fri: 10:00 AM - 5:00 PM</p>
                                            </div>
                                        </li>

                                        <li>
                                            <span className="tgtf-footer-contact-icon">
                                                <i className="fas fa-map-marker-alt"></i>
                                            </span>
                                            <div>
                                                <span className="tgtf-footer-contact-label">
                                                    Our Location
                                                </span>
                                                <p>
                                                    Gandhi Heights, Vivekananda Nagar,
                                                    Kukatpally, Telangana
                                                </p>
                                            </div>
                                        </li>

                                        <li>
                                            <span className="tgtf-footer-contact-icon">
                                                <i className="fas fa-phone-alt"></i>
                                            </span>
                                            <div>
                                                <span className="tgtf-footer-contact-label">
                                                    Call Us
                                                </span>
                                                <p>
                                                    <a href="tel:+914035576553">
                                                        +91 40 3557 6553
                                                    </a>
                                                </p>
                                            </div>
                                        </li>

                                    </ul>

                                    <div className="tgtf-footer-social">
                                        <a
                                            href="https://www.linkedin.com/company/thegoodtalkfactory-foundation/about/?viewAsMember=true"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="LinkedIn"
                                        >
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>

                                        <a
                                            href="https://www.instagram.com/thegoodtalkfactory?igsh=bWYzMmZzYTY2azky"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="Instagram"
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>

                                </div>
                            </div>

                            {/* INITIATIVES */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="tgtf-footer-widget">

                                    <h3 className="tgtf-footer-heading">
                                        Initiatives
                                    </h3>

                                    <ul className="tgtf-footer-menu">
                                      

                                        <li>
                                            <Link to="/media">
                                                Media & Press Coverage
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/partnerships">
                                                Corporate & CSR Partnerships
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/our-programme">
                                                Our Programmes
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/events">
                                                Events & Activities
                                            </Link>
                                        </li>
                                          <li>
                                            <Link to="/about">
                                                Core Principles
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            {/* QUICK LINKS */}
                            <div className="col-xl-2 col-lg-6 col-md-6">
                                <div className="tgtf-footer-widget">

                                    <h3 className="tgtf-footer-heading">
                                        Quick Links
                                    </h3>

                                    <ul className="tgtf-footer-menu">
                                        <li>
                                            <a
                                                href="https://pages.razorpay.com/thegoodtalkfactoryfoundation"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Donate Now
                                            </a>
                                        </li>

                                        <li>
                                            <Link to="/our-programme">
                                                Programmes
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/volunteer">
                                                Volunteer / Intern
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/contact">
                                                Contact Us
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/our-story">
                                                Our Story
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            {/* GOOGLE MAP */}
                            <div className="col-xl-3 col-lg-6 col-md-6">
                                <div className="tgtf-footer-widget">

                                    <h3 className="tgtf-footer-heading">
                                        Find Us Here
                                    </h3>

                                    <p className="tgtf-footer-map-description">
                                        Visit us and be a part of our journey
                                        towards a more inclusive community.
                                    </p>

                                    <div className="tgtf-footer-map">
                                        <iframe
                                            title="The Good Talk Factory Foundation Location"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2096769687214!2d78.41161237462931!3d17.497501499624708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c6c0c6da43%3A0xd8a1fd6ab28d0ab1!2sGandhi%20Heights!5e0!3m2!1sen!2sin!4v1740374228469!5m2!1sen!2sin"
                                            loading="lazy"
                                            allowFullScreen
                                            referrerPolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* FOOTER BOTTOM */}
                <div className="tgtf-footer-bottom">
                    <div className="container">
                        <div className="tgtf-footer-bottom-inner">

                            <p>
                                © {new Date().getFullYear()} The Good Talk Factory
                                Foundation. All rights reserved.
                            </p>

                            <span className="tgtf-footer-bottom-tagline">
                                Together for a more inclusive tomorrow.
                            </span>

                        </div>
                    </div>
                </div>

            </footer>
        );
    }
}
