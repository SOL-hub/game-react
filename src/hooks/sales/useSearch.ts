import { useState } from 'react';

const useSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const [recentSearches, setRecentSearches] = useState(
    JSON.parse(localStorage.getItem('searches') || '[]'),
  );
  const [relatedSearches, setRelatedSearches] = useState(['뱅', '스플렌더', '할리갈리']); // 테스트용
  const [searchResults, setSearchResults] = useState(SEARCH_RESULTS_MOCK);

  const doSearch = () => {
    const newSearch = { id: Date.now(), text: searchValue };
    const newRecentSearches = [newSearch].concat(recentSearches);

    setRecentSearches(newRecentSearches);
    localStorage.setItem('searches', JSON.stringify(newRecentSearches));
  };

  const doDeleteRecentSearches = (id: string) => {
    const newRecentSearches = recentSearches.filter((item) => item.id !== id);

    setRecentSearches(newRecentSearches);
    localStorage.setItem('searches', JSON.stringify(newRecentSearches));
  };

  return {
    searchValue,
    setSearchValue,
    recentSearches,
    searchResults,
    doSearch,
    doDeleteRecentSearches,
    relatedSearches,
  };
};

export default useSearch;

const SEARCH_RESULTS_MOCK = [
  {
    id: 0,
    thumbnail: {
      id: 1,
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg',
      audit: {
        createdDateTime: '2022-04-03 19:00:00',
        updatedDateTime: '2022-04-04 20:15:11',
        createdBy: 'hongildong_user@gmail.com',
        updatedBy: 'hongildong_user@gmail.com',
      },
    },
    reservation: true,
    title:
      '보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱',
    salesPrice: 1000,
    itemInfo: {
      id: 1,
      boardGameGeekId: 167791,
      itemName: 'Terraforming Mars',
      koreanItemName: '테라포밍 마스',
      minPlayers: 1,
      maxPlayers: 5,
      playingTime: 120,
      knownLowestPrice: 33000,
      averageWeight: 3.2435,
      representCategory: {
        id: 1,
        representCategoryName: 'strategygames',
        representCategoryKoreanName: '전략',
        summarization: '머리를 써서 추리하거나 전략을 짭니다.',
        description:
          '"머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다."',
      },
      audit: {
        createdDateTime: '2022-04-03 19:00:00',
        updatedDateTime: '2022-04-04 20:15:11',
        createdBy: 'hongildong_user@gmail.com',
        updatedBy: 'hongildong_user@gmail.com',
      },
    },
    salesItemCondition: {
      almostNew: false,
      useTime: 'OVER_FIVE',
      missingComponent: 'YES',
      damagedComponent: 'NO',
      restrictionPlaying: 'NO',
    },
    salesPolicy: {
      id: 1,
      directTrade: false,
      deliveryTrade: true,
      zipCode: '00100',
      directTradeLocation: '서울시 용산구 백범로2길 11',
      directTradeLocationDetail: '99동 404호',
      negotiable: true,
      audit: {
        createdDateTime: '2022-04-03 19:00:00',
        updatedDateTime: '2022-04-04 20:15:11',
        createdBy: 'hongildong_user@gmail.com',
        updatedBy: 'hongildong_user@gmail.com',
      },
    },
    userInterest: {
      viewCount: 253,
      favoritesCount: 16,
    },
  },
  {
    id: 0,
    thumbnail: {
      id: 1,
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg',
      audit: {
        createdDateTime: '2022-04-03 19:00:00',
        updatedDateTime: '2022-04-04 20:15:11',
        createdBy: 'hongildong_user@gmail.com',
        updatedBy: 'hongildong_user@gmail.com',
      },
    },
    reservation: false,
    title:
      '보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱',
    salesPrice: 1000,
    itemInfo: {
      id: 1,
      boardGameGeekId: 167791,
      itemName: 'Terraforming Mars',
      koreanItemName: '테라포밍 마스',
      minPlayers: 1,
      maxPlayers: 5,
      playingTime: 120,
      knownLowestPrice: 33000,
      averageWeight: 3.2435,
      representCategory: {
        id: 1,
        representCategoryName: 'strategygames',
        representCategoryKoreanName: '전략',
        summarization: '머리를 써서 추리하거나 전략을 짭니다.',
        description:
          '"머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다."',
      },
      audit: {
        createdDateTime: '2022-04-03 19:00:00',
        updatedDateTime: '2022-04-04 20:15:11',
        createdBy: 'hongildong_user@gmail.com',
        updatedBy: 'hongildong_user@gmail.com',
      },
    },
    salesItemCondition: {
      almostNew: true,
      useTime: 'OVER_FIVE',
      missingComponent: 'YES',
      damagedComponent: 'NO',
      restrictionPlaying: 'NO',
    },
    salesPolicy: {
      id: 1,
      directTrade: false,
      deliveryTrade: true,
      zipCode: '00100',
      directTradeLocation: '서울시 용산구 백범로2길 11',
      directTradeLocationDetail: '99동 404호',
      negotiable: true,
      audit: {
        createdDateTime: '2022-04-03 19:00:00',
        updatedDateTime: '2022-04-04 20:15:11',
        createdBy: 'hongildong_user@gmail.com',
        updatedBy: 'hongildong_user@gmail.com',
      },
    },
    userInterest: {
      viewCount: 253,
      favoritesCount: 16,
    },
  },
  {
    id: 0,
    thumbnail: {
      id: 1,
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg',
      audit: {
        createdDateTime: '2022-04-03 19:00:00',
        updatedDateTime: '2022-04-04 20:15:11',
        createdBy: 'hongildong_user@gmail.com',
        updatedBy: 'hongildong_user@gmail.com',
      },
    },
    reservation: true,
    title:
      '보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱',
    salesPrice: 1000,
    itemInfo: {
      id: 1,
      boardGameGeekId: 167791,
      itemName: 'Terraforming Mars',
      koreanItemName: '테라포밍 마스',
      minPlayers: 1,
      maxPlayers: 5,
      playingTime: 120,
      knownLowestPrice: 33000,
      averageWeight: 3.2435,
      representCategory: {
        id: 1,
        representCategoryName: 'strategygames',
        representCategoryKoreanName: '전략',
        summarization: '머리를 써서 추리하거나 전략을 짭니다.',
        description:
          '"머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다."',
      },
      audit: {
        createdDateTime: '2022-04-03 19:00:00',
        updatedDateTime: '2022-04-04 20:15:11',
        createdBy: 'hongildong_user@gmail.com',
        updatedBy: 'hongildong_user@gmail.com',
      },
    },
    salesItemCondition: {
      almostNew: true,
      useTime: 'OVER_FIVE',
      missingComponent: 'YES',
      damagedComponent: 'NO',
      restrictionPlaying: 'NO',
    },
    salesPolicy: {
      id: 1,
      directTrade: false,
      deliveryTrade: true,
      zipCode: '00100',
      directTradeLocation: '서울시 용산구 백범로2길 11',
      directTradeLocationDetail: '99동 404호',
      negotiable: true,
      audit: {
        createdDateTime: '2022-04-03 19:00:00',
        updatedDateTime: '2022-04-04 20:15:11',
        createdBy: 'hongildong_user@gmail.com',
        updatedBy: 'hongildong_user@gmail.com',
      },
    },
    userInterest: {
      viewCount: 253,
      favoritesCount: 16,
    },
  },
  {
    id: 0,
    thumbnail: {
      id: 1,
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg',
      audit: {
        createdDateTime: '2022-04-03 19:00:00',
        updatedDateTime: '2022-04-04 20:15:11',
        createdBy: 'hongildong_user@gmail.com',
        updatedBy: 'hongildong_user@gmail.com',
      },
    },
    reservation: false,
    title:
      '보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱',
    salesPrice: 1000,
    itemInfo: {
      id: 1,
      boardGameGeekId: 167791,
      itemName: 'Terraforming Mars',
      koreanItemName: '테라포밍 마스',
      minPlayers: 1,
      maxPlayers: 5,
      playingTime: 120,
      knownLowestPrice: 33000,
      averageWeight: 3.2435,
      representCategory: {
        id: 1,
        representCategoryName: 'strategygames',
        representCategoryKoreanName: '전략',
        summarization: '머리를 써서 추리하거나 전략을 짭니다.',
        description:
          '"머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다."',
      },
      audit: {
        createdDateTime: '2022-04-03 19:00:00',
        updatedDateTime: '2022-04-04 20:15:11',
        createdBy: 'hongildong_user@gmail.com',
        updatedBy: 'hongildong_user@gmail.com',
      },
    },
    salesItemCondition: {
      almostNew: false,
      useTime: 'OVER_FIVE',
      missingComponent: 'YES',
      damagedComponent: 'NO',
      restrictionPlaying: 'NO',
    },
    salesPolicy: {
      id: 1,
      directTrade: false,
      deliveryTrade: true,
      zipCode: '00100',
      directTradeLocation: '서울시 용산구 백범로2길 11',
      directTradeLocationDetail: '99동 404호',
      negotiable: true,
      audit: {
        createdDateTime: '2022-04-03 19:00:00',
        updatedDateTime: '2022-04-04 20:15:11',
        createdBy: 'hongildong_user@gmail.com',
        updatedBy: 'hongildong_user@gmail.com',
      },
    },
    userInterest: {
      viewCount: 253,
      favoritesCount: 16,
    },
  },
];
