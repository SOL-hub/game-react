import styled from 'styled-components';
import { Flex } from 'components/atom/Layout';
import { CaptionRegular12 } from 'components/atom/Typo';

interface ToolTipProps {
  text?: string;
  direction?: typeof TOP | typeof RIGHT | typeof BOTTOM | typeof LEFT;
  margin?: string;
}

export const ToolTip = ({ direction = BOTTOM, text, margin = '0' }: ToolTipProps) => {
  return (
    <Flex
      column={[TOP, BOTTOM].includes(direction) ? true : false}
      alignItems="center"
      justifyContent="center"
      margin={margin}
    >
      {[TOP, LEFT].includes(direction) && <Polygon direction={direction} />}
      <ToolTipBox>
        <CaptionRegular12 color="black0" lineHeight="162.34%">
          {text}
        </CaptionRegular12>
      </ToolTipBox>
      {[BOTTOM, RIGHT].includes(direction) && <Polygon direction={direction} />}
    </Flex>
  );
};

export const TOP = 'top';
export const RIGHT = 'right';
export const BOTTOM = 'bottom';
export const LEFT = 'left';

const POLYGON_STYLE: { [key: string]: any } = {
  top: { margin: '0 0 -1px 0', degree: 0 },
  right: { margin: '0 0 0 -1px', degree: 90 },
  bottom: { margin: '-1px 0 0 0', degree: -180 },
  left: { margin: '0 -1px 0 0', degree: -90 },
};

const ToolTipBox = styled.div`
  position: relative;
  padding: 0.5rem;
  background: ${(props) => props.theme.color.subBlue400};
  border-radius: 0.5rem;
`;

const Polygon = styled.div<ToolTipProps>`
  width: 0px;
  height: 0px;
  margin: ${({ direction }) => direction !== undefined && POLYGON_STYLE[direction].margin};
  border-bottom: 0.656rem solid ${(props) => props.theme.color.subBlue400};
  border-left: 0.384rem solid transparent;
  border-right: 0.384rem solid transparent;
  transform: ${({ direction }) =>
    `rotate(${direction !== undefined && POLYGON_STYLE[direction].degree}deg)`};
`;
