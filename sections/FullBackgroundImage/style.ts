import styled, { css } from "styled-components";
import { device } from "../../theme/Breakpoints";

interface StyledFullBackgroundImage {
  image: string;
}

export const StyledContainer = styled.div<StyledFullBackgroundImage>`
  height: 79rem;
  background-image: ${({ image }) => (image ? `url(/${image})` : "")};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 100%;

  @media ${device.tablet} {
    height: 56.8rem;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-width: 63rem;
  padding: 3rem 0 10rem;

  @media ${device.tablet} {
    padding: 3rem 0 0;
  }

  @media ${device.mobile} {
    max-width: 48rem;
    padding: 0;
  }

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
  font-size: 3rem;
  line-height: 5rem;
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
