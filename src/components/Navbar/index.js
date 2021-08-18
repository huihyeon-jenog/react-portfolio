import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavbarElements";
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            huihyeon<span style={{ color: "red" }}>.</span>
          </NavLogo>
          <MobileIcon>
            <FaBars onClick={toggle} />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="top" smooth={true} duration={500}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="about" smooth={true} duration={500}>
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="project" smooth={true} offset={50}>
                Project
              </NavLink>
            </NavItem>
            <NavLink to="blog" smooth={true} duration={500}>
              Blog
            </NavLink>
            <NavItem>
              <NavLink to="contact" smooth={true} duration={500}>
                Contact
              </NavLink>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
