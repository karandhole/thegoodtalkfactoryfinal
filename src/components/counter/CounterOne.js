import React from 'react';

export default class CounterOne extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($(".odometer").length) {
            var odo = $(".odometer");
            odo.each(function () {
              $(this).appear(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
              });
            });
        }
    }
    render(){
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
            <>
                <section className="counter-one">
                    <div className="counter-one-bg jarallax" data-jarallax data-speed="0.2" data-imgPosition="50% 0%" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/counter-one-bg.jpg)'}}></div>
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">OUR IMPACT </span>
                            <h2 className="section-title__title">#BreakingStereotypes</h2>
                        </div>
                        <div className="row">
                           
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                                {/* Counter One Single */}
                                <div className="counter-one__single">
                                    <div className="counter-one__content">
                                        <h3 className="odometer" data-count="10,000">00</h3>
                                        <span className="counter-one__letter">+</span>
                                        <p className="counter-one__text">People Reached Through Storytelling and Inclusive Dialogues </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                                {/* Counter One Single */}
                                <div className="counter-one__single">
                                    <div className="counter-one__content">
                                        <h3 className="odometer" data-count="1,200">00</h3>
                                        <span className="counter-one__letter">+</span>
                                        <p className="counter-one__text">Volunteers Trained in Accessibility and Inclusion</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                                {/* Counter One Single */}
                                <div className="counter-one__single">
                                    <div className="counter-one__content">
                                        <h3 className="odometer" data-count="500">00</h3>
                                        <span className="counter-one__letter">+</span>
                                        <p className="counter-one__text">Students Impacted Through Education Initiatives </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                                {/* Counter One Single */}
                                <div className="counter-one__single">
                                    <div className="counter-one__content">
                                        <h3 className="odometer" data-count="200">00</h3>
                                        <span className="counter-one__letter">+</span>
                                        <p className="counter-one__text">Children and Youth Engaged Through Storytelling and Life Skills</p>
                                    </div>
                                </div>
                            </div>
                             <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                                {/* Counter One Single */}
                                <div className="counter-one__single">
                                    <div className="counter-one__content">
                                        <h3 className="odometer" data-count="50">00</h3>
                                        <span className="counter-one__letter">+</span>
                                        <p className="counter-one__text">Workshops Conducted on Empathy, Leadership, and Inclusion</p>
                                    </div>
                                </div>
                            </div>
                             <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                                {/* Counter One Single */}
                                <div className="counter-one__single">
                                    <div className="counter-one__content">
                                        <h3 className="odometer" data-count="15">00</h3>
                                        <span className="counter-one__letter">+</span>
                                        <p className="counter-one__text">Corporate, Institutional, and CSR Collaborations</p>
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