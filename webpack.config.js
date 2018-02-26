var path = require('path');

module.exports = {
	entry: './app/assets/scripts/App.js',
	output: {
		path: path.resolve(__dirname, './app/temp/scripts'),
		filename: 'App.js'
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader',
				query: {
					presets: ['es2015']
				},
				test: /\.js$/, /* Para que babel solo aplique a los archivos .js */
				exclude: /node_modules/
			}
		]
	}
}