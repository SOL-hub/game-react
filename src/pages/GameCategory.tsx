import React, { useState } from 'react';
import { DefaultLayout, Layout } from 'components/common/Layout';
import { BarBackWithTitle } from 'components/common/Bar';
import GameCategoryCard from 'domain/GameCategory/GameCategoryCard';

const GameCategory = () => {
  const [currentId, setCurrentId] = useState('');

  return (
    <DefaultLayout>
      <BarBackWithTitle title="대표 카테고리 설명" />
      <Layout>
        {GAME_CATEGORY_DATA.map((item) => {
          const { id, name, summary, detail } = item;

          return (
            <GameCategoryCard
              key={id}
              id={id}
              name={name}
              summary={summary}
              detail={detail}
              currentId={currentId}
              setCurrentId={setCurrentId}
            />
          );
        })}
      </Layout>
    </DefaultLayout>
  );
};

export default GameCategory;

const GAME_CATEGORY_DATA = [
  [
    'strategygames',
    '전략',
    '머리를 써서 추리하거나 전략을 짭니다.',
    '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
  ],
  [
    'familygames',
    '가족',
    '다양한 연령대와 구성원들이 즐길 수 있어요.',
    '다양한 연령대 (가족 구성원)가 단체로 쉽게 즐길 수 있는 게임으로, 게임 구성이 단순하고, 진입장벽이 낮습니다. 오랜만에 단체 혹은 가족끼리 게임을 왁자지껄 즐겨보시는게 어떠실까요?',
  ],
  [
    'thematic',
    '테마',
    '드라마와 영화와 같은 컨셉을 정해 몰입할 수 있어요.',
    '게임 장르와 컨셉이 멋진 드라마나 영화컨셉으로 이루어졌습니다. 게임을 하는 내내 게임 구성물들의 컨셉과 스토리를 즐길 수 있어요.',
  ],
  [
    'partygames',
    '파티',
    '가볍지만 즐겁게 아이스브레이킹용으로 플레이를 할 수 있어요.',
    '바로 앉아서 가볍고 빠르게 즐길 수 있습니다. 첫 모임의 어색함을 깨기 위한 아이스브레이킹이나, 레크레이션용으로 제격입니다.',
  ],
  [
    'wargames',
    '전쟁',
    '복잡한 전쟁과 역사를 기반으로 진지하게 플레이할 수 있어요.',
    '전쟁과 역사를 기반으로한 소재로 전투를 재현한 시뮬레이션 게임입니다. 복잡한 역사 세계관과 웅장한 스토리를 기반으로한 게임 분위기를 내고 싶다면 즐겨보세요!',
  ],
  [
    'cgs',
    '수집',
    '게임의 구성요소를 수집하거나 커스터마이징 할 수 있어요.',
    '직접 게임의 구성물들을 커스텀마이징(수집)할 수 있습니다. 나만의 조합으로 다양한 플레이 방식을 시도해볼 수 있습니다.',
  ],
  [
    'abstracts',
    '추상',
    '구성요소나 룰은 간단하지만 전략적인 플레이를 해야해요.',
    '테마가 없이 단순한 룰과 규칙으로 게임을 플레이어 합니다. 턴제 방식으로, 모든 플레이어의 상황이 공개되어 있으며 게임 플레이어시 경우의 수와 상대방의 수읽기를 해야합니다.',
  ],
].map((item) => ({
  id: item[0],
  name: item[1],
  summary: item[2],
  detail: item[3],
}));
