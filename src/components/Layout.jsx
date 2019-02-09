import React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

const Main = styled.main`
  max-width: 700px;
  margin: 0 auto;
`;

const Layout = props => (
  <>
    <Global
      styles={css`
        * {
          font-family: sans-serif;
          line-height: 1.1;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-weight: normal;
        }

        p {
        }

        pre {
          background: lightgray;
          overflow: scroll;
          padding: 1em;
        }

        code {
          font-family: monospace;
        }
      `}
    />
    <Main>{props.children}</Main>
  </>
);

export default Layout;
