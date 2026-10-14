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
                                           <a href='https://pages.razorpay.com/thegoodtalkfactoryfoundation'  target='_blank'> <img src={publicUrl + "assets/images/services/about2.jpg"} style={{ height: "150px" }} alt="" /> </a>
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
                                        <p className="about-one__text">
                                            
                                            The Good Talk Factory (TGTF) is a non-governmental organization (NGO) on a mission to foster positive social change through the power of conversations. Established on December 15, 2018, and officially registered as a Trust under the Indian Trusts Act, 1882, on March 17, 2023, TGTF challenges stereotypes and democratizes storytelling, ensuring that every voice matters—regardless of fame, social status, or background.
                                            <p className="about-one__text2"> What we do?</p>
                                           </p>
                                           <p className="about-one__text">
                                            Through community engagement, education, skill development, and inclusivity advocacy, TGTF empowers individuals by shifting the narrative from mainstream celebrity culture to everyday human impact. We believe in creating safe spaces for open conversations, where unheard stories are valued, and individuals are celebrated as voices of change.                                        </p>
                                        {/* <ul className="list-unstyled about-one__points">
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