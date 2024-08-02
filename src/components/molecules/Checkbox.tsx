import React from 'react';
import { Flex } from 'components/common/Layout';
import { InputCheckbox } from 'components/common/InputCheckbox';
import { color } from 'styles/ThemeStyle';

interface CheckboxProps {
  id?: string;
  label?: string;
  secondary?: boolean;
  size?: 14 | 16;
  margin?: string;
  onChange?: (e: any) => void;
}

export const Checkbox = ({
  id,
  label,
  secondary = false,
  size = 16,
  margin,
  onChange = () => {},
}: CheckboxProps) => {
  return (
    <Flex alignItems="center" margin={margin}>
      <InputCheckbox
        type="checkbox"
        id={id}
        size={size}
        defaultColor={color.blackSalon200}
        selectedColor={secondary ? color.blackSalon600 : color.redSalon500}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </Flex>
  );
};
