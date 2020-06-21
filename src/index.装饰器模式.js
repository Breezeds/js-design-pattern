// 装饰器模式
// 介绍:
// 		1.为对象添加新功能
//		2.不改变其原有的结构和功能
// 示例: 手机壳

// 代码演示:
class Circle{
	draw() {
		console.log('画一个圆圈')
	}
}

class Decorator{
	constructor(circle) {
		this.circle = circle;
	}
	draw() {
		this.circle.draw();
		this.setRedBorder(this.circle);
	}
	setRedBorder(circle) {
		console.log('给圆圈加一个红色边框')
	}
}

let circle = new Circle();
circle.draw();

console.log('---分割线---')

let dec = new Decorator(circle);
dec.draw();


// 场景1：ES7装饰器   core-decorators(github上搜索)
// 
// import { readonly } from 'core-decorators';
// class Person {
//	@readonly 
//	name() {
//		return 'zhangsan'
//	}
// }

// let p = new Person();
// alert(p.name())

// core-decorators : https://github.com/jayphelps/core-decorators