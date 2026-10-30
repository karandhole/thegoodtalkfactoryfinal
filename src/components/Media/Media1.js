
import React, { Component } from "react";
import "./MediaPressCoverage.css";

class Media1 extends Component {
  constructor(props) {
    super(props);

    this.pressArticles = [
      {
        publication: "Hyderabad Mail",
        category: "Event Announcement",
        title: "TGTF's Independence Day Celebration with a Cause",
        description:
          "Coverage highlighting TGTF's initiative to bring people together through an Independence Day celebration with a meaningful purpose.",
        url: "https://hyderabadmail.com/hyderabad-ngo-tgtf-independence-day-celebration-cause/",
        number: "01",
        icon: "📰"
      },
      {
        publication: "CSR News",
        category: "Fundraising Initiative",
        title: "Turning an Independence Day Celebration into a Fundraising Drive",
        description:
          "A feature on TGTF's approach to combining community celebrations with purposeful fundraising.",
        url: "https://csrnews.in/hyderabad-ngo-tgtf-to-turn-independence-day-celebration-into-fundraising-drive/",
        number: "02",
        icon: "🤝"
      },
      {
        publication: "Telangana Today",
        category: "Event Announcement",
        title: "Akan Hyderabad's Pay-As-You-Please Charity Event",
        description:
          "Coverage of the inclusive community event planned for Independence Day in Hyderabad.",
        url: "https://telanganatoday.com/akan-hyderabad-to-host-pay-as-you-please-event-for-charity-on-august-15",
        number: "03",
        icon: "📢"
      },
      {
        publication: "Deccan Chronicle",
        category: "Event Feature",
        title: "Akan Aahvaanam: Making Independence Day an Experience of Inclusion",
        description:
          "A feature exploring how Akan Aahvaanam brings inclusion and meaningful participation into a community celebration.",
        url: "https://www.deccanchronicle.com/lifestyle/akan-aahvaanam-turns-independence-day-into-an-experience-of-inclusion-1979173",
        number: "04",
        icon: "✨"
      },
      {
        publication: "Sakshi Post",
        category: "Community Impact",
        title: "Supporting Autism Programmes and Neurodivergent Youth",
        description:
          "Coverage highlighting the event's connection to autism programmes and opportunities for neurodivergent youth.",
        url: "https://www.sakshipost.com/news/telangana/independence-day-event-akan-supporting-autism-programmes-and-neurodivergent-youth",
        number: "05",
        icon: "💛"
      },
      {
        publication: "Deccan Chronicle",
        category: "Post-Event Coverage",
        title: "Akan Aahvaanam 2026: Advancing Inclusion Through Purposeful Hospitality",
        description:
          "Post-event coverage of Akan Hyderabad's Independence Day celebration and its focus on inclusion and purposeful hospitality.",
        url: "https://www.deccanchronicle.com/business/in-other-news/akan-hyderabad-marks-independence-day-with-akan-aahvaanam-2026-advancing-inclusion-through-purposeful-hospitality-1979429",
        number: "06",
        icon: "🌟"
      }
    ];
  }

  render() {
    return (
      <section className="media-section">
        <div className="media-container">

          


          {/* INTRODUCTION */}

          <div className="media-intro">
            <span className="media-section-label">
              OUR WORK, OUR STORIES, OUR COMMUNITY
            </span>

            <h2>
              Every story has the power
              <span> to create change.</span>
            </h2>

            <p>
              TGTF's initiatives have brought together people and
              communities around education, accessibility,
              inclusion, creative expression, and purposeful
              community participation.
            </p>

            <p>
              We are grateful to the media platforms that help
              share these stories and bring greater visibility
              to the causes and communities we work alongside.
            </p>
          </div>


          {/* FEATURED EVENT */}

          <div className="media-featured">
            <div className="media-featured-content">
              <span className="media-featured-label">
                FEATURED INITIATIVE
              </span>

              <h2>
                Akan Aahvaanam
                <span> 2026</span>
              </h2>

              <p>
                A celebration of Independence Day through inclusion,
                community participation, purposeful hospitality
                and meaningful impact.
              </p>

              <div className="media-featured-tags">
                <span>Inclusion</span>
                <span>Community</span>
                <span>Purpose</span>
              </div>
            </div>

            <div className="media-featured-art">
              <div className="media-featured-ring">
                <div className="media-featured-inner">
                  <span>✦</span>
                  <h3>AKAN</h3>
                  <p>AAHVAANAM</p>
                  <strong>2026</strong>
                </div>
              </div>
            </div>
          </div>


          {/* PRESS COVERAGE */}

          <div className="media-articles-section" id="press-articles">

            <div className="media-articles-heading">
              <div>
                <span className="media-section-label">
                  SELECTED MEDIA COVERAGE
                </span>

                <h2>
                  Featured in the <span>Press</span>
                </h2>
              </div>

              <p>
                Explore the stories, announcements and coverage
                shared by media platforms.
              </p>
            </div>


            <div className="media-articles-grid">

              {this.pressArticles.map((article) => (
                <article
                  className="media-article-card"
                  key={article.number}
                >
                  <div className="media-article-top">
                    <span className="media-article-number">
                      {article.number}
                    </span>

                    <span className="media-article-icon">
                      {article.icon}
                    </span>
                  </div>

                  <span className="media-article-category">
                    {article.category}
                  </span>

                  <h3>{article.title}</h3>

                  <p>{article.description}</p>

                  <div className="media-article-footer">
                    <div className="media-publication">
                      <span className="media-publication-dot"></span>
                      <strong>{article.publication}</strong>
                    </div>

                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="media-read-link"
                      aria-label={`Read ${article.publication} article`}
                    >
                      Read Article
                      <span>↗</span>
                    </a>
                  </div>
                </article>
              ))}

            </div>
          </div>


          {/* CLOSING SECTION */}

          <div className="media-closing">
            <div className="media-closing-content">
          

              <span className="media-section-label">
                STORIES THAT MATTER
              </span>

              <h2>
                Help us take meaningful
                <span> stories further.</span>
              </h2>

              <p>
                Every story shared creates an opportunity to
                build awareness, encourage participation and
                inspire positive change.
              </p>

              <a
                href="mailto:thegoodtalkfactory@gmail.com?subject=Media%20and%20Press%20Enquiry"
                className="media-contact-btn"
              >
                Connect With Us
                <span>↗</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    );
  }
}

export default Media1;
