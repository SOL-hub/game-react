import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Flex, GrayBox } from 'components/common/Layout';
import {
  HeadBold20,
  HeadRegular18,
  CaptionBold12,
  TextRegular14,
  CaptionRegular12,
} from 'components/common/Typo';
import { BedgeBox } from 'components/common/Bedge';
import { Icon, ICON_TYPE } from 'components/common/Icon';
import * as PATH from '../../utils/path';

const SalesList = () => {
  const navigate = useNavigate();
  const isNew = true;
  const isReservation = true;
  const [onLike, setOnLike] = useState(false);

  return (
    <Flex column padding="1rem 1rem 0" onClick={() => navigate(`${PATH.SALES_DETAIL}/0`)}>
      <Flex>
        <Flex style={{ position: 'relative' }}>
          <ThumbnailImage
            src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
            alt="썸네일 이미지"
          />
          {isReservation && (
            <ReservationLabel>
              <CaptionRegular12 color="black0">예약중</CaptionRegular12>
            </ReservationLabel>
          )}
        </Flex>
        <Flex column>
          <HeadRegular18
            style={{
              width: 'calc(100vw - 9.25rem)',
              maxWidth: 'calc(428px - 9.25rem)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱보드살롱
          </HeadRegular18>
          <Flex margin="0.5rem 0 0">
            <BedgeBox height="1.688rem" background={isNew ? 'subBlue50' : 'black50'}>
              {isNew && (
                <CaptionBold12 margin="0 0.625rem 0 0" color="subBlue400">
                  새제품
                </CaptionBold12>
              )}
              <TextRegular14 color="black500">스플렌더</TextRegular14>
            </BedgeBox>
          </Flex>
          <Flex alignItems="center" margin="auto 0 0">
            <HeadBold20>150,000원</HeadBold20>
            <Icon
              iconName={ICON_TYPE.player}
              size={20}
              margin="0 0.188rem 0 auto"
              color="black500"
            />
            <CaptionBold12 color="black500">1~2</CaptionBold12>
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0.5rem 0 ">
        <Flex>
          <Icon
            iconName={onLike ? ICON_TYPE.heartFill : ICON_TYPE.heartEmpty}
            size={16}
            color={onLike ? 'red500' : 'black300'}
            onClick={() => setOnLike(!onLike)}
          />
          <TextRegular14 margin="0.15rem 0 0 0.25rem" color={`black${onLike ? 6 : 3}00`}>
            12
          </TextRegular14>
        </Flex>
        {['강남구 삼성동', '8시간전'].map((item, idx) => (
          <CaptionRegular12
            key={idx}
            color="black300"
            margin={`0.15rem 0 0 ${idx === 0 ? 'auto' : '0.5rem'}`}
          >
            {item}
          </CaptionRegular12>
        ))}
      </Flex>
      <GrayBox height="0.125rem" margin="0.5rem 0 0" color="black100" />
    </Flex>
  );
};

export default SalesList;

const ThumbnailImage = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;

const ReservationLabel = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  height: 1.688rem;
  padding: 0 0.5rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.red500};
`;
