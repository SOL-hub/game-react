import { colors } from '../../styles/colorPalette';

import styled from '@emotion/styled';

const BSInput = styled.input`
  padding: 0 16px;
  font-size: 15px;
  height: 48px;
  font-weight: 500;
  border: 1px solid ${colors.whiteSalon0};
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: ${colors.blackSalon400};
  }

  &[aria-invalid='true'] {
    border-color: ${colors.error500};
  }
`;

export default BSInput;
