import React from 'react';
import styled from 'styled-components';
import { Flex } from './Layout';
import { ICON_TYPE, IconButton } from './Icon';
import { TextBold16 } from './Typo';

type BarProps = {
  title?: string;
  icon?: string;
  children?: React.ReactNode;
  padding?: string;
  colorBack?: string;
  colorFavorites?: string;
  colorTitle?: string;
  isFavorites?: boolean;
  onClick?: () => void;
};

export const HeaderWithTitle = ({ title }: BarProps) => {
  return (
    <Header>
      <Flex justifyContent="center" alignItems="center" width="100%" height="100%">
        {title}
      </Flex>
    </Header>
  );
};

export const BarBackWithTitle = ({
  colorBack = 'red500',
  colorTitle = 'black500',
  title,
}: BarProps) => {
  return (
    <Header>
      <Flex alignItems="center" padding="1.125rem 1rem">
        <IconButton
          iconName={ICON_TYPE.arrowV1Left}
          color={colorBack}
          onClick={() => window.history.back()}
        />
        <TextBold16 margin="3px 0 0 1rem" color={colorTitle}>
          {title}
        </TextBold16>
      </Flex>
    </Header>
  );
};

export const BarBackWithFavorites = ({
  colorBack = 'red500',
  colorFavorites = 'red500',
  isFavorites,
  onClick,
}: BarProps) => {
  return (
    <Header>
      <Flex justifyContent="space-between" width="100%" padding="1.125rem 1rem">
        <IconButton
          iconName={ICON_TYPE.arrowV1Left}
          color={colorBack}
          onClick={() => window.history.back()}
        />
        <IconButton
          iconName={isFavorites ? ICON_TYPE.heartFill : ICON_TYPE.heartEmpty}
          color={colorFavorites}
          onClick={onClick}
        />
      </Flex>
    </Header>
  );
};

export const BarBackWithComponent = ({ colorBack = 'black600', padding, children }: BarProps) => {
  return (
    <Header>
      <Flex alignItems="center" width="100%" height="100%" padding={padding}>
        <IconButton
          iconName={ICON_TYPE.arrowV1Left}
          margin="0 1rem 0 0"
          color={colorBack}
          onClick={() => window.history.back()}
        />
        {children}
      </Flex>
    </Header>
  );
};

export const Header = styled.header`
  width: 100%;
  height: 3.75rem; //60px
  background: ${(props) => props.theme.color.black0};
`;
