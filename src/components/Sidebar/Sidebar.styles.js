import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import {Link as LinkScroll} from 'react-router-dom'

export const SidebarContainer = styled.aside`
  display: none;

  @media screen and (max-width: 768px){
    display: block;
    position: fixed;
    z-index: 999;
    width: 60%;
    height: 35%;
    background: #fff;
    display: grid;
    align-items: center;
    top: ${({isOpen}) => (isOpen ? '0' : '-10%')};
    right: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
  }
`

export const CloseIcon = styled(FaTimes)`
  color: #000;
`
export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none
`

export const SidebarWrapper = styled.div`
  color: #fff;
`
export const SidebarMenu = styled.ul`
  @media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
  }
`

export const SidebarLink = styled(LinkScroll)`
  display: block;
  justify-content: left;
  align-items: left;
  font-size: 1rem;
  font-weight: 900;
  margin: 1rem 2rem;
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #000;
  cursor: pointer;
`