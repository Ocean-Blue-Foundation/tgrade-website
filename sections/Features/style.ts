import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
  padding: 105px 0 107px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  column-gap: 90px;
  padding-top: 3.7rem;
`;

export const StyledRightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 46.9%;
  align-items: center;
  justify-content: center;
`;

export const StyledLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 53.1%;
`;

export const heading = css`
  font-size: 3rem;
  line-height: 5rem;
  padding-bottom: 1rem;
  font-weight: 700;
`;

export const subHeading = css`
  font-size: 1.8rem;
  line-height: 2.2rem;
  text-transform: uppercase;
  padding-bottom: 2rem;
`;

export const paragraph = css`
  padding-bottom: 2.4rem;
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
`;

export const StyledListText = styled.li`
  font-size: 1.6rem;
  line-height: 2.6rem;
  list-style: initial;
  padding-left: 1.2rem;

  &::marker {
    font-size: 1rem;
  }
`;
