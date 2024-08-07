import React from 'react';
import styled from 'styled-components';
import { Flex } from '../atom/Layout';
import { Icon, ICON_TYPE } from '../atom/Icon';
import { TextBold16 } from '../atom/Typo';

type BarProps = {
  isFixed?: boolean;
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
  isFixed = false,
  colorBack = 'red500',
  colorTitle = 'black500',
  title,
  children,
}: BarProps) => {
  return (
    <Header isFixed={isFixed}>
      <Flex justifyContent="space-between" alignItems="center" padding="1.125rem  1rem">
        <Flex alignItems="center">
          <Icon
            iconName={ICON_TYPE.arrowV1Left}
            color={colorBack}
            onClick={() => window.history.back()}
          />
          <TextBold16 margin="3px 0 0 1rem" color={colorTitle}>
            {title}
          </TextBold16>
        </Flex>
        {children}
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
        <Icon
          iconName={ICON_TYPE.arrowV1Left}
          color={colorBack}
          onClick={() => window.history.back()}
        />
        <Icon
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
        <Icon
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

export const BarCancel = ({ title = '', colorTitle = 'black500' }: BarProps) => {
  return (
    <Header>
      <Flex alignItems="center" padding="1.125rem 1.5rem">
        {title.length > 0 && <TextBold16 color={colorTitle}>{title}</TextBold16>}
        <Icon
          iconName={ICON_TYPE.close}
          onClick={() => window.history.back()}
          margin="0 0 0 auto"
        />
      </Flex>
    </Header>
  );
};

export const Header = styled.header<BarProps>`
  position: ${({ isFixed }) => (isFixed ? 'fixed' : 'static')};
  top: 0;
  width: 100%;
  max-width: ${({ theme }) => theme.mediaSize.breakPoint};
  height: 3.75rem; //60px
  background: ${(props) => props.theme.color.black0};
`;
