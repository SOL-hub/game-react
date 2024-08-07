import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Flex, BottomBox } from 'components/common/Layout';
import { Icon, ICON_TYPE } from 'components/common/Icon';
import { CaptionRegular12 } from 'components/common/Typo';
import * as PATH from 'utils/path';

const BootmNavigation = ({ current = GAME_SEARCH }) => {
  const navigate = useNavigate();
  const [currentMenu, setCurrentMenu] = useState(current);

  return (
    <BottomBox height="auto" padding="0 1.5rem 1.5rem">
      <Card
        width="100%"
        height="5rem"
        padding="0.875rem 2rem"
        borderRadius="1rem"
        background="black0"
      >
        <Flex justifyContent="space-between" height="100%">
          {NAVI_DATA.map((item) => {
            const { id, icon, text, path } = item;
            const menuColor = id === currentMenu ? 'red500' : 'black200';

            return (
              <Flex
                key={id}
                column
                justifyContent="space-between"
                alignItems="center"
                height="100%"
                onClick={() => {
                  setCurrentMenu(id);
                  navigate(path);
                }}
              >
                <Icon iconName={ICON_TYPE[icon]} color={menuColor} />
                <CaptionRegular12 color={menuColor}>{text}</CaptionRegular12>
              </Flex>
            );
          })}
        </Flex>
      </Card>
    </BottomBox>
  );
};

export default BootmNavigation;

export const GAME_SEARCH = 'gameSearch';
export const GAME_SALES = 'gameSales';
export const MYPAGE = 'mypage';

const NAVI_DATA = [
  [GAME_SEARCH, ICON_TYPE.search, '검색하기', PATH.SEARCH],
  [GAME_SALES, ICON_TYPE.plus, '게임판매', PATH.SALES_REGISTRATION],
  // [MYPAGE, ICON_TYPE.player, '마이홈', PATH.MYPAGE],
  [MYPAGE, ICON_TYPE.player, '마이홈', PATH.LOGIN],
].map((item) => ({ id: item[0], icon: item[1], text: item[2], path: item[3] }));
