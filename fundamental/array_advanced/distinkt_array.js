function distinct_array(array) {
	let output = []
	for (let a of array) {
		if (!output.includes(a)) {
			output.push(a)
		}
	}
	console.log(output.join(" "))
}

let nested_arrays = [
	[1, 2, 3, 4],
	[7, 8, 9, 7, 2, 3, 4, 1, 2],
	[20, 8, 12, 13, 4, 4, 8, 5]

]

// with EC6
for (let a of nested_arrays) {
	let ar = [...new Set(a)]
	console.log(ar.join(" "))
}