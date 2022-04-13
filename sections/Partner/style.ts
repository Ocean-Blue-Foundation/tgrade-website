import styled, { css } from "styled-components";
import { device } from "../../theme/Breakpoints";

export const StyledContainer = styled.div`
  height: 30rem;
  background-image: url("/partner-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  width: 100%;
`;

export const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`;

export const heading = css`
  font-size: 3rem;
  line-height: 3.7rem;
`;

export const StyledImage = styled.div`
  display: flex;
  height: 70px;
  position: relative;
  width: 258px;
`;
