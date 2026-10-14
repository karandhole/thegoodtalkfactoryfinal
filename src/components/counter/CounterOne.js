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
                           
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="200ms">
                                {/* Counter One Single */}
                                <div className="counter-one__single">
                                    <div className="counter-one__content">
                                        <h3 className="odometer" data-count="5">00</h3>
                                        <span className="counter-one__letter">+</span>
                                        <p className="counter-one__text">Cities Impacted </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="300ms">
                                {/* Counter One Single */}
                                <div className="counter-one__single">
                                    <div className="counter-one__content">
                                        <h3 className="odometer" data-count="30">00</h3>
                                        <span className="counter-one__letter">+</span>
                                        <p className="counter-one__text">Events & Workshops Hosted</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="400ms">
                                {/* Counter One Single */}
                                <div className="counter-one__single">
                                    <div className="counter-one__content">
                                        <h3 className="odometer" data-count="1,00,000">00</h3>
                                        <span className="counter-one__letter">+</span>
                                        <p className="counter-one__text">Funds Allocated - Child Education </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft" data-wow-delay="100ms">
                                {/* Counter One Single */}
                                <div className="counter-one__single">
                                    <div className="counter-one__content">
                                        <h3 className="odometer" data-count="10,000">00</h3>
                                        <span className="counter-one__letter">+</span>
                                        <p className="counter-one__text">Meaningful Dialogues Engaged </p>
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