import React from 'react';

export default class HelpPeopleTwo extends React.Component {
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="help-one">
                    <div className="help-one-bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/principals.jpg)'}}></div>
                    <div className="container">
                        <h3 className="help-one__title">OUR CORE PRINCIPLES</h3>
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="help-one__content-box">
                                    <div className="help-one__single">
                                        <div className="help-one__icon">
                                            {/* <span className="icon-donation-1"></span> */}
                                            <img src={publicUrl + "assets/images/icon/icon1.png"} style={{height:"60px", width:"60px" ,backgroundColor:"white"}} alt="" />
                                        </div>
                                        <div className="help-one__content">
                                            <h4>Passion </h4>
                                            <p>Every conversation holds the power to create change.</p>
                                        </div>
                                    </div>
                                    <div className="help-one__single">
                                        <div className="help-one__icon">
                                            {/* <span className="icon-heart"></span> */}
                                            <img src={publicUrl + "assets/images/icon/icon2.png"} style={{height:"60px", width:"60px" ,backgroundColor:"white"}} alt="" />
                                            
                                        </div>
                                        <div className="help-one__content">
                                            <h4> Dedication </h4>
                                            <p>We provide consistent efforts in fostering inclusivity.</p>
                                         </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="help-one__content-box">
                                    <div className="help-one__single">
                                        <div className="help-one__icon">
                                            {/* <span className="icon-donation"></span> */}
                                            <img src={publicUrl + "assets/images/icon/icon3.png"} style={{height:"60px", width:"60px" ,backgroundColor:"white"}} alt="" />
                                        </div>
                                        <div className="help-one__content">
                                            <h4> Inspiration </h4>
                                            <p>Real-life stories inspire communities to take action.</p>
                                        </div>
                                    </div>
                                    <div className="help-one__single">
                                        <div className="help-one__icon">
                                            {/* <span className="icon-bankruptcy"></span> */}
                                            <img src={publicUrl + "assets/images/icon/icon4.png"} style={{height:"60px", width:"60px" ,backgroundColor:"white"}} alt="" />
                                        </div>
                                        <div className="help-one__content">
                                            <h4>Transformation</h4>
                                            <p>Through dialogue, we shape perspectives & drive change.</p>
                                        </div>
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