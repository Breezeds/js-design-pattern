const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, "release"),
		filename: "bundle.js"
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/, //略过
			// loader: 'babel-loader', // 对检测到的js文件进行babel处理
			loader: "babel-loader", // 应该应用的 loader，它相对上下文解析
		}]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template: './index.html'
		})
	],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),  // 根目录
		open: true, // 自动打开浏览器
		compress: true, // 压缩
		port: 9000,
		hot: true, //热更新
	}
	
}