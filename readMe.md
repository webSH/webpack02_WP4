# webpack 入门 (webpack 4)
## 1.建立项目
- 新建文件夹：webpack02_WP4
- 初始化 npm：在此目录命令行执行 `npm init`，一路回车。根目录生成 package.json 文件
## 2.安装 webpack（以及 webpack-cli）
`npm i -D webpack@4.x webpack-cli`
- npm i -D 为 npm install --save-dev 的缩写
- npm i -S 为 npm install --save 的缩写
### 测试一下
- 新建文件夹 src，新建一个文件 main.js，写点代码
>- src
>   - main.js

main.js
```js
 console.log('Hello World')
```
配置 package.json 命令
```js
"scripts": {
	"build": "webpack src/mian.js" //webpack4 以上，可以不需要配置文件，并推荐入口文件 src/index.js。（注意： src | /src | ./src 三种路径写法都可以，但 ../src 这种写法失败）低级错误：mian.js
}
```
ok，命令行： `npm run build`，此时如果生成了一个 dist 文件夹，并且内部含有 mian.js 说明打包成功！
>- dist
>   - main.js
## 3.搞一个配置文件 **webpack.config.js**
上面只是对简单的一个 webpack 默认配置的打包命令。下面我们要实现更加丰富的自定义配置  
新建一个 build 文件夹，里面新建一个 **webpack.config.js**
>- build
> 	- webpack.config.js
### webpack.config.js
```js
const path = require('path');
module.exports = {
	mode: 'development', // 开发模式
	entry: path.resolve(__dirname, '../src/main.js'), // 入口文件
	output: {
		filename: 'output.js', // 打包后的文件名
		path: path.resolve(__dirname, '../dist') // 打包后的目录
	}
}
```
### 更改我们的打包命令
```js
"scripts": {
	"build": "webpack --config build/webpack.config.js"
}
```