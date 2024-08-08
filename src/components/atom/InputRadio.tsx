import styled from 'styled-components';
import { InputStyle, strokeColor, svgDataUrl } from './InputCheckbox';

const setDefaultRadio = (size: number, color: string) => {
  return svgDataUrl(
    size,
    `"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z' stroke='%23${color}' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"`,
    `"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z' stroke='%23${color}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"`,
  );
};

const setSelectedRadio = (size: number, color: string) => {
  return svgDataUrl(
    size,
    `"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19Z' stroke='%23%${color}' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='12' cy='12' r='5' fill='%23${color}'/%3E%3C/svg%3E%0A"`,
    `"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z' stroke='%23${color}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Ccircle cx='12' cy='12' r='7' fill='%23${color}'/%3E%3C/svg%3E%0A"`,
  );
};

export const InputRadio = styled.input<InputStyle>`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  background-image: ${({ size, theme }) =>
    `url(${setDefaultRadio(size, strokeColor(theme.color.black200))})`};
  :checked {
    background-image: ${({ size, theme, selectedColor }) =>
      `url(${setSelectedRadio(
        size,
        strokeColor(theme.color[selectedColor as keyof typeof theme.color]),
      )})`};
  }
`;
