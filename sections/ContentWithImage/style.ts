import styled, { css } from "styled-components";
import { device } from "../../theme/Breakpoints";

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
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 50%;
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

export const StyledImage = styled.div`
  display: flex;
  width: 540px;
  position: relative;
  height: 414px;
`;
