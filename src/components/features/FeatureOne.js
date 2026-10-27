import React from 'react';
import { Link } from 'react-router-dom';

export default class FeatureTwo extends React.Component {
    render(){
        return (
            <>
                <section className="feature-one">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-12 col-lg-12 p-2 wow fadeInLeft" data-wow-delay="100ms">
                                {/* Feature One Single */}
                                <div className="feature-one__single">
                                    <div className="feature-one__top">
                                        <div className="feature-one__icon">
                                            <span className="icon-donation-1"></span>
                                        </div>
                                        <h3 className="feature-one__title"><Link to={process.env.PUBLIC_URL + `/about`}>Inclusion & Accessibility</Link></h3>
                                    </div>
                                    
                                    <p className="feature-one__text">We create opportunities for people with diverse abilities, identities, backgrounds, and experiences to participate, connect, and belong.</p>
                                <h6>Storytelling, Arts & Culture</h6>
                                <p className="feature-one__text">We use stories, music, art, and creative experiences to celebrate individuality, encourage expression, and build connections.</p>
                                </div>
                            </div>

                            <div className="col-xl-12 col-lg-12 p-2 wow fadeInUp" data-wow-delay="200ms">
                                {/* Feature One Single */}
                                <div className="feature-one__single">
                                    <div className="feature-one__top">
                                        <div className="feature-one__icon">
                                            <span className="icon-heart"></span>
                                        </div>
                                        <h3 className="feature-one__title"><Link to={process.env.PUBLIC_URL + `/about`}>Mental Health & Wellbeing</Link></h3>
                                    </div>
                                    <p className="feature-one__text">We encourage open conversations, emotional awareness, empathy, and supportive spaces where people can express themselves without fear of judgment.</p>
                                <h6>Student Engagement & Innovation</h6>
                                <p className="feature-one__text">We engage young people in exploring real-world challenges, thinking creatively, and developing ideas that contribute to a more inclusive society.</p>
                                <h6>Sustainability & Community Engagement</h6>
                                <p className="feature-one__text">We bring communities together through experiences that encourage learning, collaboration, and social and environmental responsibility.</p>
                                </div>
                            </div>

                            

                        </div>
                    </div>
                </section>
            </>
        )
    }
}