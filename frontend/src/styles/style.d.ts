import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    defaultFontSize: string;
    defaultFontFamily: string;
    colors: {
      sidebarColor: string;
      primaryColor: string;
      bgColor: string;
      whiteColor: string;
    };
  }
}
