import React from 'react';
import { DefaultLayout, Layout } from 'components/common/Layout';
import { BarBackWithTitle } from 'components/common/Bar';
import GameCategoryCard from 'domain/GameCategory/GameCategoryCard';

const GameCategory = () => {
  return (
    <DefaultLayout>
      <BarBackWithTitle title="대표 카테고리 설명" />
      <Layout>
        <GameCategoryCard />
      </Layout>
    </DefaultLayout>
  );
};

export default GameCategory;
