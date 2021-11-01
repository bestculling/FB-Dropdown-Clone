import styled from "styled-components";
import { background, border, border_radius, button_size, speed } from '../../styles/variables'

export const DropdownContainer = styled.div`
    position: absolute;
    top: 58px;
    width: 300px;
    transform: translateX(-45%);
    background-color: ${background};
    border: ${border};
    border-radius: ${border_radius};
    padding: 1rem;
    overflow: hidden;
    transition: height ${speed} ease;

    > .menu {
        width: 100%;
    }
`

export const DropdownItemLink = styled.a`
    height: 50px;
    display: flex;
    align-items: center;
    border-radius: ${border_radius};
    transition: background ${speed};
    padding: 0.5rem;
    
    &:hover .icon-button{
        filter: brightness(1.5);
    }

    > .icon-right {
        margin-left: auto;
    }
`
