import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    defaultFontFamily: string
    fontWeights: {
      regular: number
      medium: number
      semiBold: number
    };
    colors: {
      sidebarColor: string
      primaryColor: string
      paragraphColor: string
      descriptorColor: string
      bgColor: string
      whiteColor: string
      dark: string
      pink: {
        40: string
        70: string
        80: string
      }
      blue: {
        10: string
        40: string
        70: string
        80: string
      }
      orange: {
        40: string
        80: string
        90: string
      }
      green: {
        80: string
        90: string
      }
      purple: {
        80: string
        90: string
      };
    }
    defaultFontSize: string
    fontSizes: {
      displayTitle: string
      title: {
        h1: string
        h2: string
        h3: string
      };
      cardTitle: string
      paragraph: string
      caption: {
        13: string
        14: string
      }
    }
  }
}
