S O L I D 五大设计原则
S:单一职责原则
O:开放封闭原则
L:李姓置换原则
I:接口独立原则
D:依赖导致原则


S-单一职责原则:
	一个程序只做好一件事
	如果功能过于复杂就拆开,每个部分保持独立
	
O-开放封闭原则
	对扩展开放,对修改封闭
	增加需求时,扩展新代码,而非修改已有代码
	
L-李氏置换原则
	子类能覆盖父类
	父类能出现的地方子类就能出现
	js中使用较少

I-接口独立原则
	保持接口的单一独立,避免出现"胖接口"
	js中没有接口(typescript例外), 使用较少
	类似于单一职责原则,这里更加关注接口

D-依赖导致原则
	面向接口编程,依赖于抽象而不依赖于具体
	使用方只关注接口,而不关注具体类的实现
	js中使用较少(没有接口,弱类型)
	

S O 体现较多,详细介绍
L I D 体现较少,但是要了解其用意

eg:
function loadImg (src) {
	let promise = new Promise(function(resolve, reject) {
		let img= document.createElement('img');
		img.onload = function() {
			resolve(img)
		}
		img.onerror = function() {
			reject('图片加载失败！');
		}
		img.src = src;
	})
	return promise;
}

let src = 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590690886129&di=c41edd9fd1fa5662a807789597d2cf3a&imgtype=0&src=http%3A%2F%2Fold.scjc.gov.cn%2Fuploads%2Fueditor%2Fphp%2Fupload%2Fimage%2F20200521%2F1590028000407089.jpg';

let result = loadImg(src);

result.then(function(img) {
	// part 1
	alert(img.width);
	return img;
}).then(function(img) {
	// part 2
	alert(img.height);
	return img;
}).then(function(img) {
	// part 3
	alert(img.src);
}).catch(function(err){
	alert(err);
})

