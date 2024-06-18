import { css } from '@emotion/react';
import { colorPalette } from './colorPalette';

export default css`
  ${colorPalette}

  :root {
    --dimmed-zindex: 10;
    --alert-zindex: 11;
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  body {
    font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  ol,
  ul {
    list-style: none;
  }

  input:focus,
  button:focus,
  select:focus,
  textarea:focus {
    outline: none;
  }

  button {
    width: auto;
    overflow: visible;

    margin: 0;
    padding: 0;

    border: none;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    cursor: pointer;
  }
`;
