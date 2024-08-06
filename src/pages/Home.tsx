import { useNavigate } from 'react-router-dom';
import { DefaultLayout, Layout, Flex } from '../components/common/Layout';
import { LargeButton, MediumButton, SmallButton } from '../components/common/Button';
import { HeaderWithTitle } from '../components/common/Bar';
import { Icon, IconButton, ICON_TYPE } from '../components/common/Icon';
import { css } from '@emotion/react';
import BSText from '../components/common/BSText';
import BSButton from '../components/common/BSButton';
import BSInput from '../components/common/BSInput';
import BSTextField from '../components/common/BSTextField';
import BSTop from '../components/common/BSTop';
import { getCards } from '../remote/card';
import { useEffect } from 'react';
import { Bedge, BedgeCertification, BedgeHashtag } from '../components/common/Bedge';
import { GreyTitleWithContents, TitleWithRedBedge } from '../components/template/TitleAndContents';
import {
  Input,
  DefaultInput,
  IconInput,
  INPUT_MODE,
  INPUT_ICON_TYPE,
} from 'components/common/Input';
import * as PATH from 'utils/path';

const containerStyles = css`
  background-color: pink;
`;

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    getCards();
  }, []);
  return (
    <DefaultLayout>
      <HeaderWithTitle title="해더" />
      <Layout background="red50">
        <LargeButton mode="main" onClick={() => navigate(`${PATH.SALES_DETAIL}/0`)}>
          상세뷰로 이동
        </LargeButton>
        <LargeButton mode="main" onClick={() => navigate(`${PATH.GAME_CATEGORY}`)}>
          대표게임 카테고리로 이동
        </LargeButton>
        <LargeButton mode="main" onClick={() => navigate(PATH.SALES_INTRO)}>
          검색 인트로로 이동
        </LargeButton>
      </Layout>
      <div>
        <Input mode={INPUT_MODE.large} iconType={INPUT_ICON_TYPE.noIcon} />
        <Input mode={INPUT_MODE.medium} iconType={INPUT_ICON_TYPE.noIcon} />
        <Input
          mode={INPUT_MODE.large}
          iconType={INPUT_ICON_TYPE.trailingIcon}
          placeholder="플레이스 홀더"
        />
        <Input
          mode={INPUT_MODE.medium}
          iconType={INPUT_ICON_TYPE.trailingIcon}
          placeholder="플레이스 홀더"
        />
        <Input
          mode={INPUT_MODE.large}
          iconType={INPUT_ICON_TYPE.leadingTrailingIcon}
          placeholder="플레이스 홀더"
          disabled
        />
        <Input
          mode={INPUT_MODE.medium}
          iconType={INPUT_ICON_TYPE.leadingTrailingIcon}
          placeholder="플레이스 홀더"
          disabled
        />
        <Input mode={INPUT_MODE.large} iconType={INPUT_ICON_TYPE.noIcon} isError={true} />
        <Input mode={INPUT_MODE.medium} iconType={INPUT_ICON_TYPE.noIcon} isError={true} />
        {/* test */}
        <DefaultInput mode={INPUT_MODE.large} />
        <DefaultInput mode={INPUT_MODE.medium} isError={true} errorMsg="에러 메시지" />
        <IconInput mode={INPUT_MODE.large} iconType={INPUT_ICON_TYPE.trailingIcon} />
        <IconInput
          mode={INPUT_MODE.medium}
          iconType={INPUT_ICON_TYPE.trailingIcon}
          isError={true}
          errorMsg="에러 메시지"
        />
        <IconInput mode={INPUT_MODE.large} iconType={INPUT_ICON_TYPE.leadingTrailingIcon} />
        <IconInput
          mode={INPUT_MODE.medium}
          iconType={INPUT_ICON_TYPE.leadingTrailingIcon}
          isError={true}
          errorMsg="에러 메시지"
        />
        <Icon iconName={ICON_TYPE.arrowV1Right} />
        <Icon iconName={ICON_TYPE.heartEmpty} size={50} />
        <Icon iconName={ICON_TYPE.heartFill} size={50} color="red500" />
        <IconButton
          iconName={ICON_TYPE.heartFill}
          size={50}
          color="red100"
          onClick={() => console.log('iconButton')}
        />
        <IconButton
          iconName={ICON_TYPE.heartFill}
          color="red200"
          onClick={() => console.log('iconButton')}
          margin="2rem"
        />
      </div>
      <Flex>
        <Bedge>거래협의가능</Bedge>
        <BedgeHashtag>전략</BedgeHashtag>
        <BedgeCertification identified={true} />
        <BedgeCertification identified={false} />
      </Flex>
      <Flex>
        <TitleWithRedBedge title="게임정보" contents="난이도상" />
        <GreyTitleWithContents title="게임이름" contents="스플랜더" />
      </Flex>
      <Layout background="redSalon50">
        <BSTop title="test" subTitle="testtest" />
        버튼 컴포넌트
        {['main', 'soft', 'outlineRed', 'outlineGray', 'text'].map((mode, idx) => (
          <Flex margin="2rem 0" key={idx}>
            <LargeButton mode={mode} margin="0.5rem">
              Large {mode}
            </LargeButton>
            <MediumButton mode={mode} margin="0.5rem">
              Medium {mode}
            </MediumButton>
            <SmallButton mode={mode} margin="0.5rem">
              Small {mode}
            </SmallButton>
          </Flex>
        ))}
        <BSButton color="success">emotion으로 만든 버튼</BSButton>
        <BSButton color="error">emotion으로 만든 버튼</BSButton>
        <BSButton color="success" weak={true}>
          emotion으로 만든 버튼
        </BSButton>
        <BSButton color="error" weak={true}>
          emotion으로 만든 버튼
        </BSButton>
        <BSButton full={true}>emotion으로 만든 버튼</BSButton>
        <div css={containerStyles}>test</div>
        Text 컴포넌트
        <BSText typography="HeadRegular20" display="block" color="redSalon300">
          테스트테스트여기올시다
        </BSText>
        버튼 컴포넌트 Disabled
        {['main', 'soft', 'outlineRed', 'outlineGray', 'text'].map((mode, idx) => (
          <Flex margin="2rem 0" key={idx}>
            <LargeButton mode={mode} margin="0.5rem" disabled>
              Large {mode}
            </LargeButton>
            <MediumButton mode={mode} margin="0.5rem" disabled>
              Medium {mode}
            </MediumButton>
            <SmallButton mode={mode} margin="0.5rem" disabled>
              Small {mode}
            </SmallButton>
          </Flex>
        ))}
        <BSInput placeholder="test" aria-invalid={true} />
        <BSInput placeholder="test" aria-invalid={false} />
        <BSTextField label="아이디" />
        <BSTextField label="비밀번호" hasError={true} />
      </Layout>

      {/* <BSAlert
        isOpen={true}
        description="안녕하세요"
        content="test"
        title="testtest"
        onBtnClick={() => {}}
      /> */}
    </DefaultLayout>
  );
};

export default Home;
