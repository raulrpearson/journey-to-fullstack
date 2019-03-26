import React from 'react';
import styled from '@emotion/styled';

const StyledAside = styled.aside`
  position: sticky;
  top: 0;
  align-self: start;
  height: 100vh;
  overflow: scroll;
`;

const StyledList = styled.ul`
  font-family: 'Avenir Next';
  list-style-type: none;
  padding-left: 0;
  margin-left: 0;
  a {
    text-decoration: none;
    color: gray;
  }
  a:hover {
    filter: brightness(50%);
  }
`;

const PageToc = ({ headings }) => (
  <StyledAside id="page-toc">
    <h4>IN THIS ARTICLE</h4>
    <StyledList>
      {headings
        .filter(h => h.depth == 2)
        .map(h => (
          <li key={h.url}>
            <a href={h.url}>{h.title}</a>
          </li>
        ))}
    </StyledList>
  </StyledAside>
);

export default PageToc;
