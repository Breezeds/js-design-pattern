class Product{
	constructor(name) {
		this.name = name
	}
	init() {
		alert('init')
	}
	fn1() {
		alert('fn1')
	}
	fn2() {
		alert('fn2')
	}
}

class Creator {
	create(name) {
		return new Product(name)
	}
}

// 测试
let test = new Creator();
let p = test.create('p1');
p.init();
p.fn1();


// React.createElement就是一个工厂模式
// class Vnode(tag, attrs, children) {
	// ...此处省略内部代码...
// }
// React.createElement = function(tag, attrs, children) {
//	 return new Vnode(tag, attrs, children)
// }
// React.createElement('div', {'title': '提示'})


// vue异步组件  工厂模式
// Vue.component('async-example', function(resolve, reject) {
//	setTimeout(function() {
//		resolve({
//			template: '<div>I am async</div>'
//		})
//	}, 1000)
// })
