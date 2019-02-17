import React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import PageToc from './PageToc';
import SiteToc from './SiteToc';
import GitHubCorner from './GitHubCorner';

const StyledLayout = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr 250px;
  gap: 1.5em;
  margin: 2em 1em;
`;

const StyledArticle = styled.article`
  min-width: 300px;
`;

// This will be the result of a query eventually, once I've figured out how to
// do a query with $id and pass that data into the component through props
const headings = [
  {
    url: '#glossary-of-concepts',
    title: 'Glossary of concepts'
  },
  {
    url: '#javascript-frameworks',
    title: 'JavaScript frameworks'
  },
  {
    url: '#a-review-of-es6',
    title: 'A review of ES6'
  }
];

const Layout = props => (
  <>
    <GitHubCorner
      url={`https://github.com/raulrpearson/journey-to-fullstack`}
    />
    <StyledLayout>
      <Global
        styles={css`
          pre {
            background: lightgray;
            overflow: scroll;
            padding: 1em;
          }
        `}
      />
      <SiteToc />
      <StyledArticle>{props.children}</StyledArticle>
      <PageToc headings={headings} />
    </StyledLayout>
  </>
);

export default Layout;
