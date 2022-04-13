import * as styled from "styled-components";
import { device } from "./Breakpoints";

export const GlobalStyles = styled.createGlobalStyle`
  :root {
    --ff-montserrat: Montserrat;
    --color-black: #1a1d26;
    --color-white: #ffffff;
  }

  * {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  html,
  button,
  input,
  select,
  textarea {
    color: var(--color-black);

    &:focus {
      outline: none;
    }
  }

  html {
    font-size: 62.5%;
    height: 100%;
    line-height: 1.4;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }

  body {
    background-color: white;
    color: #242730;
    height: 100%;
    overflow-x: hidden;
    margin: 0;
    position: relative;
    scroll-behavior: smooth;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    font-family: var(--ff-montserrat);
    width: 100%;
  }

  span,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--ff-montserrat);
    color: var(--color-black);
  }

  audio,
  canvas,
  img,
  video {
    vertical-align: middle;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  p {
    font-size: 1.6rem;
    line-height: 3rem;
    color: var(--color-black);
  }

  h1,
  h2 {
    font-weight: 700;
  }

  h6 {
    font-weight: 400;
  }
`;
