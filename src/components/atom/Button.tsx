import styled from 'styled-components';

interface ButtonStyle {
  mode: string;
  margin?: string;
}

const MAIN = 'main';
const SOFT = 'soft';
const OUTLINE_RED = 'outlineRed';
const OUTLINE_GRAY = 'outlineGray';
const TEXT = 'text';

export const LargeButton = styled.button<ButtonStyle>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4.5rem; //72px
  padding: 1.5rem 2rem;
  margin: ${(props) => props.margin};
  border: ${(props) =>
    props.mode === OUTLINE_RED
      ? `1px solid ${props.theme.color.red500}`
      : props.mode === OUTLINE_GRAY
      ? `1px solid ${props.theme.color.black300}`
      : 'none'};
  border-radius: 12px;
  background: ${(props) =>
    props.mode === MAIN
      ? props.theme.color.red500
      : props.mode === SOFT
      ? props.theme.color.red50
      : props.theme.color.black0};
  color: ${(props) =>
    props.mode === MAIN
      ? props.theme.color.black0
      : [OUTLINE_GRAY, TEXT].includes(props.mode)
      ? props.theme.color.black600
      : props.theme.color.red500};
  font-size: 1.25rem; //20px
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;

  &:disabled {
    background: ${(props) =>
      props.mode === OUTLINE_GRAY ? props.theme.color.black200 : props.theme.color.black200};
    border: ${(props) =>
      [OUTLINE_GRAY, OUTLINE_RED].includes(props.mode)
        ? `1px solid ${props.theme.color.black200}`
        : 'none'};
    color: ${(props) => props.theme.color.black200};
    cursor: not-allowed;
  }

  @media ${(props) => props.theme.mediaSize.Tablet} {
    &:hover {
      background: ${(props) =>
        props.mode === MAIN
          ? props.theme.color.red600
          : props.mode === SOFT
          ? props.theme.color.red100
          : props.mode === OUTLINE_RED
          ? props.theme.color.red50
          : props.theme.color.black50};
    }
  }
`;

export const MediumButton = styled(LargeButton)`
  height: 3.188rem;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
`;

export const SmallButton = styled(LargeButton)`
  height: 2.063rem;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
`;
