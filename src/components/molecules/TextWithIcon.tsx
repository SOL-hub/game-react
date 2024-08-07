import React from 'react';
import { Flex } from 'components/atom/Layout';
import { TextRegular14 } from 'components/atom/Typo';
import { Icon } from 'components/atom/Icon';

export const TextWithIcon = ({ text, iconData, onClick }) => {
  return (
    <Flex alignItems="center">
      <TextRegular14 margin="0.15rem 0.625rem 0 0">{text}</TextRegular14>
      <Icon
        iconName={iconData.iconName}
        color={iconData.color ? iconData.color : 'black400'}
        onClick={onClick}
      />
    </Flex>
  );
};
