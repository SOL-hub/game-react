import styled from '@emotion/styled';
import { CSSProperties } from 'react';

interface BSFlexProps {
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  direction?: CSSProperties['flexDirection'];
}

const BSFlex = styled.div<BSFlexProps>(({ align, justify, direction }) => ({
  display: 'flex',
  alignItems: align,
  justifyContent: justify,
  flexDirection: direction,
}));

export default BSFlex;
