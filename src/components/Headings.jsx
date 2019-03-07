import React from 'react';
import { FaLink } from 'react-icons/fa';
import kebabCase from 'lodash.kebabcase';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const baseHeadingStyle = css`
  position: relative;
  &:hover > a > svg {
    visibility: visible;
  }

  a:hover > svg {
    visibility: visible;
  }
`;

const StyledAnchor = styled.a`
  font-size: 0.5em;
  padding: 0.5em 1em 0.5em 0.5em;
  color: currentColor;
  position: absolute;
  left: -1.8em;

  & > svg {
    visibility: hidden;
  }
`;

const H1 = props => {
  return (
    <h1 css={baseHeadingStyle} id={kebabCase(props.children)}>
      <StyledAnchor href={`#${kebabCase(props.children)}`}>
        <FaLink />
      </StyledAnchor>
      {props.children}
    </h1>
  );
};

const H2 = props => {
  return (
    <h2 css={baseHeadingStyle} id={kebabCase(props.children)}>
      <StyledAnchor href={`#${kebabCase(props.children)}`}>
        <FaLink />
      </StyledAnchor>
      {props.children}
    </h2>
  );
};

const H3 = props => {
  return (
    <h3 css={baseHeadingStyle} id={kebabCase(props.children)}>
      <StyledAnchor href={`#${kebabCase(props.children)}`}>
        <FaLink />
      </StyledAnchor>
      {props.children}
    </h3>
  );
};

const H4 = props => {
  return (
    <h4 css={baseHeadingStyle} id={kebabCase(props.children)}>
      <StyledAnchor href={`#${kebabCase(props.children)}`}>
        <FaLink />
      </StyledAnchor>
      {props.children}
    </h4>
  );
};

// const MyParagraph = props => <p style={{ fontSize: '18px', lineHeight: 1.6 }} />

const headings = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4
};

export default headings;
