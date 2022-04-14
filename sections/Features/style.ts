import styled, { css } from "styled-components";
import { device } from "../../theme/Breakpoints";

export const StyledContainer = styled.div`
  padding: 105px 0 107px;

  @media ${device.tablet} {
    padding: 5rem 0 6.6rem;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  column-gap: 90px;
  padding-top: 3.7rem;

  @media ${device.tablet} {
    flex-direction: column;
    padding-top: 4.8rem;
  }
`;

export const StyledRightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 46.9%;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    width: 100%;
    align-items: flex-start;
  }
`;

export const StyledLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 53.1%;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const heading = css`
  font-size: 3rem;
  line-height: 5rem;
  padding-bottom: 1rem;
  font-weight: 700;

  @media ${device.mobile} {
    font-size: 2rem;
    line-height: 3.4rem;
    padding-bottom: 0.8rem;
  }
`;

export const subHeading = css`
  font-size: 1.8rem;
  line-height: 2.2rem;
  text-transform: uppercase;
  padding-bottom: 2rem;

  @media ${device.mobile} {
    font-size: 1.6rem;
    line-height: 2rem;
    padding-bottom: 1rem;
  }
`;

export const paragraph = css`
  padding-bottom: 2.4rem;

  @media ${device.mobile} {
    padding-bottom: 2rem;
  }
`;

export const StyledVideo = styled.div`
  position: relative;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    width: 100% !important;
    height: 100% !important;
  }
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem 4rem;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    grid-gap: 0;
    padding-top: 1rem;
    margin-left: 2rem;
  }
`;

export const StyledListText = styled.li`
  font-size: 1.6rem;
  line-height: 2.6rem;
  list-style: initial;
  padding-left: 0.6rem;
  max-width: 218px;

  @media ${device.tablet} {
    max-width: 100%;
  }

  @media ${device.mobile} {
    font-size: 1.3rem;
    line-height: 3rem;
  }

  &::marker {
    font-size: 1rem;
  }
`;
