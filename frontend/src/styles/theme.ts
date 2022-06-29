import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  defaultFontSize: '15px',
  defaultFontFamily: 'Inter',
  fontWeights: {
    regular: 400,
    medium: 500,
    semiBold: 600,
  },
  fontSizes: {
    displayTitle: '40px',
    title: {
      h1: '32px',
      h2: '28px',
      h3: '24px'
    },
    cardTitle: '17px',
    paragraph: '16px',
    caption: {
      13: '13px',
      14: '14px'
    },
  },
  colors: {
    primaryColor: '#030235',
    bgColor: '#FAFAFB',
    sidebarColor: '#080721',
    paragraphColor: '#6B6E85',
    descriptorColor: '#98A0AD',
    whiteColor: '#fff',
    dark: '#272727',
    pink: {
      40: '#F1DADE',
      70: '#F1C7C4',
      80: '#FFBBBB',
    },
    blue: {
      10: '#EFF4F9',
      40: '#DAE6F1',
      70: '#9ACFF0',
      80: '#68B5E2',
    },
    orange: {
      40: '#F1E6DA',
      80: '#F4CD48',
      90: '#D9BC22',
    },
    green: {
      80: '#A5DDB8',
      90: '#17A468',
    },
    purple: {
      80: '#C9C7EF',
      90: '#837FD1',
    },
  },
};
