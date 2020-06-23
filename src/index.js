// 观察者模式 
// 重要程度：*****

// 介绍:
//		1.发布 & 订阅
//		2.一对多

// 示例:
//		1.点咖啡, 点好之后坐等被叫

// 代码演示:
// 主题，保存状态，状态更改之后触发所有的观察者对象
class Subject {
	constructor() {
	    this.state = 0;
		this.observers = [];
	}
	getState() {
		return this.state;
	}
	setState(state) {
		this.state = state;
		this.notifyAllObservers();
	}
	notifyAllObservers() {
		console.log(this.observers)
		this.observers.forEach(observer => {
			observer.update();
		})
	}
	attach(observer) {
		this.observers.push(observer);
	}
}
class Observer {
	constructor(name, subject) {
		this.name = name;
		this.subject = subject;
		this.subject.attach(this)
	}
	update() {
		console.log(`${this.name} update, state: ${this.subject.getState()}`)
	}
}


// test 
let subject = new Subject();
let o1 = new Observer('observer1', subject);
let o2 = new Observer('observer2', subject);
let o3 = new Observer('observer3', subject);

subject.setState(2)
subject.setState(3)


// 场景1：网页事件绑定
// <div id="div1"></div>
// <script>
//		$('#div1').click(function() {
//			console.log(1)
//		})
// </script>


// 场景2：Promise
// function loadImg(src) {
// 	var promise = new Promise(function(resolve, reject) {
// 		var img = document.createElement('img');
// 		img.onload = function() {
// 			resolve(img)
// 		}
// 		img.onerror=function () {
// 			reject('图片加载失败');
// 		}
// 		img.src = src;
// 	})
// 	return promise;
// }
// var src = '1.png';
// var result = loadImg(src);
// result.then(function (img) {
// 	console.log('width', img.width);
// 	return img
// }).then(function(img) {
// 	console.log('height', img.height);
// })


// 场景3：jQuery callbacks
// 见observer-model.html


// 场景4：nodejs自定义事件









