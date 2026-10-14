import React from 'react';
import {Link} from 'react-router-dom';

export default class TeamThree extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="team-one" style={{backgroundColor:"aliceblue"}}>
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Board of Advisors</span>
                           
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="100ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/advisor/1.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `#`}>Sreedevi Devireddy </Link></h4>
                                        {/* <p className="team-one__title">Managing Trustee</p> */}
                                                  
                                    </div>
                                </div>
                            </div>






                            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="200ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/advisor/2.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL +`#` }>Vani Kokila</Link></h4>
                                        {/* <p className="team-one__title">President</p> */}
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInRight" data-wow-delay="300ms">
                               
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/advisor/3.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `/team-details`}>Vinay Vangala</Link></h4>
                                       
                                     
                                    </div>
                                </div>
                            </div>
                           <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInLeft" data-wow-delay="400ms">
                              
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/advisor/4.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `/team-details`}>Raghav Lanka</Link></h4>
                                    
                                      
                                    </div>
                                </div>
                            </div>
                             {/* <div className="col-lg-3 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="500ms">
                          
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/team-1-5.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `/team-details`}>Sri Manjari Vardhinedi</Link></h4>
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
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `/team-details`}>Mike Hardson</Link></h4>
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