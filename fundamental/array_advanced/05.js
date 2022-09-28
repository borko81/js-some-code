function sort_by_two(array) {
	let new_arr = [...array].sort((a, b) => {
		return a.length - b.length !== 0 ? a.length - b.length : a.charCodeAt(0) - b.charCodeAt(0)
	})
	return new_arr
}


console.log(
	sort_by_two(
		["Isacc", "Theodor", "Jack", "Harrison", "George"]
	)
)