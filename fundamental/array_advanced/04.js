function mesh_sorting(array) {
	let smallest = [...array].sort((a, b) => a - b)
	let bigger = [...array].sort((a, b) => b - a)

	let result = []
	for (let i in bigger) {
		result.push(bigger[i])
		result.push(smallest[i])
	}
	return [...new Set(result)].join(" ")
}

console.log(
	mesh_sorting(
		[1, 21, 3, 52, 69, 63, 31, 2, 18, 94]
	)
)