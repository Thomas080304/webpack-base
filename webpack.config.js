const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry:[
		path.join(__dirname, './src/app.js')
	],
	output:{
	    path: path.join(__dirname, 'dist'),
	    filename: '[name].js',
	    chunkFilename: '[id].chunk.js',
	    publicPath: '/'
	},
	devtool: 'inline-source-map',
	devServer:{
		historyApiFallback: true,
		contentBase:path.join(__dirname, 'dist'),
		clientLogLevel: 'warning'
	},
	module:{
		rules:[
			{ test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] }
		]
	},
	resolve:{},
	plugins:[
	    new webpack.NamedModulesPlugin(),
	    new webpack.HotModuleReplacementPlugin(),
	    new webpack.NoEmitOnErrorsPlugin(),
	    new HtmlWebpackPlugin({
	      template: path.join(__dirname,'index.html')
	    }),
	    new CopyWebpackPlugin([
	      {
	        from: path.resolve(__dirname, 'public'),
	        ignore: ['.*']
	      }
	    ])
	]
};