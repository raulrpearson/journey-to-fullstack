import React from 'react';
import { MDXProvider } from '@mdx-js/tag';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';
import styled from '@emotion/styled';
import { Global, css } from '@emotion/core';
import { FaBars, FaTimes } from 'react-icons/fa';
import { graphql } from 'gatsby';
import kebabCase from 'lodash.kebabcase';

import GlobalStyles from './GlobalStyles';
import GitHubCorner from './GitHubCorner';
import overrides from './Overrides';
import SiteToc from './SiteToc';
import PageToc from './PageToc';

const StyledLayout = styled.div`
  display: grid;
  width: 100vw;
  box-sizing: border-box;
  grid-template-columns: 25ch auto 25ch;
  gap: 1em;
  margin: 0;

  & > * {
    padding: 2em 1em;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 25ch 1fr;

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

  & > div {
    max-width: 600px;
  }
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

class PageTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { closed: true };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => (state.closed = !state.closed));
  }

  render() {
    const pageTocEntries = this.props.data.mdx.headings.map(entry => ({
      url: `#${kebabCase(entry.value)}`,
      title: entry.value,
      depth: entry.depth
    }));
    return (
      <MDXProvider components={overrides}>
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
            <MDXRenderer>{this.props.data.mdx.code.body}</MDXRenderer>
          </StyledArticle>
          <PageToc headings={pageTocEntries} />
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

export const pageQuery = graphql`
  query SingleMdxQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      fields {
        title
        slug
      }
      code {
        body
      }
      headings {
        value
        depth
      }
    }
  }
`;

export default PageTemplate;
