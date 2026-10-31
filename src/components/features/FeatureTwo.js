import React from "react";
import "./FeatureOne.css";
import { MdUpdate } from "react-icons/md";

export default class FeatureOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  updates = [
    {
      image: "assets/images/gallery/update1.jpg",
      category: "Recognition & Impact",
      title: "A Milestone Worth Celebrating!",
      description:
        "TGTF wins CSR Summit's Best Initiative Award in the Child Education category for Project TGTF Vidya. This recognition inspires us to continue creating opportunities and making education more accessible.",
      badge: "🏆 Achievement",
    },
     {
      image: "assets/images/gallery/update1.jpg",
      category: "Recognition & Impact",
      title: "A Milestone Worth Celebrating!",
      description:
        "TGTF wins CSR Summit's Best Initiative Award in the Child Education category for Project TGTF Vidya. This recognition inspires us to continue creating opportunities and making education more accessible.",
      badge: "🏆 Achievement",
    },

    // Add future updates here:
    // {
    //   image: "assets/images/gallery/update2.jpg",
    //   category: "Community & Events",
    //   title: "Your Update Title",
    //   description: "Your update description here.",
    //   badge: "✨ Latest Update",
    // },
  ];

  nextSlide = () => {
    this.setState((prev) => ({
      activeIndex: (prev.activeIndex + 1) % this.updates.length,
    }));
  };

  prevSlide = () => {
    this.setState((prev) => ({
      activeIndex:
        (prev.activeIndex - 1 + this.updates.length) % this.updates.length,
    }));
  };

  render() {
    const publicUrl = process.env.PUBLIC_URL + "/";
    const update = this.updates[this.state.activeIndex];

    return (
      <section className="updates-section">
        <div className="container">

          <div className="updates-heading">
           
            <h2>Latest <span>Updates</span></h2>
            <p>
              Every milestone tells a story. Explore the moments that inspire
              us to keep creating change.
            </p>
          </div>

          <div className="updates-slider">

            <div className="updates-card" key={this.state.activeIndex}>
              <div className="updates-image">
                <img
                  src={publicUrl + update.image}
                  alt={update.title}
                />
                <span className="updates-badge">{update.badge}</span>
              </div>

              <div className="updates-content">
                <span className="updates-category">
                  {update.category}
                </span>

                <h3>{update.title}</h3>

                <p>{update.description}</p>

                <div className="updates-bottom">
                  <span>Making a difference, together.</span>
                  <span className="updates-star"><MdUpdate /></span>
                </div>
              </div>
            </div>

            {this.updates.length > 1 && (
              <div className="updates-navigation">
                <button onClick={this.prevSlide} aria-label="Previous update">
                  &#8592;
                </button>

                <div className="updates-dots">
                  {this.updates.map((item, index) => (
                    <button
                      key={index}
                      className={this.state.activeIndex === index ? "active" : ""}
                      onClick={() => this.setState({ activeIndex: index })}
                      aria-label={`Go to update ${index + 1}`}
                    />
                  ))}
                </div>

                <button onClick={this.nextSlide} aria-label="Next update">
                  &#8594;
                </button>
              </div>
            )}

            <div className="updates-count">
              {String(this.state.activeIndex + 1).padStart(2, "0")}
              <span> / </span>
              {String(this.updates.length).padStart(2, "0")}
            </div>

          </div>
        </div>
      </section>
    );
  }
}