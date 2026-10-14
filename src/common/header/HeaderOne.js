import React from 'react';
import { Link } from "react-router-dom";
import Nav from './Nav';
import MobileMenu from './MobileMenu';
import SearchButton from './SearchButton';

export default class HeaderOne extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <header className="main-header clearfix">
                    <div className="main-header__top clearfix">
                        <div className="container clearfix">
                            <div className="main-header__top-inner clearfix">
                                <div className="main-header__top-left">
                                    <ul className="list-unstyled main-header__top-address">

                                        <li>
                                          
                                            <div className="text">
                                                <p><a href="mailto:demo@example.com">#TheGoodTalkFactoryFoundation &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   #PlatformForCommoners  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;    #LiveYourStory  &nbsp; &nbsp;   &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;   #WeAreHereToHearYou</a></p>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="icon">
                                                {/* <span className="icon-place"></span> */}
                                            </div>
                                            <div className="text">
                                                {/* <p>Gandhi Heights, Vivekananda Nagar, Kukatpally, Telangana</p> */}
                                            </div>
                                        </li>

                                    </ul>
                                </div>
                                <div className="main-header__top-right">
                                    <ul className="list-unstyled main-header__top-right-content">
                                       
                                        <li><Link to={process.env.PUBLIC_URL + `/`}><p style={{ paddingLeft: "0px" }}> <span ></span>#TgtfProjectVidya</p></Link></li>
                                      
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="main-menu clearfix">
                        <div className="container clearfix">
                            <div className="main-menu-wrapper clearfix">
                                <div className="main-menu-wrapper__left">
                                    <div className="main-menu-wrapper__logo">
                                        <Link to={process.env.PUBLIC_URL + `/`}>
                                            <img src={publicUrl + "assets/images/resources/logo1.jpg"} style={{ width: "80px", height: "80px" }} alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="main-menu-wrapper__right">
                                    <div className="main-menu-wrapper__main-menu">
                                        <MobileMenu />
                                        <Nav />
                                    </div>
                                    {/* <Link to={process.env.PUBLIC_URL + `/donate-now`} className="thm-btn main-header__btn">Donate Now</Link> */}

                                    <a
                                        href="https://pages.razorpay.com/thegoodtalkfactoryfoundation"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="thm-btn main-header__btn"
                                    >
                                        Donate Now
                                    </a>

                                </div>
                            </div>
                        </div>
                    </nav>
                </header>
            </>
        )
    }
}