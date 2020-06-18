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