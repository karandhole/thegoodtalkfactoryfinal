import React from 'react';

export default class RecentEventsTwo extends React.Component {
    componentDidMount() {

        const $ = window.$;

        if ($('.up-comming-event-two').length) {
            $('.up-comming-event-two .tabs-button-box .tab-btn-item').on('click', function (e) {
                e.preventDefault();
                var target = $($(this).attr('data-tab'));

                if ($(target).hasClass('actve-tab')) {
                    return false;
                } else {
                    $('.up-comming-event-two .tabs-button-box .tab-btn-item').removeClass('active-btn-item');
                    $(this).addClass('active-btn-item');
                    $('.up-comming-event-two .tabs-content-box .tab-content-box-item').removeClass('tab-content-box-item-active');
                    $(target).addClass('tab-content-box-item-active');
                }
            });
        }

    }
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/'
        return (
            <>
                <section className="up-comming-event-two">
                    <div className="container">
                        <div className="section-title text-center">
                            <span className="section-title__tagline">Our Recent events</span>
                            <h2 className="section-title__title">   #PlatformForCommoners #LiveYourStory</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="up-comming-event-two__left">

                                    <div className="up-comming-event-two__top">
                                        <ul className="tabs-button-box list-unstyled up-comming-event-two__list">
                                            <li data-tab="#month-1" className="tab-btn-item active-btn-item">
                                                <p>2024 </p>
                                            </li>
                                            <li data-tab="#month-2" className="tab-btn-item">
                                                <p>2023</p>
                                            </li>
                                            <li data-tab="#month-3" className="tab-btn-item">
                                                <p>2022</p>
                                            </li>
                                            <li data-tab="#month-4" className="tab-btn-item">
                                                <p>2021</p>
                                            </li>
                                            <li data-tab="#month-5" className="tab-btn-item">
                                                <p>2020</p>
                                            </li>
                                            <li data-tab="#month-6" className="tab-btn-item">
                                                <p>2019</p>
                                            </li>
                                            
                                            
                                        </ul>
                                    </div>

                                    <div className="tabs-content-box">
                                        {/* Tab */}
                                        <div className="tab-content-box-item tab-content-box-item-active" id="month-1">
                                            <div className="up-comming-event-two__bottom">
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Taare Zameen Par (Art meets music) </h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Guruswamy centre
                                                                    </p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>27th </p>
                                                        <span>April</span>
                                                    </div>
                                                </div>
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title"> TGTF VIDYA (Vidya sessions - Launch event)

                                                        </h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Khusbow Vidya Niketan School</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>6th</p>
                                                        <span> July</span>
                                                    </div>
                                                </div>
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title"> Resilient echoes (An artistry workshop on cultivating mental well-being and support)

                                                        </h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Salesforce office</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>11th</p>
                                                        <span> September </span>
                                                    </div>

                                                </div>




                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title"> Nostalgia (The chronicles of elderly tales)



                                                        </h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>PP Reddy retirement homes</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>22nd </p>
                                                        <span>September  </span>
                                                    </div>
                                                </div>





                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title"> Kahaaniyan 4.0 (6th Anniversary celebrations)




                                                        </h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Guruswamy centre</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>14th</p>
                                                        <span> December </span>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>

                                        {/* Tab */}
                                        <div className="tab-content-box-item" id="month-2">
                                            <div className="up-comming-event-two__bottom">
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Prerna 2.0 (Collaboration event with Quills literary club)

                                                        </h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Women’s college</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>3rd</p>
                                                        <span>March</span>
                                                    </div>
                                                </div>
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title"> International story telling

                                                        </h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Heart cup coffee, Gandipet</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p> 16th</p>
                                                        <span> April</span>
                                                    </div>
                                                </div>
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Story telling event

                                                        </h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Phoenix arena</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>13th</p>
                                                        <span>May  </span>
                                                    </div>
                                                </div>


                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Kahaaniyaan 3.0 (5th Anniversary Celebrations)


                                                        </h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p> Guruswamy centre</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>16th</p>
                                                        <span>December  </span>
                                                    </div>
                                                </div>






                                            </div>
                                        </div>

                                        {/*////////////////////////////////////  3 Tab //////////////////////////////////////*/}






                                        <div className="tab-content-box-item" id="month-3">
                                            <div className="up-comming-event-two__bottom">
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Kahaaniyan 2.0 ( 4th Anniversary Celebrations )</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Birla Planetarium</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>17th </p>
                                                        <span>December</span>
                                                    </div>
                                                </div>
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Jashn-E-Sangeeth</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Ethos studios</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>24th </p>
                                                        <span>September</span>
                                                    </div>
                                                </div>



                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Unsung humans 3.0 </h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Phoenix Arena</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>30th </p>
                                                        <span>April</span>
                                                    </div>
                                                </div>


                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Inspiration talk ep.2 </h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p> Sparsh Hospice</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>19th </p>
                                                        <span>March</span>
                                                    </div>
                                                </div>

                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">KHOJ - Healing through Art  </h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p> Khusbow Vidya Niketan School</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>7th  </p>
                                                        <span>March</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*////////////////////////////////////  4 Tab //////////////////////////////////////*/}







                                        <div className="tab-content-box-item" id="month-4">
                                            <div className="up-comming-event-two__bottom">
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">VISHWASYA 3.0 </h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>/</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>23rd </p>
                                                        <span>May</span>
                                                    </div>
                                                </div>
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">UNSUNG HUMAN'S 2.0. </h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Kavuri Hills,madhapur,hyd</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>4th </p>
                                                        <span>September</span>
                                                    </div>
                                                </div>
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title"> SPARSH HOSPICE </h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>@sparshhospice</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p> 25th </p>
                                                        <span>September</span>
                                                    </div>
                                                </div>

                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">TGTF's 3rd year anniversary </h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>@phoenix_arena</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p> 11th </p>
                                                        <span>December</span>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>




                                        {/*////////////////////////////////////  5 Tab //////////////////////////////////////*/}








                                        <div className="tab-content-box-item" id="month-5">
                                            <div className="up-comming-event-two__bottom">
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">ABHYASA' </h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Bhavan's Atmakuri Rama Rao School and Bharatiya Vidya Bhavan Vidyashram School</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>4th</p>
                                                        <span>Jan</span>
                                                    </div>
                                                </div>
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Mental Health Awareness Drive</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>The Symbiosis Law School, Hyderabad</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>3rd</p>
                                                        <span>March</span>
                                                    </div>
                                                </div>






                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">VISHWASYA 2.0</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>zoom meeting</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>23rd</p>
                                                        <span>May</span>
                                                    </div>
                                                </div>

                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Jashn-E-Youngistan</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>zoom meeting</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        {/* <p>28th & 13th</p> */}
                                                        <span>28th June & 13th Sept</span>

                                                    </div>
                                                </div>




                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">I For Innovation</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>zoom meeting</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        {/* <p>25th & 29th</p> */}
                                                        <span>25th June & 29th Aug</span>
                                                    </div>
                                                </div>

                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">#ThisIsMe</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>zoom meeting</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>16th</p>
                                                        <span>August</span>
                                                    </div>
                                                </div>


                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">TGTS's 2nd Anniversary</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>zoom meeting</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>15th</p>
                                                        <span>December</span>
                                                    </div>
                                                </div>




                                            </div>
                                        </div>





                                        {/*////////////////////////////////////  6 Tab //////////////////////////////////////*/}



                                        
                                       
                                     
                                    
                                    
                    


                                        <div className="tab-content-box-item" id="month-6">
                                            <div className="up-comming-event-two__bottom">
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">ETHOS OF ART</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>St. Peter's Engineering College</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>9th</p>
                                                        <span>March</span>
                                                    </div>
                                                </div>
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">UNSUNG HUMANS</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Deja Brew Art Cafe-State Art Gallery</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>30th</p>
                                                        <span>Marchs</span>
                                                    </div>
                                                </div>
                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">GTF's District Edition-1 “ఇంటింటా INNOVATOR Campaign</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>SR Innovation Exchange (@srixwarangal ), Warangal. (Collaboration with  Telangana State Innovation Cell)</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>27th</p>
                                                        <span>July</span>
                                                    </div>
                                                </div>


                                                    
                                    
                                       
                             


                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">PRERNA </h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>QUILLS Literary Club of RBVRR Women's college</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>7th</p>
                                                        <span>September</span>
                                                    </div>
                                                </div>



                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">1st Corporate Edition @ Tech Mahindra</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p></p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>25th</p>
                                                        <span> Nov </span>
                                                    </div>
                                                </div>


                                                <div className="up-comming-event-two__single">
                                                    <div className="up-comming-event-two__location-box">
                                                        <h5 className="up-comming-event-two__location-title">Sanghamitra School Chapter 1- 'PRAYAS'</h5>
                                                        <ul className="list-unstyled up-comming-event-two__location-list">
                                                            <li>
                                                                <div className="icon">
                                                                    <span className="icon-place"></span>
                                                                </div>
                                                                <div className="text">
                                                                    <p>Sanghamitra School</p>
                                                                </div>
                                                            </li>

                                                        </ul>
                                                    </div>
                                                    <div className="up-comming-event-two__date-box">
                                                        <p>30th</p>
                                                        <span> Nov </span>
                                                    </div>
                                                </div>





                                            </div>
                                        </div>




                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="up-comming-event-two__right">
                                    <div className="up-comming-event-two__img">
                                        <img src={publicUrl + "assets/images/services/download.png"} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}