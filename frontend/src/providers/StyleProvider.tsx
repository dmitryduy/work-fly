import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "../styles/globalStyle";
import { theme } from "../styles/theme";

// eslint-disable-next-line react/prop-types
const StyleProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
