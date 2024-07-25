import React from 'react';
import styled from 'styled-components';
import { Row } from './Layout';
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
      <Row justifyContent="center" alignItems="center" width="100%" height="100%">
        {title}
      </Row>
    </Header>
  );
};

export const BarBackWithTitle = ({
  colorBack = 'redSalon500',
  colorTitle = 'blackSalon500',
  title,
}: BarProps) => {
  return (
    <Header>
      <Row alignItems="center" padding="1.125rem 1rem">
        <IconButton
          iconName={ICON_TYPE.arrowV1Left}
          color={colorBack}
          onClick={() => window.history.back()}
        />
        <TextBold16 margin="3px 0 0 1rem" color={colorTitle}>
          {title}
        </TextBold16>
      </Row>
    </Header>
  );
};

export const BarBackWithFavorites = ({
  colorBack = 'redSalon500',
  colorFavorites = 'redSalon500',
  isFavorites,
  onClick,
}: BarProps) => {
  return (
    <Header>
      <Row justifyContent="space-between" width="100%" padding="1.125rem 1rem">
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
      </Row>
    </Header>
  );
};

export const BarBackWithComponent = ({
  colorBack = 'blackSalon600',
  padding,
  children,
}: BarProps) => {
  return (
    <Header>
      <Row alignItems="center" width="100%" height="100%" padding={padding}>
        <IconButton
          iconName={ICON_TYPE.arrowV1Left}
          margin="0 1rem 0 0"
          color={colorBack}
          onClick={() => window.history.back()}
        />
        {children}
      </Row>
    </Header>
  );
};

export const Header = styled.header`
  width: 100%;
  height: 3.75rem; //60px
`;
