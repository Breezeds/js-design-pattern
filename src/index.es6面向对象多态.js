class People{
	constructor(name) {
		this.name = name
	}
	
	say() {

	}
}

class A extends People{
	constructor(name) {
		super(name)
	}
	
	say() {
		alert('I am A')
	}
}

class B extends People{
	constructor(name) {
		super(name)
	}
	
	say() {
		alert('I am B')
	}
}

let a = new A("a");
let b = new B('b');

a.say();
b.say()