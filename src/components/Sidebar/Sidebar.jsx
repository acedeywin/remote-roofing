import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './Sidebar.styles'

const Sidebar = ({isOpen, toggle, links}) => {

    const sidebarWrapper = links.map((link) => (
        <SidebarWrapper>
            <SidebarMenu>
              <SidebarLink key={link.id} to={link.to} >{link.text}</SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
     ))
    return (
        
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>  
            {sidebarWrapper}         
        </SidebarContainer>
    )
}

export default Sidebar
