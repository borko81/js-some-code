function solve_sort_by_two(array) {
	array.sort((a, b) => a.length - b.length).sort((a, b) => {
		return a.toLowerCase() - b.toLowerCase()
	})
	console.log(array)
}


solve_sort_by_two(["Isacc", "Theodor", "Jack", "Harrison", "George", "Borko", "borko"])