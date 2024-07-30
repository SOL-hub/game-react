import React, { Children } from 'react';
import styled from 'styled-components';
import { Flex } from './Layout';
import { TextRegular14, TextRegular16, TextBold16, CaptionRegular12 } from './Typo';

const BedgeBox = styled(Flex)`
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height};
  margin: ${(props) => props.margin || '0 0.75rem 0 0'};
  padding: ${(props) => props.padding || '0.25rem 0.5rem'};
  border-radius: 0.25rem;
  background: ${(props) =>
    props.theme.color[props.background as keyof typeof props.theme.color] ||
    props.theme.color.blackSalon50};

  &:last-child {
    margin: 0;
  }
`;

const BedgeCertificationBox = styled(BedgeBox)`
  height: 1.438rem;
  padding: 0.125rem 0.5rem;
  border-radius: 0.5rem;
`;

type BedgeProps = {
  children?: React.ReactNode;
};

export const Bedge = ({ children }: BedgeProps) => {
  return (
    <BedgeBox height="1.563rem">
      <TextRegular16 color="blackSalon500">#{children}</TextRegular16>
    </BedgeBox>
  );
};

export const BedgeHashtag = ({ children }: BedgeProps) => {
  return (
    <BedgeBox height="1.688rem">
      <TextRegular16 color="blackSalon500">#{children}</TextRegular16>
    </BedgeBox>
  );
};

export const RedBedge = ({ children }: BedgeProps) => {
  return (
    <BedgeBox padding="0.25rem 0.75rem" margin="0" height="1.688rem" background="redSalon50">
      <TextBold16 color="redSalon500">{children}</TextBold16>
    </BedgeBox>
  );
};

type BedgeCertificationProps = {
  identified: boolean;
};

export const BedgeCertification = ({ identified }: BedgeCertificationProps) => {
  return (
    <BedgeCertificationBox background={identified ? 'subBlue50' : 'error50'}>
      <CaptionRegular12>{identified ? '본인인증완료' : '본인인증미완료'}</CaptionRegular12>
    </BedgeCertificationBox>
  );
};
