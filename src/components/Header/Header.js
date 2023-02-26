import React from 'react';
import {
    Nav,
    Navbar,
    NavItem
} from 'reactstrap';
import { NavLink as RouterLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = (props) => {
    const { navItems } = props;
    const itemList = navItems.map((item) => {
        return (
            <NavItem key={item.url} className={style.navItem}>
                <RouterLink
                    to={item.url}
                    className="nav-link">
                    {item.text}
                </RouterLink>
            </NavItem>
        )
    });

    return (
        <div className={style.navBar}>
            <Navbar expand="md" light>
                <div className="container">
                    <Nav className="mr-auto" navbar>
                        {itemList}
                    </Nav>
                </div>
            </Navbar>
        </div>
    );
}

export default Header;

