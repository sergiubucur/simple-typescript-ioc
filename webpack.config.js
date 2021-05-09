const path = require("path");

module.exports = {
	mode: "production",
	devtool: "source-map",
	entry: "./src/index.ts",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: "simple-typescript-ioc.js",
		library: {
			name: "simple-typescript-ioc",
			type: "umd",
		},
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
};
