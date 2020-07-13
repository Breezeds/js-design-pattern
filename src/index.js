// 该文件为购物车 app 入口文件

// 购物车

// 启动服务步骤： 1.进入到 src/service/
//				2.cmd 命令窗口，输入 http-server -p 8880
//				3.浏览器输入 http://localhost:8880/api/data.json 即可访问数据

// 配置代理：	1.打开 webpack.config.dev.js
//				2.devServer: {proxy: {"/api/*": "http://locahost:8880"}}
//				3.重启页面 npm start
// 				4.浏览器打开 localhost:9000/api/data.json 即可通过代理访问数据

// app 框架： 	1.src/service/ 新建 app.js
//				2.src/index.js 引入 app.js
//				3.调用 let app = new App('app'); app.init()

// =================================== 环境搭建完毕=================================

import App from './service/app.js';
let app = new App('app');
app.init();