import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex } from 'components/atom/Layout';
import { Icon, ICON_TYPE } from 'components/atom/Icon';
import { CaptionRegular12 } from 'components/atom/Typo';

export interface InputProps {
  mode?: string;
  iconType?: string;
  width?: string;
  padding?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string | number;
  isError?: boolean;
  errorMsg?: string;
  onChange?: (e: any) => void;
  onKeyPress?: (e: any) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  leadingOnClick?: () => void;
  trailingOnClick?: () => void;
}

export const INPUT_MODE = {
  large: 'large',
  medium: 'medium',
};

export const INPUT_ICON_TYPE = {
  noIcon: 'noIcon',
  trailingIcon: 'trailingIcon',
  leadingTrailingIcon: 'leadingTrailingIcon',
};

const setSize = (mode, large, medium, defaultValue) =>
  mode === INPUT_MODE.large ? large : mode === INPUT_MODE.medium ? medium : defaultValue;

const setPadding = (mode, iconType = INPUT_ICON_TYPE.noIcon) => {
  switch (iconType) {
    case INPUT_ICON_TYPE.noIcon:
      return setSize(mode, '0.875rem 0.75rem', '0.625rem 0.75rem', 0);
    case INPUT_ICON_TYPE.trailingIcon:
      return setSize(
        mode,
        '0.875rem 2.25rem 0.875rem 0.75rem',
        '0.625rem 2.25rem 0.625rem 0.75rem',
        0,
      );
    case INPUT_ICON_TYPE.leadingTrailingIcon:
      return setSize(
        mode,
        '0.875rem 2.25rem 0.875rem 2.625rem',
        '0.625rem 2.25rem 0.625rem 2.625rem',
        0,
      );
    default:
      return 0;
  }
};

export const Input = styled.input<InputProps>`
  width: 100%;
  height: ${(props) => setSize(props.mode, '3.25rem', '2.75rem', '100%')};
  padding: ${(props) => setPadding(props.mode, props.iconType)};
  border: ${(props) =>
    `1px solid ${
      props.isError
        ? props.theme.color.error500
        : // : props.value !== ''
          // ? props.theme.color.red300 // 일단 주석처리
          props.theme.color.black100
    }`};
  border-radius: 0.5rem;
  color: ${(props) => props.theme.color.black600};
  font-size: ${(props) => setSize(props.mode, '1rem', '0.875rem', 'inherit')};
  font-weight: 400;
  letter-spacing: -0.3px;
  -moz-appearance: textfield;

  &::placeholder {
    color: ${(props) => props.theme.color.black200};
    font-weight: 400;
    letter-spacing: -0.3px;
  }

  &:focus {
    border-color: ${(props) =>
      props.isError ? props.theme.color.error500 : props.theme.color.red300};
    outline: none;
  }

  &:disabled {
    background: ${(props) => props.theme.color.black50};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const DefaultInput = ({
  mode,
  iconType = INPUT_ICON_TYPE.noIcon,
  name = '',
  type = 'text',
  placeholder = '',
  value = '',
  isError = false,
  errorMsg = '',
  onFocus = undefined,
  onBlur = undefined,
  onChange = undefined,
  onKeyPress = undefined,
}: InputProps) => {
  return (
    <>
      <Input
        mode={mode}
        iconType={iconType}
        isError={isError}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onFocus={onFocus && onFocus}
        onBlur={onBlur && onBlur}
        onChange={onChange && onChange}
        onKeyPress={onKeyPress && onKeyPress}
      />
      {isError && <ErrorMessage>{errorMsg}</ErrorMessage>}
    </>
  );
};

export const IconInput = ({
  mode,
  iconType,
  width,
  type,
  placeholder,
  value,
  isError,
  errorMsg,
  onChange,
  onKeyPress,
  leadingOnClick = () => {},
  trailingOnClick = () => {},
}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const doSetIconColor = (color) =>
    isFocus || value !== '' ? 'red300' : isError ? 'error500' : color;

  const isLeadingTrailing = iconType === INPUT_ICON_TYPE.leadingTrailingIcon;

  return (
    <Flex style={{ position: 'relative' }} width={width}>
      {isLeadingTrailing && (
        <LeadingIcon mode={mode}>
          <Icon
            iconName={ICON_TYPE.search}
            color={doSetIconColor('black200')}
            onClick={() => {
              leadingOnClick();
              setIsFocus(true);
            }}
          />
        </LeadingIcon>
      )}
      <TrailingIcon mode={mode}>
        <Icon
          iconName={isLeadingTrailing ? ICON_TYPE.closeCircle : ICON_TYPE.arrowV2Right}
          color={doSetIconColor('black100')}
          onClick={() => {
            trailingOnClick();
            setIsFocus(false);
          }}
        />
      </TrailingIcon>
      <DefaultInput
        mode={mode}
        iconType={iconType}
        type={type}
        placeholder={placeholder}
        value={value}
        isError={isError}
        errorMsg={errorMsg}
        onFocus={() => !isError && setIsFocus(true)}
        onBlur={() => !isError && setIsFocus(false)}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </Flex>
  );
};

export const ErrorMessage = styled(CaptionRegular12)`
  margin: 0.5rem 0 0;
  color: ${({ theme }) => theme.color.error500};
  text-align: end;
`;

const LeadingIcon = styled.div<InputProps>`
  position: absolute;
  top: ${(props) => setSize(props.mode, '0.875rem', '0.625rem', 0)};
  left: 0.75rem;
`;

const TrailingIcon = styled.div<InputProps>`
  position: absolute;
  top: ${(props) => setSize(props.mode, '0.875rem', '0.625rem', 0)};
  right: 0.75rem;
`;
