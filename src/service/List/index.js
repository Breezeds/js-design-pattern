import $ from 'jquery';
import { GET_LIST_URL } from '../config.js/index.js';

export default class List {
	constructor(app) {
		this.$el = $("<div>");
		this.app = app;
	}
	
	// 获取数据
	loadData() {
		// fetch 获取数据，返回 Promise 实例
		return fetch(GET_LIST_URL).then((result) => {
			console.log(result);
			return result.json()
		})
	}
	
	// 初始化列表 item
	initItemList(data) {
		// 循环遍历，往 this.$el 里添加 dom 数据
		data.map(item => {
			// item 
		})
	}
	
	// 渲染
	render() {
		this.app.$el.append(this.$el);
	}
	
	// 初始化
	init() {
		this.loadData().then(data => {
			console.log(data);
			this.initItemList(data);
		}).then(() => {
			this.render(); //渲染数据
		})
	}
}