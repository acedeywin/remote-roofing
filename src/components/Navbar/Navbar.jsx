import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NumLink, NavItem, NavLinks, NavNum, NavContent, PhoneIcon} from './Navbar.styles'
import logo from '../../images/logo.svg'

 const Navbar = ({toggle, links}) => {
   

     const navLinks = links.map((link) => (
        <NavItem >
            <NavLinks key={link.id} to={link.to} className={link.style} >{link.text}</NavLinks>
        </NavItem>
     ))

    return (
        <>
            <Nav> 
                <NavbarContainer>
                    <NavLogo to='/' >
                    <img src={logo} alt="logo" />
                    </NavLogo>
                </NavbarContainer>

                <MobileIcon onClick={toggle} />               

                <NavNum>
                    <PhoneIcon/>
                    <NumLink href='tel:(800) 401-7716' >(800)&nbsp;401&#8209;7716</NumLink>
                </NavNum>
            </Nav>
 
            <NavContent>
              <NavMenu>     
                {navLinks}
              </NavMenu>
            </NavContent>
        </>
    )
}

export default Navbar