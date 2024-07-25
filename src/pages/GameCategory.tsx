import React from 'react';
import { DefaultLayout } from 'components/common/Layout';
import { BarBackWithTitle } from 'components/common/Bar';

const GameCategory = () => {
  return (
    <DefaultLayout>
      <BarBackWithTitle title="대표 카테고리 설명" />
      대표게임 카테고리
    </DefaultLayout>
  );
};

export default GameCategory;
