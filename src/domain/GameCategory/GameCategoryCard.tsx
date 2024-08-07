import React from 'react';
import { HeadRegular18, BodyRegular15 } from 'components/atom/Typo';
import { Icon, ICON_TYPE } from 'components/atom/Icon';
import { Card, Flex } from 'components/atom/Layout';

const GameCategoryCard = ({
  representCategoryName,
  representCategoryKoreanName,
  summarization,
  description,
  currentName,
  setCurrentName,
}) => {
  const isActive = representCategoryName === currentName;

  return (
    <Card
      padding="2rem 1rem 2.5rem"
      margin="1rem 0 1.5rem"
      border={`1px solid ${isActive ? '#FFD4D4' : '#FAF8F8'}`}
      borderRadius="0.75rem"
    >
      <Flex justifyContent="space-between" alignItems="center" margin="0 0 1rem">
        <HeadRegular18>{representCategoryKoreanName}</HeadRegular18>
        <Icon
          iconName={isActive ? ICON_TYPE.arrowV1Up : ICON_TYPE.arrowV1Down}
          color="red500"
          onClick={() => setCurrentName(isActive ? '' : representCategoryName)}
        />
      </Flex>
      <BodyRegular15 color="black500">{summarization}</BodyRegular15>
      {isActive && (
        <BodyRegular15 color="black400" margin="1rem 0 0">
          {description}
        </BodyRegular15>
      )}
    </Card>
  );
};

export default GameCategoryCard;
