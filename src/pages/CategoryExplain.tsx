import styled from '@emotion/styled';
import { colors } from '../styles/colorPalette';
import BSText from '../components/common/BSText';
import { useState } from 'react';
// import { ArrowIcon } from '../';

function handleToggleclick() {}

const CategoryList = [
  {
    id: 0,
    title: '전략 게임',
    subTitle: '머리를 써서 추리하거나 전략을 짜는 게임',
    content:
      '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
  },
  {
    id: 1,
    title: '가족 게임',
    subTitle: '다양한 연령대와 구성원들이 즐길 수 있어요.',
    content:
      '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
  },
  {
    id: 2,
    title: '파티 게임',
    subTitle: '가볍지만 즐겁게 아이스브레이킹용으로 플레이를 할 수 있어요.',
    content:
      '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
  },
  {
    id: 3,
    title: '테마 게임',
    subTitle: '드라마와 영화와 같은 컨셉을 정해 몰입할 수 있어요.',
    content:
      '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
  },
  {
    id: 3,
    title: '전쟁 게임',
    subTitle: '복잡한 전쟁과 역사를 기반으로 진지하게 플레이할 수 있어요.',
    content: '머리를 써서 추리하거나 전략을 짜는 게임',
  },
  {
    id: 3,
    title: '수집 게임',
    subTitle: '게임의 구성요소를 수집하거나 커스터마이징 할 수 있어요.',
    content:
      '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
  },
  {
    id: 3,
    title: '추상 게임',
    subTitle: '구성요소나 룰은 간단하지만 전략적인 플레이를 해야해요.',
    content:
      '머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고, 상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며, 난이도가 높습니다.',
  },
];
const CategoryExplain = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Container>
      {CategoryList.map((game) => (
        <Wrap key={game.id}>
          <BSText typography="HeadRegular20" color="blackSalon600">
            {game.title}
          </BSText>
          <BSText typography="TextRegular16" color="blackSalon400">
            {game.subTitle}
          </BSText>
          <img src="" alt="arrow-icon" onClick={handleToggleclick} />

          {game.content}
        </Wrap>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-color: var(--whiteSalon50);
  gap: 14px;
  padding: 18px 52px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.12);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: fit-content;
`;

export default CategoryExplain;
