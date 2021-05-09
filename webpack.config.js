const path = require("path");

module.exports = (env, argv) => {
	return {
		mode: env.production ? "production" : "development",
		devtool: env.production ? false : "inline-source-map",
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
		devServer: env.production ? undefined : {
			contentBase: path.join(__dirname, "dist"),
			open: true,
		},
		output: {
			filename: "bundle.js",
			path: path.resolve(__dirname, "dist"),
		},
	};
};
