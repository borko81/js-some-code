function search_a_number(array, command) {
	let [accure, del, search] = [...command]

	let solve_array = array.slice(0, accure)
	solve_array = solve_array.slice(del)
	let count = solve_array.filter(x => x === search).length
	console.log(`"Number ${search} occurs ${count} times."`)
}


search_a_number(
	[5, 2, 3, 4, 1, 6],
	[5, 2, 3]
)