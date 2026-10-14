import React from 'react';

export default class ContactMap extends React.Component {
    render(){
        return (
            <>
                <section className="contact-page-google-map">
                    <iframe
                        title="Address"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.2096769687214!2d78.41161237462931!3d17.497501499624708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91c6c0c6da43%3A0xd8a1fd6ab28d0ab1!2sGandhi%20Heights!5e0!3m2!1sen!2sin!4v1740374228469!5m2!1sen!2sin"
                        className="contact-page-google-map__one" allowfullscreen></iframe>

                </section>
            </>
        )

       
    }
}