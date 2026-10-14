import React, { useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import { AiOutlineBars } from 'react-icons/ai';
import { CgChevronDown, CgChevronLeft } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const menuData = [
    {
        title: 'Home',
        path: '/',
        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        // subNav: [
            
        //     {
        //         title: 'Home',
        //         path: '/',
        //     },
        // ],
    },
    {
        title: 'About',
        path: '/about',
    },

    {
        title: 'Team',
        path: '#',

        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
            {
                title: 'Trustees',
                path: '/Trustee',
                cName: 'sub-nav',
            },
            { 
                title: 'Core Team',
                path: 'coreteam',
                cName: 'sub-nav',
            },
            
            {
                title: 'Advisor',
                path: '/advisor',
            },
            {
                title: 'Volunteer & Interns',
                path: '/team',
            },
            // {
            //     title: 'Gallery',
            //     path: '/gallery',
            // },
            // {
            //     title: '404 Error',
            //     path: '/error',
            // },
        ],
    },

    {
        title: 'Donation',
        path: '#',

        iconClosed: <CgChevronLeft />,
        iconOpened: <CgChevronDown />,

        subNav: [
            
            {
                title: 'Donate Now',
                path: '/donate-now',
            },
            
            // {
            //     title: 'Donation',
            //     path: '/donation',
            //     cName: 'sub-nav',
            // },
            // {
            //     title: 'Donation List',
            //     path: '/donation-list',
            //     cName: 'sub-nav',
            // },
            // {
            //     title: 'Donation Details',
            //     path: '/donation-details',
            // },
          
        ],
    },

    {
        title: 'Events',
        path: '/events',
    },


    // {
    //     title: 'Blog',
    //     path: '/',

    //     iconClosed: <CgChevronLeft />,
    //     iconOpened: <CgChevronDown />,

        
    // },
    
    {
        title: 'Contact',
        path: '/contact',
    },
];

const SidebarLink = styled(Link)`
    display: flex;
    color: #fff;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 50px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;
    &:hover {
        background: #ff6f0f;
        color: #fff;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
    margin-left: 16px;
    color: #fff;
    font-weight: 400;
`;

const DropdownLink = styled(Link)`
    height: 60px;
    padding-left: 3rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    &:hover,
    &:active {
        background: #ff6f0f;
        cursor: pointer;
        color: #fff;
    }
`;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SidebarLink to={process.env.PUBLIC_URL + `${item.path}`} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SidebarLink>
            {subnav &&
                item.subNav.map((data, index) => (
                    <DropdownLink to={process.env.PUBLIC_URL + `${data.path}`} key={index}>
                        {item.icon}
                        <SidebarLabel>{data.title}</SidebarLabel>
                    </DropdownLink>
                ))}
        </>
    );
};

const NavIcon = styled(Link)`
    color: #ff6f0f;
    font-size: 2rem;
    height: 50px;
    display: flex;
    align-items: center;
    margin-left: 200px;
`;

const SidebarNav = styled.nav`
    background-color: #001d23;
    width: 300px;
    height: 100%;
    position: fixed;
    overflow-y: scroll;
    scroll-behavior: smooth;
    -webkit-scroll-behavior: smooth;
    box-shadow: 0 13px 35px -12px rgba(35, 35, 35, 0.15);
    top: 0;
    left:0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 350ms;
    z-index: 99999;
`;

const SidebarWrap = styled.div`
    width: 100%;
`;

const MobileMenu = () => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    let publicUrl = process.env.PUBLIC_URL+'/'

    return (
        <>
            <>
                <NavIcon to="#" style={{ justifyContent: 'flex-end' }}>
                    <AiOutlineBars onClick={showSidebar} />
                </NavIcon>

                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <div className="mobile-nav__content">
                            <div className="logo-box">
                                <Link to={process.env.PUBLIC_URL + `/`} aria-label="logo image"><img src={publicUrl+"assets/images/resources/logo1.jpg"} style={{width:"80px",height:"80px"}} alt="" /></Link>
                            </div>
                            <NavIcon to="#">
                                <AiIcons.AiOutlineClose
                                    style={{
                                        color: 'white',
                                        fontSize: '18px',
                                        justifyContent: 'flex-start',
                                    }}
                                    onClick={showSidebar}
                                />
                            </NavIcon>
                            {menuData.map((item, index) => (
                                <SubMenu item={item} key={index} />
                            ))}
                            <ul className="mobile-nav__contact list-unstyled">
                                <li>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <a href="mailto: thegoodtalkfactory@gmail.com"> thegoodtalkfactory@gmail.com</a>
                                </li>
                                <li>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <a href="tel:+914035576553">+914035576553</a>
                                </li>
                            </ul>
                            <div className="mobile-nav__top">
                                <div className="mobile-nav__social">
                                    <a href="https://www.linkedin.com/company/thegoodtalkfactory-foundation/about/?viewAsMember=true">  <i class="fab fa-linkedin"></i></a>
                                    {/* <a href="https://facebook.com/"><span className="fab fa-facebook-square"></span></a>
                                    <a href="https://pinterest.com/"><span className="fab fa-pinterest-p"></span></a> */}
                                    <a href="https://www.instagram.com/thegoodtalkfactory?igsh=bWYzMmZzYTY2azky" target='_blank'><span className="fab fa-instagram"></span></a>
                                </div>
                            </div>
                        </div>
                    </SidebarWrap>
                </SidebarNav>
            </>
        </>
    );
};

export default MobileMenu;