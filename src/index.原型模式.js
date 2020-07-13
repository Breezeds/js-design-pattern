// 原型模式

// Object.create() 原理
// function myCreate(obj) {
// 	let F = function() {};
// 	F.prototype = obj;
// 	return new F();
// }

const prototype = {
	getName: function() {
		return this.firstName + ' ' + this.lastName; 
	},
	setName: function() {
		console.log('hello');
	}
}

const x = Object.create(prototype);
x.firstName = 'A';
x.lastName = 'B';
console.log(x.getName())
x.setName();

const y = Object.create(prototype);
y.firstName = 'C';
y.lastName = 'D';
console.log(y.getName())
y.setName();