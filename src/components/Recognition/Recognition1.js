import React, { Component } from "react";
import "./RecognitionCredentials.css";

class Recognition1 extends Component {
  credentials = [
    {
      number: "01",
      category: "Legal Registration",
      title: "Trust Registration",
      year: "2023",
      description:
        "The Good Talk Factory was registered as a trust on 17 March 2023, marking an important step in strengthening our organisational foundation.",
      icon: "📜",
      tag: "Registered",
    },
    {
      number: "02",
      category: "CSR Compliance",
      title: "CSR-1 Registration",
      year: "2026",
      description:
        "TGTF received CSR-1 approval in 2026, supporting its eligibility to participate in applicable CSR-funded initiatives.",
      icon: "✓",
      tag: "Approved",
    },
    {
      number: "03",
      category: "Tax Registrations",
      title: "12A and 80G",
      year: "Registrations held",
      description:
        "TGTF holds 12A and 80G registrations, subject to the applicable terms, conditions, and validity of each registration.",
      icon: "⚖",
      tag: "Tax Registrations",
    },
    {
      number: "04",
      category: "Recognition",
      title: "CSR Summit Recognition",
      year: "Project TGTF Vidya",
      description:
        "Recognised in the Child Education category for Project TGTF Vidya, reflecting our efforts to support learning and educational development.",
      icon: "🏆",
      tag: "Recognition",
    },
    {
      number: "05",
      category: "Inclusion & Community",
      title: "Purple Fest Goa & Purple Jallosh Pune",
      year: "Community Engagement",
      description:
        "Engagement with inclusion-focused platforms and related community and student initiatives, supporting greater awareness and participation.",
      icon: "♿",
      tag: "Inclusion",
    },
    {
      number: "06",
      category: "Inclusive Experiences",
      title: "The Kaleido Carnival",
      year: "December 2025",
      description:
        "Held as part of TGTF's seventh-anniversary celebrations, The Kaleido Carnival was presented as Hyderabad's first-ever Inclusion Fest.",
      icon: "🎨",
      tag: "Inclusion Fest",
    },
    {
      number: "07",
      category: "Inclusive Sports",
      title: "KALEIDO Khelathon",
      year: "2026",
      description:
        "An inclusive sporting initiative designed to encourage participation, community connection, and shared experiences through movement and play.",
      icon: "🏃",
      tag: "Inclusive Sports",
    },
    {
      number: "08",
      category: "Fundraising & Partnership",
      title: "Akan Aahvaanam 2026",
      year: "2026",
      description:
        "TGTF's first public fundraising initiative, delivered in collaboration with Akan Hyderabad to support its community-focused work.",
      icon: "🤝",
      tag: "Collaboration",
    },
  ];

  render() {
    return (
      <section className="recognition-section">
        <div className="recognition-container">
          {/* Page Header */}
          <header className="recognition-header">
            <span className="recognition-eyebrow">
              OUR IMPACT & CREDENTIALS
            </span>

            <h1>Recognition &amp; Credentials</h1>

            <h2>A Journey Built on Purpose and Partnership</h2>

            <p>
              TGTF's journey has been shaped by community participation,
              collaboration, and continued efforts to make learning,
              storytelling, accessibility, and inclusion part of everyday
              experiences.
            </p>

            <div className="recognition-header-line"></div>
          </header>

          {/* Credentials Grid */}
          <div className="recognition-grid">
            {this.credentials.map((item) => (
              <article
                className="recognition-card"
                key={item.number}
              >
                <div className="recognition-card-top">
                  <span className="recognition-number">
                    {item.number}
                  </span>

                  <span
                    className="recognition-icon"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                </div>

                <span className="recognition-category">
                  {item.category}
                </span>

                <h3>{item.title}</h3>

                <span className="recognition-year">
                  {item.year}
                </span>

                <p>{item.description}</p>

                <div className="recognition-card-bottom">
                  <span className="recognition-tag">
                    {item.tag}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Closing Section */}
          <div className="recognition-footer">
            <span className="recognition-footer-icon" aria-hidden="true">
              ✦
            </span>

            <h2>Every Milestone Has a Community Behind It</h2>

            <p>
              These milestones reflect the communities, partners, volunteers,
              and participants who have helped shape TGTF's work. Together,
              we continue working towards a world where learning, accessibility,
              storytelling, and inclusion are part of everyday life.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Recognition1;