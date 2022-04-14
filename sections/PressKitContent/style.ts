import styled, { css } from "styled-components";
import { device } from "../../theme/Breakpoints";
import { setSize } from "../../theme/Functions";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 25rem);
  padding: 9rem 0 10rem;

  @media ${device.tablet} {
    padding: 7rem 0 1.5rem;
  }

  @media ${device.mobile} {
    min-height: 100vh;
  }
`;

export const StyledBreadcrumb = styled.div`
  display: flex;

  span {
    color: #6a7687;
    font-size: 1.3rem;
    line-height: 1.6rem;
  }
`;

export const StyledBreadcrumbLink = styled.a`
  font-size: 1.3rem;
  line-height: 1.6rem;
  color: var(--color-black);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const mainHeading = css`
  font-weight: 700;
  font-size: 3rem;
  line-height: 4rem;

  @media ${device.tablet} {
    font-size: 2rem;
    line-height: 2.4rem;
  }
`;

export const heading = css`
  font-size: 3rem;
  line-height: 3.7rem;
  font-weight: 700;
  margin-bottom: 1.3rem;

  @media ${device.tablet} {
    font-size: 2rem;
    line-height: 2.4rem;
    text-align: center;
  }
`;

export const StyledContentBlock = styled.div`
  margin-top: 4rem;

  @media ${device.tablet} {
    margin-top: 2rem;
  }
`;

export const StyledKitBlock = styled.div`
  background: rgba(228, 231, 243, 0.7);
  height: 25rem;
  margin-top: 4rem;
  display: flex;
  padding: 0 ${setSize(163)};
  align-items: center;
  justify-content: space-between;

  @media ${device.tablet} {
    padding: 0 ${setSize(70)};
    margin-top: 2rem;
  }

  @media ${device.mobile} {
    padding: 4rem;
    flex-direction: column;
    height: 40.3rem;
  }
`;

export const StyledKit = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const logo = css`
  width: 10rem;
  height: 10rem;

  @media ${device.tablet} {
    width: 8rem;
    height: 8rem;
  }
`;
