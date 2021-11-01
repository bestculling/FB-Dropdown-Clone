import { useState } from 'react';
import { ReactComponent as BellIcon } from '../../icons/bell.svg';
import { ReactComponent as MessengerIcon } from '../../icons/messenger.svg';
import { ReactComponent as CaretIcon } from '../../icons/caret.svg';
import { Navbar, NavbarNav, NavItem } from './style'
import { Dropdown } from '../Dropdown'

const Item = (props: any) => {
    const [open, setOpen] = useState(false);
    return (
        <NavItem>
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>{props.icon}</a>
            {open && props.children}
        </NavItem>
    )
}

export const Header = () => {
    return (
        <Navbar>
            <NavbarNav>
                <Item icon={<BellIcon />} />
                <Item icon={<BellIcon />} />
                <Item icon={<MessengerIcon />} />
                <Item icon={<CaretIcon />}>
                    <Dropdown />
                </Item>
            </NavbarNav>
        </Navbar>
    )
}