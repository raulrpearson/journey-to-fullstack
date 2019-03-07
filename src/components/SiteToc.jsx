import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const StyledAside = styled.aside`
  position: sticky;
  top: 0;
  align-self: start;
  height: 100vh;
  overflow: scroll;
  z-index: 90;

  @media (max-width: 850px) {
    background-color: white;
    position: fixed;
    width: 100%;
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
    padding-left: 0;
    margin-left: 0;
    & > li {
      text-transform: uppercase;
      font-family: 'Avenir Next';
      font-weight: bold;
    }
    a {
      text-decoration: none;
      color: gray;
    }
    a:hover {
      filter: brightness(50%);
    }
  }
`;

const SiteToc = ({ hide }) => (
  <StaticQuery
    query={graphql`
      query {
        allMdx {
          edges {
            node {
              id
              fields {
                title
                slug
              }
            }
          }
        }
      }
    `}
    render={data => (
      <StyledAside
        id="site-toc"
        css={
          hide &&
          css`
            @media (max-width: 850px) {
              display: none;
            }
          `
        }
      >
        <ul>
          {data.allMdx.edges.map(
            ({
              node: {
                id,
                fields: { title, slug }
              }
            }) => (
              <li key={id}>
                <Link to={slug}>{title}</Link>
              </li>
            )
          )}
        </ul>
      </StyledAside>
    )}
  />
);

export default SiteToc;
