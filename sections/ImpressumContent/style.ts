import styled, { css } from "styled-components";
import { device } from "../../theme/Breakpoints";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 9rem 0 10rem;
`;

export const StyledContentBlock = styled.div`
  margin-top: 4rem;

  p {
    margin-top: 1rem;
  }

  p + p {
    margin-top: 3rem;
  }

  ul {
    margin-top: 1rem;

    li {
      font-size: 1.6rem;
      line-height: 3rem;
    }
  }
`;

export const StyledRegularLink = styled.a`
  color: var(--color-black);
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
`;

export const heading = css`
  font-size: 2rem;
  line-height: 2.4rem;
`;
