import styled from "styled-components";
import { device } from "../../theme/Breakpoints";
import { setSize } from "../../theme/Functions";

export const StyledContainer = styled.div`
  padding: 0 ${setSize(100)};
  width: 100%;
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;

  @media ${device.laptop} {
    padding: 0 10rem;
  }

  @media ${device.smallLaptop} {
    padding: 0 3rem;
  }

  @media ${device.mobile} {
    padding: 0 1.5rem;
  }
`;
