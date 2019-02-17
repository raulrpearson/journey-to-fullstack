import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const StyledAside = styled.aside`
  position: sticky;
  top: 2em;
  align-self: start;
  height: calc(100vh - 4em);
  overflow: scroll;
`;

const StyledList = styled.ul`
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
`;

const SiteToc = () => (
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
      <StyledAside>
        <StyledList>
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
        </StyledList>
      </StyledAside>
    )}
  />
);

export default SiteToc;
