import styled from "styled-components";

interface BtnLink {
  color: string;
  borderColor: string;
  backgroundColor: string;
}

export const StyledLink = styled.a<BtnLink>`
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: 500;
  border: 1px solid transparent;
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-color: ${({ borderColor }) => borderColor};
  text-decoration: none;
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 4.6rem;
  padding: 1rem 2rem;
`;
