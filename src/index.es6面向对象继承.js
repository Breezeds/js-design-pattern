// alert(200)

// 父类
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	
	eat() {
		alert(`${this.name} eat something`)
	}
	
	speak() {
		alert(`My name is ${this.name}, age ${this.age}`)
	}
	
	getName() {
		return this.name
	}
}

let p = new Person('zhang', '20');

let p1 = new Person('wang', '21')

// p.eat();
// p.speak();
// 
// p1.eat();
// p1.speak();


// 子类
class Student extends Person {
	constructor(name, age, number) {
		super(name, age); // 子类继承父类的参数
		this.number = number;
	}
	
	study() {
		alert(`${this.name} study`)
	}
}

let xiaoming = new Student('xiaoming', '18', '21023')
xiaoming.study();
xiaoming.eat();
xiaoming.speak()