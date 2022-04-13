import styled from "styled-components";
import { device } from "../../theme/Breakpoints";

interface Heading {
  textColor?: string;
}

export const StyledHeading = styled.div<Heading>`
  color: ${({ textColor }) => (textColor ? textColor : "var(--color-black)")};
`;
