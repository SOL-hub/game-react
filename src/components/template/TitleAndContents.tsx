import React from 'react';
import styled from 'styled-components';
import { Row } from '../../components/common/Layout';
import { RedBedge } from '../../components/common/Bedge';
import { TextBold16, TextRegular16 } from '../../components/common/Typo';

type componentsProps = {
  margin?: string;
  title: string;
  contents: string;
  children?: React.ReactNode;
};

export const TitleWithRedBedge = ({ title, contents, margin }: componentsProps) => {
  return (
    <TitleWithContentsBox margin={margin}>
      <TextBold16>{title}</TextBold16>
      <RedBedge>{contents}</RedBedge>
    </TitleWithContentsBox>
  );
};

export const GreyTitleWithContents = ({ title, contents, margin }: componentsProps) => {
  return (
    <TitleWithContentsBox margin={margin}>
      <TextRegular16 color="blackSalon300">{title}</TextRegular16>
      <TextRegular16 color="blackSalon500">{contents}</TextRegular16>
    </TitleWithContentsBox>
  );
};

const TitleWithContentsBox = styled(Row)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: ${(props) => props.margin || '1rem 0 0 0'};
`;
