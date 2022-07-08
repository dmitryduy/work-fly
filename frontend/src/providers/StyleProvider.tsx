import { FC } from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styles/globalStyle";
import { theme } from "../styles/theme";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const StyleProvider: FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
