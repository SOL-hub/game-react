import React from 'react';
import { Card } from 'components/common/Layout';
import { Row } from 'components/common/Layout';
import { HeadRegular18, BodyRegular15 } from 'components/common/Typo';
import { IconButton, ICON_TYPE } from 'components/common/Icon';

const GameCategoryCard = () => {
  return (
    <Card
      padding="2rem 1rem 2.5rem"
      margin="1rem 0 1.5rem"
      border="1px solid #FAF8F8"
      borderRadius="0.75rem"
    >
      <Row justifyContent="space-between" alignItems="center" margin="0 0 1rem">
        <HeadRegular18>전략 게임</HeadRegular18>
        <IconButton iconName={ICON_TYPE.arrowV1Down} color="redSalon500" />
      </Row>
      <BodyRegular15 color="blackSalon500">머리를 써서 추리하거나 전략을 짭니다.</BodyRegular15>
      <BodyRegular15 color="blackSalon400" margin="1rem 0 0">
        머리를 써서 추리하거나 전략을 짜서 상대방을 이기는 게임입니다. 비교적 규칙이 복잡하고,
        상대방의 수를 읽고 생각을 필요로 합니다. 게임시간이 다른 종류의 게임에 비해 다소 긴 편이며,
        난이도가 높습니다.
      </BodyRegular15>
    </Card>
  );
};

export default GameCategoryCard;
