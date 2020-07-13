// 中介者模式

// 符合开放封闭原则
// 各个关联对象通过中介者隔离

// a 不能直接 set （操作）b， b 也不能直接操作（set）a
// 类似于生活中的买房子，买房子得通过中介，买房者和买房者不能直接接触
class Middle{
	constructor(a, b) {
	    this.a = a;
		this.b = b;
	}
	setA(num) {
		this.a.setNum(num / 100)
	}
	setB(num) {
		this.b.setNum(num * 100)
	}
}
class A {
	constructor() {
	    this.num = 0;
	}
	setNum (num, m) {
		this.num = num;
		if(m) {
			m.setB(num)
		}
	}
}

class B {
	constructor() {
		this.num = 0;
	}
	setNum (num, m) {
		this.num = num;
		if(m) {
			m.setA(num)
		}
	}
}

// test
let a = new A();
let b = new B();
var middle = new Middle(a, b);
a.setNum(10, middle);
console.log(a.num, b.num)
b.setNum(10, middle);
console.log(b.num, a.num)


