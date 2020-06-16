import React from "react";
import { addDecorator } from "@storybook/react";
import StoryRouter from "storybook-react-router";
import GlobalStyle from "~/components/GlobalStyle";

addDecorator(StoryRouter());
addDecorator(story => (
	<>
		<GlobalStyle />
		{story()}
	</>
));
