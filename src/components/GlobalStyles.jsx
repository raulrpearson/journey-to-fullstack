import React from 'react';
import { Global, css } from '@emotion/core';

const GlobalStyles = () => (
  <Global
    styles={css`
      html,
      body {
        scroll-behavior: smooth;
      }

      code {
        background: #f2f2f2;
        font-family: 'Inconsolata', monospace;
        font-size: 1em;
        padding: 3px;
      }

      pre {
        font-size: 1em;
        line-height: 1.2em;
        background: #f2f2f2;
        overflow: scroll;
        padding: 1em;
        border-radius: 5px;
        min-width: 0px;
      }

      pre > code {
        padding: 0;
        line-height: 1.2em;
        min-width: 0px;
      }

      a {
        color: #808080;
      }

      a:hover {
        color: #404040;
      }

      ::selection {
        background-color: #d2d2d2;
      }
    `}
  />
);

export default GlobalStyles;
