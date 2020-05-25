// 父类
class People {
	name
	age
	protected weight // 受保护的属性，只有自己或者自己的子类可以访问
	constructor(name, age) {
		this.name = name
		this.age = age
		this.weight = 120
	}
	
	eat() {
		alert(`${this.name} eat somethings`)
	}
	
	speak() {
		alert(`${this.name} speak`)
	}
}


// 子类 继承父类
class Student extends Penple {
	number 
	private girlFriend
	constructor(name, age, number) {
		super(name, age)
		this.number = number
		this.girlFriend = 'xiaoli'
	}
	
	study() {
		alert(`${this.name} study`);
	}
	
	getWeight() {
		alert(`weight ${this.weight}`)
	}
}

let student1 = new Student("xiaoming", "20", "123")

alert(student1.girlFriend)
	
	
	
}