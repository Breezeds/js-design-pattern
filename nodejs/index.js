// 观察者模式: nodejs 自定义事件

// 执行步骤：
// 		1.使用命令窗口打开当前目录
//		2.node index.js


const EventEmitter = require('events').EventEmitter;


// 示例1
const emitter1 = new EventEmitter();
// 监听 some 事件
emitter1.on('some', info => {
	console.log('fn1', info)
})
// 监听 some 事件
emitter1.on('some', info => {
	console.log('fn2', info)
})
// 监听 some 事件
emitter1.emit('some', 'zhangSan')



// 示例2：继承
class Dog extends EventEmitter{
	constructor(name) {
		super();
		this.name = name;
	}
}
let doudou = new Dog('doudou');
doudou.on('bark', function() {
	console.log(this.name, 'bark-1')
})
doudou.on('bark', function() {
	console.log(this.name, 'bark-2')
})
doudou.emit('bark')


// 示例3: nodejs 读取 stream 文件
const fs = require('fs');
const readStream = fs.createReadStream('./data/file.txt');

let length = 0;
readStream.on('data', function(chunk) {
	let len = chunk.toString().length;
	console.log('chunk', len);
	length = length + len;
})
readStream.on('end', function() {
	console.log('total length: ', length)
})


// 示例4: 读取文件的 line
const readline = require('readline');
let rl = readline.createInterface({
	input: fs.createReadStream('./data/file.txt')
})

let lineNum = 0;
rl.on('line', function(line) {
	// line 为每一行的内容
	lineNum++
})
rl.on('close', function() {
	console.log('total lines: ', lineNum)
})