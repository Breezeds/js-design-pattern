// 状态模式  *启动步骤：将当前文件名改为index.js，在根目录下运行npm start
// 介绍:
//		1.一个对象有状态变化
// 		2.每次状态变化都会触发一个逻辑
//		3.不能总是用 if...else 来控制

// 示例:
// 		1.交通信号灯不同颜色变化

// 设计原则验证：
// 将状态对象和主体对象分离，状态的变化逻辑单独处理
// 符合开放封闭原则


// 场景1: 有限状态机
// 场景2: 写一个简单的promise

// 代码演示:
// 状态 (红灯，绿灯，黄灯)
class State {
	constructor(color) {
		this.color = color
	}
	handle(context) {
		console.log(`当前状态为: ${this.color}`);
		// 执行State的handle方法时，调用context的setState方法，此时将this即State类传递过去
		// 作用就是：将当前State类传递过去
		context.setState(this); 
	}
}

// 主体
class Context {
	constructor() {
		this.state = null; // 保存State实例
	}
	// 获取状态 
	getState() {
		return this.state;
	}
	setState(state) {
		// 将传递过来的状态缓存在当前类的this.state中
		this.state = state;
	}
}

// test
let context = new Context();

// 红灯
let red = new State('red');
red.handle(context);
console.log(context.getState())


// 黄灯
let yellow = new State('yellow');
yellow.handle(context);
console.log(context.getState())

// 绿灯
let green = new State('green');
green.handle(context);
console.log(context.getState())


// 场景1: 有限状态机 
// https://github.com/jakesgordon/javascript-state-machine
import StateMachine from 'javascript-state-machine';  // 引入
import $ from 'jquery';

// 初始化状态机模型
let fsm = new StateMachine({
	init: '收藏',
	transitions: [
		{name: 'doStore',from: '收藏',to: '取消收藏'},
		{name: 'deleteStore',from: '取消收藏',to: '收藏'}
	],
	methods: {
		// 监听收藏事件, 事件名就是：on加上transitions中的name
		onDoStore() {
			console.log('收藏成功!'); // 可以 post 请求
			updateText(); // 更新文案
		},
		
		// 监听取消收藏事件， 事件名就是：on加上transitions中的name
		onDeleteStore() {
			console.log('已经取消收藏!'); // 可以 post 请求
			updateText(); // 更新文案
		}
	}
})

let $btn = $("#btn1");

$btn.click(function() {
	if(fsm.is('收藏')) {
		fsm.doStore()
	} else {
		fsm.deleteStore()
	}
})

function updateText() {
	$btn.text(fsm.state)
}
updateText()





// 场景2: 写一个简单的promise
// 定义一个状态机
let fsm1 = new StateMachine({
	init: 'pending',
	transitions: [
		{
			name: 'resolve',
			from: 'pending',
			to: 'resolved'
		},
		{
			name: 'reject',
			from: 'pending',
			to: 'rejected'
		}
	],
	methods: {
		onResolve: function(state, param) {
			// resolve 方法    state: 当前状态   param: 参数
			param.successList.forEach(fn => fn())
		},
		onReject: function(state, param) {
			// reject 方法		state: 当前状态  param: 参数
			console.log(param)
			param.failList.forEach(fn => fn())
		}
	}
})

class MyPromise {
	constructor(fn) {
		// 定义两个数组，存放 resolve 和 reject 函数，用于 then 调用
		this.successList = [];
		this.failList = [];
		
		fn(() => {
			// resolve()
			fsm1.resolve(this); // 将当前 this 传递过去
		}, () => {
			// reject()
			fsm1.reject(this);
		})
	}
	
	then(successFn, failFn) {
		this.successList.push(successFn);
		this.failList.push(failFn);
	}
}

function loadImg(src) {
	const promise = new MyPromise(function(resolve, reject) {
		let img = document.createElement('img');
		img.onload = function() {
			resolve();
		}
		img.onerror = function() {
			reject();
		}
		img.src = src;
	})
	return promise;
}
let src = 'http://www.baidu.com/img/dong_54209c0ff3da32eecc31f340c08a18f6.gif';
let result = loadImg(src);
result.then(function() {
	console.log('ok1')
}, function() {
	console.log('fail1')
})

result.then(function() {
	console.log('ok2')
}, function() {
	console.log('fail2')
})