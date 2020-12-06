import { FaBars } from 'react-icons/fa';
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkRoute } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

import styled from 'styled-components';

export const Nav = styled.nav `
    background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%);
    margin-top: -80px;
    height: 80px;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    position: sticky;
    justify-content: center;
    top: 0;
    z-index: 10;
    color: #fff;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`
export const NavBarContainer = styled.div `
    display:flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 25px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkRouter)
`
    color: #fff;
    justify-self: flex-start;
    margin-left: 15px;
    cursor: pointer;
    text-decoration: none;
    font-size: 3rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    font-family: 'Allura', cursive;
`;

export const MobileIcon = styled.div `
    display: none;


    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff
    }
`

export const NavLinkRoute = styled(LinkRoute)
`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 26px;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active  {
        color: #99bcc4;
        border-bottom: 4px solid #99bcc4;
    }

        &:hover {
        color: #99bcc4;
    }
`
export const NavLink = styled(LinkScroll)
`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 26px;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active  {
    color: #99bcc4;
    border-bottom: 4px solid #99bcc4;
}

    &:hover {
    color: #99bcc4;
}
`

export const Bars = styled(FaBars)
`    color: #fff;

@media screen and(max - width: 768 px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100 % , 75 % );
    font-size: 1.8 rem;
    cursor: pointer;
}
`
export const NavMenu = styled.ul `

    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
}
`
export const NavItem = styled.li `
    height: 80px;
`