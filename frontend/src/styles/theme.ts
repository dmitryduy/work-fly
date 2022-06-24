<<<<<<< HEAD
import { css } from 'styled-components';

const colors = {
  primary: '#030235',
  primaryHover: '#161318',
  background: '#FAFAFB',
  sidebar: '#080721',
  contentParagraph: '#6B6E85',
  contentDescriptor: '#98A0AD',
  contentDivider: '#59647629',
  contentTitle: '#030235',
  white: '#FFFFFF',
  black: '#000000',
  dark: '#272727',
  gray10: '#F8F8F8',
  gray40: '#EBEBEB',
  gray70: '#D7D7D8',
  gray90: '#BDBCBE',
  gray100: '#555158',
  pink40: '#F1DADE',
  pink70: '#F1C7C4',
  pink80: '#FFBBBB',
  blue10: '#EFF4F9',
  blue40: '#DAE6F1',
  blue70: '#9ACFF0',
  blue80: '#68B5E2',
  orange40: '#F1E6DA',
  orange80: '#F4CD48',
  orange90: '#D9BC22',
  green80: '#A5DDB8',
  green90: '#17A468',
  purple80: '#C9C7EF',
  purple90: '#837FD1',
};
const typography = {
  displayTitle: css`
    font-weight: 600;
    font-size: 40px;
    line-height: 52px;
  `,
  h1: css`
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: -0.24px;
  `,
  h2: css`
    font-weight: 600;
    font-size: 28px;
    line-height: 40px;
  `,
  h3: css`
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
  `,
  H4: css`
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
  `,
  headline: css`
    font-weight: 500;
    font-size: 17px;
    line-height: 24px;
  `,
  subhead: css`
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
  `,
  content15: css`
    font-size: 15px;
    line-height: 24px;
  `,
  content16: css`
    font-size: 16px;
    line-height: 24px;
  `,
  caption14: css`
    font-size: 14px;
    line-height: 20px;
  `,
  caption13: css`
    font-size: 13px;
    line-height: 18px;
  `,
  CAPTION13: css`
    font-size: 13px;
    line-height: 18px;
    text-transform: uppercase;
  `,
  buttonLarge: css`
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
  `,
  buttonMedium: css`
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  `,
  buttonSmall: css`
    font-weight: 500;
    font-size: 15px;
    line-height: 16px;
  `,
  buttonXSmall: css`
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  `,
};
const radius = {
  large: '12px',
  medium: '10px',
  small: '8px',
  xsmall: '6px',
};
const transition = {
  base: '0.25s ease-in-out',
  fast: '0.1s ease-in-out',
};
const global = {
  defaultFontSize: '15px',
  defaultFontFamily: 'Inter',
};

export interface ITheme {
  global: typeof global;
  colors: typeof colors;
  typography: typeof typography;
  radius: typeof radius;
  transition: typeof transition;
}

const theme: ITheme = {
  global,
  colors,
  typography,
  radius,
  transition
};

export default theme;
=======
import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  defaultFontSize: "15px",
  defaultFontFamily: "Inter",
  colors: {
    primaryColor: "#030235",
    bgColor: "#FAFAFB",
    sidebarColor: "#080721",
    whiteColor: "#fff",
  },
};
>>>>>>> db8845f... feat: add theme, theme provider, global style
