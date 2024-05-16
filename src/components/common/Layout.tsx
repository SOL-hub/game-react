import styled from 'styled-components';

interface LayoutStyle {
  direction?: string;
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
  borderWidth?: string;
  background?: string;
}

export const DefaultLayout = styled.section`
  width: 100%;
  max-width: 414px;
  margin: 0 auto;
`;

export const MainLayout = styled(DefaultLayout)<LayoutStyle>`
  padding: 0 1.5rem;
  background: ${(props) => props.theme.color[props.background as keyof typeof props.theme.color]};
`;

export const Flex = styled.div<LayoutStyle>`
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: ${(props) => props.flexWrap || 'wrap'};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.width};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  border: ${(props) => props.border};
  border-width: ${(props) => props.borderWidth};
  background: ${(props) => props.background};
`;

export const Row = styled(Flex)`
  flex-direction: row;
`;

export const Column = styled(Flex)`
  flex-direction: column;
`;

export const Grid = styled.div<LayoutStyle>`
  display: grid;
  gap: ${(props) => props.gap};
  grid-template-columns: ${(props) => props.columns};
  grid-template-rows: ${(props) => props.rows};
  place-content: ${(props) => props.placeContent};
`;
