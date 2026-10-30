import React from "react";
import { Link } from "react-router-dom";
import "./FeatureTwo.css";

export default class FeatureTwo extends React.Component {
    render() {
        const featureGroups = [
            {
                id: 1,
                icon: "icon-donation-1",
                title: "Inclusion & Accessibility",
                description:
                    "We create opportunities for people with diverse abilities, identities, backgrounds, and experiences to participate, connect, and belong.",
                areas: [
                    {
                        title: "Storytelling, Arts & Culture",
                        description:
                            "We use stories, music, art, and creative experiences to celebrate individuality, encourage expression, and build connections.",
                    },
                ],
            },
            {
                id: 2,
                icon: "icon-heart",
                title: "Mental Health & Wellbeing",
                description:
                    "We encourage open conversations, emotional awareness, empathy, and supportive spaces where people can express themselves without fear of judgment.",
                areas: [
                    {
                        title: "Student Engagement & Innovation",
                        description:
                            "We engage young people in exploring real-world challenges, thinking creatively, and developing ideas that contribute to a more inclusive society.",
                    },
                    // {
                    //     title: "Sustainability & Community Engagement",
                    //     description:
                    //         "We bring communities together through experiences that encourage learning, collaboration, and social and environmental responsibility.",
                    // },
                ],
            },
        ];

        return (
            <section className="feature-two-section">
                <div className="container">
              

                    <div className="feature-two-grid">
                        {featureGroups.map((feature) => (
                            <article
                                className="feature-two-card"
                                key={feature.id}
                            >
                                <div className="feature-two-card-header">
                                    <div className="feature-two-icon">
                                        <span className={feature.icon}></span>
                                    </div>

                                    {/* <span className="feature-two-number">
                                        0{feature.id}
                                    </span> */}
                                </div>

                                <h3 className="feature-two-title">
                                    <Link
                                        to={
                                            process.env.PUBLIC_URL + "/about"
                                        }
                                    >
                                        {feature.title}
                                    </Link>
                                </h3>

                                <p className="feature-two-description">
                                    {feature.description}
                                </p>

                                <div className="feature-two-divider"></div>

                                <div className="feature-two-areas">
                                    {feature.areas.map((area) => (
                                        <div
                                            className="feature-two-area"
                                            key={area.title}
                                        >
                                            <span className="feature-two-area-icon">
                                                <span className="icon-check"></span>
                                            </span>

                                            <div>
                                                <h4>{area.title}</h4>
                                                <p>{area.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    className="feature-two-link"
                                    to={
                                        process.env.PUBLIC_URL + "/about"
                                    }
                                >
                                    Learn More
                                    <span aria-hidden="true"> →</span>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}
