

export function log (type) {
	console.log(`日志上报 ${type}`)
	return `日志上报 ${type}`
}

export function logEs7decorator (type) {
	return function (target, name, descriptor) {
		let oldValue = descriptor.value;
		
		descriptor.value = function() {
			console.log(`日志上报 ${type}`);
			
			return oldValue.apply(this, arguments)
		}
		
		return descriptor
	}
}