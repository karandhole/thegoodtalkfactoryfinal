import React from 'react';

export default class AboutOne extends React.Component {
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
                <section className="about-one about-three">
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
                                            <span className="section-title__tagline">About Us</span>

                                        </div>
                                        <p className="about-one__text1">Who are we?</p>
                                        <p className="about-one__text">We believe every human being has a story worth hearing, a voice worth valuing, and a place where they deserve to belong.
                                            <p>Since 2018, The Good Talk Factory (TGTF) has been bringing people together through conversations, storytelling, education, creative expression, and community experiences that nurture empathy and inspire positive social change.</p>
                                            <p>We create spaces where people can show up as themselves, share their experiences, discover different perspectives, and connect beyond the boundaries that often divide us.</p>
                                            <p>Our work spans education, life skills, accessibility, inclusion, mental wellbeing, arts, culture, and community engagement. Across every initiative, one belief remains constant: everyone deserves to participate, everyone deserves to be heard, and everyone belongs.</p>
                                            <p className="about-one__text1"> What we do?</p>
                                        </p>
                                        <p className="about-one__text">
                                            We help children and young people discover their strengths, develop essential life skills, build confidence, and become active participants in their communities.</p>                                        {/* <ul className="list-unstyled about-one__points">
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
            </>
        )
    }
}