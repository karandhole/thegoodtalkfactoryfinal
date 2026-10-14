import React from 'react';

export default class TeamDetailsContent extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($("#datepicker").length) {
            $("#datepicker").datepicker();
        }

        if ($("#datepicker2").length) {
            $("#datepicker2").datepicker();
        }

        if ($("#datepicker-inline").length) {
            $("#datepicker-inline").datepicker();
        }

        $('input[name="time"]').ptTimeSelect();

    }
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                {/* Team Details Start */}

                {/* Join Team End */}
                <section className="join-team">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6">
                                <div className="join-team__Left">
                                    <div className="join-team__images">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="join-team__img-single">
                                                    <img src={publicUrl + "assets/images/resources/volunteer1.jpg"} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-6 col-md-6">
                                                <div className="join-team__img-single">
                                                    <img src={publicUrl + "assets/images/resources/volunteer2.jpg"} style={{ display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", paddingTop: "40px" }} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6">
                                <div className="join-team__right">
                                    {/* <form className="join-team__form">
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="join-team__input">
                                                    <input type="text" placeholder="Your Name" name="name" />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="join-team__input">
                                                    <input type="email" placeholder="Email Address" name="email" />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="join-team__input">
                                                    <input type="text" placeholder="Phone Number" name="phone" />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="join-team__input">
                                                    <input type="text" placeholder="Address" name="Address" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="join-team__input">
                                                    <input type="text" placeholder="Date of Birth" name="date" id="datepicker" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="join-team__input">
                                                    <input type="text" placeholder="Occupation" name="Occupation" />
                                                </div>
                                            </div>
                                            <div className="col-xl-12">
                                                <div className="join-team__input join-team__message-box">
                                                    <textarea name="message" placeholder="Write a Comment"></textarea>
                                                </div>
                                                <div className="join-team__btn-box">
                                                    <button type="submit" className="thm-btn join-team__btn">Sign Up Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form> */}

                                    <div className="join-team__content">

                                        <p className="join-team__text" style={{fontWeight:"600"}}>Be the Voice of Change with TGTF!</p>



                                        <p className="join-team__text">At The Good Talk Factory (TGTF), volunteering isn’t just about giving time-it’s about building conversations that matter  and creating real impact. Whether you’re leading a sensitization workshop, organizing an awareness walk, or driving social change through storytelling, your voice and actions shape meaningful experiences.

                                            Join us in sparking change, one conversation at a time. Be part of a dynamic community that believes in inclusion, dialogue, and transformation-because when we talk, listen, and act, we build a better world together.
                                        </p>
                                        <p className="join-team__text"> Ready to make a difference?</p>

                                        <p className="join-team__text">
                                            Sign up now and start your journey with TGTF!

                                        </p>
                                        
                                    </div>
                                    <div className="join-team__btn-box">
                                        <a href='https://docs.google.com/forms/d/1yX7HG27u9TI2nONvLit4iaPng98JC9jKW3Q2z4LeNA0/edit?usp=drivesdk ' target='_blank'><button type="submit" className="thm-btn join-team__btn">Register Here</button></a>
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Join Team End */}
            </>
        )
    }
}