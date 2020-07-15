import $ from 'jquery';
import ShoppingCart from './ShoppingCart/index.js';
import List from './List/index.js'

export default class App {
	constructor(id) {
		this.$el = $("#"+id);
		console.log(this.$el); // jquery dom 对象
	}
	
	// 初始化购物车 
	initShoppingCart(app) {
		let shoppingCart = new ShoppingCart(app);
		shoppingCart.init();
	}
	
	// 初始化购物车列表
	initList(app) {
		let list = new List(app);
		list.init();
	}
	
	
	init() {
		console.log('App init');
		this.initShoppingCart(this);
		this.initList(this);
	}
}