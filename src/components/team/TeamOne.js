import React from 'react';
import {Link} from 'react-router-dom';

export default class TeamOne extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="team-one" style={{backgroundColor:"aliceblue"}}>
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Board of Trustees</span>
                          
                        </div>
                        <div className="row">



                        <div className="col-lg-3 col-md-6 col-sm-12  wow fadeInRight" data-wow-delay="100ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/trustee/trustee4.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `#`}>Satya Malladi  </Link></h4>
                                        <p className="team-one__title">President</p>
                                       
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 col-sm-12  wow fadeInUp" data-wow-delay="200ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/trustee/trustee2.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `#`}>Sri Manjari   </Link></h4>
                                        <p className="team-one__title">  Treasurer</p>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12  wow fadeInRight" data-wow-delay="100ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/trustee/trustee3.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `#`}>Sri Madhuri  </Link></h4>
                                        <p className="team-one__title"> Secretary</p>
                                        
                                    </div>
                                </div>
                            </div>



                            <div className="col-lg-3 col-md-6 col-sm-12  wow fadeInLeft" data-wow-delay="100ms">
                                {/* Team One Single */}
                                <div className="team-one__single">
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/team/trustee/trustee1.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `#`}>Sudheer Kumar  </Link></h4>
                                        <p className="team-one__title">Joint Secretary </p>
                                       
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