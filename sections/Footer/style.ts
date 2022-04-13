import styled, { css } from "styled-components";
import { device } from "../../theme/Breakpoints";

export const FooterContainer = styled.footer`
  background: #1a1d26;
  display: flex;
  flex-direction: row;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const FooterContent = styled.div`
  padding: 40px 0;
  display: grid;
  margin-right: 50px;
  justify-content: space-between;
  align-items: flex-end;
  grid-template-columns: 343px 189px 253px;
`;

export const StyledEmailLink = styled.a`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 3rem;
  color: var(--color-white);
  text-decoration: none;
  word-wrap: break-word;
  margin-bottom: 2rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const logo = css`
  width: 12rem;
  height: 3rem;
  margin-bottom: 2rem;
`;
