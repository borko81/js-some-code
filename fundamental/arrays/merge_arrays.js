function solve(arr1, arr2) {
	let result = [];
	for (let i in arr1) {
		if (i % 2 == 0) {
			result.push(parseInt(arr1[i]) + parseInt(arr2[i]))
		} else {
			result.push(arr1[i] + arr2[i])
		}
	}
	return result.join('-')
}

console.log(solve(['5', '15', '23', '56', '35'],
	['17', '22', '87', '36', '11']))