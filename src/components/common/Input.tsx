import React, { useState } from 'react';
import styled from 'styled-components';
import { Flex } from 'components/common/Layout';
import { Icon, IconButton, ICON_TYPE } from 'components/common/Icon';
import { CaptionRegular12 } from './Typo';

interface InputProps {
  mode: string;
  iconType?: string;
  isError?: boolean;
  errorMsg?: string;
  width?: string;
  padding?: string;
  placeholder?: string;
  value?: any;
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
        : props.value !== ''
        ? props.theme.color.red300
        : props.theme.color.black100
    }`};
  border-radius: 0.5rem;
  color: ${(props) => props.theme.color.black600};
  font-size: ${(props) => setSize(props.mode, '1rem', '0.875rem', 'inherit')};
  font-weight: 400;
  letter-spacing: -0.3px;
  &::placeholder {
    color: ${(props) => props.theme.color.black200};
  }
  &:focus {
    border-color: ${(props) =>
      props.isError ? props.theme.color.error500 : props.theme.color.red300};
    outline: none;
  }
  &:disabled {
    background: ${(props) => props.theme.color.black50};
  }
`;

export const DefaultInput = ({
  mode,
  isError = false,
  errorMsg = '',
  iconType = INPUT_ICON_TYPE.noIcon,
  placeholder = '',
  value = '',
  onFocus = () => {},
  onBlur = () => {},
  onChange = () => {},
  onKeyPress = () => {},
}) => {
  return (
    <>
      <Input
        mode={mode}
        isError={isError}
        iconType={iconType}
        placeholder={placeholder}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      {isError && (
        <CaptionRegular12 margin="0.25rem 0 0" color="error500" textAlign="end">
          {errorMsg}
        </CaptionRegular12>
      )}
    </>
  );
};

export const IconInput = ({
  mode,
  isError,
  errorMsg,
  iconType,
  width,
  placeholder,
  value,
  onChange,
  onKeyPress,
  leadingOnClick = () => {},
  trailingOnClick = () => {},
}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);

  const doSetIconColor = (color) => (isFocus ? 'red300' : isError ? 'error500' : color);

  const isLeadingTrailing = iconType === INPUT_ICON_TYPE.leadingTrailingIcon;

  return (
    <Flex style={{ position: 'relative' }} width={width}>
      {isLeadingTrailing && (
        <LeadingIcon mode={mode}>
          <IconButton
            iconName={ICON_TYPE.search}
            color={doSetIconColor('black200')}
            onClick={() => leadingOnClick()}
          />
        </LeadingIcon>
      )}
      <LeadingIcon mode={mode}>
        <IconButton
          iconName={isLeadingTrailing ? ICON_TYPE.closeCircle : ICON_TYPE.arrowV2Right}
          color={doSetIconColor('black100')}
          onClick={() => trailingOnClick()}
        />
      </LeadingIcon>
      <TrailingIcon mode={mode}>
        <Icon iconName={ICON_TYPE.closeCircle} color={doSetIconColor('black100')} />
      </TrailingIcon>
      <DefaultInput
        mode={mode}
        isError={isError}
        errorMsg={errorMsg}
        iconType={iconType}
        onFocus={() => !isError && setIsFocus(true)}
        onBlur={() => !isError && setIsFocus(false)}
        placeholder={placeholder}
      />
    </Flex>
  );
};

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
