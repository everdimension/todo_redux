module.exports = {
	entry: './src/js/app.js',
	output: {
		path: './dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel?presets[]=react,presets[]=es2015'
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	},
	devServer: {
		contentBase: './dist',
		port: 3123,
		hot: true
	}
};
