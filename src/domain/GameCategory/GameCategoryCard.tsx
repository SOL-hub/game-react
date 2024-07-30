import React from 'react';
import { HeadRegular18, BodyRegular15 } from 'components/common/Typo';
import { IconButton, ICON_TYPE } from 'components/common/Icon';
import { Card, Flex } from 'components/common/Layout';

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
        <IconButton
          iconName={isActive ? ICON_TYPE.arrowV1Up : ICON_TYPE.arrowV1Down}
          color="redSalon500"
          onClick={() => setCurrentName(isActive ? '' : representCategoryName)}
        />
      </Flex>
      <BodyRegular15 color="blackSalon500">{summarization}</BodyRegular15>
      {isActive && (
        <BodyRegular15 color="blackSalon400" margin="1rem 0 0">
          {description}
        </BodyRegular15>
      )}
    </Card>
  );
};

export default GameCategoryCard;
