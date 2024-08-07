import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Flex } from 'components/common/Layout';
import { Icon, ICON_TYPE } from 'components/common/Icon';
import { CaptionRegular12 } from 'components/common/Typo';

const PAGE_DIVISOR = 5;
const INCREASE = 'increase';
const DECREASE = 'decrease';

interface PageNumberProps {
  totalPages: number;
  currentPage: number;
  setCurrentPage: (pageNum: number) => void;
}

export const PageControlNumber = ({ totalPages, currentPage, setCurrentPage }: PageNumberProps) => {
  const isOnePage = totalPages === 1;

  const doSetIconColor = (condition: number) => {
    if (isOnePage) return 'black300';

    return currentPage === condition ? 'black300' : 'red500';
  };

  const pages = useMemo(
    () => Array.from({ length: totalPages }, (v, i) => i).map((num) => num + 1),
    [totalPages],
  );
  const start =
    Math.floor((currentPage + (currentPage % PAGE_DIVISOR === 0 ? -1 : 0)) / PAGE_DIVISOR) *
    PAGE_DIVISOR;
  const displayPages =
    totalPages <= PAGE_DIVISOR ? pages : pages.slice(start, start + PAGE_DIVISOR);

  const doChangePageNum = (type: string) => {
    if (isOnePage) return;
    if (type === DECREASE && currentPage > 1) setCurrentPage(currentPage - 1);
    if (type === INCREASE && currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <Flex justifyContent="space-between" width="100%" height="3.5rem" padding="1rem 1.5rem">
      <Icon
        iconName={ICON_TYPE.arrowV1Left}
        color={doSetIconColor(1)}
        onClick={() => doChangePageNum(DECREASE)}
      />
      <Flex>
        {displayPages.map((item, idx) => (
          <PageNum
            key={idx}
            color={item === currentPage && !isOnePage ? 'red500' : 'black400'}
            onClick={() => doChangePageNum(INCREASE)}
          >
            {item}
          </PageNum>
        ))}
      </Flex>
      <Icon
        iconName={ICON_TYPE.arrowV1Right}
        color={doSetIconColor(totalPages)}
        onClick={() => !isOnePage && doChangePageNum(INCREASE)}
      />
    </Flex>
  );
};

const PageNum = styled(CaptionRegular12)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 1rem;
  margin: 0 0 0 1rem;
  cursor: pointer;
  :first-child {
    margin: 0;
  }
`;
