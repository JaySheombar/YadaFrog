var HtmlWebpackPlugin = require('html-webpack-plugin');

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html'
});

module.exports = {
	entry: ['./app/index.js'],
	module: {
		rules: 
		[
			{
				test: /\.js$/, 
				include:  __dirname + '/app', 
				loader: 'babel-loader?presets[]=es2015'
			},
			{
				test:/\.css$/,
                use:['style-loader','css-loader']
			}
		]
	},
	output: {
		filename: 'index_bundle.js',
		path: __dirname + '/dist'
	},
	mode: 'development',
	plugins: [HTMLWebpackPluginConfig]
};