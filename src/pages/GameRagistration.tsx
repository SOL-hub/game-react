import React from 'react';
import { BarBackWithTitle } from 'components/template/Bar';
import { DefaultLayout, Layout, BottomBox, GrayBox } from 'components/atom/Layout';
import { TextRegular14 } from 'components/atom/Typo';
import RegistrationButton from 'domain/GameRegistration/RegistrationButton';
import ImageUploader from 'domain/GameRegistration/ImageUploader';
import RegistrationInfoInput from 'domain/GameRegistration/RegistrationInfoInput';
import { DefaultTextarea } from 'components/atom/Textarea';

const GameRegistration = () => {
  /** css 테스트값 */
  const registrationProgress = 4;
  const isWriting = registrationProgress > 0;
  const isCompleted = registrationProgress > 11;

  return (
    <DefaultLayout>
      <BarBackWithTitle isFixed={true} title="보드게임 판매하기">
        <TextRegular14
          margin="3px 0.5rem 0 0"
          color={isWriting ? 'red400' : 'black200'}
          style={{ cursor: 'pointer' }}
          onClick={() => isWriting && console.log('임시저장')}
        >
          임시저장
        </TextRegular14>
      </BarBackWithTitle>
      <Layout padding="5.25rem 1.5rem 1.875rem">
        <ImageUploader />
      </Layout>
      <GrayBox height="1px" background={100} />
      <Layout padding="2rem 1.5rem 5rem">
        <RegistrationInfoInput
          title="상품명"
          inputData={{ placeholder: '상품명을 입력해주세요' }}
        />
        <RegistrationInfoInput title="게임 소개" inputData={{ placeholder: '게시글 제목' }}>
          <DefaultTextarea
            style={{ margin: '1rem 0 0' }}
            placeholder="게임판매 게시글 내용을 작성해주세요.&#13;&#10;친절한 게임 설명은 판매에 도움이 됩니다."
          />
        </RegistrationInfoInput>
      </Layout>
      <BottomBox>
        <RegistrationButton registrationProgress={registrationProgress} isCompleted={isCompleted} />
      </BottomBox>
    </DefaultLayout>
  );
};

export default GameRegistration;
