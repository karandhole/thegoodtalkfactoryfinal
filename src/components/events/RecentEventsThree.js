import React from 'react';
import { Link } from 'react-router-dom';

export default class RecentEventsThree extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <section className="recent-event">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Our Defining Chapters                         </span>
                            <h2 className="section-title__title">Stories of Impact & Change</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                                {/* Recent Event Single */}
                                <div className="recent-event__single1">
                                    <div className="recent-event__img1">
                                        <img src={publicUrl + "assets/images/services/event1.jpg"} alt="" />
                                        <div className="recent-event__btn-box1">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn1">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="recent-event__content1">
                                        <ul className="list-unstyled recent-event__meta1">
                                            <li>
                                            <p className="icon-calendar1">25 May 2021</p>
                                            </li>

                                        </ul>
                                        <h3 className="recent-event__title1"><Link to={process.env.PUBLIC_URL + `/events`}>Mental Health Sessions - COVID-19 </Link></h3>
                                        
                                     

                                        <ul className="recent-event__text3">
                                            <li> Donated ₹30,000 worth of masks and sanitizers to frontline workers in need.</li>
                                            <li>Conducted multiple online mental health workshops during the pandemic</li>
                                            <li> Provided emotional support and coping strategies through expert sessions.</li>
                                        </ul>
                                    </div>
                                </div>


                                {/* Recent Event Single */}
                                <div className="recent-event__single1">
                                    <div className="recent-event__img1">
                                        <img src={publicUrl + "assets/images/services/event6.jpg"} alt="" />
                                        <div className="recent-event__btn-box1">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn1">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="recent-event__content1">
                                        <ul className="list-unstyled recent-event__meta1">
                                            <li>
                                            <p className="icon-calendar1">7 Jan 2024</p>
                                            </li>

                                        </ul>
                                        <h3 className="recent-event__title1"><Link to={process.env.PUBLIC_URL + `/events`}>International Purple Fest - Goa</Link></h3>
                                       
                                        <ul className="recent-event__text3">
                                            <li> Trained and led 1,200 volunteers to create an accessible event experience.</li>
                                            <li>Provided sensitization and inclusivity training for disability awareness.</li>
                                            <li> Strengthened volunteer engagement to promote participation and inclusion.
                                            </li>
                                        </ul>


                                    </div>
                                </div>

                                {/* Recent Event Single */}




                                {/* Recent Event Single */}
                                <div className="recent-event__single1">
                                    <div className="recent-event__img1">
                                        <img src={publicUrl + "assets/images/services/event3.jpg"} alt="" />
                                        <div className="recent-event__btn-box1">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn1">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="recent-event__content1">
                                        <ul className="list-unstyled recent-event__meta1">
                                            <li>
                                            <p className="icon-calendar1">6 July 2024</p>
                                            </li>

                                        </ul>
                                        <h3 className="recent-event__title1"><Link to={process.env.PUBLIC_URL + `/events`}>Project TGTF Vidya - Child Education</Link></h3>
                                       

                                        <ul className="recent-event__text3">
                                            <li> Launched in 2024 at Khushbow Vidya Niketan School, Hyderabad, for students.</li>
                                            <li>Allocated ₹60,000 in scholarships to support underprivileged children's education.</li>
                                            <li> Conducted workshops on leadership, art, and life skills with industry experts.
                                            </li>
                                        </ul>

                                     

                                    </div>
                                </div>



                            </div>


                         






                            {/* /////////////////////////////////////////////////////    2  Recent Event Single/////////////////////////////////////////////////////// */}






                            <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="100ms">


                                <div className="recent-event__single1">
                                    <div className="recent-event__img1">
                                        <img src={publicUrl + "assets/images/services/event7.jpg"} alt="" />
                                        <div className="recent-event__btn-box1">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn1">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="recent-event__content1">
                                        <ul className="list-unstyled recent-event__meta1">
                                            <li>
                                            <p className="icon-calendar1"> 2 Dec 2023</p>
                                            </li>

                                        </ul>
                                        <h3 className="recent-event__title1"><Link to={process.env.PUBLIC_URL + `/events`}>StudentPreneur - Confluence </Link></h3>
                                   

                                        <ul className="recent-event__text3">
                                            <li> Held at Bharatiya Vidya Bhavan’s Public School, Jubilee Hills, in December.</li>
                                            <li>Encouraged students to explore business ideas in assistive technology.</li>
                                            <li>Inspired young minds to develop innovative and inclusive solutions.</li>
                                        </ul>




                                    </div>
                                </div>


                                <div className="recent-event__single1">
                                    <div className="recent-event__img1">
                                        <img src={publicUrl + "assets/images/services/event5.jpg"} alt="" />
                                        <div className="recent-event__btn-box1">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn1">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="recent-event__content1">
                                        <ul className="list-unstyled recent-event__meta1">
                                            <li>
                                            <p className="icon-calendar1">27 April 2024</p>
                                            </li>

                                        </ul>
                                        <h3 className="recent-event__title1"><Link to={process.env.PUBLIC_URL + `/events`}>Taare Zameen Par - Art meets Music</Link></h3>
                                        

                                        
                                        <ul className="recent-event__text3">
                                            <li> A storytelling event celebrating creativity, self-expression, and imagination.</li>
                                            <li>Engaged children in painting, drawing, and performing arts for confidence.</li>
                                            <li>Encouraged artistic freedom through interactive and expressive experiences.</li>
                                        </ul>


                                    </div>
                                </div>


                                <div className="recent-event__single1">
                                    <div className="recent-event__img1">
                                        <img src={publicUrl + "assets/images/services/event2.jpg"} alt="" />
                                        <div className="recent-event__btn-box1">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn1">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="recent-event__content1">
                                        <ul className="list-unstyled recent-event__meta1">
                                            <li>
                                            <p className="icon-calendar1">11 Sep 2024</p>
                                            </li>

                                        </ul>
                                        <h3 className="recent-event__title1"><Link to={process.env.PUBLIC_URL + `/events`}>Mental Wellness - Salesforce</Link></h3>
                                     
                                        <ul className="recent-event__text3">
                                            <li>Conducted a workshop on Suicide Prevention & Resilience for professionals.</li>
                                            <li> Focused on mental strength, stress management, and emotional well-being.</li>
                                            <li>Integrated music and art therapy to enhance workplace wellness programs.
                                            </li>
                                        </ul>

                                    </div>
                                </div>


                            </div>






                        </div>
                    </div>




                    {/*/////////////////////////////////////////////////// 3Recent Event Single////////////////////////////////////////////////////// */}




                    <div className="container">

                        <div className="row">
                            <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="100ms">


                                {/* Recent Event Single */}
                                {/* Recent Event Single */}
                                <div className="recent-event__single1">
                                    <div className="recent-event__img1">
                                        <img src={publicUrl + "assets/images/services/event4.jpg"} alt="" />
                                        <div className="recent-event__btn-box1">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn1">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="recent-event__content1">
                                        <ul className="list-unstyled recent-event__meta1">
                                            <li>
                                            <p className="icon-calendar1"> 22 Sep 2024</p>
                                            </li>

                                        </ul>
                                        <h3 className="recent-event__title1"><Link to={process.env.PUBLIC_URL + `/events`}>The Elderly Tales - Nostalgia </Link></h3>
                                     
                                        <ul className="recent-event__text3">
                                            <li> Hosted a storytelling event at PP Reddy Retirement Homes in Hyderabad.</li>
                                            <li>Engaged seniors in interactive discussions, music therapy, and art sessions.</li>
                                            <li>Created a platform for sharing experiences, memories, and personal stories.</li>
                                        </ul>


                                    </div>
                                </div>




                            </div>


                            <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay="100ms">
                                {/* Recent Event Single */}
                                <div className="recent-event__single1">
                                    <div className="recent-event__img1">
                                        <img src={publicUrl + "assets/images/gallery/gallery7.JPG"} alt="" />
                                        <div className="recent-event__btn-box1">
                                            <Link to={process.env.PUBLIC_URL + `/events`} className="thm-btn recent-event__btn1">Read More</Link>
                                        </div>
                                    </div>
                                    <div className="recent-event__content1">
                                        <ul className="list-unstyled recent-event__meta1">
                                            <li>
                                            <p className="icon-calendar1"> 17 Jan 2025</p>
                                            </li>

                                        </ul>
                                        <h3 className="recent-event__title1"><Link to={process.env.PUBLIC_URL + `/events`}> Purple Jallosh - Solvathon</Link></h3>
                                       
                                        <ul className="recent-event__text3">
                                            <li> Partnered with Purple Jallosh 2025 to drive innovation and accessibility.</li>
                                            <li>Hosted workshops, panel discussions, and training sessions on inclusion.</li>
                                            <li>Focused on assistive solutions that promote disability-friendly spaces.</li>
                                        </ul>



                                    </div>
                                </div>                                

                            </div>






                        </div>
                    </div>












                </section>
            </>
        )
    }
}




































