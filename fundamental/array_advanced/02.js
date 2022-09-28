function distinct_array(array) {
	return [...new Set(array)]
}

function distinct_arrat_two(arr) {
	return arr.reduce((new_arr, values) => {
		if (!new_arr.includes(values)) {
			new_arr.push(values)
		}
		return new_arr
	}, []).join(" ")
}



console.log(
	distinct_arrat_two(
		[7, 8, 9, 7, 2, 3, 4, 1, 2]
	)
)