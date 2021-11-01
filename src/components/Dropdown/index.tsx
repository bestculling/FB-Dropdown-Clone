import { useState, useRef, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group';
import { DropdownContainer, DropdownItemLink } from "./style";
import { ReactComponent as CogIcon } from '../../icons/cog.svg';
import { ReactComponent as ChevronIcon } from '../../icons/chevron.svg';

export const Dropdown = () => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    function calcHeight(el: any) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    useEffect(() => {
        // setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])

    const DropdownItem = (props: any) => {
        return (
            <DropdownItemLink>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </DropdownItemLink>
        )
    }

    return (
        <DropdownContainer>
            <CSSTransition
                in={activeMenu === 'main'}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings">
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        rightIcon={<ChevronIcon />}
                        goToMenu="animals">
                        Animals
                    </DropdownItem>
                </div>
            </CSSTransition>
        </DropdownContainer>
    )
}