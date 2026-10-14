import React from 'react';
import {Link} from 'react-router-dom';

export default class TeamFour extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="team-one" style={{backgroundColor:"aliceblue"}}>
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Core Team Members</span>
                            {/* <h2 className="section-title__title">Meet Our Core Team.</h2> */}
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="100ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/core/core1.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `#`}>Raghu Dutt </Link></h4>
                                        <p className="team-one__title">Founder</p>
                                                    
                                    </div>
                                </div>
                            </div>






                            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="200ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/core/core2.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `#`}>Swetha</Link></h4>
                                        <p className="team-one__title">Program Manager - TGTF Vidya</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/core/core3.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `#`}>Kalyan </Link></h4>
                                        <p className="team-one__title">Lead Coordinator - TGTF activities</p>
                                       
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="400ms">
                                
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/team-1-4.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `#`}>Venkata Sudheer Kumar Bellapu</Link></h4>
                                        <p className="team-one__title">Joint Secretary</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="500ms">
                               
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/team-1-5.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `#`}>Sri Manjari Vardhinedi</Link></h4>
                                        <p className="team-one__title"> Treasurer</p>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="600ms">
                              
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/team-1-6.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `#`}>Mike Hardson</Link></h4>
                                        <p className="team-one__title">Fundraise</p>
                                       
                                    </div>
                                </div>
                            </div>*/}
                        </div> 
                    </div>
                </section>
            </>
        )
    }
}