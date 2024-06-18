import { css } from '@emotion/react';

/* 18 이상 Head
18 미만 Text
12 이하 Caption
행간이 있는 경우 Body
*/

export const typographyMap = {
  HeadBold20: css`
    font-size: 20px;
    line-height: 23.87;
    font-weight: 700;
  `,
  HeadRegular20: css`
    font-size: 20;
    line-height: 28.77;
    font-weight: 400;
  `,
  HeadRegular18: css`
    font-size: 18px;
    line-height: 21.48;
    font-weight: 400;
  `,
  HeadBold18: css`
    font-size: 18;
    line-height: 21.48;
    font-weight: 700;
  `,
  TextBold16: css`
    font-size: 16px;
    line-height: 19.09;
    font-weight: 700;
  `,
  TextRegular16: css`
    font-size: 16px;
    line-height: 19.09;
  `,
  TextBold14: css`
    font-size: 14px;
    line-height: 16.71;
    font-weight: 700;
  `,
  TextRegular14: css`
    font-size: 14px;
    line-height: 16.71;
  `,
  CaptionRegular12: css`
    font-size: 12px;
    line-height: 19.48;
    font-weight: 400;
  `,
  CaptionBold12: css`
    font-size: 12px;
    line-height: 19.48;
    font-weight: 700;
  `,
};

export type Typography = keyof typeof typographyMap;
