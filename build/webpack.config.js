const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	mode: 'development', // 开发模式
	// entry: path.resolve(__dirname, '../src/main.js'), // 单入口文件
	entry: { //多入口文件命名（供 plugins 中来使用）
		main: path.resolve(__dirname, '../src/main.js'), // 入口文件
		head: path.resolve(__dirname, '../src/head.js') // 第二个入口文件
	},
	output: {
		filename: '[name].[hash:8].js', // 打包后文件名称
		path: path.resolve(__dirname, '../dist') // 打包后的目录
	},
	plugins: [
		// new HtmlWebpackPlugin({
		// 	template: path.resolve(__dirname, '../public/index.html')
		// })  //指定插件处理文件的路径(针对单入口文件)
		new HtmlWebpackPlugin({ //(多入口文件，每个文件一个实例)
			template: path.resolve(__dirname, '../public/index.html'), //指定插件处理文件的路径
			filename: 'index.html', // 命名
			chunks: ['main'] // 与入口文件对应的模块名
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../public/head.html'),
			filename: 'head.html',
			chunks: ['head'] // 可引入多个 chunks（['head','main']），但顺序不一定和数组一致
		})
	]
}