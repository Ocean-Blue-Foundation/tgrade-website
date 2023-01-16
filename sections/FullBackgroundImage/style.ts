import styled, { css } from "styled-components";
import { device } from "../../theme/Breakpoints";
import { setSizeDesktop } from "../../theme/Functions";

interface StyledFullBackgroundImage {
  image: string;
  responsive: boolean;
}

interface StyledContent {
  align: "left" | "center" | "right";
  verticalAlign: "start" | "center" | "end";
  maxWidth: number;
}

export const StyledContainer = styled.div<StyledFullBackgroundImage>`
  height: 79rem;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;

  ${({ responsive }) =>
    responsive &&
    `
    &::before {
      content: "";
      display: block;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.4));
    }

    @media ${device.responsiveLaptop} {
      height: ${setSizeDesktop(883)};
    }

    @media ${device.bigLaptop} {
      height: 100vh;
    }
  `};

  @media ${device.tablet} {
    height: 56.8rem;
  }
`;

export const StyledContent = styled.div<StyledContent>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-width: ${({ maxWidth }) => `${maxWidth}rem`};
  padding: 3rem 0 9rem;
  position: relative;
  z-index: 1;

  @media ${device.tablet} {
    padding: 3rem 0 0;
  }

  @media ${device.mobile} {
    max-width: 48rem;
    padding: 0;
  }

  ${({ verticalAlign }) =>
    verticalAlign === "start" &&
    `
    justify-content: flex-start;
    position: relative;
    top: 0;
    padding: 13rem 0 3rem;

    @media ${device.tablet} {
      padding: 5rem 0 0;
    }
  `};

  ${({ align }) =>
    align !== "left" &&
    `
    text-align: ${align};
    align-items: ${align};
    margin: auto;
    
  `};

  ${({ align }) =>
    align === "right" &&
    `
    margin-right: 0;

  `};
  ${({ align }) =>
    align === "left" &&
    `
  margin-left: 29%;

`};

  p + p {
    padding-top: 3rem;
  }

  p + a {
    margin-top: 3rem;
  }
`;

export const heading = css`
  font-size: 5rem;
  line-height: 6.1rem;
  padding-bottom: 2rem;

  @media ${device.mobile} {
    padding-bottom: 1rem;
    font-size: 2.4rem;
    line-height: 3.4rem;
  }
`;

export const headingSmall = css`
  font-size: 4rem;
  line-height: 4.9rem;
  padding-bottom: 1rem;

  @media ${device.mobile} {
    font-size: 2rem;
    line-height: 3.4rem;
  }
`;

export const subHeading = css`
  font-size: 1.8rem;
  line-height: 2.2rem;
  text-transform: uppercase;
  padding-bottom: 2rem;

  @media ${device.mobile} {
    padding-bottom: 1rem;
    font-size: 1.6rem;
    line-height: 2rem;
    padding-bottom: 1.6rem;
  }
`;
