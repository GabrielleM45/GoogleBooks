import React from 'react';
import { SideBarContainer, Icon, CloseIcon, SideBarLink, SideBarMenu, SideBarWrapper, SideBarRoute } from './sideBarElements';

const SideBar = ({ isOpen, toggle }) => {
    return (
    <>
            <SideBarContainer isOpen={ isOpen } onClick={ toggle }>
                <Icon onClick={ toggle }>
                    <CloseIcon />
                </Icon>
                <SideBarWrapper>
                    <SideBarMenu>

                        <SideBarLink to="search" onClick={ toggle }> Home </SideBarLink>

                        <SideBarRoute to="/savedBooks"> Saved Books </SideBarRoute>

                    </SideBarMenu>
                </SideBarWrapper>
            </SideBarContainer>
    </>
);
};

export default SideBar;
