import styled from "styled-components";
import { device } from "../../theme/Breakpoints";

export const StyledFooterLink = styled.a`
  font-size: 1.6rem;
  line-height: 3rem;
  color: #ffffff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media ${device.tablet} {
    width: 50%;
  }

  @media ${device.mobile} {
    line-height: 1.2rem;
    font-size: 1rem;
    margin-bottom: 10px;
  }
`;
