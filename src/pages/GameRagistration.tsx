import React from 'react';
import { DefaultLayout } from 'components/atom/Layout';
import { BarBackWithTitle } from 'components/template/Bar';
import { TextRegular14 } from 'components/atom/Typo';

const GameRegistration = () => {
  return (
    <DefaultLayout>
      <BarBackWithTitle isFixed={true} title="보드게임 판매하기">
        <TextRegular14
          margin="3px 0.5rem 0 0"
          color="black200"
          style={{ cursor: 'pointer' }}
          onClick={() => console.log('임시저장')}
        >
          임시저장
        </TextRegular14>
      </BarBackWithTitle>
    </DefaultLayout>
  );
};

export default GameRegistration;
