import React from 'react';
import { MDXProvider } from '@mdx-js/tag';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { FaBars, FaTimes } from 'react-icons/fa';

import GlobalStyles from './GlobalStyles';
import GitHubCorner from './GitHubCorner';
import headings from './Headings';
import SiteToc from './SiteToc';
import PageToc from './PageToc';

const StyledLayout = styled.div`
  display: grid;
  width: 100vw;
  box-sizing: border-box;
  grid-template-columns: auto auto auto;
  gap: 1em;
  margin: 0;

  & > * {
    padding: 2em 1em;
  }

  @media (max-width: 1100px) {
    grid-template-columns: auto 1fr;

    & > aside#page-toc {
      display: none;
    }
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const StyledArticle = styled.article`
  min-width: 100px;
  max-width: 100%;
  justify-self: center;
`;

const Menu = styled.div`
  position: fixed;
  bottom: 1em;
  right: 1em;
  z-index: 100;
  width: 3em;
  height: 3em;
  border-radius: 1.5em;
  box-sizing: border-box;
  background-color: #333333;

  display: flex;
  flex-direction: column;
  justify-content: center;

  svg {
    margin: 0 auto;
    color: white;
  }

  @media (min-width: 851px) {
    display: none;
  }
`;

// This will be the result of a query eventually, once I've figured out how to
// do a query with $id and pass that data into the component through props
const pageTocHeadings = [
  {
    url: '#glossary-of-concepts',
    title: 'Glossary of concepts'
  },
  {
    url: '#javascript-frameworks',
    title: 'JavaScript frameworks'
  },
  {
    url: '#a-review-of-es-6',
    title: 'A review of ES6'
  }
];

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { closed: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => (state.closed = !state.closed));
  }

  render() {
    return (
      <MDXProvider components={headings}>
        <GlobalStyles />
        {!this.state.closed && (
          <Global
            styles={css`
              html {
                overflow-y: hidden;
              }
            `}
          />
        )}
        <GitHubCorner
          url={`https://github.com/raulrpearson/journey-to-fullstack`}
        />
        <StyledLayout>
          <SiteToc hide={this.state.closed} />
          <StyledArticle
            css={
              !this.state.closed &&
              css`
                overflow: hidden;
              `
            }
          >
            {this.props.children}
          </StyledArticle>
          <PageToc headings={pageTocHeadings} />
        </StyledLayout>
        <Menu onClick={this.handleClick}>
          {this.state.closed ? (
            <FaBars id="times" size="1.4em" />
          ) : (
            <FaTimes id="bars" size="1.4em" />
          )}
        </Menu>
      </MDXProvider>
    );
  }
}

export default Layout;
