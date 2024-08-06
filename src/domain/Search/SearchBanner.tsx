import React from 'react';
import { Flex } from 'components/common/Layout';
import { Divider2 } from 'components/common/Divider';
import banner from 'assets/image/boardSalon_banner.png';

const SearchBanner = () => {
  return (
    <>
      <a href="https://blog.naver.com/boardgetddo_team" target="_blank" rel="noreferrer">
        <Flex padding="0.5rem 0.813rem">
          <img src={banner} alt="board salon banner" width="100%" />
        </Flex>
      </a>
      <Divider2 />
    </>
  );
};

export default SearchBanner;
