import Item from './Item.js';

// 这个文件用来处理优惠商品的逻辑处理，优惠商品放在商品对象里处理，而不是放在 data.forEach 中处理

function createDiscount (item) {
	// es6 new Proxy() 代理模式，截取数据
	// new Proxy(obj, handle)  @param obj {Object} 数据源
	// new Proxy(obj, handle)  @param handle {Object} 包含 get 和 set 函数
	return new Proxy(item, {
		get: function (target, key) {
			if(key === 'name') {
				return `${target[key]} 【折扣】`
			} else if(key === 'price') {
				return (target[key] * 0.8)
			}
			return target[key]
		}
	})
}

// 工厂函数： 用于优惠商品的处理逻辑
export default function(list, itemData) {
	if(itemData.discount) {
		itemData = createDiscount(itemData);
	}
	return new Item(list, itemData);
}