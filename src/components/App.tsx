import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";

const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
	</ThemeProvider>
);

export default App;
