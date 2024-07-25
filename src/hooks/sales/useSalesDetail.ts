import { useState, useEffect } from 'react';
import * as api from 'utils/api';

const useSalesDetail = () => {
  const [data, setData] = useState(SALES_DETAIL_MOCK);
  const [onLike, setOnLike] = useState(false);

  useEffect(() => {
    // api
    //   .getSalesItemApi({ itemId: 0 })
    //   .then((response) => setData(response.data))
    //   .catch((error) => console.log(error));
    console.log('api로 데이터를 받아옵니다.');
  }, []);

  return { data, onLike, setOnLike };
};

export default useSalesDetail;

/**
 * 목데이터 추후 삭제
 */
const SALES_DETAIL_MOCK = {
  id: 1,
  seller: {
    id: 1,
    email: 'hongildong_user@gmail.com',
    name: '홍길동',
    profileImage: {
      id: 1,
      url: 'https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg',
      audit: {
        createdDateTime: '2022-04-03 19:00:00',
        updatedDateTime: '2022-04-04 20:15:11',
        createdBy: 'hongildong_user@gmail.com',
        updatedBy: 'hongildong_user@gmail.com',
      },
    },
    mobile: '010-1234-1234',
    introduction: '안녕하세요, 홍길동입니다.',
    location: '서울시 용산구 한강대로2길 11-11',
    identified: false,
  },
  title: '보드게임 테라포밍 마스 판매합니다.',
  audit: {
    createdDateTime: '2022-04-03 19:00:00',
    updatedDateTime: '2022-04-04 20:15:11',
    createdBy: 'hongildong_user@gmail.com',
    updatedBy: 'hongildong_user@gmail.com',
  },
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
  salesItemImages: [
    {
      id: 1,
      image: {
        id: 1,
        url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F99D1D3485B92194418285A',
        audit: {
          createdDateTime: '2022-04-03 19:00:00',
          updatedDateTime: '2022-04-04 20:15:11',
          createdBy: 'hongildong_user@gmail.com',
          updatedBy: 'hongildong_user@gmail.com',
        },
      },
    },
    {
      id: 1,
      image: {
        id: 1,
        url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F99D1D3485B92194418285A',
        audit: {
          createdDateTime: '2022-04-03 19:00:00',
          updatedDateTime: '2022-04-04 20:15:11',
          createdBy: 'hongildong_user@gmail.com',
          updatedBy: 'hongildong_user@gmail.com',
        },
      },
    },
    {
      id: 1,
      image: {
        id: 1,
        url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F99D1D3485B92194418285A',
        audit: {
          createdDateTime: '2022-04-03 19:00:00',
          updatedDateTime: '2022-04-04 20:15:11',
          createdBy: 'hongildong_user@gmail.com',
          updatedBy: 'hongildong_user@gmail.com',
        },
      },
    },
    {
      id: 1,
      image: {
        id: 1,
        url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F99D1D3485B92194418285A',
        audit: {
          createdDateTime: '2022-04-03 19:00:00',
          updatedDateTime: '2022-04-04 20:15:11',
          createdBy: 'hongildong_user@gmail.com',
          updatedBy: 'hongildong_user@gmail.com',
        },
      },
    },
    {
      id: 1,
      image: {
        id: 1,
        url: 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=http%3A%2F%2Fcfile4.uf.tistory.com%2Fimage%2F99D1D3485B92194418285A',
        audit: {
          createdDateTime: '2022-04-03 19:00:00',
          updatedDateTime: '2022-04-04 20:15:11',
          createdBy: 'hongildong_user@gmail.com',
          updatedBy: 'hongildong_user@gmail.com',
        },
      },
    },
  ],
  salesStatus: 'ON_SALE',
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
    almonstNew: false,
    useTime: 'OVER_FIVE',
    missingComponent: 'YES',
    damagedComponent: 'NO',
    restrictionPlaying: 'NO',
  },
  userInterest: {
    viewCount: 253,
    favoritesCount: 16,
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
  salesItemWeight: 'VERY_HARD',
  salesText: '테라포밍 마스를 하면서 인생을 배웠습니다. 친구와도 멀어졌지만 괜찮습니다.',
};
