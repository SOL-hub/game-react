import { DefaultLayout, MainLayout, Row } from '../components/common/Layout';
import { LargeButton, MediumButton, SmallButton } from '../components/common/Button';
import { HeaderWithTitle } from '../components/common/Bar';
import { css } from '@emotion/react';
import BSText from '../components/common/BSText';
import BSButton from '../components/common/BSButton';
import BSInput from '../components/common/BSInput';
import BSTextField from '../components/common/BSTextField';
import BSAlert from '../components/common/BSAlert';
import BSTop from '../components/common/BSTop';
import { getCards } from '../remote/card';
import { useEffect } from 'react';

const containerStyles = css`
  background-color: pink;
`;

const Home = () => {
  useEffect(() => {
    getCards();
  }, []);
  return (
    <DefaultLayout>
      <HeaderWithTitle title="해더" />
      <MainLayout background="redSalon50">
        <BSTop title="test" subTitle="testtest" />
        버튼 컴포넌트
        {['main', 'soft', 'outlineRed', 'outlineGray', 'text'].map((mode, idx) => (
          <Row margin="2rem 0" key={idx}>
            <LargeButton mode={mode} margin="0.5rem">
              Large {mode}
            </LargeButton>
            <MediumButton mode={mode} margin="0.5rem">
              Medium {mode}
            </MediumButton>
            <SmallButton mode={mode} margin="0.5rem">
              Small {mode}
            </SmallButton>
          </Row>
        ))}
        <BSButton full={true}>test</BSButton>
        <div css={containerStyles}>test</div>
        Text 컴포넌트
        <BSText typography="t2" display="block">
          테스트테스트
        </BSText>
        버튼 컴포넌트 Disabled
        {['main', 'soft', 'outlineRed', 'outlineGray', 'text'].map((mode, idx) => (
          <Row margin="2rem 0" key={idx}>
            <LargeButton mode={mode} margin="0.5rem" disabled>
              Large {mode}
            </LargeButton>
            <MediumButton mode={mode} margin="0.5rem" disabled>
              Medium {mode}
            </MediumButton>
            <SmallButton mode={mode} margin="0.5rem" disabled>
              Small {mode}
            </SmallButton>
          </Row>
        ))}
        <BSInput placeholder="test" aria-invalid={true} />
        <BSInput placeholder="test" aria-invalid={false} />
        <BSTextField label="아이디" />
        <BSTextField label="비밀번호" hasError={true} />
      </MainLayout>

      {/* <BSAlert isOpen={true} content="test" title="testtest" onBtnClick={() => {}} /> */}
    </DefaultLayout>
  );
};

export default Home;
