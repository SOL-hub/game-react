import React from 'react';
import { BarBackWithTitle } from 'components/template/Bar';
import { DefaultLayout, BottomBox } from 'components/atom/Layout';
import { TextRegular14 } from 'components/atom/Typo';
import RegistrationButton from 'domain/GameRegistration/RegistrationButton';

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
      <BottomBox>
        <RegistrationButton registrationProgress={registrationProgress} isCompleted={isCompleted} />
      </BottomBox>
    </DefaultLayout>
  );
};

export default GameRegistration;
