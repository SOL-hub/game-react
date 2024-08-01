import { IconProps } from '../components/common/Icon';
import { color as themeColor } from '../styles/ThemeStyle';

export type ICON_NAME_TYPE = (typeof ICON_NAME)[keyof typeof ICON_NAME];
export const ICON_NAME = {
  arrowV1Up: 'arrowV1Up',
  arrowV1Down: 'arrowV1Down',
  arrowV1Left: 'arrowV1Left',
  arrowV1Right: 'arrowV1Right',
  arrowV2Right: 'arrowV2Right',
  heartEmpty: 'heartEmpty',
  heartFill: 'heartFill',
  search: 'search',
  closeCircle: 'closeCircle',
  close: 'close',
  filter: 'filter',
} as const;

export const getIconSVGPath = ({ iconName, color }: IconProps) => {
  const colorValue = themeColor[color as keyof typeof themeColor];

  switch (iconName) {
    case ICON_NAME.arrowV1Up:
      return (
        <path
          d="M18 15L12 9L6 15"
          stroke={colorValue}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      );
    case ICON_NAME.arrowV1Down:
      return (
        <path
          d="M17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L17.2929 8.29289ZM12 15L12.7071 15.7071L12 16.4142L11.2929 15.7071L12 15ZM5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L5.29289 9.70711ZM18.7071 9.70711L12.7071 15.7071L11.2929 14.2929L17.2929 8.29289L18.7071 9.70711ZM11.2929 15.7071L5.29289 9.70711L6.70711 8.29289L12.7071 14.2929L11.2929 15.7071Z"
          fill={colorValue}
        />
      );
    case ICON_NAME.arrowV1Left:
      return (
        <path
          d="M15 6L9 12L15 18"
          stroke={colorValue}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      );
    case ICON_NAME.arrowV1Right:
      return (
        <path
          d="M9 6L15 12L9 18"
          stroke={colorValue}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      );
    case ICON_NAME.arrowV2Right:
      return (
        <path
          d="M5 12H19M19 12L12 5M19 12L12 19"
          stroke={colorValue}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      );
    case ICON_NAME.heartEmpty:
      return (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.5 3C8.54308 2.99938 9.57096 3.25004 10.4967 3.73079C11.0488 4.01754 11.5549 4.38111 12.0007 4.809C13.1677 3.68948 14.7536 3 16.5 3C20.0898 3 23 5.91022 23 9.5C23 12.6341 21.164 15.4994 19.0231 17.6615C16.8724 19.8334 14.2421 21.4717 12.3153 22.112C12.1106 22.18 11.8894 22.18 11.6847 22.112C9.75789 21.4717 7.12762 19.8334 4.97693 17.6615C2.83596 15.4994 1 12.6341 1 9.5C1 5.91045 3.90983 3.00038 7.49929 3M9.57488 5.5057C8.93415 5.17295 8.22268 4.99949 7.50071 5L7.5 5C5.01478 5 3 7.01479 3 9.5C3 11.8659 4.41404 14.2506 6.39807 16.2543C8.24453 18.119 10.4369 19.502 12 20.101C13.5631 19.502 15.7555 18.119 17.6019 16.2543C19.586 14.2506 21 11.8659 21 9.5C21 7.01479 18.9852 5 16.5 5C14.9789 5 13.6334 5.75391 12.8177 6.91262C12.6303 7.17887 12.325 7.33721 11.9994 7.337C11.6738 7.3368 11.3686 7.17808 11.1816 6.91159C10.7667 6.32069 10.2156 5.83845 9.57488 5.5057Z"
          fill={colorValue}
        />
      );
    case ICON_NAME.heartFill:
      return (
        <>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.5 3C8.54308 2.99938 9.57096 3.25004 10.4967 3.73079C11.0488 4.01754 11.5549 4.38111 12.0007 4.809C13.1677 3.68948 14.7536 3 16.5 3C20.0898 3 23 5.91022 23 9.5C23 12.6341 21.164 15.4994 19.0231 17.6615C16.8724 19.8334 14.2421 21.4717 12.3153 22.112C12.1106 22.18 11.8894 22.18 11.6847 22.112C9.75789 21.4717 7.12762 19.8334 4.97693 17.6615C2.83596 15.4994 1 12.6341 1 9.5C1 5.91045 3.91054 3.00038 7.5 3Z"
            fill={colorValue}
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.5 3C8.54308 2.99938 9.57096 3.25004 10.4967 3.73079C11.0488 4.01754 11.5549 4.38111 12.0007 4.809C13.1677 3.68948 14.7536 3 16.5 3C20.0898 3 23 5.91022 23 9.5C23 12.6341 21.164 15.4994 19.0231 17.6615C16.8724 19.8334 14.2421 21.4717 12.3153 22.112C12.1106 22.18 11.8894 22.18 11.6847 22.112C9.75789 21.4717 7.12762 19.8334 4.97693 17.6615C2.83596 15.4994 1 12.6341 1 9.5C1 5.91045 3.91054 3.00038 7.5 3ZM9.57488 5.5057C8.93415 5.17295 8.22268 4.99949 7.50071 5C5.01549 5 3 7.01479 3 9.5C3 11.8659 4.41404 14.2506 6.39807 16.2543C8.24453 18.119 10.4369 19.502 12 20.101C13.5631 19.502 15.7555 18.119 17.6019 16.2543C19.586 14.2506 21 11.8659 21 9.5C21 7.01479 18.9852 5 16.5 5C14.9789 5 13.6334 5.75391 12.8177 6.91262C12.6303 7.17887 12.325 7.33721 11.9994 7.337C11.6738 7.3368 11.3686 7.17808 11.1816 6.91159C10.7667 6.32069 10.2156 5.83845 9.57488 5.5057Z"
            fill={colorValue}
          />
        </>
      );
    case ICON_NAME.search:
      return (
        <path
          d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          stroke={colorValue}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      );
    case ICON_NAME.closeCircle:
      return (
        <path
          d="M17.6997 6.33416C14.5797 3.22195 9.45987 3.22195 6.33994 6.33416C3.22002 9.44638 3.22002 14.5536 6.33994 17.6658C9.45987 20.7781 14.4997 20.7781 17.6197 17.6658C20.7396 14.5536 20.8196 9.44638 17.6997 6.33416ZM14.8184 14.7944C14.5096 15.1024 14.0099 15.1024 13.7012 14.7944L12.0198 13.1172L10.3385 14.7944C10.0297 15.1024 9.52999 15.1024 9.22126 14.7944C8.91145 14.4854 8.91145 13.9835 9.22126 13.6744L10.8998 12L9.22126 10.3256C8.91145 10.0165 8.91145 9.51465 9.22126 9.2056C9.52999 8.89763 10.0297 8.89763 10.3385 9.2056L12.0198 10.8828L13.7012 9.2056C14.0099 8.89763 14.5096 8.89763 14.8184 9.2056C15.1282 9.51465 15.1282 10.0165 14.8184 10.3256L13.1398 12L14.8184 13.6744C15.1282 13.9835 15.1282 14.4854 14.8184 14.7944Z"
          fill={colorValue}
        />
      );
    case ICON_NAME.close:
      return (
        <path
          d="M18 6L6 18M6 6L18 18"
          stroke={colorValue}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      );
    case ICON_NAME.filter:
      return (
        <>
          <circle cx="16.2857" cy="15.4285" r="3.28571" stroke={colorValue} stroke-width="2" />
          <circle cx="7.7143" cy="8.28571" r="3.28571" stroke={colorValue} stroke-width="2" />
          <path d="M2 8.28613H4" stroke={colorValue} stroke-width="2" stroke-linecap="round" />
          <path
            d="M2 15.2861H13.0009"
            stroke={colorValue}
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M11 8.28613L22 8.28613"
            stroke={colorValue}
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M20 15.2861L22 15.2861"
            stroke={colorValue}
            stroke-width="2"
            stroke-linecap="round"
          />
        </>
      );
    default:
      return;
  }
};
