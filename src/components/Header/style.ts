import styled from "styled-components";
import { nav_size, background, border, button_size, text_color } from '../../styles/variables'

export const Navbar = styled.nav`
    height: ${nav_size};
    background-color: ${background};
    padding: 0 1rem;
    border-bottom: ${border};
`
export const NavbarNav = styled.ul`
    max-width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
`

export const NavItem = styled.li`
    width: calc(${nav_size} * 0.8);
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover .icon-button{
        filter: brightness(1.5);
    }
`