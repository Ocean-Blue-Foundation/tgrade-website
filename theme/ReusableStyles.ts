import { css } from "styled-components";

const ReusableStyles = {
  paragraphWhite: css`
    color: var(--color-white);
  `,
  paragraphBlack: css`
    color: var(--color-black);
  `,
  paragraphBig: css`
    font-size: 2.4rem;
    line-height: 4rem;
  `,
  emphasizedText: css`
    color: var(--color-black);
    text-transform: uppercase;
    font-weight: bold;
  `,
  copyright: css`
    color: #8692a6;
  `,
  boldWhite: css`
    color: var(--color-white);
    font-weight: bold;
  `,
  maxWidth1: css`
    max-width: 75.8rem;
  `,
  maxWidth2: css`
    max-width: 56.7rem;
  `,
  maxWidth3: css`
    max-width: 70rem;
  `,
};

export default ReusableStyles;
