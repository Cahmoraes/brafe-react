import IThemeProps from '../../interface/IThemes';

declare module 'styled-components' {
  interface DefaultTheme extends IThemeProps { }
}