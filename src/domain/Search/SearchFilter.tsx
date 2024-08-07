import React from 'react';
import { TextWithIcon } from 'components/molecules/TextWithIcon';
import { ICON_TYPE } from 'components/atom/Icon';

const SearchFilter = () => {
  return (
    <TextWithIcon
      text="필터"
      iconData={{ iconName: ICON_TYPE.filter }}
      onClick={() => console.log('필터창 열림')}
    />
  );
};

export default SearchFilter;
