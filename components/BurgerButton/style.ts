import styled, { css } from "styled-components";
import { device } from "../../theme/Breakpoints";

interface BurgerButton {
  isMobileMenuOpen: boolean;
}

export const StyledBurger = styled.div<BurgerButton>`
  position: relative;
  width: 2.4rem;
  height: 1.6rem;
  z-index: 3;
  cursor: pointer;
  display: none;
  ${({ isMobileMenuOpen }) =>
    isMobileMenuOpen &&
    `
      transition: margin 0.7s ease-in;
  `};

  @media ${device.tablet} {
    display: block;
  }
`;

export const StyledLine = styled.span<BurgerButton>`
  width: 100%;
  transition: 0.5s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 0.3rem;
  background: var(--color-white);
  position: absolute;
  right: 0;
  left: 0;
  margin: 0 auto;
  transform: rotate(0);

  &:nth-child(1) {
    top: 0;
  }

  &:nth-child(2) {
    top: 0.65rem;
  }

  &:nth-child(3) {
    bottom: 0;
  }

  ${({ isMobileMenuOpen }) =>
    isMobileMenuOpen &&
    `
    &:nth-child(1) {
      top: 0.4rem;
      transform: rotate(-45deg);
    }

    &:nth-child(2) {
      width: 0%;
    }

    &:nth-child(3) {
      bottom: 0.9rem;
      transform: rotate(45deg);
    }
  `};
`;
