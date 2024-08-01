import React, { useState } from 'react';
import { Flex } from 'components/common/Layout';
import { TextWithIconButton } from 'components/molecules/TextWithIcon';
import { ICON_TYPE } from 'components/common/Icon';

const LatestDropBox = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <Flex padding="0 1rem 0 0">
      <TextWithIconButton
        text="최신순"
        iconData={{ iconName: isShow ? ICON_TYPE.arrowV1Up : ICON_TYPE.arrowV1Down }}
        onClick={() => setIsShow(!isShow)}
      />
    </Flex>
  );
};

export default LatestDropBox;
