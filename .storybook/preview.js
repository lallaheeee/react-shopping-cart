import React from "react";
import { ThemeProvider } from "styled-components";
import { addDecorator } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import GlobalStyle from "~/components/GlobalStyle";
import theme from "~/components/theme";

addDecorator(StoryRouter());
addDecorator(story => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		{story()}
	</ThemeProvider>
));
