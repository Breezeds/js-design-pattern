
// 购物车类
class Cart {
	constructor() {
		this.list = []
	}
	
	// 添加商品
	add(data) {
		this.list.push(data)
	}
	
	// 删除商品
	delete(id) {
		this.list = this.list.filter(item => {
			if(item.id === id) {
				return false;
			}
			return true;
		})
	}
	
	// 获取 list
	getList() {
		// return 数组遍历
		return this.list.map(item => {
			return item.name
		}).join('\n')
	}
}

// 不直接暴露购物车类 Cart，通过单例模式，暴露出去一个对象, 这样的思想可以实现了私有属性
let getCart = (function() {
	let cart;
	return function() {
		if(!cart) {
			cart = new Cart()
		}
		return cart
	}
})()

export default getCart;