import styled from "styled-components"
import {Link as LinkS} from "react-scroll"
import {FaTimes} from "react-icons/fa"

export const SlidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width:100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top:${({isOpen}) => (isOpen ? '0' : '-100%')};
    left:0;
    transition: 0.3s ease-in-out;
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SlidebarWrapper = styled.div`
    color: #fff;
`
export const SlidebarMenu = styled.ul`
    display: grid;
    grid-template-column: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 768px){
        grid-template-rows: repeat(6, 60px);
    }
`
export const SlidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`
