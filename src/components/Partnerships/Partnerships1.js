
import React, { Component } from "react";
import "./CorporatePartnerships.css";

class Partnerships1 extends Component {

  collaborations = [
    {
      number: "01",
      icon: "♿",
      title: "Inclusion & Accessibility Engagements",
      description:
        "Sensitisation sessions, participatory experiences, and engagement that encourage people to recognise barriers and understand inclusive environments.",
      tag: "Inclusive Workplaces",
    },
    {
      number: "02",
      icon: "✦",
      title: "Employee Engagement",
      description:
        "Purpose-driven activities that bring employees together through storytelling, creativity, community participation, and shared learning.",
      tag: "People & Culture",
    },
    {
      number: "03",
      icon: "🎓",
      title: "Education & Youth Development",
      description:
        "Collaborations supporting life skills, leadership, communication, confidence, and experiential learning for young people.",
      tag: "Youth Empowerment",
    },
    {
      number: "04",
      icon: "🎨",
      title: "Community Events & Experiences",
      description:
        "Co-creating inclusive events, festivals, creative activities, and community programmes that bring people together.",
      tag: "Community Building",
    },
    {
      number: "05",
      icon: "🤝",
      title: "CSR Partnerships",
      description:
        "Developing collaborations around education, accessibility, inclusion, wellbeing, and other areas aligned with TGTF's work.",
      tag: "Social Responsibility",
    },
    {
      number: "06",
      icon: "♡",
      title: "Fundraising & Purposeful Engagement",
      description:
        "Creating opportunities for organisations and communities to contribute to meaningful causes through shared experiences.",
      tag: "Purposeful Giving",
    },
  ];

  render() {
    return (
      <section className="corporate-section">

        <div className="corporate-container">

          {/* HERO SECTION */}

          <div className="corporate-hero">

            <div className="corporate-hero-content">

              <span className="corporate-eyebrow">
                PARTNERSHIPS & COLLABORATIONS
              </span>

              <h1>
                Let's Create
                <span> Impact Together</span>
              </h1>

              <p>
                We believe lasting social change grows through
                collaboration. Together, we can create experiences
                that inspire inclusion, participation, learning
                and meaningful social impact.
              </p>

              <a
                href="mailto:thegoodtalkfactory@gmail.com?subject=Corporate%20Partnership%20Enquiry"
                className="corporate-hero-btn"
              >
                Explore a Partnership
                <span>→</span>
              </a>

            </div>

            <div className="corporate-hero-decoration">

              <div className="corporate-circle circle-one"></div>
              <div className="corporate-circle circle-two"></div>
              <div className="corporate-circle circle-three"></div>

              <div className="corporate-hero-symbol">
                <span>✦</span>
                <p>TOGETHER</p>
                <h3>We Create<br />Change</h3>
              </div>

            </div>

          </div>


          {/* INTRODUCTION */}

          <div className="corporate-intro">

            <span className="corporate-small-label">
              COLLABORATION WITH PURPOSE
            </span>

            <h2>
              Different Strengths.
              <span> One Shared Purpose.</span>
            </h2>

            <p>
              TGTF works with corporates, educational institutions,
              NGOs, community organisations, government bodies,
              artists, and other stakeholders to create experiences
              that combine learning, participation, accessibility,
              and social responsibility.
            </p>

          </div>


          {/* COLLABORATION CARDS */}

          <div className="corporate-card-heading">

            <span className="corporate-small-label">
              HOW WE CAN WORK TOGETHER
            </span>

            <h2>Our Collaboration Areas</h2>

            <p>
              Meaningful partnerships can take many forms.
              Here are some of the ways we collaborate.
            </p>

          </div>


          <div className="corporate-grid">

            {this.collaborations.map((item) => (

              <div
                className="corporate-card"
                key={item.number}
              >

                <div className="corporate-card-top">

                  <span className="corporate-card-number">
                    {item.number}
                  </span>

                  <span className="corporate-card-icon">
                    {item.icon}
                  </span>

                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className="corporate-card-bottom">

                  <span>{item.tag}</span>

                  <span className="corporate-card-arrow">
                    ↗
                  </span>

                </div>

              </div>

            ))}

          </div>


          {/* PARTNER HIGHLIGHT */}

          <div className="corporate-partner-section">

            <div className="corporate-partner-content">

              <span className="corporate-small-label">
                COLLABORATING FOR CHANGE
              </span>

              <h2>
                Stronger Together.
                <span> Greater Impact.</span>
              </h2>

              <p>
                We also collaborate with corporate partners,
                including <strong>UnisLink</strong>, on engagement
                and community initiatives. We believe that when
                organisations come together with a shared purpose,
                meaningful opportunities for positive change grow.
              </p>

              <a
                href="mailto:thegoodtalkfactory@gmail.com?subject=Partnership%20with%20TGTF"
                className="corporate-text-link"
              >
                Discuss a collaboration <span>→</span>
              </a>

            </div>

            <div className="corporate-partner-visual">

              <div className="partner-visual-circle">
                <span>✦</span>
                <h3>COLLABORATE</h3>
                <p>CONNECT · CREATE · CONTRIBUTE</p>
              </div>

            </div>

          </div>


          {/* STAKEHOLDER STRIP */}

          <div className="corporate-stakeholders">

            <span className="corporate-small-label">
              OUR COLLABORATION NETWORK
            </span>

            <h2>
              Bringing Different Communities Together
            </h2>

            <div className="stakeholder-list">

              <span>Corporates</span>
              <span>Educational Institutions</span>
              <span>NGOs</span>
              <span>Community Organisations</span>
              <span>Government Bodies</span>
              <span>Artists & Creators</span>

            </div>

          </div>


          {/* FINAL CTA */}

          <div className="corporate-cta">

            <div className="corporate-cta-content">

              <span className="corporate-cta-icon">✦</span>

              <span className="corporate-small-label">
                HAVE AN IDEA?
              </span>

              <h2>
                Let's Start a Conversation.
              </h2>

              <p>
                Have an idea for a collaboration? Whether you
                represent an organisation, institution, or
                community, we would love to explore possibilities
                with you.
              </p>

              <a
                href="mailto:thegoodtalkfactory@gmail.com?subject=Collaboration%20Enquiry"
                className="corporate-cta-btn"
              >
                Connect With Us
                <span>→</span>
              </a>

              <div className="corporate-cta-footer">
                THE GOOD TALK FACTORY
              </div>

            </div>

          </div>

        </div>

      </section>
    );
  }
}

export default Partnerships1;
