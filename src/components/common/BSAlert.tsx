import { colors } from '../../styles/colorPalette';

import styled from '@emotion/styled';

import BSText from './BSText';
import BSDimmed from './BSDimmed';
import BSFlex from './BSFlex';
import BSButton from './BSButton';

interface AlertProps {
  isOpen?: boolean;
  title: React.ReactNode;
  content?: React.ReactNode;
  buttonLabel?: string;
  onBtnClick: () => void;
}

function BSAlert({ isOpen, title, content, buttonLabel = '확인', onBtnClick }: AlertProps) {
  if (isOpen === false) {
    return null;
  }

  return (
    <BSDimmed>
      <AlertContainer>
        <BSText
          color="blackSalon500"
          typography="t4"
          bold={true}
          display="block"
          style={{ marginBottom: 6 }}
        >
          {title}
        </BSText>
        {content ? (
          <BSText typography="t7" color="blackSalon400">
            {content}
          </BSText>
        ) : null}
        <BSFlex justify="flex-end">
          <BSButton onClick={onBtnClick} weak={true} style={{ marginTop: 12, border: 'none' }}>
            {buttonLabel}
          </BSButton>
          <BSButton onClick={onBtnClick} weak={true} style={{ marginTop: 12, border: 'none' }}>
            {buttonLabel}
          </BSButton>
        </BSFlex>
      </AlertContainer>
    </BSDimmed>
  );
}

const AlertContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.redSalon600};
  border-radius: 8px;
  overflow: hidden;
  z-index: var(--alert-zindex);
  width: 320px;
  padding: 24px;
  box-sizing: border-box;
`;

export default BSAlert;
