function find_max_numbers(array) {
	let result = []
	for (let i = 0; i <= array.length - 1; i++) {
		let maxumum = array[i]
		let is_good = true
		for (let k = i + 1; k <= array.length - 1; k++) {
			if (array[k] >= maxumum) {
				is_good = false
				break
			}
		}
		if (is_good === true) {
			result.push(array[i])
		}
	}
	return result.join(" ")
}


function solve_with_high_order(array) {
	return array.filter((el, pos) => array.slice(pos + 1).every(z => el > z)).join(" ")
}


console.log(find_max_numbers([41, 41, 34, 20]))
console.log(solve_with_high_order([41, 41, 34, 20]))