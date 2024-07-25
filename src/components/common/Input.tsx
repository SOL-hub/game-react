import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon, ICON_TYPE } from 'components/common/Icon';
import { CaptionRegular12 } from './Typo';

interface InputStyle {
  mode: string;
  iconType?: string;
  isError?: boolean;
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

export const Input = styled.input<InputStyle>`
  width: 100%;
  height: ${(props) => setSize(props.mode, '3.25rem', '2.75rem', '100%')};
  padding: ${(props) => setPadding(props.mode, props.iconType)};
  border: ${(props) =>
    `1px solid ${props.isError ? props.theme.color.error500 : props.theme.color.blackSalon100}`};
  border-radius: 0.5rem;
  color: ${(props) => props.theme.color.blackSalon600};
  font-size: ${(props) => setSize(props.mode, '1rem', '0.875rem', 'inherit')};
  font-weight: 400;
  letter-spacing: -0.3px;
  &::placeholder {
    color: ${(props) => props.theme.color.blackSalon200};
  }
  &:focus {
    border-color: ${(props) =>
      props.isError ? props.theme.color.error500 : props.theme.color.redSalon300};
    outline: none;
  }
  &:disabled {
    background: ${(props) => props.theme.color.blackSalon50};
  }
`;

export const DefaultInput = ({
  mode,
  isError = false,
  errorMsg = '',
  iconType = INPUT_ICON_TYPE.noIcon,
  onFocus = () => {},
  onBlur = () => {},
}) => {
  return (
    <>
      <Input mode={mode} isError={isError} iconType={iconType} onFocus={onFocus} onBlur={onBlur} />
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
  isError = false,
  errorMsg = '',
  iconType,
  trailingOnClick = () => {},
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const setIconColor = (color) => (isFocus ? 'redSalon300' : isError ? 'error500' : color);
  const isLeadingTrailing = iconType === INPUT_ICON_TYPE.leadingTrailingIcon;

  return (
    <InputBox>
      {isLeadingTrailing && (
        <LeadingIcon mode={mode}>
          <Icon iconName={ICON_TYPE.search} color={setIconColor('blackSalon200')} />
        </LeadingIcon>
      )}
      <LeadingIcon mode={mode}>
        <Icon
          iconName={isLeadingTrailing ? ICON_TYPE.closeCircle : ICON_TYPE.arrowV2Right}
          color={setIconColor('blackSalon100')}
          onClick={trailingOnClick}
        />
      </LeadingIcon>
      <TrailingIcon mode={mode}>
        <Icon iconName={ICON_TYPE.closeCircle} color={setIconColor('blackSalon100')} />
      </TrailingIcon>
      <DefaultInput
        mode={mode}
        isError={isError}
        errorMsg={errorMsg}
        iconType={iconType}
        onFocus={() => !isError && setIsFocus(true)}
        onBlur={() => !isError && setIsFocus(false)}
      />
    </InputBox>
  );
};

const InputBox = styled.div`
  position: relative;
`;

const LeadingIcon = styled.div<InputStyle>`
  position: absolute;
  top: ${(props) => setSize(props.mode, '0.875rem', '0.625rem', 0)};
  left: 0.75rem;
`;

const TrailingIcon = styled.div<InputStyle>`
  position: absolute;
  top: ${(props) => setSize(props.mode, '0.875rem', '0.625rem', 0)};
  right: 0.75rem;
`;
