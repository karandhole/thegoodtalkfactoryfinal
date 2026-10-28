import React from 'react';

export default class AboutT extends React.Component {
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
                <section className="about-one about-three " style={{backgroundColor:'aliceblue'}}>
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-6">
                                <div className="about-one__right">
                                    <div className="about-one__right-content">
                                        <div className="section-title text-left">
                                            {/* <span className="section-title__tagline">About U</span> */}

                                        </div>
                                        <p className="about-one__text1">Our Philosophy</p>
                                        <p className="about-one__text">Inclusion isn't about making room for some. It's about creating a world where everyone belongs.</p>
                                        <p className="about-one__text">At TGTF, inclusion is not limited to disability awareness or any single cause. It is about recognising the richness of human diversity and creating experiences where people can participate, connect, and feel welcome.
                                            <p>We celebrate people across gender, age, disability, culture, identity, backgrounds, lived experiences, and life circumstances. We believe differences should be met with curiosity and respect, not used as reasons for exclusion.</p>
                                            <p>Our events and programmes are created with accessibility, participation, and belonging in mind. We do not simply invite people into existing spaces; we strive to create spaces where everyone has a meaningful place.</p>


                                        </p>
                                        {/* <p className="about-one__text">
                                            We help children and young people discover their strengths, develop essential life skills, build confidence, and become active participants in their communities.</p>
                                        <ul className="list-unstyled about-one__points">
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
                            <div className="col-xl-6">
                                <div className="about-one__left1 wow slideInLeft" data-wow-delay="100ms" data-wow-duration="2500ms">
                                    <div className="about-one__img-box1">
                                        <div className="about-one__img">
                                            <img src={publicUrl + "assets/images/resources/about1.jpeg"} alt="" />
                                        </div>
                                        {/* <div className="about-one__small-img wow zoomIn animated animated" data-wow-delay="500ms"
                                            data-wow-duration="2500ms">
                                            <a href='https://pages.razorpay.com/thegoodtalkfactoryfoundation' target='_blank'> <img src={publicUrl + "assets/images/services/about2.jpg"} style={{ height: "150px" }} alt="" /> </a>
                                        </div> */}
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