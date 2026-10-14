import React from 'react';
import {Link} from 'react-router-dom';

export default class AboutThree extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="team-one">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">GET INVOLVED</span>
                            <h6 className="section-title__title2">TGTF believes change starts with conversations, and we invite YOU to be a part of this journey.</h6>
                        </div>
                        <div className="row">



                        <div className="col-lg-3 col-md-6 col-sm-12  wow fadeInRight" data-wow-delay="100ms">
                                {/* Team One Single */}
                                <div className="team-one__single" style={{backgroundColor:"aliceblue"}}>
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/services/about1.1.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `/contact`}>Want to share your story or perform? </Link></h4>
                                       
                                       
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-3 col-md-6 col-sm-12  wow fadeInUp" data-wow-delay="200ms">
                                {/* Team One Single */}
                                <div className="team-one__single"  style={{backgroundColor:"aliceblue"}}>
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/services/about1.2.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><a href=' https://pages.razorpay.com/thegoodtalkfactoryfoundation' target='_blank'>Want to support child education?   </a></h4>
                                      
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12  wow fadeInRight" data-wow-delay="100ms">
                                {/* Team One Single */}
                                <div className="team-one__single"  style={{backgroundColor:"aliceblue"}}>
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/services/about1.3.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><Link to={process.env.PUBLIC_URL + `/contact`}>Want to make your workplace inclusive? </Link></h4>
                                      
                                        
                                    </div>
                                </div>
                            </div>



                            <div className="col-lg-3 col-md-6 col-sm-12  wow fadeInLeft" data-wow-delay="100ms">
                                {/* Team One Single */}
                                <div className="team-one__single "  style={{backgroundColor:"aliceblue"}}>
                                    <div className="team-one__img">
                                        <img src={publicUrl+"assets/images/services/about1.4.jpg"} alt="" />
                                    </div>
                                    <div className="team-one__content">
                                        <h4 className="team-one__name"><a href=' https://docs.google.com/forms/d/1yX7HG27u9TI2nONvLit4iaPng98JC9jKW3Q2z4LeNA0/viewform?edit_requested=true' target='_blank'>Want to volunteer/intern?  </a></h4>
                                   
                                       
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