import { BarBackWithComponent } from 'components/common/Bar';
import { IconInput, INPUT_ICON_TYPE, INPUT_MODE } from 'components/common/Input';
import styled from 'styled-components';
import { DefaultLayout, Flex, Layout } from 'components/common/Layout';
import React from 'react';
import { TextRegular16, TextRegular14, TextBold14 } from 'components/common/Typo';
import { IconButton, ICON_TYPE } from 'components/common/Icon';
import { MediumButton } from 'components/common/Button';
import useSearch from 'hooks/sales/useSearch';
import { TextChip } from 'components/common/Chip';
import { Divider2 } from 'components/common/Divider';
import SearchFilter from 'domain/Search/SearchFilter';
import LatestDropBox from 'domain/Search/LatestDropBox';
import { Checkbox } from 'components/molecules/Checkbox';
import useCheckbox from 'components/common/useCheckbox';

const Search = () => {
  const {
    searchValue,
    setSearchValue,
    recentSearches,
    doSearch,
    doDeleteRecentSearches,
    relatedSearches,
  } = useSearch();

  const { checkboxValue, onChangeCheckbox } = useCheckbox(false);

  console.log(recentSearches.slice(0, 3));

  return (
    <DefaultLayout>
      <BarBackWithComponent padding="0 1.375rem 0 1rem">
        <IconInput
          mode={INPUT_MODE.medium}
          iconType={INPUT_ICON_TYPE.leadingTrailingIcon}
          placeholder="보드게임 검색하기"
          width="calc(100% - 3.375rem + 14px)"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && doSearch()}
          leadingOnClick={() => doSearch()}
          trailingOnClick={() => setSearchValue('')}
        />
      </BarBackWithComponent>
      <Layout padding="0 1rem">
        <Flex column padding="0.5rem 0 2rem">
          <SearchTitle margin="0 0 0.5rem">최근 검색어</SearchTitle>
          {['스컬킹2', '보드겟뚜', '뱅 2'].map((item, idx) => (
            <RecentSearch key={idx}>
              <TextRegular14 color="black500">{item}</TextRegular14>
              <IconButton iconName={ICON_TYPE.close} color="black200" />
            </RecentSearch>
          ))}
        </Flex>
        <Flex padding="0.5rem 0 2rem">
          <SearchTitle margin="0 0 0.5rem">연관 검색어</SearchTitle>
          {['스컬킹2', '보드겟뚜', '뱅 2'].map((item, idx) => (
            <TextRegular14 margin=" 0.5rem 0" lineHeight="17px" color="black500" key={idx}>
              {item}
            </TextRegular14>
          ))}
        </Flex>
        <Flex column>
          <SearchTitle>상세하게 원하는 게임을 찾고 싶다면?</SearchTitle>
          <MediumButton mode="soft" onClick={() => console.log('카테고리 검색 페이지로 이동')}>
            카테고리 검색하기
          </MediumButton>

          {relatedSearches.length > 0 ? (
            <>
              <SearchTitle margin="0 0 0.5rem">연관 검색어</SearchTitle>
              {relatedSearches.map((item, idx) => (
                <TextRegular14
                  key={idx}
                  margin=" 0.5rem 0"
                  lineHeight="17px"
                  color="black500"
                  onClick={() => console.log(`클릭 시 선택한 연관검색어가 검색됨`)}
                >
                  {item}
                </TextRegular14>
              ))}
            </>
          ) : (
            <>
              <SearchTitle margin="0 0 0.5rem">최근 검색어</SearchTitle>
              {recentSearches.slice(0, 3).map((item, idx) => (
                <RecentSearch key={idx}>
                  <TextRegular14
                    color="black500"
                    onClick={() => console.log(`클릭시 ${item.text} 검색됨 `)}
                  >
                    {item.text}
                  </TextRegular14>
                  <IconButton
                    iconName={ICON_TYPE.close}
                    color="black200"
                    onClick={() => doDeleteRecentSearches(item.id)}
                  />
                </RecentSearch>
              ))}
            </>
          )}
        </Flex>
      </Layout>
      <Layout padding="0">
        <Flex padding="1rem 1.5rem 0.5rem" alignItems="center">
          <TextBold14 color="red500">연관검색</TextBold14>
          {relatedSearches.slice(0, 3).map((item, idx) => (
            <TextChip key={idx} margin="0 0 0 0.875rem">
              {item}
            </TextChip>
          ))}
        </Flex>
        <Divider2 />
        divider
        <Flex column style={{ position: 'sticky' }}>
          <Flex padding="0.625rem 1.5rem">
            <LatestDropBox />
            <SearchFilter />
            <Checkbox
              id="new"
              label="새 제품만 보기"
              margin="0 0 0 auto"
              checked={checkboxValue}
              onChange={onChangeCheckbox}
            />
          </Flex>
          <Divider2 />
        </Flex>
      </Layout>
    </DefaultLayout>
  );
};

export default Search;

const SearchTitle = styled(TextRegular16)`
  margin: ${(props) => props.margin || '0 0 1rem'};
  color: ${(props) => props.theme.color.black300};
`;

const RecentSearch = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  height: 2.5rem;
`;
