import { useState, useEffect } from 'react';

const useAnotherGame = () => {
  const [anotherGameData, setAnotherGameData] = useState(ANOTHER_GAME_MOCK);

  useEffect(() => {
    console.log('판매자의 다른 게임 정보를 가져옵니다.');
  }, []);

  return { anotherGameData };
};

export default useAnotherGame;

const ANOTHER_GAME_MOCK = [
  {
    id: 1,
    thumbnailUrl:
      'https://cdn-ext.fanatical.com/production/product/1280x720/21cbfd6e-da1e-4a1e-8b8a-bf32ce7d3494.jpeg',
    itemName: '테라포밍 마스',
    title: '보드게임 테라포밍 마스 판매합니다.',
    salesPrice: 1000,
  },
  {
    id: 1,
    thumbnailUrl:
      'https://cdn-ext.fanatical.com/production/product/1280x720/21cbfd6e-da1e-4a1e-8b8a-bf32ce7d3494.jpeg',
    itemName: '테라포밍 마스',
    title: '보드게임 테라포밍 마스 판매합니다.',
    salesPrice: 1000,
  },
  {
    id: 1,
    thumbnailUrl:
      'https://cdn-ext.fanatical.com/production/product/1280x720/21cbfd6e-da1e-4a1e-8b8a-bf32ce7d3494.jpeg',
    itemName: '테라포밍 마스',
    title: '보드게임 테라포밍 마스 판매합니다.',
    salesPrice: 1000,
  },
  {
    id: 1,
    thumbnailUrl:
      'https://cdn-ext.fanatical.com/production/product/1280x720/21cbfd6e-da1e-4a1e-8b8a-bf32ce7d3494.jpeg',
    itemName: '테라포밍 마스',
    title: '보드게임 테라포밍 마스 판매합니다.',
    salesPrice: 1000,
  },
  {
    id: 1,
    thumbnailUrl:
      'https://cdn-ext.fanatical.com/production/product/1280x720/21cbfd6e-da1e-4a1e-8b8a-bf32ce7d3494.jpeg',
    itemName: '테라포밍 마스',
    title: '보드게임 테라포밍 마스 판매합니다.',
    salesPrice: 1000,
  },
  {
    id: 1,
    thumbnailUrl:
      'https://cdn-ext.fanatical.com/production/product/1280x720/21cbfd6e-da1e-4a1e-8b8a-bf32ce7d3494.jpeg',
    itemName: '테라포밍 마스',
    title: '보드게임 테라포밍 마스 판매합니다.',
    salesPrice: 1000,
  },
];
