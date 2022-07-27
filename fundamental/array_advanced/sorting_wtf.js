function my_sorting(array) {
	let result = []
	let minimum_element_sort = [...array].sort((a, b) => a - b)
	let maxumum_element_sort = [...array].sort((a, b) => b - a)


	for (let i = 0; i < parseInt(array.length / 2); i++) {
		result.push(maxumum_element_sort[i])
		result.push(minimum_element_sort[i])
	}
	console.log(result.join(" "))
}


my_sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])