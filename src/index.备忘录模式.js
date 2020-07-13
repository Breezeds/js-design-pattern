// 备忘录模式

// 验证设计原则
// 符合开放封闭原则

// 使用场景： 编辑器备份功能

// 代码演示
// 备忘录功能
// 类：存储 content
class Moment {
	constructor(content) {
	    this.content = content; // 传递一个 content 参数，用于存储备份
	}
	getContent() {
		return this.content;
	}
}

// 类： 用来存储 Moment 类
class MomentList {
	constructor() {
		this.list = []
	}
	addMoment(moment) {
		this.list.push(moment);
	}
	getMoment(index) {
		return this.list[index];
	}
}

// 类： 编辑器
class Editor {
	constructor() {
		this.content = null;  // content 初始化为 null 
	}
	
	setContent(content) {
		this.content = content; // 设置content
	}
	
	getContent() {
		return this.content;
	}
	
	setContentToMoment() {
		return new Moment(this.content);
	}
	
	getContentFromMoment(moment) {
		this.content = moment.getContent(); // 获取到撤销后的值，回显数据
	}
}


// test
let editor = new Editor();
let momentList = new MomentList();

editor.setContent('111');
editor.setContent('222');
momentList.addMoment(editor.setContentToMoment()); // 创建 Moment 并且存入 MomentList 中
editor.setContent('333');
momentList.addMoment(editor.setContentToMoment()); // 创建 Moment 并且存入 MomentList 中
editor.setContent('444');


console.log(editor.getContent())
let moment1 = momentList.getMoment(1);
editor.getContentFromMoment(moment1); // 撤销 
console.log(editor.getContent());
let moment0 = momentList.getMoment(0);
editor.getContentFromMoment(moment0); // 撤销
console.log(editor.getContent()); 