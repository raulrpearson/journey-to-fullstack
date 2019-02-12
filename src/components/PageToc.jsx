import React from 'react';
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
  a {
    text-decoration: none;
    color: gray;
  }
  a:hover {
    filter: brightness(50%);
  }
`;

const PageToc = ({ headings }) => (
  <StyledAside>
    <h4>IN THIS ARTICLE</h4>
    <StyledList>
      {headings.map(h => (
        <li key={h.url}>
          <a href={h.url}>{h.title}</a>
        </li>
      ))}
    </StyledList>
  </StyledAside>
);

export default PageToc;
