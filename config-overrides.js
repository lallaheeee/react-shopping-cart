const path = require("path");

module.exports = function (config, env) {
	const alias = {
		"~": path.resolve(__dirname, "./src"),
	};
	config.resolve.alias = Object.assign(config.resolve.alias, alias);

	return config;
};
