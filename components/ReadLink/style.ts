import styled from "styled-components";

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
