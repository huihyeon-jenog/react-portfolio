import React from 'react'
import{
    SlidebarContainer,
    Icon,
    CloseIcon,
    SlidebarMenu,
    SlidebarWrapper,
    SlidebarLink
} from "./SlidebarElements"
const Slidebar = ({isOpen, toggle}) => {
    return (
        <SlidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon  onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SlidebarWrapper>
                <SlidebarMenu>
                    <SlidebarLink to="about"  onClick={toggle}>About</SlidebarLink>
                    <SlidebarLink to="skill"  onClick={toggle}>Skill</SlidebarLink>
                    <SlidebarLink to="project"  onClick={toggle}>Project</SlidebarLink>
                    <SlidebarLink to="contact"  onClick={toggle}>Contact</SlidebarLink>
                </SlidebarMenu>
            </SlidebarWrapper>
        </SlidebarContainer>
    )
}

export default Slidebar
