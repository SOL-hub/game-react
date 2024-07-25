import React from 'react';
import { Card } from 'components/common/Layout';
import { Row } from 'components/common/Layout';
import { HeadRegular18, BodyRegular15 } from 'components/common/Typo';
import { IconButton, ICON_TYPE } from 'components/common/Icon';

const GameCategoryCard = ({ id, name, summary, detail }) => {
  return (
    <Card
      padding="2rem 1rem 2.5rem"
      margin="1rem 0 1.5rem"
      border="1px solid #FAF8F8"
      borderRadius="0.75rem"
    >
      <Row justifyContent="space-between" alignItems="center" margin="0 0 1rem">
        <HeadRegular18>{name}</HeadRegular18>
        <IconButton iconName={ICON_TYPE.arrowV1Down} color="redSalon500" />
      </Row>
      <BodyRegular15 color="blackSalon500">{summary}</BodyRegular15>
      <BodyRegular15 color="blackSalon400" margin="1rem 0 0">
        {detail}
      </BodyRegular15>
    </Card>
  );
};

export default GameCategoryCard;
