import $ from 'jquery';
import { GET_LIST_URL } from '../config.js/index.js';
import getItem from './getItem.js';

export default class List {
	constructor(app) {
		this.$el = $("<div>");
		this.app = app;
	}
	
	// 获取数据
	loadData() {
		console.log('GET_LIST_URL: ', GET_LIST_URL);
		// fetch 获取数据，返回 Promise 实例
		return fetch(GET_LIST_URL).then((result) => {
			console.log('result', result);
			return result.json()
		})
	}
	
	// 初始化列表 item
	initItemList(data) {
		// 循环遍历，往 this.$el 里添加 dom 数据
		// data.map(item => {
		// 	// item 
		// 	let listItem = getItem(this, item);
		// 	listItem.init();
		// 	return listItem;
		// })
		
		data.forEach(item => {
			let listItem = getItem(this, item);
			listItem.init();
		})
	}
	
	// 渲染
	render() {
		console.log('list $el', this.$el)
		this.app.$el.append(this.$el);
	}
	
	// 初始化
	init() {
		this.loadData().then(data => {
			console.log('data', data);
			this.initItemList(data);
		}).then(() => {
			this.render(); //渲染数据
		})
	}
}