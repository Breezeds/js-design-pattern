import $ from 'jquery';
import getCart from '../ShoppingCart/getCart.js';
import StateMachine from 'javascript-state-machine';
import { log } from '../utils/log.js';

export default class Item {
	constructor(list, data) {
	    this.list = list; 	// 父类，把父类通过参数的形式传递过来，用来访问父类的 $el
		this.data = data;	// 数据，通过参数的形式从父类传递过来
		this.$el = $('<div>');
		this.cart = getCart();// 单例模式构造的 Cart 类
	}
	
	init() {
		this.initContent();
		this.initBtn();
		this.render();
	}
	
	// 初始化内容  @param {Object} data
	initContent() {
		let $el = this.$el;
		let data = this.data;
		// console.log('initContent: item data ====', data)
		$el.append($(`<p>名称：${data.name}</p>`));
		$el.append($(`<p>价格：${data.price}</p>`));
	}
	
	// 初始化按钮
	initBtn() {
		let $el = this.$el;
		let $btn = $('<button>');
		let _this = this;
		
		// 用有限状态机实现加入购物车功能
		let fsm = new StateMachine({
			init: '加入购物车',
			transitions: [
				{
					name: 'addToCart',
					from: '加入购物车',
					to: '从购物车删除'
				}, {
					name: 'deleteFromCart',
					from: '从购物车删除',
					to: '加入购物车'
				}
			],
			methods: {
				onAddToCart: function () { // 监听 addToCart 事件
					_this.addItemToCart(); // 添加到购物车
					updateText(); // 更新文案
				},
				onDeleteFromCart: function () { // 监听 deleteFromCart 事件
					_this.deleteItemFromCart();  // 从购物车删除
					updateText(); // 更新文案
				}
			}
		})
		
		// 更新文案
		function updateText() {
			$btn.text(fsm.state)
		}
		
		$btn.click(() => {
			if(fsm.is('加入购物车')) {  // 添加到购物车
				fsm.addToCart();
			} else {  // 从购物车删除
				fsm.deleteFromCart();
			}
			
		})
		updateText(); 
		
		$el.append($btn);
	}
	
	// 添加 item 到购物车
	addItemToCart() {
		this.cart.add(this.data)
		log('add')
	}
	
	// 从购物车中删除 item
	deleteItemFromCart(id) {
		this.cart.delete(this.data.id);
		log('delete')
	}
	
	// 渲染
	render() {
		this.list.$el.append(this.$el);
	}
}

