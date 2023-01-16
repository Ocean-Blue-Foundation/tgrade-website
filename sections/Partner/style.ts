import styled, { css } from "styled-components";
import { device } from "../../theme/Breakpoints";
import { baseUrl } from "../../utils/prefix";

export const StyledContainer = styled.div`
  height: 30rem;
  background-image: url("${baseUrl}/partner-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  width: 100%;

  @media ${device.tablet} {
    background-image: url("${baseUrl}/partner-bg-mobile.jpg");
    background-size: contain;
    height: 30.8rem;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const heading = css`
  font-size: 3rem;
  line-height: 3.7rem;

  @media ${device.mobile} {
    font-size: 2rem;
    line-height: 3.4rem;
    text-align: center;
  }
`;

export const StyledImage = styled.div`
  display: flex;
  height: 70px;
  position: relative;
  width: 258px;

  @media ${device.tablet} {
    margin-top: 2.8rem;
  }
`;
