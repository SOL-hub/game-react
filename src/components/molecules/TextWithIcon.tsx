import React from 'react';
import { Flex } from 'components/common/Layout';
import { TextRegular14 } from 'components/common/Typo';
import { IconButton } from 'components/common/Icon';

export const TextWithIconButton = ({ text, iconData, onClick }) => {
  return (
    <Flex alignItems="center">
      <TextRegular14 margin="0.15rem 0.625rem 0 0">{text}</TextRegular14>
      <IconButton
        iconName={iconData.iconName}
        color={iconData.color ? iconData.color : 'black400'}
        onClick={onClick}
      />
    </Flex>
  );
};
