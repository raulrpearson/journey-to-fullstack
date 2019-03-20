import React from 'react';
import { css } from '@emotion/core';

const colorsDictionary = {
  javascript: {
    color: 'inherit',
    backgroundColor: '#f5de19'
  },
  css: {
    color: 'white',
    backgroundColor: '#2965f1'
  },
  html: {
    color: 'white',
    backgroundColor: '#f16529'
  },
  jsx: {
    color: 'inherit',
    backgroundColor: '#00d8ff'
  },
  shell: {
    color: 'inherit',
    backgroundColor: '#dddddd'
  },
  default: {
    color: 'inherit',
    backgroundColor: '#829ec2'
  }
};

const colors = language =>
  colorsDictionary[language] || colorsDictionary['default'];

const CodeTag = ({ language }) => (
  <span
    css={css`
      position: absolute;
      right: 20px;
      background-color: ${colors(language).backgroundColor};
      color: ${colors(language).color};
      font-size: 0.7em;
      padding: 0 5px;
      text-transform: uppercase;
      border-radius: 0 0 5px 5px;
      filter: opacity(85%);
    `}
  >
    {language}
  </span>
);

export default CodeTag;
