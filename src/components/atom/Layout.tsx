import styled from 'styled-components';

interface LayoutStyle {
  column?: boolean;
  flex?: number;
  flexDirection?: string;
  flexWrap?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
  columns?: string;
  rows?: string;
  placeContent?: string;
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  border?: string;
  borderRadius?: string;
  borderWidth?: string;
  background?: string | number;
  backgroundImage?: string;
  zIndex?: number;
  isMaintain?: boolean;
}

export const DefaultLayout = styled.section<LayoutStyle>`
  width: 100%;
  max-width: ${({ theme }) => theme.mediaSize.breakPoint};
  min-height: 100vh;
  padding: ${(props) => props.padding || '0 0 5rem'};
  margin: 0 auto;
  box-shadow: 0px 1px 13px rgb(0 0 0 / 10%);
`;

export const Layout = styled(DefaultLayout)<LayoutStyle>`
  min-height: auto;
  padding: ${(props) => props.padding || '0 1.5rem'};
  padding: 0 1.5rem;
  background: ${(props) => props.theme.color[props.background as keyof typeof props.theme.color]};
  box-sizing: none;
`;

export const Flex = styled.div<LayoutStyle>`
  /* {...style} */
  display: flex;
  flex: ${(props) => props.flex};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  flex-wrap: ${(props) => props.flexWrap || 'wrap'};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.width};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  border-width: ${(props) => props.borderWidth};
  background: ${(props) => props.theme.color[props.background as keyof typeof props.theme.color]};
`;

export const Grid = styled.div<LayoutStyle>`
  display: grid;
  gap: ${(props) => props.gap};
  grid-template-columns: ${(props) => props.columns};
  grid-template-rows: ${(props) => props.rows};
  place-content: ${(props) => props.placeContent};
`;

export const Circle = styled(Flex)`
  border-radius: 50%;
`;

export const Card = styled(Flex)`
  flex-direction: column;
  border-radius: ${(props) => props.borderRadius || '0.5rem'};
  box-shadow: 0px 1px 13px rgba(0, 0, 0, 0.05);
`;

export const GrayBox = styled(Flex)`
  width: 100%;
  height: ${({ height }) => height || '0.75rem'};
  background: ${(props) => props.theme.color[`black${props.background as number | 50}`]};
`;

export const BottomBox = styled(Flex)`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: ${({ theme }) => theme.mediaSize.breakPoint};
  height: ${(props) => props.height || '4.5rem'};
  z-index: ${(props) => props.zIndex || 10};
`;
