import styled, { css } from "styled-components";
import { device } from "../../theme/Breakpoints";

export const StyledContainer = styled.div`
  padding: 164px 0 216px;
  background: rgba(228, 231, 243, 0.7);
`;

export const StyledWrapper = styled.div`
  display: flex;
  column-gap: 90px;
`;

export const StyledRightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 46.9%;
`;

export const StyledLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 53.1%;
`;

export const heading = css`
  font-size: 3rem;
  line-height: 5rem;
  padding-bottom: 2rem;
  font-weight: 700;
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

export const StyledLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled.div`
  display: flex;
  flex-direction: column;

  &:not(:first-child) {
    padding-top: 2.4rem;
  }
`;

export const StyledLinkText = styled.div`
  font-size: 1.8rem;
  line-height: 5rem;
`;
