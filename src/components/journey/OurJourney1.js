import React from 'react';
import './OurJourney1.css';

export default class OurJourney1 extends React.Component {
    journeyData = [
        {
            year: '2018',
            title: 'The Beginning',
            description:
                'TGTF began through Musings, creating spaces for people to share their stories, experiences, and perspectives.'
        },
        {
            year: '2019',
            title: 'Expanding Conversations',
            description:
                'We expanded into colleges, schools, and corporate spaces and engaged with the Telangana State Innovation Cell.'
        },
        {
            year: '2020–2021',
            title: 'Staying Connected',
            description:
                'During the pandemic, we facilitated virtual sessions focused on mental well-being, inclusion, and human connection.'
        },
        {
            year: '2022',
            title: 'Listening Beyond Familiar Circles',
            description:
                'We collaborated with NGOs and community spaces, including Sparsh Hospice, creating opportunities to share lived experiences.'
        },
        {
            year: '2023',
            title: 'Strengthening Our Foundation',
            description:
                'The Good Talk Factory was officially registered as a trust on 17 March 2023.'
        },
        {
            year: '2024',
            title: 'Learning and Empowerment',
            description:
                'We developed Project TGTF Vidya, extending our work into education, life skills, and youth development.'
        },
        {
            year: '2025',
            title: 'Expanding Inclusion and Community Engagement',
            description:
                'We engaged with platforms including Purple Fest Goa and Purple Jallosh Pune and contributed to student engagement through Purple Solvathon.'
        },
        {
            year: 'December 2025',
            title: 'Seven Years of Stories',
            description:
                "We celebrated TGTF's seventh anniversary with The Kaleido Carnival, Hyderabad's first-ever Inclusion Fest."
        },
        {
            year: '2026',
            title: 'Growing Through Collaboration',
            description:
                'We expanded our education and inclusion initiatives, launched TGTF Vidya 3.0’s Emerging Women Leaders Program, conducted KALEIDO Khelathon, collaborated with Akan Hyderabad on Akan Aahvaanam 2026, and received approval for CSR-1 registration.'
        }
    ];

    render() {
        return (
            <section className="our-journey">
                <div className="container">

                    {/* Section Heading */}
                    <div className="journey-header">
                       

                        <h2>Our Journey</h2>

                        <p>
                            From meaningful conversations to transformative
                            initiatives, discover the milestones that have
                            shaped The Good Talk Factory.
                        </p>
                    </div>

                    {/* Journey Timeline */}
                    <div className="journey-timeline">
                        {this.journeyData.map((item, index) => (
                            <div
                                className={`journey-item ${
                                    index % 2 === 0 ? 'left' : 'right'
                                }`}
                                key={item.year}
                            >
                                <div
                                    className="journey-dot"
                                    aria-hidden="true"
                                />

                                <article className="journey-card">
                                    <span className="journey-year">
                                        {item.year}
                                    </span>

                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>
                                </article>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        );
    }
}