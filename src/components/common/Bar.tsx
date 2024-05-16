import React from 'react';
import styled from 'styled-components';
import { Row } from './Layout';

type Props = {
  title?: string;
  icon?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

export const HeaderWithTitle = ({ title }: Props) => {
  return (
    <Header>
      <Row justifyContent="center" alignItems="center" width="100%" height="100%">
        {title}
      </Row>
    </Header>
  );
};

export const HeaderWithIconTitle = ({ title, icon, onClick, children }: Props) => {
  return (
    <Header>
      <Row justifyContent="center"></Row>
    </Header>
  );
};

export const Header = styled.header`
  width: 100%;
  height: 3.75rem; //60px
`;
