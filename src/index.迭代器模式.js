// 迭代器模式

// 介绍:
// 		1.顺序访问一个集合
//		2.使用者无需知道集合的内部结构(封装)

// 场景：
//		1.jQuery each
//		2.ES6 Iterator

// 代码演示:
// 迭代器类
class Iterator {
	constructor(container) {
		this.list = container.list;
		this.index = 0;
	}
	next() {
		if(this.hasNext()) {
			return this.list[this.index++];
		}
		return null; // 返回null
	}
	hasNext() {
		if(this.index >= this.list.length) { // 用index与数组的长度来判断是否有下一个元素
			return false;
		}
		return true;
	}
}

class Container {
	constructor(list) {
	    this.list = list;
	}
	getIterator() {
		return new Iterator(this);
	}
}


// test
let arr = [0,1,2,3,4,5];
let container = new Container(arr);
let iterator = container.getIterator();
while(iterator.hasNext()) {
	console.log(iterator.next());
}



// 场景1: ES6 Iterator
// ES6 Iterator 为何存在
// 有序集合的数据类型: Array Map Set String TypedArray arguments NodeList
// 需要有一个统一的遍历接口来遍历所有的数据类型
// （注意:Object 不是有序集合，可以用Map代替)

// ES6 Iterator 是什么
// 以上数据类型,都有[Symbol.iterator]属性
// 属性值是函数,执行函数返回一个迭代器
// 这个迭代器就有 next 方法可顺利迭代子元素
// 可运行 Array.prototype[Symbol.iterator] 来测试

// 代码:
function each(data) {
	// 生成遍历器
	let iterator = data[Symbol.iterator]();
	 
// 	 console.log(iterator.next());
// 	 console.log(iterator.next());
// 	 console.log(iterator.next());
// 	 console.log(iterator.next());
// 	 console.log(iterator.next());
// 	 console.log(iterator.next());

	let item = {done: false};
	while(!item.done) {
		item = iterator.next();
		if(!item.done) {
			console.log(item.value)
		}
	}
}

let array = [1, 2, 3, 4];
let nodeList = document.querySelectorAll('p');
let m = new Map();
m.set('a', 100);
m.set('b', 200)
m.set('c', 300)

each(array);
each(nodeList);
each(m);


// for of 遍历
function eachForOf(data) {
	// data 必须是带有遍历器特性的对象： data[Symbol.iterator] 有值
	for(let item of data) {
		console.lg(item);
	}
}

let array1 = [11, 22, 33, 44];
let nodeList1 = document.querySelectorAll('p');
let m1 = new Map();
m1.set('a1', 100);
m1.set('b2', 200)
m1.set('c3', 300)

each(array1);
each(nodeList1);
each(m1);


// 设计原则验证
// 		1.迭代器对象和目标对象分离
//		2.迭代器将使用者和目标对象分离
//		3.符合开放封闭原则