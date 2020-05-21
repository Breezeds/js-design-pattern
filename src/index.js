// alert(200)

class Person {
	constructor(name) {
		this.name = name
	}
	
	getName() {
		return this.name
	}
}

let p = new Person('JaveScript');

alert(p.getName());