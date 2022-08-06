import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "../logo";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../responsive";
import { slide as Menu } from "react-burger-menu";
import styles from "./menuStyles";

const Container = styled.div`
  width: 90%;
  ${tw`
        flex
        h-14
        w-full
        pl-6
        pr-6
        pt-4
        background-color[whitesmoke]
        border-b-2
        border-opacity-50
        justify-center
        items-center
        self-center
    `};
`;

const NavItems = tw.ul`
    list-none
    w-full
    h-auto
    lg:w-auto
    lg:h-full
    flex
    lg:ml-20
    justify-center
    items-center
`;

const NavItem = tw.li`
    lg:mr-8
    flex
    items-center
    justify-center
    min-h-full
    text-black
    cursor-pointer
    font-medium
    text-lg
    lg:text-base
    transition-colors
    transition-duration[300ms]
    hover:text-gray-200
    box-content
    mb-2
    lg:mb-0
`;

export function NavBar() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });

  const navItems = (
    <NavItems>
      <NavItem>
        <Link to="Home">Explore</Link>
      </NavItem>
      <NavItem>
        <Link to="Explore">Get Pro</Link>
      </NavItem>
      <NavItem>
        <Link to="TravelPlaces">Log in</Link>
      </NavItem>
    </NavItems>
  );

  return (
    <Container>
      <Logo />
      {isMobile && (
        <Menu right styles={styles}>
          {navItems}
        </Menu>
      )}
      {!isMobile && navItems}
    </Container>
  );
}