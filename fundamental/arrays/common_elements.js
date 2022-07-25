function compare(arr_one, arr_two) {
	let result = []
	for (let x of arr_one) {
		for (let y of arr_two) {
			if (x === y) {
				result.push(x)
			}
		}
	}
	return result
}


function foo(arg1, arg2) {
	const items = arr1.filter(x => arr2.includes(x))
	items.forEach(e => {
		console.log(e)
	})
}


console.log(compare(['Hey', 'hello', 2, 4, 'Peter', 'e'],
	['Petar', 10, 'hey', 4, 'hello', '2']))