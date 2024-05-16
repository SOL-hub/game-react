import { DefaultLayout, MainLayout, Row } from '../components/common/Layout';
import { LargeButton, MediumButton, SmallButton } from '../components/common/Button';
import { HeaderWithTitle } from '../components/common/Bar';
const Home = () => {
  return (
    <DefaultLayout>
      <HeaderWithTitle title="해더" />
      <MainLayout background="redSalon50">
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
      </MainLayout>
    </DefaultLayout>
  );
};

export default Home;
