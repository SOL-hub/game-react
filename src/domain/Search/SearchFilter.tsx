import React from 'react';
import { TextWithIconButton } from 'components/molecules/TextWithIcon';
import { ICON_TYPE } from 'components/common/Icon';

const SearchFilter = () => {
  return (
    <TextWithIconButton
      text="필터"
      iconData={{ iconName: ICON_TYPE.filter }}
      onClick={() => console.log('필터창 열림')}
    />
  );
};

export default SearchFilter;
