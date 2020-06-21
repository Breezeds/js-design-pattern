// 代理模式
// 介绍: 
//		1.使用者无权访问目标对象
// 		2.中间加代理,通过代理做授权和控制
// 示例:
//		1.在家办公，公司内网需要一个代理才能访问
//		2.访问国外网站需要一个代理才能访问
//		3.明星经纪人

// 代码示例:
class RealImg {
	constructor(filename) {
	    this.filename = filename;
		this.loadFromDisk(); 	// 初始化即从硬盘中加载，模拟
	}
	display() {
		console.log('display... ' + this.filename)
	}
	loadFromDisk() {
		console.log('loading... ' + this.filename)
	}
}

class ProxyImg {
	constructor(filename) {
		this.realImg = new RealImg(filename)
	}
	display() {
		this.realImg.display();
	}
}

// test
let proxyImg = new ProxyImg('1.png');
proxyImg.display();


// 场景1: 网页事件代理addEventListener
// 		见proxy-model.html文件
	
// 场景2: jQuery $.proxy

// 场景3: ES6 Proxy
// 明星
let star = {
	name: '张xx',
	age: 25,
	phone: 'star 13912347777'
}

// 经纪人
let agent = new Proxy(star, {
	get: function(target, key) {
		if(key === 'phone') {
			// 此处的phone与star中的phone字段名保持一致；拦截电话号码，返回经纪人的电话号码
			// 1.接口必须保持一致 2.无论有没有代理，访问github的地址都是一样的
			return 'agent 13701236789'
		} else if(key === 'price') {
			// 明星不报价，经纪人报价
			return 120000;
		}
		return target[key];
	},
	set: function(target, key, val) {
		if(key === 'customPrice') {
			if(val < 100000) {
				// 最低10w
				throw new Error('价格太低');
			} else {
				target[key] = val;
				return true;
			}
		}
	}
})

// test
console.log(agent.name);
console.log(agent.age);
console.log(agent.phone);
console.log(agent.price);

agent.customPrice = 150000;
console.log('agent.customPrice', agent.customPrice)


// 验证设计原则:
//		1.代理类和目标类分离,隔离开目标类和使用者
//		2.1.接口必须保持一致 2.无论有没有代理，访问github的地址都是一样的

// 代理模式 vs 适配器模式
// 适配器模式: 提供一个不同的接口
// 代理模式:提供一模一样的接口