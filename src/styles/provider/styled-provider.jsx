import { ThemeProvider } from "styled-components";
import { theme } from "../theme";
import P from "prop-types";
import { GlobalStyles } from "../global-styles";
export const StyledProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};

StyledProvider.propTypes = {
  children: P.node.isRequired,
};
