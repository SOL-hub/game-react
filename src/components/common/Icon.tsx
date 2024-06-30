import React from 'react';
import styled from 'styled-components';
import { getIconSVGPath, ICON_NAME_TYPE, ICON_NAME } from '../../styles/iconStyle';

export const ICON_TYPE = ICON_NAME;
export interface IconProps {
  iconName: ICON_NAME_TYPE;
  size?: number;
  color?: string;
  onClick?: () => void;
  margin?: string;
}

export const Icon = ({ iconName, size = 24, color = 'blackSalon600' }: IconProps) => {
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
  color = 'blackSalon600',
  onClick,
  margin,
}: IconProps) => {
  return (
    <IconButtonBox margin={margin} onClick={onClick}>
      <Icon iconName={iconName} size={size} color={color} />
    </IconButtonBox>
  );
};

type boxType = {
  margin?: string;
};

const IconButtonBox = styled.div<boxType>`
  margin: ${(props) => props.margin};
  cursor: pointer;
`;
