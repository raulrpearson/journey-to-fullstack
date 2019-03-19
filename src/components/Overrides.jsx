import React from 'react';
import { FaLink, FaQuoteRight } from 'react-icons/fa';
import kebabCase from 'lodash.kebabcase';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Highlight, { defaultProps } from 'prism-react-renderer';
import duotoneLight from 'prism-react-renderer/themes/duotoneLight';

const baseHeadingStyle = css`
  position: relative;
  &:hover > a > svg {
    visibility: visible;
  }
  a:hover > svg {
    visibility: visible;
  }
  @media (hover: none) {
    a > svg {
      visibility: visible;
    }
  }
`;

const StyledAnchor = styled.a`
  font-size: 0.8rem;
  padding: 0.5em 1em 0.5em 0.5em;
  color: currentColor;
  position: absolute;
  left: -1.3rem;

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

const BQ = props => (
  <blockquote
    css={css`
      background-color: #f2f2f2;
      padding: 1.3em;
      border-radius: 5px;
      position: relative;
      --margin: 0;
      @media (min-width: 630px) {
        --margin: calc(32 * ((100vw - 630px) / (800 - 630)));
      }
      @media (min-width: 800px) {
        --margin: 32px;
      }
      margin-right: var(--margin);
      margin-left: var(--margin);
    `}
  >
    <FaQuoteRight
      css={css`
        color: #808080;
        position: absolute;
        top: -0.5em;
        left: -0.5em;
      `}
      size="1.8em"
    />
    {props.children}
  </blockquote>
);

const Code = ({ children, className }) => {
  const language = className.replace(/language-/, '');
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={{ ...duotoneLight, plain: { backgroundColor: '#f2f2f2' } }}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, padding: '20px', fontFamily: 'Inconsolata' }}
        >
          {tokens.map((line, i) => {
            if (i < tokens.length - 1)
              return (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              );
          })}
        </pre>
      )}
    </Highlight>
  );
};

const overrides = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  blockquote: BQ,
  pre: props => <div {...props} />,
  code: Code
};

export default overrides;
