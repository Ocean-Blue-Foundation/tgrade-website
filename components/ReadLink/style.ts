import styled, { css } from "styled-components";
import { device } from "../../theme/Breakpoints";

export const StyledLink = styled.a`
  font-size: 1.8rem;
  line-height: 2.2rem;
  font-weight: 700;
  color: var(--color-black);
  text-decoration: none;
  display: flex;
  align-items: center;
  width: fit-content;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-left: 1rem;
  }
`;

export const arrow = css`
  width: 3rem;
  height: 3rem;

  @media ${device.mobile} {
    width: 2.4rem;
    height: 2.4rem;
  }
`;
