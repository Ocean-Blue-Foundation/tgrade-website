import styled from "styled-components";
import { device } from "../../theme/Breakpoints";

export const StyledSocialIcons = styled.div`
  display: flex;
`;

export const StyledImage = styled.a`
  cursor: pointer;

  &:hover {
    border-radius: 50%;

    circle {
      transition: opacity 0.3s ease-in-out;
      opacity: 0.6;
    }
  }

  &:not(:first-child) {
    margin-left: 1rem;

    @media ${device.tablet} {
      margin-left: 15px;
    }

    @media ${device.mobile} {
      margin-left: 10px;
    }
  }
`;
