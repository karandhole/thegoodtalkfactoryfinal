import React from 'react';
import {Link} from 'react-router-dom';

export default class TeamTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="team-one" style={{backgroundColor:"aliceblue"}}>
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Volunteers/Interns Team</span>
                            {/* <h2 className="section-title__title">Meet Our Volunteer Team.</h2> */}
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="100ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/volunteer/1.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `#`}>Charitha  </Link></h4>
                                        {/* <p className="team-one__title">Managing Trustee</p> */}
                                                      
                                    </div>
                                </div>
                            </div>






                            
                            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/volunteer/3.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `#`}>Harshitha </Link></h4>
                                        {/* <p className="team-one__title">Secretary</p> */}
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="400ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/volunteer/4.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `#`}>Ishita Kumari </Link></h4>
                                        {/* <p className="team-one__title">Joint Secretary</p> */}
                                        
                                    </div>
                                </div>
                            </div>
                           <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="500ms">
                           
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/volunteer/5.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `#`}>Kaushik </Link></h4>
                                       
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
                          
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/volunteer/6.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `#`}>Mani Deepika </Link></h4>
                                   
                                       
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
                          
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/volunteer/7.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `#`}>Pranavi  </Link></h4>
                                   
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
                          
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/volunteer/8.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `#`}>Sai Kumar </Link></h4>
                                   
                                       
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="200ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/volunteer/2.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `#`}>Dhanraj </Link></h4>
                                        {/* <p className="team-one__title">President</p> */}
                                        
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