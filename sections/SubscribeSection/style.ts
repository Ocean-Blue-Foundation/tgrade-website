import styled, { css } from "styled-components";
import { device } from "../../theme/Breakpoints";

export const StyledContainer = styled.div`
  height: 30rem;
  background-image: url("/subscribe-bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  width: 100%;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

export const heading = css`
  font-size: 3rem;
  line-height: 3.7rem;
  padding-bottom: 2rem;
  text-align: center;

  @media ${device.mobile} {
    font-size: 2rem;
    line-height: 2.4rem;
    padding-bottom: 1.6rem;
  }
`;
