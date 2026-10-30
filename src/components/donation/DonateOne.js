import React, { Component } from "react";
import "./DonationsSponsorships.css";

const DONATE_URL =
  "https://pages.razorpay.com/thegoodtalkfactoryfoundation";

class DonateOne extends Component {
  render() {
    const impacts = [
      { icon: "📚", title: "Education for All", text: "Empowering young minds through Project TGTF Vidya." },
      { icon: "💛", title: "Inclusion Matters", text: "Building a world where everyone feels valued." },
      { icon: "🧩", title: "Autism Support", text: "Supporting autism therapy through fundraising initiatives." },
      { icon: "🎨", title: "Creative Expression", text: "Using stories, creativity and community to inspire change." },
    ];

    return (
      <main className="ngo-donation">
        <section className="ngo-hero">
          <div className="ngo-hero-content">
            <span className="ngo-pill">♡ GIVE HOPE. CREATE CHANGE.</span>
            <h1>
              Every Little Act
              <br />
              Creates a <span>Big Impact.</span>
            </h1>
            <p>
              Together, we can create a more inclusive world where every
              young person has the opportunity to learn, grow and thrive.
            </p>

            <div className="ngo-hero-buttons">
              <a href={DONATE_URL} target="_blank" rel="noopener noreferrer" className="ngo-btn">
                Donate Now <span>↗</span>
              </a>
              <a href="#ngo-impact" className="ngo-text-link">
                Discover Our Impact ↓
              </a>
            </div>

            <div className="ngo-note">
              <span></span> Your kindness can change someone's tomorrow.
            </div>
          </div>

          <div className="ngo-hero-art">
            <div className="ngo-circle ngo-circle-one"></div>
            <div className="ngo-circle ngo-circle-two"></div>
            <div className="ngo-art-card">
              <span className="ngo-heart">♥</span>
              <h2>Kindness<br />changes everything.</h2>
              <p>Be the reason someone smiles today.</p>
              <div className="ngo-art-line"></div>
              <span className="ngo-art-label">THE GOOD TALK FACTORY</span>
            </div>
            <span className="ngo-floating ngo-float-one">✳</span>
            <span className="ngo-floating ngo-float-two">♥</span>
          </div>
        </section>

        <section className="ngo-impact" id="ngo-impact">
          <div className="ngo-section-heading">
            <span className="ngo-eyebrow">YOUR SUPPORT IN ACTION</span>
            <h2>Good things happen<br />when we <span>come together.</span></h2>
            <p>Every contribution helps us take another step towards a kinder, more inclusive society.</p>
          </div>

          <div className="ngo-impact-grid">
            {impacts.map((item, index) => (
              <article className="ngo-impact-card" key={item.title}>
                <div className="ngo-impact-icon">{item.icon}</div>
                <span className="ngo-card-number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">
                  Support this cause <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="ngo-quote">
          <span className="ngo-quote-mark">“</span>
          <h2>A better world begins when we choose to care.</h2>
          <p>Be part of a story that makes a difference.</p>
          <a href={DONATE_URL} target="_blank" rel="noopener noreferrer" className="ngo-btn ngo-btn-light">
            Make a Donation ↗
          </a>
        </section>

        <section className="ngo-partnership">
          <div>
            <span className="ngo-eyebrow">LET'S MAKE AN IMPACT TOGETHER</span>
            <h2>More than a donation.<br />A meaningful partnership.</h2>
            <p>
              We welcome individual donors, corporate sponsors, institutions
              and organisations who share our vision of inclusion and
              community empowerment.
            </p>
            <a href="mailto:thegoodtalkfactory@gmail.com?subject=Partnership%20Enquiry" className="ngo-btn">
              Partner With Us ↗
            </a>
          </div>
          <div className="ngo-partner-note">
            <span>🤝</span>
            <h3>Better together.</h3>
            <p>Your support helps turn good intentions into meaningful action.</p>
          </div>
        </section>

        <footer className="ngo-footer">
         
          <h3>Thank you for choosing to make a difference.</h3>
          <p>
            TGTF has CSR-1 approval and 12A and 80G registrations, subject to
            applicable eligibility, terms and validity. For donation receipts,
            tax-benefit details or enquiries, contact{" "}
            <a href="mailto:thegoodtalkfactory@gmail.com">
              thegoodtalkfactory@gmail.com
            </a>.
          </p>
          <span className="ngo-footer-brand">THE GOOD TALK FACTORY FOUNDATION</span>
        </footer>
      </main>
    );
  }
}

export default DonateOne;