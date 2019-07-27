import { css } from 'styled-components';

const size = {
  xxs: 375,
  xs: 414,
  s: 576,
  m: 769,
  l: 992,
  extra: 1080,
  xl: 1200,
  xxl: 1366,
};

export const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
