import React, { useState, useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import { Flex } from 'components/common/Layout';

interface swiperProps {
  data: any;
}

const SWIPER_PARAMS = {
  loop: true,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
};

const SalesPhotoSwiper = ({ data }: swiperProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef<any>();

  const updateIndex = useCallback(() => {
    setCurrentIndex(swiperRef.current.swiper.realIndex);
  }, []);

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;

    if (swiperInstance) {
      swiperInstance.on('slideChange', updateIndex);
    }

    return () => {
      if (swiperInstance) {
        swiperInstance.off('slideChange', updateIndex);
      }
    };
  }, [updateIndex]);

  const salesImages = data.map((item: any) => item.image.url);

  return (
    <SwiperContainer>
      <Swiper {...SWIPER_PARAMS} ref={swiperRef}>
        {salesImages.map((item: string, idx: number) => (
          <SwiperImage src={item} key={idx} alt="보드게임 판매 이미지" />
        ))}
      </Swiper>
      <SwiperFraction>
        {[currentIndex + 1, '/', data.length].map((item: any, idx: number) => (
          <span key={idx}>{item}</span>
        ))}
      </SwiperFraction>
    </SwiperContainer>
  );
};

export default SalesPhotoSwiper;

const SwiperContainer = styled.div`
  position: relative;
  margin: 0.5rem 0 1rem;
  .swiper-container {
    padding-bottom: 2rem;
    .swiper-pagination {
      bottom: 0.75rem;
      .swiper-pagination-bullet-active.swiper-pagination-bullet {
        background: ${(props) => props.theme.color.red300};
      }
      .swiper-pagination-bullet {
        background: ${(props) => props.theme.color.black100};
        opacity: 1;
      }
    }
  }
`;

const SwiperFraction = styled(Flex)`
  justify-content: space-around;
  align-items: center;
  position: absolute;
  top: 14px;
  left: 12px;
  width: 51px;
  height: 24px;
  padding: 0 0.5rem;
  background: rgba(27, 23, 23, 0.5);
  border-radius: 0.5rem;
  color: ${(props) => props.theme.color.black0};
  font-size: 14px;
  line-height: 17px;
  z-index: 100;
`;

const SwiperImage = styled.img`
  width: 100%;
  height: 280px;
  border-radius: 1rem;
  object-fit: cover;
`;
