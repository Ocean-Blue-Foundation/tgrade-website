import styled from "styled-components";
import { device } from "../../theme/Breakpoints";

export const StyledFooterLink = styled.a`
  font-size: 1.6rem;
  line-height: 3rem;
  color: #ffffff;
  text-decoration: none;

  @media ${device.mobile} {
    font-size: 1.3rem;
  }

  &:hover {
    text-decoration: underline;
  }
`;
