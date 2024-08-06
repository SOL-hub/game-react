import React from 'react';
import styled from 'styled-components';
import { getIconSVGPath, ICON_NAME_TYPE, ICON_NAME } from '../../styles/iconStyle';

export const ICON_TYPE = ICON_NAME;
export interface IconProps {
  iconName: ICON_NAME_TYPE;
  size?: number;
  color?: string;
  margin?: string;
  lineHeight?: string;
  onClick?: () => void;
}

export const Icon = ({ iconName, size = 24, color = 'black600' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {getIconSVGPath({ iconName, color })}
    </svg>
  );
};

export const IconButton = ({
  iconName,
  size = 24,
  color = 'black600',
  margin,
  lineHeight,
  onClick,
}: IconProps) => {
  return (
    <IconButtonBox margin={margin} lineHeight={lineHeight} onClick={onClick}>
      <Icon iconName={iconName} size={size} color={color} />
    </IconButtonBox>
  );
};

type boxType = {
  margin?: string;
  lineHeight?: string;
};

const IconButtonBox = styled.div<boxType>`
  margin: ${(props) => props.margin};
  line-height: ${(props) => props.lineHeight || 0};
  cursor: pointer;
`;
