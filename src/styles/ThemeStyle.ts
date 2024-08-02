const mediaSize = {
  Desktop: '(max-width: 1024px)',
  Tablet: '(max-width: 768px)',
  Mobile: '(max-width: 414px)',
};

export const color = {
  redSalon50: '#FFF3F3',
  redSalon100: '#FFD4D4',
  redSalon200: '#FAABAB',
  redSalon300: '#F98686',
  redSalon400: '#F56060',
  redSalon500: '#FB4846',
  redSalon600: '#D83F3E',
  redSalon700: '#B83130',
  redSalon800: '#961D1C',
  blackSalon0: '#FFFFFF',
  blackSalon50: '#FAF8F8',
  blackSalon100: '#E8E8E8',
  blackSalon200: '#C4C4C4',
  blackSalon300: '#878585',
  blackSalon400: '#645F5F',
  blackSalon500: '#302C2C',
  blackSalon600: '#1B1717',
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
