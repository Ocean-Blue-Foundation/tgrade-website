import styled, { css } from "styled-components";
import { device } from "../../theme/Breakpoints";
import { setSize } from "../../theme/Functions";

interface Link {
  active: boolean;
}

export const StyledContainer = styled.div`
  position: fixed;
  bottom: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  padding: 9.5rem 0 4rem;
  background-image: url("/main-bg-mobile.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
`;

export const StyledNav = styled.nav`
  display: flex;
  row-gap: 3rem;
  flex-direction: column;
  align-items: flex-start;
`;

export const NavLink = styled.a<Link>`
  font-size: 1.6rem;
  line-height: 2rem;
  color: var(--color-white);
  text-decoration: none;
  position: relative;
  width: 29rem;
  padding: 1.5rem 0 1.5rem 3rem;
  align-items: center;
  border-radius: 0 3.6rem 3.6rem 0;
  z-index: 9;

  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }

  ${({ active }) =>
    active &&
    `
    background-color: rgba(255, 255, 255, 0.25);
  `};

  &:first-child {
    display: none;
  }
`;

export const btn = css`
  position: relative;
  left: 3rem;

  @media ${device.mobile} {
    width: calc(100% - 6rem);
    justify-content: center;
  }
`;
