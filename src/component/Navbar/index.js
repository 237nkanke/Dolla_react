import React, {useState} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer , NavLogo, MobileIcons ,NavMenu, NavItem ,NavLinks , NavButton, NavButtonLink} from './NavbarElement'
const Navbar = ({toggle}) => {
  const [scrollNav,setScrollNav] = useState(false);

  
  return (
    <>
    
    <Nav>
      <NavbarContainer>

        <NavLogo to="/Dolla_react">N-CODING</NavLogo>
        <MobileIcons onClick={toggle}>
          <FaBars />
        </MobileIcons>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
            {/* no /about bcs it is a scroll on the same page */}
          </NavItem>
          <NavItem>
            <NavLinks to="discovery">Discovery</NavLinks>
            {/* no /about bcs it is a scroll on the same page */} 
          </NavItem>
          <NavItem>
            <NavLinks to="services">Services</NavLinks>
            {/* no /about bcs it is a scroll on the same page */}
          </NavItem>
          <NavItem>
            <NavLinks to="sign_up">Sign Up</NavLinks>
            {/* no /about bcs it is a scroll on the same page */}
          </NavItem>
        </NavMenu>
        <NavButton>
        <NavButtonLink to="/signin" className=""> Sign In</NavButtonLink>
        </NavButton>
       
      </NavbarContainer>  
    </Nav>
    </>
  )
}

export default Navbar
