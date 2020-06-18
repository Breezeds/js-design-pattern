/* 
	1.打车时,可以打专车，可以打快车，任何车都有车牌号和名称
	2.不同车价格不同，快车每公里1元，专车每公里2元
	3.行程开始时，显示车辆信息
	4.行程结束时，显示打车金额（假定行程就5公里）
*/


/*
	分析：
		类：车
			|____子类：快车、专车
				
		
		类：行程
*/



/*代码：*/

// 车 父类
class Car {
	constructor(number, name) {
		this.number = number;
		this.name = name;
	}
}

// 子类-快车
class Kuaiche extends Car {
	constructor(number, name) {
		super(number, name);
		this.price = 1;
	}
}

// 子类-专车
class Zhuanche extends Car{
	constructor(number, name) {
		super(number, name);
		this.price = 2;
	}
}


// 行程 类
class Trip{
	constructor(car) {
		this.car = car;
	}
	
	start() {
		console.log(`行程开始,名称:${this.car.name},车牌号:${this.car.number}`)
	}
	end() {
		console.log(`行程结束,金额:${this.car.price*5}`)
	}
}


// 测试
let car = new Kuaiche("123456", "越野车");
let trip = new Trip(car);
trip.start();
trip.end();
