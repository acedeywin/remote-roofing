import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-router-dom";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  margin-top: -160px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  padding-top: 30px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
export const PhoneIcon = styled(BsFillTelephoneFill)`
  color: #fff;
`;

export const NavLogo = styled(LinkRouter)`
  color: #fff;
  cursor: pointer;
  transform: scale(0.75);
  height: 45px;
  display: flex;
  margin-left: 17.438rem;

  @media screen and (max-width: 1024px) {
    margin-left: 50px;
  }

  @media screen and (max-width: 768px) {
    margin-left: 70px;
  }

  @media screen and (max-width: 425px) {
    margin-left: -30px;
  }
`;

export const MobileIcon = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    color: #fff;
    cursor: pointer;
  }
`;

export const NavContent = styled.nav`
  background: transparent;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: 90px;
  margin-left: 20rem;
  display: flex;
  justify-content: left;
  font-size: 1rem;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

  @media screen and (max-width: 1024px) {
    margin-left: 5.5rem;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 270px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  text-decoration: none;
  padding: 0 1.3rem;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavNum = styled(LinkScroll)`
  display: flex;
  list-style: none;
  text-decoration: none;
  margin: -40px 190px 0 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NumLink = styled(LinkScroll)`
  color: #fff;
  display: flex;
  text-decoration: none;
  padding: 0 10px;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
