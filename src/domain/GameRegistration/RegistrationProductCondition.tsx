import React from 'react';
import { Flex } from 'components/atom/Layout';
import { Icon, ICON_TYPE } from 'components/atom/Icon';
import { TextBold16 } from 'components/atom/Typo';

interface ConditionProps {
  isChecked: boolean;
  text: string;
  isArrow?: boolean;
  onClick: (string) => void;
}

const RegistrationProductCondition = ({
  isChecked,
  text,
  isArrow = false,
  onClick,
}: ConditionProps) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexWrap="nowrap"
      padding="1rem 1.5rem"
      background={`${isChecked ? 'red' : 'black'}50`}
      borderRadius="0.5rem"
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      <Icon
        iconName={isChecked ? ICON_TYPE.largeSelectedRadio : ICON_TYPE.largeUnselectedRadio}
        color={isChecked ? 'red500' : 'black200'}
      />
      <TextBold16 margin="0.2rem 0 0 0.625rem " color={isChecked ? 'red500' : 'black200'}>
        {text}
      </TextBold16>
      {isArrow && (
        <Icon
          iconName={ICON_TYPE.arrowV2Right}
          margin="0 0 0 1rem"
          color={isChecked ? 'red500' : 'black200'}
        />
      )}
    </Flex>
  );
};

export default RegistrationProductCondition;
