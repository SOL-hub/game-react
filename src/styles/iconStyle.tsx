import { IconProps } from '../components/atom/Icon';
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
  player: 'player',
  plus: 'plus',
  camera: 'camera',
  largeUnselectedRadio: 'largeUnselectedRadio',
  largeSelectedRadio: 'largeSelectedRadio',
  moreVertical: 'moreVertical',
  trash: 'trash',
  edit: 'edit',
  alertCircle: 'alertCircle',
  check: 'check',
  divideCircle: 'divideCircle',
  lock: 'lock',
  unlock: 'unlock',
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

    case ICON_NAME.player:
      return (
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.1122 9.58399C13.429 8.92937 14.3339 7.57037 14.3339 6C14.3339 3.79086 12.5431 2 10.3339 2C8.1248 2 6.33394 3.79086 6.33394 6C6.33394 7.56893 7.23722 8.92689 8.55211 9.5822L5.13547 15.5C4.75057 16.1667 5.23169 17 6.00149 17H14.6617C15.4315 17 15.9127 16.1667 15.5278 15.5L12.1122 9.58399Z"
          fill={colorValue}
        />
      );
    case ICON_NAME.plus:
      return (
        <path
          d="M12 5V19M5 12H19"
          stroke={colorValue}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      );
    case ICON_NAME.camera:
      return (
        <>
          <path
            d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z"
            stroke={colorValue}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
            stroke={colorValue}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </>
      );
    case ICON_NAME.largeUnselectedRadio:
      return (
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke={colorValue}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      );
    case ICON_NAME.largeSelectedRadio:
      return (
        <>
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke={colorValue}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <circle cx="12" cy="12" r="7" fill={colorValue} />
        </>
      );
    case ICON_NAME.moreVertical:
      return (
        <>
          <path
            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
            stroke={colorValue}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
            stroke={colorValue}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
            stroke={colorValue}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </>
      );
    case ICON_NAME.trash:
      return (
        <path
          d="M3 6H5M5 6H21M5 6V20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V6H5ZM8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M10 11V17M14 11V17"
          stroke={colorValue}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      );
    case ICON_NAME.edit:
      return (
        <path
          d="M11 3.99998H4C3.46957 3.99998 2.96086 4.2107 2.58579 4.58577C2.21071 4.96084 2 5.46955 2 5.99998V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13M18.5 2.49998C18.8978 2.10216 19.4374 1.87866 20 1.87866C20.5626 1.87866 21.1022 2.10216 21.5 2.49998C21.8978 2.89781 22.1213 3.43737 22.1213 3.99998C22.1213 4.56259 21.8978 5.10216 21.5 5.49998L12 15L8 16L9 12L18.5 2.49998Z"
          stroke={colorValue}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      );
    case ICON_NAME.alertCircle:
      return (
        <path
          d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          stroke={colorValue}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      );
    case ICON_NAME.check:
      return (
        <>
          <circle cx="12" cy="12" r="10" stroke={colorValue} stroke-width="2" />
          <path
            d="M7 12L11 15L17 8"
            stroke={colorValue}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </>
      );
    case ICON_NAME.divideCircle:
      return (
        <path
          d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          stroke={colorValue}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      );
    case ICON_NAME.lock:
      return (
        <>
          <rect x="3" y="11" width="18" height="10" rx="2" stroke={colorValue} stroke-width="2" />
          <path
            d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V11H7V8Z"
            stroke={colorValue}
            stroke-width="2"
          />
          <rect x="11" y="14" width="2" height="4" rx="1" fill={colorValue} />
        </>
      );
    case ICON_NAME.unlock:
    default:
      return;
  }
};
