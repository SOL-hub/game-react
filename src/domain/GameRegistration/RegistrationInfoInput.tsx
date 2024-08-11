import React from 'react';
import RegistrationInfo, { RegistrattionInfoProps } from './RegistrationInfo';
import { DefaultInput, INPUT_MODE } from 'components/atom/Input';

interface InputProps extends RegistrattionInfoProps {
  inputData: {
    type?: string;
    placeholder?: string;
    value?: string | number;
    onChange?: (e: any) => void;
    isError?: boolean;
    errorMsg?: string;
  };
}

const RegistrationInfoInput = ({ title, children, inputData }: InputProps) => {
  const { type, placeholder, value, isError, errorMsg, onChange } = inputData;

  return (
    <RegistrationInfo title={title}>
      <DefaultInput
        mode={INPUT_MODE.large}
        type={type}
        placeholder={placeholder}
        value={value}
        isError={isError}
        errorMsg={errorMsg}
        onChange={onChange}
      />
      {children}
    </RegistrationInfo>
  );
};

export default RegistrationInfoInput;
