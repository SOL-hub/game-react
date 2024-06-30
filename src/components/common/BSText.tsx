import { CSSProperties } from 'react';
import { Colors, colors } from '../../styles/colorPalette';
import { Typography, typographyMap } from '../../styles/typography';
import styled from '@emotion/styled';

interface BSTextProps {
  typography?: Typography;
  color?: Colors;
  display?: CSSProperties['display'];
  textAlign?: CSSProperties['textAlign'];
  fontWeight?: CSSProperties['fontWeight'];
  bold?: boolean;
}

const BSText = styled.span<BSTextProps>(
  ({ color = 'blackSalon300', display, textAlign, fontWeight, bold }) => ({
    color: colors[color],
    display,
    textAlign,
    fontWeight: bold ? 'bold' : fontWeight,
  }),
  ({ typography = 'TextRegular16' }) => typographyMap[typography],
);

export default BSText;
