import React from 'react';
import { Flex } from 'components/common/Layout';
import { InputCheckbox } from 'components/common/InputCheckbox';
import { color } from 'styles/ThemeStyle';
import { Text } from 'components/common/Typo';

interface CheckboxProps {
  id?: string;
  label?: string;
  checked?: boolean;
  secondary?: boolean;
  size?: 14 | 16;
  margin?: string;
  onChange?: (e: any) => void;
}

export const Checkbox = ({
  id = '',
  label,
  checked,
  onChange = () => {},
  secondary = false,
  size = 16,
  margin,
}: CheckboxProps) => {
  return (
    <Flex alignItems="center" margin={margin}>
      <InputCheckbox
        type="checkbox"
        id={id}
        size={size}
        selectedColor={secondary ? 'black600' : 'red500'}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>
        <Text margin="0.15rem 0 0 0.25rem" size={size} color={`black${checked ? 6 : 4}00`}>
          {label}
        </Text>
      </label>
    </Flex>
  );
};
