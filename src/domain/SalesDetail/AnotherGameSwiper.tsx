import React from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { Column } from '../../components/common/Layout';
import { TextBold16 } from '../../components/common/Typo';

interface dataProps {
  data: any;
}

const SWIPER_PARAMS = {
  slidesPerView: 'auto',
  spaceBetween: 16,
};

const AnotherGameSwiper = ({ data }: dataProps) => {
  return (
    <SwiperContainer>
      <Swiper {...SWIPER_PARAMS}>
        {data.map((item: any, idx: number) => (
          <div key={idx}>
            <AnotherGameCard data={item} />
          </div>
        ))}
      </Swiper>
    </SwiperContainer>
  );
};

export default AnotherGameSwiper;

export const AnotherGameCard = ({ data }: dataProps) => {
  const { thumbnailUrl, itemName, title, salesPrice } = data;

  return (
    <Column
      width="7.5rem"
      onClick={() => console.log('판매자의 다른 게임의 salesDetail 페이지로 연결됨')}
    >
      <ThumbnailImage src={thumbnailUrl} alt="판매자의 다른 게임 이미지" />
      <Column margin="1rem 0">
        <GameName>{itemName}</GameName>
        <SalesTitle>{title}</SalesTitle>
      </Column>
      <TextBold16 margin="0 0 0 auto" color="redSalon500">
        {salesPrice.toLocaleString()}원
      </TextBold16>
    </Column>
  );
};

const SwiperContainer = styled.div`
  .swiper-slide {
    width: auto;
  }
`;

const ThumbnailImage = styled.img`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 0.5rem;
  object-fit: cover;
`;

const GameName = styled(TextBold16)`
  display: block;
  width: 7.5rem;
  color: ${(props) => props.theme.color.blackSalon500};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SalesTitle = styled(GameName)`
  margin: 0.5rem 0 0;
  color: ${(props) => props.theme.color.blackSalon400};
  font-weight: 400;
`;
