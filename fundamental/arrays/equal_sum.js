function equal_sum(array) {
	if (array.length == 1) {
		console.log(0)
		return
	}
	let result = []
	for (let i = 1; i < array.length; i++) {
		let begin = array.slice(0, i)
		let end = array.slice(i + 1)
		let begin_sum = begin.length > 0 ? begin.reduce((x, y) => x + y) : 0
		let end_sum = end.length > 0 ? end.reduce((x, y) => x + y) : 0
		if (begin_sum == end_sum) {
			result.push(i)
		}
	}
	if (result.length > 0) {
		console.log(result.join(""))
	} else {
		console.log("no")
	}

}

equal_sum([1])