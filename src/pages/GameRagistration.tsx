import React, { useState } from 'react';
import { BarBackWithTitle } from 'components/template/Bar';
import { useNavigate } from 'react-router-dom';
import { DefaultLayout, Layout, BottomBox, GrayBox, Grid } from 'components/atom/Layout';
import { TextRegular14 } from 'components/atom/Typo';
import RegistrationButton from 'domain/GameRegistration/RegistrationButton';
import ImageUploader from 'domain/GameRegistration/ImageUploader';
import RegistrationInfoInput from 'domain/GameRegistration/RegistrationInfoInput';
import { DefaultTextarea } from 'components/atom/Textarea';
import RegistrationInfo from 'domain/GameRegistration/RegistrationInfo';
import { OutlineChip } from 'components/atom/Chip';
import * as PATH from 'utils/path';
import { DefaultInput, INPUT_MODE } from 'components/atom/Input';
import { INPUT_TYPE, InputSelection } from 'components/molecules/InputSelection';
import useInputSelection from 'components/common/useInputSelection';
import RegistrationProductCondition from 'domain/GameRegistration/RegistrationProductCondition';

const GameRegistration = () => {
  const navigate = useNavigate();
  /** css 테스트값 */
  const registrationProgress = 4;
  const isWriting = registrationProgress > 0;
  const isCompleted = registrationProgress > 11;

  /** 로직 테스트 */
  const {
    radioValue: playtimeRadioValue,
    onChangeRadio: playtimeOnChangeRadio,
    radioChecked: playtimeRadioChecked,
  } = useInputSelection({
    LESS_THAN_15_MIN: false,
    MORE_THAN_15_MIN_LESS_THAN_30_MIN: false,
    MORE_THAN_30_MIN_LESS_THAN_60_MIN: false,
    MORE_THAN_1_HOUR: false,
  });

  const { checkboxValue, onChangeCheckbox } = useInputSelection(false);

  const {
    radioValue: difficultyRadioValue,
    onChangeRadio: difficultyOnChangeRadio,
    radioChecked: difficultyRadioChecked,
  } = useInputSelection({
    VERY_HARD: false,
    HARD: false,
    NORMAL: false,
    EASY: false,
  });

  const [isAlmostNew, setIsAlmostNew] = useState('');

  return (
    <DefaultLayout>
      <BarBackWithTitle isFixed={true} title="보드게임 판매하기">
        <TextRegular14
          margin="3px 0.5rem 0 0"
          color={isWriting ? 'red400' : 'black200'}
          style={{ cursor: 'pointer' }}
          onClick={() => isWriting && console.log('임시저장')}
        >
          임시저장
        </TextRegular14>
      </BarBackWithTitle>
      <Layout padding="5.25rem 1.5rem 1.875rem">
        <ImageUploader />
      </Layout>
      <GrayBox height="1px" background={100} />
      <Layout padding="2rem 1.5rem 5rem">
        <RegistrationInfoInput
          title="상품명"
          inputData={{ placeholder: '상품명을 입력해주세요' }}
        />
        <RegistrationInfoInput title="게임 소개" inputData={{ placeholder: '게시글 제목' }}>
          <DefaultTextarea
            style={{ margin: '1rem 0 0' }}
            placeholder="게임판매 게시글 내용을 작성해주세요.&#13;&#10;친절한 게임 설명은 판매에 도움이 됩니다."
          />
        </RegistrationInfoInput>

        <RegistrationInfo
          title="대표 카테고리"
          grayButton={{
            buttonText: '설명보기',
            onClick: () => {
              navigate(PATH.GAME_CATEGORY);
            },
          }}
        >
          <Grid gap="1rem 1rem" columns="repeat(4, 1fr)">
            {GAME_CATEGORY.map((item, idx) => (
              <OutlineChip key={idx} selected={false}>
                {item}
              </OutlineChip>
            ))}
          </Grid>
        </RegistrationInfo>

        <RegistrationInfo title="필요인원">
          <Grid gap="0 0.5rem" columns="repeat(2, 1fr)">
            {[['최소인원'], ['최대인원']]
              .map((item) => ({ placeholder: item[0] }))
              .map((item, idx) => (
                <DefaultInput
                  key={idx}
                  mode={INPUT_MODE.large}
                  type="number"
                  placeholder={item.placeholder}
                />
              ))}
          </Grid>
        </RegistrationInfo>
        <RegistrationInfo title="게임 플레이 시간은 어떤가요?">
          {GAME_PLAYING_TIME.map((item, idx) => (
            <InputSelection
              key={idx}
              inputType={INPUT_TYPE.radio}
              id={item.id}
              name="playingTime"
              label={item.label}
              margin={idx === GAME_PLAYING_TIME.length - 1 ? '0' : '0 0 1rem'} // 임시
              checked={item.id === playtimeRadioValue ? playtimeRadioChecked : false}
              onChange={(e) => playtimeOnChangeRadio(e)}
            />
          ))}
        </RegistrationInfo>
        <RegistrationInfoInput
          title="판매가격"
          inputData={{ placeholder: '원하시는 판매가격을 입력해주세요' }}
        >
          <InputSelection
            inputType={INPUT_TYPE.checkbox}
            id="negotiable"
            label="거래협의 가능"
            checked={checkboxValue}
            onChange={(e) => onChangeCheckbox(e)}
            size={14}
            margin="0.5rem 0 0 auto"
          />
        </RegistrationInfoInput>
        <RegistrationInfo title="게임의 난이도는 어떤가요?">
          {GAME_DIFFICULTY.map((item, idx) => (
            <InputSelection
              key={idx}
              inputType={INPUT_TYPE.radio}
              id={item.id}
              name="salesItemDifficulty"
              label={item.label}
              margin={idx === GAME_DIFFICULTY.length - 1 ? '0' : '0 0 1rem'} // 임시
              checked={item.id === difficultyRadioValue ? difficultyRadioChecked : false}
              onChange={(e) => difficultyOnChangeRadio(e)}
            />
          ))}
        </RegistrationInfo>
        <RegistrationInfo title="제품 상태는 어떤가요?">
          <Grid gap="0 1rem" columns="repeat(2, auto)">
            {GAME_CONDITION.map((item: any, idx: number) => (
              <RegistrationProductCondition
                key={idx}
                text={item.text}
                isChecked={isAlmostNew === item.value}
                onClick={() => setIsAlmostNew(item.value)}
                isArrow={item.isArrow}
              />
            ))}
          </Grid>
        </RegistrationInfo>
      </Layout>
      <BottomBox>
        <RegistrationButton registrationProgress={registrationProgress} isCompleted={isCompleted} />
      </BottomBox>
    </DefaultLayout>
  );
};

export default GameRegistration;

const GAME_CATEGORY = ['전략', '가족', '테마', '파티', '전쟁', '수집', '추상'];

const GAME_PLAYING_TIME = [
  ['LESS_THAN_15_MIN', '15분 미만'],
  ['MORE_THAN_15_MIN_LESS_THAN_30_MIN', '15 ~ 30분'],
  ['MORE_THAN_30_MIN_LESS_THAN_60_MIN', '30 ~ 1시간'],
  ['MORE_THAN_1_HOUR', '1시간 이상'],
].map((item) => ({ id: item[0], label: item[1] }));

const GAME_DIFFICULTY = [
  ['VERY_HARD', '최상'],
  ['HARD', '상'],
  ['NORMAL', '중'],
  ['EASY', '하'],
].map((item) => ({
  id: item[0],
  label: item[1],
}));

const GAME_CONDITION = [
  ['새제품', 'true', false],
  ['사용감 있음', 'false', true],
].map((item) => ({ text: item[0], value: item[1], isArrow: item[2] }));
