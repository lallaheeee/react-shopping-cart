import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";
import theme from "./theme";
import Router from "~/components/Router";

const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Router />
	</ThemeProvider>
);

export default App;
