import 'styled-components';
import { Theme } from './ThemeStyle';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
  //DefaultTheme은 Theme에서 정의된 모든 속성을 상속받게 된다.
}
