import React, { Component } from "react";
import "./ProgrammesInitiatives.css";

class OurProgramme1 extends Component {

  programmes = [
    {
      number: "01",
      category: "Education & Leadership",
      title: "TGTF Vidya",
      subtitle: "Education, Life Skills & Leadership",
      description:
        "Project TGTF Vidya goes beyond textbooks and examinations by creating opportunities for young people to develop self-awareness, communication, confidence, emotional intelligence, leadership and essential life skills.",
      images: [
        "/images/vidya1.jpg",
        "/images/vidya2.jpg",
        "/images/vidya3.jpg",
      ],
      tag: "Youth Empowerment",
    },

    {
      number: "02",
      category: "Women Empowerment",
      title: "TGTF Vidya 3.0",
      subtitle: "The Emerging Women Leaders Program",
      description:
        "Launched on 9 July 2026 at Government Degree College for Women, Begumpet, Hyderabad, this programme empowers young women through self-awareness, confidence-building, communication and experiential leadership learning.",
      images: [
        "/images/vidya3-1.jpg",
        "/images/vidya3-2.jpg",
        "/images/vidya3-3.jpg",
      ],
      tag: "Women Leadership",
    },

    {
      number: "03",
      category: "Accessibility & Inclusion",
      title: "Inclusion & Accessibility",
      subtitle: "Creating Spaces for Everyone",
      description:
        "We work towards meaningful participation by addressing barriers and promoting accessibility across public experiences, educational spaces, community gatherings and collaborative initiatives.",
      images: [
        "/images/inclusion1.jpg",
        "/images/inclusion2.jpg",
        "/images/inclusion3.jpg",
      ],
      tag: "Inclusive Communities",
    },

    {
      number: "04",
      category: "Innovation & Inclusion",
      title: "Purple Solvathon",
      subtitle: "Innovate for Inclusion",
      description:
        "An engaging student initiative encouraging young minds to identify everyday accessibility challenges, question existing assumptions and develop innovative solutions for a more inclusive world.",
      images: [
        "/images/solvathon1.jpg",
        "/images/solvathon2.jpg",
        "/images/solvathon3.jpg",
      ],
      tag: "Student Innovation",
    },

    {
      number: "05",
      category: "Arts & Culture",
      title: "Storytelling, Arts & Community Engagement",
      subtitle: "Connecting Through Creativity",
      description:
        "Through storytelling, music, culture and creative experiences, TGTF creates opportunities for people to express themselves, celebrate talent, explore different perspectives and build meaningful connections.",
      images: [
        "/images/storytelling1.jpg",
        "/images/storytelling2.jpg",
        "/images/storytelling3.jpg",
      ],
      tag: "Creative Expression",
    },

    {
      number: "06",
      category: "Mental Wellbeing",
      title: "Mental Health & Wellbeing",
      subtitle: "Conversations That Matter",
      description:
        "Through conversations, virtual sessions, workshops and creative engagement, TGTF encourages emotional expression, empathy, mental health awareness and open dialogue without stigma or judgment.",
      images: [
        "/images/mentalhealth1.jpg",
        "/images/mentalhealth2.jpg",
        "/images/mentalhealth3.jpg",
      ],
      tag: "Wellbeing Awareness",
    },

    {
      number: "07",
      category: "Sustainability",
      title: "Sustainability & Community Responsibility",
      subtitle: "Building Thoughtful Communities",
      description:
        "Through initiatives such as Mrid Katha and eco-festival engagements, TGTF encourages sustainability through learning, creativity and participation, connecting environmental awareness with everyday choices.",
      images: [
        "/images/sustainability1.jpg",
        "/images/sustainability2.jpg",
        "/images/sustainability3.jpg",
      ],
      tag: "Sustainable Living",
    },
  ];

  state = {
    currentSlides: {},
    loadedImages: {},
    failedImages: {},
  };

  // Change Image

  changeSlide = (programmeIndex, direction) => {
    const programme = this.programmes[programmeIndex];

    const current =
      this.state.currentSlides[programmeIndex] || 0;

    const next =
      (current + direction + programme.images.length) %
      programme.images.length;

    this.setState((prevState) => ({
      currentSlides: {
        ...prevState.currentSlides,
        [programmeIndex]: next,
      },
    }));
  };

  // Go To Specific Image

  goToSlide = (programmeIndex, slideIndex) => {
    this.setState((prevState) => ({
      currentSlides: {
        ...prevState.currentSlides,
        [programmeIndex]: slideIndex,
      },
    }));
  };

  // Image Loaded Successfully

  handleImageLoad = (programmeIndex, slideIndex) => {
    const key = `${programmeIndex}-${slideIndex}`;

    this.setState((prevState) => ({
      loadedImages: {
        ...prevState.loadedImages,
        [key]: true,
      },
      failedImages: {
        ...prevState.failedImages,
        [key]: false,
      },
    }));
  };

  // Image Loading Failed

  handleImageError = (programmeIndex, slideIndex) => {
    const key = `${programmeIndex}-${slideIndex}`;

    this.setState((prevState) => ({
      loadedImages: {
        ...prevState.loadedImages,
        [key]: false,
      },
      failedImages: {
        ...prevState.failedImages,
        [key]: true,
      },
    }));
  };

  render() {
    return (
      <section className="programmes-section">

        <div className="programmes-container">

          {/* Section Header */}

          <header className="programmes-header">

            <span className="programmes-eyebrow">
              OUR WORK & INITIATIVES
            </span>

            <h1>Our Programmes & Initiatives</h1>

            <h2>Creating Opportunities. Inspiring Change.</h2>

          

            <div className="programmes-header-line"></div>

          </header>


          {/* Programmes Grid */}

          <div className="programmes-grid">

            {this.programmes.map((item, index) => {

              const currentSlide =
                this.state.currentSlides[index] || 0;

              const imageKey = `${index}-${currentSlide}`;

              const isLoaded =
                this.state.loadedImages[imageKey];

              const hasFailed =
                this.state.failedImages[imageKey];

              return (

                <article
                  className="programme-card"
                  key={item.number}
                >

                  {/* Image Slider */}

                  <div className="programme-slider">

                    {/* Loading Animation */}

                    {!isLoaded && !hasFailed && (

                      <div className="programme-image-loader">

                        <div className="programme-spinner"></div>

                        <span>Loading image...</span>

                      </div>

                    )}


                    {/* Image Error */}

                    {hasFailed && (

                      <div className="programme-image-error">

                        <span>🖼️</span>

                        <p>Image unavailable</p>

                      </div>

                    )}


                    {/* Actual Image */}

                    <img
                      key={imageKey}
                      src={item.images[currentSlide]}
                      alt={item.title}
                      className={`programme-image ${
                        isLoaded
                          ? "image-loaded"
                          : "image-loading"
                      }`}
                      onLoad={() =>
                        this.handleImageLoad(index, currentSlide)
                      }
                      onError={() =>
                        this.handleImageError(index, currentSlide)
                      }
                    />


                    {/* Programme Number */}
{/* 
                    <span className="programme-number">
                      {item.number}
                    </span> */}


                    {/* Previous Button */}

                    {item.images.length > 1 && (

                      <>

                        <button
                          className="programme-slider-btn prev"
                          onClick={() =>
                            this.changeSlide(index, -1)
                          }
                          aria-label="Previous image"
                        >
                          &#10094;
                        </button>


                        {/* Next Button */}

                        <button
                          className="programme-slider-btn next"
                          onClick={() =>
                            this.changeSlide(index, 1)
                          }
                          aria-label="Next image"
                        >
                          &#10095;
                        </button>


                        {/* Slider Dots */}

                        <div className="programme-slider-dots">

                          {item.images.map((image, slideIndex) => (

                            <button
                              key={slideIndex}
                              className={
                                currentSlide === slideIndex
                                  ? "programme-dot active"
                                  : "programme-dot"
                              }
                              onClick={() =>
                                this.goToSlide(index, slideIndex)
                              }
                              aria-label={`Go to image ${slideIndex + 1}`}
                            />

                          ))}

                        </div>

                      </>

                    )}


                    {/* Circular Image Counter - Bottom Right */}

                    <div className="programme-image-counter">

                      <span>{currentSlide + 1}</span>

                      <span className="counter-divider">/</span>

                      <span>{item.images.length}</span>

                    </div>

                  </div>


                  {/* Programme Content */}

                  <div className="programme-content">

                    <span className="programme-category">
                      {item.category}
                    </span>

                    <h3>{item.title}</h3>

                    <h4>{item.subtitle}</h4>

                    <p>{item.description}</p>

                    <div className="programme-card-bottom">

                      <span className="programme-tag">
                        {item.tag}
                      </span>

                    </div>

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

export default OurProgramme1;
