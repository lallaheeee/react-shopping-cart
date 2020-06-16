module.exports = {
	stories: ["../src/**/*.stories.(ts|tsx|js|jsx)"],
	addons: [
		"@storybook/preset-create-react-app",
		"@storybook/addon-knobs/register",
		"@storybook/addon-actions",
		"@storybook/addon-links",
		{
			name: "@storybook/addon-docs",
			options: {
				configureJSX: true,
			},
		},
	],
	webpackFinal: config => {
		return require("../config-overrides")(config);
	},
};
