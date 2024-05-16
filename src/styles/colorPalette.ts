import { css } from '@emotion/react';

export const colorPalette = css`
  :root {
    --redSalon300: #f98686;
    --redSalon400: #f56060;
    --redSalon500: #fb4846;
    --redSalon600: #d83f3e;
    --redSalon700: #b83130;
    --redSalon800: #961d1c;
    --blackSalon0: #ffffff;
    --blackSalon50: #faf8f8;
    --blackSalon100: #e8e8e8;
    --blackSalon200: #c4c4c4;
    --blackSalon300: #878585;
    --blackSalon400: #645f5f;
    --blackSalon500: #302c2c;
    --blackSalon600: #1b1717;
    --error50: #fff7ef;
    --error500: #f0790b;
    --subBlue50: #f1f3ff;
    --subBlue400: #5166d3;
  }
`;

export const colors = {
  redSalon300: 'var(--redSalon300)',
  redSalon400: 'var(--redSalon400)',
  redSalon500: 'var(--redSalon500)',
  redSalon600: 'var(--redSalon600)',
  redSalon700: 'var(--redSalon700)',
  redSalon800: 'var(--redSalon800)',
  blackSalon0: 'var(--blackSalon0)',
  blackSalon50: 'var(--blackSalon50)',
  blackSalon100: 'var(--blackSalon100)',
  blackSalon200: 'var(--blackSalon200)',
  blackSalon300: 'var(--blackSalon300)',
  blackSalon400: 'var(--blackSalon400)',
  blackSalon500: 'var(--blackSalon500)',
  blackSalon600: 'var(--blackSalon600)',
  error50: 'var(--error50)',
  error500: 'var(--error500)',
  subBlue50: 'var(--subBlue50)',
  subBlue400: 'var(--subBlue400)',
};

export type Colors = keyof typeof colors;
