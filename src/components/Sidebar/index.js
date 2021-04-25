import React from 'react'
import { CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarRoute, SidebarWrapper, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarWrapper>
                    <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>Services</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>Pricing</SidebarLink>
                </SidebarWrapper>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/">Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
