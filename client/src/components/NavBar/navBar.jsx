import React, {useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import{  Nav, NavBarContainer, NavLogo, MobileIcon, Bars, NavItem, NavLink, NavLinkRoute, NavMenu } from './navBarElements';


const NavBar= ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 5) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
        };


    return (
    <>
    <Nav scrollNav={ scrollNav }>
        <NavBarContainer>
            <NavLogo to='/' onClick={ toggleHome }>GBooks</NavLogo>
                <MobileIcon onClick={ toggle }>
                    <Bars />
                    </MobileIcon>
            <NavMenu>
                <NavItem>

                    <NavLinkRoute to='/' onClick={ toggleHome }>Search </NavLinkRoute>

                </NavItem>
                <NavItem>
                    <NavLinkRoute to='/saved'>Saved Books </NavLinkRoute>
                </NavItem>
            </NavMenu>
        </NavBarContainer>
    </Nav>
    </>
);
};

export default NavBar;
