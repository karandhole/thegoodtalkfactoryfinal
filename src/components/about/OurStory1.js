import React from 'react';

export default class OurStory1 extends React.Component {
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
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <section className="about-one about-three" style={{paddingBottom:"20px"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="about-one__left wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                    <div className="about-one__img-box">
                                        <div className="about-one__img">
                                            <img src={publicUrl + "assets/images/resources/about1.jpeg"} alt="" />
                                        </div>
                                        <div className="about-one__small-img wow zoomIn animated animated" data-wow-delay="500ms"
                                            data-wow-duration="2500ms">
                                            <a href='https://pages.razorpay.com/thegoodtalkfactoryfoundation' target='_blank'> <img src={publicUrl + "assets/images/services/about2.jpg"} style={{ height: "150px" }} alt="" /> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="about-one__right">
                                    <div className="about-one__right-content">
                                        <div className="section-title text-left">
                                            <span className="section-title__tagline">Our Story</span>

                                        </div>
                                        {/* <p className="about-one__text1">Who are we?</p> */}
                                        <p className="about-one__text">The Good Talk Factory began with a simple belief: ordinary people have extraordinary stories, and every story deserves to be heard.
                                            <p>On 15 December 2018, TGTF began its journey through Musings, creating opportunities for people to share their thoughts, experiences, and reflections. The intention was to celebrate the stories of everyday people—not only those who were already in the spotlight.</p>
                                            <p>Over time, these conversations grew into workshops, educational initiatives, storytelling platforms, inclusion events, and community experiences.</p>
                                            <p>From schools and colleges to corporate spaces and public gatherings, TGTF has continued to explore one question:</p>
                                            <p className="about-one__text1"> What becomes possible when people genuinely listen to one another?</p>
                                        </p>
                                        <p className="about-one__text">
                                            We have seen conversations open minds, stories challenge assumptions, creative expression build confidence, and shared experiences help people discover common ground.</p>                                        {/* <ul className="list-unstyled about-one__points">
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-comment"></span>
                                                </div>
                                                <div className="text">
                                                    <h4>Empowering Voices</h4>
                                                    <p>GTF amplifies unheard stories, ensuring that every individual, regardless of status, has a platform to inspire change</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <span className="icon-comment"></span>
                                                </div>
                                                <div className="text">
                                                    <h4>Inclusive Storytelling</h4>
                                                    <p>Through education and community engagement, TGTF fosters safe spaces for meaningful conversations that challenge stereotypes and promote social impact.</p>
                                                </div>
                                            </li>
                                        </ul> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="about-one about-three p-0">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-12">
                                <div className="about-one__right">
                                    <div className="about-one__right-content">
                                       
                                        {/* <p className="about-one__text1">Who are we?</p> */}
                                        <p className="about-one__text">Today, TGTF works across education, accessibility, inclusion, mental wellbeing, storytelling, arts, culture, and sustainability. Through programmes, events, and collaborations, we turn conversations into opportunities for learning, participation, and meaningful social change.                                            <p>On 15 December 2018, TGTF began its journey through Musings, creating opportunities for people to share their thoughts, experiences, and reflections. The intention was to celebrate the stories of everyday people—not only those who were already in the spotlight.</p>
                                           </p> 
                                            <p className="about-one__text"> The Good Talk Factory was registered as a trust on 17 March 2023, strengthening its foundation for sustained community work.</p>
                                        
                                        <p className="about-one__text">
                                           Our journey continues to be shaped by the people who share their stories, the communities that welcome us, and the partners who believe in the power of collective action.</p>

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