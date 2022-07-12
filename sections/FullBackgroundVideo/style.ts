import styled, { css } from "styled-components";
import { device } from "../../theme/Breakpoints";

interface StyledContent {
  maxWidth: number;
}

export const StyledContainer = styled.div`
  height: 81rem;
  position: relative;

  @media ${device.tablet} {
    height: 56.8rem;
  }

  video {
    height: 100%;
    width: 100vw;
    object-fit: cover;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: -1;
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
  align-items: center;
  margin: auto;
  text-align: center;

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

  p + a,
  h2 + a {
    margin-top: 2rem;
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
