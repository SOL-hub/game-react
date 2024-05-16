import React from 'react';
import styled from 'styled-components';

// export const ICON_TYPE = ICON_NAME;

export interface IconProps {
  // iconName: ICON_NAME_TYPE;
  size?: number;
  color?: string;
  onClick?: () => void;
  margin?: string;
}

export const icon = ({ size = 24, color = 'blackSalon600' }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* {getIconSVGPath({ iconName, color })} */}
    </svg>
  );
};
