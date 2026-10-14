import React from 'react';
import { Link } from 'react-router-dom';

export default class RecentEventsOne extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <section className="recent-event">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">OUR IMPACT AREAS</span>
                            <h2 className="section-title__title">Key Focus Initiatives</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                                {/* Recent Event Single */}
                                <div className="recent-event__single">
                                    <div className="recent-event__img">
                                        <img src={publicUrl + "assets/images/services/impact2.jpg"} alt="" />
                                        {/* <div className="recent-event__btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn">Read More</Link>
                                        </div> */}
                                    </div>
                                    <div className="recent-event__content">
                                        {/* <ul className="list-unstyled recent-event__meta">
                                            <li>
                                                <p> <span className="icon-calendar"></span> 25 Mar 2022</p>
                                            </li>
                                            <li>
                                                <p> <span className="icon-back-in-time"></span> 04:00 am </p>
                                            </li>
                                        </ul> */}
                                        <h6 className="recent-event__title"><Link to={process.env.PUBLIC_URL + `/events`}> CONVERSATIONS & COMMUNITY ENGAGEMENT</Link></h6>
                                        <ul className="recent-event__text">
                                            <li> Panel discussions & community dialogues</li>
                                            <li>Workshops on effective communication & inclusivity</li>
                                            <li> Collaboration with various organizations to drive impact</li>
                                        </ul>

                                    </div>
                                </div>
                                {/* Recent Event Single */}
                                <div className="recent-event__single">
                                    <div className="recent-event__img">
                                        <img src={publicUrl + "assets/images/services/impact3.jpg"} alt="" />
                                        {/* <div className="recent-event__btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn">Read More</Link>
                                        </div> */}
                                    </div>
                                    <div className="recent-event__content">
                                        {/* <ul className="list-unstyled recent-event__meta">
                                            <li>
                                                <p> <span className="icon-calendar"></span> 25 Mar 2022</p>
                                            </li>
                                            <li>
                                                <p> <span className="icon-back-in-time"></span> 04:00 am </p>
                                            </li>
                                        </ul> */}
                                        <h6 className="recent-event__title"><Link to={process.env.PUBLIC_URL + `/events`}>PROJECT TGTF VIDYA (Scholarship & Skill Development Initiative)</Link></h6>
                                        <ul className="recent-event__text">
                                            <li> Scholarship sponsorship for 20 students per year @ ₹3,000 each</li>
                                            <li> Life skills training & leadership development workshops</li>
                                            <li> Creative arts & knowledge exchange programs </li>
                                        </ul>

                                    </div>
                                </div>

                            </div>
                            <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="300ms">
                                {/* Recent Event Single */}
                                <div className="recent-event__single">
                                    <div className="recent-event__img">
                                        <img src={publicUrl + "assets/images/services/impact5.jpg"} alt="" />
                                        {/* <div className="recent-event__btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn">Read More</Link>
                                        </div> */}
                                    </div>
                                    <div className="recent-event__content">
                                        {/* <ul className="list-unstyled recent-event__meta">
                                            <li>
                                                <p> <span className="icon-calendar"></span> 25 Mar 2022</p>
                                            </li>
                                            <li>
                                                <p> <span className="icon-back-in-time"></span> 04:00 am </p>
                                            </li>
                                        </ul> */}
                                        <h6 className="recent-event__title"><Link to={process.env.PUBLIC_URL + `/events`}>MENTAL HEALTH & WELLNESS INITIATIVES</Link></h6>
                                        <ul className="recent-event__text">
                                            <li> Corporate & community-driven mental wellness workshops</li>
                                            <li> Therapeutic activities like music & art-based therapy</li>
                                            <li> Advocacy for suicide prevention & emotional resilience <br/>  </li>
                                          
                                        </ul>

                                    </div>
                                </div>
                                {/* Recent Event Single */}
                                <div className="recent-event__single">
                                    <div className="recent-event__img">
                                        <img src={publicUrl + "assets/images/services/impact4.jpg"} alt="" />
                                        {/* <div className="recent-event__btn-box">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn">Read More</Link>
                                        </div> */}
                                    </div>
                                    <div className="recent-event__content">
                                        {/* <ul className="list-unstyled recent-event__meta">
                                            <li>
                                                <p> <span className="icon-calendar"></span> 25 Mar 2022</p>
                                            </li>
                                            <li>
                                                <p> <span className="icon-back-in-time"></span> 04:00 am </p>
                                            </li>
                                        </ul> */}
                                        <h6 className="recent-event__title"><Link to={process.env.PUBLIC_URL + `/events`}>INCLUSION & ACCESSIBILITY AWARENESS</Link></h6>
                                        <ul className="recent-event__text">
                                            <li> Assistive technology & accessibility consulting</li>
                                            <li> Workplace inclusivity training</li>
                                            <li> Educational accessibility initiatives</li>
                                        </ul>

                                    </div>
                                </div>
                                {/* Recent Event Single */}

                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}