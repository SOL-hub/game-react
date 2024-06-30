import { css } from '@emotion/react';
import { colors } from './colorPalette';

export const buttonColorMap = {
  primary: css`
    background-color: ${colors.blackSalon300};
    color: ${colors.blackSalon500};
  `,
  success: css`
    background-color: ${colors.subBlue400};
    color: ${colors.blackSalon100};
  `,
  error: css`
    background-color: ${colors.error50};
    color: ${colors.error500};
  `,
};

export const buttonWeakMap = {
  primary: css`
    background-color: ${colors.blackSalon300};
    color: ${colors.error500};
    border: 1px solid ${colors.blackSalon200};
  `,
  success: css`
    background-color: ${colors.blackSalon300};
    color: ${colors.blackSalon200};
    border: 1px solid ${colors.blackSalon200};
  `,
  error: css`
    background-color: ${colors.blackSalon300};
    color: ${colors.blackSalon100};
    border: 1px solid ${colors.blackSalon100};
  `,
};

export const buttonSizeMap = {
  small: css`
    font-size: 13px;
    padding: 8px 9px;
  `,
  medium: css`
    font-size: 15px;
    padding: 10px 15px;
  `,
  large: css`
    font-size: 18px;
    padding: 12px 10px;
  `,
};

export type ButtonColor = keyof typeof buttonColorMap;
export type ButtonSize = keyof typeof buttonSizeMap;
