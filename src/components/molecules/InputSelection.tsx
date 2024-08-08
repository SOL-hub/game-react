import React from 'react';
import { Flex } from 'components/atom/Layout';
import { InputCheckbox } from 'components/atom/InputCheckbox';
import { InputRadio } from 'components/atom/InputRadio';
import { Text } from 'components/atom/Typo';

interface CheckboxProps {
  id: string;
  label: string;
  name?: string;
  checked?: boolean;
  onChange?: (e: any) => void;
  secondary?: boolean;
  size?: 14 | 16;
  margin?: string;
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

interface SelectionProps {
  inputType: string;
  id: string;
  label: string;
  name?: string;
  checked?: boolean;
  onChange?: (e: any) => void;
  secondary?: boolean;
  size?: 14 | 16;
  margin?: string;
}

export const INPUT_TYPE = { checkbox: 'checkbox', radio: 'radio' };

export const InputSelection = ({
  inputType,
  id = '',
  name = '',
  label = '',
  checked = false,
  onChange = () => {},
  secondary = false,
  size = 16,
  margin,
}: SelectionProps) => {
  return (
    <Flex alignItems="center" margin={margin}>
      {inputType === INPUT_TYPE.checkbox && (
        <InputCheckbox
          type={INPUT_TYPE.checkbox}
          id={id}
          size={size}
          selectedColor={secondary ? 'black600' : 'red500'}
          checked={checked}
          onChange={onChange}
        />
      )}
      {inputType === INPUT_TYPE.radio && (
        <InputRadio
          type={INPUT_TYPE.radio}
          id={id}
          name={name}
          size={size}
          selectedColor={secondary ? 'black600' : 'red500'}
          checked={checked}
          onChange={onChange}
        />
      )}
      <label htmlFor={id}>
        <Text margin="0.15rem 0 0 0.25rem" size={size} color={`black${checked ? 6 : 3}00`}>
          {label}
        </Text>
      </label>
    </Flex>
  );
};
