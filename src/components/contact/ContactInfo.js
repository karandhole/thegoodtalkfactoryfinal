
import React, { Component } from "react";
import "./ContactUs.css";

class ContactInfo extends Component {

  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = this.state;

    const mailtoLink =
      `mailto:thegoodtalkfactory@gmail.com` +
      `?subject=${encodeURIComponent(subject || "Contact from Website")}` +
      `&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

    window.location.href = mailtoLink;
  };

  render() {

    const { name, email, subject, message } = this.state;

    return (

      <section className="contact-section">

        <div className="contact-container">

          {/* HERO SECTION */}

          <div className="contact-header">

            <span className="contact-eyebrow">
              GET IN TOUCH
            </span>

            <h1>Let's Start a Conversation</h1>

            <p>
              Have a story to share? Want to collaborate?
              Interested in volunteering, supporting a programme,
              or creating a more inclusive experience?
            </p>

            <h3>We would love to hear from you.</h3>

            <div className="contact-header-line"></div>

          </div>


          {/* CONTACT CONTENT */}

          <div className="contact-main-grid">

            {/* LEFT SIDE */}

            <div className="contact-info">

              <div className="contact-info-heading">

              

                <h2>We are HERE to HEAR You.</h2>

                <p>
                  At The Good Talk Factory, every meaningful
                  connection begins with a conversation.
                </p>

              </div>


              {/* Email */}

              <a
                href="mailto:thegoodtalkfactory@gmail.com"
                className="contact-info-card"
              >

                <div className="contact-info-icon">
                  &#9993;
                </div>

                <div>
                  <h4>Email Us</h4>
                  <p>thegoodtalkfactory@gmail.com</p>
                </div>

              </a>


              {/* Website */}

              <a
                href="https://www.thegoodtalkfactory.org/"
                target="_blank"
                rel="noreferrer"
                className="contact-info-card"
              >

                <div className="contact-info-icon">
                  &#127760;
                </div>

                <div>
                  <h4>Visit Our Website</h4>
                  <p>www.thegoodtalkfactory.org</p>
                </div>

              </a>


              {/* Instagram */}

              <a
                href="https://www.instagram.com/thegoodtalkfactory/"
                target="_blank"
                rel="noreferrer"
                className="contact-info-card"
              >

                <div className="contact-info-icon">
                  &#128247;
                </div>

                <div>
                  <h4>Follow Us</h4>
                  <p>@thegoodtalkfactory</p>
                </div>

              </a>


              {/* Quote */}

              <div className="contact-quote">

                <span>“</span>

                <h3>
                  Every conversation has the power to create
                  meaningful change.
                </h3>

                <div className="contact-quote-line"></div>

                <p>THE GOOD TALK FACTORY</p>

              </div>

            </div>


            {/* RIGHT SIDE - CONTACT FORM */}

            <div className="contact-form-wrapper">

              <div className="contact-form-heading">

                <span>LET'S CONNECT</span>

                <h2>Send Us a Message</h2>

                <p>
                  Tell us a little about yourself and how
                  we can connect.
                </p>

              </div>


              <form
                className="contact-form"
                onSubmit={this.handleSubmit}
              >

                <div className="contact-form-row">

                  <div className="contact-form-group">

                    <label>Your Name *</label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={name}
                      onChange={this.handleChange}
                      required
                    />

                  </div>


                  <div className="contact-form-group">

                    <label>Email Address *</label>

                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={this.handleChange}
                      required
                    />

                  </div>

                </div>


                <div className="contact-form-group">

                  <label>Subject</label>

                  <input
                    type="text"
                    name="subject"
                    placeholder="What would you like to discuss?"
                    value={subject}
                    onChange={this.handleChange}
                  />

                </div>


                <div className="contact-form-group">

                  <label>Your Message *</label>

                  <textarea
                    name="message"
                    rows="6"
                    placeholder="Write your message here..."
                    value={message}
                    onChange={this.handleChange}
                    required
                  />

                </div>


                <button
                  type="submit"
                  className="contact-submit-btn"
                >
                  Send Message
                  <span>&#8594;</span>
                </button>

                <p className="contact-form-note">
                  Your message will open in your default email
                  application for you to send.
                </p>

              </form>

            </div>

          </div>


          {/* WORK WITH US SECTION */}

          <div className="work-with-us-section">

            <div className="work-with-us-header">

              <span className="contact-eyebrow">
                BE PART OF THE CHANGE
              </span>

              <h2>Work With Us</h2>

              <p>
                There are many ways to become part of our
                journey. Let's create meaningful impact together.
              </p>

            </div>


            <div className="work-with-us-grid">

              <div className="work-card">
                <span className="work-card-icon">
                  &#128101;
                </span>
                <h3>Volunteer</h3>
                <p>
                  Volunteer with our programmes and events.
                </p>
              </div>


              <div className="work-card">
                <span className="work-card-icon">
                  &#129309;
                </span>
                <h3>Partner With Us</h3>
                <p>
                  Partner with us on education, inclusion,
                  accessibility, or community initiatives.
                </p>
              </div>


              <div className="work-card">
                <span className="work-card-icon">
                  &#127970;
                </span>
                <h3>CSR & Sponsorship</h3>
                <p>
                  Explore CSR and sponsorship opportunities.
                </p>
              </div>


              <div className="work-card">
                <span className="work-card-icon">
                  &#127912;
                </span>
                <h3>Creative Collaborations</h3>
                <p>
                  Collaborate with us on storytelling, arts,
                  culture, and youth engagement.
                </p>
              </div>


              <div className="work-card">
                <span className="work-card-icon">
                  &#10084;
                </span>
                <h3>Support Our Work</h3>
                <p>
                  Support our work through donations and
                  purposeful partnerships.
                </p>
              </div>

            </div>

          </div>


          {/* BOTTOM CTA */}

          <div className="contact-bottom">

           

            <h2>
              Let's Build Something Meaningful Together.
            </h2>

            <p>
              Let's build stories that stay, experiences that
              connect, and communities where everyone belongs.
            </p>

            <a
              href="mailto:thegoodtalkfactory@gmail.com"
              className="contact-bottom-btn"
            >
              Start a Conversation
              <span>&#8594;</span>
            </a>

          </div>

        </div>

      </section>

    );
  }
}

export default ContactInfo;
