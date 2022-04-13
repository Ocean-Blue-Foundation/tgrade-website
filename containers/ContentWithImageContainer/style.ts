import styled from "styled-components";
import { device } from "../../theme/Breakpoints";

export const StyledContainer = styled.div`
  display: flex;
  row-gap: 200px;
  padding: 160px 0;
  flex-direction: column;

  @media ${device.tablet} {
    padding: 5rem 0 0;
    row-gap: 5rem;
  }
`;
