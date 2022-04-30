const path = require('path');
const nodeExternals = require('webpack-node-externals');

const { NODE_ENV = 'production' } = process.env;
module.exports = {
	entry: './app/server.ts',
	mode: NODE_ENV,
	target: 'node',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'server.js'
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ['ts-loader']
			}
		]
	}
};
