import React from 'react';
import styled from 'styled-components';
import { Card, Flex } from '../../components/common/Layout';
import {
  TitleWithRedBedge,
  GreyTitleWithContents,
} from '../../components/template/TitleAndContents';

import { BedgeHashtag } from '../../components/common/Bedge';

import { BodyRegular16 } from '../../components/common/Typo';
import { MediumButton } from '../../components/common/Button';

interface salesCardProps {
  data?: any;
  itemInfo?: any;
  salesItemWeight?: string;
  salesText?: string;
  margin?: string;
}

type TransformationType = { [key: string]: string };

export const GameInfoCard = ({ itemInfo, salesItemWeight, salesText, margin }: salesCardProps) => {
  const {
    averageWeight,
    koreanItemName,
    representCategory: { representCategoryKoreanName },
    playingTime,
    minPlayers,
    maxPlayers,
  } = itemInfo;

  const doGetBoardGameGeekWeight = () => {
    const getRatingBool = (min: number, max: number): boolean =>
      averageWeight >= min && averageWeight < max;

    return getRatingBool(0, 1.5)
      ? USER_GAME_WEIGHT.LOW
      : getRatingBool(1.5, 2)
      ? USER_GAME_WEIGHT.MIDDLE
      : getRatingBool(2, 2.5)
      ? USER_GAME_WEIGHT.HARD
      : getRatingBool(2.5, 5.1)
      ? USER_GAME_WEIGHT.VERY_HARD
      : '난이도 정보없음';
  };

  const doGetSalesItemWeight = () => {
    return salesItemWeight ? USER_GAME_WEIGHT[salesItemWeight] : doGetBoardGameGeekWeight();
  };

  return (
    <Card padding="1rem 0.5rem 1.5rem" margin={margin}>
      <TitleWithRedBedgeBox>
        <TitleWithRedBedge title="게임 정보" contents={doGetSalesItemWeight()} margin="0" />
      </TitleWithRedBedgeBox>
      <GreyTitleWithContents title="게임 이름" contents={koreanItemName} />
      <Flex margin="0.75rem 0 0 auto">
        <BedgeHashtag>{representCategoryKoreanName}</BedgeHashtag>
      </Flex>
      <GreyTitleWithContents title="게임소요시간" contents={`${playingTime}분`} />
      <GreyTitleWithContents title="플레이인원" contents={`${minPlayers}인 ~ ${maxPlayers}인`} />
      <BodyRegular16 margin="1.5rem 0">{salesText}</BodyRegular16>
      <MediumButton
        mode="outlineGray"
        onClick={() => console.log('외부 게임 정보를 클릭하면 팝업창이 나타난다')}
      >
        외부 게임 정보
      </MediumButton>
    </Card>
  );
};

export const GameStatusCard = ({ data, margin }: salesCardProps) => {
  const { almonstNew, useTime, missingComponent, damagedComponent, restrictionPlaying } = data;

  const infoStatus = [
    ['사용 횟수', USE_TIME[useTime]],
    ['구성품 훼손 상태', DAMAGED_COMPONENT[damagedComponent]],
    ['구성품 누락 상태', MISSING_COMPONENT[missingComponent]],
    ['플레이 지장 여부', RESTRICTION_PLAYING[restrictionPlaying]],
  ];

  return (
    <Card padding="1rem 0.5rem 1.5rem" margin={margin}>
      <TitleWithRedBedgeBox isMaintain={almonstNew}>
        <TitleWithRedBedge
          title="게임 상태 설명"
          contents={almonstNew ? '새제품' : '사용감 있음'}
          margin="0"
        />
      </TitleWithRedBedgeBox>
      {!almonstNew &&
        infoStatus.map((item, idx) => (
          <GreyTitleWithContents title={item[0]} contents={item[1]} key={idx} />
        ))}
    </Card>
  );
};

const TitleWithRedBedgeBox = styled(Flex)`
  padding: ${(props) => (props.isMaintain ? '0' : '0 0 1rem')};
  border: ${(props) => (props.isMaintain ? 'none' : '1px solid #e8e8e8')};
  border-width: ${(props) => (props.isMaintain ? '0' : '0 0 1px')};
`;

/** 데이터 */
const USER_GAME_WEIGHT: TransformationType = {
  VERY_HARD: '난이도 최상',
  HARD: '난이도 상',
  NORMAL: '난이도 중',
  EASY: '난이도 하',
};

const USE_TIME: TransformationType = { LESS: '0~5회', OVER_FIVE: '5회 이상' };

const MISSING_COMPONENT: TransformationType = { YES: '누락 있음', NO: '누락 없음' };

const DAMAGED_COMPONENT: TransformationType = { YES: '훼손 있음', NO: '훼손 없음' };

const RESTRICTION_PLAYING: TransformationType = { YES: '지장 있음', NO: '지장 없음' };
