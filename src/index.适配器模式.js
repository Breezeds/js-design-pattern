// 适配器模式
// 介绍: 1.旧接口格式和使用者不兼容
//       2.中间加一个适配器转换接口
// 示例: 电器转接头
// 场景：1.封装旧接口
// 		 2.vue computed 

// 设计原则验证：
// 		1.将旧接口和使用者进行分离
//		2.符合开放封闭原则

class Adaptee {
	specificRequest() {
		return '德国标准插头'
	}
}

class Target {
	constructor() {
		this.adaptee = new Adaptee()
	}
	request() {
		const info = this.adaptee.specificRequest();
		return `${info} - 转化器 - 中国标准插头`
	}
}

// 测试
let target = new Target();
let res = target.request();
console.log(res);


// 场景1: 封装旧接口
// ajax({
// 	url: '/getData',
// 	type: 'POST',
// 	dataType: 'json',
// 	data:{
// 		id: '123456'
// 	}
// }).done(function(){})
// 但是因为历史原因，代码中全都是
// $.ajax({...})

// 做一个适配器
// var $ = {
// 	ajax: function(options) {
// 		return ajax(options);
// 	}
// }


// 场景2: vue computed
// 看test.html