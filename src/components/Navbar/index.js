import React from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLink, NavLogo, NavMenu } from './NavbarElements'
import {FaBars} from 'react-icons/all'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">C<span style={{fontFamily: 'Russ One', color: '#C1121F'}}>oo</span>l-S<span style={{fontFamily: 'Ruthie'}}>p</span>ace</NavLogo>
                
                    <MobileIcon>
                        <FaBars onClick={toggle} />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="services">Services</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="pricing">Pricing</NavLink>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        {/* <NavBtnLink primary to="/signup">Join us</NavBtnLink> */}
                        <NavBtnLink border="true" to="/">Sign In</NavBtnLink>
                    </NavBtn>
                    {/* <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
