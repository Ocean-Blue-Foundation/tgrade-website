import styled, { css } from "styled-components";
import { device } from "../../theme/Breakpoints";
import { setSizeMobile } from "../../theme/Functions";

interface StyledContentWithImage {
  imageLeft: boolean;
}

export const StyledContainer = styled.div<StyledContentWithImage>`
  width: 100%;
  display: flex;
  flex-direction: ${({ imageLeft }) => (imageLeft ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  column-gap: 8rem;

  @media ${device.tablet} {
    column-gap: 4rem;
  }

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 50%;

  @media ${device.mobile} {
    width: auto;
    padding-bottom: 1rem;
  }
`;

export const heading = css`
  font-size: 3rem;
  line-height: 5rem;
  padding-bottom: 1rem;
  font-weight: 700;

  @media ${device.tablet} {
    font-size: 2rem;
    line-height: 3.4rem;
  }
`;

export const subHeading = css`
  font-size: 1.8rem;
  line-height: 2.2rem;
  text-transform: uppercase;
  padding-bottom: 2rem;

  @media ${device.tablet} {
    font-size: 1.6rem;
    line-height: 2rem;
    padding-bottom: 1.6rem;
  }
`;

export const StyledImage = styled.div`
  display: flex;
  width: 540px;
  position: relative;
  height: 414px;

  @media ${device.tablet} {
    width: 32rem;
    height: 32rem;
  }

  @media ${device.mobile} {
    width: 100vw;
    height: ${setSizeMobile(245)};
  }
`;
