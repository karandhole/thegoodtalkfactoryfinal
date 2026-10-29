import React from 'react';
import './OurValues.css';

export default class OurValues extends React.Component {
    valuesData = [
        {
            number: '01',
            title: 'Empathy',
            description:
                'Listening with openness and seeking to understand experiences beyond our own.'
        },
        {
            number: '02',
            title: 'Belonging',
            description:
                'Creating environments where people feel welcomed, respected, and valued.'
        },
        {
            number: '03',
            title: 'Accessibility',
            description:
                'Recognising and addressing barriers that prevent people from participating fully.'
        },
        {
            number: '04',
            title: 'Respect',
            description:
                'Honouring individual dignity, lived experiences, and diverse perspectives.'
        },
        {
            number: '05',
            title: 'Collaboration',
            description:
                'Bringing individuals, institutions, and communities together for shared impact.'
        },
        {
            number: '06',
            title: 'Learning',
            description:
                'Encouraging curiosity, reflection, personal growth, and the exchange of ideas.'
        },
        {
            number: '07',
            title: 'Participation',
            description:
                'Creating opportunities for people to contribute meaningfully, rather than simply be present.'
        },
        {
            number: '08',
            title: 'Purpose',
            description:
                'Turning conversations and ideas into action that benefits people and communities.'
        }
    ];

    render() {
        return (
            <section className="our-values-section">
                <div className="container">

                    {/* Section Header */}
                    <div className="values-header">
                        <span className="values-subtitle">
                            What Guides Us
                        </span>

                        <h2>Our Values</h2>

                        <p>
                            The principles that shape our conversations,
                            guide our actions, and inspire us to create
                            a more inclusive world.
                        </p>
                    </div>

                    {/* Alternating Zig-Zag Timeline */}
                    <div className="values-timeline">
                        {this.valuesData.map((value, index) => (
                            <div
                                className={`values-item ${
                                    index % 2 === 0 ? 'left' : 'right'
                                }`}
                                key={value.number}
                            >
                                {/* Numbered Timeline Marker */}
                                <div
                                    className="values-marker"
                                    aria-hidden="true"
                                >
                                    {value.number}
                                </div>

                                {/* Value Card */}
                                <article className="values-card">
                                    <span className="values-card-number">
                                        VALUE {value.number}
                                    </span>

                                    <h3>{value.title}</h3>

                                    <p>{value.description}</p>
                                </article>
                            </div>
                        ))}
                    </div>

                    {/* Closing Statement */}
                    <div className="values-footer">
                        <h3>Our Values in Action</h3>

                        <p>
                            We believe meaningful change begins with listening,
                            grows through understanding, and creates impact
                            when we act together.
                        </p>
                    </div>

                </div>
            </section>
        );
    }
}