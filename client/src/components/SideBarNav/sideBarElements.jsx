import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkRouter} from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

export const SideBarContainer = styled.aside `
    position: fixed;
    z-index: 999;
    width: 40%;
    height: 55%;
    background: #303236;
    display: grid;
    align-items: center;
    padding-top: 40px;
    top: 0;
    right: 0;
    transition: all 0.5s ease-in-out;
    opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => ( isOpen ? '0' : '-100%')};

    &:hover {
        transition: 250ms;
    }
`

export const CloseIcon = styled(FaTimes)
`
    color: #fff;
`

export const Icon = styled.div `
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SideBarWrapper = styled.div `
    color: #fff;
`

export const SideBarMenu = styled.ul `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`

export const SideBarRoute = styled(LinkRouter)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

&:hover{
    color: #99bcc4;
    transition: 0.2s ease-in-out;
    }
`

export const SideBarLink = styled(LinkScroll)
`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

&:hover{
    color: #99bcc4;
    transition: 0.2s ease-in-out;
}
`