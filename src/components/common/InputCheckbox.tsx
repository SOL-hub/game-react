import styled from 'styled-components';

interface InputStyle {
  size: number;
  defaultColor: string;
  selectedColor: string;
}

const strokeColor = (color: string) => color.replace('#', '');

const setDefaultCheckbox = (size: number, color: string) => {
  return size === 14
    ? `"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M17.4444 5H6.55556C5.69645 5 5 5.69645 5 6.55556V17.4444C5 18.3036 5.69645 19 6.55556 19H17.4444C18.3036 19 19 18.3036 19 17.4444V6.55556C19 5.69645 18.3036 5 17.4444 5Z' stroke='%23${color}' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"`
    : size === 16
    ? ` "data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z' stroke='%23${color}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"`
    : null;
};

const setSelectedCheckbox = (size: number, color: string) => {
  return size === 14
    ? `"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.73684 11.2222L12.1053 13.5556L20 5.77778M19.2105 12V17.4444C19.2105 17.857 19.0442 18.2527 18.7481 18.5444C18.452 18.8361 18.0503 19 17.6316 19H6.57895C6.16018 19 5.75857 18.8361 5.46246 18.5444C5.16635 18.2527 5 17.857 5 17.4444V6.55556C5 6.143 5.16635 5.74733 5.46246 5.45561C5.75857 5.16389 6.16018 5 6.57895 5H15.2632' stroke='%23${color}' stroke-width='1.4' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"`
    : size === 16
    ? `"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 11L12 14L22 4M21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H16' stroke='%23${color}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"`
    : null;
};

export const InputCheckbox = styled.input<InputStyle>`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  background-image: ${(props) =>
    `url(${setDefaultCheckbox(props.size, strokeColor(props.defaultColor))})`};
  :checked {
    background-image: ${(props) =>
      `url(${setSelectedCheckbox(props.size, strokeColor(props.selectedColor))})`};
  }
`;
