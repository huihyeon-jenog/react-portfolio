import React from 'react'
import {FaBars} from "react-icons/fa"
import{
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLink,
} from "./NavbarElements"
const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">huihyeon.</NavLogo>
                    <MobileIcon>
                        <FaBars onClick={toggle}/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="about">Skill</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="about">Project</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="about">Contact</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
