/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";


const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <StyledDialogOverlay isOpen={isOpen} onDismiss={onDismiss}>
      <StyledDialogContent aria-label={"mobile-navigation opened"}>
        <ButtonWrapper>
          <UnstyledButton onClick={onDismiss}>
            <VisuallyHidden>Close mobile navigation</VisuallyHidden>
            <Icon id="close" strokeWidth={2} />
          </UnstyledButton>
        </ButtonWrapper>
        <MobileNav>
          <NavLink className="active" href="/sale">
            Sale
          </NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </MobileNav>
        <Footer>
          <NavLink href="/terms">Terms and Conditions</NavLink>
          <NavLink href="/privacy">Privacy Policy</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </Footer>
      </StyledDialogContent>
    </StyledDialogOverlay>
  );
};

export default MobileMenu;

const StyledDialogOverlay = styled(DialogOverlay)`
  position: absolute;
  background-color: var(--backdrop);
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  top: 0;
`;

const StyledDialogContent = styled(DialogContent)`
  position: absolute;
  width: 90%;
  height: 100%;
  background-color: var(--white);
  display: flex;
  flex-direction: column;
  padding-left: 48px;
`;

const ButtonWrapper = styled.div`
  align-self: flex-end;
  margin: 24px;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;

const NavLink = styled.a`
  text-decoration: none;
  padding: 7px 0;

  ${MobileNav} & {
    font-size: 22px;
    color: var(--gray-900);
    font-weight: var(--font-weight-medium);
    text-transform: uppercase;
  }

  ${Footer} & {
    font-size: 16px;
    color: var(--gray-700);
  }

  &.active {
    color: var(--secondary);
  }
`;
