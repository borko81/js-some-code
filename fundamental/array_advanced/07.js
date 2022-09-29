function search_for_a_number(arr1, arr2) {
	let result = [...arr1]
	let [number_element, how_much_delete, search_number] = [...arr2]

	result = result.slice(0, number_element)
	while (how_much_delete > 0) {
		result.shift()
		how_much_delete -= 1
	}

	let founded = result.filter(x => x == search_number).length

	return `Number ${search_number} occurs ${founded} times.`
}


console.log(
	search_for_a_number(
		[5, 3, 2, 3, 3, 1, 6],
		[5, 2, 3]
	)
)