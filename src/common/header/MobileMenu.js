import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  AiOutlineBars,
  AiOutlineClose,
  AiOutlineHeart,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineRight,
} from "react-icons/ai";
import { CgChevronDown } from "react-icons/cg";
import "./MobileMenu.css";

const menuData = [
  { title: "Home", path: "/" },

  {
    title: "About Us",
    path: "#",
    subNav: [
      { title: "Our Story", path: "/our-story" },
      { title: "Our Journey", path: "/our-journey" },
      { title: "Our Values", path: "/our-values" },
      { title: "Recognition & Credentials", path: "/recognition" },
    ],
  },

  {
    title: "Team",
    path: "#",
    subNav: [
      { title: "Trustees", path: "/Trustee" },
      { title: "Core Team", path: "/coreteam" },
      { title: "Volunteer & Interns", path: "/team" },
    ],
  },

  {
    title: "Donation",
    path: "#",
    subNav: [
      { title: "Donate Now", path: "/donate-now" },
    ],
  },

  { title: "Our Programmes & Initiatives", path: "/our-programme" },
  { title: "Events", path: "/events" },
  { title: "Contact Us", path: "/contact" },
];

const SidebarNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 350px;
  max-width: 88vw;
  height: 100vh;
  height: 100dvh;
  background: #fffdf6;
  overflow-y: auto;
  z-index: 10001;
  transform: translateX(${({ sidebar }) => sidebar ? "0" : "-105%"});
  transition: transform 0.4s cubic-bezier(0.77, 0, 0.18, 1);
  box-shadow: 10px 0 40px rgba(0,0,0,0.12);

  @media(max-width: 480px) {
    width: 320px;
  }
    @media (min-width: 992px) {
  display: none;
}
`;

const SidebarLink = styled.button`
  width: 100%;
  border: none;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 8px;
  color: #29291f;
  font-size: 15px;
  font-weight: 650;
  text-align: left;
  cursor: pointer;
  border-bottom: 1px solid #eeeadd;
  transition: 0.25s;

  &:hover {
    color: #a18417;
    padding-left: 14px;
  }
`;

const MenuItemLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 8px;
  color: #29291f;
  font-size: 15px;
  font-weight: 650;
  text-decoration: none;
  border-bottom: 1px solid #eeeadd;

  &:hover {
    color: #a18417;
  }
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: 12px 15px 12px 25px;
  color: #181818;
  text-decoration: none;
  font-size: 14px;
  border-left: 2px solid #f0d14d;
  margin: 5px 0 5px 10px;
  transition: 0.2s;
  font-weight:600;

  &:hover {
    background: #fff4c7;
    color: #8b7013;
  }
`;

const SubMenu = ({ item, closeSidebar }) => {
  const [subnav, setSubnav] = useState(false);

  if (!item.subNav) {
    return (
      <MenuItemLink to={process.env.PUBLIC_URL + item.path} onClick={closeSidebar}>
        {item.title}
        <AiOutlineRight size={15} />
      </MenuItemLink>
    );
  }

  return (
    <div>
      <SidebarLink
        onClick={() => setSubnav(!subnav)}
        aria-expanded={subnav}
      >
        {item.title}
        <CgChevronDown
          className={subnav ? "tg-chevron-open" : ""}
          size={19}
        />
      </SidebarLink>

      <div className={`tg-submenu ${subnav ? "tg-submenu-open" : ""}`}>
        {item.subNav.map((data, index) => (
          <DropdownLink
            key={index}
            to={process.env.PUBLIC_URL + data.path}
            onClick={closeSidebar}
          >
            {data.title}
          </DropdownLink>
        ))}
      </div>
    </div>
  );
};

const MobileMenu = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(true);
  const closeSidebar = () => setSidebar(false);

  const publicUrl = process.env.PUBLIC_URL + "/";

  useEffect(() => {
    document.body.style.overflow = sidebar ? "hidden" : "";

    const handleEscape = (e) => {
      if (e.key === "Escape") closeSidebar();
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [sidebar]);

  return (
    <>
      {/* Menu Button */}
      <button
        className="tg-menu-trigger"
        onClick={showSidebar}
        aria-label="Open navigation menu"
      >
        <AiOutlineBars />
      </button>

      {/* Overlay */}
      <div
        className={`tg-menu-overlay ${sidebar ? "active" : ""}`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <SidebarNav sidebar={sidebar}>
        <div className="tg-mobile-content">

          {/* Header */}
          <div className="tg-mobile-header">
            <Link to="/" onClick={closeSidebar}>
              <img
                src={publicUrl + "assets/images/resources/logo1.jpg"}
                alt="The Good Talk Factory"
              />
            </Link>

            <button
              className="tg-close-btn"
              onClick={closeSidebar}
              aria-label="Close menu"
            >
              <AiOutlineClose />
            </button>
          </div>

          {/* Welcome */}
          <div className="tg-menu-welcome">
            <span>WELCOME TO TGTF</span>
            <h3>Let's create a world of possibilities.</h3>
          </div>

          {/* Navigation */}
          <nav className="tg-menu-navigation">
            {menuData.map((item, index) => (
              <SubMenu
                item={item}
                key={index}
                closeSidebar={closeSidebar}
              />
            ))}
          </nav>

          {/* Donate */}
          <a
            href="https://pages.razorpay.com/thegoodtalkfactoryfoundation"
            target="_blank"
            rel="noopener noreferrer"
            className="tg-menu-donate"
          >
            <AiOutlineHeart />
            <span>Support Our Cause</span>
            <AiOutlineRight />
          </a>

          {/* Contact */}
          <div className="tg-menu-contact">
            <span className="tg-menu-label">GET IN TOUCH</span>

            <a href="mailto:thegoodtalkfactory@gmail.com">
              <AiOutlineMail />
              thegoodtalkfactory@gmail.com
            </a>

            <a href="tel:+914035576553">
              <AiOutlinePhone />
              +91 40 3557 6553
            </a>
          </div>

          {/* Social */}
          <div className="tg-menu-social">
            <span className="tg-menu-label">FOLLOW OUR JOURNEY</span>

            <div>
              <a
                href="https://www.linkedin.com/company/thegoodtalkfactory-foundation/about/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <AiOutlineLinkedin />
              </a>

              <a
                href="https://www.instagram.com/thegoodtalkfactory?igsh=bWYzMmZzYTY2azky"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <AiOutlineInstagram />
              </a>
            </div>
          </div>

          <div className="tg-menu-footer">
            Together, we make a difference. 
          </div>

        </div>
      </SidebarNav>
    </>
  );
};

export default MobileMenu;