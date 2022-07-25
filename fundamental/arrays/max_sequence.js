function found_max_sequence(array) {
	let result = []
	for (let i = 0; i < array.length; i++) {
		let target = array[i]
		let k = i
		let income_result = []
		while ((k < array.length) && (array[k] == target)) {
			income_result.push(array[k])
			k++
		}
		if (income_result.length > result.length) {
			result = income_result
		}
	}
	console.log(result.join(" "))
}

found_max_sequence([4, 4, 4, 4])