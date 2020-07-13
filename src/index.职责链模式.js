// 职责链模式

// 代码演示
class Action {
	constructor(name) {
		this.name = name;
		this.nextAction = null;
	}
	
	setNextAction(action) {
		this.nextAction = action;
	}
	
	handle() {
		console.log(`${this.name} 审批`);
		if(this.nextAction != null) {
			this.nextAction.handle();
		}
	}
}

// test
const a = new Action('boss');
const b = new Action('经理');
const c = new Action('组长');
b.setNextAction(a);
c.setNextAction(b);
c.handle();