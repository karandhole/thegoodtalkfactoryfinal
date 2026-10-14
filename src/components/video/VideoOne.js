import React from 'react';
import { Link } from 'react-router-dom';

export default class VideoOne extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".video-popup").length) {
            $(".video-popup").magnificPopup({
                type: "iframe",
                mainClass: "mfp-fade",
                removalDelay: 160,
                preloader: true,
                fixedContentPos: false,
            });
        }
          
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>

                <section className="video-one">
                    <div className="video-one__content-box">
                        {/* <div className="video-one-shape sauare-mover">  <img src={publicUrl+"assets/images/services/about1.4.jpg"} style={{height:"250px"}} alt="" /></div> */}
                        <div className="video-one-bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/hero.jpg)'}}></div>
                        <div className="container">
                            <div className="video-one__inner">
                                <div className="video-one__video-link">
                                    <a href="https://www.youtube.com/watch?v=Get7rqXYrbQ" className="video-popup">
                                        <div className="video-one__video-icon">
                                            <span className="fa fa-play"></span>
                                            <i className="ripple"></i>
                                        </div>
                                    </a>
                                </div>
                                <h3 className="video-one__title">Welcome To Our The Good Talk <br />  Factory.</h3>
                                <p className="video-one__text">The Good Talk Factory (TGTF) is a non-governmental organization (NGO) on a mission to foster positive social change through the power of conversations.  </p>
                                <Link to={process.env.PUBLIC_URL + `/about`} className="thm-btn video-one__btn">Video More</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}