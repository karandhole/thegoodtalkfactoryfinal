import React, { Component } from "react";

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = { showPopup: false };
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        if (response.ok) {
            this.setState({ showPopup: true });
            event.target.reset(); // Reset form fields after submission
        } else {
            alert("Something went wrong! Please try again.");
        }
    };

    closePopup = () => {
        this.setState({ showPopup: false });
    };

    render() {
        let publicUrl = process.env.PUBLIC_URL + "/";

        return (
            <>
                <section className="contact-page">
                    <div className="contact-page-bg" style={{ backgroundImage: `url(${publicUrl}assets/images/backgrounds/contact-page-bg.jpg)` }}></div>
                    <div className="container">
                        <div className="row" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <div className="col-xl-6 col-lg-6">
                                <div className="contact-page__left">
                                    <div className="section-title text-left">
                                        <span className="section-title__tagline">Contact Us</span>
                                    </div>
                                    <div className="contact-page__form">
                                        <form onSubmit={this.handleSubmit} className="comment-one__form contact-form-validated">
                                            {/* Web3Forms Access Key */}
                                            <input type="hidden" name="access_key" value="8120df47-33e3-4f6a-bce2-31ed0db12ca6" />

                                            <div className="row">
                                                <div className="col-xl-6">
                                                    <div className="comment-form__input-box">
                                                        <input type="text" placeholder="Your name" name="name" required />
                                                    </div>
                                                </div>
                                                <div className="col-xl-6">
                                                    <div className="comment-form__input-box">
                                                        <input type="email" placeholder="Email address" name="email" required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="comment-form__input-box text-message-box">
                                                        <textarea name="message" placeholder="Write a message" required></textarea>
                                                    </div>
                                                    <div className="comment-form__btn-box">
                                                        <button type="submit" className="thm-btn comment-form__btn">Send</button>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Optional: Add a Honeypot field to prevent spam */}
                                            <input type="hidden" name="subject" value="New Contact Form Submission" />
                                            <input type="text" name="botcheck" className="hidden" style={{ display: "none" }} />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Success Popup */}
                    {this.state.showPopup && (
                        <div className="popup">
                            <div className="popup-content">
                                <p>✅ Form submitted successfully!</p>
                                <button onClick={this.closePopup}>OK</button>
                            </div>
                        </div>
                    )}

                    {/* Popup Styles */}
                    <style jsx>{`
                        .popup {
                            position: fixed;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            background: rgba(0, 0, 0, 0.5);
                            display: flex;
                            align-items: center;
                            justify-content: center;
                        }
                        .popup-content {
                            background: white;
                            padding: 20px;
                            border-radius: 10px;
                            text-align: center;
                        }
                        .popup button {
                            background:rgb(185, 255, 104);
                            color: white;
                            border: none;
                            padding: 10px 20px;
                            cursor: pointer;
                            margin-top: 10px;
                        }
                    `}</style>
                </section>
            </>
        );
    }
}
