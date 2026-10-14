import React from 'react';
import { Link } from 'react-router-dom';

export default class FeatureOne extends React.Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        return (
            <section className="feature-two" style={{ textAlign: 'center' }}>
                <div className="container">
                    <div className="section-title text-center">
                        <h2 className="section-title__title">Updates</h2>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="feature-two__single" style={{ boxShadow: 'none', transition: 'none' }}>
                                <div className="feature-two__img" style={{ marginBottom: '20px' }}>
                                    <img
                                        src={publicUrl + "assets/images/gallery/update1.jpg"}
                                        alt=""
                                        style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                                    />
                                </div>
                                <div className="feature-two__content">
                                
                                    <p className="feature-two__text" style={{ marginTop: '10px', color:'black' }}>
                                        TGTF wins CSR Summit's best initiative in the category Child Education for Project TGTF Vidya.
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* <div className="col-xl-4 col-lg-4">
                            <div className="feature-two__single" style={{ boxShadow: 'none', transition: 'none' }}>
                                <div className="feature-two__img" style={{ marginBottom: '20px' }}>
                                    <img
                                        src={publicUrl + "assets/images/gallery/update1.jpg"}
                                        alt=""
                                        style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                                    />
                                </div>
                                <div className="feature-two__content">
                                
                                    <p className="feature-two__text" style={{ marginTop: '10px', color:'black' }}>
                                        TGTF wins CSR Summit's best initiative in the category Child Education for Project TGTF Vidya.
                                    </p>
                                </div>
                            </div>
                        </div> */}


                        {/* <div className="col-xl-4 col-lg-4">
                            <div className="feature-two__single" style={{ boxShadow: 'none', transition: 'none' }}>
                                <div className="feature-two__img" style={{ marginBottom: '20px' }}>
                                    <img
                                        src={publicUrl + "assets/images/gallery/update1.jpg"}
                                        alt=""
                                        style={{ width: '100%', height: 'auto', display: 'block', margin: '0 auto' }}
                                    />
                                </div>
                                <div className="feature-two__content">
                                
                                    <p className="feature-two__text" style={{ marginTop: '10px', color:'black' }}>
                                        TGTF wins CSR Summit's best initiative in the category Child Education for Project TGTF Vidya.
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}
