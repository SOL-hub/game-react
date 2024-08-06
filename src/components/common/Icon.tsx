import React from 'react';
import styled from 'styled-components';
import { getIconSVGPath, ICON_NAME_TYPE, ICON_NAME } from 'styles/iconStyle';
export const ICON_TYPE = ICON_NAME;
export interface IconProps {
  iconName: ICON_NAME_TYPE;
  size?: number;
  margin?: string;
  color?: string;
  lineHeight?: string;
  onClick?: () => void;
}

export const Icon = ({
  iconName,
  size = 24,
  margin,
  color = 'black600',
  lineHeight,
  onClick = undefined,
}: IconProps) => {
  return (
    <IconBox
      margin={margin}
      lineHeight={lineHeight}
      cursor={onClick && 'pointer'}
      onClick={onClick}
    >
      <svg
        width={size}
        height={size}
        viewBox={iconName === ICON_TYPE.player ? '0 0 20 20' : '0 0 24 24'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {getIconSVGPath({ iconName, color })}
      </svg>
    </IconBox>
  );
};

type BoxType = {
  margin?: string;
  lineHeight?: string;
  cursor?: string;
};

const IconBox = styled.div<BoxType>`
  margin: ${(props) => props.margin};
  line-height: ${(props) => props.lineHeight || 0};
  cursor: ${(props) => props.cursor};
`;
