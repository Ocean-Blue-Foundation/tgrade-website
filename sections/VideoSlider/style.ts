import styled, { css } from "styled-components";
import { device } from "../../theme/Breakpoints";

export const StyledContainer = styled.div`
  padding: 10rem 0;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .slick-track {
    display: flex;
    align-items: flex-start;
  }

  .slick-slide {
    width: 100%;
    height: 100%;

    @media ${device.tablet} {
      min-height: 14.8rem;
    }
  }

  .slick-active {
    position: relative;
  }

  .slick-slide > div {
    margin: 0 1rem;

    @media ${device.mobile} {
      margin: 0 3rem;
      margin: 0 3rem 0 0;
    }
  }
  .slick-list {
    overflow: hidden;
    margin: 0 -1rem;

    @media ${device.mobile} {
      margin: 0 3rem 0 0;
      display: flex;
      padding: 0 20% 0 0 !important;
      overflow: initial;
    }
  }

  .slick-dots {
    display: flex !important;
    justify-content: center;
    align-items: center;
    margin: 0;
    column-gap: 1.4rem;
    list-style-type: none;
    margin-top: 12.2rem;
    position: relative;

    @media ${device.tablet} {
      margin-top: 7.2rem;
    }

    button {
      display: block;
      width: 0.6rem;
      height: 0.6rem;
      padding: 0;
      border: none;
      border-radius: 100%;
      background-color: var(--color-black);
      text-indent: -9999px;
      cursor: pointer;
    }

    .slick-active button {
      background-color: var(--color-white);
      width: 1rem;
      height: 1rem;
      border: 2px solid var(--color-black);
    }
  }
`;

export const StyledTopContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6rem;

  @media ${device.tablet} {
    flex-direction: column;
    margin-bottom: 4rem;
  }
`;

export const heading = css`
  font-size: 3rem;
  line-height: 5rem;
  font-weight: 700;

  @media ${device.tablet} {
    padding-bottom: 1rem;
  }

  @media ${device.mobile} {
    font-size: 2rem;
    line-height: 3.4rem;
  }
`;

export const videoHeading = css`
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: #8692a6;
  padding-top: 2rem;
  padding-bottom: 1rem;
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

export const StyledSlide = styled.div`
  p {
    font-weight: 700;
  }
`;
