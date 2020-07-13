// 命令模式

// 设计原则验证
// 符合开放封闭原则

// 代码演示
class Receiver{
	constructor() {
	    
	}
	exec() {
		console.log('执行命令')
	}
}

class Command{
	constructor(receive) {
	    this.receive = receive;
	}
	handle() {
		this.receive.exec()
	}
}

class Ivotor {
	constructor(command) {
		this.command = command
	}
	invote() {
		this.command.handle();
	}
}

// 士兵
let receive = new Receiver();
// 命令
let command = new Command(receive);
// 将军
let ivotor = new Ivotor(command);
ivotor.invote();




