import React from 'react'
import{SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarLink,SidebarMenu,SideBtn,SidebarRout} from './sideElement'
// import {CloseIcon} from 'react-icons/Cl'
const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon> 
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>
                    About
                </SidebarLink>
                <SidebarLink to="discover" onClick={toggle}>
                Discovery
                </SidebarLink>
                <SidebarLink to="services" onClick={toggle}>
                   Services
                </SidebarLink>
                <SidebarLink to="sign_up" onClick={toggle}>
                    Sign Up
                </SidebarLink>
            </SidebarMenu>
            <SideBtn>
                <SidebarRout to="/signin">Sign In</SidebarRout>
            </SideBtn>
        </SidebarWrapper>
    </SidebarContainer>
  );
  }
export default Sidebar
