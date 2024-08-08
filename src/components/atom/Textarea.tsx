import React from 'react';
import styled from 'styled-components';
import { InputProps, ErrorMessage } from './Input';

interface TextareaProps extends InputProps {
  maxLength?: number;
  style?: any;
}

export const Textarea = styled.textarea<TextareaProps>`
  {...style}
  width: 100%;
  height: 12.5rem;
  padding: ${({ padding }) => padding || '0.75rem'};
  border: ${({ isError, theme, value }) =>
    `1px solid ${
      isError ? theme.color.error500 : value !== '' ? theme.color.red300 : theme.color.black100
    }`};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.color.black600};
  font-size:${({ theme }) => theme.fontSize[16]}
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.3px;
  resize: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.black200};
    font-size:${({ theme }) => theme.fontSize[16]};
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.3px;
  }
  &:focus {
    border-color: ${({ isError, theme }) => (isError ? theme.color.error500 : theme.color.red300)};
    outline: none;
  }
  &:disabled {
    background: ${({ theme }) => theme.color.black50};
  }
`;

export const DefaultTextarea = ({
  name = '',
  placeholder = '',
  maxLength = undefined,
  value = '',
  isError = false,
  errorMsg = '',
  onFocus = undefined,
  onBlur = undefined,
  onChange = undefined,
  style = {},
}: TextareaProps) => {
  return (
    <>
      <Textarea
        name={name}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
        isError={isError}
        style={style}
        onFocus={onFocus && onFocus}
        onBlur={onBlur && onBlur}
        onChange={onChange && onChange}
      />
      {isError && <ErrorMessage>{errorMsg}</ErrorMessage>}
    </>
  );
};
