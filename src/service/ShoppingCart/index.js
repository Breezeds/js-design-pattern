import $ from 'jquery';
import getCart from './getCart.js';

export default class ShoppingCart{
	constructor(app) {
		this.$el = $("<div>")
		this.app = app;
		this.cart = getCart();
	}
	
	// 展示购物车列表
	showCart() {
		alert(this.cart.getList())
	}
	
	// 初始化按钮
	initBtn() {
		let $btn = $('<button>购物车</button>').css({
			'margin-bottom': '30px',
		})
		
		$btn.click(() => {
			this.showCart();
		})
		this.$el.append($btn);
	}
	
	// 渲染
	render() {
		this.app.$el.append(this.$el)
	}
	
	// 初始化
	init() {
		this.initBtn();  // 初始化按钮，此时还没有添加到 document 中
		this.render()		// 渲染 dom
	}
}