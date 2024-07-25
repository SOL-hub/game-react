import { BarBackWithComponent } from 'components/common/Bar';
import { IconInput, INPUT_ICON_TYPE, INPUT_MODE } from 'components/common/Input';
import styled from 'styled-components';
import { DefaultLayout, Layout, Column, Row } from 'components/common/Layout';
import React from 'react';
import { TextRegular16, TextRegular14 } from 'components/common/Typo';
import { IconButton, ICON_TYPE } from 'components/common/Icon';
import { MediumButton } from 'components/common/Button';

const SearchIntro = () => {
  return (
    <DefaultLayout>
      <BarBackWithComponent padding="0 1.375rem 0 1rem">
        <IconInput
          mode={INPUT_MODE.medium}
          iconType={INPUT_ICON_TYPE.leadingTrailingIcon}
          placeholder="보드게임 검색하기"
          width="calc(100% - 3.375rem + 14px)"
        />
      </BarBackWithComponent>
      <Layout padding="0 1rem">
        <Column padding="0.5rem 0 2rem">
          <SearchIntroTitle margin="0 0 0.5rem">최근 검색어</SearchIntroTitle>
          {['스컬킹2', '보드겟뚜', '뱅 2'].map((item, idx) => (
            <RecentSearch key={idx}>
              <TextRegular14 color="blackSalon500">{item}</TextRegular14>
              <IconButton iconName={ICON_TYPE.close} color="blackSalon200" />
            </RecentSearch>
          ))}
        </Column>
        <Column padding="0.5rem 0 2rem">
          <SearchIntroTitle margin="0 0 0.5rem">연관 검색어</SearchIntroTitle>
          {['스컬킹2', '보드겟뚜', '뱅 2'].map((item, idx) => (
            <TextRegular14 margin=" 0.5rem 0" lineHeight="17px" color="blackSalon500" key={idx}>
              {item}
            </TextRegular14>
          ))}
        </Column>
        <Column>
          <SearchIntroTitle>상세하게 원하는 게임을 찾고 싶다면?</SearchIntroTitle>
          <MediumButton mode="soft" onClick={() => console.log('카테고리 검색 페이지로 이동')}>
            카테고리 검색하기
          </MediumButton>
        </Column>
      </Layout>
    </DefaultLayout>
  );
};

export default SearchIntro;

const SearchIntroTitle = styled(TextRegular16)`
  margin: ${(props) => props.margin || '0 0 1rem'};
  color: ${(props) => props.theme.color.blackSalon300};
`;

const RecentSearch = styled(Row)`
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
`;
