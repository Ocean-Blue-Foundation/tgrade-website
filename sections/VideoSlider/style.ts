import styled, { css } from "styled-components";

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
  }

  .slick-active {
    position: relative;
  }

  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    overflow: hidden;
    margin: 0 -10px;
  }

  .slick-dots {
    display: flex !important;
    justify-content: center;
    align-items: center;
    margin: 0;
    column-gap: 1.4rem;
    list-style-type: none;
    margin-top: 12.2rem;

    button {
      display: block;
      width: 6px;
      height: 6px;
      padding: 0;
      border: none;
      border-radius: 100%;
      background-color: var(--color-black);
      text-indent: -9999px;
      cursor: pointer;
    }

    .slick-active button {
      background-color: var(--color-white);
      width: 10px;
      height: 10px;
      border: 2px solid var(--color-black);
    }
  }
`;

export const StyledTopContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6rem;
`;

export const heading = css`
  font-size: 3rem;
  line-height: 5rem;
  font-weight: 700;
`;

export const videoHeading = css`
  font-size: 18px;
  line-height: 22px;
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
