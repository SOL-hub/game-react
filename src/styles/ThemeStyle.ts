const mediaSize = {
  Desktop: '(max-width: 1024px)',
  Tablet: '(max-width: 768px)',
  Mobile: '(max-width: 414px)',
  breakPoint: '26.75rem',
};

export const color = {
  red50: '#FFF3F3',
  red100: '#FFD4D4',
  red200: '#FAABAB',
  red300: '#F98686',
  red400: '#F56060',
  red500: '#FB4846',
  red600: '#D83F3E',
  red700: '#B83130',
  red800: '#961D1C',
  black0: '#FFFFFF',
  black50: '#FAF8F8',
  black100: '#E8E8E8',
  black200: '#C4C4C4',
  black300: '#878585',
  black400: '#645F5F',
  black500: '#302C2C',
  black600: '#1B1717',
  error50: '#FFF7EF',
  error500: '#F0790B',
  subBlue50: '#F1F3FF',
  subBlue400: '#5166D3',
};

export const fontSize = {
  12: '0.75rem',
  14: '0.875rem',
  15: '0.938rem',
  16: '1rem',
  18: '1.125rem',
  20: '1.25rem',
};

const ThemeStyle = { mediaSize, color, fontSize };

export type Theme = typeof ThemeStyle;

export default ThemeStyle;

export const propsColor = (stringColor) => stringColor as keyof typeof color;
