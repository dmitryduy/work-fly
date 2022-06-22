import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../styles/globalStyle";
import { theme } from "../../styles/theme";

const StyleProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
