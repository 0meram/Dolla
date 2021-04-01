import React from 'react'
import {SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideBarRoute, SideBarBtnWrap} from "./sideBarElements"

const SideBar = ({isOpen, toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper >
            <SideBarMenu>
                <SideBarLink to="about" onClick={toggle}>About</SideBarLink>
                <SideBarLink to="discover" onClick={toggle}> Discover</SideBarLink>
                <SideBarLink to="services" onClick={toggle}> Services</SideBarLink>
                <SideBarLink to="signup" onClick={toggle}>Sign up</SideBarLink>
            </SideBarMenu>
<SideBarBtnWrap>
    <SideBarRoute  to='/signIn'>Sign in</SideBarRoute>
</SideBarBtnWrap>

            </SideBarWrapper>
            
        </SideBarContainer>
    )
}

export default SideBar
