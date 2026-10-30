import React, { Component } from "react";
import "./Event1.css";

class Event1 extends Component {
  state = {
    activeSlides: [0, 0, 0],
    expandedEvents: [],
  };

  events = [
    {
      id: 1,
      title: "The Kaleido Carnival",
      subtitle: "Hyderabad's First-Ever Inclusion Fest",
      date: "13 December 2025",
      participants: "500+ Participants",
      images: [
        "assets/images/project/k1.jpg",
        "assets/images/project/k2.JPG",
        "assets/images/project/k3.JPG",
        "assets/images/project/k4.JPG",
        "assets/images/project/k5.JPG",
       
      ],
      paragraphs: [
        "The Kaleido Carnival was created around a simple idea: a community becomes richer when everybody has a place in it.",
        "Held on 13 December 2025 as part of TGTF's seventh-anniversary celebrations, The Kaleido Carnival brought together more than 500 people for a shared celebration of human stories, creativity, community, and belonging.",
        "The carnival was conceived as an inclusion festival for everyone—not an event exclusively for persons with disabilities and not simply a platform for disability awareness.",
        "It celebrated the many dimensions of human diversity and the connections we can build when we come together beyond our assumptions and differences.",
        "The experience brought together inclusive stalls, performances, creative activities, sensory and accessibility experiences, and the Kaleido Human Library, offering opportunities for people to engage, explore, and learn from one another.",
        "The Kaleido Carnival reflected TGTF's belief that inclusion is most powerful when it becomes a shared community experience.",
      ],
      closing:
        "It was not about identifying who belongs. It was about celebrating the fact that everybody does.",
    },

    {
      id: 2,
      title: "KALEIDO Khelathon",
      subtitle: "Hyderabad's First-Ever Inclusive Run",
      date: "26 April 2026",
      participants: "300+ Participants",
      images: [
        "assets/images/project/event1/ka1.JPG",
        "assets/images/project/event1/ka2.JPG",
        "assets/images/project/event1/ka3.JPG",
        "assets/images/project/event1/ka4.JPG",
        "assets/images/project/event1/ka5.JPG",
        "assets/images/project/event1/ka6.JPG",
        "assets/images/project/event1/ka7.JPG",
        "assets/images/project/event1/ka8.JPG",
        "assets/images/project/event1/ka9.jpg",
        
      ],
      paragraphs: [
        "Held on 26 April 2026 at Necklace Road, Hyderabad, KALEIDO Khelathon brought together more than 300 participants for the Sports4All 5K experience.",
        "The Khelathon extended TGTF's philosophy of inclusion into sport and physical activity. It was designed around the belief that participation, movement, and the joy of being part of a community should be open to everyone.",
        "The event brought people together across abilities and backgrounds, creating a shared public experience centred on participation, connection, and the joy of movement.",
        "For TGTF, inclusive sport is another way of turning belonging into something people can experience together.",
      ],
      closing: "",
    },

    {
      id: 3,
      title: "Akan Aahvaanam 2026",
      subtitle: "An Independence Day Celebration with a Purpose",
      date: "15 August 2026",
      participants: "500+ Attendees",
      images: [
        "assets/images/project/event2/a1.png",
        "assets/images/project/event2/a2.png",
        "assets/images/project/event2/a3.jpg",
        "assets/images/project/event2/a4.jpg",
       
      ],
      paragraphs: [
        "On 15 August 2026, TGTF collaborated with Akan Hyderabad to curate and execute Akan Aahvaanam 2026, Akan Hyderabad's Independence Day flagship event.",
        "The occasion marked TGTF's first public fundraising initiative, bringing community participation and purposeful giving into a shared Independence Day experience attended by more than 500 people.",
        "Built around a Pay As You Please community lunch, or Butta Bhojanam, alongside live music and interactive experiences, the event invited people to celebrate together while contributing to causes that matter.",
      ],
      focusAreas: [
        {
          title: "Accessibility & Inclusion",
          description:
            "Advancing opportunities for meaningful participation.",
        },
        {
          title: "Autism Therapy Support",
          description:
            "Supporting therapy for children from economically disadvantaged families.",
        },
        {
          title: "TGTF Vidya",
          description:
            "Supporting education for disadvantaged children.",
        },
      ],
      additionalParagraphs: [
        "The experience included the TGTF Experience Centre, sharing the organisation's seven-year journey; a sensory space developed with Rising Sun Child Development Centre; performances by autistic children; an art session led by Bhamini Shree with a focus on caregivers of children with disabilities; and interactive activities and donation counters.",
        "Akan Aahvaanam demonstrated how a community celebration can become an opportunity to connect, learn, participate, and contribute to social causes.",
        "The event was Akan Hyderabad's flagship celebration, curated and executed in collaboration with TGTF. It was also an important milestone in TGTF's public fundraising journey.",
      ],
      closing: "",
    },
  ];

  changeSlide = (eventIndex, direction) => {
    this.setState((prevState) => {
      const activeSlides = [...prevState.activeSlides];
      const total = this.events[eventIndex].images.length;

      activeSlides[eventIndex] =
        (activeSlides[eventIndex] + direction + total) % total;

      return { activeSlides };
    });
  };

  goToSlide = (eventIndex, slideIndex) => {
    this.setState((prevState) => {
      const activeSlides = [...prevState.activeSlides];
      activeSlides[eventIndex] = slideIndex;

      return { activeSlides };
    });
  };

  toggleReadMore = (eventId) => {
    this.setState((prevState) => ({
      expandedEvents: prevState.expandedEvents.includes(eventId)
        ? prevState.expandedEvents.filter((id) => id !== eventId)
        : [...prevState.expandedEvents, eventId],
    }));
  };

  renderEventDescription = (event, expanded) => {
    const initialParagraphCount = 2;

    const paragraphsToShow = expanded
      ? event.paragraphs
      : event.paragraphs.slice(0, initialParagraphCount);

    return (
      <>
        {paragraphsToShow.map((paragraph, index) => (
          <p key={`${event.id}-paragraph-${index}`}>{paragraph}</p>
        ))}

        {expanded && event.focusAreas && (
          <div className="recognition-focus-areas">
            <h4>Our Fundraising Focus Areas</h4>

            {event.focusAreas.map((area, index) => (
              <div className="recognition-focus-item" key={area.title}>
                <span className="recognition-focus-number">
                  0{index + 1}
                </span>

                <div>
                  <h5>{area.title}</h5>
                  <p>{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {expanded &&
          event.additionalParagraphs &&
          event.additionalParagraphs.map((paragraph, index) => (
            <p key={`${event.id}-additional-${index}`}>{paragraph}</p>
          ))}

        {expanded && event.closing && (
          <blockquote className="recognition-event-quote">
            {event.closing}
          </blockquote>
        )}
      </>
    );
  };

  render() {
    return (
      <section className="recognition-events-section">
        <div className="recognition-events-container">

          {/* Section Header */}
          <header className="recognition-events-header">
            <span className="recognition-events-eyebrow">
              PURPOSE IN ACTION
            </span>

            <h2>Every Story Matters. Every Human Belongs.</h2>

          
          </header>

          {/* Two Events Per Row */}
          <div className="recognition-events-grid">
            {this.events.map((event, eventIndex) => {
              const activeSlide = this.state.activeSlides[eventIndex];
              const expanded = this.state.expandedEvents.includes(event.id);

              return (
                <article
                  className={`recognition-event-card ${
                    expanded ? "recognition-event-expanded" : ""
                  }`}
                  key={event.id}
                >
                  {/* Independent Image Slider */}
                  <div className="recognition-event-slider">
                    <img
                      className="recognition-event-image"
                      src={event.images[activeSlide]}
                      alt={`${event.title} — photograph ${activeSlide + 1}`}
                    />

                    <span className="recognition-event-image-count">
                      {activeSlide + 1} / {event.images.length}
                    </span>

                    {event.images.length > 1 && (
                      <>
                        <button
                          type="button"
                          className="recognition-slider-btn recognition-slider-prev"
                          onClick={() =>
                            this.changeSlide(eventIndex, -1)
                          }
                          aria-label={`Previous image for ${event.title}`}
                        >
                          &#10094;
                        </button>

                        <button
                          type="button"
                          className="recognition-slider-btn recognition-slider-next"
                          onClick={() =>
                            this.changeSlide(eventIndex, 1)
                          }
                          aria-label={`Next image for ${event.title}`}
                        >
                          &#10095;
                        </button>
                      </>
                    )}
                  </div>

                  {/* Image Indicators */}
                  {event.images.length > 1 && (
                    <div className="recognition-slider-dots">
                      {event.images.map((image, slideIndex) => (
                        <button
                          type="button"
                          key={image}
                          className={`recognition-slider-dot ${
                            activeSlide === slideIndex ? "active" : ""
                          }`}
                          onClick={() =>
                            this.goToSlide(eventIndex, slideIndex)
                          }
                          aria-label={`Show image ${slideIndex + 1} of ${event.title}`}
                          aria-current={
                            activeSlide === slideIndex ? "true" : undefined
                          }
                        />
                      ))}
                    </div>
                  )}

                  {/* Event Information */}
                  <div className="recognition-event-content">
                    <span className="recognition-event-number">
                      EVENT 0{event.id}
                    </span>

                    <h3>{event.title}</h3>

                    <h4 className="recognition-event-subtitle">
                      {event.subtitle}
                    </h4>

                    <div className="recognition-event-meta">
                      <span>📅 {event.date}</span>
                      <span>👥 {event.participants}</span>
                    </div>

                    <div className="recognition-event-description">
                      {this.renderEventDescription(event, expanded)}
                    </div>

                    <button
                      type="button"
                      className="recognition-read-more"
                      onClick={() => this.toggleReadMore(event.id)}
                      aria-expanded={expanded}
                    >
                      {expanded ? "Read Less ↑" : "Read Full Story →"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

         

        </div>
      </section>
    );
  }
}

export default Event1;
