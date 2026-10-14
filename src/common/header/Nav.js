import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./nav.css";
const Nav = () => {
    const location = useLocation(); // Get current page path

    return (
        <div className="main-menu text-center">
            <nav>
                <ul className="main-menu__list">
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={location.pathname === '/about' ? 'active' : ''}>
                        <Link to="/about">About</Link>
                    </li>
                    <li className={`dropdown ${(location.pathname.startsWith('/trustee') || location.pathname.startsWith('/coreteam') || location.pathname.startsWith('/advisor') || location.pathname === '/team') ? 'active' : ''}`}>
                        <Link to="#">Team</Link>
                        <ul>
                            <li className={location.pathname === '/trustee' ? 'active' : ''}>
                                <Link to="/trustee">Trustees</Link>
                            </li>
                            <li className={location.pathname === '/coreteam' ? 'active' : ''}>
                                <Link to="/coreteam">Core Team</Link>
                            </li>
                            <li className={location.pathname === '/advisor' ? 'active' : ''}>
                                <Link to="/advisor">Advisors</Link>  
                            </li>
                            <li className={location.pathname === '/team' ? 'active' : ''}>
                                <Link to="/team">Volunteer & Interns</Link>
                            </li>
                            
                        </ul>
                    </li>
                    <li className={`dropdown ${location.pathname.startsWith('/donation') ? 'active' : ''}`}>
                        <Link to="#">Donation</Link>
                        <ul>
                            <li className={location.pathname === '/donation' ? 'active' : ''}>
                                <Link to="/donate-now">Donate Now</Link>
                            </li>
                            <li className={location.pathname === '/donation-list' ? 'active' : ''}>
                                <Link to="#">Donation List</Link>                         

                                {/* /donation-list */}
                            </li>
                        </ul>
                    </li>
                    <li className={location.pathname === '/events' ? 'active' : ''}>
                        <Link to="/events">Events</Link>
                    </li>
                    {/* <li className={`dropdown ${location.pathname.startsWith('/blog-v-1') ? 'active' : ''}`}>
                        <Link to="/">Blog</Link>
                        
                    </li> */}
                    <li className={location.pathname === '/contact' ? 'active' : ''}>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};



export default Nav;


