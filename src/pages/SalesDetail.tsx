import React from 'react';
import styled from 'styled-components';
import {
  DefaultLayout,
  Layout,
  Row,
  Column,
  GrayBox,
  BottomBox,
} from '../components/common/Layout';
import { BarBackWithFavorites } from '../components/common/Bar';
import {
  HeadBold20,
  HeadBold18,
  TextRegular16,
  TextBold14,
  CaptionRegular12,
} from '../components/common/Typo';

import { IconButton, ICON_TYPE } from '../components/common/Icon';

import { Bedge } from '../components/common/Bedge';

import SalesPhotoSwiper from '../domain/SalesDetail/SalesPhotoSwiper';
import Profile from '../components/template/Profile';
import { GameInfoCard, GameStatusCard } from '../domain/SalesDetail/SalesInfoCard';
import AnotherGameSwiper from '../domain/SalesDetail/AnotherGameSwiper';
import useSalesDetail from '../hooks/sales/useSalesDetail';
import useAnotherGame from '../hooks/sales/useAnotherGame';

type SalesPolicyType = {
  [key: string]: any;
};

const SalesDetail = () => {
  const { data, onLike, setOnLike } = useSalesDetail();
  const { anotherGameData } = useAnotherGame();

  const doGetSalesPolicy = (): string[] => {
    const salesPolicyKeys = Object.keys(POLICY_DATA);
    const policyData: SalesPolicyType = { ...data.salesPolicy };

    return salesPolicyKeys.filter((item) => policyData[item]).map((item) => POLICY_DATA[item]);
  };

  return (
    <DefaultLayout>
      <BarBackWithFavorites />
      <Layout>
        <SalesPhotoSwiper data={data.salesItemImages} />
        <Profile data={data.seller} />
        <Row margin="1.5rem 0 0.5rem">
          <HeadBold20 lineHeight="24px">{data.title}</HeadBold20>
        </Row>
        <Row>
          <CaptionRegular12 color="blackSalon300" lineHeight="19px" margin="0 0.75rem 0 0">
            {data.audit.createdDateTime.split(' ')[0].replace(/-/g, '.')}
          </CaptionRegular12>
          <CaptionRegular12 color="blackSalon300" lineHeight="19px" margin="0 0.75rem 0 0">
            조회수 {data.userInterest.viewCount}회
          </CaptionRegular12>
          <Row alignItems="center">
            <IconButton
              iconName={onLike ? ICON_TYPE.heartFill : ICON_TYPE.heartEmpty}
              color={onLike ? 'redSalon500' : 'blackSalon300'}
              size={12}
              margin="0 0.25rem 0 0"
              lineHeight="19px"
              onClick={() => setOnLike(!onLike)}
            />
            <CaptionRegular12 color="blackSalon300" lineHeight="19px" margin="0 0.75rem 0 0">
              {data.userInterest.favoritesCount}
            </CaptionRegular12>
          </Row>
        </Row>
        <Column margin="2rem 0 1.5rem">
          <TextRegular16 color="blackSalon500">판매자 정책</TextRegular16>
          <Row margin="1rem 0 0 0">
            {doGetSalesPolicy().map((data: string, idx: number) => (
              <Bedge key={idx}>{data}</Bedge>
            ))}
          </Row>
        </Column>
        <Row
          justifyContent="space-between"
          padding="0 0 1.313rem"
          margin="0 0 2rem"
          border="1px solid #E8E8E8"
          borderWidth="0 0 1px"
        >
          <TextRegular16 color="blackSalon500">거래 가능 주소</TextRegular16>
          <TextRegular16 color="blackSalon400">
            {data.salesPolicy.directTradeLocation}
          </TextRegular16>
        </Row>
      </Layout>
      <Layout padding="0 1rem">
        <GameInfoCard
          itemInfo={data.itemInfo}
          salesItemWeight={data.salesItemWeight}
          salesText={data.salesText}
        />
        <GameStatusCard data={data.salesItemCondition} margin="2.5rem 0 4.5rem" />
      </Layout>
      {anotherGameData.length > 0 && (
        <>
          <GrayBox />
          <Layout padding="2rem 0 5.125rem 1.625rem">
            <HeadBold18 margin="0 0 1.5rem">{data.seller.name}님의 다른 판매 게임</HeadBold18>
            <AnotherGameSwiper data={anotherGameData} />
          </Layout>
        </>
      )}
      {data.itemInfo.knownLowestPrice && (
        <LowestPriceBox>
          <TextBold14 color="blackSalon0">
            가격비교 현재 최저가 {data.itemInfo.knownLowestPrice.toLocaleString()}원
          </TextBold14>
        </LowestPriceBox>
      )}
      <BottomBox>
        <SalesPrice>
          <HeadBold20 color="redSalon400">{data.salesPrice.toLocaleString()}원</HeadBold20>
        </SalesPrice>
        <TransactionInquiryButton>
          <HeadBold20 color="blackSalon0" onClick={() => console.log('거래문의 페이지로 이동')}>
            거래문의
          </HeadBold20>
        </TransactionInquiryButton>
      </BottomBox>
    </DefaultLayout>
  );
};

export default SalesDetail;

const SalesPrice = styled(Row)`
  flex: 2;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: ${(props) => props.theme.color.blackSalon50};
`;

const TransactionInquiryButton = styled(SalesPrice)`
  flex: 3;
  background: ${(props) => props.theme.color.redSalon500};
`;

const LowestPriceBox = styled(Row)`
  position: fixed;
  left: 50%;
  bottom: 5.5rem;
  transform: translate(-50%, 0);
  justify-content: center;
  align-items: center;
  min-width: 13.25rem;
  height: 1.563rem;
  padding: 0 1rem;
  border-radius: 0.688rem;
  background: ${(props) => props.theme.color.subBlue400};
  z-index: 10;
`;

const POLICY_DATA: SalesPolicyType = {
  directTrade: '직거래 가능',
  deliveryTrade: '택배거래 가능',
  negotiable: '거래협상 가능',
};
