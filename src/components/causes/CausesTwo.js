import React from 'react';
import { Link } from 'react-router-dom';

export default class CausesTwo extends React.Component {
    componentDidMount() {

        const $ = window.$;
  
        // Popular Causes Progress Bar
        if ($(".count-bar").length) {
            $(".count-bar").appear(
            function () {
                var el = $(this);
                var percent = el.data("percent");
                $(el).css("width", percent).addClass("counted");
            }, {
                accY: -50
            }
            );
        }

        //Progress Bar / Levels
        if ($(".progress-levels .progress-box .bar-fill").length) {
            $(".progress-box .bar-fill").each(
            function () {
                $(".progress-box .bar-fill").appear(function () {
                var progressWidth = $(this).attr("data-percent");
                $(this).css("width", progressWidth + "%");
                });
            }, {
                accY: 0
            }
            );
        }

        //Fact Counter + Text Count
        if ($(".count-box").length) {
            $(".count-box").appear(
            function () {
                var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function () {
                    $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function () {
                    $t.find(".count-text").text(this.countNum);
                    }
                });
                }
            }, {
                accY: 0
            }
            );
        }
            
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="help-the-causes">
                    <div className="help-the-causes__wrapper">
                        <div className="help-the-causes__left">
                            <div className="help-the-causes__left-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/resources/left.JPG)'}}></div>
                        </div>
                        <div className="help-the-causes__right">
                            <div className="help-the-causes__content-bg" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/left.JPG)'}}></div>
                            <div className="help-the-causes__content-box">
                                <div className="section-title text-left">
                                    <span className="section-title__tagline">SUSTAINABILITY & GROWTH STRATEGY </span>
                                    {/* <h6 className="section-title__title">TGTF’s long-term vision is to expand its initiatives nationally through:</h6> */}
                                </div>
                               
                                <ul className="progress-levels" style={{paddingLeft:"0px", top:"40px"}}>
                                    {/* Skill Box */}
                                    <li className="progress-box">
                                        <div className="inner count-box">
                                            <div className="text">Collaborations with corporates & government bodies</div>
                                            {/* <div className="bar">
                                                <div className="bar-innner">
                                                    <div className="skill-percent">
                                                        <span className="count-text" data-speed="3000" data-stop="82">0</span>
                                                        <span className="percent">%</span>
                                                    </div>
                                                    <div className="bar-fill" data-percent="82"></div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </li>
                                    {/* Skill Box */}
                                    <li className="progress-box ">
                                        <div className="inner count-box">
                                            <div className="text">Increased scholarship funding for child education</div>
                                            {/* <div className="bar">
                                                <div className="bar-innner">
                                                    <div className="skill-percent">
                                                        <span className="count-text" data-speed="3000" data-stop="88">0</span>
                                                        <span className="percent">%</span>
                                                    </div>
                                                    <div className="bar-fill" data-percent="88"></div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </li>      
  
                                    {/* Skill Box */}
                                    <li className="progress-box ">
                                        <div className="inner count-box">
                                            <div className="text">Wider reach <span style={{textTransform:"lowercase"}}> of </span>  mental health training programs</div>
                                            {/* <div className="bar">
                                                <div className="bar-innner">
                                                    <div className="skill-percent">
                                                        <span className="count-text" data-speed="3000" data-stop="88">0</span>
                                                        <span className="percent">%</span>
                                                    </div>
                                                    <div className="bar-fill" data-percent="88"></div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </li>


                                    <li className="progress-box ">
                                        <div className="inner count-box">
                                            <div className="text">Growing a strong volunteer network</div>
                                            
                                        </div>
                                    </li>

                                    <li className="progress-box ">
                                        <div className="inner count-box">
                                            <div className="text">Expanding impact through digital platform</div>
                                            
                                        </div>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}