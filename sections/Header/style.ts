import styled, { css, keyframes } from "styled-components";
import { device } from "../../theme/Breakpoints";
import { setSize } from "../../theme/Functions";

interface Heading {
  alternateHeader?: boolean;
}

interface Link {
  active: boolean;
}

export const StyledHeader = styled.header`
  padding: 1.4rem 0;
  width: 100%;
  background-color: transparent;
`;

const fadeIn = keyframes`
  0% {
    transform: translate3d(0px, -100%, 0px);
  }
  100% {
    transform: translate3d(0px, 0px, 0px);
  }
`;

export const StyledContainer = styled.div<Heading>`
  position: absolute;
  width: 100%;

  .headroom--pinned,
  .headroom--unpinned {
    animation: 0.2s ${fadeIn} ease-in-out forwards;

    header {
      background-color: rgba(255, 255, 255, 0.97);
      box-shadow: 0px 7px 21px rgba(0, 0, 0, 0.04);

      span {
        background-color: var(--color-black);
      }
    }

    path {
      fill: var(--color-black);
    }

    a {
      color: var(--color-black);

      &::after {
        background-color: var(--color-black);
      }

      &:hover {
        &::after {
          background-color: var(--color-black);
        }
      }
    }

    a:last-child {
      color: var(--color-white);
      border-color: var(--color-black);
      background-color: var(--color-black);
    }
  }

  ${({ alternateHeader }) =>
    alternateHeader &&
    `
      header {
        background: var(--color-white);

        span {
          background-color: var(--color-black);
        }
      }

      path {
        fill: var(--color-black);
      }

      a {
        color: var(--color-black);

        &:hover {
          &::after {
            background-color: var(--color-black);
          }
        }

        &::after {
          background-color: var(--color-black);
        }
      }

      a:last-child {
        color: var(--color-white);
        border-color: var(--color-black);
        background-color: var(--color-black);
      }
  `};
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledImage = styled.div`
  display: flex;
  height: 30px;
  position: relative;
  width: 142px;
`;

export const StyledNav = styled.nav`
  display: flex;
  column-gap: 3rem;
  align-items: center;

  @media ${device.smallLaptop} {
    column-gap: ${setSize(20)};
  }

  @media ${device.tablet} {
    display: none;
  }
`;

export const NavLink = styled.a<Link>`
  font-size: 1.6rem;
  line-height: 2rem;
  color: var(--color-white);
  text-decoration: none;
  width: fit-content;
  position: relative;

  &:hover {
    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 2px;
      bottom: -8px;
      left: 0;
      background-color: var(--color-white);
      box-shadow: 0px 7px 21px rgba(0, 0, 0, 0.04);
      border-radius: 3px;
    }
  }

  ${({ active }) =>
    active &&
    `
    &:after {
      position: absolute;
      content: "";
      width: 100%;
      height: 2px;
      bottom: -8px;
      left: 0;
      background-color: var(--color-white);
      box-shadow: 0px 7px 21px rgba(0, 0, 0, 0.04);
      border-radius: 3px;
    }
  `};

  &:first-child {
    display: none;
  }
`;

export const logo = css`
  width: 15rem;
  height: 4rem;

  @media ${device.tablet} {
    width: 12rem;
    height: 3rem;
  }
`;
