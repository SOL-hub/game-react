import { BarBackWithComponent } from 'components/common/Bar';
import { IconInput, INPUT_ICON_TYPE, INPUT_MODE } from 'components/common/Input';
import { DefaultLayout } from 'components/common/Layout';
import React from 'react';

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
    </DefaultLayout>
  );
};

export default SearchIntro;
