import styled from 'styled-components';

interface InputStyle {
  mode: string;
  iconType: string;
  isError?: boolean;
}

export const INPUT_MODE = {
  large: 'large',
  medium: 'medium',
};

const setSize = (size, large, medium, defaultValue) =>
  size === INPUT_MODE.large ? large : size === INPUT_MODE.medium ? medium : defaultValue;

export const INPUT_ICON_TYPE = {
  noIcon: 'noIcon',
  trailingIcon: 'trailingIcon',
  leadingTrailingIcon: 'leadingTrailingIcon',
};

const setPadding = (mode, iconType) => {
  const { noIcon, trailingIcon, leadingTrailingIcon } = INPUT_ICON_TYPE;
  const { large, medium } = INPUT_MODE;

  switch (iconType) {
    case noIcon:
      return mode === large ? '0.875rem 0.75rem' : mode === medium ? '0.625rem 0.75rem' : 0;
    case trailingIcon:
      return mode === large
        ? '0.875rem 2.25rem 0.875rem 0.75rem'
        : mode === medium
        ? '0.625rem 2.25rem 0.625rem 0.75rem'
        : 0;
    case leadingTrailingIcon:
      return mode === large
        ? '0.875rem 2.25rem 0.875rem 2.625rem'
        : mode === medium
        ? '0.625rem 2.25rem 0.625rem 2.625rem'
        : 0;
    default:
      return 0;
  }
};

export const Input = styled.input<InputStyle>`
  width: 100%;
  height: ${(props) => setSize(props.mode, '3.25rem', '2.75rem', '100%')};
  padding: ${(props) => setPadding(props.mode, setPadding)};
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
    border-color: ${(props) => props.theme.color.redSalon300};
    outline: none;
  }
  &:disabled {
    background: ${(props) => props.theme.color.blackSalon50};
  }
`;
