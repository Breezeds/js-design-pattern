// 单例模式
// 示例：登录框、 购物车
// 场景：1.jQuery只有一个$
//      2.模拟登录框
//		3.其他: 购物车  vuex和redux中的store

// 设计原则验证：符合单一职责原则，开放封闭原则 
	

class SingleObject {
	login () {
		console.log('login..')
	}
}

SingleObject.getInstance = (function() {
	let instance;
	return function() {
		if(!instance) {
			instance = new SingleObject();
		}
		return instance
	}
})()


// 测试
let obj1 = SingleObject.getInstance();
obj1.login();
let obj2 = SingleObject.getInstance();
obj2.login();

console.log('obj1 === obj2', obj1 === obj2)

console.log("===========分割线===========")
let obj3 = new SingleObject(); // 无法完全控制
obj3.login();
console.log('obj1 === obj3', obj1 === obj3);


// 最后，完整的演示


// 场景1：
// jQuery 只有一个 `$`
// if(window.jQuery != null) {
//	 return window.jQuery
// } else {
	 // 初始化
// }

// 场景2:登录框
class LoginForm {
	constructor() {
		this.state = 'hide'
	}
	show() {
		if(this.state === 'show') {
			console.log('登录框已经显示了')
			return;
		}
		this.state = 'show'
		console.log('登录框显示成功')
	}
	hide() {
		if(this.state === 'hide') {
			console.log('登录框已经隐藏')
			return;
		}
		this.state = 'hide';
		console.log('登录框隐藏成功')
	}
}
LoginForm.getInstance = (function() {
	let instance; // 定义在函数内部，避免全局变量污染
	return function () {
		if(!instance) { // 无则新建，有则直接返回
			instance = new LoginForm();
		}
		return instance
	}
})()

// 测试
let login1 = LoginForm.getInstance();
login1.show();
let login2 = LoginForm.getInstance();
login2.show();
console.log('login1 === login2', login1 === login2);