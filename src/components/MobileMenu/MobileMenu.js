/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { css } from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  const animations = {
    overlay: {
      '--overlay-animation': isOpen ? 'fade-in' : undefined,
    },
    content: {
      '--modal-animation': isOpen ? 'slide-in' : undefined,
      '--modal-content-animation': isOpen ? 'fade-in' : undefined,
    },
  };

  return (
    <Overlay
      isOpen={isOpen}
      onDismiss={onDismiss}
      style={animations.overlay}
    >
      <Content aria-label="Menu" style={animations.content}>
        <CloseButton onClick={onDismiss} n={0}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButton>
        <Filler />
        <Nav>
          <NavLink href="/sale" n={1}>
            Sale
          </NavLink>
          <NavLink href="/new" n={2}>
            New&nbsp;Releases
          </NavLink>
          <NavLink href="/men" n={3}>
            Men
          </NavLink>
          <NavLink href="/women" n={4}>
            Women
          </NavLink>
          <NavLink href="/kids" n={5}>
            Kids
          </NavLink>
          <NavLink href="/collections" n={6}>
            Collections
          </NavLink>
        </Nav>
        <Footer n={7}>
          <SubLink href="/terms">Terms and Conditions</SubLink>
          <SubLink href="/privacy">Privacy Policy</SubLink>
          <SubLink href="/contact">Contact Us</SubLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const modalContentAnimation = (props) => css`
  @media (prefers-reduced-motion: no-preference) {
    animation: var(--modal-content-animation) 300ms both;
    animation-delay: calc(500ms + 25ms * ${props.n});
  }
`;

const Overlay = styled(DialogOverlay)`
  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slide-in {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;

  animation: var(--overlay-animation) ease-out 400ms;
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;

  @media (prefers-reduced-motion: no-preference) {
    animation: var(--modal-animation) cubic-bezier(0.25, 0, 0.1, 0.9)
      400ms both;
    animation-delay: 200ms;
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;

  ${modalContentAnimation}
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }

  ${modalContentAnimation}
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;

  ${modalContentAnimation}
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
