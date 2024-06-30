import { css } from '@emotion/react';

import Flex from './BSFlex';
import Text from './BSText';

interface TopProps {
  title: string;
  subTitle: string;
}

function Top({ title, subTitle }: TopProps) {
  return (
    <Flex direction="column" css={containerStyles}>
      <Text bold={true} typography="CaptionBold12">
        {title}
      </Text>
      <Text typography="CaptionBold12">{subTitle}</Text>
    </Flex>
  );
}

const containerStyles = css`
  padding: 24px;
`;

export default Top;
